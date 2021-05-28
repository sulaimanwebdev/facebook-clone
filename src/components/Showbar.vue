<template>
    <div class="bg-white watchBar">
<div class="flex">
    <div style="font-size:22px; font-weight:bold; opacity:0.9;">Watch</div>
    <div>
           <q-avatar size="45px"  color="secondary" text-color="black" icon="settings" v-ripple style="opacity:0.9;"/>


    </div>


</div>



      <div class="search bg-secondary q-mt-md"  style="height:40px;">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Facebook" class="bg-secondary">
      </div>






  
 <q-item clickable to="/watch"  v-ripple class="q-mt-md" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="bg-grey ro">
<q-icon  size="24px">
  <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3 activeSVG" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path></svg>

</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-black" style="opacity:0.9; font-size:15px;">Home</q-item-section>
      </q-item>





      
 <q-item to="/watch/shows"  v-ripple class="q-mt-sm bg-info" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="sho" style="background-color:#2ABBA7;">
<q-icon size="24px" >
<img src="../assets/shows.png" alt="Icon" style="filter:  brightness(0) invert(1);"/>
</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9; font-size:15px; color:black;">Shows</q-item-section>
      </q-item>


<hr style="opacity:0.5; margin:15px 0px;">

<div class="flex" style="padding:0px 3px;">
    <div style="font-size:16px; font-weight:bold; opacity:0.9;">Your Watchlist</div>
    <div style="cursor:pointer;" class="text-primary">
Manage

    </div>


</div>

<q-list>
  
 <q-item clickable v-ripple class="q-mt-md " style="cursor:pointer;  width: 100%; padding-left:5px; padding-right:5px;">
       <div>
         <div style="background-color:#50BDE0; margin-right:12px; width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center;">
          
<q-icon name="play_arrow" color="white" size="23px" class="play"/>
</div>
       </div>


        <q-item-section class="text-weight-medium" style="opacity:0.9; font-size:15px;">Latest Videos</q-item-section>
      </q-item>


 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/elon.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Elon Musk <br><span class="dotF"><q-icon size="7px" name="fas fa-circle"></q-icon>9+ new videos</span></q-item-section>
      </q-item>




      

 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/larry.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Larry Page</q-item-section>
      </q-item>






 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/bill.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Bill Gates</q-item-section>
      </q-item>




      

 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/warren.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Warren Buffet</q-item-section>
      </q-item>




      
 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/jeff.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Jeff Bezos</q-item-section>
      </q-item>




       <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/jhon.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Jhon Doe</q-item-section>
      </q-item>


      <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/smith.jpg" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Jhon Smith</q-item-section>
      </q-item>




 <q-item clickable v-ripple style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div style="width:41px; height:41px; border-radius:50%;">
            <img src="../assets/img9.png" alt="Icon" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Dogecoin</q-item-section>
      </q-item>


      

      
</q-list>





    </div>
</template>

<script>
export default {
   name: 'Watchbar'
}
</script>
<style  scoped>


  .watchBar
  {
    
  padding: 15px 10px;
 
   position: fixed;
  
   height: 100vh;
   overflow-y: hidden;
   overflow-x: hidden;
   padding-bottom: 80px;
   width:300px;
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
  fill: black;
}

.sho{
  width: 40px;
  height: 40px; 

}


.sho img{
margin-left: 2px;

}
</style>