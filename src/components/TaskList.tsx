import Task from "./Task"

type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
}

type Props = {
  tasks: TaskType[]
}

function TaskList({ tasks }: Props) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList

