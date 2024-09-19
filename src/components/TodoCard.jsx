import React from 'react';

const TodoCard = (props) => {
    const {children,handleTodoEdit,handleTodoDelete,index} = props
    return (
            <li className='flex items-center gap-3 p-3.5 rounded-xl bg-white'>
                {children}
                <div className='flex items-center gap-3'>
                    <button onClick={()=>handleTodoEdit(index)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={()=>handleTodoDelete(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>
    );
};


export default TodoCard;
