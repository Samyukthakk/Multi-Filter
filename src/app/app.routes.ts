import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    {path:'',
        redirectTo:'product',
        pathMatch:'full'
    },
    {
        path:'product',
        component:ProductPageComponent
    }
];
