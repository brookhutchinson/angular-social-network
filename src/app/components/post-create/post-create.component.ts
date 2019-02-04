import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: [ './post-create.component.css' ]
})
export class PostCreateComponent implements OnInit {
  // properties
  enteredPost: string;
  newPost: string;

  constructor() {}

  ngOnInit() {
    // set properties
    this.enteredPost = '';
    this.newPost = '';
  }

  onAddPost() {
    // update property
    this.newPost = this.enteredPost;
  }
}