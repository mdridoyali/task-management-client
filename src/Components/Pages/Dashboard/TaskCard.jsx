/* eslint-disable react/prop-types */
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Tasks from "../../Hook/Tasks";
import toast, { Toaster } from 'react-hot-toast';

const TaskCard = ({ task }) => {
  const [timeData, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [,,refetch] = Tasks()

  const [showModal,setShowModal] = useState(false)
  function convertSeconds(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    return {
      hours: hours,
      minutes: minutes,
      seconds: remainingSeconds,
    };
  }

  let date1 = moment(new Date());
  let date2 = moment(task?.task_deadline);

  // Calculate the difference in seconds
  let differenceInSeconds = date2.diff(date1, "seconds");

  let time = convertSeconds(differenceInSeconds);

  const showTheMOdal = ()=>{
    setShowModal(!showModal)
  }

//   setInterval(() => {
//     setTime({ hours: time?.hours, minutes: time?.minutes, seconds: time?.seconds })
//   }, 500);

  const onUpdate = (status,id)=>{
       axios.put(`https://task-manage-server-three.vercel.app/updateTask/${status}/${id}`)
       .then(res => {
        refetch()

        toast('Updated the status ',{
            duration: 3000,
          })

          
            setShowModal(false)
         
       })
       .catch(
         toast('Some Error Came ',{
            duration: 3000,
          })
       )

  }

  // console.log(`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds.`);
  return (
    <div
      className="border rounded-lg lg:p-5 sm:p-4 p-3 min-w-[250px] w-full max-w-[400px]"
      key={task.Id}
    >
      <div className="flex gap-5 items-center">
        <div
          className={`px-3 py-2 text-white w-fit rounded-full text-[12px] ${
            task?.status == "pending" ? "bg-[#562CFF] " : ""
          } ${task?.status == "ongoing" ? "bg-[#00B81D] " : ""} ${
            task?.status == "completed" ? "bg-[#FF7A00] " : ""
          }`}
        >
          {task?.status}
        </div>
        <div
          className={`px-3 py-2 text-white w-fit rounded-full text-[12px] ${
            task?.status == "pending" ? "bg-[#562CFF] " : ""
          } ${task?.status == "ongoing" ? "bg-[#00B81D] " : ""} ${
            task?.status == "completed" ? "bg-[#FF7A00] " : ""
          }`}
        >
          {task?.priority}
        </div>
        {/* <div>{time.hours} : {time.minutes} :{time.seconds}</div> */}
      </div>

      <h2 className="mt-4 font-semibold "> {task.task_title}</h2>
      <p className="mt-3 text-sm ">{task?.task_description}</p>
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-sm mt-4">
          Deadline :{" "}
          {time.hours < 0 ? (
            "Time Finished"
          ) : (
            <>
              {time.hours} Hou : {time.minutes} Min :{time.seconds} Sec
            </>
          )}{" "}
        </p>
        <button className="cursor-pointer" onClick={showTheMOdal}><FaArrowRight  className="mt-2"></FaArrowRight></button>
        
      </div>
      {
        showModal && <TaskDetailsModal taskDetails={task} onUpdate={onUpdate} onClose={showTheMOdal}></TaskDetailsModal>
      }
      
    </div>
  );
};

export default TaskCard;



const TaskDetailsModal = ({ taskDetails, onClose, onUpdate }) => {
    const { task_title, task_description, priority, deadline ,status } = taskDetails;
  
    return (
      <div className="fixed m-4 inset-0 z-50 flex items-center text-black justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-lg mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">{task_title}</h3>
              <div className="mb-4">
                <p className="font-semibold mb-2">Description:</p>
                <p>{task_description}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold mb-2">Priority:</p>
                <p>{priority}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold mb-2">Deadline:</p>
                <p>{deadline}</p>
              </div>
              <div className="flex justify-start flex-wrap gap-4">
               {
                 status === 'pending' && <button
                 onClick={()=>{onUpdate('ongoing',taskDetails?._id)}}
                 className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none"
               >
                 Ongoing
               </button>
               }
                

                {
                   status === 'pending' || status === 'ongoing' ? <button
                   onClick={()=>{onUpdate('completed',taskDetails?._id)}}
                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
                 >
                   Completed
                 </button>:''
                }
                
                <button
                  onClick={()=>{onClose()}}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Close
                </button>
                <Toaster></Toaster>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  