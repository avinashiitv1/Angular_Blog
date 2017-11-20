import { Component, OnInit } from '@angular/core';
import { blog } from '../blog';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  blogs:Object[];

  constructor(private blogServiceRequest:BlogserviceService) { }

  ngOnInit() {
    this.blogServiceRequest.loadBlogs()
        .subscribe((blog:blog[]) => {
          this.blogs=blog;
        })
  }

}
