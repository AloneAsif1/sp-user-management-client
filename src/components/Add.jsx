import React from 'react'
import Swal from 'sweetalert2'

function Add() {

    const handleAdd = e => {
e.preventDefault();

const form = e.target;
const name= form.name.value;
const college = form.college.value;
const batch = form.batch.value;
const phone = form.phone.value;
const roll = form.roll.value;
const photo= form.photo.value;
const student ={name,college,batch,phone,roll,photo}
console.log(student)

fetch('https://sp-student-management-server.vercel.app/add',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(student)
})
.then(res => res.json())
.then(data => {
    console.log("tesi")
    if(data.insertedId){
        console.log("id here")
        Swal.fire({
            title: 'Success!',
            text: 'Student added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
})

    }

    return (
        <div className='w-full mt-10'>
          <h2 className='text-center underline mb-5 font-semibold text-green-600 text-2xl'>
          Add a Student
          </h2>
            <form onSubmit={handleAdd} className='items-center gap-2 text-center flex flex-col'>
                <input type="text" name='name' placeholder="Students Name" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" name='college' placeholder="College Name" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="number" name='batch' placeholder="Hsc Batch" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="number" name='roll' placeholder="Roll" className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered input-accent w-full max-w-xs" />
                <div className=''>
                    <input type="submit" placeholder="Add Student" className="btn input-bordered input-accent  max-w-xs" />

                </div>
            </form>
        </div>
    )
}

export default Add