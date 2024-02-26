import "./styles.scss";

export interface TableHeaders {
  headerName: string;
  colSpan?: number;
}

interface BetterTableProps {
  caption?: string;
  captionSide?: "bottom" | "top";
  headers: TableHeaders[];
  rows: Array<object>;
  footer?: any;
}

const BetterTable = ({
  caption,
  captionSide = "top",
  headers,
  rows,
  footer,
}: BetterTableProps) => {
  return (
    <table>
      {caption && <caption style={{ captionSide }}>{caption}</caption>}

      <thead>
        <tr className="tableRow">
          {headers.map((header) => (
            <th className="tableHeader" colSpan={header.colSpan}>
              {header.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr className="tableRow" key={Math.random()}>
              {Object.values(row).map((value) => {
                console.log(row);
                return <td key={Math.random()}>{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      {footer && (
        <tfoot>
          <tr></tr>
        </tfoot>
      )}
    </table>
  );
};

export default BetterTable;
