import Notes from "./pages/Notes";
import NoteProvider from "./context/NoteContext";

function App() {
  return (
    <div id="app">
      <NoteProvider>
        <Notes />
      </NoteProvider>
    </div>
  );
}

export default App;
