import "./top-category.css";
import { Link } from "react-router-dom";

const TopCategory = () => {
  return (
    <div className="pilihan-beasiswa">
      <div>
        <p>
          <Link to={"/beasiswa"}>Beasiswa Daerah</Link>
        </p>
        <p>
          <Link to={"/beasiswa"}>Beasiswa Provinsi</Link>
        </p>
        <p>
          <Link to={"/beasiswa"}>Beasiswa Nasional</Link>
        </p>
      </div>
    </div>
  );
};

export default TopCategory;
