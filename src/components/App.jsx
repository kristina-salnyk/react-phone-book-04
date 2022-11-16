import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { Title } from './App.styled';
import Notification from './Notification';
import noResultsImg from '../img/no-result.png';
import {  getVisibleContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <Box
      p="30px 40px"
      bg="white"
      width="450px"
      m="10px auto"
      display="grid"
      gridGap="30px"
      boxShadow={'var(--primary-box-shadow)'}
    >
      <Box display="grid" gridGap="10px">
        <Title as="h1">Phonebook</Title>
        <ContactForm />
      </Box>

      <Box display="grid" gridGap="10px">
        <Title>Contacts</Title>
        <Filter/>
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="There is no contacts" image={noResultsImg} />
        )}
      </Box>
    </Box>
  );
};
