import { formatDistanceToNow } from "date-fns"

type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
}

type Props = {
  task: TaskType
}

function Task({ task }: Props) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          readOnly
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">
            {formatDistanceToNow(task.created, { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  )
}

export default Task