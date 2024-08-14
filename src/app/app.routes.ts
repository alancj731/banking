import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RootComponent } from './layout/root/root.component';
import { MybanksComponent } from './pages/mybanks/mybanks.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { PresigninComponent } from  './components/presignin/presignin.component';   

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'my-banks', component: MybanksComponent },
      { path: 'transaction-history', component: TransactionsComponent },
      { path: 'payment-transfer', component: TransferComponent },
    ],
  },
  { path: 'signin', component: PresigninComponent },
  { path: 'signup', component: PresigninComponent },
  { path: '**', redirectTo: '' }, // Wildcard route for a 404 page
];
