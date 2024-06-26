import { useEffect, useState } from 'react';
import { fetchCars } from '../services/api';

const useCars = (ownerId) => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [carplayFilter, setCarplayFilter] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    // Fetching cars using the api service
    useEffect(() => {
        const getCars = async () => {
            try {
                const data = await fetchCars(ownerId);
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        getCars();
    }, [ownerId]);

    // Filtering by Apple Carplay/Android Auto and sorting by price
    useEffect(() => {
        let filtered = [...cars];

        if (carplayFilter) {
            filtered = filtered.filter(car =>
                car.accessories.some(accessory =>
                    accessory.items.includes('Apple Carplay/Android Auto')
                )
            );
        }

        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else {
            filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredCars(filtered);
    }, [cars, carplayFilter, sortOrder]);

    return {
        cars: filteredCars,
        setCarplayFilter,
        setSortOrder
    };
};

export default useCars;
