import { ACTION_TYPES } from "../../constants";

export function getPopularMovies(movies) {
    return {
        type: ACTION_TYPES.GET_POPULAR_MOVIES_SWIPER,
        movies,
    }
}

export function getRecomendedMovies(recomendations) {
    return {
        type: ACTION_TYPES.GET_SUCCSES_RECOMENDED_MOVIES,
        recomendations,
    }
}

export function getPopularTrailer(trailers) {
    return {
        type: ACTION_TYPES.GET_SUCCSES_TRAILER,
        trailers,
    }
}

export function toggleModal() {
    return {
        type:ACTION_TYPES.TOGGLE_MODAL
    }
}

export function searchMovies(movie) {
    return {
        type: ACTION_TYPES.SEARCH_MOVIES,
        movie,
    }
}

export function toggleSearchModal() {
    return {
        type:ACTION_TYPES.SEARCH_MODAL_OPEN
    }
}

export function closeSearchModal() {
    return {
        type:ACTION_TYPES.CLOSE_SEARCH_MODAL
    }
}

export function getDetails(details) {
    return {
        type: ACTION_TYPES.GET_DETAILS,
        details,
    }
}

export function getNowPlaying(movies) {
    console.log(movies,"actioooooooon")
    return {
        type: ACTION_TYPES.GET_NOW_PLAYING,
        movies
    }
}