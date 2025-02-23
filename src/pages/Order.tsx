import { ArrowDown, ArrowUp, Clock, DollarSign, Package, TrendingDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Orders() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders & Risk Assessment</h1>
        <Button>Place New Order</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Predicted Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$24,500</div>
            <p className="text-xs text-muted-foreground">Using AI recommendations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Price Trend</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-2.4%</div>
            <p className="text-xs text-muted-foreground">Average across materials</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Awaiting delivery</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Price Update</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 32m</div>
            <p className="text-xs text-muted-foreground">AI prediction refresh</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="predictions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Material Price Predictions</CardTitle>
              <CardDescription>
                AI-powered price forecasts and inventory analysis as of {new Date().toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Material</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>Predicted Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Supply Status</TableHead>
                    <TableHead>Prediction Time</TableHead>
                    <TableHead>Recommendation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Steel Rebar</TableCell>
                    <TableCell>$1,200/ton</TableCell>
                    <TableCell>$1,150/ton</TableCell>
                    <TableCell className="text-red-600">
                      <span className="flex items-center">
                        <ArrowDown className="h-4 w-4 mr-1" />
                        4.2%
                      </span>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2" />
                              <span className="text-white text-bold">15 days left</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Current stock: 75 tons</p>
                            <p>Daily usage: 5 tons</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Mar 1, 2024 - 10:00 AM
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="text-yellow-600">
                        Order within 5 days
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cement</TableCell>
                    <TableCell>$280/ton</TableCell>
                    <TableCell>$310/ton</TableCell>
                    <TableCell className="text-green-600">
                      <span className="flex items-center">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        10.7%
                      </span>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                              <span className="text-white text-bold">3 days left</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Current stock: 30 tons</p>
                            <p>Daily usage: 10 tons</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Mar 1, 2024 - 10:00 AM
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="text-red-600">
                        Order Immediately
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lumber</TableCell>
                    <TableCell>$450/unit</TableCell>
                    <TableCell>$445/unit</TableCell>
                    <TableCell className="text-red-600">
                      <span className="flex items-center">
                        <ArrowDown className="h-4 w-4 mr-1" />
                        1.1%
                      </span>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                              <span className="text-white text-bold">45 days left</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Current stock: 450 units</p>
                            <p>Daily usage: 10 units</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Mar 1, 2024 - 10:00 AM
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="text-muted-foreground">
                        Monitor
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supply Risk Analysis</CardTitle>
              <CardDescription>Understanding the recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm">Critical (≤ 7 days supply)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="text-sm">Warning (8-30 days supply)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm">Healthy (&gt; 30 days supply)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Track your order history and delivery status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Material</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-2024-001</TableCell>
                    <TableCell>Steel Rebar</TableCell>
                    <TableCell>50 tons</TableCell>
                    <TableCell>$60,000</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                        Delivered
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-2024-002</TableCell>
                    <TableCell>Cement</TableCell>
                    <TableCell>200 tons</TableCell>
                    <TableCell>$56,000</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                        In Transit
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-2024-003</TableCell>
                    <TableCell>Lumber</TableCell>
                    <TableCell>100 units</TableCell>
                    <TableCell>$45,000</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                        Processing
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

