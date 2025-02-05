import aboutImage from '../assets/images/about-page.png';

export default function About() {
  return (
    <main className="about-page">
      <div className="image-container">
        <img src={aboutImage} alt="" />
      </div>
      <div className="text-container">
        <h2>Don&apos;t squeeze in a sedan when you could relax in a van.</h2>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are re-certified before each trip to ensure your travel plans can go off without a hitch.
          <span>(Hitch costs extra 😉)</span>
        </p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className="explore-link">
        <h3>Your destination is waiting.</h3>
        <h3>Your van is ready</h3>
        <a href="/vans">Explore our vans</a>
      </div>
    </main>
  )
}