export type GroupType = {
  id: number;
  group: string;
  teacher: string;
};


export type GroupsState = {
groups: GroupType[];
};

export type GroupsSliceState = {
  groups: GroupType[];
 
};
