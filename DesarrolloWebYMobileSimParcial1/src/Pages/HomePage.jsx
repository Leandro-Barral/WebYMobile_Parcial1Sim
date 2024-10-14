import { getGames, deleteGame } from "../Services"
import Game from "../Components/Game"
import { useEffect, useState } from "react"
import Modal from "../Components/Modal"
import styles from './HomePage.module.css';


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
        <div className={styles.homepageContainer}>
            <h1>Gestor de los Juegos Olímpicos</h1>
            <button onClick={newGame} className={styles.btnAgregarJuego}>Agregar Juego</button>
            <div className={styles.gamesContainer}>
                {games.map((game) => {
                    return (
                        <Game data={game} handleDelete={async () => {setGames(await deleteGame(game.id));}}/>
                    )
                })}
            </div>
            <Modal isOpen={isCreating} setgames={setGames} close={()=>{setIsCreating(false)}} title={"Nuevo Juego"}></Modal>            
        </div>
    )
}

export default HomePage;