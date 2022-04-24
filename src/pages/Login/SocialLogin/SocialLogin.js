import React from 'react';
import googleIcon from '../../../images/social icon/google_g_icon.png'
import facebookIcon from '../../../images/social icon/facebook-icon.png'
import gitHubIcon from '../../../images/social icon/github.png'
import './SocialLogin.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = (                  //etake state declare koreo kora jeto.
            <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>     {/* onek somoy errorta nao thakte pare.ar ekhane ekta error na 2ta error khaile ektai khabe tai 2tai diite hobe. */}
            </div>
        );
    }



    if (user || user1) {
        navigate("/home")
    }











    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-danger'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-danger'></div>
            </div>
            {errorElement}
            <div >

                <div className='button-div'>
                    <button onClick={() => signInWithGoogle()} className=' w-50 py-2 google-btn mx-3 my-3'>
                        <img src={googleIcon} alt="" />
                        Sign In with Google</button>


                    <button className='  w-50 py-2 facebook-btn  mx-3 my-3'>
                        <img className='fb-icon mx-2' src={facebookIcon} alt="" />
                        Sign In with Facebook</button>

                </div>

                <button onClick={() => signInWithGithub()} className='github-icon w-50 py-2  my-3 mx-3'>
                    <img className='mx-2 ' style={{ width: "30px", height: "32px" }} src={gitHubIcon} alt="" />
                    Sign In with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;