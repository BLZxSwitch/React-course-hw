import { Priority } from "../enums/priority";
import { OperatorType } from "../enums/operator-type";

/** Модель оператора */
export interface Operator {
    /** Оператор */
    readonly operator: string;
    /** Приоритет */
    readonly priority: Priority;
    /** Функция вычисления */
    readonly processFn: ((a: number) => number) | ((a: number, b: number) => number) ;
    /** Тип оператора */
    readonly operatorType: OperatorType;
}