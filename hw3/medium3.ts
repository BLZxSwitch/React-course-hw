const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): ("initial" | "inWork" | "buyingSupplies" | "producing" | "fullfilled")[] =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
