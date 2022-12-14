import { API_KEY } from "../../constants";
import { getDetails, getNowPlaying, getPopularMovies, getPopularTrailer, searchMovies } from "./action";

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

export function fetchPopularsTrailer(id) {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => response.json())
        .then((result) =>dispatch(getPopularTrailer(result)))
        .catch(console.log)
} 
    }
    

export function fetchSearchMovies(search,page=1) {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(response => response.json())
            .then(result=>dispatch(searchMovies(result)))
    }
}

export function fetchDetails(id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(result => dispatch(getDetails(result)))
            .catch(console.log)
    }
}
   

export function fetchNowPlaying(page = 2) {
    console.log("feeeeetchhh")
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then((response) => response.json())
            .then((result) => dispatch(getNowPlaying(result)))
            .catch(console.log)
    }
}