const URL = "http://localhost:3000/api/games/";

export const getGames = async () => {
    const res =  await fetch(URL);
    return res;
}

export const getGame = async (id) => {
    const res = await fetch(URL + id);
    return res;
}

export const postGame = async (gameData) => {
    const res = await fetch(URL, {
        method: POST,
        body: JSON.stringify(gameData)
    });
    return res;
}

export const putGame = async (gameData) => {
    const res = await fetch(URL + gameData.id, {
        method: PUT,
        body: JSON.stringify(gameData)
    });
    return res;
}

export const deleteGame = async (id) => {
    const res = await fetch(URL + id, {
        method: DELETE
    });
    return res;
}