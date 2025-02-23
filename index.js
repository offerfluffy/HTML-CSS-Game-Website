function checkEmail() {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) alert("No symbol @");
  else if (!email.includes(".")) alert("No symbol .");
  else alert("Everything is fine");
}
