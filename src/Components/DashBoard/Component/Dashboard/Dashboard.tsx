import EmailConfiguration from "./EmailConfiguration/EmailConfiguration";

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="text-xl font-SpaceMono font-bold italic mb-8">
        Template Configuration
      </div>
      <div>
        <EmailConfiguration />
      </div>
    </div>
  );
};

export default Dashboard;
