import { Cos } from "./cos";

describe("Тесты функции cos", () => {
    test("Должны вычислить cos", () => {
        const a = 0;

        const result = Cos(a);

        expect(result).toBe(1);
    });
})