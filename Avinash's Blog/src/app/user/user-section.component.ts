import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user';
import { blog } from '../blog';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  blogs:blog[];
  users:user[];
  userBlogs:blog[];
  bloguserID:user[];

  constructor(private request:BlogserviceService, private router:Router) { }

  ngOnInit() {
    this.request.loadBlogs()
        .subscribe((blog:blog[]) => {
          this.blogs=blog;
        })
    this.request.loadUsers()
        .subscribe((user:user[])=>{
          this.users=user;
        })
  }

  getUserBlogs(name:string){
    name=name.toLowerCase();
    this.bloguserID=this.users.filter((tuser:user)=>tuser.userName.toLowerCase()===name);
    let tempUserId=this.bloguserID[0].userID;
    this.userBlogs=this.blogs.filter((blog:blog)=>blog.blogUserID==tempUserId);
  }

  deleteSelectedBlog(id:number){
    this.request.deleteBlog(id)
        .subscribe();
  }

  editBlog(id:number){
    this.router.navigate(["/edit",{id:id}]);
  }
}
