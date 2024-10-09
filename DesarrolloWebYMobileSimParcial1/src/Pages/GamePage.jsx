import { useParams } from "react-router-dom";
import { getGame } from "../Services";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const game = getGame(id);  
    console.log(game)
    return(
        <>
            <button onClick={() => {navigate("/")}}>Volver a Inicio</button>
            <div>Nombre: {game.title}</div>
            <div>Descripcion: {game.description}</div>
            <div>Cantidad de Jugadores: {game.players}</div>
            <div>Categorías: {game.categories}</div>
        </>
    )
}

export default GamePage;