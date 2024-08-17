class ID {
  constructor(indexCol, indexRow) {
    this.indexCol = indexCol;
    this.indexRow = indexRow;
    this.generatedID = `${indexCol}-${indexRow}`;
  }
}