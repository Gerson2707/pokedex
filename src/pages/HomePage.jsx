import FormTrainer from "../components/HomePage/FormTrainer";
import "./styles/HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="container__HomePage">
        <img className="img_pokedex-HP" src="./pokedex.png" alt="" />

        <h2>Hi trainer!</h2>
        <p>To see pokemon's information tell me your trainer name</p>
      <FormTrainer />
      </div>

      <footer className="rectangule-red-footer">
        <div className="rectangule-black-footer"></div>
        <div className="circle-footer"></div>
      </footer>
    </div>
  );
};
export default HomePage;
