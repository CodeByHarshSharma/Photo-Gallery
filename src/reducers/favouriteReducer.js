export const STORAGE_KEY = "gallery_favourites"

export function getInitialFavourites() {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY))
        return Array.isArray(parsed) ? parsed : []
    }
    catch {
        return []
    }
}

export function favouritesReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_FAVOURITE":
            return state.includes(action.id)
                ? state.filter((id) => id !== action.id)
                : [...state, action.id]
        default:
            return state;
    }
}