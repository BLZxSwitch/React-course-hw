import React from 'react';
import './todo-list-item.css';

interface TodoListItemProps {
    item: string | undefined,
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TodoListItem = ({
                             item = undefined,
                             ...props
                         }: TodoListItemProps) => {
    return (
        <div {...props}>
            <i>{item}</i>
        </div>
    );
};
