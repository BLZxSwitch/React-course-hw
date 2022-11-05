import { IsIntegerValidator } from "../validators/is-integer.validator";
import { LoggerService } from "../services/logger.service";
import { FactorialByFor, FactorialByRecursion } from "../constants";

/** Логер */
const logger = new LoggerService();

/** Функция вычисления факториала с помощью цикла*/
export const FactorialFor = (a: number): number => {
    if (validate(a, FactorialByRecursion)) {

        let result = 1;

        for (let i = 1; i <= a; i++) {
            result = result * i;
        }

        return result;
    }
    return NaN;
};

/** Функция вычисления факториала с помощью рекурсии */
export const FactorialRec = (a: number): number => {
    if (validate(a, FactorialByRecursion)) {

        if (a === 0) {
            return 1;
        }

        if (a === 1) {
            return a;
        }

        return a * FactorialRec(a - 1);
    }
    return NaN;
}

const validate = (value: number, operator: string): boolean => {
    const isIntegerValidator = new IsIntegerValidator();
    const validationResult = isIntegerValidator.validate(value);
    if (!validationResult.valid) {
        logger.error({
            message: validationResult.error.replace("{operator}", operator)
        });
        process.exit(1);
    }

    return validationResult.valid;
}