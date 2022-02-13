import React, { useState } from 'react';
import './css/styles.css';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Forgot() {
    const[Email,setEmail]=useState('')
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Email)
        setEmail('')
        navigate("/", { replace: true });

    }
    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Password Recovery</h3></div>
                    <div class="card-body">
                        <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                        <form  onSubmit={handleSubmit}>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                                <label htmlFor="inputEmail">Email address</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <Link class="small" to="/">Return to login</Link>
                                <button type='Submit' className="btn btn-primary">Reset Password</button>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}