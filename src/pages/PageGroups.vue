<template>
     <q-page class="bg-secondary">
     <Groupsbar class="Groupsbar"/>
   <div class="groupPosts">
   <Groupsposts />
   </div>
  
  </q-page>
</template>

<script>
import Groupsbar from '../components/Groupsbar.vue'
import Groupsposts from '../components/Groupsposts.vue'


export default {
    name: 'Groups',
   components: { Groupsbar, Groupsposts},

}
</script>

<style scoped>
.q-page{
overflow-x: hidden;
display: flex;
align-items: flex-start;
justify-content: flex-start;
}


.groupPosts{
  
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: column;
width: calc(100% - 450px);
position:absolute;
top:-30px;
right:70px;

  
}




@media (max-width:1116px){
.groupPosts{
  width: calc(100% - 350px);
position:absolute;
top:-30px;
right:30px;
    
}

}


@media (max-width:867px){
.Groupsbar{
  display: none;
}

.groupPosts{
  width: 100%;
position:absolute;
top:-30px;
left:0px;
    
}
}
</style>