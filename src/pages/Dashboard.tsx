import { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Building2,
//   Menu,
//   ChevronDown,
//   Bell,
//   Settings,
//   HelpCircle,
//   Search,
//   Users,
//   Package,
//   Wallet,
//   LayoutDashboard,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// import { WorkforceManagement } from "@/pages/WorkforceManagement";
// import { MaterialsManagement } from "@/pages/MaterialsManagement";
// import { BudgetManagement } from "@/pages/BudgetManagement";
// import { projects, getProject } from "@/lib/mock-data";
import { ProjectContext } from "../Context/projectContext";

export const Dashboard = () => {
    const {projectData } = useContext(ProjectContext);
    const selectedProject = projectData;
return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Budget Card */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Spent
                </span>
                <span className="text-sm font-medium">
                  ${(selectedProject.budget.spent / 1000000).toFixed(1)}M
                </span>
              </div>
              <Progress
                value={
                  (selectedProject.budget.spent /
                    selectedProject.budget.total) *
                  100
                }
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Budget</span>
              <span className="font-medium">
                ${(selectedProject.budget.total / 1000000).toFixed(1)}M
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workforce Card */}
      <Card>
        <CardHeader>
          <CardTitle>Workforce</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Active Workers
                </span>
                <span className="text-sm font-medium">
                  {selectedProject.workforce.active}
                </span>
              </div>
              <Progress
                value={
                  (selectedProject.workforce.active /
                    selectedProject.workforce.total) *
                  100
                }
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Efficiency Rate
              </span>
              <span className="font-medium">
                {selectedProject.workforce.efficiency}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Materials Card */}
      <Card>
        <CardHeader>
          <CardTitle>Materials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Delivered
                </span>
                <span className="text-sm font-medium">
                  {selectedProject.materials.delivered} items
                </span>
              </div>
              <Progress
                value={
                  (selectedProject.materials.delivered /
                    selectedProject.materials.ordered) *
                  100
                }
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Pending Delivery
              </span>
              <span className="font-medium">
                {selectedProject.materials.pending} items
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Card */}
      <Card>
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Progress
                </span>
                <span className="text-sm font-medium">
                  {selectedProject.timeline.progress}%
                </span>
              </div>
              <Progress value={selectedProject.timeline.progress} />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Days Remaining
              </span>
              <span className="font-medium">
                {selectedProject.timeline.daysLeft} days
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    );
}