import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  isDark = false;

  constructor(private router: Router) {}

  // 🔥 Load saved theme
  ngOnInit(): void {
    const mode = localStorage.getItem('darkMode');

    if (mode === 'true') {
      this.isDark = true;
      document.body.classList.add('dark-mode');
    }
  }

  // 🌙 Toggle Dark Mode
  toggleDarkMode(): void {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  // 🔴 Navbar scroll shadow effect
  @HostListener('window:scroll', [])
  onScroll(): void {
    const navbar = document.querySelector('.custom-navbar');

    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  // ⚡ Shortcut: ALT + A → Admin Login
  @HostListener('window:keydown', ['$event'])
  handleShortcut(event: KeyboardEvent): void {
    if (event.altKey && event.key.toLowerCase() === 'a') {
      this.router.navigate(['/admin/login']);
    }
  }

}