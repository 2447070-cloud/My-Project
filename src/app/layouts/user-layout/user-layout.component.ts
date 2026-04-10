import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

  constructor(private router:Router){}

  @HostListener('document:keydown',['$event'])
  handleShortcut(event:KeyboardEvent){
      console.log(event);
    if(event.ctrlKey && event.altKey && event.key.toLowerCase() ==='a'){
      this.router.navigate(['/admin/login']);
    }
  }

}
