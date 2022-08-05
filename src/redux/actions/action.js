import { ACTION_TYPES } from "../../constants";

export function getPopularMovies(movies) {
    return {
        type: ACTION_TYPES.GET_POPULAR_MOVIES_SWIPER,
        movies,
    }
}