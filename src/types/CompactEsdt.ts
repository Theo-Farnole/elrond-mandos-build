
export class CompactEsdt {
    constructor(
        public tokenIdentifier: string,
        public balance: number
    ) { }

    toJson(): string {
        throw new Error("Method not implemented.");
    }
}
