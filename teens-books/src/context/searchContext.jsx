import { useState, createContext, useContext } from 'react';
import BOOKS from "../pages/books.json";

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]); // Corrected variable name

  const onSearch = () => { // Corrected function name
    const filteredBooks = BOOKS.filter((val) => val.title.toLowerCase().includes(searchInput.toLowerCase()));
    setFiltered(filteredBooks); // Corrected function call
  }
        
  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput, filtered, onSearch }}> {/* Corrected variable name */}
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
