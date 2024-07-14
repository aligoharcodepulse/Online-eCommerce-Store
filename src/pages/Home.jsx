import  { useState } from 'react'
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import {  useNavigate } from 'react-router-dom'
import '../App.css'
const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSignUpActive, setisSignUpActive] = useState(true)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSignUp() {
        if (!email || !password) {
            setError('Email and Password both are required')
        }
        createUserWithEmailAndPassword(auth,email,password )
        .then((userCredentials)=>{
            const user = userCredentials.user
            alert('Account Created')
            console.log(user);
        })
        .catch((error)=>{
            const errorCode= error.errorcode
            const errorMessage = error.message
            setError(errorMessage)
            console.log(errorCode,errorMessage);
        })
    }

    function handleSignIn() {
        if (!email || !password) {
            setError('Email and Password both are required')
            return
        }
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
            const user = userCredentials.user
            console.log(user);
            navigate('/landingPage')
        })
        .catch((error)=>{
            const errorCode= error.errorcode
            const errorMessage = error.message
            setError(errorMessage)
            console.log(errorCode,errorMessage);
        })
        
    }

    function handleMethodChange() {
        setisSignUpActive(!isSignUpActive)
    }
  return (
    <>
    <form>
        {isSignUpActive && <legend><u>Sign Up</u></legend>}
        {!isSignUpActive && <legend><u>Sign In</u></legend>}
        <fieldset>
            <ul>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={handleEmailChange} />
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={handlePasswordChange}/>
                </li>
            </ul>
            {isSignUpActive && (
                <button type='button' onClick={handleSignUp}>Sign Up</button>
            )}
            {!isSignUpActive && (
                <button type='button' onClick={handleSignIn}>Sign In</button>
            )}
        </fieldset>
        {error && <p id='error-message'>{error}</p>}
        {isSignUpActive && <a onClick={handleMethodChange}>Already have an account? <span>Sign In</span> </a>}
        {!isSignUpActive && <a onClick={handleMethodChange}>Do not have an account? <span>Sign Up</span> </a>}
    </form>
    </>
  )
}

export default Home