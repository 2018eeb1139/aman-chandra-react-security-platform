import { Layout } from "@/components/Layout";

const Schedule = () => {
  return (
    <Layout
      title="Projects"
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
      <div className="m-2">Schedule</div>
    </Layout>
  );
};

export default Schedule;
