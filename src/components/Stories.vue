<template>
<q-list class="cds">


<q-item v-ripple clickable class="story-item item ccc uploaded" @click="mystory = true">
   <div class="full uploaded-suc">
     <div class="rounded sulaiman"></div>
<img v-if="url" :src="url" />
<div class="content content-uploaded"><b>Your Story</b></div>
   </div>
   
</q-item>


  <q-item v-ripple clickable class="story-item item ccc none-uploaded" >
    <div class="create"></div>
    <div class="plusSec">
     <div class="plus"><q-avatar size="35px"  color="primary" text-color="white" icon="add" v-ripple /></div>              

        <span class="text-dark text-weight-bold">Create<br>Story</span>
    </div>

  <input  type="file" name="myImage" class="uploadStory" ref="fileuploadall" accept="image/*" id="uploadBox" @change="onFileChange"/>
  
 
</q-item>


<q-item v-ripple clickable class="story-item item ccc" @click="elon = true">
   <div class="full eloncon">
<div class="rounded elon"></div>
<div class="content"><b>Elon Musk</b></div>
   </div>
</q-item>


<q-item v-ripple clickable class="story-item item ccc" @click="larry = true">
   <div class="full larrycon">
<div class="rounded larry"></div>
<div class="content"><b>Larry Page</b></div>
   </div>
</q-item>




<q-item v-ripple clickable class="story-item item ccc" @click="bill = true">
   <div class="full billcon">
<div class="rounded bill"></div>
<div class="content"><b>Bill Gates</b></div>
   </div>
</q-item>






<q-item v-ripple clickable class="story-item item ccc wewe" @click="warren = true">
   <div class="full warrencon">
<div class="rounded warren"></div>
<div class="content"><b>Warren Buffet</b></div>
   </div>
</q-item>



<!-- forword icon -->


<!-- <q-item clickable v-ripple class="arrow">
   <q-avatar size="45px"  color="white" text-color="black" icon="arrow_forward_ios" v-ripple/>
</q-item>
 -->






<!-- Modals -->

<q-dialog
      v-model="elon"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/elonP.jpg">
           <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>



    
<q-dialog
      v-model="larry"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/larrys.jpg">
            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>




    
<q-dialog
      v-model="bill"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/bills.jpg">
            <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>

     </div>
    </q-dialog>



       
<q-dialog
      v-model="warren"
      full-height
      
    >
     <div class="main-story-cont">
      <img src="../assets/warrens.jpg">
      <q-icon name="close" class="close bg-secondary" color="black" size="28px" v-close-popup/>
     </div>
    </q-dialog>




 
<q-dialog
      v-model="mystory"
      full-height
      id="storyDialog"
       
      
    >
     <div class="main-story-cont mystorycont">
      <img v-if="url" :src="url" />
      <q-icon name="close" class="close" color="white" size="30px" v-close-popup/>
<div class="changedStory-cont">
  <input  type="file" name="myImage" id="changedStory" accept="image/*" @change="onFileChange"/>
<div class="changeStoryImage"><span>Change Story</span></div>
</div>




<div class="delete-cont">
<div class="deleteStory-cont" @click="newdete" ><span>Delete Story</span></div>
</div>



     </div>

    </q-dialog>




<!-- modals ends -->

</q-list>




</template>

<script>


export default{
  name: 'Stories',
  data () {
    return {
      elon: false,
      larry: false,
      bill: false,
      warren: false,
      mystory: false,
      url: null,
      


    }
  },
  created() {
        this.$root.$refs.story = this;
        
    },
   methods: {
   foo: function() {
               
         document.getElementById('uploadBox').click();
             
        },
     
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      const uploaded= document.querySelector(".uploaded");
      uploaded.className += " showNoneS";


      const noneuploaded = document.querySelector(".none-uploaded");
      noneuploaded.className += " hideNoneS";

    

    },

    newdete(){
      const uploaded= document.querySelector(".uploaded");

     uploaded.classList.remove('showNoneS')

      const noneuploaded = document.querySelector(".none-uploaded");

     noneuploaded.classList.remove('hideNoneS')






this.mystory = false
     



    }

  },




}
</script>


<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cds{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  position: relative;
}

.uploaded{
  display: none !important;
}
.arrow{
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  border-radius: 50%;
}


  .ccc{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
   .story-item {
     
    
    padding: 0;
    height: 200px;
    /* max-width: 230px; */
      border-radius: 15px;
     
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      color: white;
    position:relative;
    font-size:13px;	
  }  
  .story-item:before {
     content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: black;
      opacity: .2;
      border-radius: 15px;
    } 
   .story-item span {
    position:absolute;bottom:0;
    padding:10px 5px; 
    font-family: sans-serif;
  }
  .story .owl-stage {
      right: 15px;
  }
  
  .rounded {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width:32px;
    height:32px;
    margin:5px;
    position:absolute;
    border-radius:50%;
   border:2px solid #3877e1;
  }




 

  .create{
background-image:url('../assets/avatar.jpg');
height: 60%;
width: 100%;
 background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
 border-radius: 15px;
 border-bottom-right-radius: 0;
 border-bottom-left-radius: 0;

  }

  .plusSec{
      width: 100%;
   height:40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction:column;
      text-align: center;
      border-radius: 15px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      position: relative;
      background-color: rgb(219, 219, 219);
}

.plus{
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid rgb(219, 219, 219);
    border-radius: 50%;
    
}


.full{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 15px;
}

.eloncon{
    background-image:url('../assets/elonP.jpg'); 
  
}


.elon{
      background-image:url('../assets/elon.jpg');
}

.bill{
      background-image:url('../assets/bill.jpg');
  
}
.billcon{
      background-image:url('../assets/bills.jpg');

}


.warren{
      background-image:url('../assets/warren.jpg');
  
}
.warrencon{
      background-image:url('../assets/warrens.jpg');

}




.larry{
      background-image:url('../assets/larry.jpg');
  
}
.larrycon{
      background-image:url('../assets/larrys.jpg');

}


.content{
  position: absolute;
  bottom: 8px;
  left: 13px;
}



@media (max-width:878px){
 .arrow{
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  border-radius: 50%;
}

}





@media (max-width:581px){
.wewe{
   display: none;
}
.cds{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  position: relative;
}
}




@media (max-width:519px){
.wewe{
   display: none;
}
.cds{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  position: relative;
}
}

.main-story-cont{
   overflow: hidden;
   position: relative;
   background-color: white;
}




.main-story-cont img{
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center;
}


.close{
   position: absolute;
   top: 15px;
   right: 15px;
   background-color: rgba(0, 0, 0, 0.658);
   border-radius: 50px;
   cursor: pointer;
   padding: 20px;
  box-shadow: -3px 3px 7px -1px rgba(255,255,255,0.27);
-webkit-box-shadow: -3px 3px 7px -1px rgba(255,255,255,0.27);
-moz-box-shadow: -3px 3px 7px -1px rgba(255,255,255,0.27);
   
}

.changedStory-cont{
 position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
   display: flex;
   align-items: center;
height: 50px;
   justify-content: center;
   color: white;
   font-weight: 500;
   font-size: 17px;
}
#changedStory{
 z-index: 2;
  width: 100%;
  opacity: 0;
cursor: pointer;

}

.changeStoryImage{
  position: absolute;
  top: 0;
  left: 0;
  background-color: #8280ff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
cursor: pointer;
 
}


.delete-cont{
   position: absolute;
  bottom: 51px;
  left: 0;
  width: 100%;
   display: flex;
   align-items: center;
height: 30px;
   justify-content: center;
   color: white;
   font-weight: 500;
   font-size: 17px;
}

.deleteStory-cont{
   position: absolute;
  top: 0;
  left: 0;
  background-color: #ff7d7d;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
cursor: pointer;
}
.none-uploaded{
  position: relative;
}


.uploadStory{
 opacity: 0.0; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;
 border-radius: 15px;
 cursor: pointer;
}


.uploaded-suc{
  position: relative;
  border-radius: 15px;
}

.uploaded-suc img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;

}

.content-uploaded{
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.486) 49.61%);
left: 0;
bottom: 0;
padding-bottom: 8px;
padding-left: 13px;
border-radius: 15px;
border-top-left-radius: 0;
border-top-right-radius: 0;
padding-top: 10px;
width: 100%;
}



.hideNoneS{
display: none;
}

.showNoneS{
  display: block !important;
}


.completelyHide{
  display: none !important;
}



.completelyShow{
  display: block !important;
}



.storyDialogNone{
  display: none !important;
}



.sulaiman{
      background-image:url('../assets/avatar.jpg');

}


.mystorycont img{

  



   width: 100%;
   height: 100%;
   object-fit: contain;
   object-position: center;


}
</style>
