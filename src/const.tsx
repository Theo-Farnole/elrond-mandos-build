import ExternalStep from "./types/ExternalSteps";
import IStep from "./types/IStep";

export const selectablesSteps: IStep[] = [
    new ExternalStep(""),
];

export const stepsLoader: { [key: string]: (json: any) => IStep } = {
    [ExternalStep.ID]: ExternalStep.load,
}

export const defaultStep = selectablesSteps[0];