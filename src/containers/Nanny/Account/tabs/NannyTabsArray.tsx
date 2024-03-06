import EmploymentHistory from "../tabContent/EmploymentHistory";
import Overview from "../tabContent/Overview";
import Reviews from "../tabContent/Reviews";

export interface tabsArrayProps {
  value: string;
  label: string;
  component?: JSX.Element;
}

const ClientTabsArray: tabsArrayProps[] = [
  {
    value: "overview",
    label: "Overview",
    component: <Overview />,
  },
  {
    value: "reviews",
    label: "Reviews",
    component: <Reviews />,
  },
  {
    value: "employment-history",
    label: "Employment History",
    component: <EmploymentHistory />,
  },
];

export default ClientTabsArray;
