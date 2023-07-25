import React, { createContext, useContext, useState } from 'react';
 
import { Search } from '../components/Search';

const StateContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
      },
    });

    const data = await res.json();

    console.log(data)

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);