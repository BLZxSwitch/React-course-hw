import { TodoListComponent } from "./components/todo-list/Todo-list";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
    title: "todo list",
    component: TodoListComponent,
    argTypes: {
        listData: {}
    }
} as ComponentMeta<typeof TodoListComponent>;

const Template: ComponentStory<typeof TodoListComponent> = (args) => <TodoListComponent {...args} />;

export const DefaultTodoList = Template.bind({});

DefaultTodoList.args = {
    userId: 1
}