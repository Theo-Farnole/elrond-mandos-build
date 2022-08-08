import IStep from "./IStep";

export default class Scenario {

    constructor(
        public name: string,
        public comment: string = "",
        public steps: IStep[] = []
    ) { }

    public static load(json: any): Scenario {
        throw new Error("Not implemented");
    }

    public toJson(): any {
        return {
            name: this.name,
            comment: this.comment,
            steps: this.steps.map(step => step.toJson())
        };
    }
}