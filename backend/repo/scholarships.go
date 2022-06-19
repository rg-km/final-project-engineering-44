package repo

import (
	"database/sql"
)

type ScholarshipsRepository struct {
	db *sql.DB
}

func NewScholarshipsRepository(db *sql.DB) *ScholarshipsRepository {
	return &ScholarshipsRepository{db: db}
}

func (s *ScholarshipsRepository) GetAll() ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship;`

	rows, err := s.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.User_id, &scholarship.Name, &scholarship.Description, &scholarship.Image, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Category_id, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetById(id int) (Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE id = ?;`

	row := s.db.QueryRow(sqlStatement, id)
	var scholarship Scholarship
	err := row.Scan(&scholarship.Id, &scholarship.User_id, &scholarship.Name, &scholarship.Description, &scholarship.Image, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Category_id, &scholarship.CreatedAt)
	if err != nil {
		return scholarship, err
	}
	return scholarship, nil
}

func (s *ScholarshipsRepository) GetByJenjang(jenjang string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE jenjang = ?;`

	rows, err := s.db.Query(sqlStatement, jenjang)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.User_id, &scholarship.Name, &scholarship.Description, &scholarship.Image, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Category_id, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetByKota(kota string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE kota = ?;`

	rows, err := s.db.Query(sqlStatement, kota)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.User_id, &scholarship.Name, &scholarship.Description, &scholarship.Image, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Category_id, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) GetByName(name string) ([]Scholarship, error) {
	sqlStatement := `SELECT * FROM scholarship WHERE name = ?;`

	rows, err := s.db.Query(sqlStatement, name)
	if err != nil {
		return nil, err
	}
	var scholarships []Scholarship
	for rows.Next() {
		var scholarship Scholarship
		err = rows.Scan(&scholarship.Id, &scholarship.User_id, &scholarship.Name, &scholarship.Description, &scholarship.Image, &scholarship.Jenjang, &scholarship.Kota, &scholarship.Category_id, &scholarship.CreatedAt)
		if err != nil {
			return nil, err
		}
		scholarships = append(scholarships, scholarship)
	}
	return scholarships, nil
}

func (s *ScholarshipsRepository) Update(id int) (Scholarship, error) {
	res, err := s.GetById(id)
	if err != nil {
		return res, err
	}
	sqlStatement := `UPDATE scholarship SET name = ?, description = ?, image = ?, jenjang = ?, kota = ?, category_id = ? WHERE id = ?;`

	_, err = s.db.Exec(sqlStatement, res.Name, res.Description, res.Image, res.Jenjang, res.Kota, res.Category_id, id)
	if err != nil {
		return Scholarship{}, err
	}
	return res, nil
}

func (s *ScholarshipsRepository) Delete(id int) (Scholarship, error) {
	res, err := s.GetById(id)
	if err != nil {
		return res, err
	}
	sqlStatement := `DELETE FROM scholarship WHERE id = ?;`

	_, err = s.db.Exec(sqlStatement, id)
	if err != nil {
		return Scholarship{}, err
	}
	return res, nil
}

// func (s *ScholarshipsRepository) updateScholarships(id int, name string, description string, image string, jenjang string, kota string, category_id int) error {
// 	sqlStatement := `UPDATE scholarship SET name = ?, description = ?, image = ?, jenjang = ?, kota = ?, category_id = ? WHERE id = ?;`

// 	_, err := s.db.Exec(sqlStatement, name, description, image, jenjang, kota, category_id, id)
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (s *ScholarshipsRepository) Delete(id int) error {
// 	sqlStatement := `DELETE FROM scholarship WHERE id = ?;`

// 	_, err := s.db.Exec(sqlStatement, id)
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (s *ScholarshipsRepository) uploadScholarships(scholarship Scholarship) error {
// 	sqlStatement := `INSERT INTO scholarship (user_id, name, description, image, jenjang, kota, category_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`

// 	_, err := s.db.Exec(sqlStatement, scholarship.User_id, scholarship.Name, scholarship.Description, scholarship.Image, scholarship.Jenjang, scholarship.Kota, scholarship.Category_id, scholarship.CreatedAt)
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (s *ScholarshipsRepository) uploadScholarships(Name string, Jenjang string, Kota string, Description string, Image string) (Scholarship, error) {
// 	var beasiswa Scholarship
// 	err := s.db.QueryRow("INSERT INTO scholarship (name, jenjang, kota, description, image) VALUES (?, ?, ?, ?, ?) RETURNING id, name, jenjang, kota, description, image,", Name, Jenjang, Kota, Description, Image).Scan(&beasiswa.Id, &beasiswa.Name, &beasiswa.Jenjang, &beasiswa.Kota, &beasiswa.Description, &Image)
// 	if err != nil {
// 		return beasiswa, err
// 	}
// 	return beasiswa, nil
// }
