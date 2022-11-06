import { NotEmptyValidator } from "./validators/not-empty.validator";
import { Validator } from "./types";
import { BracesValidator } from "./validators/barces.validator";
import { Operator } from "./models/operator";
import { OperatorType } from "./enums/operator-type";
import { Priority } from "./enums/priority";
import { multiply } from "./operator-functions/multiply";
import { addition } from "./operator-functions/addition";
import { division } from "./operator-functions/division";
import { subtraction } from "./operator-functions/subtraction";
import { power } from "./operator-functions/power";
import { sin } from "./operator-functions/sin";
import { cos } from "./operator-functions/cos";
import { tan } from "./operator-functions/tan";
import { factorialFor, factorialRec } from "./operator-functions/factorial";

/** Оператор факториала вычисляемого рекурсией */
export const FactorialByRecursion = "!";
/** Оператор факториала вычисляемого циклом for */
export const FactorialByFor = "!!";

/** Сообщение об ошибке валидатора на пустое значение */
export const NotEmptyValidatorErrorMessage = "Выражение не может бы пустым."
/** Сообщение об ошибке валидатора строки как числа */
export const IsNumberValidatorErrorMessage = (value: string) => `Выражение '${value}' не является числом.`
/** Сообщение об ошибке валидатора на нулевое значение */
export const DivideByZeroErrorMessage = "Деление на ноль."
/** Префикс сообщения об ошибке для вывода в консоль */
export const ErrorPrefix = "Ошибка! => ";
/** Окончание сообщения об ошибке для вывода в консоль */
export const ErrorSuffix = " Исправьте ошибку и попробуйте заново.";
/** Приветственное сообщение */
export const WelcomeMessage = "Пожалуйста, введите выражение для вычисления >";
/** Сообщение для выбора режима */
export const SelectModeMessage = "Введите '1' для 'Обычного режима' или '2' для режима 'Обратная польская запись'>";
/** Ошибка выбора режима */
export const SelectModeErrorMessage = "Ошибка выбора режима!";
/** Сообщение об ошибке об нехватке закрывающей скобки */
export const CloseBraceExpectedErrorMessage = "Нехватает закрывающей скобки.";
/** Сообщение об ошибке об нехватке открывающей скобки */
export const OpenBraceExpectedErrorMessage = "Нехватает открывающей скобки.";
/** Сообщение об ошибке об нехватке открывающей скобки */
export const ArgumentNotIntegerErrorMessage = "Аргумент функции {operator} должен быть целочисленным.";
/** Сообщение о результате */
export const ResultMessage = "Результат: {result}";
/** Сообщение об ошибке поиска оператора */
export const OperatorNotFound = (operator: string) => `Оператор ${operator} не найден!`;
/** Символ открытой скобки */
export const OpenBrace = "(";
/** Символ закрытой скобки */
export const CloseBrace = ")";
/** Разделитель операторов */
export const OperatorsSeparator = " ";

/** Валидаторы входной строки */
export const InputValidators: ReadonlyArray<Validator> = [
    new NotEmptyValidator(),
    new BracesValidator(),
];
/** Массив операторов */
export const Operators: ReadonlyArray<Operator> = [
    {
        operator: "*",
        operatorType: OperatorType.ComputeSides,
        priority: Priority.Second,
        processFn: multiply,
    }, {
        operator: "+",
        operatorType: OperatorType.ComputeSides,
        priority: Priority.Third,
        processFn: addition,
    }, {
        operator: "/",
        operatorType: OperatorType.ComputeSides,
        priority: Priority.Second,
        processFn: division,
    }, {
        operator: "-",
        operatorType: OperatorType.ComputeSides,
        priority: Priority.Third,
        processFn: subtraction,
    }, {
        operator: "^",
        operatorType: OperatorType.ComputeSides,
        priority: Priority.First,
        processFn: power,
    }, {
        operator: "sin",
        operatorType: OperatorType.ComputeValueRight,
        priority: Priority.First,
        processFn: sin,
    }, {
        operator: "cos",
        operatorType: OperatorType.ComputeValueRight,
        priority: Priority.First,
        processFn: cos,
    }, {
        operator: "tan",
        operatorType: OperatorType.ComputeValueRight,
        priority: Priority.First,
        processFn: tan,
    }, {
        operator: FactorialByRecursion,
        operatorType: OperatorType.ComputeValueLeft,
        priority: Priority.First,
        processFn: factorialRec,
    }, {
        operator: FactorialByFor,
        operatorType: OperatorType.ComputeValueLeft,
        priority: Priority.First,
        processFn: factorialFor,
    }
].sort((a, b) => b.priority - a.priority);