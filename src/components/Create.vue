<template>
   <div class="full">
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
           <div class="imgCont"> <img src="../assets/happy.png"></div>
           <div class="content">Feeling/Activity</div>
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
</template>

<script>

export default{
    name: 'Create',

    data(){
        return{
            medium: false,
            postmessage: '',

            newposts: [
            
            ]
        }
    },

     created() {
        this.$root.$refs.post = this;
        
    },

    methods: {
        
          foo: function() {
               
            this.medium = true
             
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
.full{
     width: 100%;
}
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
      margin-left: 0px;
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
