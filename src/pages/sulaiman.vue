<template>
<div>
    <div class="mainparentdiv">
<div class="mainchilddiv">
<div class="coverPhoto" >
    <img src="../assets/sulaimancover.png" alt="Cover Photo" @click="coverphoto = true" class="none-uploaded"  style="cursor:pointer;">
<img v-if="url" :src="url" class="uploaded" @click="changedcoverphoto = true"  style="cursor:pointer;"/>
    
    
<div class="bottombar">
    <q-item class="bg-secondary editcover" clickable v-ripple >
  <input  type="file" name="myImage" id="changedStory" accept="image/*" @change="onFileChange"/>

        <q-icon name="photo_camera" size="20px" class="q-mr-sm"/>
        <span style="font-weight:500;">Edit Cover Photo</span>
    </q-item>
</div>

<div class="bigCircleAvatar">
    <img src="../assets/avatar.jpg" alt="Profile Photo" @click="profilephoto = true" class="profilenoneuploaded"  style="cursor:pointer;">
           
<img v-if="urlprofile" :src="urlprofile" class="profileuploaded"  @click="changedprofilephoto = true"  style="cursor:pointer;"/>
           
           <q-avatar size="45px"  color="secondary" text-color="black" icon="photo_camera" v-ripple class="changecamera"><input  type="file" name="myImage" id="changedStory" accept="image/*" @change="onFileProfileChange"/> </q-avatar>

</div>


</div>

</div>

<div class="details">
<div class="names">
    <div style="font-weight:700; font-size:33px;  opacity:0.9;">Muhammad Sulaiman</div>
    <div style="font-weight:500; font-size:15px; opacity:0.8;">Front End Developer</div>
    <span class="edit">Edit</span>
</div>



<hr style="opacity:0.7;">


<div class="navigations q-py-md">
<div class="seca">
<q-item clickable v-ripple class="link" active>Posts</q-item>
<q-item clickable v-ripple class="nonlink">About</q-item>
<q-item clickable v-ripple class="nonlink">Friends</q-item>
<q-item clickable v-ripple class="nonlink">Photos</q-item>
<q-item clickable v-ripple class="nonlink" style="display:flex; align-items:center;"><span class="q-mr-xs">More</span> <q-icon name="expand_more" size="20px"/></q-item>
</div>

<div class="bsec">
<q-item clickable v-ripple class="bg-primary" style="display:flex; align-items:center; color:white; font-weight:500;"> <q-icon name="add" size="20px"/> <span class="q-ml-xs">Add To Story</span></q-item>
<q-item clickable v-ripple class="bg-secondary editProfile" style="display:flex; align-items:center; font-weight:500;"> <q-icon name="edit" size="20px"/> <span class="q-ml-xs">Edit Profile</span></q-item>
<q-item clickable v-ripple class="bg-secondary dots" style="display:flex; align-items:center; justify-content:center;"> <q-icon name="more_horiz" size="23px"/></q-item>






</div>
</div>









</div>
    </div>















<div class="maincontentCont">

 <div class="white">
        <div class="top">
            <div class="flex1">
             <q-item >
                    
            <q-avatar size="43px" v-ripple>
          <img src="../assets/avatar.jpg">
          </q-avatar>
          
             </q-item>
              <div class="search bg-secondary">
                  <div class="bg-secondary q-pl-sm" style="width:100%; height:100%; cursor:pointer; display:flex; align-items:center;" @click="medium = true"><span style="opacity:0.7;">What's on your mind, Sulaiman?</span></div>
      </div>
          
            </div>
        </div>
          <q-separator class="q-mt-md q-mb-md "/>

          <div class="flex2">

              <q-item clickable v-ripple>
       <div class="iitemlfex">
           <div class="imgCont"> <img src="../assets/live.png"></div>
           <div class="content">Live Video</div>
       </div>
      </q-item>
         


      
              <q-item clickable v-ripple>
       <div class="iitemlfex">
           <div class="imgCont"> <img src="../assets/photo.png"></div>
           <div class="content">Photo/Video</div>
       </div>
      </q-item>

         
              <q-item clickable v-ripple>
       <div class="iitemlfex">
           <div class="imgCont"> <img src="../assets/event.png"></div>
           <div class="content">Life Event</div>
       </div>
      </q-item>

         



         
         



          </div>



          
    </div>










<q-list>
    




<transition-group
  appear
  enter-active-class="animated fadeInDown"
  
>
 <div class="postCont" v-for="post in newposts" :key="post">
        <div class="top ">
           <q-item  clickable class="" >
        <div class="imgContttt">
            <img src="../assets/avatar.jpg">
           
        </div>
        

        <q-item-section>
          <q-item-label class="text-weight-bold"><span style="opacity:0.9;">Muhammad Sulaiman (You)</span></q-item-label>
          <q-item-label caption lines="1">Just now <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs q-mr-sm" style="opacity:0.7;"/> <q-icon name="public" color="black" style="opacity:0.7;"/></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="more_horiz" color="black" style="opacity:0.8;"/>

        </q-item-section>
       
      </q-item>

        </div>
        <div class="fullimgCont q-pl-md q-py-md text-weight-medium" style="font-size:23px; opacity:0.8;">
          <p class="q-pr-sm" style=" word-break: break-word;
   white-space: pre-wrap;
   -moz-white-space: pre-wrap;   "> {{ post.content }} </p>
        </div>
        <div class="bottom">
            <div class="flex1">
                <div class="ffA">
                               <q-avatar size="45px"   text-color="primary" icon="thumb_up"/>
                                <q-avatar size="45px"   text-color="red" icon="favorite"/>
                                 <q-avatar size="45px"   text-color="yellow" icon="emoji_emotions"/>
                                 <span class="likes">0</span>

                </div>
                <div class="ffB">
                   <span style="opacity:0.8;" class=" q-mr-md">0 comments</span>
                </div>
            </div>
        </div>
      
       <q-separator class="q-mx-md"/>
      <div class="interaction">
<q-item clickable v-ripple>
       <div class="iitemlfex">
           <q-avatar icon="thumb_up_off_alt" size="50px" style="opacity:0.8;"/> 
           <div class="content text-weight-bold" style="opacity:0.7;">Like</div>
       </div>
      </q-item>

      <q-item clickable v-ripple>
       <div class="iitemlfex">
          <q-avatar icon="chat_bubble_outline" size="50px" style="opacity:0.8;"/>
           <div class="content text-weight-bold" style="opacity:0.7;">Comment</div>
       </div>
      </q-item>

      <q-item clickable v-ripple>
       <div class="iitemlfex">
            <q-avatar icon="share" size="50px" style="opacity:0.8;"/>
           <div class="content text-weight-bold" style="opacity:0.7;">Share</div>
       </div>
      </q-item>


      </div>
    </div>
</transition-group>

</q-list>














    <div class="postCont" style="margin-top:20px;">
        <div class="top ">
           <q-item  clickable class="" >
        <div class="imgContt">
            
            <img src="../assets/avatar.jpg">
           
        </div>
        

        <q-item-section>
          <q-item-label class="text-weight-bold"><span style="opacity:0.9;">Muhammad Sulaiman (You)</span> <span class="q-pl-sm" style="opacity:0.7; font-weight:400;">updated his profile photo</span></q-item-label>
          <q-item-label caption lines="1">2 Hours <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs q-mr-sm" style="opacity:0.7;"/> <q-icon name="public" color="black" style="opacity:0.7;"/></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="more_horiz" color="black" style="opacity:0.8;"/>

        </q-item-section>
       
      </q-item>

        </div>

        
        <div class="fullimgCont"  style="Muhammad Sulaiman Profile Photo">
            <img src="../assets/avatarpost.jpg" alt="Muhamad Sulaiman Post" />
        </div>
        <div class="bottom">
            <div class="flex1">
                <div class="ffA">
                               <q-avatar size="45px"   text-color="primary" icon="thumb_up"/>
                                <q-avatar size="45px"   text-color="red" icon="favorite"/>
                                 <q-avatar size="45px"   text-color="yellow" icon="emoji_emotions"/>
                                 <span class="likes">25k</span>

                </div>
                <div class="ffB q-mr-md q-mt-md">
                   <span style="opacity:0.8;" >12K comments</span>
                </div>
            </div>
        </div>
      
       <q-separator class="q-mx-md"/>
      <div class="interaction">
<q-item clickable v-ripple>
       <div class="iitemlfex">
           <q-avatar icon="thumb_up_off_alt" size="50px" style="opacity:0.8;"/> 
           <div class="content text-weight-bold" style="opacity:0.7;">Like</div>
       </div>
      </q-item>

      <q-item clickable v-ripple>
       <div class="iitemlfex">
          <q-avatar icon="chat_bubble_outline" size="50px" style="opacity:0.8;"/>
           <div class="content text-weight-bold" style="opacity:0.7;">Comment</div>
       </div>
      </q-item>

      <q-item clickable v-ripple>
       <div class="iitemlfex">
            <q-avatar icon="share" size="50px" style="opacity:0.8;"/>
           <div class="content text-weight-bold" style="opacity:0.7;">Share</div>
       </div>
      </q-item>


      </div>
    </div>
    
















    <div class="postCont" style="margin-top:20px;">
        <div class="top ">
           <q-item  clickable class="" >
        <div class="imgContt">
            
            <img src="../assets/avatar.jpg">
           
        </div>
        

        <q-item-section>
          <q-item-label class="text-weight-bold"><span style="opacity:0.9;">Muhammad Sulaiman (You)</span> <span class="q-pl-sm" style="opacity:0.7; font-weight:400;">updated his cover photo</span></q-item-label>
          <q-item-label caption lines="1">2 Hours <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs q-mr-sm" style="opacity:0.7;"/> <q-icon name="public" color="black" style="opacity:0.7;"/></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="more_horiz" color="black" style="opacity:0.8;"/>

        </q-item-section>
       
      </q-item>

        </div>

        
        <div class="fullimgCont"  style="Muhammad Sulaiman Profile Photo">
            <img src="../assets/sulaimancover.png" alt="Muhamad Sulaiman Post" />
        </div>
        <div class="bottom">
            <div class="flex1">
                <div class="ffA">
                               <q-avatar size="45px"   text-color="primary" icon="thumb_up"/>
                                <q-avatar size="45px"   text-color="red" icon="favorite"/>
                                 <q-avatar size="45px"   text-color="yellow" icon="emoji_emotions"/>
                                 <span class="likes">37k</span>

                </div>
                <div class="ffB q-mr-md q-mt-md">
                   <span style="opacity:0.8;" >20K comments</span>
                </div>
            </div>
        </div>
      
       <q-separator class="q-mx-md"/>
      <div class="interaction">
<q-item clickable v-ripple>
       <div class="iitemlfex">
           <q-avatar icon="thumb_up_off_alt" size="50px" style="opacity:0.8;"/> 
           <div class="content text-weight-bold" style="opacity:0.7;">Like</div>
       </div>
      </q-item>

      <q-item clickable v-ripple>
       <div class="iitemlfex">
          <q-avatar icon="chat_bubble_outline" size="50px" style="opacity:0.8;"/>
           <div class="content text-weight-bold" style="opacity:0.7;">Comment</div>
       </div>
      </q-item>

      <q-item clickable v-ripple>
       <div class="iitemlfex">
            <q-avatar icon="share" size="50px" style="opacity:0.8;"/>
           <div class="content text-weight-bold" style="opacity:0.7;">Share</div>
       </div>
      </q-item>


      </div>
    </div>
    














<!-- post modal -->

<q-dialog
      v-model="medium"
    
      
    >
        <div class="maincreatepost bg-white">
           <div class="topbar">Create Post</div>
<div>
       <div class="q-ml-md q-mt-md" style="display:flex; width:100%; height:100%;">
            <div>
                <q-avatar size="43px" v-ripple>
          <img src="../assets/avatar.jpg">
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.7;">Muhammad Sulaiman</span>
                <div  class="bg-secondary public"><q-icon name="public" color="black" style="opacity:0.7;"/> <span class="q-mx-xs">Public</span> <q-icon name="expand_more" color="black" style="opacity:0.7;"/></div>
            </div>
            
       </div>
      

           


<div>
    <textarea @focus="changeheight" type="text" placeholder="What's on your mind, Sulaiman?" class="bg-white textarea q-pl-md q-mt-md" v-model="postmessage"> </textarea> 

</div>


<div style="width:100%;" class="bg-white">
    <q-btn v-ripple unelevated rounded color="primary"  label="Post" class="posssst q-ml-md q-mr-md q-my-md" @click="clickedPostbtn"/>

</div>

    


</div>






      <q-icon name="close" class="close bg-secondary" color="black" size="24px" v-close-popup/>
        </div>
    </q-dialog>



















</div>






    
<q-dialog
      v-model="coverphoto"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/sulaimancover.png">
            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>





  
<q-dialog
      v-model="profilephoto"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/avatar.jpg">
            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>




    
  
<q-dialog
      v-model="changedcoverphoto"
      full-height
      
    >
     <div class="main-story-cont">
      <img v-if="url" :src="url" class="uploaded"/>

            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>




  
<q-dialog
      v-model="changedprofilephoto"
      full-height
      
    >
     <div class="main-story-cont">
      <img v-if="urlprofile" :src="urlprofile"/>

            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>





    </div>
</template>

<script>

export default {
   name: 'sulaiman',





    data(){
        return{
            medium: false,
      coverphoto: false,
      changedcoverphoto: false,
      profilephoto: false,
      url: false,
      urlprofile: false,
      changedprofilephoto: false,


            postmessage: '',

            newposts: [
            
            ]
        }
    },

  

    methods: {


         onFileChange(e) {
               const noneuploaded = document.querySelector(".none-uploaded");
      noneuploaded.className += " hideNoneS";
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
     


    

    

    },
        

 onFileProfileChange(e) {
               const none = document.querySelector(".profilenoneuploaded");
      none.className += " hideNoneS";
      const file = e.target.files[0];
      this.urlprofile = URL.createObjectURL(file);
     


    

    

    },






      
        clickedPostbtn() {
            let newPost = {
                
                content: this.postmessage,
            
           

     

                

            }
             this.newposts.unshift(newPost)
             this.medium = false
             this.postmessage = ""
        },

        changeheight(){

            let div = document.querySelector('.textarea')
            div.style.height = 'auto';
            div.style.height = this.scrollHeight + 'px';
        }

      
    }


}
</script>


<style scoped>

.mainparentdiv{
    width:100%;
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.07);
-webkit-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.07);
-moz-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.07);
}



.mainchilddiv{
    max-width: 950px;
    margin:0 auto;
    width: 100%;
  
}

.details{
    max-width: 870px;
    margin:0 auto;
    width: 100%;
    padding: 0 20px;
}



.maincontentCont{
      max-width: 720px;
    margin:20px auto;
    width: 100%;
    padding: 0 10px;
    
}
.coverPhoto{
    width: 100%;
    height: 320px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;

    

}


.coverPhoto img{
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
     border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}




.bottombar{
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
position: absolute;
bottom: 0;
right: 0;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.486) 49.61%);
width: 100%;
padding: 15px;
display: flex;
align-items: flex-end;
justify-content: flex-end;
padding-top: 30px;
}


.editcover{
padding-top:4px;
padding-bottom:6px;
border-radius:7px; 
display: flex;
align-items: center;
width: 165px;
cursor: pointer;
}


.bigCircleAvatar{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #1877F2;
    position: absolute;
bottom: -30px;
left: 50%;
transform: translateX(-50%);
background-color: white;
}


.bigCircleAvatar img{
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;


}


.changecamera{
    position: absolute;
    bottom: 0;
    right: 0;
}


.names{
    text-align: center;
    margin-top: 40px;
}



.edit{
    color:#1877F2; 
    font-weight:500;
     cursor:pointer; 
     margin:10px 0;
}


.edit:hover{
    text-decoration: underline;
    text-decoration-color: #1877F2; 
}



.link{
    

    opacity: 1;
      text-transform:capitalize; 
    border-radius:5px;

    
    position: relative;
    font-weight: 500;
    font-size: 16px;

    opacity: 0.8;
    padding-bottom: 12px;
    padding-top: 12px;
}


.link::before{
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 3px;
    left:0;
    background-color: #1877F2;
}




.nonlink{
       opacity: 1;
      text-transform:capitalize; 
    border-radius:5px;

  
    
    font-weight: 500;
    font-size: 16px;

    opacity: 0.8;
    padding-bottom: 12px;
    padding-top: 12px;
}




.seca{
    display: flex;
    align-items: center;

}

.bsec{
    display: flex;
    align-items: center;
    gap: 7px;
}


.navigations{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}



















/* create component */







.flex1{
    display: flex;
    align-items: flex-start !important;
    justify-content: space-between;
    padding: 0 !important;
    
}

.flex1 .q-item{
    padding: 0;
    border-radius: 50%;
    margin-right: 10px;
}

.search{
    width: 100%;
}
.top{
   
    width: 100%;
    
}

.white{
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
background-color: white;
    padding: 15px 20px;
     margin-top: 30px;
    border-radius: 10px;
    position: relative;
    
}

.flex2{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
   
}

.iitemlfex{
    display: flex;
    align-items: center;
    
}

.content{
    margin-bottom: 5px;
    margin-left: 15px;
    font-weight: bold;
    opacity: 0.7;

}




@media (max-width:1241px){
  .content{
      margin-left: 7px;
  }

  .flex2{
      gap: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
}




@media (max-width:519px){
.content{
      margin-left: 5px;
  }

  .flex2 .q-item{
      padding: 0 !important;
  }

}



.postbtn{
    border: none;
    border-radius: 50px;
}

.search{
    position: relative;
      overflow: hidden;
    height: auto !important;
height: 50px !important;   
}


.search input{
    width: 100%;
    height: 100%;
}
.flex1{
    overflow: hidden;
    height: auto !important;
   
}

textarea{
    width: 100%;
height: 260px !important;
    border: none !important;
    outline: none !important;
  resize: none;

  
  

  font-size: 23px;
}


::placeholder {
  font-size: 23px;

}



.topbar{
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.233);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 20px;
    opacity: 0.7;
}
.maincreatepost{
    width:100%;
    position: relative;
    overflow: hidden;
    padding: 0;
    height: 100%;
    max-height: 500px !important;
min-height: 500px !important;
}


.close{
   position: absolute;
   top: 13px;
   right: 15px;
   background-color: rgba(0, 0, 0, 0.658);
   border-radius: 50px;
   cursor: pointer;
   padding: 10px;
  box-shadow: -3px 3px 7px -1px rgba(255,255,255,0.27);
-webkit-box-shadow: -3px 3px 7px -1px rgba(255,255,255,0.27);
-moz-box-shadow: -3px 3px 7px -1px rgba(255,255,255,0.27);
   
}

.public{
   
    border-radius: 2px;
    display:flex; 
    align-items:center; 
    justify-content:center;
    padding: 0;
    width: 90px;
    height: 30px;
    border-radius: 5px;
    font-weight: 500;
    opacity: 0.8;
    cursor: pointer;
     margin-top:2px;

}


.posssst{
width:calc(100% - 38px); border-radius:10px; height:40px;


}

























.main-story-cont{
   overflow: hidden;
   position: relative;
   background-color: white;
}




.main-story-cont img{
   width: 100%;
   height: 100%;
   object-fit: contain;
   object-position: center;
}

























.imgContt{
    width: 40px;
    height: 40px;
    border-radius: 50%;
margin-right: 10px;
border:2px solid #3877e1;
padding: 1px;
}
.ggg{
    border: none;
    width: 35px;
    height: 35px;
    
}
.imgContt img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
}
.postCont{
    width: 100%;
     box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
background-color: white;
margin-top: 30px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.fullimgCont{
    width: 100%;

}
.fullimgCont img{
    width: 100%;
    height: 100%;
    object-position: top center;
    object-fit: cover;
}


.top{
    border-radius: 0;
}


.flex1{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.ffA{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.ffA .q-avatar:nth-child(1){
z-index: 2;

}
.ffA .q-avatar:nth-child(2){
    transform: translateX(-30px);
    z-index: 1;
}
.ffA .q-avatar:nth-child(3){
    transform: translateX(-60px);
}

.flex1{
    position: relative;
    padding: 0 15px 0 10px
}

.likes{
    position: absolute;
    left: 85px;
    opacity: 0.8;
}

.iitemlfex{
    display: flex;
    align-items: center;
    padding: 0;
    
}
.interaction{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    
}



@media (max-width:619px){
.interaction{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px !important;
    
}

}
















.hideNoneS{
display: none !important;
}













.imgContttt{
    width: 40px;
    height: 40px;
    border-radius: 50%;
margin-right: 10px;
border:2px solid #3877e1;
padding: 1px;
}
.ggg{
    border: none;
    width: 35px;
    height: 35px;
    
}
.imgContttt img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
}
.postCont{
    width: 100%;
     box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
background-color: white;
margin-top: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.fullimgCont{
    width: 100%;
    

}
.fullimgCont img{
    width: 100%;
    height: 100%;
    object-position: top center;
    object-fit: cover;
}


.top{
    border-radius: 0;
}


.flex1{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.ffA{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.ffA .q-avatar:nth-child(1){
z-index: 2;

}
.ffA .q-avatar:nth-child(2){
    transform: translateX(-30px);
    z-index: 1;
}
.ffA .q-avatar:nth-child(3){
    transform: translateX(-60px);
}

.flex1{
    position: relative;
    padding: 0 15px 0 10px
}

.likes{
    position: absolute;
    left: 85px;
    opacity: 0.8;
}

.iitemlfex{
    display: flex;
    align-items: center;
    padding: 0;
}
.interaction{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    
}



@media (max-width:619px){
.interaction{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px;
    
}

}




















@media (max-width:686px){
   .editcover{
       box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.45);
-webkit-box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.45);
-moz-box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.45);
   }

.bottombar{
    border-top-right-radius: 0;
    border-top-left-radius: 0;
     border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
position: absolute;
top: 0;
left: 0;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 49.61%);
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
height: 100px;
padding:15px;
}
}







@media (max-width:792px){
    .nonlink:nth-child(3){
        display: none;
    }
}




@media (max-width:701px){
    .nonlink:nth-child(2){
        display: none;
    }
}




@media (max-width:617px){
    .nonlink:nth-child(4){
        display: none;
    }
}





@media (max-width:539px){
   .link{
       display: none;
   }
}





@media (max-width:486px){
   .dots{
       display: none !important;
   }
}





@media (max-width:418px){
   .editProfile{
       display: none !important;
   }
}



#changedStory{
 z-index: 2;
  width: 100%;
  opacity: 0;
cursor: pointer;
position: absolute;
top:0;
left: 0;
height: 100%;

}
</style>
