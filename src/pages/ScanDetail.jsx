import React from "react";
import { ChevronDown, ChevronUp, Activity } from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  activeScan,
  consoleLogs,
  verificationLoops,
  findings,
  statusBar,
} from "@/data/mockData";
import { getSeverityColor } from "@/lib/utils";
import * as Icons from "lucide-react";
import toast from "react-hot-toast";

export default function ScanDetail() {
  const [expandedPanel, setExpandedPanel] = React.useState("console");

  return (
    <Layout
      title="Scan"
      breadcrumbs={["Scan", "Private Assets", "New Scan"]}
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
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="flex items-center justify-center lg:justify-start border-r-2 w-fit pr-2.5">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-black rounded-full  flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-[#0CC8A8]">
                      {activeScan.progress}%
                    </span>
                    <span className="text-sm text-white">In Progress</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex items-center justify-center">
                <div className="flex items-center gap-2 md:gap-4 w-full flex-wrap justify-center md:justify-between">
                  {activeScan.steps.map(({ label, icon }, index) => {
                    const Icon = Icons[icon] || Icons.Circle;
                    return (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-2 md:gap-4"
                      >
                        <div
                          className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg font-semibold text-sm relative ${
                            index === activeScan.currentStep
                              ? "bg-[#0CC8A8] text-white"
                              : index < activeScan.currentStep
                                ? "bg-green-500 text-white"
                                : "bg-muted text-muted-foreground"
                          }
                        `}
                        >
                          {index < activeScan.currentStep ? "✓" : <Icon />}
                          {index < activeScan.steps.length - 1 && (
                            <div className="absolute left-full top-[50%] hidden md:block w-36 h-1 bg-muted rounded-full" />
                          )}
                        </div>
                        <div className="hidden md:block">
                          <p className="text-xs md:text-sm font-medium">
                            {label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Scan Type</p>
                <p className="font-semibold">{activeScan.type}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Targets</p>
                <p className="font-semibold">{activeScan.targets}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Started At</p>
                <p className="font-semibold text-sm">{activeScan.startedAt}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  Credentials
                </p>
                <p className="font-semibold">{activeScan.credentials}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Files</p>
                <p className="font-semibold">{activeScan.files}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Checklists</p>
                <p className="font-semibold text-[#0CC8A8]">
                  {activeScan.checklists}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="flex flex-col h-full">
              <CardHeader className="border-b border-border pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    <CardTitle className="text-base">
                      Live Scan Console
                    </CardTitle>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    Running...
                  </span>
                </div>
              </CardHeader>

              <Tabs defaultValue="activity" className="flex flex-col flex-1">
                <TabsList className="border-b border-border rounded-none m-0 w-full bg-transparent">
                  <TabsTrigger value="activity" className="rounded-none">
                    Activity Log
                  </TabsTrigger>
                  <TabsTrigger value="verification" className="rounded-none">
                    Verification Loops
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="activity"
                  className="flex-1 overflow-hidden"
                >
                  <CardContent className="p-0 h-full">
                    <div className="terminal-log max-h-96 overflow-y-auto font-mono text-xs space-y-2 p-4">
                      {consoleLogs.map((log) => (
                        <div
                          key={log.id}
                          className="whitespace-pre-wrap wrap-break-word"
                        >
                          <span className="timestamp">{log.timestamp}</span>
                          {(() => {
                            let result = [];
                            let lastIndex = 0;

                            // Sort highlights by position in the message
                            const sortedHighlights = [
                              ...(log.highlights || []),
                            ].sort(
                              (a, b) =>
                                log.message.indexOf(a.text) -
                                log.message.indexOf(b.text),
                            );

                            sortedHighlights.forEach((highlight, index) => {
                              const highlightIndex = log.message.indexOf(
                                highlight.text,
                              );

                              // Add text before highlight
                              if (highlightIndex > lastIndex) {
                                const beforeText = log.message.substring(
                                  lastIndex,
                                  highlightIndex,
                                );
                                result.push(
                                  <span key={`before-${index}`}>
                                    {beforeText}
                                  </span>,
                                );
                              }

                              // Add highlighted text
                              result.push(
                                <span
                                  key={`highlight-${index}`}
                                  className={highlight.type}
                                >
                                  {highlight.text}
                                </span>,
                              );

                              lastIndex =
                                highlightIndex + highlight.text.length;
                            });

                            // Add remaining text
                            if (lastIndex < log.message.length) {
                              result.push(
                                <span key="remaining">
                                  {log.message.substring(lastIndex)}
                                </span>,
                              );
                            }

                            return result;
                          })()}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </TabsContent>

                <TabsContent
                  value="verification"
                  className="flex-1 overflow-hidden"
                >
                  <CardContent className="p-0 h-full">
                    <div className="max-h-96 overflow-y-auto space-y-2 p-4">
                      {verificationLoops.map((loop) => (
                        <div
                          key={loop.id}
                          className="flex gap-3 p-2 rounded hover:bg-muted/50"
                        >
                          <span className="text-xs text-muted-foreground shrink-0">
                            {loop.timestamp}
                          </span>
                          <div className="flex-1 text-sm">
                            <p>{loop.message}</p>
                          </div>
                          <span
                            className={`shrink-0 text-xs font-semibold ${
                              loop.status === "success"
                                ? "text-green-600 dark:text-green-400"
                                : loop.status === "warning"
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {loop.status === "success"
                              ? "✓"
                              : loop.status === "warning"
                                ? "⚠"
                                : "✕"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <div>
            <Card className="flex flex-col h-full">
              <CardHeader className="border-b border-border pb-3">
                <CardTitle className="text-base">Finding Log</CardTitle>
              </CardHeader>

              <CardContent className="p-0 flex-1 overflow-hidden flex flex-col">
                <div className="max-h-96 overflow-y-auto space-y-3 p-4">
                  {findings.map((finding) => (
                    <div
                      key={finding.id}
                      className="border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge
                          className={getSeverityColor(finding.severity)}
                          variant="outline"
                        >
                          {finding.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {finding.timestamp}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                        {finding.title}
                      </h4>
                      <p className="text-xs text-cyan-500 font-mono mb-1">
                        {finding.endpoint}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {finding.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-muted-foreground">Sub-Agents:</span>
                  <span className="font-semibold ml-1">
                    {statusBar.subAgents}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    Parallel Execution:
                  </span>
                  <span className="font-semibold ml-1">
                    {statusBar.parallelExecutions}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Operations:</span>
                  <span className="font-semibold ml-1">
                    {statusBar.operations}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Vulnerabilities:</span>
                <div className="flex gap-1">
                  <Badge className="bg-red-500 text-white h-6 w-6 p-0 flex items-center justify-center text-xs">
                    {statusBar.vulnerabilities.critical}
                  </Badge>
                  <Badge className="bg-orange-500 text-white h-6 w-6 p-0 flex items-center justify-center text-xs">
                    {statusBar.vulnerabilities.high}
                  </Badge>
                  <Badge className="bg-yellow-500 text-white h-6 w-6 p-0 flex items-center justify-center text-xs">
                    {statusBar.vulnerabilities.medium}
                  </Badge>
                  <Badge className="bg-green-500 text-white h-6 w-6 p-0 flex items-center justify-center text-xs">
                    {statusBar.vulnerabilities.low}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
