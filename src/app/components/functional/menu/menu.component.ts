import { FavoritesService } from '../../../services/favorites.service';
import { NavService } from '../../../services/nav.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
  selector: 'cl2-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: []
})
export class MenuComponent implements OnInit, OnDestroy {

  public favorites:Array<any>;
  private subscription:Subscription;

  constructor(
    private navService:NavService,
    private favoriteService:FavoritesService,
  ) {}

  ngOnInit() {
    this.getFavorites();
    this.subscription = this.favoriteService.favoritedItem$
      .subscribe(item => {
        this.getFavorites();
      });
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  private getFavorites():void {
    this.favorites = this.favoriteService.getFavorites();
  }

  private setCity(city, state):void {
    this.navService.changeCity(city, state);
  }

  private removeCity(index):void {
    let fave = this.favorites[index];
    this.favoriteService.removeCity(fave.city, fave.state);
  }

}
