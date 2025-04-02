import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  messages: Message[] = [
    { role: 'ai', text: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?' },
  ];
  input: string = '';

  sendMessage() {
    if (!this.input.trim()) return;

    this.messages.push({ role: 'user', text: this.input });
    const userMessage = this.input;
    this.input = '';

    setTimeout(() => {
      this.messages.push({ role: 'ai', text: `Ceci est une réponse automatique à "${userMessage}".` });
    }, 1000);
  }
}
