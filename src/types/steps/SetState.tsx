import React from "react";
import { Form } from "react-bootstrap";
import AccountsForm from "../../components/AccountsForm";
import BlockInfoForm from "../../components/BlockInfoForm";
import NewAddresses from "../../components/NewAddressesForm";
import { Account } from "../Account";
import { BlockInfo } from "../BlockInfo";
import { INewAddress } from "../INewAddress";
import IStep from "./IStep";

export default class SetState implements IStep {

    // TODO: SetState loader
    private static readonly ID = "setState";

    constructor(
        public comment: string = "",
        public accounts: Account[] = [],
        public newAddresses: INewAddress[] = [],
        public previousBlockInfo: BlockInfo = { blockTimestamp: 0, blockNonce: 0, blockRound: 0, blockEpoch: 0 },
        public currentBlockInfo: BlockInfo = { blockTimestamp: 0, blockNonce: 0, blockRound: 0, blockEpoch: 0 },
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

            <AccountsForm accounts={this.accounts} onUpdate={(newAccounts) => {
                this.accounts = newAccounts;
                onUpdate(this);
            }} />

            <BlockInfoForm blockInfo={this.previousBlockInfo} onUpdate={(newBlockInfo) => {
                this.previousBlockInfo = newBlockInfo;
                onUpdate(this);
            }} groupLabelName="Previous Block Info" />

            <BlockInfoForm blockInfo={this.currentBlockInfo} onUpdate={(newBlockInfo) => {
                this.currentBlockInfo = newBlockInfo;
                onUpdate(this);
            }} groupLabelName="Current Block Info" />

            <NewAddresses newAddresses={this.newAddresses} onUpdate={(newAddresses) => {
                this.newAddresses = newAddresses;
                onUpdate(this);
            }} />
        </>;
    }


    toJson(): any {
        let accountsJson = {} as any;

        this.accounts.forEach((account, index) => {
            accountsJson[account.address] = account.toJson();
        });

        let output = {
            step: SetState.ID,
            accounts: accountsJson,
            newAddresses: this.newAddresses,
        } as any;

        if (this.previousBlockInfo.blockTimestamp !== 0 || this.previousBlockInfo.blockNonce !== 0 || this.previousBlockInfo.blockRound !== 0 || this.previousBlockInfo.blockEpoch !== 0) {
            output.previousBlockInfo = this.previousBlockInfo;
        }

        if (this.currentBlockInfo.blockTimestamp !== 0 || this.currentBlockInfo.blockNonce !== 0 || this.currentBlockInfo.blockRound !== 0 || this.currentBlockInfo.blockEpoch !== 0) {
            output.currentBlockInfo = this.currentBlockInfo;
        }

        return output;
    }
}