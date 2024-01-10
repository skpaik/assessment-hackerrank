import React from "react";
import "./index.css";

export default function KanbanBoard(props) {
    const [tasks, setTasks] = React.useState([
        { name: '1', stage: 0 },
        { name: '2', stage: 0 },
    ]);

    const [stagesNames, setStagesNames] = React.useState([
        'Backlog',
        'To Do',
        'Ongoing',
        'Done',
    ]);

    const handleCreateTask = () => {
        const newTaskName = document.getElementById('create-task-input').value;
        if (newTaskName.trim() === '') {
            return;
        }

        const newTask = { name: newTaskName, stage: 0 };
        setTasks([...tasks, newTask]);

        // Clear input field after adding a new task
        document.getElementById('create-task-input').value = '';
    };

    const handleMoveTask = (taskName, direction) => {
        const updatedTasks = tasks.map((task) => {
            if (task.name === taskName) {
                const newStage =
                    direction === 'forward' ? task.stage + 1 : task.stage - 1;
                return { ...task, stage: newStage };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const handleDeleteTask = (taskName) => {
        const updatedTasks = tasks.filter((task) => task.name !== taskName);
        setTasks(updatedTasks);
    };

    const stagesTasks = stagesNames.map((stageName, i) => {
        const tasksInStage = tasks.filter((task) => task.stage === i);

        return (
            <div className="card outlined ml-20 mt-0" key={`${i}`}>
                <div className="card-text">
                    <h4>{stageName}</h4>
                    <ul className="styled mt-50" data-testid={`stage-${i}`}>
                        {tasksInStage.map((task, index) => (
                            <li className="slide-up-fade-in" key={`${i}${index}`}>
                                <div className="li-content layout-row justify-content-between align-items-center">
                                    <span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
                                    <div className="icons">
                                        <button
                                            className="icon-only x-small mx-2"
                                            data-testid={`${task.name.split(' ').join('-')}-back`}
                                            onClick={() => handleMoveTask(task.name, 'back')}
                                            disabled={task.stage === 0}
                                        >
                                            <i className="material-icons">arrow_back</i>
                                        </button>
                                        <button
                                            className="icon-only x-small mx-2"
                                            data-testid={`${task.name.split(' ').join('-')}-forward`}
                                            onClick={() => handleMoveTask(task.name, 'forward')}
                                            disabled={task.stage === 3}
                                        >
                                            <i className="material-icons">arrow_forward</i>
                                        </button>
                                        <button
                                            className="icon-only danger x-small mx-2"
                                            data-testid={`${task.name.split(' ').join('-')}-delete`}
                                            onClick={() => handleDeleteTask(task.name)}
                                        >
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    });

    return (
        <div className="mt-20 layout-column justify-content-center align-items-center">
            <section className="mt-50 layout-row align-items-center justify-content-center">
                <input
                    id="create-task-input"
                    type="text"
                    className="large"
                    placeholder="New task name"
                    data-testid="create-task-input"
                />
                <button
                    type="submit"
                    className="ml-30"
                    data-testid="create-task-button"
                    onClick={handleCreateTask}
                >
                    Create task
                </button>
            </section>

            <div className="mt-50 layout-row">{stagesTasks}</div>
        </div>
    );
}
