import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('input1') input1!: ElementRef<HTMLInputElement>;
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>;
  @ViewChild('input3') input3!: ElementRef<HTMLInputElement>;
  @ViewChild('input4') input4!: ElementRef<HTMLInputElement>;
  @ViewChild('input5') input5!: ElementRef<HTMLInputElement>;

  constructor() {}

  onInput(nextInput: HTMLInputElement): void {
    if (nextInput.value.length > 1) {
      nextInput.value = nextInput.value.slice(0, 1);
    }
    nextInput.focus();
  }

  
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      const activeElement = document.activeElement as HTMLElement;
      const tagName = activeElement.tagName.toLowerCase();
      if (tagName === 'input' && (activeElement as HTMLInputElement).selectionStart === 0) {
        event.preventDefault(); // Prevent the default behavior of backspace
        this.handleBackspace(activeElement as HTMLInputElement);
      }
    }
  }


  handleBackspace(currentInput: HTMLInputElement): void {
    switch (currentInput) {
      case this.input2.nativeElement:
        if (this.input1) {
          this.input1.nativeElement.focus();
          this.input1.nativeElement.value = '';
        }
        break;
      case this.input3.nativeElement:
        if (this.input2) {
          this.input2.nativeElement.focus();
          this.input2.nativeElement.value = '';
        }
        break;
      case this.input4.nativeElement:
        if (this.input3) {
          this.input3.nativeElement.focus();
          this.input3.nativeElement.value = '';
        }
        break;
      case this.input5.nativeElement:
        if (this.input4) {
          this.input4.nativeElement.focus();
          this.input4.nativeElement.value = '';
        }
        break;
      default:
        break;
    }
  }
}