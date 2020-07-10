import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IGame } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('goty').valueChanges()
      .pipe(
        map((data: IGame[]) => data.map(({name, votes}) => ({name, value: votes})))
      )
      .subscribe(res => {
        this.games = res;
      })
  }

}
