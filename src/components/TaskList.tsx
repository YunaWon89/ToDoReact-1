import Task from "./Task"
import PropTypes from "prop-types"

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



TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
      isEditing: PropTypes.bool.isRequired,
    })
  ).isRequired,

  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleEditTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
}; 

export default TaskList

