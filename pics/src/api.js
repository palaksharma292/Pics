import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Qmpi_iW2i1hdD52PCpje3JFV9qVVn65wiTXNhv5zV2k'
        },
        params: {
            query: term
        }
    });
    //console.log(response.data.results);
    return response.data.results;
};

export default searchImages;