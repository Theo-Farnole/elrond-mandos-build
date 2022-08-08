import React from "react";
import { Form } from "react-bootstrap";
import AccountForm from "../../components/AccountForm";
import AccountsForm from "../../components/AccountsForm";
import { Account } from "../Account";
import IStep from "./IStep";

export default class SetState implements IStep {

    private static readonly ID = "setState";

    constructor(
        public comment?: string,
        public accounts?: Account[],
    ) { }


    getName(): string {
        return "Set State";
    }

    getForm(onUpdate: (newStep: IStep) => void): JSX.Element | JSX.Element[] {
        return <>
            <Form.Group>
                <Form.Label>
                    Comment
                </Form.Label>
                <Form.Control
                    type="text"
                    value={this.comment}
                    onChange={(e) => { this.comment = e.target.value; onUpdate(this) }
                    } />
            </Form.Group>

            <AccountsForm accounts={this.accounts ?? []} onUpdate={(newAccounts) => {
                this.accounts = newAccounts;
                onUpdate(this);
            }} />
        </>;
    }

    toJson(): any {
        return {
            step: SetState.ID
        };
    }
}

