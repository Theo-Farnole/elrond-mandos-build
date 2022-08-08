import React from "react";
import { Button, Form } from "react-bootstrap";
import { Account } from "../types/Account";
import AccountForm from "./AccountForm";
import "./AccountsForm.css"

interface IProps {
    accounts: Account[],
    onUpdate: (accounts: Account[]) => void
}

const AccountsForm = ({ accounts, onUpdate }: IProps) => {
    return <>
        <Form.Group >
            <Form.Label>
                Accounts ({accounts.length})
            </Form.Label>

            <div className="accounts-form">
                {accounts.map((account, index) => {
                    return <AccountForm
                        key={index}
                        account={account}
                        onUpdate={(newAccount) => {
                            accounts[index] = newAccount;
                            onUpdate(accounts);
                        }} />;
                })}

                <Button className="w-100" variant="light" onClick={add}>
                    Add account
                </Button>
            </div>
        </Form.Group>
    </>;

    function add() {
        accounts.push(Account.getDefault());
        onUpdate(accounts);
    }
};

export default AccountsForm;