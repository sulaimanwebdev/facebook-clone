<template>
    <div >


   <div class="recently q-mb-lg">
        <div style="font-weight:600; font-size:21px; opacity:0.8;" class="q-mb-sm">Recently Played</div>
        <div class="bar q-mb-md">
            <div class="lastBackground"></div>

            <div class="glass"></div>
            <div class="aSec">
                <div class="played-image-cont">
                    <img src="../assets/neon.png" alt="Game">
                </div>
                <div style="font-weight:600; color:white; font-size:20px;" class="sss">Super Darts</div>
            </div>
            <div class="bSec">
           <q-avatar size="45px"  text-color="white" icon="favorite" v-ripple class="cli"/>
           <q-avatar size="45px"  text-color="white" icon="send" v-ripple class="cli"/>
           <q-avatar size="45px"  text-color="white" icon="more_horiz" v-ripple class="cli"/>
           <q-btn  unelevated  text-color="primary" label="Play Again" class="btn"/>



            </div>
        </div>
       <q-list class="flex ">

         
           <q-item v-ripple clickable class="card">
            <img src="../assets/neon.png" alt="Game">
            <div class="gameTitle blackOverlay">Super Darts</div>
            
        </q-item>
            <q-item v-ripple clickable class="card">
            <img src="../assets/r1.png" alt="Game">
            <div class="gameTitle blackOverlay">8 Ball Pool</div>
            
        </q-item>
        <q-item  v-ripple clickable class="card">
            <img src="../assets/r2.png" alt="Game">
            <div class="gameTitle blackOverlay">Darts FRVR</div>
            
        </q-item>


         
        
       </q-list>
   </div>






<div class="more">
        <div style="font-weight:600; font-size:21px; opacity:0.8;" class="q-mb-sm">More Games Like Super Darts</div>


<q-list class="moreGrid">

        <q-item v-ripple clickable  class="more1" v-for="item in moregames" :key="item">
   <div :class="item.class">
       <img :src="item.img" alt="Game">
   </div>
   <div class="down">
       <span  class="more1Title">{{item.more1Title}}</span>
       <span class="more1Type">{{item.more1Type}}</span>
   </div>
        </q-item>
    
</q-list>

</div>





<div class="all">
        <div style="font-weight:600; font-size:21px; opacity:0.8;" class="q-mb-sm">All Instant Games</div>


<q-list class="allGrid">

        <q-item v-ripple clickable  class="all1" v-for="allitem in allgames" :key="allitem">
   <div :class="allitem.class">
       <img :src="allitem.img" alt="Game">
   </div>
   <div class="down">
       <span  class="more1Title">{{allitem.all1Title}}</span>
       <span class="more1Type">{{allitem.all1Type}}</span>
   </div>
        </q-item>
    
</q-list>

</div>







    </div>
</template>
<script>
export default {
 name: 'Games',

data(){
    return{
        moregames:[
            {img: require('../assets/more1.png'), more1Title: '8 Ball King', more1Type: 'Sports',class: 'up'},
            {img: require('../assets/more2.png'), more1Title: 'Basket Ball Real', more1Type: 'Sports', class: 'up'},
            {img: require('../assets/more3.png'), more1Title: 'Volleyball FRVR', more1Type: 'Sports', class: 'up'},
            {img: require('../assets/more4.png'), more1Title: 'Super Baseball', more1Type: 'Sports', class: 'up ball'},
            {img: require('../assets/more5.png'), more1Title: 'Mini Golf FRVR', more1Type: 'Sports', class: 'up'},

            
        ],




        allgames:[
            {img: require('../assets/all1.png'), all1Title: 'Pool Rush FRVR', all1Type: 'Puzzle',class: 'up'},
            {img: require('../assets/all2.png'), all1Title: 'Crazy Rugby.io', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all3.png'), all1Title: 'Driver FRVR', all1Type: 'Arcade',class: 'up'},
            {img: require('../assets/all4.png'), all1Title: 'Shoot Ball', all1Type: 'Puzzle',class: 'up'},
            {img: require('../assets/all5.png'), all1Title: 'Playing SOCCER', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all6.png'), all1Title: 'Field Of Battle', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all7.png'), all1Title: 'Racing Moto', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all8.png'), all1Title: 'Basket Ball Real', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all9.png'), all1Title: 'Drag Race FRVR', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all10.png'), all1Title: 'Basketball 3D', all1Type: 'Hyper Casual',class: 'up'},
            {img: require('../assets/all11.png'), all1Title: 'Angry Birds', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all12.png'), all1Title: 'Car Racing', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all13.png'), all1Title: 'Pegball FRVR', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all14.png'), all1Title: '8 Ball King', all1Type: ' Sports',class: 'up'},
            {img: require('../assets/all15.png'), all1Title: 'Battleship', all1Type: 'Strategy',class: 'up'},
            {img: require('../assets/all16.png'), all1Title: 'Mini Golf FRVR', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all17.png'), all1Title: 'Ball Runner 3D', all1Type: 'Runner',class: 'up'},
            {img: require('../assets/all18.png'), all1Title: 'War Of Survival', all1Type: 'Strategy',class: 'up'},
            {img: require('../assets/all19.png'), all1Title: 'Star Wing', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all20.png'), all1Title: 'Zombie Hunter', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all21.png'), all1Title: 'Bowmania FRVR', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all22.png'), all1Title: 'CataPualt Quest', all1Type: 'Puzzle',class: 'up'},
            {img: require('../assets/all23.png'), all1Title: 'Soccer.io', all1Type: 'Sports',class: 'up'},
            {img: require('../assets/all24.png'), all1Title: 'Survival Shooter 2', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all25.png'), all1Title: 'Basketball 3D', all1Type: 'Sports',class: 'up ball'},
            {img: require('../assets/all26.png'), all1Title: 'Eat.io', all1Type: 'MOBA',class: 'up'},
            {img: require('../assets/all27.png'), all1Title: 'Survival Shooter', all1Type: 'Role Playing',class: 'up'},
            {img: require('../assets/all28.png'), all1Title: 'Crazy Ball 3D', all1Type: 'Runner',class: 'up'},
            {img: require('../assets/all29.png'), all1Title: 'Crush Stack', all1Type: 'Action',class: 'up'},
            {img: require('../assets/all30.png'), all1Title: 'Cricket FRVR', all1Type: 'Sports',class: 'up'},
            

            





























            

        

            
        ]
    }
},







}
</script>

<style scoped>





.card{
    position: relative;
    width: 200px;
    height: 200px;
   max-width: 450px;
   box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
-webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
}
.card img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
}
.blackOverlay{
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.486) 49.61%);

}


.gameTitle{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 10px;
    padding-left: 10px;
    color: white;
    font-weight: 500;
    padding-bottom: 7px;
    padding-top: 20px;
    font-size: 18px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.flex{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    gap: 10px;
}


.bar{

    width: 100%;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}





.glass {
    border-radius: 10px;

  width: 100%;
  height: 100%;
  z-index: 3;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(100px);
position: absolute;
top: 0;
left: 0;
  background-clip:padding-box;
}


.lastBackground{
    position: absolute;
top: 0;
left: 0;
  z-index: 2;
background-image: url('../assets/neonBg.jpg');
width: 100%;
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
    border-radius: 10px;

}


.aSec, .bSec{
    z-index: 5;
    display: flex;
    align-items: center;
}
.aSec{
    gap: 15px;
}

.bSec{
    gap: 10px;
}





.played-image-cont{
    width: 70px;
    height: 70px;
    position: relative;
    border-radius: 8px;
}

.played-image-cont img{
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
    border-radius: 8px;

}


.cli{
    background-color: rgba(255, 255, 255, 0.24);
    cursor: pointer;
}


.btn{
    background-color:#DBE7F2;
     cursor:pointer;
      border-radius: 5px;
      padding: 4px 8px;
}




.more1{
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0;
    border-radius: 10px;
   max-width: 450px;
background-color: white;
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
-webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);

}


.all1{
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0;
    border-radius: 10px;
   max-width: 450px;
background-color: white;
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
-webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
-moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.27);
}



.up{
    height: 70%;
    width:100%;
    position: relative;
    border-radius: 10px;
     border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.up img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
     border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

}


.down{
    background-color: white;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 0 10px 12px;
}


.more1Title{
    font-weight:500; font-size:16px;
    margin-bottom: 4px;
}

.more1Type{
    border-radius: 7px;
    padding: 5px 12px;
    background-color: #D8DADF;
    font-weight: 400;
}



.all1Title{
    font-weight:500; font-size:16px;
    margin-bottom: 4px;
}

.all1Type{
    border-radius: 7px;
    padding: 5px 12px;
    background-color: #D8DADF;
    font-weight: 400;
}


.ball img{
     width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
background-color: white;
}

.moreGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
   grid-gap: 10px;
}


.flex .moreGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
   grid-gap: 10px;
}


.opaN{
    opacity: 0;
    visibility: hidden;
}



.allGrid{
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;
width: 100%;
}


.all{
    margin-top: 35px;
    padding-bottom: 20px;
}




@media (max-width:1000px){
 .flex{
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     
 }

 .card{
     width: auto;
 }

 
}


@media (max-width: 520px){
    .gameTitle{
        font-size: 16px;
    }
}




@media (max-width: 1064px){
    .moreGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}
}

@media (max-width: 867px){
       .moreGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
   grid-gap: 10px;
}
}




@media (max-width: 597px){
       .moreGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}
}




@media (max-width: 456px){
       .moreGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
}
}





@media (max-width: 1110px){
       .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
   grid-gap: 10px;
}
}





@media (max-width: 958px){
       .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}
}






@media (max-width: 867px){
       .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
   grid-gap: 10px;
}
}



@media (max-width: 597px){
        .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}
}



@media (max-width: 456px){
         .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
}
}



@media (max-width:560px){
    .cli{
        display: none;
    }

    .sss{
        font-size: 17px !important;
    }

    .played-image-cont{
        width: 40px;
        height: 40px;
    }


   
.btn{
    background-color:#DBE7F2;
     cursor:pointer;
      border-radius: 5px;
      padding: 0px;
}
}
</style>