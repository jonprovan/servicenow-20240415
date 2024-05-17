import { useState, useEffect, useId } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import { MovieForm } from "../components/MovieForm";
import { EditMovieModal } from "../components/EditMovieModal";

export const MoviePage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies`, {
            method: 'GET'
        });
        const data: Movie[] = await res.json();
        console.log(data);
        setMovies(data);
    }

    /**
     * 
     * This function handles the deletion of the movie. Should the movie fail to be deleted, an error will be displayed
     * 
     * @param id Id of the movie to delete
     */
    const handleDelete = async (id: string) => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            // Display some error message
            console.log('Error deleting');
        }
        fetchMovies();
    }

    

    useEffect(() => {   
        fetchMovies();
        
        const intervalId = setInterval(() => {
            // Polling
            fetchMovies();
        }, 15000);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <div>
            {/* Movies */}
            {/* Movie Name, Director, Actors */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Director</th>
                        <th>Movie Image</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>
                                <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
                            </td>
                            <td>{movie.director ?? 'N/A'}</td>
                            <td>
                                <img src={movie.img} height="50" />
                            </td>
                            <td
                                style={{cursor: 'pointer'}}
                                onClick={() => handleDelete(movie._id)}
                            >
                                Delete Movie
                            </td>
                            <td
                                style={{cursor: 'pointer'}}
                                onClick={handleOpen}
                            >
                                <span>Edit Movie</span>
                            </td>
                            <EditMovieModal movieId={movie._id}
                                open={open}
                                handleClose={handleClose}
                                handleOpen={handleOpen}
                                fetchMovies={fetchMovies}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <MovieForm fetchMovies={fetchMovies} />
        </div>
    );
}