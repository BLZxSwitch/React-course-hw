import { ValidationResult } from "../models/validation-result";
import { CloseBrace, CloseBraceExpectedErrorMessage, OpenBrace, OpenBraceExpectedErrorMessage } from "../constants";
import { Validator } from "../types";

/** Валидатор правильного количества скобок */
export class BracesValidator implements Validator {
    validate(input: string): ValidationResult {
        const openBraceCount = input.split(OpenBrace).length;
        const closeBraceCount = input.split(CloseBrace).length;
        const valid = openBraceCount === closeBraceCount;

        return valid
            ? { valid }
            : {
                valid,
                error: openBraceCount > closeBraceCount
                    ? CloseBraceExpectedErrorMessage
                    : OpenBraceExpectedErrorMessage,
            };
    };
}
