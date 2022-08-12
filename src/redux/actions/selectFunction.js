export function selectPopular(state) {
    return state.popularMovies.movies
}

export function selectTrailerKey(state) {
    return state.popularMovies.trailers
}

export function selectOpenModal(state) {
    return state.popularMovies.isModalOpen
}