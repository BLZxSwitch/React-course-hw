// Задание второго уровня 1
// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = Extract<Order, Initial | InWork>;

type Initial = {
    state: "initial";
    sum: number;
};
type InWork = {
    state: "inWork";
    sum: number;
    workerId: number;
};
type BuyingSupplies = {
    state: "buyingSupplies";
    sum: number;
    workerId: number;
    suppliesSum: number;
};
type Producing = {
    state: "producing";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
};
type Fullfilled = {
    state: "fullfilled";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
    fullfillmentDate: Date;
};
type Order = Initial | InWork | BuyingSupplies | Producing | Fullfilled;

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};
