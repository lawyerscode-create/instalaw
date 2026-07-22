(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("form");
  const loadingMsg = document.getElementById("loadingMsg");
  const errorMsg = document.getElementById("errorMsg");
  const pageHead = document.getElementById("pageHead");
  const fieldForm = document.getElementById("fieldForm");
  const fieldsContainer = document.getElementById("fieldsContainer");

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

  const storageKey = (fieldId) => `instaforms__${slug}__${fieldId}`;

  formData.fields.forEach(field => {
    const group = document.createElement("div");
    group.className = "field-group";

    const label = document.createElement("label");
    label.setAttribute("for", "f_" + field.id);
    label.textContent = field.label;
    group.appendChild(label);

    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = "text";
    }
    input.id = "f_" + field.id;
    input.name = field.id;

    const saved = localStorage.getItem(storageKey(field.id));
    if (saved !== null) input.value = saved;

    group.appendChild(input);
    fieldsContainer.appendChild(group);
  });

  fieldForm.style.display = "block";

  fieldForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formData.fields.forEach(field => {
      const input = document.getElementById("f_" + field.id);
      localStorage.setItem(storageKey(field.id), input.value);
    });
    window.location.href = "draft.html?form=" + encodeURIComponent(slug);
  });

  document.getElementById("clearBtn").addEventListener("click", function () {
    formData.fields.forEach(field => {
      localStorage.removeItem(storageKey(field.id));
      const input = document.getElementById("f_" + field.id);
      if (input) input.value = "";
    });
  });
})();
