Select day, count(assignments.*) as number_of_assignments, SUM(duration) as total_duration
FROM assignments
GROUP BY day
ORDER BY day;
