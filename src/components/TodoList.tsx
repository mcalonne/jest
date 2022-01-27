import React, { useEffect } from 'react';
import TodoItem  from '../types/TodoItem';
import useSafeState from '../customHooks/useSafeState';

const TodoList: React.FC<TodoItem[]> = props => {
    const [todoItems, setTodoItems] = useSafeState<Array<TodoItem >>([]);
    useEffect(() => {
        let timer = setTimeout(() => setTodoItems([
            { id: 1, label: "Todo 1", isDone: false},
            { id: 2, label: "My todo 2", isDone: true}
        ]), 1500);
        return () => { 
            clearTimeout(timer);
        }
    }, []);
    return (
        <>
            <h2>My TodoList</h2>
            <ul>
                {todoItems.map(currentItem => <li key={currentItem.id}>{currentItem.label}</li>)}
            </ul>
        </>
    );
}

export default TodoList;