import PropTypes from 'prop-types';
import './Filter.css';
export const FilterBar = ({ handleChange }) => {
  return (
    <>
      <h3>Find your contacts by name</h3>
      <div className="filter-container">
        <input
          type="text"
          name="filter"
          className="filter__input"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

FilterBar.propTypes = {
  handleChange: PropTypes.func,
};
