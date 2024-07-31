import { NoteData } from "../types/types";
import NoteForm from "./NoteForm";

export default function NewNote() {
  return (
    <div>
      <NoteForm
        onSubmit={function (data: NoteData): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
