(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("form");
  const loadingMsg = document.getElementById("loadingMsg");
  const errorMsg = document.getElementById("errorMsg");
  const pageHead = document.getElementById("pageHead");
  const draftContent = document.getElementById("draftContent");
  const editLink = document.getElementById("editLink");

  const formData = (typeof FORMS_DATA !== "undefined") ? FORMS_DATA.find(f => f.slug === slug) : null;

  loadingMsg.style.display = "none";

  if (!formData) {
    errorMsg.style.display = "block";
    return;
  }

  document.title = formData.title + " — InstaForms";
  document.getElementById("shelfLabel").textContent = formData.shelf;
  document.getElementById("formTitle").textContent = formData.title;
  document.getElementById("actLabel").textContent = formData.act;
  pageHead.style.display = "block";
  editLink.href = "form-fill.html?form=" + encodeURIComponent(slug);

  const FREE_LIMIT = 2;
  const freeViewedKey = "instaforms__freeDraftsViewed";
  const paidKey = (s) => `instaforms__paid__${s}`;

  function getFreeViewed() {
    try { return JSON.parse(localStorage.getItem(freeViewedKey)) || []; }
    catch (e) { return []; }
  }
  function markFreeViewed(s) {
    const list = getFreeViewed();
    if (!list.includes(s)) {
      list.push(s);
      localStorage.setItem(freeViewedKey, JSON.stringify(list));
    }
  }
  function hasPaid(s) {
    return !!localStorage.getItem(paidKey(s));
  }

  function renderDraft() {
    const storageKey = (fieldId) => `instaforms__${slug}__${fieldId}`;
    let html = formData.template;
    formData.fields.forEach(field => {
      const value = localStorage.getItem(storageKey(field.id)) || "";
      const escaped = value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
      const token = new RegExp("\\{\\{" + field.id + "\\}\\}", "g");
      html = html.replace(token, escaped);
    });
    draftContent.innerHTML = html;
    draftContent.style.display = "block";
  }

  function renderPaywall() {
    draftContent.innerHTML = `
      <div style="text-align:center; padding:20px 10px;">
        <h2 style="margin-bottom:10px;">Unlock This Draft</h2>
        <p class="sub-center" style="margin-bottom:26px;">
          You've used your 2 free drafts. Unlock <strong>${formData.title}</strong> for a one-time fee.
        </p>
        <p style="font-family:'Playfair Display'; font-size:34px; color:var(--leather); margin-bottom:26px;">
          ₹${formData.price}
        </p>
        <button id="payNowBtn" style="
          font-family:'IBM Plex Mono'; font-size:13px; letter-spacing:.08em; text-transform:uppercase;
          background:var(--leather); color:var(--parchment); border:none; padding:15px 34px;
          border-radius:3px; cursor:pointer;">
          Pay ₹${formData.price} &amp; Unlock →
        </button>
        <p id="payError" style="color:#a33; font-size:14px; margin-top:16px; display:none;"></p>
      </div>
    `;
    draftContent.style.display = "block";

    document.getElementById("payNowBtn").addEventListener("click", startPayment);
  }

  async function startPayment() {
    const payError = document.getElementById("payError");
    payError.style.display = "none";

    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const order = await orderRes.json();
      if (!orderRes.ok) throw new Error(order.error || "Could not start payment");

      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "InstaForms",
        description: formData.title,
        handler: async function (response) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                slug: slug,
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.verified) {
              localStorage.setItem(paidKey(slug), verifyData.token);
              renderDraft();
            } else {
              payError.textContent = "Payment could not be verified. Please contact support with your payment ID: " + response.razorpay_payment_id;
              payError.style.display = "block";
            }
          } catch (e) {
            payError.textContent = "Payment succeeded but verification failed. Please contact support with payment ID: " + response.razorpay_payment_id;
            payError.style.display = "block";
          }
        },
        theme: { color: "#c6a04a" },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (e) {
      payError.textContent = e.message || "Something went wrong starting the payment.";
      payError.style.display = "block";
    }
  }

  // ----- Decide: free, already paid, or paywall -----
  if (hasPaid(slug)) {
    renderDraft();
  } else {
    const freeViewed = getFreeViewed();
    if (freeViewed.includes(slug) || freeViewed.length < FREE_LIMIT) {
      markFreeViewed(slug);
      renderDraft();
    } else {
      renderPaywall();
    }
  }

  document.getElementById("copyBtn").addEventListener("click", () => {
    const text = draftContent.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("copyBtn");
      const original = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = original), 1500);
    });
  });
})();