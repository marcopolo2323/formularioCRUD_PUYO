// StudentList.jsx
import { useEffect, useState } from 'react';
import useStudentStore from '../../store/studentStore';
import style from './studentList.module.css';

const StudentList = () => {
    const { fetchStudents, students, deleteStudent, updateStudent } = useStudentStore();
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ firstName: '', lastName: '' });
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const confirmAndDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            deleteStudent(id);
        }
    };

    const filteredStudents = students.filter(student => {
        const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        return fullName.includes(searchTerm);
    });

    return (
        <div className={style.pageContainer}>
            <h1 className={style.title}>Student List</h1>
            
            <div className={style.searchContainer}>
                <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className={style.searchInput}
                />
                <span className={style.resultsCount}>
                    {filteredStudents.length} students found
                </span>
            </div>

            <div className={style.studentsGrid}>
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <div key={student.id} className={style.studentCard}>
                            {editingId === student.id ? (
                                <div className={style.editForm}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={editData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        className={style.input}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={editData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        className={style.input}
                                    />
                                    <div className={style.buttonGroup}>
                                        <button onClick={handleUpdate} className={style.saveButton}>
                                            ✔ Save
                                        </button>
                                        <button onClick={cancelEditing} className={style.cancelButton}>
                                            ❌ Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className={style.studentInfo}>
                                    <h3 className={style.studentName}>
                                        {student.firstName} {student.lastName}
                                    </h3>
                                    <div className={style.buttonGroup}>
                                        <button 
                                            onClick={() => confirmAndDelete(student.id)}
                                            className={style.deleteButton}
                                        >
                                            ❌ Delete
                                        </button>
                                        <button 
                                            onClick={() => startEditing(student)}
                                            className={style.editButton}
                                        >
                                            ✍ Edit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className={style.noResults}>
                        No students found matching your search
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentList;