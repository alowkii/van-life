import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export async function loader() {
	try {
		return await getVans();
	} catch (error) {
		console.error("Loader error:", error);
		return { 
			message: error.message,
			status: error.status,
			statusText: error.statusText
		 };
	}
}

export default function Vans() {
	const vansData = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get("type");

	const filteredVans = typeFilter
		? vansData.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase())
		: vansData;

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			const newParams = new URLSearchParams(prevParams.toString());
			if (value === null) {
				newParams.delete(key);
			} else {
				newParams.set(key, value);
			}
			return newParams;
		});
	}

	const vanElements = filteredVans.map((van) => (
		<Link 
			to={van.id} 
			key={van.id} 
			className="van-title"
			state={{
				search: `?${searchParams.toString()}`,
				type: `${typeFilter || "all"}`
			}}
		>
			<img src={van.imageUrl} alt={van.name} />
			<div className="van-info">
				<h3>{van.name}</h3>
				<p>${van.price}<span>/day</span></p>
			</div>
			<i className={`van-type ${van.type} selected`}>{van.type}</i>
		</Link>
	));

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
	);
}