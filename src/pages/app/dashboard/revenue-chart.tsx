import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";
import colors from "tailwindcss/colors";
const data = [
  { date: "10/12", revenue: 1000 },
  { date: "11/12", revenue: 100 },
  { date: "12/12", revenue: 10 },
  { date: "13/12", revenue: 1200 },
  { date: "14/12", revenue: 1700 },
  { date: "15/12", revenue: 900 },
  { date: "16/12", revenue: 4000 },
];

export default function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-tbase">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#CBD5E1"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
