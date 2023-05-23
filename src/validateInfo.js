// import valid from "card-validator";
// import { useState, useEffect } from "react";
// import firebase from "./firebase";


// //for validating the data which was input
// export default function validateInfo(values) {
//   let errors = {};
//   let creditCard = valid.number(values.cardNumber);

//   creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
//   creditCard.cvv = valid.cvv(values.cardSecurityCode);
//   creditCard.cardholderName = valid.cardholderName(values.cardName);

//   errors.show = true;
//   errors.variant = "danger";
//   errors.message = "An unknown error occured. Please try again later";
//   errors.cname = false;
//   errors.cnumber = false;
//   errors.cexp = false;
//   errors.ccvv = false;

//   //Card CVV expiration
//   if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
//     errors.variant = "filled";
//     errors.message = "Card CVC is not complete";
//   } else if (creditCard.cvv.isValid) {
//     errors.ccvv = true;
//   } else {
//     errors.message = "CVC is invalid";
//   }

//   //Card Expiration Verification
//   if (values.cardExpiration === null || !values.cardExpiration.trim()) {
//     errors.message = "Expiration date is not complete";
//   } else if (creditCard.expirationDate.isValid) {
//     errors.cexp = true;
//   } else {
//     errors.message = "Expiration date is invalid";
//   }

//   //Card Number Verification
//   if (values.cardNumber === null || !values.cardNumber.trim()) {
//     errors.message = "Credit card number is not complete";
//   } else if (creditCard.isValid) {
//     errors.cnumber = true;
//   } else {
//     errors.message = "Credit card number is invalid";
//   }

//   //Cardholder Name Verification
//   if (values.cardName === null || !values.cardName.trim()) {
//     errors.message = "Cardholder name is not complete";
//   } else if (creditCard.cardholderName.isValid) {
//     errors.cname = true;
//   } else {
//     errors.message = "Cardholder name is invalid";
//   }

//   if (
//     errors.cname === "Arun" &&
//     errors.cnumber === "4235590005777429" &&
//     errors.cexp === "12/23" &&
//     errors.ccvv === "123"
//   ) {
//     /**function otp() {
//       var form_div = document.getElementById("form_div");
//       var otpField = document.createElement("input");
//       var otpValidate = document.createElement("button");
//       otpField.setAttribute("type", "text ");
//       otpField.setAttribute("size", 20);
//       otpField.setAttribute("placeholder", "Enter OTP");
//       otpValidate.setAttribute("type", "submit");
//       otpValidate.setAttribute("name", "submit");
//       otpValidate.setAttribute("size", "10");
//       form_div.appendChild(otpField);
//       form_div.appendChild(otpValidate);
//     }*/

//     errors.variant = "success";
//     errors.message =
//       "An OTP has been sent to your number ******82. Please enter it";
//   }

//   return errors;
// }
