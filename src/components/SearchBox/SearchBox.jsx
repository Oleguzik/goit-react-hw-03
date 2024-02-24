import { useId } from "react";
import css from "./SearchBox.module.css";

function SearchBox({ search, onSearch, children }) {
  const id = useId();
  return (
    <div className={css.box}>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        name="search"
        id={id}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
