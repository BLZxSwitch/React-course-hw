import React, { Component } from 'react';
import './users-list.css';
import equal from 'fast-deep-equal';
import { User, UserListItemComponent, UserProps } from "../user/User-list-item";

export interface UserListProps {
}

export interface UserListState {
    users: ReadonlyArray<User>;
}

const getUsers = (): Promise<ReadonlyArray<User>> => {
    const fetchConfig = ({ method: 'GET' });
    return fetch('https://jsonplaceholder.typicode.com/users/', fetchConfig)
        .then<ReadonlyArray<User>>(response => response.json());
}

/**
 * Компонент отображения списка пользователей
 */
export class UsersList extends Component<UserListProps, UserListState> {
    constructor(props: UserListProps) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.updateState();
    }

    shouldComponentUpdate(nextProps: UserListProps, nextState: UserListState) {
        return !equal(this.state.users, nextState);
    }

    componentDidUpdate(prevProps: UserProps) {
        if (!equal(this.props, prevProps)) {
            this.updateState();
        }
    }

    componentWillUnmount() {
        this.updateState();
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <UserListItemComponent user={user} key={user.id}/>)}
            </div>
        );
    }

    private updateState(): void {
        getUsers().then(users => {
            this.setState({ users });
        });
    }

    private unSubscribe(): void {
        console.log("unSubscribe");
    }
}
