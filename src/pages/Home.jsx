import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import './Home.css'

const API_KEY = '0eb20c23cbc2fc0b7855d71d756b24fb'
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWIyMGMyM2NiYzJmYzBiNzg1NWQ3MWQ3NTZiMjRmYiIsIm5iZiI6MTc3OTE0OTU2Ni4yNzYsInN1YiI6IjZhMGJhYWZlMGJmNTc1ZjVmNGFhZmZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5v-tDbl3rIwhn9a8xc4ld99lfjJpq7S9L3rL3pHy7U'

function Home() {
    const [filmes, setFilmes] = useState([])
    const [busca, setBusca] = useState('')

    function buscarPopulares() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR', {
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(dados => {
            if (dados.results) setFilmes(dados.results)
        })
        .catch(err => console.log(err))

    }

    function buscarNaApi() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${busca}&language=pt-BR`, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(dados => {
            if (dados.results) setFilmes (dados.results)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (busca.trim() === '') {
            buscarPopulares()
        } else {
            buscarNaApi()
        }
    }, [busca])

    function adicionarFavorito(filme) {
        const favoritosSalvo = JSON.parse(localStorage.getItem('favoritos')) || []
        const jaFavoritado = favoritosSalvo.some(f => f.id === filme.id)

        if (!jaFavoritado) {
            const novosFavoritos = [...favoritosSalvo, filme]
            localStorage.setItem('favoritos', JSON.stringify(novosFavoritos))
            alert(`${filme.title} adicionado aos favoritos.`)
        } else {
            alert ('Filme já está nos favoritos')
        }
    }

    return (
        <div className='home'>
            <input
                type="text"
                placeholder='buscar filme...'
                value={busca}
                onChange={(e) => setBusca(e.target.value)}>
            </input>
            
            <h1>{busca ? 'resultados' : 'populares'}</h1>
            <div className='movies-grid'>
                {filmes.map(filme => (
                    <MovieCard key={filme.id} filme={filme} adicionarFavorito={adicionarFavorito} mostrarFavoritar={true}></MovieCard>
                ))}
            </div>
        </div>
    )
}

export default Home