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
          <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Available Toyota Cars</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cars.map(car => (
                      <div key={car.id.carId} className="border p-4 rounded">
                          <img src={car.imageUrls[0]} alt={`${car.brand} ${car.model}`}
                               className="w-full h-48 object-cover mb-4"/>
                          <h2 className="text-xl font-semibold">{car.brand} {car.model}</h2>
                          <p className="text-gray-600">{car.type}</p>
                          <p className="text-blue-600 font-bold">€{car.price}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default App;
