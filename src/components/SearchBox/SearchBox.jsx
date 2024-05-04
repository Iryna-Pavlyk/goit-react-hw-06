import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleFilter = (evt) => {
    setInputValue(evt.target.value);
    dispatch(changeFilter(inputValue));
  };

  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleFilter}
        placeholder="Rosie Simpson"
      />
    </div>
  );
};

export default SearchBox;
