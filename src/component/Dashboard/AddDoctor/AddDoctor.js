import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('number', info.number)

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }
    return (
        <div className='container-fluid row'>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ backgroundColor: '#F4FDFB' }}>
                <h5 className='text-brand'>Add Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" onBlur={handleBlur} class="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="name">Number</label>
                        <input type="number" onBlur={handleBlur} class="form-control" name="number" placeholder="Number" />
                    </div>
                    <div class="form-group">
                        <label for="file">Upload a Picture</label>
                        <input type="file" onChange={handleFileChange} class="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;