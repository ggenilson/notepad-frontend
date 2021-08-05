//Components
import StoreNotes from './components/storeNotes';
import GetNotes from './components/getNotes';

//CSS
import './components/storeNotes/styles.css';
import './components/getNotes/styles.css';
import './styles/global.css';

//Context
import AddStoreProvider from './contexts/addNote';

function App() {
  return (
    <AddStoreProvider>
      <div className="main-container">
        <StoreNotes />
        <GetNotes />
      </div>
    </AddStoreProvider>
  );
}

export default App;
