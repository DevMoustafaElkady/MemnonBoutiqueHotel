import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singe-post',
  templateUrl: './singe-post.component.html',
  styleUrls: ['./singe-post.component.scss']
})
export class SingePostComponent implements OnInit {


posts: {
    id: string ;
    title: string;
    date: string;
    auther: string;
    imgSrc: string;
    content: string;
  } | undefined;


  id: string | undefined | null;
  title: string | undefined | null;
  date: string | undefined | null;
  auther: string | undefined | null;
  imgSrc: string | undefined | null;
  content: string | undefined | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
    this.date = this.route.snapshot.paramMap.get('date');
    this.auther = this.route.snapshot.paramMap.get('auther');
    this.imgSrc = this.route.snapshot.paramMap.get('imgSrc');
    this.content = this.route.snapshot.paramMap.get('content');
  }

}

