import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../pages/Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>        //amader ekhane implement kora ache je jodi amra amader user ke pawa jay tahole amra taderke amader puro website e ghurar permission dibo ebong se jekhan theke amader login page e ashchilo take amra sekhane pathabo kintu amra jokhon kono user ke pai tokhon amra take thik e  ghurar permission di ebong tader ke amader jekhan theke eshece sekhane pathai.kintu amader user kcihu interaction korar por reload dile take reload page e niye jay.tai kintu user ta ache.etar karon holo amader system jokhon firebase ke jigges korte jay je user ta ache ki nai er moddhe amader function e user null ashe tai jehetu user null ebong amra set kore rekheci je user na thakle amra take login page e pathabo tai user thakleo se reload dile take login page  e pathaya dey.tai amra ekihane eta thik korar jonno amra ekhane loading niye kaj korte pari. mane jotokkhon na user er call ashce firebase reply te pathacche user ache ki nai seta cholte cholte to laoding ta chole tai amra ekhane lading ta niye kaj korte pari.tai jokhon user ta ke firebase jokhon pathabe je user ta ache tokhon loading ta automatic shesh.ebong amader user ke paiche ar amra jani user ke paile jekhan theke ashce sekahne niye jabe. tai amader ar reload dile laoding page e nibe na.
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0].providerId === "password") {
        if (!user.emailVerified) {
            return <div>
                <h2 className='text-danger'>Your Email is not Verified </h2>
                <h3 className='tex-success'>Please Verify your Email</h3>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                    Verify email
                </button>
            </div>
        }
    };
    return children;
};

export default RequireAuth;