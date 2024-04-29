import { create } from 'zustand';
import { v4 } from "uuid";
import { persist, createJSONStorage, PersistStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'


export type Todo = {
    id: string;
    note: string;
    done: boolean;
}

export type TodoStore = {
    todos: Record<string, Todo>;
    addTodo: (newTodo: string) => void;
    removeTodo: (id: string) => void;
    toggleCheck: (id: string) => void;
}

export const useTodoStore = create(persist(immer((set, get) => ({
    todos: {},
    addTodo: (newTodo: string) => set((state: TodoStore) => {
        const guid = v4();
        state.todos[guid] = {
            id: guid,
            done: false,
            note: newTodo
        };
    }),
    removeTodo: (id: string) => set((state: TodoStore) => {
        delete state.todos[id];
    }),
    toggleCheck: (id: string) => set((state: TodoStore) => {
        state.todos[id].done = !state.todos[id].done;
    }),
    getTotalDone: () => {
        return Object.values(get().todos).filter(todo => todo.done).length;
    },
})) ,{
    name: 'todo-storage', 
    storage: createJSONStorage(() => sessionStorage),
  },
));


