//Components
import StoreNotes from './components/storeNotes';
import GetNotes from './components/getNotes';

//CSS
import './components/storeNotes/styles.css';
import './components/getNotes/styles.css';
import './styles/global.css';

//Context
import AddStoreProvider from './contexts/addNote';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AddStoreProvider>
      <div className="main-container">
        <StoreNotes />
        <GetNotes />
      </div>
      <ToastContainer />
    </AddStoreProvider>
  );
}

export default App;
