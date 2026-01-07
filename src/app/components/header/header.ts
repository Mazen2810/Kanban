import { Component, computed, inject } from '@angular/core';
import { KanbanService } from '../../shared/services/kanban.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
private kanbanService = inject(KanbanService);
boardName = computed(()=> {
  const activeBoard = this.kanbanService.getActiveBoard();
  return activeBoard ? activeBoard.name : 'No Active Board';
})
}
