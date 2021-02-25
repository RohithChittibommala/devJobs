import React, { useContext } from "react";
import { Store } from "../state/StoreProvider";
interface Props {}
const Button: React.FC<Props> = (props) => {
  const { dispatch } = useContext(Store);
  return <div className="load-more">Load More</div>;
};

export default Button;
