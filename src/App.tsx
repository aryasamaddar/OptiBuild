import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Menu,
  ChevronDown,
  Bell,
  Settings,
  HelpCircle,
  Search,
  Users,
  Package,
  Wallet,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { WorkforceManagement } from "@/components/pages/WorkforceManagement";
import { MaterialsManagement } from "@/components/pages/MaterialsManagement";
import { BudgetManagement } from "@/components/pages/BudgetManagement";
import { projects, getProject } from "@/lib/mock-data";

type Page = "dashboard" | "workforce" | "materials" | "budget";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "workforce", name: "Workforce", icon: Users },
    { id: "materials", name: "Materials", icon: Package },
    { id: "budget", name: "Budget", icon: Wallet },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "workforce":
        return <WorkforceManagement projectData={selectedProject} />;
      case "materials":
        return <MaterialsManagement projectData={selectedProject} />;
      case "budget":
        return <BudgetManagement projectData={selectedProject} />;
      default:
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
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b flex items-center px-4 bg-background">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mr-4"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2 mr-4">
          <Building2 className="h-6 w-6" />
          <span className="font-semibold text-lg">Construction AI</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              {selectedProject.name}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {projects.map((project) => (
              <DropdownMenuItem
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto flex items-center gap-4">
          <div className="w-96">
            <Input type="search" placeholder="Search..." className="w-full" />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 250, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-r h-[calc(100vh-3.5rem)] bg-background"
            >
              <nav className="p-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={currentPage === item.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setCurrentPage(item.id as Page)}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {item.name}
                    </Button>
                  );
                })}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
