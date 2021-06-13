<template>
     <q-page class="bg-secondary">
     <Gamingbar class="gamingbar"/>
   <div class="gamingGames">
   <Games />
   </div>
  
  </q-page>
</template>

<script>
import Gamingbar from '../components/Gamingbar.vue'
import Games from '../components/Games.vue'


export default {
    name: 'Gaming',
   components: { Gamingbar, Games},

}
</script>

<style scoped>
.q-page{
overflow-x: hidden;
display: flex;
align-items: flex-start;
justify-content: flex-start;
}


.gamingGames{
  
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: column;
width: calc(100% - 320px);
position:absolute;
top:0px;
right:10px;
}





@media (max-width:867px){
.gamingbar{
  display: none;
}


 
.gamingGames{
  
 

  flex-direction: column;
width: 100%;
position:absolute;

left: 0;


}

}



</style>