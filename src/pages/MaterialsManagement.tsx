import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface MaterialsManagementProps {
  projectData: any;
}

export function MaterialsManagement({ projectData }: MaterialsManagementProps) {
  const { materials } = projectData;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return 'bg-green-500/15 text-green-700';
      case 'low stock':
        return 'bg-yellow-500/15 text-yellow-700';
      case 'pending':
        return 'bg-blue-500/15 text-blue-700';
      case 'in transit':
        return 'bg-purple-500/15 text-purple-700';
      default:
        return 'bg-gray-500/15 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Materials Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Orders</span>
                <span className="font-medium">{materials.ordered}</span>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Delivery Progress</span>
                  <span>{Math.round((materials.delivered / materials.ordered) * 100)}%</span>
                </div>
                <Progress value={(materials.delivered / materials.ordered) * 100} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Delivered</span>
                <span className="font-medium">{materials.delivered}</span>
              </div>
              <div className="flex justify-between">
                <span>Pending</span>
                <span className="font-medium">{materials.pending}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Current Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Material</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.inventory.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.recentOrders.map((order: any) => (
                <TableRow key={order.id}>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="font-medium">{order.item}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}