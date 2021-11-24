SELECT SUM(assignment_submissions.duration) as total_duration
FROM (students
    JOIN cohorts
    ON students.cohort_id = cohorts.id)
         JOIN assignment_submissions on assignment_submissions.student_id = students.id
WHERE cohorts.name = 'FEB12';