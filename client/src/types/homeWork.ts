export type HomeWorkType = {
  id: number;
  checkWork: string;
  status: string;
  teacherId: number;
  taskId: number;
  groupId: number;
};

export type HomeWorkSliceState = {
  homeWork: HomeWorkType[];
  currentTask: HomeWorkType | null;
};

export type HomeWorksState = {
  homeWork: HomeWorkType[];
  };
  
