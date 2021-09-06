const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  if (new Date() > new Date(year, month)) {
    window.alert("Your card is expired!");
    return;
  }

  const cvv = document.getElementById("cvv").value;
  if (!/^[0-9]{3,4}$/.test(cvv)) {
    window.alert("Invalid CVV. It must be 3 or 4 digits!");
    return;
  }

  const cnumber = document.getElementById("cnumber").value;
  if (!isValid(cnumber)) {
    window.alert("Invalid card number!");
    return;
  }

  window.alert("Thanks for the payment!");
}

function isValid(cnumber) {
  return true;
}
