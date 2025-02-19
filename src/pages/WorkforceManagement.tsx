import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useContext } from "react";
import { ProjectContext } from "@/Context/projectContext";
interface WorkforceManagementProps {
  projectData: any;
}

export function WorkforceManagement() {
  const {projectData, setProjectData} = useContext(ProjectContext);
  const { workforce } = projectData;

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Workforce Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Workers</span>
                <span className="font-medium">{workforce.total}</span>
              </div>
              <div className="flex justify-between">
                <span>Active Workers</span>
                <span className="font-medium">{workforce.active}</span>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Efficiency Rate</span>
                  <span>{workforce.efficiency}%</span>
                </div>
                <Progress value={workforce.efficiency} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Present</span>
                <span className="font-medium">{workforce.attendance.present}</span>
              </div>
              <div className="flex justify-between">
                <span>Absent</span>
                <span className="font-medium">{workforce.attendance.absent}</span>
              </div>
              <div className="flex justify-between">
                <span>On Leave</span>
                <span className="font-medium">{workforce.attendance.onLeave}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workforce.skills.map((skill: any) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.workers} workers</span>
                  </div>
                  <Progress value={(skill.workers / workforce.total) * 100} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Teams Table */}
      <Card>
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team Name</TableHead>
                <TableHead>Team Lead</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Efficiency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workforce.teams.map((team: any) => (
                <TableRow key={team.id}>
                  <TableCell className="font-medium">{team.name}</TableCell>
                  <TableCell>{team.lead}</TableCell>
                  <TableCell>{team.members}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={team.efficiency} className="w-24" />
                      <span>{team.efficiency}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}