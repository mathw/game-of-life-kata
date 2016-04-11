import {bootstrap} from 'angular2/platform/browser';
import {GameComponent} from './components/game'
import {CellsService} from './services/cells.service'
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

bootstrap(
    GameComponent,
    [
        CellsService, 
        ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        HTTP_PROVIDERS
    ]);