<template>
    <div>
<div class="navigation-white bg-white">
<div class="title">Browse</div>


<div class="navigation-links">
        <q-item  to="/gaming/browse" clickable v-ripple exact class="link" active-class="active-link">Games</q-item>
        <q-item  to="/gaming/browse/live" clickable v-ripple exact class="link" active-class="active-link">Live Streams</q-item>


        

</div>
</div>

    </div>
</template>

<script>
export default {
    name: 'Navigationwhitebar',
}
</script>


<style scoped>
.navigation-white{
    height: 140px;
    padding: 20px 40px;
    border-bottom: 1px solid rgba(192, 192, 192, 0.363);
    position: relative;
}


.title{
    font-size: 25px;
    font-weight: bold;
    opacity: 0.8;
}


.navigation-links{
    position: absolute;
    bottom: 0;
    left: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }


.link{
    text-transform:capitalize; 
    border-radius:5px;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    
    font-weight: 500;
    font-size: 16px;

    opacity: 0.9;
    padding-bottom: 12px;
    padding-top: 12px;

}


.active-link{
    
    border-bottom: 3px solid #1877F2;

    color:#a4b2c5;
    opacity: 1;

}



@media (max-width:867px){
    .navigation-white{
  
    padding:  20px;
  
}



.navigation-links{
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }



}

</style>