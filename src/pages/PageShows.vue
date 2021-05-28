<template>
    <div>
       <Showbar class="vca"/>

       <div class="shows">


<div class="poster">
  <video src="../assets/featured.mp4" type="mp4" autoplay loop playsinline muted></video>
  <div class="blackOverlay"></div>
  <div class="bottomFlex">
    <div class="content1">
      <div class="text1 text-white" style="font-weight:500; font-size:15px;">FEATURED SHOW</div>
      <div class="text2 text-white" style="font-weight:600; font-size:23px; margin-top:3px;">The Adventures of TinTin</div>

    </div>
    <div class="content2"><q-item clickable v-ripple class="bg-grey btn" style="cursor:pointer">See all episodes</q-item></div>

  </div>
</div>

<Movies />

       </div>
    </div>
</template>

<script>
import Showbar from '../components/Showbar'
import Movies from '../components/Movies'


export default {
  name: 'Shows',
    components: { Showbar, Movies},

 

}
</script>

<style scoped>
.q-page{
overflow-x: hidden;
display: flex;
align-items: flex-start;
justify-content: flex-start;
}


.shows{
  
 

  flex-direction: column;
width: calc(100% - 300px);
position:absolute;

right: 0;


}


.poster{
  width: 100%;
  position: relative;
  height: 400px;
}

.poster img{
  width: 100%;
  height:100%;
  object-position: center;
  object-fit: cover;


}

.blackOverlay{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
 

}


.bottomFlex{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  
background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.616) 49.61%);
}

.btn{
  padding: 15px 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.767);
}
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  position: absolute;
}

@media (max-width:867px){
  .vca{
    display: none;
  }
  
.shows{
  
 

  flex-direction: column;
width: 100%;
position:absolute;

left: 0;


}
}



@media (max-width:650px){
  .text1{
    font-size: 12px !important;
  }
  .text2{
    font-size: 18px !important;
  }

  .btn{
    font-size: 12px;
    padding: 15px;
  }
}
</style>