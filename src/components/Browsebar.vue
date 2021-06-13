<template>
     <div class="watchBar bg-white">
<div class="flex">
    <div style="font-size:22px; font-weight:bold; opacity:0.9;">Gaming</div>
    <div>
           <q-avatar size="45px"  color="secondary" text-color="black" icon="settings" v-ripple style="opacity:0.9;"/>


    </div>


</div>









  
 <q-item to="/gaming" v-ripple class="q-mt-md" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="bg-grey ro">
<q-icon  size="24px" class="play">

</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="color:black; opacity:0.9; font-size:15px;">Play Games</q-item-section>
      </q-item>





      
 <q-item to="/gaming/browse" exact v-ripple  class="q-mt-sm bg-info" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="bg-primary ro ">
<q-icon size="24px" class="browse">

</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-primary" style="opacity:0.9; font-size:15px;">Browse</q-item-section>
      </q-item>


<hr style="opacity:0.3; margin:15px 0px;">





 <q-item  v-ripple class="q-mt-md bg-grey" style="cursor:pointer">
      
              <q-item-section class="text-weight-medium text-black" style="opacity:0.9; font-size:15px; display:flex; align-items:center; justify-content:center; flex-direction:row;"><q-icon name="live_tv" size="20px" color="black " class="q-mr-sm q-mb-xs" style="margin:top:-20px;"/><span class="q-mr-xs">Start Streaming</span></q-item-section>
    
      </q-item>





 <q-item  v-ripple class="q-mt-sm bg-grey" style="cursor:pointer">
      
              <q-item-section class="text-weight-medium text-black" style="opacity:0.9; font-size:15px; display:flex; align-items:center; justify-content:center; flex-direction:row;"><q-icon name="emoji_events" size="20px" color="black " class="q-mr-sm q-mb-xs" style="margin:top:-20px;"/><span class="q-mr-xs">Create Tournament Event</span></q-item-section>
    
      </q-item>






<hr style="opacity:0.3; margin:15px 0px;">


<div class="flex" style="padding:0px 3px;">
    <div style="font-size:16px; font-weight:bold; opacity:0.9;">Streamers You Follow</div>
  


</div>









 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%; border: 1px solid silver;"> 
            <img src="../assets/s1.jpg" alt="Icon" style="width:100%;  height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">Nomi</q-item-section>
      </q-item>







 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/s2.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">Panci TV</q-item-section>
      </q-item>






<div class="flex q-my-md" style="padding:0px 3px;">
    <div style="font-size:16px; font-weight:bold; opacity:0.9;">Recently Watched</div>
    <div style="cursor:pointer;" class="text-primary">
See All

    </div>


</div>


 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/s3.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">GK Gaming <br><span style="font-weight:400;">Grand Theft Auto V</span></q-item-section>
      </q-item>





 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/s4.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">Dawri Gaming <br><span style="font-weight:400;">PUBG Mobile</span></q-item-section>
      </q-item>





<hr style="opacity:0.3; margin:15px 0px;">





<div class="flex q-my-md" style="padding:0px 3px;">
    <div style="font-size:16px; font-weight:bold; opacity:0.9;">Suggested</div>
    <div style="cursor:pointer;" class="text-primary">
See All

    </div>


</div>













 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%; border: 1px solid silver;"> 
            <img src="../assets/s6.jpg" alt="Icon" style="width:100%;  height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">The Heart Man <br> <span style="font-weight:400;">Resident Evil Village</span></q-item-section>
      </q-item>





 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;"> 
            <img src="../assets/img9.png" alt="Icon" style="width:100%;  height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">Dogecoin <br> <span style="font-weight:400;">Cryptocurrency</span></q-item-section>
      </q-item>




 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;"> 
            <img src="../assets/group2.jpg" alt="Icon" style="width:100%;  height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-bold" style="opacity:0.9;">Developers <br> <span style="font-weight:400;">Programming and Tech</span></q-item-section>
      </q-item>
























    </div>
</template>
<script>
export default {
    name: 'Browsebar'
}
</script>

<style scoped>

  .watchBar
  {

    z-index: 1;
    
  padding: 15px 10px;
 
   position: fixed;
  
   height: 100vh;
   overflow-y: hidden;
   overflow-x: hidden;
   padding-bottom: 80px;
   width:300px;
box-shadow: 3px 1px 6px 0px rgba(0,0,0,0.04);
-webkit-box-shadow: 3px 1px 6px 0px rgba(0,0,0,0.04);
-moz-box-shadow: 3px 1px 6px 0px rgba(0,0,0,0.04);
border-right: 1px solid rgba(192, 192, 192, 0.377);
  }



.watchBar:hover{
  overflow-y: scroll;
}

.watchBar:hover{
  overflow-y: scroll;
}
  


  .watchBar::-webkit-scrollbar {
    width: 7px;
  }
  .watchBar::-webkit-scrollbar-thumb {
    width: 50px;
    height: 50px;
    background-color: rgb(160, 160, 160);
  }
  .watchBar::-webkit-scrollbar-track {
    background: #fff;
  }



.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.ro{
  width: 40px;
  height: 40px;
}


.ro svg{
  fill: white;
}

.sho{
  width: 40px;
  height: 40px; 

}


.sho img{
margin-left: 2px;

}


.play{
        background-image: url('../assets/icons2.png');
    background-position: 0px -677px;
    background-size: 33px 1162px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
}

.browse{
        background-image: url('../assets/icons2.png');

    background-position: 0px -425px;
    background-size: 33px 1162px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
    filter:  brightness(0) invert(1);

}

</style>