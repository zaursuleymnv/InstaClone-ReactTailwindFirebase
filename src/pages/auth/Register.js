import {AiFillFacebook} from 'react-icons/ai'
import React from 'react'
import Input from "../../components/Input";
import { register } from "../../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { RegisterSchema } from "../../validation";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import { Helmet } from 'react-helmet';


export default function Register() {

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = async (values, actions) => {
      const response = await register(values)

      if(response) {
        navigate(location.state?.return_url || '/', {
          replace: true
        })
      }

    }
  
    return (
        <div className="w-[350px] grid gap-y-3 shadow-sm">
          <Helmet>
            <title>Register • Instagram</title>
          </Helmet>
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <div className="flex justify-center mb-4">
          <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" />
          </div>
          <p className='text-[#8e8e8e] text-[17px] font-semibold text-center mb-6'>
            Sign up to see photos and videos from your friends.
          </p>
          <Button>
            <AiFillFacebook size={20}/>
              Log in with Facebook
          </Button>
          <Separator/>
          <Formik
            initialValues={{
              email: '',
              full_name: '',
              username: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}
          >
            {({isSubmitting, isValid, dirty, values}) => (
              <Form className="grid gap-y-1.5">
                <Input name="email" type="text" label="Mobile Number or Email"/>
                <Input name="full_name" type="text" label="Full Name"/>
                <Input name="username" type="text" label="Username"/>
                <Input name="password" type="password" label="Password"/>
                <p className='text-xs text-[#8e8e8e] py-2 text-center'>
                  People who use our service may have uploaded your contact information to Instagram. <a href="#" className='text-[#00376B]'>Learn More</a>
                <br /><br />
                  By signing up, you agree to our <a href="#" className='text-[#00376B]'>Terms</a>. Learn how we collect, use and share your data in our <a href="#" className='text-[#00376B]'>Privacy Policy</a> and how we use cookies and similar technology in our <a href="#" className='text-[#00376B]'>Cookies Policy</a>.
                </p>
                <Button disabled = {!isValid || !dirty || isSubmitting} type="submit">
                  Next
                </Button>
                {/* <p className='text-xs text-[#8e8e8e] py-2 mt-6 text-center'>
                  You can also <a href="#" className='text-[#00376B]'>report content you believe is unlawful</a> in your country without logging in.
                </p> */}
              </Form>
            )}
          </Formik>
        </div>
        <div className="bg-white border p-4 text-center text-sm">
        Have an account? <Link to='/auth/login' className="text-brand font-semibold">Log in</Link>
        </div>
        </div>
    );
}
