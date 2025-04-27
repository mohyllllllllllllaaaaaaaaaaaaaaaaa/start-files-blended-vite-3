 import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';
 const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
   { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
   { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({onSubmit}) => {
  const[query, setQuery] = useState("");

  const handeleChange = event => {
setQuery(event.target.value);
  };
  const handeleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };
  return (
    <form className={styles.form} onSubmit={handeleSubmit}>
  <button className={styles.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <select
    aria-label="select"
    className={styles.select}
    name="region"
    required
    defaultValue="default"
    onChange={handeleChange}
  >
    <option disabled value="default">
      Select a region
    </option>
    {regions.map(({ id, value, name }) => (
  <option key={id} value={value}>
    {name}
  </option>
))}
    <option value="america">America</option>
  </select>
</form>
  );
};

export default SearchForm;
