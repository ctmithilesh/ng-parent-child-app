import { Component, Input, OnInit } from '@angular/core';
import { FetchNewsService } from '../services/fetch-news/fetch-news.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {



  parentMessage = 'Hello from parent'
  newsData: string;
  constructor(
    private news: FetchNewsService
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.news.fetchNews().subscribe({
      next: (data) => {
        console.log(data)
        this.newsData = data.articles.filter(article => article.urlToImage !== null)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}
