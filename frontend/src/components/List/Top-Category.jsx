import "./top-category.css";

const TopCategory = () => {
  return (
    <div className="pilihan-beasiswa">
      <div>
        <p>
          <a href="/beasiswa">Beasiswa Daerah</a>
        </p>
        <p>
          <a href="/beasiswa">Beasiswa Provinsi</a>
        </p>
        <p>
          <a href="/beasiswa">Beasiswa Nasional</a>
        </p>
      </div>
    </div>
  );
};

export default TopCategory;
