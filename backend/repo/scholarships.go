package repo

import "database/sql"

type ScholarshipsRepository struct {
	db *sql.DB
}

func NewScholarshipsRepository(db *sql.DB) *ScholarshipsRepository {
	return &ScholarshipsRepository{db: db}
}

func (s *ScholarshipsRepository) GetAll() ([]Scholarships, error) {
	sqlStatement := `SELECT * FROM scholarship;`

	rows, err := s.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarships
	for rows.Next() {
		var scholarship Scholarships
		err = rows.Scan(&scholarship.Id, &scholarship.User_id, &scholarship.Name, &scholarship.Description, &scholarship.Image, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Category_id, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetById(id string) (Scholarships, error) {
	sqlStatement := `SELECT * FROM scholarships WHERE id = ?;`

	rows, err := s.db.Query(sqlStatement, id)
	if err != nil {
		return Scholarships{}, err
	}
	var scholarship Scholarships
	for rows.Next() {
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Description, &scholarship.Jenjang, &scholarship.Kota)
		if err != nil {
			return Scholarships{}, err
		}
	}
	return scholarship, nil
}

func (s *ScholarshipsRepository) GetByJenjang(jenjang string) ([]Scholarships, error) {
	sqlStatement := `SELECT * FROM scholarships WHERE jenjang = ?;`

	rows, err := s.db.Query(sqlStatement, jenjang)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarships
	for rows.Next() {
		var scholarship Scholarships
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Description, &scholarship.Jenjang, &scholarship.Kota)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetByKota(kota string) ([]Scholarships, error) {
	sqlStatement := `SELECT * FROM scholarships WHERE kota = ?;`

	rows, err := s.db.Query(sqlStatement, kota)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarships
	for rows.Next() {
		var scholarship Scholarships
		err = rows.Scan(&scholarship.Id, &scholarship.Name, &scholarship.Description, &scholarship.Jenjang, &scholarship.Kota)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) uploadScholarships(scholarship *Scholarships) error {
	sqlStatement := `INSERT INTO scholarships (id, user_id, name, description, image, jenjang, kota, category_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`

	_, err := s.db.Exec(sqlStatement, scholarship.Id, scholarship.User_id, scholarship.Name, scholarship.Description, scholarship.Image, scholarship.Jenjang, scholarship.Kota, scholarship.Category_id, scholarship.CreatedAt, "scholarship")
	if err != nil {
		return err
	}
	return nil
}
