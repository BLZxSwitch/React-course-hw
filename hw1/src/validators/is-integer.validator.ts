import { ValidationResult } from "../models/validation-result";
import { ArgumentNotIntegerErrorMessage } from "../constants";
import { Validator } from "../types";

/** Валидатор целочисленного числа */
export class IsIntegerValidator implements Validator {
    validate(input: number): ValidationResult {
        const valid = Number.isInteger(input);

        return valid
            ? { valid }
            : {
                valid,
                error: ArgumentNotIntegerErrorMessage,
            };
    }
}