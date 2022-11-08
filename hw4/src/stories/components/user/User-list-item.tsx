import React, { Component } from 'react';
import './user-list-item.css';
import { TodoListComponent } from "../todo-list/Todo-list";

export interface UserProps {
    user: User
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

export interface UserState {
}

/**
 * Компонент отображения списка пользователей
 */
export class UserListItemComponent extends Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate(nextProps: UserProps) {
        return this.props.user.id !== nextProps.user.id;
    }

    render() {
        const user = this.props.user;
        return (
            <div className="user" key={user.id}>
                <div><b>User:</b> {user.name}</div>
                <div><b>Login:</b> {user.username}</div>
                <div><b>Email:</b> {user.email}</div>
                <TodoListComponent userId={user.id} key={user.id}/>
            </div>
        );
    }
}