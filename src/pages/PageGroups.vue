<template>
     <q-page class="bg-secondary">
     <Groupsbar />
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
</style>