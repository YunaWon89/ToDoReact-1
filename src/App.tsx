import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

type TaskType = {
  id: number;
  description: string;
  completed: boolean;
  created: Date;
  isEditing: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      created: new Date(),
      isEditing: false,
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      created: new Date(),
      isEditing: false,
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      created: new Date(),
      isEditing: false,
    },
  ]);
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleEditTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task,
      ),
    );
  }

  function updateTask(id:number, newText:string) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id? { ...task, description: newText, isEditing: false}
        : task
      )
    )
  }
  return (
    <section className="todoapp">
      <NewTaskForm />
      <TaskList tasks={tasks} 
      toggleTask={toggleTask} 
      deleteTask={deleteTask} 
      toggleEditTask={toggleEditTask}
      updateTask ={updateTask}
      />
      <Footer tasks={tasks} />
    </section>
  );
}

export default App;
