
// import {  useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// // import Aos from "aos";
// // import 'aos/dist/aos.css'
// // import { useEffect } from "react";


// const Update = () => {
//     // useEffect(()=>{
//     //     Aos.init();
//     //   },[])
//     const loadData = useLoaderData();
//     console.log(loadData);
//     const  { _id } =loadData
//     const handelUpdateCard = event => {
//         event.preventDefault();
//         const form = event.target;
//         const Titles = form.Titles.value;
//         const Deadline = form.Deadline.value;
//         const Description = form.Description.value;
//         const priority = form.priority.value;
//         const department = form.department.value;
//         const status = form.status.value;
        

//         const updateTask = { Titles,Deadline,Description,priority,department,status
//              }

//         console.log(updateTask);

//         fetch(`http://localhost:5000/tasks/${_id}`,{
//             method:"PUT",
//             headers:{
//               'content-type':'application/json'
//             },
//             body:JSON.stringify(updateTask)
//           })
//           .then(res =>res.json())
//           .then(data=>{
//             console.log(data)
//             if(data.modifiedCount > 0
//                 ){
//                     Swal.fire({
//                         title: 'Update Success!',
//                         text: 'Do you want to Update?',
//                         icon: 'success',
//                         confirmButtonText: 'Great Job'
//                       })
                
//             }
//           })
//         }

//     return (
//         <div>
//             <h1 className="text-3xl text-center font-medium mt-3 text-black">Update Your Task</h1>
//             <div className=" w-auto p-3">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="lg:flex gap-5 mx-auto items-center justify-center">
//                         <div className="form-control ">
//                             <label className="label">
//                                 <span className="label-text"> Titles*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Titles"
//                                 {...register('Titles', { required: true })}
//                                 required
//                                 className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control ">
//                             <label className="label">
//                                 <span className="label-text">Deadline</span>
//                             </label>
//                             <input
//                                 type="datetime-local"
//                                 placeholder="Deadline"
//                                 {...register('Deadline', { required: true })}
//                                 required
//                                 className="input input-bordered w-full" />
//                         </div>
//                         <div className="lg:flex gap-6">

//                             <div className="form-control  ">
//                                 <label className="label">
//                                     <span className="label-text">Priority*</span>
//                                 </label>
//                                 <select defaultValue="default" {...register('priority', { required: true })}
//                                     className="select select-bordered w-full">
//                                     <option disabled value="default">Select Priority</option>
//                                     <option value="low">Low</option>
//                                     <option value="moderate">moderate</option>
//                                     <option value="high">High</option>

//                                 </select>
//                             </div>

//                             <div className="form-control  ">
//                                 <label className="label">
//                                     <span className="label-text">Department Name</span>
//                                 </label>
//                                 <select defaultValue="default" {...register('department', { required: true })}
//                                     className="select select-bordered w-full">
//                                     <option disabled value="default">Select a Department</option>
//                                     <option value="developers">Developers</option>
//                                     <option value="corporate ">corporate professionals</option>
//                                     <option value="Bankers">Bankers</option>
//                                     <option value="HR">HR</option>
//                                     <option value="Accounter">Accounter</option>
//                                     <option value="Technical">Technical</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>



//                     <div className="lg:flex px-28 gap-5 mx-auto items-center justify-center">
//                         <div className="form-control lg:w-1/2">
//                             <label className="label">
//                                 <span className="label-text">Status</span>
//                             </label>
//                             <select defaultValue="default" {...register('status', { required: true })}
//                                 className="select select-bordered w-full">
//                                 <option disabled value="default">Select a Status</option>
//                                 <option value="todo">Todo</option>
//                                 <option value="progress">In Progress</option>
//                                 <option value="complete">Completed</option>

//                             </select>
//                         </div>
//                         <div className="form-control lg:w-1/2 ">
//                             <label className="label">
//                                 <span className="label-text">Description</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Description"
//                                 {...register('Description', { required: true })}
//                                 required
//                                 className="input flex items-center justify-center mx-auto input-bordered w-full h-12" />
//                         </div>
//                     </div>
//                     <button className="btn btn-outline flex items-center mt-6 justify-center mx-auto">
//                         Create Task
//                     </button>
//                 </form>
                
//             </div>
//         </div>
//     );
// };

// export default Update;


const Upadate = () => {
    return (
        <div>
            
        </div>
    );
};

export default Upadate;