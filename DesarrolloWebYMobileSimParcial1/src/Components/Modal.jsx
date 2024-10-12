import { postGame } from "../Services";
import { useState } from "react";

const Modal = ({isOpen, setgames, close, title}) => {

    const [gameTitle, setGameTitle] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [gamePlayers, setGamePlayers] = useState(0);
    const [gameCategories, setGameCategories] = useState("");

    const saveGame = async () => {
        if(gameTitle == "" || gameDescription == "" || gamePlayers == "" || gameCategories == ""){
            alert("No se pudo guardar el juego porque hay campos inválidos");
        }
        else{
            const gameData = {
                title: gameTitle,
                description: gameDescription,
                players: gamePlayers.toString(),
                categories: gameCategories
            }
            setgames(await postGame(gameData));
            close();
        }
    }

    return(
        isOpen ? 
        <>
            <div>
                <h3>{title}</h3>
                <input type="text" placeholder="Nombre del Juego" onChange={(e) => setGameTitle(e.target.value)}/>
                <input type="text" placeholder="Descripción del Juego" onChange={(e) => setGameDescription(e.target.value)}/>
                <p>Cantidad de Participantes:</p>
                <input type="number" onChange={(e) => setGamePlayers(e.target.value)}/>
                <p>Categorías</p>
                <select name="categories" onChange={(e) => setGameCategories(e.target.value)}>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Men / Women">Men / Women</option>
                </select>
                <button onClick={close}>Cancelar</button>
                <button onClick={saveGame}>Aceptar</button>
            </div>
        </> 
        : 
        <></>
    )
}

export default Modal;