import React from 'react'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobDetail,{jobLoader} from './pages/JobDetail'
import MainPage from './layouts/MainPage'
import PageNotFound from './pages/PageNotFound'
import AddJob from './pages/AddJob'
import EditJobPage from "./pages/EditPageJob";

//Add New Job
const addJob = async(newJob) => {
    console.log(newJob);
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type' :'application/json'
      },
      body:JSON.stringify(newJob),
    })
    return;
  };

  //Update Job 
  const updateJob = async(job) => {
     const res = await fetch(`/api/jobs/${job.id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(job),
     });
     return;
  }


  //Delete Job
  const deleteJob = async(id) =>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob}/>}
          loader={jobLoader}
        />
        <Route
          path="/job/:id"
          element={<JobDetail deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

const App = () => {
  
  return (
   <RouterProvider router={router} />
  )
}

export default App