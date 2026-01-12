export function getLastOneYearRange() {
  const to = new Date()
  const from = new Date()
  from.setFullYear(to.getFullYear() - 1)
  return { from, to }
}