import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <h1>TOP Cine</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/favoritos'>Favoritos</Link>
            </nav>
        </header>
    )
}

export default Header