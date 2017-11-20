import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { blog } from '../blog';
import { user } from '../user';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-new-blog-post',
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.css']
})
export class NewBlogPostComponent implements OnInit {

  blogs:Object[];
  userById:user;
  tempUserId:number;
  tempUserName:String;

  constructor(private request:BlogserviceService, private router:Router) { }

  ngOnInit() {
    this.request.loadBlogs()
        .subscribe((blog:blog[]) => {
          this.blogs=blog;
        })
        this.tempUserId=Math.floor(Math.random() * (5-1+1)) + 1;
        this.request.getUserById(this.tempUserId).subscribe((user:user) => this.userById=user);
  }

  createNewPost(blogTitle:string,blogDesc:string,blogCategory:string){

    this.tempUserName=this.userById.userName;

    let newBlog={
      blogTitle:blogTitle,
      blogContent:blogDesc,
      blogCategory:blogCategory,
      dateCreated:Date.now(),
      blogUserID:this.tempUserId,
      blogRating:Math.floor(Math.random() * 10) + 1,
      blogUserName:this.tempUserName
    }
    this.request.postBlog(newBlog)
        .subscribe(() => {
        this.goHome();
      });

  }

  goHome(){
    this.router.navigate(['./home']);
  }

}
