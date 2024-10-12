import { useNavigate } from "react-router-dom";

const Game = ({ data, handleDelete }) => {
    const navigate = useNavigate();

    return(
        <div>
            <h3>{data.title}</h3>
            <button onClick={() => {navigate("/game/" + data.id)}}>Detalles</button>
            <button onClick={handleDelete}>Borrar</button>
        </div>
    )
}

export default Game;