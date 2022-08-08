import React from "react";
import { Button, Form } from "react-bootstrap";
import { selectablesSteps } from "../const";
import IStep from "../types/steps/IStep";
import "./StepForm.css"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
    step: IStep,
    onUpdate: (step: IStep) => void,
    onDelete: () => void
}

const StepForm = ({ step, onUpdate, onDelete }: IProps) => {
    return <Form className="step-form">
        <Form.Group>
            <Form.Label className="d-flex justify-content-between align-items-center" >
                Step

                <Button variant="danger" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Form.Label>

            <Form.Select onChange={onSelect}>
                {selectablesSteps.map((s) => {
                    return (
                        <option value={s.getName()} key={s.getName()}>{s.getName()}</option>
                    )
                })}
            </Form.Select>

            {step.getForm(onUpdate)}
        </Form.Group>
    </Form>

    function onSelect(e: any) {
        onUpdate(selectablesSteps.find(s => s.getName() === e.target.value)!)
    }
};

export default StepForm;