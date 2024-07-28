import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export default function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: Pizza gigante.</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">Pendente</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Matheus petrato
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (47) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                petratomatheus1@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Produto</TableHead>
              <TableHead className="text-end">Qtd.</TableHead>
              <TableHead className="text-center">Preço</TableHead>
              <TableHead className="text-center">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
                <TableCell>Pizza Pepperoni Família</TableCell>
                <TableCell className="text-center">2</TableCell>
                <TableCell className="text-right">R$ 69.90</TableCell>
                <TableCell className="text-right">R$ 139.80</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Pizza Calabresa Família</TableCell>
                <TableCell className="text-center">2</TableCell>
                <TableCell className="text-right">R$ 39.80</TableCell>
                <TableCell className="text-right">R$ 139.80</TableCell>
            </TableRow>
          </TableBody>
            <TableFooter>
                <TableRow className="w-full justify-between">
                    <TableCell colSpan={3}>Total do pedido</TableCell>
                    <TableCell className="text-right font-medium">R$ 279.60</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
