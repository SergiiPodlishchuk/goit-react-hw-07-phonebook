import axios from "axios";
import contactAction from "./contactAction";

const fetchContacts = () => (dispatch) => {
  dispatch(contactAction.fetchContactsRequest());
  axios
    .get("http://localhost:3004/contacts")
    .then(({ data }) => dispatch(contactAction.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactAction.fetchContactsError(error)));
};

const addContact = ({ name, number }) => async (dispatch) => {
  dispatch(contactAction.addContactsRequest());
  await axios
    .post("http://localhost:3004/contacts", { name, number })
    .then(({ data }) => dispatch(contactAction.addContactsSuccess(data)))
    .catch((error) => dispatch(contactAction.addContactsError(error)));
};

const removeContacts = (id) => async (dispatch) => {
  dispatch(contactAction.removeContactsRequest());
  await axios
    .delete(`"http://localhost:3004/contacts/${id}"`)
    .then(() => dispatch(contactAction.removeContactsSuccess(id)))
    .catch((error) => dispatch(contactAction.removeContactsError(error)));
};

export default {
  fetchContacts,
  addContact,
  removeContacts,
};
