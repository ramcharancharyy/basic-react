
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
function App() {
  const movieNumber=1;


  return (
    <>
    <Home/>
      <MovieCard movie={{title:"hero",release_date:'2026'}}/>
      
    </>
  )
}

export default App
