
export let hoursPerDay=8

export function dayRate(ratePerHour){
  return (hoursPerDay*ratePerHour)
}
dayRate();
export function daysInBudget(budget, ratePerHour){
  return Math.floor(((budget/ratePerHour)/8));
}
daysInBudget()
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRate = ratePerHour * 8
  const fullMonths = Math.floor(numDays / 22)
  const remainingDays = numDays % 22

  const monthlyCost = fullMonths * 22 * dayRate
  const discountedMonthlyCost = monthlyCost * (1 - discount)
  const remainingCost = remainingDays * dayRate

  return Math.ceil(discountedMonthlyCost + remainingCost)
}
