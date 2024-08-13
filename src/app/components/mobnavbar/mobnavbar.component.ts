import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { sidebarLinks } from 'src/constants';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { cn } from 'src/lib/utils';

@Component({
  selector: 'app-mobnavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobnavbar.component.html',
  styleUrl: './mobnavbar.component.css',
})
export class MobnavbarComponent implements OnInit {
  constructor(private elementRef: ElementRef, private router: Router) {}

  menuVisible = false;
  currentPath: string = '';
  sidebarLinks = sidebarLinks;

  @Input() User: any = null;

  ngOnInit() {
    this.currentPath = this.router.url;
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }

  isActive(route: string) {
    const active =
      this.currentPath === route || this.currentPath.startsWith(route + '/');
    return active;
  }

  getLinkClass(route: string): string {
    return cn('sidebar-link', {
      'bg-bank-gradient': this.isActive(route),
    });
  }

  getIconImgClass(route: string): string {
    return cn({ 'brightness-[3] invert-0': this.isActive(route) });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    if (this.menuVisible) {
      this.elementRef.nativeElement
        .querySelector('#navmenu')
        .classList.remove('invisible');
    } else {
      this.elementRef.nativeElement
        .querySelector('#navmenu')
        .classList.add('invisible');
    }
  }
}
