
import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// Mock data for equipment allocation
const equipmentData = [
  { id: 1, name: "Excavator", site: "Downtown Highrise", condition: "Good", lastMaintenance: "2024-02-15" },
  { id: 2, name: "Crane", site: "Riverside Apartments", condition: "Excellent", lastMaintenance: "2024-01-30" },
  { id: 3, name: "Bulldozer", site: "Central Park", condition: "Fair", lastMaintenance: "2024-03-01" },
  { id: 4, name: "Concrete Mixer", site: "Downtown Highrise", condition: "Good", lastMaintenance: "2024-02-20" },
  { id: 5, name: "Forklift", site: "Riverside Apartments", condition: "Good", lastMaintenance: "2024-02-10" },
]

// Mock AI-generated alerts
const aiAlerts = [
  { id: 1, type: "Maintenance", message: "Bulldozer at Central Park due for maintenance in 5 days." },
  {
    id: 2,
    type: "Relocation",
    message: "Consider moving Crane from Riverside Apartments to Downtown Highrise for upcoming phase.",
  },
  { id: 3, type: "Efficiency", message: "Excavator at Downtown Highrise underutilized. Consider reassignment." },
]

export default function EquipmentManagement () {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle the equipment request logic here
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Equipment Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>Equipment Allocation</CardTitle>
          <CardDescription>Current equipment distribution across sites</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment</TableHead>
                <TableHead>Site</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Last Maintenance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentData.map((equipment) => (
                <TableRow key={equipment.id}>
                  <TableCell className="font-medium">{equipment.name}</TableCell>
                  <TableCell>{equipment.site}</TableCell>
                  <TableCell>{equipment.condition}</TableCell>
                  <TableCell>{equipment.lastMaintenance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
          <CardDescription>Equipment maintenance and relocation recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          {aiAlerts.map((alert) => (
            <Alert key={alert.id} className="mb-4">
              <AlertTitle>{alert.type} Alert</AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create Equipment Request</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Equipment Request</DialogTitle>
              <DialogDescription>Request equipment from other sites or external sources.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateRequest} className="space-y-4">
              <div>
                <Label htmlFor="equipment">Equipment Type</Label>
                <Select name="equipment" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excavator">Excavator</SelectItem>
                    <SelectItem value="crane">Crane</SelectItem>
                    <SelectItem value="bulldozer">Bulldozer</SelectItem>
                    <SelectItem value="concrete-mixer">Concrete Mixer</SelectItem>
                    <SelectItem value="forklift">Forklift</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="site">Requesting Site</Label>
                <Select name="site" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select site" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown-highrise">Downtown Highrise</SelectItem>
                    <SelectItem value="riverside-apartments">Riverside Apartments</SelectItem>
                    <SelectItem value="central-park">Central Park</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration">Duration (days)</Label>
                <Input type="number" id="duration" name="duration" min="1" required />
              </div>
              <div>
                <Label htmlFor="reason">Reason for Request</Label>
                <Textarea id="reason" name="reason" required />
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

