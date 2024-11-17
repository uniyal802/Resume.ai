import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      GetResumesList();
    }
  }, [user]);

  /**
   * Fetches the user's list of resumes
   */
  const GetResumesList = async () => {
    try {
      setLoading(true);
      const response = await GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress);
      setResumeList(response.data.data || []);
    } catch (error) {
      console.error('Error fetching resumes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating an AI resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddResume />
        {loading ? (
          [1, 2, 3, 4].map((item, index) => (
            <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
          ))
        ) : resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
          ))
        ) : (
          <p>No resumes found. Create your first resume!</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
