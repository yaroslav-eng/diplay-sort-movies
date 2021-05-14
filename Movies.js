import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import ajax from "./ajax";
import Loader from "./loader";

const Movies = (props) => {
    const [film, setFilms] = useState(
        {
            movies: [],
            errMessage: '',
            loading: true
        }
    );

    const [rating, setRating] = useState(
        {
            ratings: [],
            errMessage: '',
            loading: true
        }
    );

    useEffect(() => {
        async function fetchMovie() {
            await ajax('movie-titles',
                data => setFilms({movies: data, loading: false}),
                errMessage => setFilms({errMessage, loading: false})
            );
        }

        async function fetchRating() {
            await ajax('movie-ratings',
                data => setRating({ratings: data, loading: false}),
                errMessage => setRating({errMessage, loading: false})
            );
        }
        fetchMovie();
        fetchRating();
    }, []);

    const fillList = rating.ratings
        .sort((a, b) => b.rating-a.rating)
        .map((rate, i) => (
        <li
            className="list-group-item"
            key={i}
        >
            <p style={{float:"right"}} >
            {rate.rating}
            </p>

            <p>
            {film.movies
                .map((fil, i) => (
                    <span style={{float:"left"}} key={i} id={rate.id}>
                        {rate.id == fil.id ? fil.title : null}
                    </span>
                ))}
            </p>

        </li>
    ));

    return (
        <div>
            <Navigation onClick={props.onBackClick}/>
            <h1>Movies</h1>
            <Loader show={film.loading} />
            <ul className="list-group">
                {fillList}
            </ul>

            <div className={'alert alert-danger' + (film.errMessage ? '' : ' hidden')}>
                {film.errMessage}
                {rating.errMessage}
            </div>

        </div>
    );
}

export default Movies;