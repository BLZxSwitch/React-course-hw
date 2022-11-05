import { LoggerService } from "../services/logger.service";
import { OperatorNotFound, Operators, OperatorsSeparator } from "../constants";
import { IsNumberValidator } from "../validators/is-number.validator";
import { OperatorType } from "../enums/operator-type";

export class ReverseModeProcessor {
    constructor(private readonly logger: LoggerService) {
    }

    process(input: string): number {
        input = input.replace("**", "^2").toLowerCase();

        const stack: number [] = [];
        input.split(OperatorsSeparator).forEach(element => {
            if (new IsNumberValidator().validate(element).valid) {
                stack.push(Number(element));
            } else {
                const operator = Operators.find(item => item.operator === element);
                if (!operator) {
                    this.logger.error({ message: OperatorNotFound(element) });
                    return process.exit(1);
                }

                if (operator.operatorType === OperatorType.ComputeSides) {
                    const secondOperand = stack.pop()!;
                    const firstOperand = stack.pop()!;
                    stack.push(operator.processFn(firstOperand, secondOperand));
                } else {
                    stack.push(operator.processFn(stack.pop()!, 0));
                }
            }

        });

        return stack.pop()!;
    }
}