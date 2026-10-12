import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentData = [
      {
        id: 101,
        name: "abc",
        course: "BCA",
        email: "abc@gmail.com",
        year: "SYBCA"
      },
      {
        id: 102,
        name: "Priya",
        course: "BCA",
        email: "priya123@gmail.com",
        year: "TYBCA"
      },
      {
        id: 103,
        name: "Amit",
        course: "BCA",
        email: "Amit@123gmail.com",
        year: "FYBCA"
      }
    ];

    setStudents(studentData);
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          <p>Course: {student.course}</p>

          <Link to={`/students/${student.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;
