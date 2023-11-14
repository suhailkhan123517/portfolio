import Card from "@/components/Card";
import Users from "@/components/Users";

const DashboardPage = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Users />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
