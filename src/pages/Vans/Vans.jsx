import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, Await } from "react-router-dom";

export default function Vans() {
	const vansPromise = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get("type");
	
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

	function renderVanElements(vans) {
			const filteredVans = typeFilter
				? vans.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase())
				: vans;
				
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
				<>
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
						<Await resolve={vansPromise}>
							{vanElements}
						</Await>
					</div>
				</>
			)
	}
	
	return (
		<main className="vans-page">
			<h1>Explore our van options</h1>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Await resolve={vansPromise.vans}>
					{renderVanElements}
				</Await>
			</Suspense>
		</main>
	);
}