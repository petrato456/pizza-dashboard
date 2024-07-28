import { Search, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { TableRow, TableCell } from "../../../components/ui/table";
import { Dialog, DialogTrigger } from "../../../components/ui/dialog";
import OrderDetails from "./order-details";

export default function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        821832183218321
      </TableCell>
      <TableCell className="text-muted-foreground">ha 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full">
            <span className="font-medium text-muted-foreground">Pendente</span>
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Matheus Petrato Pimentel</TableCell>
      <TableCell className="font-medium">R$ 149.90</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
