// import valid from "card-validator";
// import { useState, useEffect } from "react";
// import fireDb from "./fire";

// export default function Validate(values) {
//   let errors = {};

//   const [data, setData] = useState({});

//   useEffect(() => {
//     fireDb.child("card_details").on("value", (snapshot) => {
//       if (snapshot.val() !== null) {
//         setData({ ...snapshot.val() });
//       } else {
//         setData({});
//       }
//     });
//     return () => {
//       setData({});
//     };
//   }, []);
  
//   let creditCard = values.cardNumber;
//   creditCard.expirationDate = values.cardExpiration;
//   creditCard.cvv = values.cardSecurityCode;
//   creditCard.cardholderName = values.cardName;

//   errors.show = true;
//   errors.variant = "danger";
//   errors.message = "An unknown error occured. Please try again later";
//   errors.cname = false;
//   errors.cnumber = false;
//   errors.cexp = false;
//   errors.ccvv = false;

//   {
//     Object.keys(data).map((id) => {
//       //Cardholder Name Verification
//       console.log(data[id].cardholderName);
//       if (values.cardName === null || !values.cardName.trim()) {
//         errors.message = "Cardholder name is not complete";
//       } else if (
//         values.creditCard === data[id].cardholderName ||
//         creditCard.cardholderName.isValid
//       ) {
//         errors.cname = true;
//       } else {
//         errors.message = "Cardholder name is invalid";
//       }
//     });
//   }

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

//   if (errors.cname && errors.cnumber && errors.cexp && errors.ccvv) {
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
