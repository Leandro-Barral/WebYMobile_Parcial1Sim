import { postGame } from "../Services";
import { useState } from "react";
import styles from "./Modal.module.css"

const Modal = ({ isOpen, setgames, close, title }) => {

    const [gameTitle, setGameTitle] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [gamePlayers, setGamePlayers] = useState(0);
    const [gameCategories, setGameCategories] = useState("");

    const saveGame = async () => {
        if (gameTitle == "" || gameDescription == "" || gamePlayers == "" || gameCategories == "") {
            alert("No se pudo guardar el juego porque hay campos inválidos");
        }
        else {
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

    return (
        isOpen ?
            <>
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3 className={styles.modalTitle}>{title}</h3>

                        <div className={styles.formGroup}>
                            <label>Nombre del Juego</label>
                            <input
                                type="text"
                                className={styles.inputText}
                                placeholder="Nombre del Juego"
                                onChange={(e) => setGameTitle(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Descripción del Juego</label>
                            <input
                                type="text"
                                className={styles.inputText}
                                placeholder="Descripción del Juego"
                                onChange={(e) => setGameDescription(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Cantidad de Participantes</label>
                            <input
                                type="number"
                                className={styles.inputNumber}
                                onChange={(e) => setGamePlayers(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Categorías</label>
                            <select
                                className={styles.selectCategory}
                                onChange={(e) => setGameCategories(e.target.value)}
                            >
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Men / Women">Men / Women</option>
                            </select>
                        </div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.cancelButton} onClick={close}>Cancelar</button>
                            <button className={styles.acceptButton} onClick={saveGame}>Aceptar</button>
                        </div>
                    </div>
                </div>

            </>
            :
            <></>
    )
}

export default Modal;