import * as React from "react";
import "./table.css";
import type { ReactNode } from "react";

export type CellBuilder<TData> = (rowData: TData) => ReactNode;

export type TableColumn<TData> = {
  columnId: string;
  name: string;
  cellBuilder: CellBuilder<TData>;
};

export type TableProps<TData> = {
  data: TData[];
  dataId: keyof TData;
  columns: TableColumn<TData>[];
};

function buildHeader<TData>(columns: TableColumn<TData>[]) {
  return columns.map((column) => {
    return <th key={column.columnId}>{column.name}</th>;
  });
}

function buildRow<TData>(rowData: TData, columns: TableColumn<TData>[]) {
  return columns.map((column) => {
    return <td key={column.columnId}>{column.cellBuilder(rowData)}</td>;
  });
}

function buildRows<TData>(
  data: TData[],
  idKey: keyof TData,
  columns: TableColumn<TData>[],
) {
  return data.map((row) => {
    return <tr key={"row-" + row[idKey]}>{buildRow(row, columns)}</tr>;
  });
}

export function VTable<TData>(props: TableProps<TData>) {
  const headerCells = buildHeader(props.columns);
  const tableRows = buildRows(props.data, props.dataId, props.columns);
  return (
    <div className="vaar-table-container">
      <table>
        <thead>
          <tr>{headerCells}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
