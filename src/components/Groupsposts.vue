<template>
    <div>







<div class="postCont" >
        <div class="top ">
           <q-item  clickable class="" >
        <div class="imgCont">
            
            <img src="../assets/man1.jpg">
           
        </div>
        

        <q-item-section>
          <q-item-label class="text-weight-bold" >Andrew <q-icon name="navigate_next"  style="color:black; font-size:20px; verticle-align:middle;"/> UI/UX Designing</q-item-label>
          <q-item-label caption lines="1">7 Hours <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs q-mr-sm" style="opacity:0.7;"/> <q-icon name="group" color="black" style="opacity:0.7; font-size:18px;"/></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="more_horiz" color="black" style="opacity:0.8;"/>

        </q-item-section>
       
      </q-item>

        </div>

         <div class="q-px-md q-my-sm">
            How is the design?
        </div>
        <div class="fullimgCont">
<img src="../assets/ui1.png" alt="Image"> 

       </div>
        <div class="bottom">
            <div class="flex1">
                <div class="ffA">
                               <q-avatar size="45px"   text-color="primary" icon="thumb_up"/>
                                <q-avatar size="45px"   text-color="red" icon="favorite"/>
                                 <q-avatar size="45px"   text-color="yellow" icon="emoji_emotions"/>
                                 <span class="likes">89K</span>

                </div>
                <div class="ffB">
                   <span style="opacity:0.8;">67K comments</span>
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
























<div class="postCont" >
        <div class="top ">
           <q-item  clickable class="" >
        <div class="imgCont">
            
            <img src="../assets/jhon.jpg">
           
        </div>
        

        <q-item-section>
          <q-item-label class="text-weight-bold"><span style="opacity:0.9;">Jhon Doe <span style="font-weight:300;">asked a question <q-icon name="help" class="q-ml-xs" size="18px;" style="color:#F35369;"/> in</span> Daily Dev</span></q-item-label>
          <q-item-label caption lines="1">7 Hours <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs q-mr-sm" style="opacity:0.7;"/> <q-icon name="group" color="black" style="opacity:0.7; font-size:18px;"/></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="more_horiz" color="black" style="opacity:0.8;"/>

        </q-item-section>
       
      </q-item>

        </div>

        
        <div class="fullimgCont q-px-md" style="font-size:30px; font-weight:bold; color:white; text-align:center; background-color:#F35369; height:auto; padding-top:80px; padding-bottom:80px; display:flex; align-items:center; justify-content:center;">
          Can someone explain the structure of a MIME multipart message when used to transfer different content type parts. Provide a simple example.
        </div>
        <div class="bottom">
            <div class="flex1">
                <div class="ffA">
                               <q-avatar size="45px"   text-color="primary" icon="thumb_up"/>
                                <q-avatar size="45px"   text-color="red" icon="favorite"/>
                                 <q-avatar size="45px"   text-color="yellow" icon="emoji_emotions"/>
                                 <span class="likes">45k</span>

                </div>
                <div class="ffB">
                   <span style="opacity:0.8;">7K answers</span>
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


















    </div>
</template>

<script>
export default {
   name: 'Groupsposts',

}
</script>

<style scoped>
.imgCont{
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
.imgCont img{
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
    gap: 0px;
    
}

}
</style>