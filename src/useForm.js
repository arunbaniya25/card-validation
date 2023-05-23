// import { useState } from "react";
// import Validatedata from "./Validatedata";


// const useForm = () => {
//   const [values, setValues] = useState({
//     cardName: "",
//     cardNumber: "",
//     cardExpiration: "",
//     cardSecurityCode: "",
//     focus: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleFocus = (e) => {
//     setValues({
//       ...values,
//       focus: e.target.name === "cardSecurityCode" ? "cvc" : e.target.name,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //setErrors(validateInfo(values));
//     // if (errors.cname && errors.cnumber && errors.cexp && errors.ccvv) {
//     //   var form_div = document.getElementById("form_div");
//     //   var otpField = document.createElement("input");
//     //   var otpValidate = document.createElement("button");
//     //   otpField.setAttribute("type", "text ");
//     //   otpField.setAttribute("size", 20);
//     //   otpField.setAttribute("placeholder", "Enter OTP");
//     //   otpValidate.setAttribute("type", "submit");
//     //   otpValidate.setAttribute("name", "submit");
//     //   otpValidate.setAttribute("size", "100");
//     //   otpValidate.setAttribute("value", "Pay");
//     //   form_div.appendChild(otpField);
//     //   form_div.appendChild(otpValidate);
//     // }
//     console.log("chalyo");
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     setErrors(Validatedata(values));
//   };

//   return {
//     handleChange,
//     handleFocus,
//     handleSubmit,
//     handleClick,
//     values,
//     errors,
//   };
// };

// export default useForm;
