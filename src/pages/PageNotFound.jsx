import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className='error-404-page'>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/">Return to home</Link>
    </main>
  )
}