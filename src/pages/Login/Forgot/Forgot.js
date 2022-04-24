import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import forgotImage from '../../../images/social icon/forgot.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Forgot.css'
import { Button, Modal } from 'react-bootstrap';

const Forgot = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        handleShow()
    }, [])


    const navigate = useNavigate();
    const backlogin = () => {
        navigate('/login')
    }

    return (
        <div className='forgot'>

            <img src={forgotImage} alt="" />
            <div className='forgot-text'>
                <h6> <i>
                    please check your email,to get password reset link. <br />
                    if you could not find the link please check your <br />

                    <span style={{ color: "red" }}>Spam </span> Also.</i>
                </h6>


            </div>
            <button className='login-button' onClick={backlogin}>Log In</button>
            <ToastContainer />
            <Modal

                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Genius Car Services</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your password reset email has been set. <br />
                    Follow the instruction below. <br />
                    Thank You.
                </Modal.Body>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal>
        </div>
    );
};

export default Forgot;