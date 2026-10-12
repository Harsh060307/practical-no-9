import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const students = [
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

  const student = students.find(
    (student) => student.id === Number(id)
  );

  return (
    <div>
      <h1>Student Details</h1>

      {student ? (
        <div>
          <p>Student ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <p>Email: {student.email}</p>
          <p>Year: {student.year}</p>
        </div>
      ) : (
        <p>Student not found</p>
      )}

      <button onClick={() => navigate("/students")}>
        Back to Students
      </button>
    </div>
  );
}

export default StudentDetails;
