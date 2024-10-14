import { useNavigate } from "react-router-dom";
import styles from"./Game.module.css"

const Game = ({ data, handleDelete }) => {
    const navigate = useNavigate();

    return(
        <div className={styles.gameContainer}>
            <h3 className={styles.gameTitle}>{data.title}</h3>
            <button className={styles.btnDetails} onClick={() => {navigate("/game/" + data.id)}}>Detalles</button>
            <button className={styles.btnDelete} onClick={handleDelete}>Borrar</button>
        </div>
    )
}

export default Game;