import { TodoList } from "./components/todo-list/Todo-list";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
    title: "todo list",
    component: TodoList,
    argTypes: {
        listData: {}
    }
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const DefaultTodoList = Template.bind({});

DefaultTodoList.args = {
    todos: ["First", "Second", "First"],
    date: "22.11.2222",
}