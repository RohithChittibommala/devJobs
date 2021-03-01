import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Store } from "../state/StoreProvider";
interface Props {}
const DetailsJob: React.FC<Props> = (props) => {
  const { state } = useContext(Store);
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const job = state.jobs.find((job) => job.id === params.id);
  if (!job) history.push("/");
  const applyNowLink = (link: string) => {
    let valid = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/;
    const elements = link.match(valid);
    return elements ? elements[1] : undefined;
  };
  if (!job) return <div>No description for this job</div>;
  const company_url = job.company_url?.length > 7 ? job.company_url : null;
  applyNowLink(job.how_to_apply);
  return (
    <div className="jobs__board">
      <div className="job_details_header">
        <div className="logo_container">
          <img src={job.company_logo} alt="" />
        </div>
        <div className="text-box">
          <div className="text_box_company">
            <h1>{job.company}</h1>
          </div>
          <div>
            {company_url ? (
              <a
                className="company_url"
                href={company_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Company Url
              </a>
            ) : (
              <p className="no-url">No company url</p>
            )}
          </div>
        </div>
      </div>
      <div className="job_details_body">
        <div className="job_info">
          <h1>{job.title}</h1>
        </div>
        <div
          className="inner"
          dangerouslySetInnerHTML={{
            __html: job.description,
          }}
        />
        <div className="apply-btn">
          <a
            href={applyNowLink(job.how_to_apply)}
            rel="noopener noreferrer"
            target="_blank"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
