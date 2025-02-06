import { useOutletContext } from "react-router-dom"

export default function HostVansPricing() {
    const { van } = useOutletContext();
    
    return (
        <section className='host-content host-van-detail-pricing'>
            <h1>${parseFloat(van.price).toFixed(2)}<span>/day</span></h1>
        </section>
    )
}