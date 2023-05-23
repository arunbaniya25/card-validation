import React from "react";
import { useState, useEffect } from "react";

import { app, database, auth } from "../fire";
import {
  getDocs,
  getDoc,
  collection,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  setDoc,
  Transaction,
  addDoc,
} from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// import useForm from "../useForm";
import {
  Button,
  Form,
  Alert,
  Row,
  Col,
  Navbar,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { async } from "@firebase/util";

// import { cardholderName } from "card-validator/dist/cardholder-name";
// import { cardNumber } from "card-validator/dist/card-number";
// import { expiryDate } from "card-validator/dist/expiration-date";

//the starting of the card form
const CreditCardForm = () => {
  //listing the details to be added to be stored in the local variable
  const [users, setUsers] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: "",
    phoneNumber: "",
    blocked: "",
    focus: "",
    otpInput: "",
    notification: "",
  });

  //to capture the errors
  const [errors, setErrors] = useState({});

  //for changing the focus on the card on which the card rotates while changing the field
  const handleFocus = (e) => {
    setUsers({
      ...users,
      focus: e.target.name === "cvv" ? "cvc" : e.target.name,
    });
  };

  //local variable
  let name, value;
  //to store the value of entered by the user in the input to the
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUsers({ ...users, [name]: value });
  };

  //to call the function while submitting thte data

  // to fetch the data

  const collectionRef = collection(database, "users");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return item.data();
        })
      );

      const usrs = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setData(usrs);
    });
  };

  //calling the firebase database for displaying the data

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    // database.child("card_details").on("value", (snapshot) => {
    //   if (snapshot.val() !== null) {
    //     setData({ ...snapshot.val() });
    //   } else {
    //     setData({});
    //   }
    // });
    // return () => {
    //   setData({});
    // };
    uuuu();
    generateRecaptcha();
  }, [isValid]);

  // ======================================================= Phone Authentication =====================================================

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          validate();
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  //for validating the data

  const uuuu = async () => {
    const q = query(
      collection(database, "users"),
      where("phoneNumber", "==", "9808392262")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      console.log(doc.id);
      console.log(doc.data().blocked);
      // setDoc(doc(database, "users", doc.id), { notifications: "" });
    });
  };

  const validate = (event) => {
    event.preventDefault();

    {
      data.forEach((user) => {
        // console.log(user.data);
        // try {
        //   if (users.cardholderName === user.data.cardholderName) {
        //     console.log("Cardholder name is  complete");
        //   }

        //   if (users.cardNumber === user.data.cardNumber) {
        //     console.log("Card Number is validated");
        //   }

        //   if (users.expiryDate === user.data.expiryDate) {
        //     console.log("Expiry Date is validated");
        //   }

        //   if (users.cvv === user.data.cvv) {
        //     console.log("CVV is validated");
        //   }
        // } catch (error) {
        //   console.log(error.message);
        // }

        if (
          users.cardholderName === user.data.cardholderName &&
          users.cardNumber === user.data.cardNumber &&
          // users.expiryDate === user.data.expiryDate &&
          users.cvv === user.data.cvv
        ) {
          setIsValid(true);
          // generateRecaptcha();

          // let appVerifier = window.recaptchaVerifier;
          // signInWithPhoneNumber(auth, user.data.phoneNumber, appVerifier)
          //   .then((confirmationResult) => {
          //     window.confirmationResult = confirmationResult;
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
          console.log(user.data.phoneNumber);

          const phoneNumber = "+977" + user.data.phoneNumber;
          const appVerifier = window.recaptchaVerifier;

          console.log(appVerifier);

          signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;

              // ...
            })
            .catch((error) => {
              // Error; SMS not sent
              // ...
              console.log(error);
            });
        }
      });
      if (isValid) {
        alert("Please enter the fields with correct data");
      } else {
        alert(
          "An OTP has been sent to your registered number. Please enter it"
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (users.otpInput === "636004") {
    //   alert("Your Transaction is Successfull.");
    // } else {
    //   alert("Please enter the correct OTP sent to your phone.");
    // }
    // console.log("chalyo");
    // if (users.otpInput !== null) {
    //   setUsers({
    //     cardholderName: "",
    //     cardNumber: "",
    //     expiryDate: "",
    //     cvv: "",
    //     email: "",
    //     phoneNumber: "",
    //     blocked: "",
    //     otpInput: "",
    //   });
    //   //to push the data to the firebase database
    //   const res = await fetch(
    //     "https://my-fyp-ede61-default-rtdb.firebaseio.com/notifications/notification-blocked.json",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         notification: "{data.name} tried to make a transaction",
    //       }),
    //     }
    //   );
    // }

    const code = users.otpInput;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        console.log(user.uid);
        console.log(data);

        if (user.phoneNumber === 9808392262) {
          const collectionRef = collection(database, "notifications");
          addDoc(collectionRef, {
            message:
              "User of phone number" + user.phoneNumber + "made a transaction",
          });
          alert("The transaction is unsuccessful");
        } else {
          addDoc(collectionRef, {
            message:
              "User of phone number" +
              user.phoneNumber +
              "tried to make a transaction from blocked card",
          });
          alert("Transaction is successful");
        }

        // let not = "";

        // const requiredRef = doc(database, "users", data.phoneNumber);
        // const requiredSnap = getDoc(requiredRef);

        // console.log(requiredSnap);

        // const q = query(
        //   collection(database, "users"),
        //   where("phoneNumber", "==", "9808392262")
        // );

        // const querySnapshot = getDocs(q);
        // querySnapshot.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        //   if (doc.data().blocked === "no") {
        //     alert("The transaction was successful");
        //   } else {
        //     alert("The transaction was unsuccessful");
        //   }
        // });

        // updateDoc(requiredRef, {
        //   notifications: arrayUnion("greater_virginia"),
        // });

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <div>
      {/* navigation bar  */}
      <nav className="navbar navbar-light bg-white">
        <div className="nav-container">
          <Alert id="alertMessage" variant="filled" show={errors.show}>
            {errors.message}
          </Alert>
        </div>
      </nav>
      <div>{/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}</div>
      <div className="container">
        <div className="box justify-content-center align-items-center container">
          <div className="paymentDetails">
            <div className="product__details">
              <h1 className="product__details-heading">Total Payment</h1>
              <span className="product__details-sub-heading">
                <span>Price: </span>
                <span
                  className="product__details-basket-price"
                  data-product-price
                >
                  $1350
                </span>
              </span>
            </div>
          </div>
          <div className="formDiv" id="form_div">
            <div className="creditCard">
              {/* /**Cards section which shows the data in the card */}
              <Cards
                cvc={users.cvv}
                expiry={users.expiryDate}
                focused={users.focus}
                name={users.cardholderName}
                number={users.cardNumber}
              />
            </div>
            {/* form section for data input */}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  placeholder="Cardholder Name"
                  value={users.cardholderName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={users.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                  required
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="Expiration Date"
                      value={users.expiryDate}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cvv"
                      name="cvv"
                      placeholder="Security Code"
                      value={users.cvv}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="validate-button">
                <Button
                  size={"block"}
                  id="validateButton"
                  type="submit"
                  onClick={validate}
                >
                  Validate
                </Button>
              </div>

              <div className="otp">
                <FormGroup>
                  <span className="otpBox">
                    <FormControl
                      name="otpInput"
                      type="text"
                      placeholder="Enter OTP code"
                      value={users.otpInput}
                      onChange={handleChange}
                    />
                  </span>
                </FormGroup>

                <span className="otpButton">
                  <Button size={"block"} id="otpButton" type="submit">
                    Pay
                  </Button>
                </span>
              </div>
              <div id="recaptcha-container"></div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
