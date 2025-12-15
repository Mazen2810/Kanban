import { inject, Injectable, signal } from '@angular/core';
import { KanbanData } from '../Interfaces/IKanbanData';
import { HttpClient } from '@angular/common/http';
import { Board } from '../Interfaces/IBoard';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  private data = signal<KanbanData | null>(null);
  private activeBoardIndex = signal<number>(0);
  private readonly http = inject(HttpClient);

  // Get all data
  loadData() {
    this.http.get<KanbanData>('/data.json').subscribe({
      next: (res) => {
        this.data.set(res);
      },
      error: (err) => {
        console.error('Failed to load Kanban data', err);
      },
    });
  }

  // Get all boards
  getBoards(): Board[] {
    return this.data()?.boards || [];
  }

  // Get active board
  getActiveBoard(): Board | null {
    const boards = this.getBoards();
    const index = this.activeBoardIndex();
    return boards[index] || null;
  }

  // Set active board by index
  setActiveBoard(index: number): void {
    const boards = this.getBoards();
    if (index >= 0 && index < boards.length) {
      this.activeBoardIndex.set(index);
    }
  }
}
