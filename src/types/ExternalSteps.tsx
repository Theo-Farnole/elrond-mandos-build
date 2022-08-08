import React from "react";
import IStep from "./IStep";
import { Form } from "react-bootstrap";

export default class ExternalStep implements IStep {

    constructor(
        public path: string
    ) { }

    getForm(onChange: () => void): JSX.Element | JSX.Element[] {
        return <StepForm step={this} onChange={onChange} />
    }

    getName() {
        return "External Steps";
    }

    toJson(): any {
        return {
            "step": "externalSteps",
            "path": this.path
        };
    }

}

interface Props {
    step: ExternalStep;
    onChange: () => void;
}

const StepForm = ({ step, onChange }: Props) => {

    return <>
        <Form.Group>
            <Form.Label>
                Path
            </Form.Label>
            <Form.Control type="text" value={step.path} onChange={(e) => { step.path = e.target.value; onChange() }} />
        </Form.Group>
    </>;
}