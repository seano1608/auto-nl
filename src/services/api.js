import axios from 'axios';

const API_URL = 'https://whitelabel.auto.nl/stock/cars';

export const fetchCars = async (ownerId) => {
    try {
        const response = await axios.get(API_URL, {
            params: { ownerid: ownerId, skip: 0, limit: 25 }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};
