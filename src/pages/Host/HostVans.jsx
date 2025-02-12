import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchVans() {
            try {
                setLoading(true);
                const vans = await getVans();
                setVans(vans);
            } catch (error) {
                console.error("Error fetching vans:", error);
                setVans([]); // Ensure it doesn't break the UI
            } finally {
                setLoading(false);
            }
        }
    
        fetchVans();
    }, []);

    if(vans == undefined || vans.length === 0) {
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
            { (!loading) ? 
                hostVansElmnts
                : <h1>Loading...</h1>
            }
        </section>
    )
}