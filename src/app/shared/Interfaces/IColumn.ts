import { Task } from './ITask';

export interface Column {
  name: string;
  tasks: Task[];
}
