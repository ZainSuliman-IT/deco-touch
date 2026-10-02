export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 animate-pulse">
      <div className="mb-10 max-w-md space-y-3">
        <div className="h-4 w-24 rounded-full bg-stone-200" />
        <div className="h-8 w-64 rounded-xl bg-stone-200" />
        <div className="h-4 w-full rounded-md bg-stone-200" />
      </div>

      <div className="mb-10 h-36 rounded-2xl border border-stone-200/60 bg-stone-100/50" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/60 bg-white"
          >
            <div className="aspect-4/3 w-full bg-stone-200" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-3/4 rounded-md bg-stone-200" />
              <div className="h-3 w-full rounded-md bg-stone-100" />
              <div className="h-3 w-1/2 rounded-md bg-stone-100" />
              <div className="pt-3 border-t border-stone-100 flex justify-between items-center">
                <div className="h-5 w-16 rounded-md bg-stone-200" />
                <div className="h-8 w-20 rounded-full bg-stone-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}