import { useRef, useState } from "react";
import { useTodoStore } from "./todo.store";


export function Todo() {
    /** Actions and Data pulled from store */
    const todos = useTodoStore((state) => Object.values(state.todos));
    const addTodo = useTodoStore(state => state.addTodo);
    const removeTodo = useTodoStore(state => state.removeTodo)
    const toggleCheck = useTodoStore(state => state.toggleCheck);
    const [inputField, setInputField] = useState("");
    const totalCompleted = useTodoStore(state => state.getTotalDone());
    
    const onAdd = () => {
        if (inputField == "") {
            return;
        }
        addTodo(inputField);
        setInputField("");
    };

    const toggle = (id: string) => {
        toggleCheck(id)
    };

    return (
        <div>
            <h1 className="mt-5">Todos - Zustand</h1>
            <div>
                <p>Total completed: {totalCompleted}/{todos.length}</p>
                
            </div>
            {
                todos.map((todo, index) =>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={"flexCheckDefault_" + index} checked={todo.done} onChange={() => toggle(todo.id)} />
                        <label className="form-check-label" htmlFor={"flexCheckDefault_" + index}>
                            {todo.note}
                        </label>
                        <button className="btn btn-sm" onClick={() => removeTodo(todo.id)}>x</button>
                    </div>)
            }
            <div className="form-group">
                <textarea onChange={e => setInputField(e.target.value)} value={inputField} className="form-control mb-3">
                </textarea>
                <button className="btn btn-primary" onClick={onAdd} >Add</button>
            </div>
            <br />
        </div>
    );
}