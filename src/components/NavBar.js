import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <Link to='/about'>About</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    )
}