import Task from "./Task"

type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
  isEditing: boolean
}

type Props = {
  tasks: TaskType[]
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
  toggleEditTask: (id: number) => void
  updateTask: (id: number, text: string) => void
}

function TaskList({ tasks, toggleTask, deleteTask, toggleEditTask, updateTask }: Props) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          toggleEditTask={toggleEditTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  )
}

export default TaskList

