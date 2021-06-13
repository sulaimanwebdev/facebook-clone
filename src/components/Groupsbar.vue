<template>
    <div class="groupsBar bg-white">

<div class="flex">
    <div style="font-size:22px; font-weight:bold; opacity:0.9;">Watch</div>
    <div>
           <q-avatar size="45px"  color="secondary" text-color="black" icon="settings" v-ripple style="opacity:0.9;"/>


    </div>


</div>







      <div class="search bg-secondary q-mt-md"  style="height:40px;">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Facebook" class="bg-secondary">
      </div>


      
  
 <q-item  v-ripple class="q-mt-md bg-info" style="cursor:pointer">
        <q-item-section avatar>
          <q-avatar size="34px" class="bg-primary ro">
<q-icon class="icon" size="24px">

</q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9; font-size:15px;">Your Feed</q-item-section>
      </q-item>


      <q-item  v-ripple class="q-mt-md" style="cursor:pointer">
      
              <q-item-section class="text-weight-medium text-primary" style="opacity:0.9; font-size:15px; display:flex; align-items:center; justify-content:center; flex-direction:row;"><q-icon name="add" size="20px" color="primary " class="q-mr-xs"/><span class="q-mr-xs">Create New Group</span></q-item-section>
    
      </q-item>



<hr style="opacity:0.5; margin:15px 0px;">

<div style="font-size:17px; font-weight:bold; opacity:0.9;">Groups you've joined</div>


<q-list class="q-mt-sm">
    <q-item class="groupFlex q-pt-sm" :to="group.url" clickable v-ripple v-for="group in groups" :key="group">
        <div class="img-cont">
            <img :src="group.src" alt="Photo">
        </div>
        <div class="text-cont">
            <div class="groupTitle">{{ group.title }}</div>
            <div class="lastPost">{{ group.lastActive }}</div>
        </div>
    </q-item>
</q-list>









    </div>
</template>

<script>
export default {
   name: 'Groupsbar',

    data(){
     return{
          groups: [
            {src: require('../assets/group3.jpg'),title: 'UI/UX Designing', lastActive: 'Last active 5 hours ago', url: ''},
            {src: require('../assets/group5.jpeg'),title: 'Vue JS Developers', lastActive: 'Last active 1 hour ago', url: ''},
            {src: require('../assets/group4.jpg'),title: 'Cryptocurrency', lastActive: 'Last active 8 hours ago', url: ''},
            {src: require('../assets/group2.jpg'),title: 'Developers', lastActive: 'Last active 10 minutes ago', url: ''},
            {src: require('../assets/group1.jpg'),title: 'Dogecoin', lastActive: 'Last active 2 hours ago', url: ''},
            {src: require('../assets/group6.png'),title: 'Daily Dev', lastActive: 'Last active 3 hours ago', url: ''},
            {src: require('../assets/group7.png'),title: 'E-commerce', lastActive: 'Last active 6 hours ago', url: ''},
            {src: require('../assets/group8.png'),title: 'NFTs', lastActive: 'Last active 4 hours ago', url: ''},
            
           

            

          ]
     }
   }

}
</script>

<style scoped>
.groupsBar
  {
    
  padding: 15px 10px;
 
   position: fixed;
  
   height: 100vh;
   overflow-y: hidden;
   overflow-x: hidden;
   padding-bottom: 80px;
   width:300px;
   
  }



.groupsBar:hover{
  overflow-y: scroll;
}

.groupsBar:hover{
  overflow-y: scroll;
}
  


  .groupsBar::-webkit-scrollbar {
    width: 7px;
  }
  .groupsBar::-webkit-scrollbar-thumb {
    width: 50px;
    height: 50px;
    background-color: rgb(160, 160, 160);
    
    
  }
  .groupsBar::-webkit-scrollbar-track {
    background: #fff;
  }



.flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon{
   background-image: url('../assets/icons.png');
    background-position: 0px -811px;
    background-size: 33px 1223px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;   filter:  brightness(0) invert(1);
}

.groupFlex{
    display: flex;
    align-items: center;
padding-left: 5px;
    
    }

    .img-cont{
        width:70px;
        height:70px;
        border-radius: 10px;
    }

    .img-cont img{
        width:100%;
        height:100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;

    }

    .groupTitle{
        font-size: 16px;
        font-weight: 600;
        opacity: 0.9;
        line-height: 0;
        margin-bottom: 13px;
    }

     .lastPost{
        font-size: 13px;
        margin-top: 13px;
      
        
    }
    .text-cont{
        margin-left: 13px;
    }
</style>