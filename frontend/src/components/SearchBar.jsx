import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value); // Εκτελεί την αναζήτηση όταν πατηθεί Enter
    }
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder || "Αναζήτηση..."}
      fullWidth
      onKeyDown={handleSearch} 
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }} 
      className="SearchBarClass"
    />
  );
};

export default SearchBar;
