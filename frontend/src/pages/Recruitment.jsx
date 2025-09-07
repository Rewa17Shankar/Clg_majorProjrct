import React, { useEffect, useState } from "react";
import { getJobs, createJob, getApplicants, updateApplicantStatus } from "../api/recruitmentApi";

const Recruitment = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", description: "", department_id: "" });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  const fetchApplicants = async (jobId) => {
    setSelectedJob(jobId);
    const res = await getApplicants(jobId);
    setApplicants(res.data);
  };

  const handleCreateJob = async () => {
    await createJob(newJob);
    setNewJob({ title: "", description: "", department_id: "" });
    fetchJobs();
  };

  const handleUpdateStatus = async (id, status) => {
    await updateApplicantStatus(id, status);
    fetchApplicants(selectedJob);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recruitment & Hiring</h2>

      {/* Create Job */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Post a New Job</h3>
        <input
          type="text"
          placeholder="Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newJob.description}
          onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Department ID"
          value={newJob.department_id}
          onChange={(e) => setNewJob({ ...newJob, department_id: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleCreateJob} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create
        </button>
      </div>

      {/* Job List */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Jobs</h3>
          <ul className="border p-4 rounded">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => fetchApplicants(job.id)}
              >
                {job.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Applicants */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Applicants</h3>
          {applicants.length === 0 ? (
            <p>No applicants yet.</p>
          ) : (
            <ul className="border p-4 rounded">
              {applicants.map((a) => (
                <li key={a.id} className="flex justify-between items-center p-2 border-b">
                  <div>
                    <p className="font-medium">{a.name}</p>
                    <p className="text-sm">{a.email}</p>
                    <p className="text-sm">Status: {a.status}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleUpdateStatus(a.id, "Approved")}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(a.id, "Rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
