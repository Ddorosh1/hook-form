import React, { useState } from "react";

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
        if(newUser.password != newUser.confirmPassword) {
            setPasswordError(`Passwords don't match.`);
        }
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };



    return(
        <div>
            <form onSubmit={ createUser }>
                    {/* ternary operator */}
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange= { (e) => setFirstName(e.target.value) } value={ firstName } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = { (e) => setLastName(e.target.value) } value={ lastName } />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange = { (e) => setEmail(e.target.value) } value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange = { (e) => setPassword(e.target.value) } value={ password } />
                </div>
                <div>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                    <label>Confrim Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange= { (e) => setConfirmPassword(e.target.value) } value={ confirmPassword } />
                </div>
                <input type="submit" value="Create User" onClick = { setHasBeenSubmitted } />
            </form>
            <div>
                <h2>First Name: { firstName } </h2>
                <h2>Last Name: { lastName } </h2>
                <h2>Email: { email } </h2>
                <h2>Password: { password } </h2>
                <h2>Confirm Password: { confirmPassword } </h2>
            </div>
        </div>
    )
};

export default UserForm;