import React from "react";
import defaultCompanyLogo from "../desktop/default_company.png";
import { Job } from "../state/State";
interface Props {
  job: Job;
}

const JobListing: React.FC<Props> = ({ job }) => {
  return (
    <div className="job_listing">
      <div className="job_listing_company_logo">
        <img
          src={job.company_logo ? job.company_logo : defaultCompanyLogo}
          alt="companylogo"
        />
      </div>
      <div className="job_listing_time_type">
        <p className="time">{job.created_at}</p>
        <span>•</span>
        <p className="type">{job.type}</p>
      </div>
    </div>
  );
};

export default JobListing;
