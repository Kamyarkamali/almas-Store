import SidebarAdmin from "@/components/saidbarAdmin/SaidbarAdmin";

export const metadata = {
  title: "مدیریت",
  description: "بخش مدیریت سایت",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen">
      <SidebarAdmin />
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </section>
  );
}
