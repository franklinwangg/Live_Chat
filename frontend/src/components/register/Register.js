import {useState, React} from 'react';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterButton = () => {
        console.log("username is : ", username);
        console.log("password is : ", password);
        
        fetch("http://localhost:5000/userRoutes/register", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Inform the server you're sending JSON
                },
                body: JSON.stringify({ 
                    username: username, // Include the username and password in the body
                    password: password
                }),
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse JSON if the server responds successfully
                } else {
                    throw new Error("Failed to register");
                }
            })
            .then(data => {
                console.log("User registered successfully:", data);
            })
            .catch(error => {
                console.error("Error during registration:", error);
            });
    
        console.log("Request sent");
    };
    
    return (
        <div>
            {/* <input placeholder = "Username" onChange = {handleUsernameChange}>{username}</input> */}
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick = {handleRegisterButton}></button>
        </div>
    );
}

export default Register;