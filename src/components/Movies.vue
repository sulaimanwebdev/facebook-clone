<template>
  
      
<div class="originals
 q-pt-lg q-pl-lg" >
  <div class="title" style="font-size:24px; font-weight:bold; opacity:0.8;">Facebook originals
</div>

  <div class="gird q-py-md">
    <q-item  v-ripple clickable :to="item.url" class="gird1"  v-for="item in list" :key="item" style="padding:0;">
      <div class="imgWrapper" >
        <img  :src="item.src" alt="Show">
      </div>
    </q-item>
  </div>
</div>








</template>


<script>

export default {
   name: 'Movies',

   data(){
     return{
          list: [
            {src: require('../assets/show1.png'), url: ''},
            {src: require('../assets/show2.jpg'), url: ''},
            {src: require('../assets/show3.png'), url: ''},
            {src: require('../assets/show4.jpg'), url: ''},
            {src: require('../assets/show5.jpg'), url: ''},
            {src: require('../assets/show6.png'), url: ''},
            {src: require('../assets/show7.png'), url: ''},
            {src: require('../assets/show8.png'), url: ''},
            {src: require('../assets/show9.png'), url: ''},
            {src: require('../assets/show10.png'), url: ''},
            {src: require('../assets/show11.png'), url: ''},
            {src: require('../assets/show12.jpg'), url: ''},
            {src: require('../assets/show13.jpg'), url: ''},
            {src: require('../assets/show14.png'), url: ''},
            {src: require('../assets/show15.png'), url: ''},
            {src: require('../assets/show16.jpg'), url: ''},
            {src: require('../assets/show17.jpg'), url: ''},
            {src: require('../assets/show18.jpg'), url: ''},
            {src: require('../assets/show19.jpg'), url: ''},
            {src: require('../assets/show20.jpg'), url: ''},
            {src: require('../assets/show21.png'), url: ''},
            {src: require('../assets/show22.jpg'), url: ''},
            {src: require('../assets/show23.jpg'), url: ''},
            {src: require('../assets/show24.png'), url: ''},
            {src: require('../assets/show25.jpg'), url: ''},
            {src: require('../assets/show26.png'), url: ''},
            {src: require('../assets/show27.png'), url: ''},
            {src: require('../assets/show28.jpg'), url: ''},
            {src: require('../assets/show29.png'), url: ''},
            {src: require('../assets/show30.jpg'), url: ''},


            

          ]
     }
   }

}
</script>

<style scoped>


.originals
{
 
width: 100%;

padding-right: 20px;
}
.gird{
  display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 8px;

}

.imgWrapper{
  width: 100%;
  height: 100%;
  border-radius: 8px;

}

.imgWrapper img{
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


@media (max-width:976px){
  .gird{
  display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 8px;

}
}

@media (max-width:867px){
    .gird{
  display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 8px;

}

}

@media (max-width:705px){
    .gird{
  display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 8px;

}
}



@media (max-width:613px){
    .gird{
  display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 8px;

}
}



@media (max-width:457px){
    .gird{
  display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 8px;

}
}
</style>