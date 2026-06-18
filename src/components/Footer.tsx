import TaskFilter from "./TasksFilter"
import PropTypes from "prop-types"

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

Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export default Footer
