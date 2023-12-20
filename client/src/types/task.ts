export type TaskType = {
  id: number;
  title: string;
  questions: string;
  answer: string;
  topicId: number;
};

export type TaskSliceState = {
  tasks: TaskType[];
  currentTask: TaskType | null;
 
};

export type TasksState = {
  tasks: TaskType[];
};

export type AddTaskFormData = {
  title: string;
  questions: string;
  answer: string;
  theme:string
};
