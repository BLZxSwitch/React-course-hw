// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = Exclude<OrderState, "buyingSupplies" | "producing">;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

const predicate = (x: FIXME | OrderState): x is FIXME => x !== "buyingSupplies" && x !== "producing";

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] => orderStates.filter(predicate);

