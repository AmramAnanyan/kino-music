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

export function slideAction() {
    return {
        type:ACTION_TYPES.SLIDE_CONTROL
    }
}