import { Helmet } from "react-helmet-async";

import MonthRevenueCard from "./month-revenue-card";
import MonthOrdersAmountCard from "./month-orders-amount-card";
import DayhOrdersAmountCard from "./day-orders-amount-card";
import MonthCanceledOrdersAmountCard from "./month-canceled-orders-amount";
import RevenueChart from "./revenue-chart";
import PopularProductsChart from "./popular-products-chart";

export default function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-rows-4 gap-4 lg:grid-cols-4 lg:grid-rows-none">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayhOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-rows-2 gap-4 lg:grid-cols-9 lg:grid-rows-none">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
