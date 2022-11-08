import React, { useState } from 'react';
import './todo-list.css';
import { TodoListItem, TodoListItemComponent } from "../todo-list-item/todo-list-item";
import { Button } from "../button/Button";

export interface TodoListProps {
    userId: number,
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export interface TodoListState {
    todoList: ReadonlyArray<TodoListItem> | undefined;
}

const getUserTodos = (userId: number): Promise<ReadonlyArray<TodoListItem>> => {
    const fetchConfig = ({ method: 'GET' });
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, fetchConfig)
        .then<ReadonlyArray<TodoListItem>>(response => response.json());
}

/**
 * Primary UI component for user interaction
 */
export const TodoListComponent = ({
                                      userId = -1,
                                      ...props
                                  }: TodoListProps) => {
    const [state, setState] = useState({} as TodoListState);
    return (
        <div {...props}>
            <div hidden={!state.todoList}>
                <b>Список дел</b>
            </div>
            {
                !!state.todoList
                    ? state.todoList.map((item) => <TodoListItemComponent key={item.id} item={item}/>)
                    : null
            }
            <Button label={state?.todoList ? "Обновить список дел" : "Загрузить список дел"} size="small" onClick={
                () => getUserTodos(userId).then(todoList => setState({ todoList }))
            }/>
        </div>
    );
};
