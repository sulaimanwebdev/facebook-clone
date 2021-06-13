<template>
  <q-page class="bg-secondary">
     <Watchbar class="vca"/>
   <div class="videos">
   <Videos />
   </div>
  
  </q-page>
</template>

<script>
import Watchbar from '../components/Watchbar'
import Videos from '../components/Videos'


export default {
  name: 'Watch',
    components: { Watchbar, Videos},
}
</script>


<style scoped>
.q-page{
overflow-x: hidden;
display: flex;
align-items: flex-start;
justify-content: flex-start;
}


.videos{
  
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: column;
width: calc(100% - 350px);
position:absolute;
top:-30px;
right:20px;

  
}

@media (max-width:867px){
  .vca{
    display: none;
  }
  
.videos{
  
 

  flex-direction: column;
width: 100%;
position:absolute;

left: 0;


}
}
</style>