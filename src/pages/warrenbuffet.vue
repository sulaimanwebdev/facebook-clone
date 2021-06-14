<template>
<div>
    <div class="mainparentdiv">
<div class="mainchilddiv">
<div class="coverPhoto" >
    <img src="../assets/warrenSt.jpg" alt="Cover Photo" @click="coverphoto = true" class="none-uploaded" style="cursor:pointer;">
    
  

<div class="bigCircleAvatar">
    <img src="../assets/warren.jpg" alt="Profile Photo" @click="profilephoto = true" class="profilenoneuploaded"  style="cursor:pointer;">
           
           

</div>


</div>

</div>

<div class="details">
<div class="names">
    <div style="font-weight:700; font-size:33px;  opacity:0.9;">Warren Buffet</div>
    <div style="font-weight:500; font-size:15px; opacity:0.8;">Investor</div>
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
<q-item clickable v-ripple class="bg-secondary" style="display:flex; align-items:center; color:black; font-weight:500;"> <q-icon name="people" size="22px"/> <span class="q-ml-xs">Friends</span></q-item>
<q-item clickable v-ripple class="bg-primary editProfile" style="display:flex; align-items:center; color:white; font-weight:500;"> <q-icon  size="20px"><svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg> </q-icon> <span class="q-ml-xs">Message</span></q-item>
<q-item clickable v-ripple class="bg-secondary dots" style="display:flex; align-items:center; justify-content:center;"> <q-icon name="more_horiz" size="23px"/></q-item>






</div>
</div>









</div>
    </div>















<div class="maincontentCont">










 <div class="postCont" >
        <div class="top ">
           <q-item  clickable class="" >
        <div class="imgContt">
            
            <img src="../assets/warren.jpg">
           
        </div>
        

        <q-item-section>
          <q-item-label class="text-weight-bold"><span style="opacity:0.9;">Warren Buffet</span> <q-icon name="check_circle" color="primary" class="q-ml-xs"/></q-item-label>
          <q-item-label caption lines="1">2 Hours <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs q-mr-sm" style="opacity:0.7;"/> <q-icon name="public" color="black" style="opacity:0.7;"/></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="more_horiz" color="black" style="opacity:0.8;"/>

        </q-item-section>
       
      </q-item>

        </div>
        <div class="fullimgCont">
            <img src="../assets/warrenSt.jpg" alt="Warren Buffet's Post">
        </div>
        <div class="bottom">
            <div class="flex1">
                <div class="ffA">
                               <q-avatar size="45px"   text-color="primary" icon="thumb_up"/>
                                <q-avatar size="45px"   text-color="red" icon="favorite"/>
                                 <q-avatar size="45px"   text-color="yellow" icon="emoji_emotions"/>
                                 <span class="likes">10k</span>

                </div>
                <div class="ffB q-mr-md q-mt-sm">
                   <span style="opacity:0.8;">7K comments</span>
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




















</div>






    
<q-dialog
      v-model="coverphoto"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/warrenSt.jpg">
            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>





  
<q-dialog
      v-model="profilephoto"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/warren.jpg">
            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>












    </div>
</template>

<script>

export default {
   name: 'warrenbuffet',





    data(){
        return{
      coverphoto: false,
      profilephoto: false,
     


         
        }
    },

  

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
    object-position: top;
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
