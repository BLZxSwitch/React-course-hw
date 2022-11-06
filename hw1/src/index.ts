import {
    ErrorPrefix,
    ErrorSuffix,
    InputValidators,
    Operators,
    ResultMessage,
    SelectModeErrorMessage,
    SelectModeMessage,
    WelcomeMessage
} from "./constants";
import { LoggerService } from "./services/logger.service";
import * as readline from "readline";
import { InputValidator } from "./types";
import { NormalModeProcessor } from "./processors/normal-mode.processor";
import { ReverseModeProcessor } from "./processors/reverse-mode.processor";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(WelcomeMessage, valueToProcess => {
    const logger = new LoggerService();

    InputValidators.forEach(validator => {
        const validationResult = (validator.validate as InputValidator)(valueToProcess);
        if (!validationResult.valid) {
            logger.error({ message: `${ErrorPrefix}"${validationResult.error}"${ErrorSuffix}` });
            return process.exit(-1);
        }
    });

    rl.question(SelectModeMessage, mode => {
        let result = 0;
        switch (mode) {
            case "1":
                result = new NormalModeProcessor(logger).process(valueToProcess, Operators[0]);
                break
            case "2":
                result = new ReverseModeProcessor(logger).process(valueToProcess);
                break
            default:
                logger.error({ message: SelectModeErrorMessage });
                return process.exit(-1);
        }
        logger.log({ message: ResultMessage.replace("{result}", result.toString()) });
        return process.exit();
    });
})