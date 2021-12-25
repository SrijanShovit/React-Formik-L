import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import EnrollmentForm from './controlcomponents/EnrollmentForm';
// import YoutubeForm from './components/YoutubeForm'
// import FormikContainer from './controlcomponents/FormikContainer';
import LoginForm from './controlcomponents/LoginForm';
// import RegistrationForm from './controlcomponents/RegistrationForm';

function App() {
  return (
    <ChakraProvider>

    <div className="App">
     {/* <YoutubeForm/> */}
     {/* <FormikContainer/> */}
     <LoginForm/>
     {/* <RegistrationForm/> */}
     {/* <EnrollmentForm/> */}
    </div>
    </ChakraProvider>
  );
}

export default App;
