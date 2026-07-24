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
