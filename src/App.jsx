import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <main className='mx-auto max-w-6xl px-4 py-8'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Photo Gallery</h1>
          <p className='mt-1 text-sm text-gray-500'>Browse and favourite beautiful photos from around the world</p>
        </header>
        <Gallery />
      </main>
      
    </div>
  )
}

export default App
