import React from 'react';
import './todo-list-item.css';

interface TodoListItemProps {
    item: TodoListItem | undefined,
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export interface TodoListItem {
    id: number,
    userId: number,
    title: string,
    completed: boolean,
}

/**
 * Primary UI component for user interaction
 */
export const TodoListItemComponent = ({
                                          item = undefined,
                                          ...props
                                      }: TodoListItemProps) => {
    return (
        <div {...props}>
            <li>{item?.title}</li>
        </div>
    );
};
