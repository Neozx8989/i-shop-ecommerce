import { useLocation } from "react-router-dom";

export default function SearchResult() {
  const location = useLocation();
  console.log(location.state.data);

  return <div>{location.state.data}</div>;
}
