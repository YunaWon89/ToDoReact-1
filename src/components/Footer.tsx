import TaskFilter from "./TasksFilter"

type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
}

type Props = {
tasks: TaskType[], 
filter: string
setFilter: (filter:string) => void
clearCompleted: () => void
}

function Footer({ tasks, filter, setFilter, clearCompleted }: Props) {
  const activeCount = tasks.filter((t) => !t.completed).length

  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} items left
      </span>

      <TaskFilter
      filter = {filter} 
      setFilter = {setFilter}/>

      <button className="clear-completed"
      onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
