import { API_KEY } from "../../constants";
import { getPopularMovies } from "./action";

export function fetchPopularMovies() {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((result)=>dispatch(getPopularMovies(result)))
    }
    
}


export function fetchRecomendedMovies(page) {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((result) => console.log(result))
        .catch(console.log)
    }
}