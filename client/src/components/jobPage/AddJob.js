import {useFormik,formik} from 'formik';
import axios from 'axios';

const AddJob = () => {

  const designations= ["Design","Development","Marketing","HR"];
  const jobTypes=["Full time","Part time","Freelance","Internship"];
  const experience=[0,1,2,3,4,5,6,7,8,9]
  const formik=useFormik({
    initialValues:{
        title:"",
        designation:designations[0],
        typeOfJob:jobTypes[0],
        companyName:"",
        experience:0,
        location:"",
        quota:"",
        description:"",
        salary:"",
    },
    onSubmit: (values ,onSubmitProps)=>{
        axios.post("/jobs/create",{
            title:values.title,
            designation:values.designation,
            numberOfCandidates:0,
            typeOfJob:values.typeOfJob,
            companyName:values.companyName,
            experience:values.experience,
            location:values.location,
            quota:values.quota,
            description:values.description,
            salary:values.salary,
        });
        alert("Job added");
        onSubmitProps.resetForm();
    }
  })  
  return (
    <div className="flex-col items-center h-screen overflow-scroll w-full py-8 px-4 bg-slate-200">
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4 p-4">
            <span className='text-xl font-bold'>Create Job</span>
            <div className="flex flex-row space-x-4">
                <div className='flex flex-col space-y-1 w-4/12'>
                    <label for="title">Job title</label>
                    <input type="text" id="title" name="title" value={formik.values.title} onChange={formik.handleChange}  className='bg-white rounded-sm p-2'></input>
                </div>
                <div className='flex flex-col space-y-1 w-4/12'>
                    <label for="title">Company Name</label>
                    <input type="text" id="companyName" name="companyName" value={formik.values.companyName} onChange={formik.handleChange}  className='bg-white rounded-sm p-2'></input>
                </div>
            </div>
            <div className="flex flex-row space-x-4">
                <div className='flex flex-col space-y-1 w-4/12'>
                    <label>Select Designation</label>
                    <select name="designation" id="designation" onChange={formik.handleChange} className='bg-white p-2' value={formik.values.designation}>
                        {designations.map((designation,index) =>(
                                <option value={designation} key={index}>{designation}</option>
                            ))}
                    </select>
                </div>
                <div className='flex flex-col space-y-1 w-4/12'>
                    <label>Select Job Type</label>
                    <select name="jobType" id="jobType" onChange={formik.handleChange} className='bg-white p-2' value={formik.values.jobTypes}>
                        {jobTypes.map((jt,index) =>(
                                <option value={jt} key={index}>{jt}</option>
                            ))}
                    </select>
                </div>
            </div>
            <div className="flex flex-row space-x-4">
                <div className='flex flex-col space-y-1 w-8/12'>
                    <label for="title">Job description</label>
                    <textarea rows={8} name="description" onChange={formik.handleChange} value={formik.values.description} className='bg-white p-2 rounded-sm'></textarea>
                </div>
            </div>
            <div className="flex flex-row space-x-4">
                <div className='flex flex-col space-y-1 w-4/12'>
                    <label for="title">Location</label>
                    <input type="text" id="location" name="location" value={formik.values.location} onChange={formik.handleChange}  className='bg-white rounded-sm p-2'></input>
                </div>
                <div className="flex flex-col space-y-1 w-4/12">
                    <label for="title">Experience</label>
                    <select name="experience" id="experience" onChange={formik.handleChange} className='bg-white p-2 rounded-sm' value={formik.values.experience}>
                        {experience.map((exp,index)=>(
                            <option value={exp} key={index}>{exp} yrs</option>
                        ))}
                        <option value="10+" key="10">10+ yrs</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-row space-x-4">
                <div className="flex flex-col space-y-1 w-4/12">
                    <label for="title">Quota</label>
                    <input type="text" id="quota" name="quota" value={formik.values.quota} onChange={formik.handleChange}  className='bg-white rounded-sm p-2'></input>
                </div>
                <div className="flex flex-col space-y-1 w-4/12">
                    <label for="title">Salary</label>
                    <input name="salary" id="salary" value={formik.values.salary} onChange={formik.handleChange} className='bg-white p-2 rounded-sm'></input>
                </div>
            </div>
            <div className='text-center w-8/12'>
                <button className='bg-yellow-300 rounded-md p-3' type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddJob