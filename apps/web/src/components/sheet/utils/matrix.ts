type MatrixItemMemoized = {
  [key: string]: string;
};

type MatrixDataMemoized = {
  [key: string]: object;
};

interface TableDataMemoized {
  columns: {
    value: string;
    key: string;
  }[];
  rows: {
    id: string;
    price: string;
    rewardRate: string;
    annualReward: string;
  }[];
}

export function generateMatrixData(tableDataMemozied: TableDataMemoized): MatrixDataMemoized {
  return tableDataMemozied.rows.reduce(
    (acc: MatrixDataMemoized, item: MatrixItemMemoized, index) => {
      // Loop through each column in the tableDataMemozied.columns array.
      tableDataMemozied.columns.forEach((column) => {
        // Extract necessary values from the current item and column.
        const id = item.id;
        const key = `${column.key}${index + 1}`;
        const value = item[column.value];
        const title = column.value;
        const expression = key ? `=${key}` : `=${column.key}${index}`;
        const className = column.key === "A" ? "equation" : undefined;

        // Add the constructed object to the accumulator under the key 'key'.
        acc[key] = {
          id,
          key,
          title,
          value,
          expression,
          className,
        };
      });

      return acc;
    },
    {}
  );
}

export function generateSheetMatrix(
  tableDataMemozied: TableDataMemoized,
) {
  // Generate a matrix representation of the table data.
  return Array.from({ length: tableDataMemozied.rows.length + 1 }, (_, i) =>
    Array.from({ length: tableDataMemozied.columns.length + 1 }, (_, x) => {
      const colName = String.fromCharCode(64 + x);

      // If the current column and row is the first column and row, return an empty cell.
      if (i === 0 && x === 0) {
        return { readOnly: true, value: "" };
      }

      // If the current row is the first row, return the column name.
      if (i === 0) {
        return { readOnly: true, value: colName };
      }

      // If the current column is the first column, return the row number.
      if (x === 0) {
        return { readOnly: true, value: i };
      }

      const currentMatrix = generateMatrixData(tableDataMemozied)
      // Access the corresponding matrix data for the current column and row.
      return currentMatrix[colName + i.toString()];
    })
  );
}
