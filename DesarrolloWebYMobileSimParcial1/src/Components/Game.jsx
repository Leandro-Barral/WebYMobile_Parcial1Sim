import { useNavigate } from "react-router-dom";
import { deleteGame } from "../Services";

const Game = ({ data }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteGame(data.id);
    }

    return(
        <div>
            <h3>{data.title}</h3>
            <button onClick={() => {navigate("/game/" + data.id)}}>Detalles</button>
            <button onClick={handleDelete}>Borrar</button>
        </div>
    )
}

export default Game;