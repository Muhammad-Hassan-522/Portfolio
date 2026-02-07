import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 class="text-9xl font-bold text-blue-500 mb-4">404</h1>
      <h2 class="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
      <p class="text-gray-400 text-lg mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div class="flex flex-col items-center gap-4">
        <p class="text-pink-400 font-medium">
          Redirecting to home in {{ countdown }} seconds...
        </p>
        
        <a routerLink="/" class="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors duration-300 font-medium">
          Go Home Now
        </a>
      </div>
    </div>
  `,
    styles: []
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
    countdown = 5;
    private intervalId: any;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.intervalId = setInterval(() => {
            this.countdown--;
            if (this.countdown === 0) {
                this.router.navigate(['/']);
            }
        }, 1000);
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
