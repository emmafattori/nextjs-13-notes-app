import PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './Notes.module.css';
import { CreateNote } from './CreateNote';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getNotes() {
const db = new PocketBase('http://127.0.0.1:8090');
const data = await db.collection('notes').getList();

//   const result = await db.rec
//   const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
//   const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {

  const notes = await getNotes();

  return(
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return (
            <Note key={note.id} note={note} />
          );
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, name, content, created } = note || {};
    console.log(note)
  return (
    <Link href={`/notes/${id}`} key={`note-${id}`}>
      <div className={styles.note}>
        <h2>{name}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}