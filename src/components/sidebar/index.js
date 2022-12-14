import useUser from "../../hooks/useUser";
import Suggestions from "./suggestions";
import User from "./user";

export default function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();
  return (
    <div className="p-4 w-6/12">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
