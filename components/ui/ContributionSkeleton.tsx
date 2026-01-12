export function ContributionSkeleton() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-flow-col auto-cols-max gap-1">
        {Array.from({ length: 53 }).map((_, colIdx) => (
          <div key={colIdx} className="grid grid-rows-7 gap-1">
            {Array.from({ length: 7 }).map((_, rowIdx) => (
              <div
                key={rowIdx}
                className="w-3 h-3 rounded bg-gray-200 dark:bg-[#2a2a2a] animate-pulse"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
