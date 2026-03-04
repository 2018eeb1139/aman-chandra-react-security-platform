import { Layout } from "@/components/Layout";

const Settings = () => {
  return (
    <Layout
      title="Settings"
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
      <div className="m-2">Settings</div>
    </Layout>
  );
};

export default Settings;
