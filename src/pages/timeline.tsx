import { useState } from "react";
import { Calendar, BarChart2, ClipboardList } from "lucide-react";
import { Timeline } from "../components/Timeline";
import { Analytics } from "../components/Analytics";
import { TaskUpdate } from "../components/TaskUpdate";
import React from "react";

const initialTasks: {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: "completed" | "in-progress" | "delayed" | "upcoming";
  team: string;
  dependencies: string[];
}[] = [
  {
    id: "1",
    name: "Foundation Work",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    progress: 100,
    status: "completed",
    team: "Construction",
    dependencies: [],
  },
  {
    id: "2",
    name: "Steel Structure Installation",
    startDate: "2024-03-16",
    endDate: "2024-04-15",
    progress: 65,
    status: "in-progress",
    team: "Engineering",
    dependencies: ["1"],
  },
  {
    id: "3",
    name: "Electrical Wiring",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    progress: 20,
    status: "delayed",
    team: "Electrical",
    dependencies: ["2"],
  },
];

const milestones: {
  id: string;
  name: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
}[] = [
  {
    id: "m1",
    name: "Project Kickoff",
    date: "2024-03-01",
    status: "completed",
  },
  {
    id: "m2",
    name: "Foundation Completion",
    date: "2024-03-15",
    status: "completed",
  },
  {
    id: "m3",
    name: "Structure Completion",
    date: "2024-04-15",
    status: "in-progress",
  },
];

type View = "timeline" | "analytics" | "update";

function App() {
  const [currentView, setCurrentView] = useState<View>("update");
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskUpdate = (
    taskId: string,
    newStatus: (typeof tasks)[0]["status"]
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Get the current path
  const path = window.location.pathname;

  // Set the view based on the path
  React.useEffect(() => {
    if (path === "/update") {
      setCurrentView("update");
    } else if (path === "/analytics") {
      setCurrentView("analytics");
    } else {
      setCurrentView("timeline");
    }
  }, [path]);

  const navigate = (view: View) => {
    window.history.pushState({}, "", view === "timeline" ? "/" : `/${view}`);
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("timeline")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentView === "timeline"
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Timeline
              </button>
              <button
                onClick={() => navigate("analytics")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentView === "analytics"
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BarChart2 className="h-4 w-4 mr-2" />
                Analytics
              </button>
              <button
                onClick={() => navigate("update")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentView === "update"
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <ClipboardList className="h-4 w-4 mr-2" />
                Update Tasks
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === "timeline" ? (
          <Timeline tasks={tasks} milestones={milestones} />
        ) : currentView === "analytics" ? (
          <Analytics />
        ) : (
          <TaskUpdate
            tasks={tasks}
            onUpdateTask={handleTaskUpdate}
            allTasks={tasks}
          />
        )}
        {/* {currentView === "timeline" ? (
          <Timeline tasks={tasks} milestones={milestones} />
        ) : (
          <Analytics />
        )} */}
      </main>
    </div>
  );
}

export default App;
