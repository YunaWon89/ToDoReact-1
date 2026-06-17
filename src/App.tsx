import { useState, useEffect } from "react";
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

type TodoApi = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
const [tasks, setTasks] = useState<TaskType[]>([]);
const [filter, setFilter] = useState("all");

   useEffect(() => {
  async function loadTasks() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data :TodoApi[] = await response.json();

      setTasks(
        data.map((todo) => ({
          id: todo.id,
          description: todo.title,
          completed: todo.completed,
          created: new Date(),
          isEditing: false,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  }

  loadTasks();
}, []);



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

function addTask(text: string) {
  const newTask = {
    id: Date.now(),
    description: text,
    completed: false,
    created: new Date(),
    isEditing: false
  }

  setTasks(prev => [...prev, newTask])
}
const filteredTasks =
  filter === "all"
    ? tasks
    : filter ==="active"
    ? tasks.filter((task) => !task.completed)
    : tasks.filter((task) => task.completed)
   
    
function clearCompleted() {
  setTasks(prev => prev.filter(task => !task.completed))
}


  return (
    <section className="todoapp">
      <NewTaskForm addTask = {addTask}/>
      <TaskList tasks={filteredTasks} 
      toggleTask={toggleTask} 
      deleteTask={deleteTask} 
      toggleEditTask={toggleEditTask}
      updateTask ={updateTask}
      />
      <Footer tasks={tasks}
      filter = {filter}
      setFilter= {setFilter}
      clearCompleted = {clearCompleted} />
      
    </section>
  );
}



export default App;
