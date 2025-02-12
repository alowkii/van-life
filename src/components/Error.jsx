import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()

    return (
        <main className="error-page">
            <h1>ERROR: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </main>
    )
}