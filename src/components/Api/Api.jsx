import axios from 'axios';

const API_KEY = '40461842-311e9c91418524c76f89b02af'


const fetchImages = async () => {
  const fetch = await axios.get(
    `https://pixabay.com/api/?q=&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return fetch.data;
};

export default fetchImages;