import axios from "axios";

const instance = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com/",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "43f1b602a5msh2a73224b6a0cdaep178a3fjsn79f86c3cac61",
  },
});

export const getGameData = (url) => {
    return instance.get(url).then(response => {
        return response.data
    })
}