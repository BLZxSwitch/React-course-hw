import { Division } from "./division";
import { LoggerService } from "../services/logger.service";

jest.mock("../services/logger.service");

describe("Тесты функции деления", () => {
    test("Должны разделить два числа", () => {
        const a = 10;
        const b = 2;

        const result = Division(a, b);

        expect(result).toBe(5);
    });

    test("При делении на 0 должны залогировать ошибку и выйти", () => {
        const processMock = jest.spyOn(global.process, "exit").mockImplementation();

        const a = 10;
        const b = 0;

        const result = Division(a, b);

        expect(LoggerService.prototype.error).toHaveBeenCalledWith({ message: "Деление на ноль." });
        expect(processMock).toHaveBeenCalledWith(1);
        expect(result).toBeUndefined();
    });
})