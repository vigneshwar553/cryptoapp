import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders =  {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '5a44ae1096mshc5776d0b8d04127p1e2fdfjsnd6581c131bbd',
        
      
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {
    safeSearch: 'Off',
    textFormat: 'Raw'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '5a44ae1096mshc5776d0b8d04127p1e2fdfjsnd6581c131bbd',
    
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
export const { useGetCryptoNewsQuery } = cryptoNewsApi;

