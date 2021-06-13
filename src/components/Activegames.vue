<template>
<div class="bg-secondary">


<div class="main-container bg-secondary">
<div class="top-flex">
    
   <div class="a-sec">
    
            <div class="search bg-white">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Games" class="bg-white">
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

        <q-item clickable  class="all1" v-for="allitem in allgames" :key="allitem">
   <div :class="allitem.class">
       <img :src="allitem.img" alt="Game">
   </div>
   <div class="down">
       <div class="q-mt-sm"><span  class="more1Title">{{allitem.all1Title}}</span></div>
       <div class="ddd"><span class="more1Type">{{allitem.all1Type}}</span><br>
<q-btn   unelevated  text-color="black" class="btn-w-f" style="text-transform:capitalize;"> <q-icon size="18px" name="add_box" class="q-mr-xs"/><span>Follow</span></q-btn></div>
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


    data(){
        return{
            
        allgames:[
            {img: require('../assets/active11.jpg'), all1Title: 'PUBG Mobile', all1Type: '16.7K followers',class: 'up'},
            {img: require('../assets/active5.jpg'), all1Title: 'Grand Theft Auto Vice City', all1Type: '115.2K followers',class: 'up'},
            {img: require('../assets/active1.jpg'), all1Title: 'Battlefield 3', all1Type: '1.1K followers',class: 'up'},
            {img: require('../assets/active3.jpg'), all1Title: 'Kingdom Come', all1Type: '3.4K followers',class: 'up'},
            {img: require('../assets/active4.jpg'), all1Title: 'Mafia 2', all1Type: '22.3K followers',class: 'up'},
            {img: require('../assets/activ6.jpg'), all1Title: 'Far Cry New Dawn', all1Type: '49K',class: 'up'},
            {img: require('../assets/active7.jpg'), all1Title: 'Crysis', all1Type: '5.1K followers',class: 'up'},
            {img: require('../assets/active8.jpg'), all1Title: 'Teardown', all1Type: '2.2K followers',class: 'up'},
            {img: require('../assets/active9.jpg'), all1Title: 'The Ledgend Of Zelda', all1Type: '8.1K followers',class: 'up'},
            {img: require('../assets/active10.jpg'), all1Title: 'Flashing Lights', all1Type: '11.1K followers',class: 'up'},
                        

            
        ]

        }
    }
}
</script>

<style scoped>
.navigation-white{
    height: 140px;
    padding: 20px 40px;
    border-bottom: 1px solid rgba(192, 192, 192, 0.363);
    position: relative;
}


.title{
    font-size: 25px;
    font-weight: bold;
    opacity: 0.8;
}


.navigation-links{
    position: absolute;
    bottom: 0;
    left: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }


.link{
    text-transform:capitalize; 
    border-radius:5px;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    
    font-weight: 500;
    font-size: 16px;

    opacity: 0.9;
    padding-bottom: 12px;
    padding-top: 12px;

}


.active-link{
    
    border-bottom: 3px solid #1877F2;

    color:#1877F2;
    opacity: 1;

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
    height: 430px;
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
    justify-content: flex-start;
    flex-direction: column;
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
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;
width: 100%;
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
    .navigation-white{
  
    padding:  20px;
  
}


.main-container{
padding-left: 20px;

}

.navigation-links{
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
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





@media (max-width: 430px){
        .allGrid{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
   grid-gap: 30px;
}
}

</style>