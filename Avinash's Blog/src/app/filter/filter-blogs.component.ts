import { Component, OnInit } from '@angular/core';
import { blog } from '../blog';
import { BlogserviceService } from '../blogservice.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-filter-blogs',
  templateUrl: './filter-blogs.component.html',
  styleUrls: ['./filter-blogs.component.css']
})
export class FilterBlogsComponent implements OnInit {

  blogs:blog[];
  filteredBlogs:blog[];

  constructor(private blogServiceRequest:BlogserviceService) { }

  ngOnInit() {
    this.blogServiceRequest.loadBlogs()
        .subscribe((blog) => {
          this.blogs=blog;
        })
  }

  getFilteredBlogs(filterBy:string,categoryText:string){
    if(filterBy==="category"){
      var blogcategory=categoryText;
      this.filteredBlogs=this.blogs.filter((fblog:blog)=>fblog.blogCategory===blogcategory);
  }
  else if(filterBy==="title"){
    var blogtitle=categoryText.toLowerCase();
    this.filteredBlogs=this.blogs.filter((tempFilteredBlog:blog)=>tempFilteredBlog.blogTitle.toLowerCase().includes(blogtitle));
  }
}

startFilter(categoryText:string){
  var blogtitle=categoryText.toLowerCase();
  this.filteredBlogs=this.blogs.filter((tempFilteredBlog:blog)=>tempFilteredBlog.blogTitle.toLowerCase().includes(blogtitle));
}
}
