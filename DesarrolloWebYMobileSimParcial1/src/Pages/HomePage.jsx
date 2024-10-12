import { getGames, deleteGame } from "../Services"
import Game from "../Components/Game"
import { useEffect, useState } from "react"
import Modal from "../Components/Modal"

const HomePage = () => {
    const [games, setGames] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const fetchGames = async () => {setGames(await getGames());}

    const newGame = () => {
        setIsCreating(true)
    }

    useEffect(() => {
        fetchGames();
    }, [])

    return (
        <>
            <h1>Gestor de los Juegos Olímpicos</h1>
            <button onClick={newGame}>Agregar Juego</button>
            {games.map((game) => {
                return (
                    <Game data={game} handleDelete={async () => {setGames(await deleteGame(game.id));}}/>
                )
            })}
            <Modal isOpen={isCreating} setgames={setGames} close={()=>{setIsCreating(false)}} title={"Nuevo Juego"}></Modal>            
        </>
    )
}

export default HomePage;