import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoaderService } from './services/loader/loader.service';
import { appState, AppState } from './Store/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ELITE-CODERS-FE';

  constructor(public store:Store<AppState>,public loaderService:LoaderService){
    this.loaderService.showLoader();
  }
}


