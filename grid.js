import { Cell } from "./cell.js";

const GRID_SIZE = 4,
      CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
   constructor(gridElement) {
      this.cells = [];
      for (let i = 0; i < CELLS_COUNT; i++) {
         this.cells.push(
            new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
         );
      }
      this.cellsGroupedByColomn = this.groupCellsByColomn();
      this.cellsGroupedByReversedColomn = this.cellsGroupedByColomn.map(colomn => [...colomn].reverse());
      this.cellsGroupedByRow = this.groupCellsByRow();
      this.cellsGroupedByReversedRow = this.cellsGroupedByRow.map(row => [...row].reverse());
   }

   getRandomEmptyCell() {
      const emptyCells = this.cells.filter(cell => cell.isEmpty()),
            randomIndex = Math.floor(Math.random() * emptyCells.length);

            return emptyCells[randomIndex];
   }

   groupCellsByColomn() {
      return this.cells.reduce((groupedCells, cell) => {
         groupedCells[cell.x] = groupedCells[cell.x] || [];
         groupedCells[cell.x][cell.y] = cell;
         return groupedCells;
      }, [])
   }

   groupCellsByRow() {
      return this.cells.reduce((groupedCells, cell) => {
         groupedCells[cell.y] = groupedCells[cell.y] || [];
         groupedCells[cell.y][cell.x] = cell;
         return groupedCells;
      }, [])
   }
}