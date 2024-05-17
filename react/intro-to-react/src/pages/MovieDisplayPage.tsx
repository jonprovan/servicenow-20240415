import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../types/movie";

export const MovieDisplayPage = () => {
    const [movie, setMovie] = useState<Movie>();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`http://localhost:8081/movies/${id}`);
            const data = await res.json();
            setMovie(data);
        }
        fetchMovie();
    }, []);

    if (!movie) {
        return <>Loading...</>
    }

    return (
        <div>
            <div>
                <strong>Movie Title: </strong>
                <span>{movie.name}</span>
            </div>
            <div>
                <strong>Movie Director: </strong>
                <span>{movie.director}</span>
            </div>
            <div>
                <strong>Movie Image: </strong>
                <img src={movie.img} alt={movie.name} height="250" />
            </div>
            <div>
                <strong>Actors: </strong>
                <ul>
                    {movie.actors.map((actor, index) => (
                        <li key={`${actor}-${index}`}>{actor}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}