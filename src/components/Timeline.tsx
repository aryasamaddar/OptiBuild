
import {
  Calendar,
  Clock,
  AlertTriangle,
  BarChart2,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Building2,
} from "lucide-react";

interface Task {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: "completed" | "in-progress" | "delayed" | "upcoming";
  team: string;
  dependencies: string[];
}

interface Milestone {
  id: string;
  name: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
}

interface TimelineProps {
  tasks: Task[];
  milestones: Milestone[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "in-progress":
      return "bg-blue-100 text-blue-800";
    case "delayed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function Timeline({ tasks, milestones }: TimelineProps) {
  return (
    <>
      {/* Project Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              City Center Complex
            </h2>
            <p className="text-gray-500">
              Project Duration: Mar 2024 - Dec 2024
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              On Track
            </span>
          </div>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-600">Timeline Progress</span>
            </div>
            <p className="mt-2 text-2xl font-semibold">45%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-600">Tasks Completed</span>
            </div>
            <p className="mt-2 text-2xl font-semibold">12/28</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <span className="ml-2 text-gray-600">Active Issues</span>
            </div>
            <p className="mt-2 text-2xl font-semibold">3</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Building2 className="h-5 w-5 text-purple-600" />
              <span className="ml-2 text-gray-600">Teams Involved</span>
            </div>
            <p className="mt-2 text-2xl font-semibold">5</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline and Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* Milestones */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Project Milestones
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      milestone.status === "completed"
                        ? "bg-green-500"
                        : milestone.status === "in-progress"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-medium text-gray-900">
                      {milestone.name}
                    </p>
                    <p className="text-sm text-gray-500">{milestone.date}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      milestone.status
                    )}`}
                  >
                    {milestone.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Current Tasks
            </h3>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{task.name}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        task.status
                      )}`}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {task.startDate} - {task.endDate}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Progress: {task.progress}%
                    </span>
                    <span className="text-blue-600 font-medium">
                      {task.team}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              AI Insights
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Potential Delay Risk
                  </p>
                  <p className="text-sm text-gray-500">
                    Electrical wiring phase might be delayed due to material
                    shortage.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart2 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Resource Optimization
                  </p>
                  <p className="text-sm text-gray-500">
                    Consider reallocating team members to accelerate steel
                    structure installation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Updates
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">
                      John Smith
                    </span>{" "}
                    commented on Steel Structure Installation
                  </p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">
                    Foundation Work marked as completed
                  </p>
                  <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
            <button className="mt-4 text-sm text-blue-600 font-medium flex items-center">
              View all updates
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
