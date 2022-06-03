import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div>
    <Sidebar />
    <div className="single">
      <SinglePost/>
      
    </div>
    </div>
  );
}