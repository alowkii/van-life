import { useEffect, useState } from "react";

export default function Vans() {
	const [vans, setVans] = useState([])
	useEffect(() => {
		fetch("/api/vans")
			.then(response => response.json())
			.then(data => setVans(data.vans))
			.catch(error => console.error("Error fetching vans: "+error))
	}, [])

	const vanElements = vans.map(van => (
		<div key={van.id} className="van-title">
			<img src={van.imageUrl} alt={van.name} />
			<div className="van-info">
				<h3>{van.name}</h3>
				<p>${van.price}<span>/day</span></p>
			</div>
			<i className={`van-type ${van.type} selected`}>{van.type}</i>
		</div>
	))

	return (
		<main className="vans-page">
			<div className="van-list">
				{vanElements}
			</div>
		</main>
	)
}