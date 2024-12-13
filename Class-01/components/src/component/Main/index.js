import React from "react";

const Main = () => {
    // let users = [
    //     {fullName : "A", destination : "A", email : "A@gmailcom"},
    //     {fullName : "B", destination : "B", email : "B@gmailcom"},
    //     {fullName : "C", destination : "C", email : "C@gmailcom"},
    //     {fullName : "D", destination : "D", email : "D@gmailcom"},
    //     {fullName : "F", destination : "F", email : "F@gmailcom"},
    //     {fullName : "E", destination : "E", email : "F@gmailcom"},
    //     {fullName : "G", destination : "G", email : "F@gmailcom"}
    // ]
    return (
        <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <h2 className="text-center">Contact Me </h2>
                        <hr/>
                        <h2 className="text-center">Meet Our Team.</h2>

                    </div>
                </div>
                {/* <div className="row py-5 text-center">
                    <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Destination</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index) => {
                                return <tr>
                                <th>{index + 1} </th>
                                <td>{user.fullName} </td>
                                <td>{user.destination} </td>
                                <td>{user.email} </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    </div> */}
                </div>
        // </div>
    )
}

export default Main

