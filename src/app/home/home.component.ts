import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs'; 
import { map } from 'rxjs/operators';
import {News} from '../news.model';
import {LoadNews} from '../news.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news$: Observable<News>;
  newsState : Subscription ;
  title: string;
  image: string;
  Type: string;
  year: string;
  imdbId: string;
  loading: boolean;

  constructor(private store: Store<{news: News}>) {
    this.news$ = this.store.select(state => state.news);
  }


  ngOnInit() {
    this.newsState = this.news$.pipe(
      map(x => {
        this.title = x.title;
        this.loading = x.loading;
        this.image = x.image;
        this.Type = x.Type;
        this.year = x.year;
        this.imdbId = x.imdbId;
      })
    ).subscribe();
    
    this.store.dispatch(new LoadNews());
  }

  profile(){
    let date = new Date();
    console.log(date);
    location.href = "profile?user-id=Hemaharshini&date=" + date;
  }
}
