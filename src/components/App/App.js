import { Component } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import dataContacts from '../../FileJson/FileJson.json';

class App extends Component {
  state = {
    contacts: dataContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {
    console.log('unmount');
  }

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
    console.log('APP componentDidMount');
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
