import { getGames } from "../Services"
import Game from "../Components/Game"
import { useEffect } from "react"

const HomePage = () => {
    let games = []

    const fetchGames = () => {games = getGames(); }

    useEffect(() => {
        fetchGames();
    }, [])

    return (
        <>
            <h1>Gestor de los Juegos Olímpicos</h1>
            <button>Agregar Juego</button>
            {[{id: 1, title: "Juego de Prueba"}, {id: 2, title: "Otro Juego"}].map((game) => {
                return (
                    <Game data={game}/>
                )
                
            })}
        </>
    )
}

export default HomePage;