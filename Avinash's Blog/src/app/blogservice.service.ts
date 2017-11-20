import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { blog } from './blog';
import 'rxjs/add/operator/map';

const BASE_URL='http://localhost:3000/blogs';
const BASE_URL_USERS='http://localhost:4000/users';

const header= {headers:new Headers({'Content-Type':'application/json'})};

@Injectable()
export class BlogserviceService {

  constructor(private http:Http) { }

  loadBlogs(){
    return this.http.get(BASE_URL)
               .map(res => res.json());
  }

  loadUsers(){
    return this.http.get(BASE_URL_USERS)
               .map(res=>res.json());
  }

  getBlogById(id){
    return (this.http.get(BASE_URL+'/'+id))
                .map(res => res.json())
  }

  postBlog(blogPost){
    return this.http.post(BASE_URL,blogPost,header)
               .map(res => res.json());
  }

  editBlog(tempBlog){
    return this.http.put(BASE_URL+'/'+tempBlog.id,tempBlog)
               .map(res => res.json());
  }

  deleteBlog(blogID){
    console.log(BASE_URL+'/'+blogID);
    return this.http.delete(BASE_URL+'/'+blogID)
               .map(res => null);
  }

  getUserById(id){
    return (this.http.get(BASE_URL_USERS+'/'+id))
                .map(res => res.json())
  }
}
