# WEB Password Generator

A simple web application for generating random passwords.

## Table of Contents

- [About](https://github.com/leovidith/WEB-Password-Generator/blob/main/README.md#about)
- [Features](https://github.com/leovidith/WEB-Password-Generator/blob/main/README.md#features)
- [Technologies Used](https://github.com/leovidith/WEB-Password-Generator/blob/main/README.md#technologies-used)
- [Setup](https://github.com/leovidith/WEB-Password-Generator/blob/main/README.md#setup)
- [Usage](https://github.com/leovidith/WEB-Password-Generator/blob/main/README.md#usage)
- [License](https://github.com/leovidith/WEB-Password-Generator/blob/main/README.md#license)

## About

This project is a web-based password generator that allows users to create strong, random passwords with customizable options.

## Features

- Generate random passwords of specified length
- Include or exclude uppercase letters, lowercase letters, numbers, and special characters
- Copy generated password to clipboard

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/leovidith/WEB-Password-Generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd WEB-Password-Generator
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Open the web application.
2. Set your desired password criteria (length, character types).
3. Click the "Generate Password" button to create a new password.
4. Copy the generated password to your clipboard using the "Copy" button.

## Driver Code

Below is a snippet of the JavaScript code responsible for generating the password:

```javascript
function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-[]{}|;:'\",.<>?/";

    let possibleCharacters = "";
    if (hasUppercase) possibleCharacters += upperCase;
    if (hasLowercase) possibleCharacters += lowerCase;
    if (hasNumbers) possibleCharacters += numbers;
    if (hasSymbols) possibleCharacters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        password += possibleCharacters[randomIndex];
    }
    return password;
}
```
