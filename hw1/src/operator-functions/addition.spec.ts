import { Addition } from "./addition";

describe("Тесты функции сложения", () => {
    test("Должны получить сумму двух чисел", () => {
        const a = 3;
        const b = 5;

        const result = Addition(a, b);

        expect(result).toBe(8);
    });
})