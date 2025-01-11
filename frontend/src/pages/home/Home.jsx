import { MessageContainer } from "../../components/messages/MessageContainer";
import { Sidebar } from "../../components/sidebar/Sidebar";
export const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-2  ">
        <MessageContainer />
      </div>
    </div>
  );
};
