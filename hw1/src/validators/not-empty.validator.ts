import { ValidationResult } from "../models/validation-result";
import { NotEmptyValidatorErrorMessage } from "../constants";
import { Validator } from "../types";

/** Валидатор на пустое значение */
export class NotEmptyValidator implements Validator {
    validate(input: string): ValidationResult {
        const valid = !!input;

        return valid
            ? { valid }
            : {
                valid,
                error: NotEmptyValidatorErrorMessage,
            }
    };
}