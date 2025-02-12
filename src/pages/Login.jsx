import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="login-page">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    onChange={handleChange} 
                    placeholder="Email address" 
                    autoComplete="username"
                />
                <label htmlFor="password"></label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={handleChange}
                    placeholder="Password" 
                    autoComplete="current-password"
                />
                <button type="submit">Sign In</button>
            </form>
            <h5>
                Don&apos;t have an account?
                <Link>Create one now</Link>
            </h5>
        </div>
    )
}