import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const storageContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storageContacts);

  //   if (parsedContacts && parsedContacts.length !== 0) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  const handleChangeFilter = e => setFilter(e.currentTarget.value);

  const formAddContact = data => {
    const dataContact = [
      { id: nanoid(), name: data.name, number: data.number },
    ];

    const isExist = contacts.some(contact => {
      return (
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number.toLowerCase() === data.number.toLowerCase()
      );
    });

    for (const contact of contacts) {
      if (isExist) {
        alert(
          `Name '${dataContact[0].name}' or number '${dataContact[0].number}' is already in contacts!`
        );
        return;
      }
    }
    setContacts([...contacts, ...dataContact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>

      <Form onSubmit={formAddContact} />

      <FilterBar handleChange={handleChangeFilter} />

      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const storageContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(storageContacts);

//     if (parsedContacts && parsedContacts.length !== 0) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleChange = e => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   formAddContact = data => {
//     const dataContact = [
//       { id: nanoid(), name: data.name, number: data.number },
//     ];

//     const isExist = this.state.contacts.some(contact => {
//       return (
//         contact.name.toLowerCase() === data.name.toLowerCase() ||
//         contact.number.toLowerCase() === data.number.toLowerCase()
//       );
//     });

//     for (const contact of this.state.contacts) {
//       if (isExist) {
//         alert(
//           `Name '${dataContact[0].name}' or number '${dataContact[0].number}' is already in contacts!`
//         );
//         return;
//       }
//     }
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.concat(dataContact),
//       };
//     });
//   };

//   deleteContact = contactId => {
// // ? Instead creating new array from contacts - we just filter
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const filteredContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter)
//     );

//     return (
//       <div className="Phonebook-container">
//         <h1 className="Phonebook__title">Phonebook</h1>

//         <Form onSubmit={this.formAddContact} />

//         <FilterBar handleChange={this.handleChange} />

//         <ContactsList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
