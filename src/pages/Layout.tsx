import { useState, useContext } from "react";
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
import { projects, getProject } from "@/lib/mock-data";
import { ProjectContext } from "../Context/projectContext";
import { NavLink, Outlet } from "react-router-dom";

type Page = "dashboard" | "workforce" | "materials" | "budget";

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentNav, setCurrentNav] = useState(false);
  // const [selectedProject, setSelectedProject] = useState(projects[0]);
  // const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const { projectData, setProjectData } = useContext(ProjectContext);
  const selectedProject = projectData;
  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard, value: "" },
    { id: "workforce", name: "Workforce", icon: Users, value: "workforce" },
    { id: "materials", name: "Materials", icon: Package, value: "materials" },
    { id: "budget", name: "Budget", icon: Wallet, value: "budget" },
  ];
  return (
    <div className="min-h-screen bg-background w-screen">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b flex items-center px-4 bg-background">
        <Button size="sm" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu />
        </Button>

        <div className="flex items-center gap-2 mr-4">
          <Building2 className="h-6 w-6 ml-2" />
          <span className="font-semibold text-lg">OptiBuild</span>
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
                onClick={() => setProjectData(project)}
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
              <nav className="flex flex-col  p-4 space-y-2 ">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.id}
                      to={item.value}
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className="w-full justify-start"
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {item.name}
                        </Button>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        <main className="flex-1 p-6">{<Outlet />}</main>
      </div>
    </div>
  );
};
