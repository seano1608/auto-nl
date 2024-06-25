import './App.css';
import {useEffect, useState} from "react";
import {fetchCars} from "./services/api";


const App = () => {

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const getCars = async () => {
            try {
                const data = await fetchCars('toyota', 0, 15);
                setCars(data);
                setFilteredCars(data);
            } catch (error) {
                console.error(error);
            }
        }
        getCars();
    }, []);

    const handleFilterChange = () => {
        if (isFiltered) {
            setFilteredCars(cars);
        } else {
            const filtered = cars.filter(car =>
                car.accessories.some(accessory =>
                    accessory.items.includes('Apple Carplay/Android Auto')
                )
            );
            setFilteredCars(filtered);
        }
        setIsFiltered(!isFiltered);
    };

    const handleSortOrderChange = () => {
        const updatedSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(updatedSortOrder);
        applyFilters(filteredCars, updatedSortOrder);
    };

    const applyFilters = (carplay, sort) => {
        let filtered = cars;

        if (carplay) {
            filtered = filtered.filter(({ accessories }) =>
                accessories.some(({ items }) =>
                    items.includes('Apple Carplay/Android Auto')
                )
            );
        }

        // Sort by price
        filtered.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);

        setFilteredCars(filtered);
    };

  return (
      <div className="App">
          <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Available Toyota Cars</h1>
              <button
                  onClick={handleFilterChange}
                  className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                  {isFiltered ? 'Show All Cars' : 'Filter by Apple CarPlay/Android Auto'}
              </button>
              <button
                  onClick={handleSortOrderChange}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                  {sortOrder === 'asc' ? 'Sort by Price: High to Low' : 'Sort by Price: Low to High'}
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredCars.map(car => (
                      <div key={car.id.carId} className="border p-4 rounded">
                          <img
                              src={car.imageUrls[0]}
                              alt={`${car.brand} ${car.model}`}
                              className="w-full h-48 object-cover mb-4"
                          />
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
