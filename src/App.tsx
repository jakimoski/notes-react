import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "./components/NewNote";
import { RawNote, Tag } from "./types/types";

function App() {
  // const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", []);
  // const [tags, setTags] = useLocalStorage<Tag[]>("notes", []);

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id" element={<>Hello</>}>
          <Route index element={<p></p>} />
          <Route path="edit" element={<p>Edit</p>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
