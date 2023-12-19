export type TopicType = {
  id: number;
  title: string;
  taskId: number;
};


export type TopicSliceState = {
  topics: TopicType[];
  currentTopic: TopicType | null;
  favoritesTopic: TopicType[];
};
