
async function getNotes () {
    const res = await fetch('http://127.0.0.1:8090//api/collections/api/Notes/records?page=1&perPage=30')

    // The components are built on the server so you can do data fetching in them as well.
    const data = await res.json();
    return data?.items as any[];

}


export default async function NotesPage() {
    return (
        <div>
            <h1>Notes</h1>
        </div>
    )
}