import { TableHead, TableHeader, TableRow } from "../../../components/ui/table";

export default function OrderTableHeader() {
  return (
    <TableHeader>
    <TableRow>
      <TableHead className="w-[64px]"></TableHead>
      <TableHead className="w-[140px]">Identificador</TableHead>
      <TableHead className="w-[148px]">Realizado há</TableHead>
      <TableHead className="w-[140px]">Status</TableHead>
      <TableHead>Cliente</TableHead>
      <TableHead className="w-[140px]">Total do pedido</TableHead>
      <TableHead className="w-[164px]"></TableHead>
      <TableHead className="w-[132px]"></TableHead>
    </TableRow>
  </TableHeader>
  );
}
