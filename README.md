# Photo Gallery

A responsive photo gallery built with React, Vite and Tailwind CSS. It fetches photos from the [Picsum Photos API](https://picsum.photos/), supports real-time search by author, and saves favourites across refreshes.


## Features

- Fetches 30 photos with loading and error states
- Responsive grid: 1 column (mobile), 2 (tablet), 4 (desktop)
- Real-time author search on already-fetched data
- Favourites managed with `useReducer` and persisted in `localStorage`

## Tech Stack

React (hooks only), Vite, Tailwind CSS. No other UI libraries.


## Structure

```
src/
├── components/   # Gallery, PhotoCard
├── hooks/        # useFetchPhotos
├── reducers/     # favouriteReducer
├── App.jsx
└── main.jsx
```

## Implementation Notes

- **`useFetchPhotos`** returns `{ photos, loading, error }`. It treats non-2xx responses as errors.
- **`useReducer`** handles a single `TOGGLE_FAVOURITE` action and stores only photo ids. A lazy initializer reads `localStorage` (validated with `Array.isArray`), and an effect writes changes back.
- **`useMemo`** caches the filtered list so it only recomputes when `photos` or `query` changes.
- **`useCallback`** keeps the search handler's reference stable across renders.
