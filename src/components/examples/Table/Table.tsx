type TableProps = {
  data: {
    headers: string[];
    rows: string[][];
  };
};

const Table = ({ data }: TableProps) => {
  return (
    <table className={"w-full text-sm text-left rtl:text-right text-gray-400"}>
      <thead
        className={"font-bold text-white uppercase bg-gray-900 text-center"}
      >
        <tr>
          {data.headers.map((header, index) => (
            <th className="py-4 border border-white/10" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr className={"odd:bg-gray-900 even:bg-gray-800"} key={index}>
            {row.map((value, index) => (
              <td
                className=" max-w-80 text-center py-4 border-x border-b border-white/10"
                key={index}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
