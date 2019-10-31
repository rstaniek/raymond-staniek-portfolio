import { TerminalOperation } from './enums/terminal-operation.enum';

export class TerminalResponse {
    public text: string[];
    public command: TerminalOperation;

    public constructor(text: string[], command: TerminalOperation) {
        this.text = text;
        this.command = command;
    }

    public static empty: TerminalResponse = new TerminalResponse([''], TerminalOperation.None);
}