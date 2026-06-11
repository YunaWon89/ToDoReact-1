import { useState } from "react"
import NewTaskForm from "./components/NewTaskForm"
import TaskList from "./components/TaskList"
import Footer from "./components/Footer"


type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
}

function App() {
  const [tasks] = useState<TaskType[]>([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      created: new Date(),
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      created: new Date(),
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      created: new Date(),
    },
  ])

  return (
    <section className="todoapp">
      <NewTaskForm />
      <TaskList tasks={tasks} />
    <Footer tasks={tasks} />
    </section>
  )
}

export default App