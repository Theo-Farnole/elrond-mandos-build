import React from "react";
import { Form } from "react-bootstrap";
import { Account } from "../types/Account";

interface IProps {
    account: Account,
    onUpdate: (account: Account) => void
}

const AccountForm = ({ account, onUpdate }: IProps) => {

    account = Object.assign({}, account);

    return <>
        <Form.Group>
            <Form.Label>
                Address
            </Form.Label>

            <Form.Control
                type="text"
                value={account.address}
                onChange={(e) => { account.address = e.target.value; onUpdate(account) }
                } />
        </Form.Group>

        <Form.Group>
            <Form.Label>
                Nonce
            </Form.Label>

            <Form.Control
                type="text"
                value={account.nonce}
                onChange={(e) => { account.nonce = parseInt(e.target.value); onUpdate(account) }
                } />
        </Form.Group>

        <Form.Group>
            <Form.Label>
                Balance
            </Form.Label>

            <Form.Control
                type="text"
                value={account.balance}
                onChange={(e) => { account.balance = e.target.value; onUpdate(account) }
                } />
        </Form.Group>

        <Form.Group>
            <Form.Label>
                Username
            </Form.Label>

            <Form.Control
                type="text"
                value={account.username}
                onChange={(e) => { account.username = e.target.value; onUpdate(account) }
                } />
        </Form.Group>

        <Form.Group>
            <Form.Label>
                Commment
            </Form.Label>

            <Form.Control
                type="text"
                value={account.comment}
                onChange={(e) => { account.comment = e.target.value; onUpdate(account) }
                } />
        </Form.Group>

        <p>TODO: ESDT</p>
    </>
};

export default AccountForm;