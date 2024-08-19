function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function validator(e) {
  let emailInput = document.querySelector("#email-input");
  e.preventDefault();

  let email = emailInput.value;

  if (validateEmail(email)) {
    alert("Thank you for subscribing!");
  } else {
    alert("Please enter a valid email address.");
  }
}
