<template>
  <q-page>
<Leftbar />
<div class="bg-secondary home">
<Stories />
<Create />
<Post />
<!-- another components like ads or something -->

</div>
<Rightbar />
  </q-page>
</template>

<script>
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Stories from '../components/Stories'
import Create from '../components/Create'
import Post from '../components/Post'
export default {
   components: { Leftbar, Rightbar, Stories, Create, Post},
  name: 'Home'
}
</script>


<style scoped>
.q-page{
  display: grid;
  grid-template-columns: 300px 1fr 300px;
 grid-gap: 40px;
overflow-x: hidden;

}

.home{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: column;
}

@media (max-width:1175px){
  .q-page{
  display: grid;
  grid-template-columns: 1fr 300px;
 grid-gap: 40px;

}



}



@media (max-width:878px){
   .q-page{
  display: grid;
  grid-template-columns: 1fr;
 grid-gap: 40px;

}
}

</style>
