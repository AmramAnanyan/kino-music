export function selectPopular(state) {
    return state.popularMovies.movies
}

export function selectTrailerKey(state) {
    return state.popularMovies.trailers
}

export function selectOpenModal(state) {
    return state.popularMovies.isModalOpen
}

export function selectSearch(state) {
    return state.searchMovies
}

export function selectModalState(state) {
    return state.searchMovies.isOpenModal
}
export function selectDetails(state) {
    return state.details
}