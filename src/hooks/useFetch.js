import { useState } from "react"
import axios from "axios"
const useFetch = url => {
    const [reponse, setReponse] = useState()

    const getApi = () => {
        axios.get(url)
          .then((res) => setReponse(res.data))
          .catch((err) => console.log(err));
    }

    const getApiTypes = (urlTypes) => {
axios.get(urlTypes)
  .then((res) => {
    const obj = {
        results: res.data.pokemon.map(poke => 
            poke.pokemon)
    }
    setReponse(obj)
  })
  .catch((err) => console.log(err));
    }

    return [ reponse, getApi, getApiTypes ]
}
export default useFetch