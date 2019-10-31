import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { NgTerminal } from "ng-terminal";
import { TerminalService } from "@app/services/terminal/terminal.service";
import { TerminalResponse } from '@models/terminal-response';
import { TerminalOperation } from '@models/enums/terminal-operation.enum';

@Component({
  selector: "app-console",
  templateUrl: "./console.component.html",
  styleUrls: ["./console.component.scss"]
})
export class ConsoleComponent implements AfterViewInit {
  private charBuffer: string[];
  private args: string[];
  private linePrefix: string;

  @ViewChild("terminal", { static: true }) terminal: NgTerminal;

  constructor(private terminalService: TerminalService) {
    this.charBuffer = new Array<string>();
    this.args = new Array<string>();
    this.linePrefix = "C:/> ";
  }

  ngAfterViewInit(): void {
    this.terminal.underlying.setOption("cursorBlink", true);

    this.terminal.write(this.linePrefix);
    this.terminal.keyEventInput.subscribe(e => {
      const ev: KeyboardEvent = e.domEvent;
      const printable: boolean = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        this.args = this.charBuffer.join("").split(" ");
        this.charBuffer = new Array<string>();
        //invoke action
        const response = this.terminalService.parseCommand(this.args);
        this.processResponse(response);
        this.terminal.write("\r\n" + this.linePrefix);
      } else if (ev.keyCode === 8) {
        if (this.terminal.underlying.buffer.cursorX > this.linePrefix.length) {
          this.terminal.write("\b \b");
          this.charBuffer.pop();
        }
      } else if (printable) {
        this.terminal.write(e.key);
        this.charBuffer.push(e.key);
      }
    });
  }

  private processResponse(response: TerminalResponse): void {
    if(response.text.length !== 0){
      this.printResponse(response.text);
    }
    switch(response.command){
      case TerminalOperation.ClearScreen:
        this.terminal.underlying.clear();
        break;
      case TerminalOperation.None:
        break;
    }
  }

  private printResponse(resp: string[]): void {
    resp.forEach((r: string) => {
      this.terminal.write('\r\n' + r);
    })
  }
}
