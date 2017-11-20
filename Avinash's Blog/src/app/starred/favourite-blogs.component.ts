import { Component, OnInit } from '@angular/core';
import { blog } from '../blog';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-favourite-blogs',
  templateUrl: './favourite-blogs.component.html',
  styleUrls: ['./favourite-blogs.component.css']
})
export class FavouriteBlogsComponent implements OnInit {

  blogs:blog[];
  sortedBlogs:blog[];

  constructor(private blogServiceRequest:BlogserviceService) { }

  ngOnInit() {
    this.blogServiceRequest.loadBlogs()
        .subscribe((blog:blog[]) => {
            this.sortedBlogs=blog.sort(function(blogPost1:blog,blogPost2:blog)
                                        {return blogPost2.blogRating-blogPost1.blogRating});
                                      })
}
}
