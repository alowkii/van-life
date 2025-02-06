import { useOutletContext } from "react-router-dom"

export default function HostVansPhotos() {
    const { van } = useOutletContext();
    
    return (
        <section className='host-content host-van-detail-photos'>
            <img src={van.imageUrl} alt={`${van.name} image`} width="100" />
        </section>
    )
}