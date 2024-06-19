import React, { useState } from 'react';

function Survey() {
    const [data, setData] = useState({
        name: '',
        age: '',
        gender: '',
        likeSurvey: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.name==='' || data.age===''|| data.likeSurvey===''|| data.gender==''){
            alert('Please fill the form')
        }else{
            console.log('Form', data)
            setData({
                name: '',
                age: '',
                gender: '',
                likeSurvey: '',
            })
        }
     
        
    };

    return (
        <div className='bg-gray-500 p-4'>
            <form className="survey-form border-2 p-3" onSubmit={handleSubmit}>
                <h1 className='font-bold text-2xl text-white pb-4'>Survey Form</h1>
                <hr />
                <div className="form-group p-2">
                    <label htmlFor="name">Your Name</label> <br />
                    <input type="text" id="name" name="name" placeholder="Your Name"  value={data.name} onChange={handleChange}className='p-2 rounded'/>
                </div>
                <div className="form-group p-5">
                    <label htmlFor="age">Your Age</label> <br />
                    <input type="number" id="age" name="age" placeholder="Your Age" value={data.age} onChange={handleChange} className='p-2 rounded' />
                </div>
                <div className="form-group p-5">
                    <label htmlFor="gender">Gender</label><br />
                    <select id="gender" name="gender"  value={data.gender} onChange={handleChange} className='px-5 py-3 rounded'>
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Do you like this survey?</label>
                    <div className="radio-group p-5">
                        <label>
                            <input type="radio" name="likeSurvey" value="yes"  onChange={handleChange} className='p-4'/> Yes
                        </label>
                        <label>
                            <input type="radio" name="likeSurvey" value="no" onChange={handleChange} /> No
                        </label>
                    </div>
                </div>
                <button type="submit" className='bg-green-400 px-5 rounded text-white py-2'>Submit</button>
            </form>
        </div>
    );
}

export default Survey;
