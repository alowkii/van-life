import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
	const [vans, setVans] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchVans() {
			setLoading(true);
			try {
				const data = await getVans();
				setVans(data);
			} catch (error) {
				setVans([]);
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetchVans();
	}, [])

	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get("type");

	const filteredVans = typeFilter
						? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) 
						: vans;

	function handleFilterChange(key, value) {
		setSearchParams(prevParams => {
			const newParams = new URLSearchParams(prevParams.toString());
			if (value === null) {
				newParams.delete(key);
			} else {
				newParams.set(key, value);
			}
			return newParams;
		});
	}


	if (loading) {
		return (
			<main className="vans-page">
				<h1>Loading...</h1>
			</main>
		)
	}

	if (error) {
		return (
			<main className="vans-page">
				<h1>Failed to fetch data!</h1>
				<p>{error.message}</p>
			</main>
		)
	}	

	if( vans == undefined || vans.length === 0) {
		return (
			<main className="vans-page">
				<h1>Explore our van options</h1>
				<div className="van-list-filter">
					<h3>No vans listed yet</h3>
				</div>
			</main>
		)
	}

	const vanElements = filteredVans.map(van => (
		<Link 
			to={van.id} 
			key={van.id} 
			className="van-title"
			state={{
				search : `?${searchParams.toString()}`,
				type : `${typeFilter || "all"}`
			}}
		>
			<img src={van.imageUrl} alt={van.name} />
			<div className="van-info">
				<h3>{van.name}</h3>
				<p>${van.price}<span>/day</span></p>
			</div>
			<i className={`van-type ${van.type} selected`}>{van.type}</i>
		</Link>
	))

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