import React from "react";
import IStep from "./IStep";
import { Form } from "react-bootstrap";

export default class ExternalStep implements IStep {

    constructor(
        public path: string
    ) { }

    getForm(onUpdate: (step: IStep) => void): JSX.Element | JSX.Element[] {

        return <>
            <Form.Group>
                <Form.Label>
                    Path
                </Form.Label>
                <Form.Control type="text" value={this.path} onChange={(e) => { this.path = e.target.value; onUpdate(this) }} />
            </Form.Group>
        </>;
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