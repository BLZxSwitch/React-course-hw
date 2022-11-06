import './app.css';
import React, { useState } from 'react';
import { TodoList, TodoListProps } from "./stories/components/todo-list/Todo-list";
import { Button } from "./stories/components/button/Button";

export function App() {
    const [count, setCount] = useState(0);
    const todoList: ReadonlyArray<TodoListProps> = [{
        todos: ["First", "Second", "First"],
        date: "22.11.2222",
    }, {
        todos: ["aaaaaaaaa", "xxxxxxx", "eeeeeeeee"],
        date: "23.11.2222",
    }]
    return (
        <div className="container">
            <div>
                {todoList.map((item) => <TodoList key={item.date} date={item.date} todos={item.todos}/>)}
            </div>
            <div className="red">
                {count}
                <Button size="small" primary onClick={() => setCount(count + 1)} label="ADD 1"/>
            </div>
        </div>
    );
}
