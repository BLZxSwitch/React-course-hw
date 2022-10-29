import { Operator } from "../models/operator";
import { CloseBrace, OpenBrace, Operators } from "../constants";
import { IsNumberValidator } from "../validators/is-number.validator";
import { OperatorType } from "../enums/operator-type";
import { LoggerService } from "../services/logger.service";

/** Процессор нормального режима */
export class NormalModeProcessor {
    constructor(private readonly logger: LoggerService) {
    }

    process (input: string, operator: Operator): number {
        input = input.replace("**", "^2").toLowerCase();

        let firstOpenBraceIndex = input.indexOf(OpenBrace);
        while (firstOpenBraceIndex > -1) {
            const inBracesValue = this.getFirstInBracesValue(input, firstOpenBraceIndex + 1);
            const inBracesResult = this.process(inBracesValue, Operators[0]).toString()
            input = input.replace(OpenBrace + inBracesValue + CloseBrace, inBracesResult);
            firstOpenBraceIndex = input.indexOf(OpenBrace);
        }

        const spinByOperator = input.split(operator.operator);
        let processedData: number[];
        if (operator !== Operators[Operators.length - 1]) {
            const currentOperatorIndex = Operators.indexOf(operator);
            processedData = spinByOperator.map(item => this.process(item, Operators[currentOperatorIndex + 1]));
        } else {
            processedData = spinByOperator.map(item => {
                const validationResult = new IsNumberValidator().validate(item);
                if (validationResult.valid) {
                    return Number(item);
                } else {
                    this.logger.error({ message: validationResult.error })
                    return process.exit(1);
                }
            })
        }

        if (processedData.length === 1) {
            return processedData[0];
        }

        switch (operator.operatorType) {
            case OperatorType.ComputeSides:
                return processedData.reduce((acc, currentValue) => operator.processFn(+acc, +currentValue))
            case OperatorType.ComputeValueRight:
                return operator.processFn(processedData[1], 0);
            case OperatorType.ComputeValueLeft:
                return operator.processFn(processedData[0], 0);
        }
    }

    /** Возвращает значение из скобок */
    private getFirstInBracesValue(input: string, firstOpenBraceIndex: number): string {
        let openBracesCount = 0;
        for (let i = firstOpenBraceIndex; i < input.length; i++) {
            if (input[i] === OpenBrace) {
                openBracesCount++;
                continue;
            }
            if (input[i] === CloseBrace) {
                if (openBracesCount === 0) {
                    return input.substring(firstOpenBraceIndex, i);
                }
                openBracesCount--;
            }
        }
        return input;
    }
}