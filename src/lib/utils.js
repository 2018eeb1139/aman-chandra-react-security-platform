import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getSeverityColor(severity) {
  const colors = {
    Critical: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    High: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    Medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };
  return (
    colors[severity] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
  );
}

export function getStatusColor(status) {
  const colors = {
    Completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Scheduled: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    Failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "In Progress":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  };
  return (
    colors[status] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
  );
}

export function getVulnerabilityBadgeColor(count) {
  if (count >= 20) return "bg-red-500 text-white";
  if (count >= 10) return "bg-orange-500 text-white";
  if (count >= 5) return "bg-yellow-500 text-white";
  return "bg-green-500 text-white";
}

export function getTrendColor(trend) {
  return trend === "up" ? "text-red-500" : "text-green-500";
}

export function formatTrendText(change, trend) {
  const symbol = trend === "up" ? "+" : "";
  const unit = change >= 1 ? "%" : "%";
  return `${symbol}${change}${unit} ${trend === "up" ? "increase" : "decrease"} than yesterday`;
}
