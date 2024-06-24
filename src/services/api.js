import axios from "axios";

const API_URL = 'https://whitelabel.auto.nl/stock/cars';

export const fetchCars = async (ownerId, skip = 0, limit = 10) => {
    try {
        const response = await axios.get(API_URL, {
            params: {ownerid: ownerId, skip, limit}
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
}