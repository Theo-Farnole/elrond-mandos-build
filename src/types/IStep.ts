export default interface IStep {
    getName(): string;
    toJson(): any;
    getForm(onUpdate: (newStep: IStep) => void): JSX.Element | JSX.Element[];
}