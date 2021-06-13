<template>
     <q-page class="bg-secondary">
     <Browsebar class="browsebar"/>
   <div class="browseGames">
<Navigationwhitebar />

   <Livegames />
   </div>
  
  </q-page>
</template>

<script>
import Browsebar from '../components/Browsebar.vue'
import Livegames from '../components/Livegames.vue'
import Navigationwhitebar from '../components/Navigationwhitebar.vue'



export default {
    name: 'Live',
   components: { Browsebar, Livegames, Navigationwhitebar},

}

</script>

<style scoped>
.q-page{
overflow-x: hidden;
display: flex;
align-items: flex-start;
justify-content: flex-start;
}



.browseGames{
  
 

  flex-direction: column;
width: calc(100% - 300px);
position:absolute;
right: 0;


}




@media (max-width:867px){
.browsebar{
  display: none;
}


 
.browseGames{
  
 

  flex-direction: column;
width: 100%;
position:absolute;
padding-right: 0px !important;
left: 0;


}

}



</style>