import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useFetchContactsQuery } from "redux/contactSlice";
import actions from "redux/actions";
import ContactItem from "./ContactItem";
import Loader from "components/Loader";

function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <>
      {isFetching && <Loader />}
      <ul>
        {!isFetching &&
          data.map((contact) => <ContactItem key={contact.id} {...contact} />)}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

const filteredContacts = (contacts, filter) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const mapStateToProps = ({ contacts }) => ({
  contacts: filteredContacts(contacts.items, contacts.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onContactDel: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
