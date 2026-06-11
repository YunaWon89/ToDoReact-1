import TaskFilter from "./TasksFilter"

type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
}

type Props = {
  tasks: TaskType[]
}

function Footer({ tasks }: Props) {
  const activeCount = tasks.filter((t) => !t.completed).length

  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} items left
      </span>

      <TaskFilter />

      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
