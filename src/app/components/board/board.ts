import { Component, inject, OnInit } from '@angular/core';
import { KanbanService } from '../../shared/services/kanban.service';
import { Header } from "../header/header";

@Component({
  selector: 'app-board',
  imports: [Header],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board implements OnInit {


  private kanbanService = inject(KanbanService);
  ngOnInit(): void {
     this.kanbanService.loadData();
     
  }



  
}
