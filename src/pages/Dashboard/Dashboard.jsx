import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Dashboard = ({ children }) => {
  return (
    <DashboardLayout title={Dashboard}>
      <div>How are you</div>
    </DashboardLayout>
  );
};

export default Dashboard;
