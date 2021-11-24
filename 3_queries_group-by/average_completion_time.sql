SELECT students.name                                  as student,
       CAST(SUM(assignment_submissions.duration) /
            count(assignment_submissions.*) as float) as average_assignment_duration
FROM students
         JOIN assignment_submissions
              ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY student
ORDER BY average_assignment_duration DESC;