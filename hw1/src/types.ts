import { ValidationResult } from "./models/validation-result";

/** Интерфейс валидатора */
export interface Validator {
    validate: ((input: number) => ValidationResult) | InputValidator;
}
/** Результат валидации */
export type InputValidator = (input: string) => ValidationResult;
