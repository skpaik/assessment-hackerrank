import React from 'react';

interface ITodo {
    id: string;
    title: string;
    done: boolean;
}

type IProps = {};

interface IState {
    newTodoText: string;
    todos: Array<ITodo>;
}

export class App extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            newTodoText: '',
            todos: [],
        };

        this.addTodo = this.addTodo.bind(this);
    }

    private addTodo() {
        this.setState({
            newTodoText: '',
            todos: [
                ...this.state.todos,
                {
                    id: `${Math.random()}`,
                    title: this.state.newTodoText,
                    done: false,
                },
            ],
        });
    }

    render() {
        return (
            <div>
                <h2>Todos</h2>

                <div>
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={this.state.newTodoText}
                        onChange={(event) => {
                            this.setState({newTodoText: event.target.value});
                        }}
                        data-testid="new-todo--input"
                        onKeyUp={(event) => {
                            if (event.key === 'Enter') {
                                this.addTodo();
                            }
                        }}
                    />

                    <button
                        data-testid="new-todo--submit"
                        onClick={() => this.addTodo()}
                    >
                        submit
                    </button>

                    <br />
                    <br />
                </div>

                <div data-testid="todos">
                    {
                        this.state.todos.map((todo) => (
                            <div key={todo.id} className="todo" data-testid="todo">
                                <button data-testid="toggle-done">
                                    {todo.done ? '☑' : '☐'}
                                </button>

                                <span data-testid="todo--title">{todo.title}</span>
                            </div>
                        ))
                    }
                </div>

                <div className="bottom-bar">
                    <div data-testid="items-left">[x] items left</div>

                    <div className="bottom-bar--states">
                        <button data-testid="states--all" className="bottom-bar--state-selected">all</button>
                        <button data-testid="states--active">active</button>
                        <button data-testid="states--done">done</button>
                    </div>

                    <div>
                        <button data-testid="clear-completed">
                            clear completed
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
