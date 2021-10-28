import React, { useState } from "react";

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log(newUser);
        console.log(`I'm creating a user`)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return(
        <div>
            <form onSubmit={ createUser }>
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
                    <input type="text" onChange = { (e) => setEmail(e.target.value) } value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange = { (e) => setPassword(e.target.value) } value={ password } />
                </div>
                <div>
                    <label>Confrim Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange= { (e) => setConfirmPassword(e.target.value) } value={ confirmPassword } />
                </div>
                <button type="submit">Submit</button>
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