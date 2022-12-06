export interface AweInterface {
    id:number;
    email: string;
    fullname: string;
    surname: string;
    following:string;
    followers:string;
    posts:string;
    profilepic:string;
    caption:string;
    likes:number;
    image:string;
    message:string;
}

export interface notificationInterface {
 
    message:string;
    image:string;
    post_id:0;
}


export interface followInterface {
 
    message:string;
    friend_id:0,
    status:string
    
}


export interface friendsInterface {
 
    friend_name:string;
    friend_surname:string;
    profilepic:string;
    

    
}


export interface countfriendsInterface {
 
    count:0
  
    

    
}


