
const PhotoCard = ({ photo, isFavourite, onToggle }) => {
    return (
        <div className='overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'>
            <img
                src={photo.download_url}
                alt={`Photo by ${photo.author}`}
                loading='lazy'
                className='aspect-4/3 w-full object-cover'
            />
            <div className='flex items-center justify-between p-3'>
                <p className='truncate text-sm font-medium text-gray-800'>
                    {photo.author}
                </p>
                <button 
                    onClick={() => onToggle(photo.id)}
                    aria-pressed={isFavourite}
                    aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                    className={`cursor-pointer transition-all duration-200 active:scale-125 ${isFavourite ? "text-rose-600" : "text-gray-400 hover:text-rose-400"}`}>
                    <svg
                        viewBox='0 0 24 24'
                        className='h-6 w-6'
                        fill={isFavourite ? "currentColor" : "none"}
                        stroke='currentColor'
                        strokeWidth="2"
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PhotoCard
