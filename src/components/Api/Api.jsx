import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '40461842-311e9c91418524c76f89b02af'
const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data;
};

export default fetchImages;