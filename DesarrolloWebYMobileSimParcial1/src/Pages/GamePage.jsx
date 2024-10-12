import { useParams } from "react-router-dom";
import { getGame } from "../Services";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GamePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [players, setPlayers] = useState("");
    const [categories, setCategories] = useState("");
    
    useEffect(() => {
        const fetchGame = async () => {
            const fetchedGame = await getGame(id);
            setTitle(fetchedGame.title);
            setDescription(fetchedGame.description);
            setPlayers(fetchedGame.players);
            setCategories(fetchedGame.categories);
        };
        fetchGame();
    }, []);

    return(
        <>
            <button onClick={() => {navigate("/")}}>Atrás</button>
            <div>Nombre: {title}</div>
            <div>Descripcion: {description}</div>
            <div>Cantidad de Jugadores: {players}</div>
            <div>Categorías: {categories}</div>
        </>
    )
}

export default GamePage; 