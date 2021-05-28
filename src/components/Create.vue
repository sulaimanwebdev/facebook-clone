<template>
   <div class="full">
        <div class="white">
        <div class="top">
            <div class="flex1">
             <q-item>
                    
            <q-avatar size="43px" v-ripple>
          <img src="../assets/avatar.jpg">
          </q-avatar>
          
             </q-item>
              <div class="search bg-secondary">
<q-icon name="search" size="23px"/>
        <input type="text" placeholder="What's on your mind, Sulaiman?" class="bg-secondary">
      </div>

          
            </div>
        </div>
          <q-separator class="q-mt-md q-mb-md "/>

          <div class="flex2">

              <q-item clickable v-ripple>
       <div class="iitemlfex">
           <div class="imgCont"> <img src="../assets/live.png"></div>
           <div class="content">Live Video</div>
       </div>
      </q-item>
         


      
              <q-item clickable v-ripple>
       <div class="iitemlfex">
           <div class="imgCont"> <img src="../assets/photo.png"></div>
           <div class="content">Photo/Video</div>
       </div>
      </q-item>

         
              <q-item clickable v-ripple>
       <div class="iitemlfex">
           <div class="imgCont"> <img src="../assets/happy.png"></div>
           <div class="content">Feeling/Activity</div>
       </div>
      </q-item>

         



         
         



          </div>
    </div>
   </div>
</template>

<script>

export default{
    name: 'Create'
}
</script>
<style scoped>
.full{
     width: 100%;
}
.flex1{
    display: flex;
    align-items: center;
    
}

.flex1 .q-item{
    padding: 0;
    border-radius: 50%;
    margin-right: 10px;
}

.search{
    width: 100%;
}
.top{
   
    width: 100%;
    
}

.white{
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
background-color: white;
    padding: 15px 20px;
     margin-top: 30px;
    border-radius: 10px;
}

.flex2{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.iitemlfex{
    display: flex;
    align-items: center;
    
}

.content{
    margin-bottom: 5px;
    margin-left: 15px;
    font-weight: bold;
    opacity: 0.7;

}




@media (max-width:1241px){
  .content{
      margin-left: 7px;
  }

  .flex2{
      gap: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
}




@media (max-width:519px){
.content{
      margin-left: 0px;
  }

  .flex2 .q-item{
      padding: 0 !important;
  }

}
</style>
