import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TodoListItem } from "./components/todo-list-item/todo-list-item";

export default {
    title: "todo list item",
    component: TodoListItem,
    argTypes: {
        listData: {}
    }
} as ComponentMeta<typeof TodoListItem>;

const Template: ComponentStory<typeof TodoListItem> = (args) => <TodoListItem {...args} />;

export const DefaultTodoListItem = Template.bind({});

DefaultTodoListItem.args = {
    item: "test item"
}
