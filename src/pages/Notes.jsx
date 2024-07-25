// import { fakeData as notes } from "../assets/fakeData";

import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

const Notes = () => {
  const { notes, setNotes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} setNotes={setNotes} />
      ))}
      <Controls />
    </div>
  );
};
export default Notes;
