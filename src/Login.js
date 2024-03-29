import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Common.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    let navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function getUser() {
        const res = await axios.post("/login", {
            "username": username,
            "password": password
        });
        return res;
    }

    return (

        <div className="myContainer">
            <form className="myForm">
                <h1>Login
                </h1>
                <label className="myLabel" htmlFor='username'>
                    Username
                </label>
                <input className="myInput" autoComplete="off" type="text" id="username" required value={username} onChange={(event) => { console.log(event.target.value); setUserName(event.target.value) }} />
                <label className="myLabel" htmlFor='password'>
                    Password
                </label>
                <input className="myInput" autoComplete="off" type="password" id="password" required value={password} onChange={(event) => { console.log(event.target.value); setPassword(event.target.value) }} />
                <div className="wrapper">
                    <button className="myButton" onClick={(event) => {
                        
                        if (username === "" || password === "" ) {

                        }

                        else {

                            event.preventDefault();

                            const res = getUser();

                            res.then((result) => {

                                const user = JSON.parse(result.data.user);
                                
                                if (user.password === "XXXXXXXXXX" || user.valid==="false") {

                                    toast.error("Invalid username or password");

                                }

                                else if (user.role === "STUDENT") {

                                    navigate("/student", { state: user })

                                }

                                else if (user.role === "ASSİSTANT") {

                                    navigate("/assistant", { state: user })

                                }

                                else if (user.role === "INSTRUCTOR") {

                                    navigate("/instructor", { state: user })
                                }

                                else if (user.role === "ADMIN") {

                                    navigate("/admin", { state: user })

                                }
                            })

                        }
                    }}>Log In</button>
                    <p className="myP">
                        <span className="line">
                            <a href="/forgot">Forgot Password?</a>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;