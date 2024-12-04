const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

// Character Sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Generate Password Function
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let characters = "";

  if (uppercaseCheckbox.checked) characters += uppercaseChars;
  if (lowercaseCheckbox.checked) characters += lowercaseChars;
  if (numbersCheckbox.checked) characters += numberChars;
  if (symbolsCheckbox.checked) characters += symbolChars;

  if (characters === "") {
    alert("Please select at least one complexity option!");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Event Listeners
generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});