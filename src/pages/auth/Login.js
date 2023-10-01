import { useEffect, useRef, useState } from "react";
import {AiFillFacebook} from 'react-icons/ai'
import React from 'react'
import Input from "../../components/Input";
import { login } from "../../firebase";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { LoginSchema } from "../../validation";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export default function Login() {

    const user = useSelector(state => state.auth.user)
    const location = useLocation()
    // const navigate = useNavigate()
    const ref = useRef()
  
    useEffect(() => {
      let images = ref.current.querySelectorAll('img'),
        total = images.length,
        current = 0
  
        const slider = () => {
            images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
            images[current].classList.remove('opacity-0')
            current = current === total - 1 ? 0 : current + 1
        }
        
        slider()
  
      let interval = setInterval(slider, 3000)
  
      return () => {
        clearInterval(interval)
      }
  
    }, [ref])

    if(user) {
      return <Navigate to={location.state?.return_url || '/'} replace={true}/>
    }

    const handleSubmit = async (values, actions) => {
      await login(values.username, values.password)
    }

    const images = [
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
    ]
  
    return (
      <div className="w-full h-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center">

        <Helmet>
            <title>Login • Instagram</title>
        </Helmet>

        <div className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length: 468.32px_634.15px] bg-[top_left_-46px]" ref={ref}>
          <div className="w-[250px] h-[538.84px] absolute top-[27px] right-[18px]">
            {images.map((image, key) => (
              <img key={key} className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={image} alt="" />
            ))}
          </div>
        </div>
  
        <div className="w-[350px] grid gap-y-3 shadow-sm">
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <div className="flex justify-center mb-8">
          <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" />
          </div>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({isSubmitting, isValid, dirty, values}) => (
              <Form className="grid gap-y-1.5">
                <Input name="username" type="text" label="Phone number, username, or email"/>
                <Input name="password" type="password" label="Password"/>
                <Button disabled = {!isValid || !dirty || isSubmitting} type="submit">
                  Log In
                </Button>
                <Separator/>
                <a href="" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mb-2">
                <AiFillFacebook size={20}/>
                Log in with Facebook
                </a>
                <a href="" className="flex justify-center items-center text-xs text-link">
                  Forgot password?
                </a>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bg-white border p-4 text-center text-sm">
          Don't have an account? <Link to='/auth/register' className="text-brand font-semibold">Sign up</Link>
        </div>
        </div>
      </div>
    );
}
