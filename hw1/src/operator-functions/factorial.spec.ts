import { factorialFor, factorialRec } from "./factorial";
import { LoggerService } from "../services/logger.service";

jest.mock("../services/logger.service");

describe("Тесты функции вычисления факториала через цикл for", () => {
    test("Должны вычислить факториал положительного числа", () => {
        const a = 3;

        const result = factorialFor(a);

        expect(result).toBe(6);
    });

    test("Должны вычислить факториал 0", () => {
        const a = 0;

        const result = factorialFor(a);

        expect(result).toBe(1);
    });

    test("Должны вычислить факториал 0", () => {
        const a = 0;

        const result = factorialFor(a);

        expect(result).toBe(1);
    });

    test("Должный выдать ошибку если передано вещественное число в FactorialFor", () => {
        const processMock = jest.spyOn(global.process, "exit").mockImplementation();

        const value = 3.2;

        const result = factorialFor(value)

        expect(LoggerService.prototype.error).toHaveBeenCalled();
        expect(processMock).toHaveBeenCalledWith(1);
        expect(result).toBeNaN();
    });

    test("Должны вычислить факториал положительного числа", () => {
        const a = 3;

        const result = factorialRec(a);

        expect(result).toBe(6);
    });

    test("Должны вычислить факториал 0", () => {
        const a = 0;

        const result = factorialRec(a);

        expect(result).toBe(1);
    });

    test("Должны вычислить факториал 0", () => {
        const a = 0;

        const result = factorialRec(a);

        expect(result).toBe(1);
    });

    test("Должный выдать ошибку если передано вещественное число в FactorialRec", () => {
        const processMock = jest.spyOn(global.process, "exit").mockImplementation();

        const value = 3.2;

        const result = factorialRec(value)

        expect(LoggerService.prototype.error).toHaveBeenCalled();
        expect(processMock).toHaveBeenCalledWith(1);
        expect(result).toBeNaN();
    });
})