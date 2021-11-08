import { Component } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const allReadyPresentContact = this.state.contacts.some(
      elem => elem.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (allReadyPresentContact) {
      return alert(`${data.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilterContact = () => {
    const { filter, contacts } = this.state;
    const filterContact = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact),
    );
  };

  delContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const { formSubmitHandler, handleFilterChange, delContact } = this;
    const getContact = this.handleFilterContact();

    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList contacts={getContact} deleteContact={delContact} />
      </div>
    );
  }
}

export default App;
