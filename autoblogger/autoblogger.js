import pivotrade from "pivotrade";
const { Session, Algorithm } = pivotrade;
const SMA = Algorithm.SMA;
const Stochastic = Algorithm.Stochastic;
import finnhub from 'finnhub';
import axios from 'axios';
import axiosExtensions from 'axios-extensions';
const cacheAdapterEnhancer = axiosExtensions.cacheAdapterEnhancer;
const throttleAdapterEnhancer = axiosExtensions.throttleAdapterEnhancer;
 
const http = axios.create({
	baseURL: '/',
	headers: { 'Cache-Control': 'no-cache' },
	// cache will be enabled by default
	adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4pc8f48v6qpateibm0" // Replace this
const finnhubClient = new finnhub.DefaultApi()

// Make a request for a user with a given ID
const getStockSymbols = () => {
  return http.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bv4pc8f48v6qpateibm0')
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      return error;
    })
    .then(function (data) {
      // always executed
      return data;
    });
}

async function getData() {
  const stockSymbolsList = (await getStockSymbols()).map(stockObj => stockObj.symbol);
  console.log(stockSymbolsList)
}

getData();
 