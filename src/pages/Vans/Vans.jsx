import { useEffect, useState } from "react";
import { Link, useSearchParams, NavLink } from "react-router-dom";

export default function Vans() {
	const [vans, setVans] = useState([])
	useEffect(() => {
		fetch("/api/vans")
			.then(response => response.json())
			.then(data => setVans(data.vans))
			.catch(error => console.error("Error fetching vans: "+error))
	}, [])
	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get("type");

	const filteredVans = typeFilter
						? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) 
						: vans;

	const vanElements = filteredVans.map(van => (
			<Link to={van.id} key={van.id} className="van-title">
				<img src={van.imageUrl} alt={van.name} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>${van.price}<span>/day</span></p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
		)
	)

	function handleFilterChange(key, value) {
		setSearchParams(prevParams => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		})
	}

	return (
		<main className="vans-page">
			<h1>Explore our van options</h1>
			<div className="van-list-filter">
				<button 
					className={`filter ${typeFilter === 'simple' ? typeFilter : ''}`} 
					onClick={() => handleFilterChange("type", "simple")}
				>
					Simple
				</button>
				<button 
					className={`filter ${typeFilter === 'luxury' ? typeFilter : ''}`} 
					onClick={() => handleFilterChange("type", "luxury")}
				>
					Luxury
				</button>
				<button 
					className={`filter ${typeFilter === 'rugged' ? typeFilter : ''}`} 
					onClick={() => handleFilterChange("type", "rugged")}
				>
					Rugged
				</button>
				{typeFilter && <button 
					className="filter clear-filter-btn" 
					onClick={() => handleFilterChange("type", null)}
				>
					Clear filters
				</button>}
			</div>
			<div className="van-list">
				{vanElements}
			</div>
		</main>
	)
}