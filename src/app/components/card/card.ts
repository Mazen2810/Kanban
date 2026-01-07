import { Component, computed, input } from '@angular/core';
import {Task as TaskType} from '../../shared/Interfaces/ITask';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

task = input.required<TaskType>();

// Computed Signal for completed subtasks
completedSubtasks = computed(()=> {
  return this.task().subtasks.filter(subtask => subtask.isCompleted).length;
});


// Computed Signal for total subtasks
totalSubtasks = computed(()=> {
  return this.task().subtasks.length;
});


}
