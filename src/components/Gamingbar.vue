<template>
    <div class="watchBar bg-white">
<div class="flex">
    <div style="font-size:22px; font-weight:bold; opacity:0.9;">Gaming</div>
    <div>
           <q-avatar size="45px"  color="secondary" text-color="black" icon="settings" v-ripple style="opacity:0.9;"/>


    </div>


</div>









  
 <q-item  v-ripple class="q-mt-md bg-info" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="bg-primary ro">
<q-icon  size="24px" class="play">

</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9; font-size:15px;">Play Games</q-item-section>
      </q-item>





      
 <q-item to="/gaming/browse" exact v-ripple  class="q-mt-sm" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="sho bg-grey">
<q-icon size="24px" class="browse">

</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9; font-size:15px;">Browse</q-item-section>
      </q-item>


<hr style="opacity:0.3; margin:15px 0px;">




      <div class="search bg-secondary q-mt-md"  style="height:40px;">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Facebook" class="bg-secondary">
      </div>



<hr style="opacity:0.3; margin:15px 0px;">


<div style="font-weight:600; opacity:0.8; font-size:16px;">Favourite games</div>
<div style=" opacity:0.8; font-size:14px;">Favourite a game to create a shortcut for it here.</div>





<hr style="opacity:0.3; margin:15px 0px;">


<div class="flex" style="padding:0px 3px;">
    <div style="font-size:16px; font-weight:bold; opacity:0.9;">Categories</div>
  


</div>

<q-list>
  



      

 <q-item clickable v-ripple v-for="game in games" :key="game" style="display: flex; align-items: center; width: 100%; padding-left:5px; padding-right:5px; margin-top:5px;">
        <div style="margin-right:12px;">
          <div :class="game.class">
          </div>
        </div>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">{{game.title}}</q-item-section>
      </q-item>





      
      

      
</q-list>




    </div>
</template>
<script>
export default {
 name: 'Gamingbar',


 data(){
     return{
         games: [
             {class: 'a1', title: 'All Categories'},
             {class: 'a1 a2', title: 'Action'},
             {class: 'a1 a3', title: 'Arcade'},
             {class: 'a1 a4', title: 'Board'},
             {class: 'a1 a5', title: 'Card'},
             {class: 'a1 a6', title: 'Casino'},
             {class: 'a1 a7', title: 'MOBA'},
             {class: 'a1 a8', title: 'Puzzle'},
             {class: 'a1 a9', title: 'Role-Playing'},
             {class: 'a1 a10', title: 'Simulation'},
             {class: 'a1 a11', title: 'Sport'},
             {class: 'a1 a12', title: 'Strategy'},
             {class: 'a1 a13', title: 'Trivia'},
             {class: 'a1 a14', title: 'Word'},








             
         ]
     }
 }
}
</script>

<style scoped>


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
    filter:  brightness(0) invert(1);
}

.browse{
        background-image: url('../assets/icons2.png');

    background-position: 0px -425px;
    background-size: 33px 1162px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
}


.a1{
        background-image: url('../assets/gaming.png');
    background-position: -74px -372px;
    background-size: auto;
    width: 36px;
    height: 36px;
    background-repeat: no-repeat;
    display: inline-block;
    border-radius:50%;
}


.a2{

    background-position: -37px -113px;
   

}


.a3{
    background-position: 0px -150px;
 
}


.a4{
    background-position: -74px -150px;
}


.a5{
        background-position: -37px -187px;

}


.a6{
        background-position: 0px -224px;

}


.a7{
        background-position: -74px -224px;

}


.a8{
        background-position: -37px -261px;

}






.a9{
    background-position: 0px -298px;

}


.a10{
    background-position: -74px -298px;

}



.a11{
    background-position: -37px -335px;

}



.a12{
            background-position: 0px -372px;


}



.a13{
    background-position: -37px -409px;


}



.a14{
    background-position: 0px -446px;

}
</style>