import React from "react";

export const JobList = ({ Jobs }) => {
  return (
    <div>
      <ul>
        {Jobs.map((job) => (
          <li key={job.id}>
            <h2>
              {job.title} in {job.location}
            </h2>
            <div>
              <p>{job.salary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
