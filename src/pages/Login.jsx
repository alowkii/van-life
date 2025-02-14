import { Link, Form, useActionData, redirect, useNavigation, useLoaderData } from 'react-router-dom';
import { loginUser } from '../api';
import { setStorage } from '../localStorage';

export async function loader({ request }) {
    const url = new URL(request.url)
    return {
        message : url.searchParams.get("message")
    }
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    let pathname = new URL(request.url).searchParams.get("redirectTo");
    if(!pathname) {
        pathname = "/host";
    }

    try {
        const data = await loginUser({ email, password });
        if (data.user) {
            setStorage("loggedin", true);
            return redirect(pathname);
        } else {
            setStorage("loggedin", false);
            return { error: "Incorrect Credentials!" };
        }
    } catch (error) {
        return { error: error.message };
    }
}

export default function Login() {
    const queryData = useActionData();
    const message = useLoaderData().message;
    const navigation = useNavigation();

    return (
        <div className="login-page">
            <h1>Sign in to your account</h1>
            {(queryData?.error && <h3>{queryData.error}</h3>) ||
            (message && <h3>{message}</h3>)}
            <Form method="post" replace>
                <label htmlFor="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email address" 
                    autoComplete="username"
                    required
                />
                <label htmlFor="password"></label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="Password" 
                    autoComplete="current-password"
                    required
                />
                <button type="submit" disabled={navigation.state==="submitting"}>
                    {(navigation.state==="submitting")?"Logging in...":"Login"}
                </button>
            </Form>
            <h5>
                Don&apos;t have an account?
                <Link to="/signup">Create one now</Link>
            </h5>
        </div>
    );
}
