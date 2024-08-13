import { Component, Input, OnInit } from '@angular/core';
import { sidebarLinks } from 'src/constants';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { cn} from 'src/lib/utils';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {

  currentPath: string = '';

  constructor(private router: Router) {}

  isActive(route: string) {
    const active = this.currentPath === route || this.currentPath.startsWith(route+"/");
    return active;
    
  }

  getLinkClass(route: string): string {
    return cn('sidebar-link', {
      'bg-bank-gradient': this.isActive(route)
    });
  }

  getIconImgClass(route: string): string {
    return cn({'brightness-[3] invert-0': this.isActive(route)})
  }
  getIconTextClass(route: string): string {
    return cn('sidebar-label', {'!text-white': this.isActive(route)})
  }

  ngOnInit() {
    this.currentPath = this.router.url;
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }

  @Input() User: any = null;
  sidebarLinks = sidebarLinks;
}
