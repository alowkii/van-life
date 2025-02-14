import { redirect } from "react-router-dom"
import { getStorage } from "./localStorage"

export async function requireAuth() {
    const isLoggedIn = getStorage("loggedin")

    if (!isLoggedIn) {
       throw redirect("/login?message=You need to login first!")
    }
}