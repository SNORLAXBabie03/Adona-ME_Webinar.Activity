function generatePassword() {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
  let passwordLength = document.getElementById("passwordLength").value;
  let includeLowercase = document.getElementById("includeLowercase").checked;
  let includeUppercase = document.getElementById("includeUppercase").checked;
  let includeNumbers = document.getElementById("includeNumbers").checked;
  let includeSymbols = document.getElementById("includeSymbols").checked;

  let characterSet = "";

  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumbers) characterSet += numbers;
  if (includeSymbols) characterSet += symbols;

  if (characterSet === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  document.getElementById("generatedPassword").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("generatedPassword");
  passwordField.select();
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard!");
}
