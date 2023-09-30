import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" })

async function getLivros() {
    const responce = await livrosAPI.get('/')

    return responce.data
}

export {
    getLivros
}