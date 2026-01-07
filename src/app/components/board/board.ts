import { Component, computed, inject, OnInit } from '@angular/core';
import { KanbanService } from '../../shared/services/kanban.service';
import { Header } from "../header/header";
import { Column } from '../column/column';

@Component({
  selector: 'app-board',
  imports: [Header, Column],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board implements OnInit {
  private kanbanService = inject(KanbanService);

  // Computed signal to get active board
  activeBoard = computed(() => this.kanbanService.getActiveBoard());

  ngOnInit(): void {
    this.kanbanService.loadData();
    
  }
}
