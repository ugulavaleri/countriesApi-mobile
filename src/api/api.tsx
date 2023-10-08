import axios from 'axios';
import {Dispatch, SetStateAction} from 'react';
import {countryType} from '../types/globalTypes';

export interface apiResponse {
  error: boolean;
  response: {message: string; data: string | countryType[]};
}

const Api = {
  sendCountryRequest: async (
    method: 'GET' | 'POST',
    setData: Dispatch<SetStateAction<any>>,
  ) => {
    const response: apiResponse = {
      error: false,
      response: {message: '', data: ''},
    };
    try {
      const apiResponse = await axios({
        method: method,
        url: 'https://restcountries.com/v3.1/all',
      });

      response.error = false;
      response.response = apiResponse.data;
      setData(response.response);
    } catch (e: any) {
      response.error = true;
      console.log(e);
    }

    return response.response;
  },
  sendWeatherRequest: async (
    method: 'GET' | 'POST',
    latlng: number[],
    setData?: Dispatch<SetStateAction<any>>,
  ) => {
    const [lat, lng] = latlng;

    const response: apiResponse = {
      error: false,
      response: {message: '', data: ''},
    };
    try {
      const apiResponse = await axios({
        method: method,
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9bffa026da8cf56f97cacafee04b68d4`,
      });

      response.error = false;
      response.response = apiResponse.data;
      if (setData) setData(response.response);
    } catch (e: any) {
      response.error = true;
      console.log(e);
    }

    return response.response;
  },
};

export default Api;
