export type TaskType = {
  id: number;
  description: string;
  completed: boolean;
  created: Date;
  isEditing: boolean;
};

export type TodoApi = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
