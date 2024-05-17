import { useState, useId } from "react";
import { useForm, FieldValues } from "react-hook-form";

type MovieFormProps = {
    fetchMovies: () => Promise<void>;
}

export const MovieForm = ({ fetchMovies }: MovieFormProps) => {
    const id = useId();
    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();
    
    const onSubmit = async ({ movieName, movieDirector, movieImage, movieActors }: FieldValues) => {
        const res = await fetch('http://localhost:8081/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: movieName,
                director: movieDirector,
                img: movieImage,
                actors: movieActors.split(' ')
            })
        });

        if (res.ok) {
            // This means it worked
            reset();
            fetchMovies();
            
        } else {
            // An error occured
            if (res.status === 400) {
                console.log(res);
                setError('movieName', { message: 'Invalid Input' });
            }
            else if (res.status === 401) {

            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!!errors.movieName && <strong style={{color: 'red'}}>{errors.movieName.message+''}</strong>}
            <div>
                <label htmlFor={`movie-name-${id}`}>Movie Name: </label>
                <input id={`movie-name-${id}`} {...register('movieName')} />
            </div>
            <div>
                <label htmlFor={`movie-director-${id}`}>Movie Director: </label>
                <input id={`movie-director-${id}`} {...register('movieDirector')} />
            </div>
            <div>
                <label htmlFor={`movie-image-${id}`}>Movie Image: </label>
                <input id={`movie-image-${id}`} {...register('movieImage')} />
            </div>
            <div>
                <label htmlFor={`movie-actors-${id}`}>Actors: </label>
                <input id={`movie-actors-${id}`} {...register('movieActors')} />
                {/* <button>+</button> */}
            </div>
            <button>Submit</button>
        </form>
    );
}