import React, {useState} from 'react';

const TodoInput = (props) => {
    const {handleAddTodo,todoValue,setTodoValue} = props

    return (
        <div className="TodoInput">
            <header className="flex items-stretch max-w-[800px] w-full mx-auto gap-3">
                <input
                    value={todoValue}
                    onChange={(e) => {
                        setTodoValue(e.target.value)
                    }}
                    type="text"
                    placeholder='Type Todo ...'
                    className="flex-1 rounded-xl outline-none w-full p-3.5 border-none bg-white"
                />
                <button
                    onClick={()=> {
                        handleAddTodo(todoValue);
                        setTodoValue('');
                    }}
                    className="rounded-xl bg-transparent transition-opacity duration-200 cursor-pointer p-3.5 border-none bg-white hover:opacity-70">Add
                </button>

            </header>
        </div>
    );
};


export default TodoInput;
