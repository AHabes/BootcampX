const {Pool} = require('pg');

const pool = new Pool({
    user: 'vagrant',
    password: '123',
    host: 'localhost',
    database: 'bootcampx'
  }
);
const cohort = process.argv[2];
pool.query(`
    SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
    FROM cohorts
             JOIN students
                  ON cohorts.id = students.cohort_id
             JOIN assistance_requests ON students.id = assistance_requests.student_id
             JOIN teachers ON assistance_requests.teacher_id = teachers.id
    WHERE cohorts.name LIKE '%${cohort}%'
    GROUP BY teachers.name, cohorts.name
    ORDER BY teachers.name;
`).then(res => {
  res.rows.forEach(element =>
    console.log(`${element.cohort} : ${element.teacher}`)
  )
});