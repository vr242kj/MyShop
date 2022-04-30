import React, {useRef, useState} from "react";
import {useNavigate} from 'react-router-dom'

function Login() {
    const nameRef = useRef(null);
    // const [userLogin, setUserLogin] = useState('')
    const [validationPass, setValidationPass] = useState(true);
    const navigate = useNavigate()

    function checkValidation(name) {
        setValidationPass(name.trim().length >= 5);
    }

    function registerUser(e) {
        if (validationPass) {
            // setUserLogin(nameRef.current.value);
            localStorage.setItem('login', nameRef.current.value);
            navigate("/products");
        }
        e.preventDefault();
    }

    return <div>
        <h2>Welcome</h2>
        <form id="registration" onSubmit={registerUser}>
            <h3>Enter your username to sign in</h3>
            <input type="text" className={'form-control my-3'} onKeyUp={e => checkValidation(e.currentTarget.value)}
                   placeholder={'Enter your first name'} ref={nameRef}/>
            {
                validationPass ? '' : <p className={'text-danger'}>Minimum 5 symbols</p>
            }
            <button className={'btn btn-primary'} type={'submit'}>
                NEXT
            </button>
        </form>
    </div>;
}

export default Login;