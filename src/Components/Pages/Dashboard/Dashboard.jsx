import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { v4 as uuidv4 } from 'uuid';
import "react-tabs/style/react-tabs.css";
import Tasks from "../../Hook/Tasks";
import AllTask from "./AllTask/AllTask";
import OneTask from "./OneTask/OneTask";
import { IoMdAdd } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const [, , refetch] = Tasks()
  const { user } = useContext(AuthContext)
  const { register, handleSubmit } = useForm();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    // You can handle the form data submission here


    if (data?.taskName.length < 6) {
      return toast('minium 6 character task title', {
        duration: 3000,
      });

    }

    if (data?.description.length < 20) {
      return toast('minium 20 character description', {
        duration: 3000,
      });

    }

    if (data?.deadline.length < 5) {
      return toast('please give the deadline ', {
        duration: 3000,
      });

    }


    const taskData = {
      task_deadline: data?.deadline,
      task_Id: uuidv4(),
      task_title: data?.taskName,
      task_description: data?.description,
      status: "pending",
      email: user?.email,
      notified: false,
      priority: data?.priority
    }
    console.log(taskData)



    axios.post('https://task-manage-server-three.vercel.app/addtasks', taskData)
      .then(res => {
        console.log(res)
        refectch()
        setShowModal(false)

      })
      .catch((err) => {
        setShowModal(false)
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      })

  };



  const [tasks, loading, refectch] = Tasks();

  const pending = tasks?.filter((item) => item.status == "pending");
  const ongoing = tasks?.filter((item) => item.status == "ongoing");
  const completed = tasks?.filter((item) => item.status == "completed");

  console.log(tasks);
  const items = [
    {
      item: "All Tasks",
      id: 0,
    },
    {
      item: "Ongoing",
      id: 1,
    },
    {
      item: "Completed",
      id: 2,
    },
    {
      item: "Pending",
      id: 3,
    },
  ];

  return (
    <div className=" lg:p-[30px] md:p-[20px] p-2">

      <h2 className="lg:text-[30px] ml-3 mt-3 font-medium md:text-[26px] items-center text-[24px] flex flex-wrap gap-4">
        Hello, {user?.displayName}
      </h2>

      <div className=" ml-3 mt-10  flex sm:flex-row flex-col gap-5 ">

        <div className="sm:text-base text-sm leading-[70px] gap-2 flex flex-wrap">
          <h4 className="border-2  pl-2 rounded-full py-[3px]">
            Open Task
            <span className="bg-[#562CFF] ml-1 px-5 py-1 font-bold sm:text-xl text-white rounded-full ">
              02
            </span>{" "}
          </h4>
          <h4 className="border-2 pl-2 rounded-full py-[3px]">
            completed
            <span className="bg-[#FF7A00] ml-1  px-5 py-1 font-bold sm:text-xl  text-white rounded-full">
              01
            </span>{" "}
          </h4>
          <h4 className="border-2 pl-2 rounded-full py-[3px]">
            is ongoing{" "}
            <span className="bg-[#00B81D] ml-1  px-5 py-1 font-bold sm:text-xl  text-white rounded-full">
              01
            </span>{" "}
          </h4>
        </div>
      </div>

      {/* Tabs */}

      <div className="mt-10">
        <Tabs>
          <TabList className="border-b-0 flex sm:justify-between justify-center gap-3 flex-wrap">
            <div className="flex gap-3 border-b-0  sm:justify-between justify-center  flex-wrap">
              {items?.map((item) => (
                <Tab
                  onClick={() => {
                    setItemNumber(item.id);
                  }}
                  className={` rounded-full md:px-4 md:py-2 px-3 py-1 border-2 outline-none  border-[#3e3857] ${itemNumber !== item.id
                    ? "bg-[#ffffff]  cursor-pointer "
                    : "bg-[#363535]  "
                    }`}
                  key={item.id}
                >
                  {item.item}
                </Tab>
              ))}
            </div>
            <div className="flex sm:justify-center justify-start sm:items-center items-start ">
              <button onClick={() => { setShowModal(true) }} className="btn">
                Add Task <IoMdAdd className="text-black"></IoMdAdd>{" "}
              </button>
            </div>
          </TabList>
          <TabPanel>
            <AllTask data={tasks} task={""}></AllTask>
          </TabPanel>
          <TabPanel>
            <OneTask data={ongoing} task={"ongoing"}></OneTask>
          </TabPanel>
          <TabPanel>
            <OneTask data={completed} task={"completed"}></OneTask>
          </TabPanel>
          <TabPanel>
            <OneTask data={pending} task={"pending"}></OneTask>
          </TabPanel>
        </Tabs>
      </div>
      {showModal ? <div className="fixed  inset-0 z-50 flex items-center text-black justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-96 max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 rounded bg-gray-200 px-10">
                <h3 className="text-lg font-semibold mb-4 text-black">
                  Add Task
                </h3>
                <div className="mb-4">
                  <label htmlFor="taskName" className="block mb-1">
                    Task Name
                  </label>
                  <input
                    id="taskName"
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    {...register("taskName", { required: true })}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    {...register("description")}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="priority" className="block mb-1">
                    Priority
                  </label>
                  <select
                    id="priority"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    {...register("priority")}
                  >
                    <option value="top">Top</option>
                    <option value="medium">Medium</option>
                    <option value="less">Less</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="deadline" className="block mb-1">
                    Deadline
                  </label>
                  <input
                    id="deadline"
                    type="datetime-local"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    {...register("deadline")}
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => { setShowModal(false) }}
                    className="bg-red-500  px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Submit
                  </button>

                </div>
              </div>
            </form>
            <Toaster />
          </div>
        </div>
      </div> : ""}

    </div>
  );
};

export default Dashboard;
