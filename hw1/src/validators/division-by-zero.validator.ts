import { ValidationResult } from "../models/validation-result";
import { DivideByZeroErrorMessage } from "../constants";
import { Validator } from "../types";

/** Валидатор не нулевого значения */
export class DivisionByZeroValidator implements Validator {
    validate(input: number): ValidationResult {
        const valid = input !== 0;

        return valid
            ? { valid }
            : {
                valid,
                error: DivideByZeroErrorMessage
            };
    }
}