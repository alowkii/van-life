import { redirect } from "react-router-dom"
import { getStorage } from "./localStorage"

export async function requireAuth(request) {
    const url = request?.url ? new URL(request.url).pathname : "/host";
    const isLoggedIn = getStorage("loggedin");

    if (!isLoggedIn) {
        throw redirect(`/login?message=You need to login first!&redirectTo=${url}`);
    }
}