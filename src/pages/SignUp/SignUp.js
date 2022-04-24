import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })      //ekhane ekhon eksathe user create howar somoy  eksathe emailverification chole jabe.etai hocche react firebase hooks use  korar shubidha.egual docs e lekha ache.
    const [updateProfile, updating, userProfileError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const handleSignUpFormSubmit = async (event) => {
        event.preventDefault()             //form er ekta default behaviour ache submit korte gele ghuranti amre eita korle sei ajaira ghuranti marena.
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)  //ekhane amra user create howa projont wait korbo             //ekhane amader ei lineta asynchronous vabe chole tai amra eta implement howar age porer line e jawar age wait korbo.
        await updateProfile({ displayName: name }); //ekhane amra profile update howa porjonto wait korbo.  //ekhane amra 2 ta kaj korte pari.ekta holo jehetu display name object akare ache ar amra amader user er name ta nichi tai ebong ei display naeme er ekta value set korte hobe tai amra ekhane display name er value hishebe name ke diye dichi,arekta kaj kora jeto seta hocche amra jekhane name ta ncihi sekhane amra sekhane amra sei name er jaygay variable tar name display name kore dileo hoito.video 62>7 dkehle valo bujha jabe.
        alert('Updated profile');
        /*   if (agree) {
  
              createUserWithEmailAndPassword(email, password)
          } */
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        navigate("/home")
    }
    return (
        <div className='register-form'>
            <h2 className='p-5 '>Sign Up</h2>
            <form onSubmit={handleSignUpFormSubmit}>
                <input type="text" name="name" id="" placeholder='your Name' />
                <input type="email" name="email" id="" placeholder="Email" required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />   {/*  ekhane amra conditional css korbo tai agree namer ekta state set korlam ebong tar initail value dilam false.ekhon jokhon amader ei checkbox e keu click korbe tokhon amader sei state er man jeta thakbe amra setake ultaya dilam.mane setar man jeta thakbe tar ultata hoye jabe */}
                {/* <label className={agree ? 'text-success' : ""} htmlFor="terms">Accept Terms & Conditions</label> */}   {/* ekhane amra conditionl css class dekhchi echarao amra css file e css class likhe setake ekhane implement korte pari. */}
                <label className={`ps-2 ${agree ? 'text-success' : ""}`} htmlFor="terms">Accept Terms & Conditions</label>
                {/* {
                    agree ? <input className='bg-primary w-50  mx-auto d-block mt-2 submit ' type="submit" value="Sign Up" /> : ''
                }           eta by default inline chilo tai etake margin auto korle majhkhane ashchilo na. tai etake display block kore deya hoiche. */}

                <input
                    disabled={!agree}  //ekhane disabled ta react er default ekta jinish jeta checkbox  majhe moddhe  kaje lage.  //ekhane user joid not agree thake mane se jodi agree na thake tahole se ei button e click korte parbe na.
                    className='bg-primary w-50  mx-auto d-block mt-2 submit ' type="submit" value="Sign Up" />


            </form>
            <p>Already have an account? <Link to={"/login"} className="pe-auto text-decoration-none"> <span className='text-danger'>Login Now</span> </Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignUp;