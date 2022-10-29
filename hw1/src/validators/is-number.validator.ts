import { ValidationResult } from "../models/validation-result";
import { IsNumberValidatorErrorMessage } from "../constants";
import { Validator } from "../types";

/** Валидатор строка является числом */
export class IsNumberValidator implements Validator {
    validate(input: string): ValidationResult {
        const valid = !isNaN(Number(input));

        return valid
            ? { valid }
            : {
                valid,
                error: IsNumberValidatorErrorMessage(input),
            }
    }
}