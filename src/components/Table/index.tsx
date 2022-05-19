import React, { FC } from 'react';
import { useTable } from 'react-table';

export interface TableProps {
  style?: any;
  className?: string;
  id?: string;
  columns: [];
  data: [];
  shadow: boolean;
}

export const Table: FC<TableProps> = ({
  columns,
  data,
  style,
  id,
  className,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div
      className={`liu-table-wrapper  ${className ?? ``}`}
      id={id}
      style={style ?? {}}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={`px-4 text-base font-medium`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row-${i}`}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
