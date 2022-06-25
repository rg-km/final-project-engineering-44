import React, { useEffect } from "react";
import "./table.css";
import { ImBin } from "react-icons/im";
import { BiEditAlt } from "react-icons/bi";
import useFetch from "../../hooks/useFetch";
import scholarStore from "../../store/scholarStore";
import Moment from "moment";

const Table = () => {
  const setBeasiswa = scholarStore((state) => state.setBeasiswa);
  const { data, error, loading } = useFetch("/scholarships");

  useEffect(() => {
    setBeasiswa(data);
  }, [data]);

  const beasiswa = scholarStore((state) => state.beasiswa);

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Beasiswa</th>
        <th>Jenjang</th>
        <th>Kota</th>
        <th>Added At</th>
        <th>Action</th>
      </tr>
      {beasiswa.map((data, index) => {
        Moment.locale("id");
        const date = data.created_at;
        const format = Moment(date).format("DD-MM-YYYY");
        return (
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.jenjang}</td>
            <td>{data.kota}</td>
            <td>{format}</td>
            <td>
              <div className="action">
                <button>
                  <ImBin />
                </button>
                <button>
                  <BiEditAlt />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
