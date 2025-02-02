import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { getCategoryActions } from '@rekurt-workspace/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  imports: [ RouterModule, MainNavComponent, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly store = inject(Store)

  ngOnInit() {
      this.store.dispatch(getCategoryActions())
  }
}
