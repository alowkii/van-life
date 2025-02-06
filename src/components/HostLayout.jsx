import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    const activeStyle = {
        borderBottom: "1px solid #000000",
        opacity: "1"
    }
    return(
        <main className='host-page'>
            <nav>
                <NavLink to="." end style={({isActive}) => isActive ? activeStyle : null}>Dashboard</NavLink>
                <NavLink to="income" style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="reviews" style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </main>
    )
}