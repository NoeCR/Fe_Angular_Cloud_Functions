import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { IGame } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  games: IGame[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominated()
      .subscribe( (res: IGame[])=> {
        this.games = res;
      })
  }

  voteGame(game) {
    console.log('voteGame ', game)
    this.gameService.voteGame(game.id)
      .subscribe((res: {ok: boolean, message: string}) => {
        console.log('Response \n', res)
        if (res.ok) {
          Swal.fire({
            title: 'Thanks',
            text: res.message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
        else {
          Swal.fire({
            title: 'Oops!',
            text: res.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
  }
}
