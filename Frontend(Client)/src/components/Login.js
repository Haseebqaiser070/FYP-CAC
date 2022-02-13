
import React, { useState } from 'react';
import './css/styles.css';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Login() {
    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Email)
        console.log(Password)
        setEmail('')
        setPassword('')
        navigate("/admin/Dashboard", { replace: true });

    }
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                <div className="card-body">
                <form onSubmit={handleSubmit}> 
                        <div className="form-floating mb-3">
                            <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="Email"className="form-label">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="inputPassword" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                            <label htmlFor="Password"className="form-label">Password</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                            <label htmlFor="check" className="form-check-label" for="inputRememberPas1sword">Remember Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0"> 
                            <Link className="small" to="forgotpassword">Forgot Password?</Link>
                            <button type='Submit' className="btn btn-primary" >Login</button>  
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</div>
  );
}

export default Login;