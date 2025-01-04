import React, {useState} from 'react';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleClickSubmitButton = async () => {
        await fetch("http://localhost:5000/userRoutes/login", {
            method : "POST", 
            headers : {"Content-Type" : "application/json"}, 
            body : JSON.stringify({
                username : username, 
                password : password,
            })
        })
        .then((response) => {
            if(response.ok) {
                console.log("response is ok");
            }
            else {
                console.log("response failed");
            }
        })
    };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <input id = "username-input" placeholder='Username' onChange = {handleChangeUsername}></input>
            <input id = "password-input" placeholder='Password' onChange = {handleChangePassword}></input>
            <button id = "submit-login-button" onClick = {handleClickSubmitButton}>Submit</button>
        </div>
    );
};

export default Login;