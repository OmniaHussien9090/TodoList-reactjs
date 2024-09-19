import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    //save data into todos[]
    const persistData = (newList) => {
        localStorage.setItem('todos', JSON.stringify({todos: newList}))
    }
    const handleAddTodoList = (newTodo) => {
        const newTodoList = [...todos, newTodo]
        persistData(newTodoList);
        console.log(newTodoList)
        setTodos(newTodoList);
    }
    function handleTodoEdit(index) {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleTodoDelete(index)
    }
    const handleTodoDelete = (index) => {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index;
        })
        persistData(newTodoList);
        setTodos(newTodoList)
    }
    useEffect(() => {
        if (!localStorage) {
            return
        }
        let localTodos = localStorage.getItem('todos');
        if (!localTodos) {
            return
        }
        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
    }, [])
    return (
        <div className="App  m-0 p-0 box-border text-gray-800;">
                <h1
                    className="text-center my-10 text-3xl text-blue-900 drop-shadow-lg font-bold cursor-pointer transition-all duration-300  hover:text-teal-300"
                >
                    Todo List App 🚀
                </h1>

            <main>
                <TodoInput
                    todoValue={todoValue}
                    setTodoValue={setTodoValue}
                    handleAddTodo={handleAddTodoList}
                />
                <TodoList
                    handleTodoEdit={handleTodoEdit}
                    handleTodoDelete={handleTodoDelete}
                    todos={todos}
                />
            </main>
        </div>
    );
}

export default App;
