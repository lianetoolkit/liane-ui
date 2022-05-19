import React, { FC } from 'react';
import { useTable, useSortBy, useExpanded } from 'react-table';

export interface TableProps {
  style?: any;
  className?: string;
  id?: string;
  columns: [];
  data: [];
  title: string;
  shadow: boolean;
  sortable: boolean;
}

export const Table: FC<TableProps> = ({
  columns,
  data,
  style,
  id,
  className,
  title,
  shadow = false,
  sortable = false,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: title
        ? [
            {
              Header: title,
              columns: columns,
            },
          ]
        : columns,
      data,
    },
    useSortBy,
    useExpanded
  );
  console.log(data);
  return (
    <div
      className={`liu-table-wrapper  ${className ?? ``}`}
      id={id}
      style={style ?? {}}
    >
      <table
        {...getTableProps()}
        className={`${title ? `table-title ` : ``} ${
          sortable ? `table-sortable` : ``
        } table-auto rounded-sm bg-white ${
          shadow
            ? `table-shadow  border border-white`
            : 'border border-grey-100'
        }`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    sortable ? column.getSortByToggleProps() : undefined
                  )}
                  className={`liu-header-th`}
                >
                  <span className="flex flex-row space-x-2 items-center">
                    <span>{column.render('Header')}</span>
                    <span className="flex flex-col w-3 space-y-1">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <>
                            <span className="arrow-up "></span>
                            <span className="arrow-down active"></span>
                          </>
                        ) : (
                          <>
                            <span className="arrow-up active"></span>
                            <span className="arrow-down "></span>
                          </>
                        )
                      ) : (
                        <>
                          <span className="arrow-up"></span>
                          <span className="arrow-down"></span>
                        </>
                      )}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, i) => {
            prepareRow(row);
            console.log('row.canExpand', row.canExpand);
            return (
              <tr
                {...row.getRowProps()}
                key={`row-${i}`}
                {...row.getToggleRowExpandedProps()}
                className={`${row.canExpand ? `liu-body-td-expandable` : ``}`}
              >
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} className={`liu-body-td `}>
                      {cell.render('Cell')}
                    </td>
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
