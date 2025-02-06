import { useEffect, useState } from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"


export default function HostVansDetail() {
    const params = useParams()
    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setVan(data.vans[0])
        })
        .catch(err => console.log(err))
    }, [params.id])

    if (!van) return <h1>Loading...</h1>

    return (
        <section className="host-content host-vans">
            <Link 
                to="../vans"
                className="back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-detail">
                    <img src={van.imageUrl} alt="" width={150} />
                    <div className="host-info">
                        <i className={van.type}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                </div>
                <div className="host-van-detail-layout">
                    <nav className="host-van-detail-nav">
                        <NavLink to="." end className= {({isActive}) => isActive ? "link-active": ""}>Details</NavLink>
                        <NavLink to="pricing" className= {({isActive}) => isActive ? "link-active": ""}>Pricing</NavLink>
                        <NavLink to="photos" className= {({isActive}) => isActive ? "link-active": ""}>Photos</NavLink>
                    </nav>
                    <Outlet context={ {van} }/>
                </div>
            </div>
        </section>
    )
}