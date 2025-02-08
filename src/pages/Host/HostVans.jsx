import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = useState([])
    useEffect(()=>{
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(data => {
            setVans(data.vans)
        })
        .catch(err => console.log(err))
    }, [])

    const hostVansElmnts = vans.map(van => (
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
            { (vans.length > 0) ? 
                hostVansElmnts
                : <h1>Loading...</h1>
            }
        </section>
    )
}