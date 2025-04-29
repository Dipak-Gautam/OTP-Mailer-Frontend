import EmailConfiguration from "./EmailConfiguration/EmailConfiguration";

const Dashboard = () => {
  return (
    <div className="p-5 h-[100vh] overflow-y-auto">
      <div className=" ">
        <EmailConfiguration />
      </div>
    </div>
  );
};

export default Dashboard;
