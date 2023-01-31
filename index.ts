interface Task {
  id: number;
  name: string;
}

let tasks: Task[] = [];

const addTask = (taskName: string) => {
  tasks.push({
    id: tasks.length + 1,
    name: taskName
  });
};
