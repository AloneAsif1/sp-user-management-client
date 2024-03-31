import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

function Update() {
    const oldData = useLoaderData()
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const college = form.college.value;
        const batch = form.batch.value;
        const phone = form.phone.value;
        const roll = form.roll.value;
        const photo = form.photo.value;
        const student = { name, college, batch, phone, roll, photo }
        console.log(student)
        fetch(`https://sp-student-management-server.vercel.app/update/${oldData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
                
        })
        .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount>0){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Student Updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
    }

    return (
        <div className='my-10'>
            <h2 className='text-center underline mb-5 font-semibold text-green-600 text-2xl'>
                Update {oldData.name}'s Information
            </h2>
            <form onSubmit={handleUpdate} className='items-center gap-2 text-center flex flex-col'>
                <input type="text" name='name' placeholder="Students Name" defaultValue={oldData.name} className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" name='college' placeholder="College Name" defaultValue={oldData.college} className="input input-bordered input-accent w-full max-w-xs" />
                <input type="number" name='batch' placeholder="Hsc Batch" defaultValue={oldData.batch} className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone Number" defaultValue={oldData.phone} className="input input-bordered input-accent w-full max-w-xs" />
                <input type="number" name='roll' placeholder="Roll" defaultValue={oldData.roll} className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" name='photo' placeholder="Photo Url" defaultValue={oldData.photo} className="input input-bordered input-accent w-full max-w-xs" />
                <div className=''>
                    <input type="submit" value="Update" className="btn input-bordered input-accent  max-w-xs" />

                </div>

            </form>
        </div>
    )
}

export default Update