import React from 'react';



const StudentDisplay = ({rollNo,name,designation}) => {
    return (
        <div className="student-container">
            <label>{rollNo}</label>
            <label style={{ marginLeft: 16, marginRight: 16 }}>{name}</label>
            <label>{designation}</label>
        </div>
    )
}

export default StudentDisplay;