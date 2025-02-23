import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cloud, Sun, Wind, CloudLightning, Truck, Calendar, Bell, MessageSquare } from "lucide-react"

const siteConditions = [
  {
    id: 1,
    name: "Downtown Highrise",
    weather: "Sunny",
    temperature: 25,
    windSpeed: 10,
    alerts: [
      { type: "weather", message: "High temperatures expected next week. Ensure proper hydration for workers." },
      {
        type: "festival",
        message: "City festival next month may cause traffic congestion. Plan material deliveries accordingly.",
      },
    ],
  },
  {
    id: 2,
    name: "Riverside Apartments",
    weather: "Rainy",
    temperature: 18,
    windSpeed: 15,
    alerts: [
      { type: "weather", message: "Heavy rain forecast for the next 3 days. Secure all materials and equipment." },
      {
        type: "transportation",
        message: "Bridge maintenance scheduled for next week. Expect delays in material delivery.",
      },
    ],
  },
  {
    id: 3,
    name: "Central Park",
    weather: "Cloudy",
    temperature: 22,
    windSpeed: 8,
    alerts: [
      { type: "festival", message: "Annual park festival in 2 weeks. Coordinate with event organizers for access." },
    ],
  },
]

export default function SiteConditions() {
  const [selectedSite, setSelectedSite] = useState(siteConditions[0])

  const getWeatherIcon = (weather: string) => {
    switch (weather.toLowerCase()) {
      case "sunny":
        return <Sun className="h-6 w-6 text-yellow-500" />
      case "rainy":
        return <CloudLightning className="h-6 w-6 text-blue-500" />
      case "cloudy":
        return <Cloud className="h-6 w-6 text-gray-500" />
      default:
        return <Wind className="h-6 w-6 text-gray-500" />
    }
  }

  const getAlertIconAndStyle = (type: string) => {
    switch (type) {
      case "weather":
        return { icon: <CloudLightning className="h-5 w-5 text-red-500" />, style: "border-l-4 border-red-500 bg-gray-100" }
      case "transportation":
        return { icon: <Truck className="h-5 w-5 text-green-500" />, style: "border-l-4 border-green-500 bg-gray-100" }
      case "festival":
        return { icon: <Calendar className="h-5 w-5 text-sky-400" />, style: "border-l-4 border-sky-400 bg-gray-100" }
      default:
        return { icon: <Wind className="h-5 w-5" />, style: "border-l-4 border-gray-500 bg-yellow-100" }
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Site Conditions</h1>

      <div className="flex justify-end">
        <Select
          onValueChange={(value) =>
            setSelectedSite(siteConditions.find((site) => site.id.toString() === value) || siteConditions[0])
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a site" />
          </SelectTrigger>
          <SelectContent>
            {siteConditions.map((site) => (
              <SelectItem key={site.id} value={site.id.toString()}>
                {site.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{selectedSite.name}</CardTitle>
          <CardDescription>Current weather conditions and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            {getWeatherIcon(selectedSite.weather)}
            <div>
              <p className="text-2xl font-bold">{selectedSite.weather}</p>
              <p className="text-sm text-muted-foreground">
                {selectedSite.temperature}°C, Wind: {selectedSite.windSpeed} km/h
              </p>
            </div>
          </div>

          {selectedSite.alerts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><Bell className="inline-block mr-2 text-red-500" />Alert Type</TableHead>
                  <TableHead><MessageSquare className="inline-block mr-2 text-green-500" />Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedSite.alerts.map((alert, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium capitalize">{alert.type}</TableCell>
                    <TableCell>{alert.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-gray-600">No alerts for this site.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Site Alerts</CardTitle>
          <CardDescription>Important notifications for all construction sites</CardDescription>
        </CardHeader>
        <CardContent>
          {siteConditions.flatMap((site) =>
            site.alerts.map((alert, index) => {
              const { icon, 
                style } = getAlertIconAndStyle(alert.type)
              return (
                <Alert key={`${site.id}-${index}`} className={`mb-4 ${style}`}>
                  <div className="flex items-center space-x-3">
                    {icon}
                    <div>
                      <AlertTitle>
                        {site.name} - {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Alert
                      </AlertTitle>
                      <AlertDescription>{alert.message}</AlertDescription>
                    </div>
                  </div>
                </Alert>
              )
            })
          )}
        </CardContent>
      </Card>
    </div>
  )
}
