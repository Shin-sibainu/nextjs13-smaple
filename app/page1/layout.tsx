export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>My Dashboard</h3>
      {children}
    </div>
  );
}
