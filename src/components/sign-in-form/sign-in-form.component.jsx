import { useState } from "react";
import { useDispatch } from "react-redux";
 
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, ButtonsContainer} from "./sign-in-form.styles";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Invalid email or password. Please check your credentials.");
          break;
        case "auth/user-not-found":
          alert("User not found. Please check your email.");
          break;
        case "auth/wrong-password":
          alert("Wrong password. Please check your password.");
          break;
        case "auth/too-many-requests":
          alert("Too many requests. Please try again later.");
          break;
        default:
          alert("An unexpected error occured. Please try again");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          id=""
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id=""
          required
          onChange={handleChange}
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
