import { stepsLoader } from "../../const";
import IStep from "./IStep";

export default class Scenario {

    constructor(
        public name: string,
        public comment: string = "",
        public steps: IStep[] = []
    ) { }

    public static load(json: any): Scenario {

        json = JSON.parse(json);

        return new Scenario(json.name, json.comment, this.loadSteps(json["steps"]));
    }

    private static loadSteps(steps: any): IStep[] {

        console.log(steps);

        return Object.values(steps).map((step: any) => {

            const loader = stepsLoader[step.step];

            if (loader) {
                return loader(step);
            }
            else {
                throw new Error("Unknown step type: " + step.step);
            }
        });
    }

    public toJson(): any {
        return {
            name: this.name,
            comment: this.comment,
            steps: this.steps.map(step => step.toJson())
        };
    }
}