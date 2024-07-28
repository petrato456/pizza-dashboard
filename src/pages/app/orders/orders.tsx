import { Helmet } from "react-helmet-async";
import { Table, TableBody } from "../../../components/ui/table";
import OrderTableRow from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import OrderTableHeader from "./order-table-head";
import Pagination from "../../../components/Pagination";

export default function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="border rounded-md">
            <Table>
              <OrderTableHeader />
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <OrderTableRow key={index} />
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} perPage={10} totalCount={100} />
        </div>
      </div>
    </>
  );
}
