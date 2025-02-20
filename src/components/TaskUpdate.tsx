import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Calendar,
  Users,
  ArrowRight,
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

interface TaskUpdateProps {
  tasks: Task[];
  onUpdateTask: (taskId: string, newStatus: Task["status"]) => void;
  allTasks: Task[]; // For checking dependencies
}

export function TaskUpdate({ tasks, onUpdateTask, allTasks }: TaskUpdateProps) {
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");
  const [newStatus, setNewStatus] = useState<Task["status"]>("in-progress");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const task = tasks.find((t) => t.id === selectedTaskId);
    setSelectedTask(task || null);
  }, [selectedTaskId, tasks]);

  const checkDependencies = (task: Task): boolean => {
    if (!task.dependencies.length) return true;
    return task.dependencies.every((depId) => {
      const depTask = allTasks.find((t) => t.id === depId);
      return depTask?.status === "completed";
    });
  };

  const isPastDueDate = (task: Task): boolean => {
    const today = new Date();
    const dueDate = new Date(task.endDate);
    return today > dueDate;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask) {
      setMessage({ type: "error", text: "Please select a task" });
      return;
    }

    // Validation checks
    if (newStatus === "completed" && !checkDependencies(selectedTask)) {
      setMessage({
        type: "error",
        text: "Cannot mark as completed: Dependencies are not resolved",
      });
      return;
    }

    // Auto-mark as delayed if past due date
    const finalStatus =
      isPastDueDate(selectedTask) && newStatus !== "completed"
        ? "delayed"
        : newStatus;

    onUpdateTask(selectedTaskId, finalStatus);
    setMessage({
      type: "success",
      text: `Task "${selectedTask.name}" status updated to ${finalStatus}`,
    });

    // Reset form
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Update Task Status
      </h2>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center ${
            message.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Selection */}
        <div>
          <label
            htmlFor="task"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Task
          </label>
          <select
            id="task"
            value={selectedTaskId}
            onChange={(e) => setSelectedTaskId(e.target.value)}
            className="w-full bg-gray-200 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Choose a task...</option>
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.name}
              </option>
            ))}
          </select>
        </div>

        {/* Task Details */}
        {selectedTask && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {selectedTask.startDate} - {selectedTask.endDate}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span>{selectedTask.team}</span>
            </div>
            {selectedTask.dependencies.length > 0 && (
              <div className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2" />
                <span>
                  Dependencies: {selectedTask.dependencies.join(", ")}
                </span>
              </div>
            )}
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span
                className={`font-medium ${
                  selectedTask.status === "completed"
                    ? "text-green-600"
                    : selectedTask.status === "delayed"
                    ? "text-red-600"
                    : selectedTask.status === "in-progress"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Current Status: {selectedTask.status}
              </span>
            </div>
          </div>
        )}

        {/* Status Update */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            New Status
          </label>
          <select
            id="status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value as Task["status"])}
            className="w-full bg-gray-200 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="delayed">Delayed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors 
             hover:bg-white hover:text-black focus:outline-none focus:ring-2 
             focus:ring-gray-600 focus:ring-offset-2"
        >
          Update Task Status
        </button>
      </form>
    </div>
  );
}
