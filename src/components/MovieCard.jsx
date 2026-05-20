import './MovieCard.css'

function MovieCard({filme, adicionarFavorito, mostrarFavoritar, removedorFavorito}) {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
            alt={filme.title}></img>

            <h3>{filme.title}</h3>
            <p>{filme.vote_average.toFixed(1)}</p>

            {mostrarFavoritar && (
                <button onClick={() => adicionarFavorito(filme)}>Favoritar</button>
            )}

            {removedorFavorito && (
                <button onClick={() => removedorFavorito(filme)}>Remover</button>
            )}
        </div>
    )
}

export default MovieCard