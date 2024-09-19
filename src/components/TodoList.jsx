import React from 'react';
import TodoCard from "./TodoCard";

const TodoList = (props) => {
    const {todos} = props

    return (
            <ul className='flex flex-col max-w-[800px] w-full mx-auto gap-3 my-5'>
                {todos.map((todo,todoIndex)=>{
                    return (
                            <TodoCard handleTodoEdit={props.handleTodoEdit} // Pass the function directly
                                      handleTodoDelete={props.handleTodoDelete}
                                      key={todoIndex}
                                      index={todoIndex}
                                      todo={todo}>
                                <p className='flex-1'>{todo}</p>
                            </TodoCard>
                    )
                })}
            </ul>
    );
};


export default TodoList;
