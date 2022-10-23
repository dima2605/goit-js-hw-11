import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30798285-a0855525bbca5f1784a9faf4a';
export const ITEMS_PER_PAGE = 40;

export async function getSearchImage({ value, page = 1 }) {
  const options = {
    params: {
      key: API_KEY,
      q: value,
      page: page,
      per_page: ITEMS_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
}
