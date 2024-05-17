import { Box, Modal } from "@mui/material";
import { useId, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

type EditMovieModalProps = {
    movieId: string;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    fetchMovies: () => Promise<void>;
}

export const EditMovieModal = ({movieId, handleClose, handleOpen, open, fetchMovies}: EditMovieModalProps) => {
    
    const id = useId();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: FieldValues) => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.movieName,
                director: data.movieDirector,
                actors: data.movieActors.split(' '),
                img: data.movieImage
            })
        })

        console.log(res);
        fetchMovies();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
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
            </Box>
        </Modal>
    );
}