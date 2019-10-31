import { Injectable } from '@angular/core';
import { TerminalResponse } from '@models/terminal-response';
import { TerminalOperation } from '@models/enums/terminal-operation.enum';

@Injectable()
export class TerminalService {

  constructor() { }

  public parseCommand(args: string[]): TerminalResponse {
    console.log('Parsing command: ' + args);
    if(args === undefined || args.length === 0){
      return TerminalResponse.empty;
    } else {
      let reversed = args.reverse();
      switch(reversed.pop()){
        case 'help':
          return new TerminalResponse(this.printHelp(), TerminalOperation.None);
        case 'cls':
          return new TerminalResponse(new Array<string>(), TerminalOperation.ClearScreen);
        case 'hello':
          return new TerminalResponse(this.printHello(reversed), TerminalOperation.None);
        case 'skills':
          return new TerminalResponse(this.printSkills(reversed), TerminalOperation.None);
        default:
          return new TerminalResponse(['Could not recognize any command! Type "help" for a list of available commands'], TerminalOperation.None);
      }
    }
  }

  private printHelp(): string[] {
    let lines: string[] = [
      "Available commands:",
      '\tcls\t\t| Clears the console window',
      "\thello <name?>\t\t| prints a hello message. (Optional): add your name",
      '\tskills <type?>\t\t| shows info about my skills within <type?> category'
    ]
    return lines;
  }

  private printHello(args: string[]): string[] {
    if(args === undefined || args.length === 0){
      return ["Hello, my name is Raymond and welcome to my portfolio"];
    } else {
      return ["Hello " + args.pop() + ", I'm Raymond and welcome to my portfolio"];
    }
  }

  private printSkills(args: string[]): string[] {
    if(args === undefined || args.length === 0){
      return [
        "Please narrow down your choice. You can use the following categories:",
        "\tprogramming",
        "\tphotography"
      ];
    } else {
      switch(args.pop()){
        case 'programming':
          return [
            'My skills in programming languages include but are not limited to:',
            '\tC#, Python, Java, JavaScript, SQL, TypeScript'
          ];
        case 'photography':
          return [
            'When it comes to photography, I usually shoot the following types of photos:',
            '\t- Portraiture',
            '\t- Culinary photography',
            '\t- Product photography',
            '\t- Event photography',
            '\t- Automotive photography',
            '',
            'My current equipment:',
            '\tCamera body:',
            '\t\tNikon D4 16Mpix full frame',
            '\tLenses:',
            '\t\tNikkor 24-70mm f/2.8 G series',
            '\t\tSigma 70-200mm f/2.8 S series',
            '\tAccessories:',
            '\t\tNikon SB-910 flash',
            '\t\t4-socket CFL softbox, rectangular'
          ];
      }
    }
  }
}
