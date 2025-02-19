import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useContext } from "react";
import { ProjectContext } from "@/Context/projectContext";

interface BudgetManagementProps {
  projectData: any;
}

export function BudgetManagement() {
  const { projectData, setProjectData } = useContext(ProjectContext);
  const { budget } = projectData;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Budget</span>
                <span className="font-medium">{formatCurrency(budget.total)}</span>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Budget Utilization</span>
                  <span>{Math.round((budget.spent / budget.total) * 100)}%</span>
                </div>
                <Progress value={(budget.spent / budget.total) * 100} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Spent</span>
                <span className="font-medium">{formatCurrency(budget.spent)}</span>
              </div>
              <div className="flex justify-between">
                <span>Remaining</span>
                <span className="font-medium">{formatCurrency(budget.total - budget.spent)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Projected Cost</span>
                <span className="font-medium">{formatCurrency(budget.projected)}</span>
              </div>
              <div className="flex justify-between">
                <span>Projected Variance</span>
                <span className={`font-medium ${budget.projected > budget.total ? 'text-red-500' : 'text-green-500'}`}>
                  {formatCurrency(budget.total - budget.projected)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Allocated</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budget.categories.map((category: any) => (
                <TableRow key={category.name}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{formatCurrency(category.allocated)}</TableCell>
                  <TableCell>{formatCurrency(category.spent)}</TableCell>
                  <TableCell>{formatCurrency(category.allocated - category.spent)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={(category.spent / category.allocated) * 100} className="w-24" />
                      <span>{Math.round((category.spent / category.allocated) * 100)}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budget.recentTransactions.map((transaction: any) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>{formatCurrency(transaction.amount)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}