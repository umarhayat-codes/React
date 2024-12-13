import React from 'react'

export default function Student() {
    const students = [
        {fullName : "umar", id : "1", city : "fsd"},
        {fullName : "ali", id : "2", city : "fsd"},
        {fullName : "zain", id : "3", city : "lhr"},
        {fullName : "ahmad", id : "4", city : "fsd"},
        {fullName : "muaz", id : "5", city : "fsd"},
    ]
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col text-center">
                <h2 className="text-center">Welcome to students</h2>
                {students.map((student,index) => {
                    return (
                        <>
                        <h4>{student.fullName} {student.id} {student.city}</h4>
                        </>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}
