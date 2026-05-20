import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import './Favoritos.css'

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const salvo = JSON.parse(localStorage.getItem('favoritos')) || []
        setFavoritos(salvo)
    }, [])

    function removedorFavorito(filme) {
    const novosFavoritos = favoritos.filter(f => f.id !== filme.id)
    setFavoritos(novosFavoritos)
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos))
    }
    
    return (
        <div>
            <h1 className="favoritos">Favoritos</h1>
            <div className="movies-grid">
                {favoritos.length === 0 && <p>Nenhum filme favoritado ainda :/</p>}
                {favoritos.map(filme => (
                    <MovieCard key={filme.id} filme={filme} removedorFavorito={removedorFavorito}></MovieCard>
                ))}
            </div>
        </div>
    )
}

export default Favoritos