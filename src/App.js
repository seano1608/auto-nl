import './App.css';
import {useEffect, useState} from "react";
import {fetchCars} from "./services/api";


const App = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            try {
                const data = await fetchCars('toyota', 0, 15);
                setCars(data);
            } catch (error) {
                console.error(error);
            }
        }
        getCars();
    }, []);


  return (
    <div className="App">
      Let's go!
    </div>
  );
}

export default App;
