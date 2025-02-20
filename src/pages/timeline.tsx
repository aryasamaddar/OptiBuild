import React, { useState } from "react";
import { Calendar, BarChart2, Construction } from "lucide-react";
import { Timeline } from "../components/Timeline";
import { Analytics } from "../components/Analytics";

const tasks: {
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

function TimelinePage() {
  const [currentView, setCurrentView] = useState<"timeline" | "analytics">(
    "analytics"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Construction className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Construction Project
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentView("timeline")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentView === "timeline"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Timeline
              </button>
              <button
                onClick={() => setCurrentView("analytics")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentView === "analytics"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BarChart2 className="h-4 w-4 mr-2" />
                Analytics
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === "timeline" ? (
          <Timeline tasks={tasks} milestones={milestones} />
        ) : (
          <Analytics />
        )}
      </main>
    </div>
  );
}

export default TimelinePage;
