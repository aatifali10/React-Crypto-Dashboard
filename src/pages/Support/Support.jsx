import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";

const Support = () => {
  return (
    <DashboardLayout>
      <SupportCard leftComponent={<ContactCard />} />
    </DashboardLayout>
  );
};

export default Support;
