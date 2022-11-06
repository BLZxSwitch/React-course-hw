import React from 'react';
import './todo-list.css';
import { TodoListItem } from "../todo-list-item/todo-list-item";

export interface TodoListProps {
    date: string | undefined,
    todos: ReadonlyArray<string>,
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TodoList = ({
                             date = undefined,
                             todos = [],
                             ...props
                         }: TodoListProps) => {
    return (
        <div className="todo-list" {...props}>
            <strong>{date}</strong>
            {todos.map((item) => <TodoListItem key={date} item={item}/>)}
        </div>
    );
};
