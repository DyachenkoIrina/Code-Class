export type TopicType = {
  id: number;
  img: string;
  title: string;
  description: string;
  taskId: number;
};

export type TopicTypeCard = {
  topic: TopicType;
};


export type TopicSliceState = {
  topics: TopicType[];
  currentTopic: TopicType | null;
};
