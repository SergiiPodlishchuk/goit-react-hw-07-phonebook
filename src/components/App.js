import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import contactsOperation from "../services/fetchContacts";
import contactSelectors from "../redux/contacts/contactSelectors";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className="phoneBook_container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="title_anim"
          timeout={500}
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          classNames="form_fade"
          timeout={500}
          unmountOnExit
        >
          <ContactForm />
        </CSSTransition>
        <Filter />
        {this.props.isLoadingContacts && <h1>грузим</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
