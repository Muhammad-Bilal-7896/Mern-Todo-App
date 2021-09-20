import { useEffect, useState } from 'react';
import { addTask, getTasks, updateTask, deleteTask } from '../../services/taskServices';

const Tasks = () => {

    //Task State
    const [task, setTask] = useState([]);
    //Current Tasks State
    const [currentTask, setCurrentTask] = useState([]);

    //Fetching Tasks
    useEffect(() => {
        async function fetchTasks() {
            try {
                const { data } = await getTasks();
                setTask(data);
            } catch (error) {
                console.log('Error getting tasks data: ', error);
            }
        }
        fetchTasks()
    }, [])

    //Handling the change of text in input
    const handleChange = (input) => {
        setCurrentTask(input.value);
    }

    //Handling the Submission of data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = task;
        try {
            const {data} = await addTask({ task: currentTask });
            const tasks = originalTasks;
            tasks.push(data);
            setTask(tasks);
            setCurrentTask("");
        } catch (error) {
           console.log(error);
        }
    }

    const handleUpdate = async (currentTask) => {
        const originalTasks = task;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task)=>task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].completed = !tasks[index].completed;
            setTask(tasks);
            await updateTask(currentTask,{completed:tasks[index].completed})
        } catch (error) {
            setTask(originalTasks);
            console.log(error);
        }
    }

    const handleDelete = async (currentTask) => {
        const originalTasks = task;
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );
            setTask(tasks);
            await deleteTask(currentTask);
        } catch (error) {
            setTask(originalTasks);
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Tasks</h1>
        </div>
    )
}
export default Tasks;