<template>
<div class="bg-secondary">
<div class="main-container bg-secondary">
<div class="top-flex">
    
   <div class="a-sec">
    
            <div class="search bg-white">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Live Streams" class="bg-white">
      </div>      
</div>



   <div class="b-sec">
<q-item clickable v-ripple class=" text-weight-medium btn-w" >
<span style="opacity:0.7;">All Languages</span>
<q-icon name="expand_more" size="23px" style="opacity:0.7;" class="q-ml-xs"/>
</q-item>


<q-item clickable v-ripple class=" text-weight-medium btn-w" >
<span style="opacity:0.7;">Suggested</span>
<q-icon name="expand_more" size="23px" style="opacity:0.7;" class="q-ml-xs"/>
</q-item>
   </div>
</div>







<div class="all">
<q-list class="allGrid">

        <q-item class="all1" v-for="allitem in allgames" :key="allitem">
   <div :class="allitem.class">
       <img :src="allitem.img" alt="Game">
       <div class="thumnails-btns-up">
         <span class="bg-red text-white q-pa-xs q-mr-sm liveAnimation" style="border-radius:5px;">Live</span>
         <span class="viewers q-pa-xs"><q-icon size="19px" name="visibility" class="q-mr-xs"/> {{allitem.viewers}}</span>
       </div>
       <div class="play-button">
           <img src="../assets/playicon.png" >
       </div>
   </div>
   <div class="nnew ">
       <div class="avatar">
       <img :src="allitem.avatarImage" alt="Profile">
       </div>
       <div >
           <span class="all1Title">{{allitem.all1Title}}</span><br>
           <span class="detials">{{allitem.channel}} <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-xs" style="opacity:0.7; margin-bottom:2px;"/> {{allitem.game}}</span>
       </div>
   </div>
        </q-item>
    
</q-list>

</div>







</div>






</div>
</template>

<script>

export default {
    name: 'Activegames',
   components: {},


    data(){
        return{
            
        allgames:[
            {img: require('../assets/live1.jpg'), all1Title: 'GTA 5 Funny', avatarImage: require('../assets/liveicon1.jpg'), channel: 'SuperTuxon', game: 'Grand Theft Auto V' , viewers: '22K' ,class: 'thumnail'},
            {img: require('../assets/live2.jpg'), all1Title: 'FIFA 21 Carrer Mode', avatarImage: require('../assets/liveicon2.png'), channel: 'Gaming Playroom', game: 'FIFA 21',  viewers: '18K' , class: 'thumnail'},
            {img: require('../assets/live3.jpg'), all1Title: 'PUBG Mobile Live Conqueror', avatarImage: require('../assets/liveicon3.jpg'), channel: 'G-One Gaming', game: 'PUBG Mobile',  viewers: '15K' , class: 'thumnail'},
            {img: require('../assets/live4.jpg'), all1Title: 'Apex Pred Ranked', avatarImage: require('../assets/liveicon4.jpg'), channel: 'Krixis', game: 'Apex Lagends',  viewers: '36K' , class: 'thumnail'},
            {img: require('../assets/live5.jpg'), all1Title: 'Microsoft Flight Sim 2020', avatarImage: require('../assets/liveicon5.jpg'), channel: 'Scoobs G', game: 'Microsoft Flight Simulator',  viewers: '24K' , class: 'thumnail'},
            {img: require('../assets/live6.jpg'), all1Title: 'High Speed Chase GTA V RP', avatarImage: require('../assets/liveicon6.jpg'), channel: 'Smush', game: 'Grand Theft Auto V',  viewers: '67K' , class: 'thumnail'},
            {img: require('../assets/live7.jpg'), all1Title: 'Gareena Free Fire', avatarImage: require('../assets/liveicon7.jpg'), channel: 'Fan  CFreakZ', game: 'Gareena Free Fire',  viewers: '53K' , class: 'thumnail'},
            {img: require('../assets/live8.jpg'), all1Title: 'Call Of Duty Live', avatarImage: require('../assets/liveicon8.jpg'), channel: 'Kraken Gaming', game: 'Call Of Duty',  viewers: '87K' , class: 'thumnail'},
            {img: require('../assets/live9.jpg'), all1Title: 'Fortnite', avatarImage: require('../assets/liveicon9.jpg'), channel: 'SweetRice', game: 'Fortnite',  viewers: '76K' , class: 'thumnail'},
            
                        

            
        ]

        }
    }
}
</script>

<style scoped>

.liveAnimation{
    animation: fadeOut 2s infinite;
  	opacity: 0;
}



@keyframes fadeOut {
  0% {
  	opacity: 1;
  }
  50%{
      opacity: 0.6;
  }

  100%{
      opacity: 1;
  }
}
.thumnail{
   border-radius: 10px !important;
width: 100%;
position: relative;
/* width: 300px; */
height: 180px;
}



.play-button{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}

.thumnail:hover .play-button{
    display: block;
}

.viewers{
    background-color: rgba(0, 0, 0, 0.63);
    color: white;
    border-radius: 5px;
    font-size: 13px;
    display: flex;
    align-items: center;
}


.thumnail img{
   border-radius: 10px !important;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}

.thumnails-btns-up{
position: absolute;
top: 10px;
left: 10px;
display: flex;
align-items: center;
}




.nnew{
    width: 100%;
    display: flex;
    margin-top: 10px;
}

.avatar{
    margin-right: 10px;
    min-width: 45px;
    min-height: 45px;

     max-width: 45px;
    max-height: 45px;
    border-radius: 50%;
    border: 2px solid red;
    padding: 2px;
}


.avatar img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}


.thumnail img{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

}
.title{
    font-size: 25px;
    font-weight: bold;
    opacity: 0.8;
}







.main-container{
    width: 100%;
padding-left: 40px;
padding-right: 20px;
margin-top: 20px;
}



.top-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.b-sec{
    display: flex;
    gap: 10px;
}


.btn-w{
    background-color: #bbbbbb49;
  padding: 13px;
  padding-left: 15px;
    
}





.search{
width: 300px;
}









.all1{
    display: flex;
   cursor: pointer;
    flex-direction: column;
    padding: 0;
    border-radius: 10px;
   max-width: 450px;


}



.up{
    /* height: 70%; */
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
    width: 100%;
  
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 12px 0px 12px !important;
    position: relative;
   
}

.more1Type{
    width: 100%;
    position: relative;
    
}
.btn-w-f{
       background-color: #bbbbbb49;
 
  width: 100%;
  padding: 0px 0 !important;
  margin-top: 5px;
  
  
}


.ddd{
bottom: 10px;
  left: 12px;
  width: calc(100% - 25px);
  position: absolute;
  
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
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
width: 100%;
grid-row-gap: 30px;
}


.all{
    margin-top: 15px;
    padding-bottom: 20px;
}


@media (max-width: 520px){
    .gameTitle{
        font-size: 16px;
    }
}





@media (max-width: 1210px){
       .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}
}





@media (max-width: 1112px){
       .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
}
}






@media (max-width: 867px){
       .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}
}



@media (max-width: 640px){
        .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
}
}






.more1Title{
    font-weight: 500;
    font-size: 15px;
    
}



@media (max-width:867px){
  


.main-container{
padding-left: 20px;

}




}



@media (max-width:976px){
    .search{
        width: 200px;
    }
}



@media (max-width:578px){
    .search{
        width: 200px;
    }

    .b-sec{
        display: none;
    }
}





@media (max-width: 530px){
        .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
   grid-gap: 30px;
}
}
</style>