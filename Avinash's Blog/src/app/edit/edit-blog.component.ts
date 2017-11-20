import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { blog } from '../blog';
import { BlogserviceService } from '../blogservice.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {


  blogId:number;
  sentBlog:blog;
  entityExists:boolean;
  entityWithSomeErrorExists:boolean;

  constructor(private route:ActivatedRoute, private blogServiceRequest:BlogserviceService, private router:Router) {}

  ngOnInit() {
    this.blogId=(this.route.snapshot.params['id']);

    this.blogServiceRequest.getBlogById(this.blogId)
                .subscribe((blog:blog) => {
                          this.sentBlog=blog;
                  },
                  (err) => {
                    if(err.status==404)
                          this.entityExists=false
                    else if(err.status!=200)
                        this.entityWithSomeErrorExists=true
                    }
                );

}

editBlogPost(newBlogTitle:string, newBlogContent:string, newBlogCategory:string){
  let tempBlog={
    blogTitle:newBlogTitle,
    blogContent:newBlogContent,
    blogCategory:newBlogCategory,
    dateCreated:Date.now(),
    id:this.blogId,
    blogUserID:this.sentBlog.blogUserID,
    blogRating:Math.floor(Math.random() * 10) + 1,
    blogUserName:this.sentBlog.blogUserName
  }
  this.blogServiceRequest.editBlog(tempBlog)
      .subscribe()
  this.router.navigate(["/fav"]);
}

goBack(){
  this.router.navigate(["/home"]);
}
}
