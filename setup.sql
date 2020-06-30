--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  username varchar(255),
  email varchar(255),
  student_id serial,

  PRIMARY KEY (student_id)
);

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
  grade int [],
  student_id int,

  PRIMARY KEY (student_id)
);
