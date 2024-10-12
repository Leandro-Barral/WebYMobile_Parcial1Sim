const URL = "http://localhost:3000/api/games/";

export const getGames = async () => {
    const res =  await fetch(URL);
    return await res.json();
}

export const getGame = async (id) => {
    const res = await fetch(URL + id);
    const gameArray = await res.json();
    return gameArray[0];
}

export const postGame = async (gameData) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(gameData)
    });
    return await res.json();
}

export const putGame = async (gameData) => {
    const res = await fetch(URL + gameData.id, {
        method: 'PUT',
        body: JSON.stringify(gameData)
    });
    return await res.json();
}

export const deleteGame = async (id) => {
    const res = await fetch(URL + id, {
        method: 'DELETE'
    });
    return await res.json();
}