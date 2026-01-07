import { Component, computed, input } from '@angular/core';
import { Column as ColumnType } from '../../shared/Interfaces/IColumn';
import { Card } from "../card/card";


@Component({
  selector: 'app-column',
  imports: [Card],
  templateUrl: './column.html',
  styleUrl: './column.scss',
})
export class Column {
  column = input.required<ColumnType>();
  columnIndex = input.required<number>();

  private readonly colors = [
    'var(--column-color-1)',
    'var(--column-color-2)',
    'var(--column-color-3)',
    'var(--column-color-4)',
    'var(--column-color-5)',
    'var(--column-color-6)',
  ];

  indicatorColor = computed(() => {
    return this.colors[this.columnIndex() % this.colors.length];
  })
}
