import { SubTask } from './ISubTask';

export type TaskStatus = 'TODO' | 'DOING' | 'DONE';
export interface Task {
  title: string;
  description?: string;
  status: TaskStatus;
  subtasks: SubTask[];
}
