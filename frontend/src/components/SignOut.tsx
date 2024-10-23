import { signOut, getAuth } from "firebase/auth";
import app from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import React from 'react';


const auth = getAuth(app);


const Signout = () => {

  const navigate = useNavigate();

const handleSignOut = () => {
  try {
    signOut(auth);
  console.log('Done');
  navigate('/signup')
  } catch (err: any) {
    console.log(err.message)
  }

}

  return (
    <section className='home'>
      <div className='text-white border-white'>
        <button onClick={handleSignOut}>Sign Out</button>   
      </div>
    </section>
  );
};
export default Signout;