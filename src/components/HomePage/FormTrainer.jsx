import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainer } from '../../store/states/trainer.slice'
import { useNavigate } from "react-router"
import './PokedexPage/style/FormTrainer.css'
const FormTrainer = () => {
    const trainerInput = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim().toUpperCase()))
        navigate('/pokedex')  
    }

  return (
    <form onSubmit={handleSubmit}>
        <input className="input__HomePage" ref={trainerInput} type="text" />
        <button className="button__HomePage">Lets Start</button>
    </form>

  )
}
export default FormTrainer