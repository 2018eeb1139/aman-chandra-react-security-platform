import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Plus, X, ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orgStats, scans } from "@/data/mockData";
import {
  getSeverityColor,
  getStatusColor,
  getTrendColor,
  formatTrendText,
} from "@/lib/utils";
import * as Icons from "lucide-react";
import toast from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  // Get unique types and statuses from scans data
  const uniqueTypes = [...new Set(scans.map((scan) => scan.type))];
  const uniqueStatuses = [...new Set(scans.map((scan) => scan.status))];

  const filteredScans = scans.filter((scan) => {
    const matchesSearch =
      scan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scan.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(scan.type);
    const matchesStatus =
      selectedStatuses.length === 0 || selectedStatuses.includes(scan.status);

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleTypeFilterChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleStatusFilterChange = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedStatuses([]);
  };

  const hasActiveFilters =
    selectedTypes.length > 0 || selectedStatuses.length > 0;

  const statItems = [
    {
      key: "critical",
      label: "Critical Severity",
      icon: "AlertCircle",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    },
    {
      key: "high",
      label: "High Severity",
      icon: "AlertTriangle",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
    {
      key: "medium",
      label: "Medium Severity",
      icon: "AlertOctagon",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    },
    {
      key: "low",
      label: "Low Severity",
      icon: "Info",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
  ];

  return (
    <Layout
      title="Dashboard"
      breadcrumbs={["Scans", "Private Assets"]}
      actions={[
        {
          label: "Export Report",
          variant: "outline",
          onClick: () => {
            toast.success("Exporting report");
          },
        },
        {
          label: "Stop Scan",
          variant: "destructive",
          onClick: () => {
            toast.error("Scanning stopped");
          },
        },
      ]}
    >
      <div className="p-6 space-y-6">
        <div className="text-sm text-muted-foreground space-y-1">
          <div>
            <span className="font-semibold">Org:</span> Project X
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <div>
              <span className="font-semibold">Owner:</span> Nammagiri
            </div>
            <div>
              <span className="font-semibold">Total Scans:</span> 100
            </div>
            <div>
              <span className="font-semibold">Scheduled:</span> 1000
            </div>
            <div>
              <span className="font-semibold">Rescans:</span> 100
            </div>
            <div>
              <span className="font-semibold">Failed Scans:</span> 100
              <span className="text-cyan-500 ml-1 text-xs">10 mins ago</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statItems.map((stat) => {
            const data = orgStats[stat.key];
            const Icon = Icons[stat.icon];
            const trendColor = getTrendColor(data.trend);
            return (
              <Card key={stat.key}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {stat.label}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold">{data.count}</p>

                    <p className={`text-xs ${trendColor}`}>
                      {data.trend === "up" ? "+" : ""}
                      {data.change}%{" "}
                      {data.trend === "up" ? "increase" : "decrease"} than
                      yesterday
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search scans by name or type or status..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  {hasActiveFilters && (
                    <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-[#0CC8A8] text-white text-xs">
                      {selectedTypes.length + selectedStatuses.length}
                    </Badge>
                  )}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                  Scan Type
                </DropdownMenuLabel>
                {uniqueTypes.map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={() => handleTypeFilterChange(type)}
                  >
                    {type}
                  </DropdownMenuCheckboxItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                  Status
                </DropdownMenuLabel>
                {uniqueStatuses.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={selectedStatuses.includes(status)}
                    onCheckedChange={() => handleStatusFilterChange(status)}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}

                {hasActiveFilters && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={clearAllFilters}
                      className="text-red-600"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear all filters
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" className="gap-2">
              <Icons.Columns2 className="h-4 w-4" />
              Column
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-[#0CC8A8] hover:bg-[#0cbebe] cursor-pointer"
              onClick={() => navigate("/scans/new")}
            >
              <Plus /> New Scan
            </Button>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Scan Name</TableHead>
                    <TableHead className="w-20">Type</TableHead>
                    <TableHead className="w-24">Status</TableHead>
                    <TableHead className="w-28">Progress</TableHead>
                    <TableHead className="w-40 text-center">
                      Vulnerability
                    </TableHead>
                    <TableHead className="w-24 text-right">Last Scan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredScans.length > 0 ? (
                    filteredScans.map((scan) => (
                      <TableRow
                        key={scan.id}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => navigate(`/scans/${scan.id}`)}
                      >
                        <TableCell className="font-medium">
                          {scan.name}
                        </TableCell>
                        <TableCell>{scan.type}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getStatusColor(scan.status)}
                          >
                            {scan.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 w-full">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                              <div
                                className="bg-[#0CC8A8] h-2 rounded-full"
                                style={{ width: `${scan.progress}%` }}
                              />
                            </div>
                            <span className="text-xs font-semibold w-8">
                              {scan.progress}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center gap-1">
                            {scan.vulnerabilities.critical > 0 && (
                              <Badge className="bg-red-500 text-white h-6 w-6 p-0 flex items-center rounded-sm justify-center">
                                {scan.vulnerabilities.critical}
                              </Badge>
                            )}
                            {scan.vulnerabilities.high > 0 && (
                              <Badge className="bg-orange-500 text-white h-6 w-6 p-0 flex items-center rounded-sm justify-center">
                                {scan.vulnerabilities.high}
                              </Badge>
                            )}
                            {scan.vulnerabilities.medium > 0 && (
                              <Badge className="bg-yellow-500 text-white h-6 w-6 p-0 flex items-center rounded-sm justify-center">
                                {scan.vulnerabilities.medium}
                              </Badge>
                            )}
                            {scan.vulnerabilities.low > 0 && (
                              <Badge className="bg-green-500 text-white h-6 w-6 p-0 flex items-center rounded-sm justify-center">
                                {scan.vulnerabilities.low}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-right text-muted-foreground">
                          {scan.lastScan}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan="6"
                        className="text-center py-8 text-muted-foreground"
                      >
                        No scans found matching your search
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
