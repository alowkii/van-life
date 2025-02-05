import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
	const [vans, setVans] = useState([])
	useEffect(() => {
		fetch("/api/vans")
			.then(response => response.json())
			.then(data => setVans(data.vans))
			.catch(error => console.error("Error fetching vans: "+error))
	}, [])

	const vanElements = vans.map(van => (
			<Link to={`/vans/${van.id}`} key={van.id} className="van-title">
				<img src={van.imageUrl} alt={van.name} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>${van.price}<span>/day</span></p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
		)
	)

	return (
		<main className="vans-page">
			<div className="van-list">
				{vanElements}
			</div>
		</main>
	)
}