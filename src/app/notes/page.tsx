import PocketBase from 'pocketbase';
import styles from './Notes.module.css';
import Link from 'next/link';

const pb = new PocketBase('http://127.0.0.1:8090');

async function getNotes() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30'
  );
  const data = await res.json();

  return data?.items as any[];
}

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2 className='title'>{title}</h2>
        <h5 className='content'>{content}</h5>
        <p className='created'>{created}</p>
      </div>
    </Link>
  );
};

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className={`notelists ${styles.grid}`}>
      {notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
