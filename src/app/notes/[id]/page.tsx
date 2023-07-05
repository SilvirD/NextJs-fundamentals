async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
  );
  const data = await res.json();

  return data
}

export default async function NotePage() {
  return (
    <div>
      <h1>notes</h1>
    </div>
  );
}
