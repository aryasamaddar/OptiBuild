
import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
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
import { Textarea } from "@/components/ui/textarea"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for the workforce
const generateWorkforceData = () => {
  const roles = ["Carpenter", "Electrician", "Plumber", "Mason", "Welder"]
  const skillLevels = ["Beginner", "Intermediate", "Expert"]
  const availabilities = ["Available", "On Project", "On Leave"]
  const riskLevels = ["Low", "Medium", "High"]

  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Worker ${i + 1}`,
    role: roles[Math.floor(Math.random() * roles.length)],
    skillLevel: skillLevels[Math.floor(Math.random() * skillLevels.length)],
    availability: availabilities[Math.floor(Math.random() * availabilities.length)],
    riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)],
    team: Math.floor(i / 5) + 1, // Assign workers to 10 teams
  }))
}

const workforceData = generateWorkforceData()

// Mock data for the shortage prediction chart
const shortageData = [
  { week: "Week 1", shortage: 2 },
  { week: "Week 2", shortage: 5 },
  { week: "Week 3", shortage: 3 },
  { week: "Week 4", shortage: 7 },
]

export default function WorkforceManagementDashboard() {
  const [workforce, setWorkforce] = useState(workforceData)
  const [filteredWorkforce, setFilteredWorkforce] = useState(workforceData)
  const [riskScore, setRiskScore] = useState(65)
  const [currentPage, setCurrentPage] = useState(1)
  const [roleFilter, setRoleFilter] = useState("all")
  const [skillFilter, setSkillFilter] = useState("all")
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)
  const [isReallocateDialogOpen, setIsReallocateDialogOpen] = useState(false)

  const workersPerPage = 10
  const totalPages = Math.ceil(filteredWorkforce.length / workersPerPage)

  const totalWorkforce = workforce.length
  const currentPhase = "Foundation"
  const attritionRate = "2.5%"

  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore((prevScore) => {
        const change = Math.floor(Math.random() * 5) - 2 // Random change between -2 and 2
        return Math.max(0, Math.min(100, prevScore + change)) // Ensure score stays between 0 and 100
      })
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let filtered = workforce
    if (roleFilter !== "all") {
      filtered = filtered.filter((worker) => worker.role === roleFilter)
    }
    if (skillFilter !== "all") {
      filtered = filtered.filter((worker) => worker.skillLevel === skillFilter)
    }
    setFilteredWorkforce(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [roleFilter, skillFilter, workforce])

  const handleRequestSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle the request submission logic here
    setIsRequestDialogOpen(false)
  }

  const handleReallocateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle the reallocation submission logic here
    setIsReallocateDialogOpen(false)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Workforce Management Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Workforce</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWorkforce}</div>
            <p className="text-xs text-muted-foreground">Live Count</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Project Phase</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentPhase}</div>
            <p className="text-xs text-muted-foreground">Worker Distribution</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workforce Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              className="text-2xl font-bold"
              key={riskScore}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {riskScore}
            </motion.div>
            <p className="text-xs text-muted-foreground">0-100 scale</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attrition Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attritionRate}</div>
            <p className="text-xs text-muted-foreground">Monthly Worker Turnover</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Worker Allocation</CardTitle>
          <CardDescription>Manage and view current workforce allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input className="max-w-sm" placeholder="Search workers..." />
            <div className="flex space-x-2">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Carpenter">Carpenter</SelectItem>
                  <SelectItem value="Electrician">Electrician</SelectItem>
                  <SelectItem value="Plumber">Plumber</SelectItem>
                  <SelectItem value="Mason">Mason</SelectItem>
                  <SelectItem value="Welder">Welder</SelectItem>
                </SelectContent>
              </Select>
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Skill Level</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Team</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWorkforce
                .slice((currentPage - 1) * workersPerPage, currentPage * workersPerPage)
                .map((worker) => (
                  <TableRow key={worker.id}>
                    <TableCell className="font-medium">{worker.name}</TableCell>
                    <TableCell>{worker.role}</TableCell>
                    <TableCell>{worker.skillLevel}</TableCell>
                    <TableCell>{worker.availability}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          worker.riskLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : worker.riskLevel === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {worker.riskLevel}
                      </span>
                    </TableCell>
                    <TableCell>Team {worker.team}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Risk Prediction</CardTitle>
          <CardDescription>Forecasted worker shortages and high-risk project phases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Forecasted Worker Shortages (Next 4 Weeks)</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={shortageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="shortage" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">High-Risk Project Phases</h3>
              <ul className="list-disc list-inside">
                <li>Foundation (Risk Score: 75)</li>
                <li>Electrical Wiring (Risk Score: 68)</li>
                <li>Roofing (Risk Score: 62)</li>
              </ul>
            </div>
          </div>
          <Alert>
            <AlertTitle>High Risk Alert</AlertTitle>
            <AlertDescription>
              Potential shortage of 7 workers in Week 4. Consider reallocating resources or requesting additional
              workforce.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Dialog open={isReallocateDialogOpen} onOpenChange={setIsReallocateDialogOpen}>
          <DialogTrigger asChild>
            <Button>Reallocate Workers</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reallocate Workers</DialogTitle>
              <DialogDescription>
                Reassign workers to different teams or projects based on current needs.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleReallocateSubmit} className="space-y-4">
              <div>
                <Label htmlFor="worker">Select Worker</Label>
                <Select name="worker" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a worker" />
                  </SelectTrigger>
                  <SelectContent>
                    {workforce.map((worker) => (
                      <SelectItem key={worker.id} value={worker.id.toString()}>
                        {worker.name} - {worker.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="newTeam">New Team/Project</Label>
                <Select name="newTeam" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select new team" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i} value={(i + 1).toString()}>
                        Team {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="reason">Reason for Reallocation</Label>
                <Textarea id="reason" name="reason" required />
              </div>
              <Button type="submit">Submit Reallocation</Button>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Request Additional Workforce</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request Additional Workforce</DialogTitle>
              <DialogDescription>Submit a request for additional workers based on project needs.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <div>
                <Label htmlFor="role">Required Role</Label>
                <Select name="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Carpenter">Carpenter</SelectItem>
                    <SelectItem value="Electrician">Electrician</SelectItem>
                    <SelectItem value="Plumber">Plumber</SelectItem>
                    <SelectItem value="Mason">Mason</SelectItem>
                    <SelectItem value="Welder">Welder</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="skillLevel">Required Skill Level</Label>
                <Select name="skillLevel" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="numberOfWorkers">Number of Workers Needed</Label>
                <Input type="number" id="numberOfWorkers" name="numberOfWorkers" min="1" required />
              </div>
              <div>
                <Label htmlFor="justification">Justification for Request</Label>
                <Textarea id="justification" name="justification" required />
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

