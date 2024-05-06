import React, { useEffect, useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


  const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
      auth
    );

    // if(user){
    //   navigate(from, { replace: true });
    // }

    useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user, navigate, from]);

    

      const handleSubmit = event => {
      event.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      signInWithEmailAndPassword(email, password);
      
      };

      const navigateRegister = event => {
        navigate('/register');
      }

      const resetPassword = async () => {
        const email = emailRef.current.value;
        const success = await sendPasswordResetEmail( email );
        if (success) {
          alert('Sent email');
        }
        
      }

    return (
      <section id="login" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Log In</h2>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" ref={emailRef} className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" ref={passwordRef} className="form-control" id="password" name="password" required />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
              </form>
              {errorElement}
              <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={()=>resetPassword()}>Reset Password</button> </p>
                
              <p>New to jared grimes photographer? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
              <SocialLogin/>
            </div>
          </div>
        </div>
        
      </section>
    );
  };

export default Login;
