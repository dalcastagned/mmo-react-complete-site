import React, { useCallback, useEffect, useState } from "react";
import { StyledSearchBar, SearchBarText } from "./SearchBar.elements";

export const SearchBar = ({ sourceList, setList, listSize, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBool, setSearchBool] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setNewList = useCallback(
    (newList) => {
      setList(newList);
    },
    [setList]
  );

  useEffect(() => {
    const filteredGames = sourceList.filter((game) => {
      return game.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    searchValue !== "" ? setNewList(filteredGames) : setNewList(sourceList);
    searchValue !== "" ? setSearchBool(false) : setSearchBool(true);
  }, [searchValue, sourceList, setNewList, searchBool]);

  return (
    <>
      <StyledSearchBar
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {searchBool ? (
        <SearchBarText>{`Total found (${listSize})`}</SearchBarText>
      ) : listSize > 0 ? (
        <SearchBarText>{`Results for "${searchValue}" (${listSize})`}</SearchBarText>
      ) : (
        <SearchBarText>{`Not found "${searchValue}"`}</SearchBarText>
      )}
    </>
  );
};
