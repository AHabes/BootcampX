const {Pool} = require('pg');

const pool = new Pool({
    user: 'vagrant',
    password: '123',
    host: 'localhost',
    database: 'bootcampx'
  }
);

const cohort = process.argv[2];
const limit = process.argv[3];
console.log('cohort: ', cohort);
console.log('limit =====> : ', limit);
const query = `SELECT students.id, students.name, cohorts.name as cohort_name
               FROM students
                        JOIN cohorts ON students.cohort_id = cohorts.id
               WHERE cohorts.name LIKE $1
               LIMIT $2;
`;

values = [`%${process.argv[2]}%`, process.argv[3]];

pool.query(query, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));