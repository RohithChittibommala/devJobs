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
  console.log(job);

  const company_url =
    job && job?.company_url.length > 7 ? job?.company_url : null;

  return (
    <div className="jobs__board">
      <div className="job_details_header">
        <div className="logo_container">
          <img src={job?.company_logo} alt="" />
        </div>
        <div className="text-box">
          <div className="text_box_company">
            <h1>{job?.company}</h1>
          </div>
          <div>
            {company_url ? (
              <a href={company_url}>Company Url</a>
            ) : (
              <p className="no-url">No company url</p>
            )}
          </div>
        </div>
      </div>
      <div className="job_details_body">
        <p>{job?.description}</p>
      </div>
    </div>
  );
};

export default DetailsJob;
