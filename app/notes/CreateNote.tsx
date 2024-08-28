'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateNote = () => {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const create = async() => {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records'), {
            method: 'POST', 
            headers: {
                'Content-Type':'application/JSON', 
            }, 
            body: JSON.stringify({
                name, 
                content
            })
        }
        router.refresh();
    }

    return (
        <form onSubmit={create}>
            <h3>Create a new note</h3>
            <input
            type="text"
            placeholder="Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <textarea 
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Create Note</button>
        </form>
    )

}