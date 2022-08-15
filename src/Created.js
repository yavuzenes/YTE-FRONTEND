
import { useState } from 'react';
import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Common.css';

function Created() {

    const { state } = useLocation();
    const { password } = state;

    let navigate = useNavigate();

    return (

        <div class="container">
            <form class="myForm">
                <h1 class="first">User Created Succesfully</h1><br /><br />
                <section class="form-wrapper">
                    <h1 class="second">Password :</h1>
                    <h1 class="third">{password}</h1>
                </section>
                <div class="wrapper">
                    <button onClick={(event) => {
                        navigate("/Home");
                    }}>Main Page</button>
                </div>
            </form>
        </div>
    );

}

export default Created;