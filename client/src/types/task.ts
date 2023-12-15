export type TaskType = {
    id: number;
    title: string;
    questions: string;
    answer: string;
    topicId: number;
}

export type TaskSliceState = {
    tasks: TaskType[];
    currentTask: TaskType | null;
  };
