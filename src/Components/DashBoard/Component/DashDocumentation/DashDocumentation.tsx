import UsageSection from "../../../Documentation/Components/UsageSection";
import DashHero from "./Component/DashHero";

const DashDocumentation = () => {
  return (
    <div className="h-[100vh] overflow-y-auto">
      <DashHero />
      <UsageSection />
    </div>
  );
};

export default DashDocumentation;
