import { useState } from "react"
import useStudentStore from "../../store/studentStore"

const StudenForm = ()=>{
    const{addStudent} = useStudentStore()
    const [studentData, setStudentData] = useState({
        firstName:"",
        lastName:""
    })

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setStudentData({
            ...studentData,
            [name]:value
        })
    }
    console.log(studentData)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        addStudent(studentData)
        setStudentData({
            firstName:"",
            lastName:""
        })
        alert("Student Added Successfully")
    }
    return(
        <div>
            <h1>Student Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter firstname"
                required
                name="firstName"
                value={studentData.firstName}
                onChange={handleInputChange}
                />

                <input 
                type="text"
                placeholder="Enter lastname"
                required
                name="lastName"
                value={studentData.lastName}
                onChange={handleInputChange}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default StudenForm