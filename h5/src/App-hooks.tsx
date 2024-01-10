import React, {useState, useEffect} from 'react'

interface ITodo {
    id: string;
    title: string;
    done: boolean;
}

export const App: React.ComponentType = () => {
    const [actualTodos, setActualTodos] = useState<ITodo[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [newTodoText, setNewTodoText] = useState<string>('');
    const [actualLeft, setActualLeft] = useState(0);

    useEffect(()=>{

        const todosFiltered = actualTodos.filter(obj => obj.done === false)

        setActualLeft(todosFiltered.length)

    }, [actualTodos]);

    function addTodo() {
        setTodos([
            ...todos,
            {
                id: `${Math.random()}`,
                title: newTodoText,
                done: false,
            },
        ]);
        setActualTodos([
            ...actualTodos,
            {
                id: `${Math.random()}`,
                title: newTodoText,
                done: false,
            },
        ]);
        setNewTodoText('');
    }

    function clearCompletedClick() {
        const todosFiltered = actualTodos.filter(obj => obj.done === true)

        setTodos([...todosFiltered]);
        setActualTodos([...todosFiltered]);
    }

    function allButtonClick() {
        setTodos([...actualTodos]);
    }

    function toggleDoneClick(todoId: string) {
        for (var i = 0; i < actualTodos.length; i++) {
            if (actualTodos[i].id === todoId) {
                actualTodos[i].done = !actualTodos[i].done;
            }
        }
        setActualTodos([...actualTodos]);
        setTodos([...actualTodos]);
    }

    function activeButtonClick() {
        const todosFiltered = actualTodos.filter(obj => obj.done === false)

        setTodos([...todosFiltered]);
    }

    function doneButtonClick() {
        const todosFiltered = actualTodos.filter(obj => obj.done === true)

        setTodos([...todosFiltered]);
    }

    return (
        <div>
            <h2>Todos</h2>

            <div>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTodoText}
                    onChange={(event) => {
                        setNewTodoText(event.target.value);
                    }}
                    data-testid="new-todo--input"
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            addTodo();
                        }
                    }}
                />

                <button
                    data-testid="new-todo--submit"
                    onClick={() => addTodo()}
                >
                    submit
                </button>

                <br/>
                <br/>
            </div>

            <div data-testid="todos">
                {
                    todos.map((todo) => (
                        <div key={todo.id} className="todo" data-testid="todo">
                            <button data-testid="toggle-done"
                                    onClick={() => toggleDoneClick(todo.id)}
                            >
                                {todo.done ? '☑' : '☐'}
                            </button>

                            <span data-testid="todo--title">{todo.title}</span>
                        </div>
                    ))
                }
            </div>

            <div className="bottom-bar">
                <div data-testid="items-left">[{actualLeft}] items left</div>

                <div className="bottom-bar--states">
                    <button data-testid="states--all" className="bottom-bar--state-selected"
                            onClick={() => allButtonClick()}
                    >all
                    </button>
                    <button data-testid="states--active"
                            onClick={() => activeButtonClick()}
                    >active
                    </button>
                    <button data-testid="states--done"
                            onClick={() => doneButtonClick()}
                    >done
                    </button>
                </div>

                <div>
                    <button data-testid="clear-completed"
                            onClick={() => clearCompletedClick()}
                    >
                        clear completed
                    </button>
                </div>
            </div>
        </div>
    );
};
