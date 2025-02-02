import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { animation } from '@angular/animations';
export const appRoutes: Route[] = [
    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: 'category/:categoryName',
        loadComponent: () => 
            import('@rekurt-workspace/product').then((m) => m.ProductComponent),
        data: {
            animation: 'CategoryPage'
        }
    }
];
