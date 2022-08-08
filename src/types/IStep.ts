export default interface IStep {
    getName(): string;
    toJson(): any;
    getForm(onChange: () => void): JSX.Element | JSX.Element[];
}