import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forgot from './Forgot/Forgot';
import PageTitle from '../Shared/PageTitle/PageTitle';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const navigate = useNavigate()
    const emailRef = useRef('')   //amra onBlur er moto useRef diyeo input theke value ante pari. ta eikhane dekhano hoyeche.tobe ekhane form ta submit korlei amra inptu er datagulo pabo.
    const passwordRef = useRef('')
    const handleFormSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (loading) {   //amra shudhu loading e dekhabo sending e dekhabo na.
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {


            /*     toast("sent mail") */

            await sendPasswordResetEmail(email)
            navigate("/forgot")
        }
        else {
            toast('please enter your email address')
        }


    }

    return (



        <div className='container w-50 mx-auto mt-2'>
            <PageTitle title="Login"></PageTitle>

            <h2>Login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/*   <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />

                </Form.Group> */}
                <Button className="mb-3 w-50 " variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <p> New to Genius Car ! <Link to={"/signup"} className='text-decoration-none'><span className='text-danger pe-auto '>create a account</span> </Link></p>   {/* ekhane pe-auto holo cursor pornter jake bootstrpa react e bole pointer events tobe ei events jodi kono link e use korte hoy tahole setake anchor type hote hobe jmon amader a tag Link,customLink egula annchor tag. */}
            <p><span onClick={() => toast("please enter your email and click to the reset password")} className='text-danger pe-auto '>Forgot password?</span> <button className='btn btn-link text-decoration-none' onClick={resetPassword}>reset password </button></p>   {/* ekhane pe-auto holo cursor pornter jake bootstrpa react e bole pointer events tobe ei events jodi kono link e use korte hoy tahole setake anchor type hote hobe jmon amader a tag Link,customLink egula annchor tag. */}

            {errorElement}
            <ToastContainer />
            {

            }
            <SocialLogin />

        </div>

    );
};

export default Login;