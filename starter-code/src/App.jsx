import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import Contacts from "./contacts.json";

// ContactsSliced = Contacts.slice(0, Contacts.length).map(
//   contact => (contact.pictureUrl, contact.name, contact.popularity)
// );

console.log(Contacts);
class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList: Contacts.slice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortContactName = this.sortContactName.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRandomContact() {
    this.setState({
      contactList: [
        ...this.state.contactList,
        Contacts[Math.floor(Math.random() * Contacts.length)]
      ]
    });
  }

  sortContactName() {
    this.setState({
      contactList: [...this.state.contactList].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      })
    });
  }

  sortPopularity() {
    this.setState({
      contactList: [...this.state.contactList].sort((a, b) => {
        if (a.popularity < b.popularity) {
          return -1;
        }
        if (a.popularity > b.popularity) {
          return 1;
        }
      })
    });
  }

  delete() {
    this.setState({
      contactlist: [...this.state.contactList].splice(1)
    });
  }

  render() {
    const contacts = this.state.contactList;

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortContactName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {contacts.map(contact => (
            <tbody>
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    width="100px"
                    height="100px"
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={this.delete}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
