import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TodoListItemComponent } from "./components/todo-list-item/todo-list-item";

export default {
    title: "todo list item",
    component: TodoListItemComponent,
    argTypes: {
        listData: {}
    }
} as ComponentMeta<typeof TodoListItemComponent>;

const Template: ComponentStory<typeof TodoListItemComponent> = (args) => <TodoListItemComponent {...args} />;

export const DefaultTodoListItem = Template.bind({});

DefaultTodoListItem.args = {
    item: { id: 1, completed: false, title: "test todo", userId: 1 },
}
