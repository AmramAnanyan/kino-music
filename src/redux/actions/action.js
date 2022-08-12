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
