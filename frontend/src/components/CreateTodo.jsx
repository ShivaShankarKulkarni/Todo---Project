import { useState } from "react";
import '../App.css';

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="container">
            <input 
                type="text" 
                className="input-field" 
                placeholder="Title" 
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input 
                type="text" 
                className="input-field" 
                placeholder="Description" 
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button 
                className="button" 
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(async function(res){
                        const json = await res.json();
                        console.log('Hello world');
                        alert("Todo added");
                    })
                    console.log("Outside the then");
                }}
            >
                Add a Todo
            </button>
        </div>
    );
}