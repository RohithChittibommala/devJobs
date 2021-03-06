import React from "react";
import defaultCompanyLogo from "../desktop/default_company.png";
import { Job } from "../state/State";
import { getTimeDifference } from "../utils/time";
import LinesEllipsis from "react-lines-ellipsis";
import location from "../desktop/location2.svg";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import { Link } from "react-router-dom";
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
interface Props {
  job: Job;
  isDarkMode: boolean;
}

const colors = [
  "#302785",
  "#F77060",
  "#C5C5C7",
  "#F48735",
  "#30A5C4",
  "#CBB80C",
  "#CA4C2D",
  "#E65A8B",
];

const getBackgroundColor = () => ({
  backgroundColor: colors[Math.floor(Math.random() * colors.length)],
});
const JobListing: React.FC<Props> = ({ job, isDarkMode }) => {
  return (
    <Link className="link" to={`/job/${job.id}`}>
      <div className={`job_listing ${isDarkMode ? `dark` : ``}`}>
        <div className="job_listing_company_logo" style={getBackgroundColor()}>
          <img
            src={job.company_logo ? job.company_logo : defaultCompanyLogo}
            alt="companylogo"
          />
        </div>
        <div className="job_listing_time_type">
          <p className="time">
            {getTimeDifference(Date.parse(job.created_at))}
          </p>
          <span>•</span>
          <p className="type">{job.type}</p>
        </div>
        <ResponsiveEllipsis
          className="job_listing_title"
          text={job.title}
          component="h3"
          maxLine={2}
        />
        <ResponsiveEllipsis
          className="job_listing_company"
          component="p"
          text={job.company}
        />

        <div className="job_listing_location">
          <img src={location} alt="" />
          <ResponsiveEllipsis text={job.location} component="p" />
        </div>
      </div>
    </Link>
  );
};

export default JobListing;
