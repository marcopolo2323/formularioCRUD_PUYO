import { useEffect, useState } from 'react';
import useStudentStore from '../../store/studentStore';
import style from './studentList.module.css';

const StudentList = () => {
    const { fetchStudents, students, deleteStudent, updateStudent } = useStudentStore();
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ firstName: '', lastName: '' });

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    const startEditing = (student) => {
        setEditingId(student.id);
        setEditData({ firstName: student.firstName, lastName: student.lastName });
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditData({ firstName: '', lastName: '' });
    };

    const handleUpdate = async () => {
        await updateStudent(editingId, editData);
        cancelEditing();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value }));
    };

    const confirmAndDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            deleteStudent(id);
        }
    };

    return (
        <div>
            <h1>Student List</h1>
            {students.map((student) => (
                <div key={student.id} className={style.container}>
                    {editingId === student.id ? (
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                value={editData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={editData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                            />
                            <button onClick={handleUpdate}>✔ Save</button>
                            <button onClick={cancelEditing}>❌ Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <h3>{student.firstName} {student.lastName}</h3>
                            <button onClick={() => confirmAndDelete(student.id)}>❌ Delete</button>
                            <button onClick={() => startEditing(student)}>✍ Edit</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StudentList;
