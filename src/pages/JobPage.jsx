  import { useState,useEffect } from 'react'
import React from 'react'
import { useParams }  from 'react-router-dom'

const JobPage = () => {
    const { id } = useParams();
const [job,setJob] = useState(null);
  const [loading,setLoading] = useState(true);
  // const jobListings = isHome ? jobs.slice(0,3) : jobs;
  useEffect (() =>{
    const fetchJobs = async () => {
      try{
      const res = await fetch(`/api/jobs/${id}`);
      console.log(res);
      const data = await res.json();
      console.log(data);
      setJob(data);
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false);
    }
    };
    fetchJobs();
  },[]) ;

  return (
    <div><h1>{job.title}</h1></div>
  )
}


export default JobPage