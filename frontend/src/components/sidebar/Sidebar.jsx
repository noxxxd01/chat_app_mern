import { LogOut } from "lucide-react";
import { Conversations } from "./Conversations";
import { SearchBar } from "./SearchBar";
import useSignOut from "../../hooks/useSignOut";

export const Sidebar = () => {
  const { loading, signout } = useSignOut();
  return (
    <div className="border rounded-lg w-[25rem] overflow-auto px-4 py-6 bg-slate-200">
      <div>
        <SearchBar />
      </div>
      <div className="mt-8">
        <Conversations />
      </div>
      <div className="mt-6">
        <button className="btn btn-primary" onClick={signout}>
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <>
              <LogOut />
              Sign Out
            </>
          )}
        </button>
      </div>
    </div>
  );
};
