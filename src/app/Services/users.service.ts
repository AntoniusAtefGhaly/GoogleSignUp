import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //BaseUrl="http://antoniusatef-001-site1.btempurl.com/api/users"
 // BaseUrl="https://localhost:44316/api/users"
  BaseUrl="/api/users"
 // BaseUrl="https://jsonplaceholder.typicode.com/users";

  constructor(private myclient:HttpClient){ }
    getAllUsers(){
      return this.myclient.get(this.BaseUrl);
    }
    getUserById(id){
      return this.myclient.get(this.BaseUrl+"/"+id);
    }    
    AddUser(user){
      return this.myclient.post(this.BaseUrl,user);
    }
    DeleteUser(id){
      return this.myclient.delete(this.BaseUrl+"/"+id);
    }
}