/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";






const CreateTask = () => {
    const allTasks = useLoaderData()
    // console.log(allTasks);
    const [tasks,setTasks] = ([])
    const [todo, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [complete, setComplete] = useState([])
    useEffect(() => {
        const fTodos = allTasks.filter(task => task.status === 'todo')
        const fInProgress = allTasks.filter(task => task.status === 'progress')
        const fComplete = allTasks.filter(task => task.status === 'complete')

        setTodos(fTodos)
        setInProgress(fInProgress)
        setComplete(fComplete)
    }, [allTasks])

    const statuses = ['todo', 'progress', 'complete']
    const useTask = useAxios()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);

        const task = {
            Titles: data.Titles,
            Deadline: data.Deadline,
            Description: data.Description,
            priority: data.priority,
            department: data.department,
            status: data.status

        }
        console.log(task);

        const TaskRes = await useTask.post('/tasks', task);
        console.log(TaskRes);
        if (TaskRes.data.insertedId) {
            // show the pop up
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your task Created SuccessFully",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        }

    }
    return (
        <div>
            <h1 className="text-3xl text-center font-medium mt-3 text-black">Create Your Task</h1>
            <div className=" w-auto p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:flex gap-5 mx-auto items-center justify-center">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text"> Titles*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Titles"
                                {...register('Titles', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Deadline"
                                {...register('Deadline', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="lg:flex gap-6">

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Priority*</span>
                                </label>
                                <select defaultValue="default" {...register('priority', { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select Priority</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">moderate</option>
                                    <option value="high">High</option>

                                </select>
                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Department Name</span>
                                </label>
                                <select defaultValue="default" {...register('department', { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select a Department</option>
                                    <option value="developers">Developers</option>
                                    <option value="corporate ">corporate professionals</option>
                                    <option value="Bankers">Bankers</option>
                                    <option value="HR">HR</option>
                                    <option value="Accounter">Accounter</option>
                                    <option value="Technical">Technical</option>
                                </select>
                            </div>
                        </div>
                    </div>



                    <div className="lg:flex px-28 gap-5 mx-auto items-center justify-center">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select defaultValue="default" {...register('status', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Status</option>
                                <option value="todo">Todo</option>
                                <option value="progress">In Progress</option>
                                <option value="complete">Completed</option>

                            </select>
                        </div>
                        <div className="form-control lg:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                {...register('Description', { required: true })}
                                required
                                className="input flex items-center justify-center mx-auto input-bordered w-full h-12" />
                        </div>
                    </div>
                    <button className="btn btn-outline flex items-center mt-6 justify-center mx-auto">
                        Create Task
                    </button>
                </form>
                <div className="lg:flex justify-between mt-10 gap-16 mx-auto text-center">
                    {
                        statuses.map((status, index) => (
                            <Section key={index} status={status} allTasks={allTasks} todo={todo} inProgress={inProgress} complete={complete} />
                        )
                        )}
                </div>
            </div>
        </div>
    );
};

export default CreateTask;

const Section = ({ status, allTasks, todo, inProgress, complete }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept:"task",
        drop:(item)=>addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
        
      }))
      
    let text = 'Todo';
    let bg = 'bg-slate-500';
    let tasksToMap = todo
    if (status === "progress") {
        text = "In Progress"
        bg = "bg-purple-500"
        tasksToMap = inProgress
    }
    if (status === "complete") {
        text = "Complete"
        bg = "bg-green-500"
        tasksToMap = complete
    }
    const addItemToSection =(id)=>{
        console.log("dropped",id,status);
        // setTasks((prev)=>{
        //     const mTasks =prev.map(t=>{
        //         if(t.id ===id){
        //             return{...t,status:status}
        //         }
        //         return t
        //     })
        //     return mTasks;
        // })
       
    }
    return (
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-300":""}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task.id}  task={task}  allTasks={allTasks} />)}
        </div>
    )
}
const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}{''}
            <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
                {count}
            </div>
        </div>
    )
}
const Task = ({ task, allTasks }) => {
    console.log('task',task._id);
    const [{ isDragging }, drag] = useDrag(() => ({
        type:"task",
        item:{id:task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    //   console.log(isDragging);
    return (
        <div ref={drag} className={`card  bg-base-100 relative p-4 ${isDragging? "opacity-25" :"opacity-100"}  shadow-md rounded-md cursor-grab`}>
            <div className="card-body">
                <h2 className="card-title text-center mx-auto items-center">{task.Titles}</h2>
                <p>{task.Description}</p>
                <p className="">{task.Deadline}</p>
                <button className="absolute bottom-1 left-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                </button>

                <button className="absolute bottom-1 right-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                </button>

            </div>

        </div>
    )
}

