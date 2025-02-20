import {
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  Layers,
  Timer,
  Truck,
  HardHat,
  Wrench,
} from "lucide-react";

export function Analytics() {
  return (
    <div className="space-y-8">
      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Project Completion</p>
              <h3 className="text-2xl font-bold text-gray-900">45.8%</h3>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">3.2%</span>
            <span className="text-gray-500 ml-1">vs last week</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Resource Utilization</p>
              <h3 className="text-2xl font-bold text-gray-900">78.3%</h3>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center text-sm">
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-500 font-medium">1.5%</span>
            <span className="text-gray-500 ml-1">vs last week</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Budget Variance</p>
              <h3 className="text-2xl font-bold text-gray-900">-2.4%</h3>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center text-sm">
            <ArrowRight className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-500">On track with estimates</span>
          </div>
        </div>
      </div>

      {/* Resource Allocation */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Resource Allocation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                  <HardHat className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Labor</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: "45%" }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-purple-50 rounded-full flex items-center justify-center mr-3">
                  <Wrench className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Equipment
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 rounded-full h-2"
                style={{ width: "30%" }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-green-50 rounded-full flex items-center justify-center mr-3">
                  <Layers className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Materials
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">15%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 rounded-full h-2"
                style={{ width: "15%" }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-orange-50 rounded-full flex items-center justify-center mr-3">
                  <Truck className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Logistics
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-600 rounded-full h-2"
                style={{ width: "10%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Time Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Task Completion Analysis
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  On-Time Tasks
                </span>
                <span className="text-sm font-semibold text-gray-900">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 rounded-full h-2"
                  style={{ width: "68%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Delayed Tasks
                </span>
                <span className="text-sm font-semibold text-gray-900">22%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 rounded-full h-2"
                  style={{ width: "22%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Critical Delays
                </span>
                <span className="text-sm font-semibold text-gray-900">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 rounded-full h-2"
                  style={{ width: "10%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Efficiency Metrics
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <Timer className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Average Task Duration
                </span>
              </div>
              <p className="text-2xl font-semibold text-gray-900">14.2 days</p>
              <p className="text-sm text-gray-500">-2.3 days vs baseline</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Team Productivity
                </span>
              </div>
              <p className="text-2xl font-semibold text-gray-900">92%</p>
              <p className="text-sm text-green-500">+5% this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
