import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSecction from "./components/PortfolioSecction";

const Dashboard = ({ children }) => {
  return (
    <DashboardLayout title={Dashboard}>
      <PortfolioSecction />
    </DashboardLayout>
  );
};

export default Dashboard;
