import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const stateName = e.currentTarget.name;
    const stateValue = e.currentTarget.value;

    switch (stateName) {
      case 'name':
        setName(stateValue);
        break;

      case 'number':
        setNumber(stateValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
        autoComplete="off"
        className="Phonebook__form-container"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name <br />
          <input
            type="text"
            name="name"
            className="Phonebook__form-input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="number">
          Number <br />
          <input
            type="tel"
            name="number"
            className="Phonebook__form-input"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="Phonebook__form-submit-button">
          Add contact
        </button>
      </form>
    </>
  );
};
// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <>
//         <form
//           autoComplete="off"
//           className="Phonebook__form-container"
//           onSubmit={this.handleSubmit}
//         >
//           <label htmlFor="name">
//             Name <br />
//             <input
//               type="text"
//               name="name"
//               className="Phonebook__form-input"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label htmlFor="number">
//             Number <br />
//             <input
//               type="tel"
//               name="number"
//               className="Phonebook__form-input"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit" className="Phonebook__form-submit-button">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
};
