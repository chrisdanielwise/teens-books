import { useState, createContext, useContext,useEffect } from 'react';
// import BOOKS from "../pages/books.json";
import axios from "axios"

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]); // Corrected variable name
  const [getData,setGetData] = useState([])

  useEffect(() => {
    // Make a GET request when the component is mounted
    axios.get("http://localhost:8080/api/teensBooks/books")
      .then((response) => {
        // Handle the response data here
        setGetData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
    }, []); // The empty dependency array ensures this effect runs only once on mount
    // console.log(getData);

const onSearch = () => { // Corrected function name
  const filteredBooks = getData.filter((val) => val.title.toLowerCase().includes(searchInput.toLowerCase()));
  setFiltered(filteredBooks); // Corrected function call
}
  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput, filtered, onSearch,getData }}> {/* Corrected variable name */}
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
