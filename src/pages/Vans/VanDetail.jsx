import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState({})
    const location = useLocation()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans))
            .catch(error => console.error("Error fetching van: " + error))
    }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <main className="van-detail-page">
            {van ? (
                <div to={`/vans/${van.id}`} key={van.id} className="van-detail">
                    <Link 
                        to={`..${search}`}
                        relative="path"
                        className="back-button"
                    >
                        &larr; <span>Back to {type} vans</span>
                    </Link>
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h1>{van.name}</h1>
                    <p>${van.price}<span>/day</span></p>
                    <p className="van-description">{van.description}</p>
                    <Link className="rent-btn" to="/checkout">Rent this van</Link>
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    )
}