import { formatDistanceToNow } from "date-fns"
import { useState } from "react"

type TaskType = {
  id: number
  description: string
  completed: boolean
  created: Date
  isEditing: boolean
}

type Props = {
  task: TaskType
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
  toggleEditTask: (id: number) => void
  updateTask: (id: number, text: string) => void

}

function Task({ task, toggleTask, deleteTask, toggleEditTask, updateTask }: Props) {
  const [editText, setEditText] = useState(task.description)
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
        onChange={() => toggleTask(task.id)}
        />
       <label>
  {task.isEditing ? (
    <input
      value={editText}
      onChange={(event) => {
        setEditText(event.target.value)
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          updateTask(task.id, editText)
        }
      }}
    />
  ) : (
    <span className="description">
      {task.description}
    </span>
  )}

  <span className="created">
    {formatDistanceToNow(task.created, { addSuffix: true })}
  </span>
</label>
        <button className="icon icon-edit" onClick={() => toggleEditTask(task.id)}></button>
        <button className="icon icon-destroy"
        onClick={() => deleteTask(task.id)}></button>
      </div>
    </li>
  )
}

export default Task