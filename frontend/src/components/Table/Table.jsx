import React from "react";
import "./table.css";
import { ImBin } from "react-icons/im";
import { BiEditAlt } from "react-icons/bi";

const Table = () => {
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
      <tr>
        <td>1</td>
        <td>Ruangguru</td>
        <td>SMA</td>
        <td>Semarang</td>
        <td>20/06/2022</td>
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
      <tr>
        <td>2</td>
        <td>Ruangguru</td>
        <td>SMA</td>
        <td>Semarang</td>
        <td>20/06/2022</td>
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
    </table>
  );
};

export default Table;
