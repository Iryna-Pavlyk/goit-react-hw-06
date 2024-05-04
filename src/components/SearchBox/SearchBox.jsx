import { useState } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={(evt) => changeFilter(setInputValue(evt.target.value))}
        placeholder="Rosie Simpson"
      />
    </div>
  );
};

export default SearchBox;
