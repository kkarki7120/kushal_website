export default async function LoadingAdmin() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="animate-spin size-10 rounded-full border-2 border-gray-300 border-t-transparent" />
      <span className="ml-3 text-sm text-gray-500">Loading admin…</span>
    </div>
  );
}
