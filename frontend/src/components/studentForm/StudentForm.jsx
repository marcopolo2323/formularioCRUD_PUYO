import { useState } from "react";
import useStudentStore from "../../store/studentStore";
import style from './StudentForm.module.css';

const StudentForm = () => {
  const { addStudent } = useStudentStore();
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addStudent(studentData);
    setStudentData({ firstName: "", lastName: "" });
    alert("Student Added Successfully");
  };

  return (
    <div className={style.pageContainer}> 
      <h1 className={style.title}>Student Form</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Enter firstname"
          required
          name="firstName"
          value={studentData.firstName}
          onChange={handleInputChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Enter lastname"
          required
          name="lastName"
          value={studentData.lastName}
          onChange={handleInputChange}
          className={style.input}
        />
        <button type="submit" className={style.button}>Save</button>
      </form>
    </div>
  );
};

export default StudentForm;