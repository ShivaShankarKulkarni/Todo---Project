import React from 'react';
import '../App.css';
export function Todos({todos}){
    return (
        <div className="todos"> 
            {todos.map(todo => (
                <div className="todo" key={todo.id}> 
                    <h1 className="todo-title">{todo.title}</h1> 
                    <h2 className="todo-description">{todo.description}</h2>
                    <button className="todo-button">
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}