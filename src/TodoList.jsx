import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditValue(todos[index]);
    };

    const handleUpdateTodo = () => {
        const updatedTodos = todos.map((todo, index) => 
            index === editIndex ? editValue : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditValue('');
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">To-Do List</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a new task"
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleAddTodo}>Add</button>
                </div>
            </div>
            {editIndex !== null && (
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={editValue}
                        onChange={handleEditChange}
                        placeholder="Edit task"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success" onClick={handleUpdateTodo}>Update</button>
                    </div>
                </div>
            )}
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {todo}
                        <div>
                            <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEditTodo(index)}>Edit</button>
                            <button className="btn btn-danger btn-sm " onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
