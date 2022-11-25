import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  games= [];
  currentPage = 1;

  constructor(private gamesService: GamesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadGames();
   
  }
  async loadGames() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.gamesService.getTopRatedGames(this.currentPage).subscribe((res) =>{
      loading.dismiss();
      this.games =  [...this.games, ...res.results];
      console.log(res);
    });
  }
}
