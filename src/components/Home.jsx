import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../firebase/Provider';

function Home() {
    const loadedStudents = useLoaderData();
    const [allStudents,setAllStudents] =useState(loadedStudents)
    console.log(allStudents)
const {googleLogin} =useContext(AuthContext)
console.log(googleLogin)
    const handleDelete = id => {
        Swal.fire({
            title: "Do you want to delete the Student?",

            showCancelButton: true,
            confirmButtonText: "Delete",

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://sp-student-management-server.vercel.app/delete/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0){
                            
                            fetch('https://sp-student-management-server.vercel.app')
                            .then(res => res.json())
                            .then(data =>{
                                setAllStudents(data)
                            })
                            Swal.fire("Deleted!", "", "success");
                        }
                    })

                
            }
        });
    }

    const handleGoogleLogin=() =>{
        googleLogin();
    }
    return (
        <div> <h2 className='text-2xl font-bold text-center mt-10 text-blue-600'>All Students</h2>

            {
                allStudents.map(student => <div key={student._id} className="card w-4/5 mx-auto my-5 card-side bg-base-100 shadow-xl">
                    <div className="avatar rounded-lg bg-slate-300">
                        <div className="w-72 h-72">
                            <img src={student.photo ? student.photo : "https://i.ibb.co/ZhxccXt/2643380-200.png"} />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{student.name}</h2>
                        <p> Roll : {student.roll}</p>
                        <p> College : {student.college}</p>
                        <p> HSC : {student.batch}</p>
                        <p> Phone : {student.phone}</p>
                        <div className="card-actions justify-end">
                          <Link to={`/update/${student._id}`}><button  className="btn btn-primary">Update</button></Link>  
                            <button onClick={() => handleDelete(student._id)} className="btn btn-primary bg-red-800 hover:bg-red-950">Delete</button>
                        </div>
                    </div>
                </div>)
            }
<div><button onClick={handleGoogleLogin}>google login</button></div>

        </div>
    )
}

export default Home