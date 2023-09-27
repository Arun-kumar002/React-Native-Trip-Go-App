import axios from 'axios';
import { global } from '../global';


export const getPlaces = async ({ latitude, longitude, type }) => {
    try {

        if (latitude <= 0 && longitude <= 0) {
            return []
        }

        let rapidUrl = `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`;

        const options = {
            params: {
                latitude: latitude,
                longitude: longitude,
                limit: '30',
                currency: 'USD',
                distance: '2',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
                'X-RapidAPI-Key': global.rapidApiKey,
                'X-RapidAPI-Host': global.rapidHost
            }
        };

        const response = await axios.get(rapidUrl, options);
        return response?.data?.data
    } catch (error) {
        console.log(error);
        return undefined;
    }
}


