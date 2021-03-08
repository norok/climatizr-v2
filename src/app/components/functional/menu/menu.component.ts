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

  favorites:Array<any> = [];
  menuOpen = false;
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

  setCity(city, state):void {
    this.navService.changeCity(city, state);
  }

  removeCity(index):void {
    const fave = this.favorites[index];
    this.favoriteService.removeCity(fave.city, fave.state);
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

}
