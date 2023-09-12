import React, { useEffect, useState } from 'react';
import  styled  from 'styled-components';
import { theme } from '../utils/constants';
import { Label } from '../components/label';
import { Input } from '../components/input';
import { useForm } from "react-hook-form";
import IconEyeClose from '../components/icon/IconEyeClose';
import IconEyeOpen from '../components/icon/IconEyeOpen';
import { Field } from '../components/field';
import { Button } from '../components/button';
import { LoadingSpinner } from '../components/loading';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
// import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { NavLink, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import AuthentiocationPage from './AuthentiocationPage';


const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });

    const colRef = collection(db, "user");
        await addDoc(colRef, {
            name: values.fullname,
            email: values.email,
            password: values.password,
        });
        toast.success("Register sussessfuly !!!");
        navigate("/")
  };
 const [togglePassword, setTogglePassword] = useState(false);
    useEffect(() => {
        const arrErroes = Object.values(errors);
        if (arrErroes.length > 0) {
            toast.error(arrErroes[0]?.message, {
                pauseOnHover: false,
                delay: 0,
            });
        }
    }, [errors]);
  return (
    <AuthentiocationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
           <Field>
                   <Label htmlFor="password" className='label'>password address</Label>
                    <Input
                type={togglePassword ? "text" :"password"}
                      name="password"
                      placeholder='Enter your password'
                      // hasIcon 
                      control={control}
                        >
                      {!togglePassword ? (
                          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
                      ) : (
                          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
                      )}  
                      
                  </Input>
            </Field>
        <div className="have-account" style={{marginBottom: 20}}>
          You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>{" "}
        </div>
        <Button
          type="submit"
          className="w-full max-w-[300px] mx-auto"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuthentiocationPage>
  );
};


export default SignUpPage;