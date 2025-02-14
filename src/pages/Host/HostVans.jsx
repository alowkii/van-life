import { Link, useLoaderData } from "react-router-dom"

export default function HostVans() {
    const vans = useLoaderData()

    if(!Array.isArray(vans) || vans.length === 0) {
        return (
            <section className="host-content host-vans">
                <h1>Your listed vans</h1>
                <h4>No vans listed yet</h4>
            </section>
        )
    }

    const hostVansElmnts = vans?.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper host-van-single"
        >
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </Link>
    ))

    return (
        <section className="host-content host-vans">
            <h1>Your listed vans</h1>
            {hostVansElmnts}
        </section>
    )
}