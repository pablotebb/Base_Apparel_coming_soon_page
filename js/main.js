// Data entry
const form = document.querySelector(".section-presentation__form");
const form_input = document.querySelector(".section-presentation__form input");
// Errors
const form_text_error = document.querySelector(
  ".section-presentation__form--error"
);
const form_image_error = document.querySelector(
  ".section-presentation__form div div"
);

// Submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  check_email();
});

function check_email() {
  regExpr =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExpr.test(form_input.value)) {
    // valid email
    remove_error();
  } else {
    // incorrect email
    show_error();
  }
}

function show_error() {
  form_input.style.border = "1px solid red";
  form_text_error.innerHTML = "Please provide a valid email";
  form_text_error.style.color = "hsl(0, 93%, 68%)";
  form_image_error.style.visibility = "visible";
}

function remove_error() {
  form_input.style.border = "1px solid hsl(0, 80%, 86%)";
  form_text_error.innerHTML = "";
  form_text_error.style.color = "";
  form_image_error.style.visibility = "hidden";
}
