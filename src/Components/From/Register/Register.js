import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../../Firebase/Firebase.init";




initializeAuthentication();
const Googleprovider = new GoogleAuthProvider();



function Register() {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [error, setError] = useState('')
    const [isLogIn, setLogIn] = useState(false);

    const auth = getAuth();


    //google authentication log in 
    const HandleClick = () => {
        signInWithPopup(auth, Googleprovider)
            .then((result) => {

                const userr = result.user;
                console.log(userr);
                setUser(userr)
            })

    }


    //toggle handle 
    const toggleHandle = e => {
        setLogIn(e.target.checked);
    }

    //handle email
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    //handle Password
    const handlePass = e => {
        setPass(e.target.value);
    }


    //log in form handle . with email and password 
    const HandleLogIn = event => {
        console.log(email, password);

        event.preventDefault()

        if (password.length < 6) {
            const error = " Password should be at least 6 characters";
            setError(error)
            return;
        }
        // must use regular expression . (minimum one special cerecter. like (@#$%&*) any one can you use)
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('You must use one special case letter.');
            return
        }
        // if already log in the website then use sign up 
        if (isLogIn) {
            createSignUp(email, password)
        }
        //or not logged in here then create new . 
        else {
            createSignIn(password, email)
        }


    };

    //already have a account 
    const createSignUp = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);

                setError('')
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //do not have account 
    const createSignIn = (password, email) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                //when all condition are accepted then . hide (d-none) the error massage . that's why we use a empty string . 
                setError('')
                emailVerification()
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    //email veryfication ...... 
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            })
    }


    return (
        <div className="App">
            <form action="" onSubmit={HandleLogIn}>
                <h3>{isLogIn ? "LogIN" : "SignUp"} here</h3>
                <label htmlFor="email">Email: </label>
                <input onBlur={handleEmail} type="email" name="email" id="email" required />
                <br /><br />
                <label htmlFor="password">Pass:  </label>
                <input onBlur={handlePass} type="password" name="password" required /> <br /> <br />
                <input onChange={toggleHandle} type="checkbox" name="" id="" />
                <small>already regestered</small>
                {
                    <div>
                        <p style={{ color: "red" }}>{error}</p>
                    </div>
                }
                <input type="submit" value={isLogIn ? "LogIN" : "SignUp"} />
            </form>
            <br /><br />
            {/* goole handle btn */}
            <button onClick={HandleClick}>Hello From Google</button>
            {
                <div>
                    <h3>{user.email}</h3>
                </div>
            }


        </div>
    );
}

export default Register;