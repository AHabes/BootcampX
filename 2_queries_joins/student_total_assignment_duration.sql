SELECT SUM(assignment_submissions.duration)
FROM students
         JOIN assignment_submissions on assignment_submissions.student_id = students.id
WHERE students.name = 'Ibrahim Schimmel';