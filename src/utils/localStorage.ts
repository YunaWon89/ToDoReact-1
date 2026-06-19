export function getStartTime(): Date {
  const savedStartTime = localStorage.getItem("startTime");

  if (savedStartTime) {
    return new Date(savedStartTime);
  }

  const startTime = new Date();
  localStorage.setItem("startTime", startTime.toISOString());

  return startTime;
}

export function saveTasks(tasks: unknown[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasksFromStorage() {
  const savedTasks = localStorage.getItem("tasks");

  if (!savedTasks) {
    return null;
  }

  return JSON.parse(savedTasks);
}