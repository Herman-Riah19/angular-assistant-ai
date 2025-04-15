import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <header class="sticky top-0 flex justify-between h-16 z-10 items-center gap-1 border-b backdrop-blur px-4 md:px-6 text-white">
      <div class="flex w-full justify-start gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <h1 class="text-lg font-bold">Isa to Teny</h1>
      </div>

      <!-- <nav class="flex w-full flex-col text-lg font-medium sm:hidden md:flex justify-center md:flex-row md:items-center md:gap-3 md:text-sm lg:gap-4">
        @for(page of pages; track page) {
        <a
          href="{{page.link}}"
          class="text-muted-foreground transition-colors hover:text-foreground"
        >
          {{page.name}}
        </a>
        }
      </nav> -->

      <a
        href="https://github.com/Herman-Riah19"
        class="justify-end flex items-center gap-6 text-lg font-semibold md:text-base w-[8vw]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-lg font-bold">GitHub</span>
      </a>
    </header>
  `,
  standalone: true,
})
export class NavbarComponent {
  pages = [
    {
      name: 'Home',
      link: `/`,
    },
  ];
}
