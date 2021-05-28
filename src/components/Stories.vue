<template>
<q-list class="cds">
  <q-item v-ripple clickable class="story-item item ccc">
  
     
    <div class="create"></div>
    <div class="plusSec">
     <div class="plus"><q-avatar size="35px"  color="primary" text-color="white" icon="add" v-ripple /></div>              

        <span class="text-dark text-weight-bold">Create<br>Story</span>
    </div>

  
 
</q-item>


<q-item v-ripple clickable class="story-item item ccc">
   <div class="full eloncon">
<div class="rounded elon"></div>
<div class="content"><b>Elon Musk</b></div>
   </div>
</q-item>


<q-item v-ripple clickable class="story-item item ccc">
   <div class="full larrycon">
<div class="rounded larry"></div>
<div class="content"><b>Larry Page</b></div>
   </div>
</q-item>




<q-item v-ripple clickable class="story-item item ccc">
   <div class="full billcon">
<div class="rounded bill"></div>
<div class="content"><b>Bill Gates</b></div>
   </div>
</q-item>






<q-item v-ripple clickable class="story-item item ccc wewe">
   <div class="full warrencon">
<div class="rounded warren"></div>
<div class="content"><b>Warren Buffet</b></div>
   </div>
</q-item>

<q-item clickable v-ripple class="arrow">
   <q-avatar size="45px"  color="white" text-color="black" icon="arrow_forward_ios" v-ripple/>
</q-item>

</q-list>




</template>

<script>


export default{
  name: 'Stories'
}
</script>


<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cds{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  position: relative;
}

.arrow{
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  border-radius: 50%;
}


  .ccc{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
   .story-item {
     
    
    padding: 0;
    height: 200px;
    /* max-width: 230px; */
      border-radius: 15px;
     
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      color: white;
    position:relative;
    font-size:13px;	
  }  
  .story-item:before {
     content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: black;
      opacity: .2;
      border-radius: 15px;
    } 
   .story-item span {
    position:absolute;bottom:0;
    padding:10px 5px; 
    font-family: sans-serif;
  }
  .story .owl-stage {
      right: 15px;
  }
  
  .rounded {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width:32px;
    height:32px;
    margin:5px;
    position:absolute;
    border-radius:50%;
   border:2px solid #3877e1;
  }




 

  .create{
background-image:url('../assets/avatar.jpg');
height: 60%;
width: 100%;
 background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
 border-radius: 15px;
 border-bottom-right-radius: 0;
 border-bottom-left-radius: 0;

  }

  .plusSec{
      width: 100%;
   height:40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction:column;
      text-align: center;
      border-radius: 15px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      position: relative;
      background-color: rgb(219, 219, 219);
}

.plus{
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid rgb(219, 219, 219);
    border-radius: 50%;
    
}


.full{
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 15px;
}

.eloncon{
    background-image:url('../assets/elon-doge.jpg'); 
  
}


.elon{
      background-image:url('../assets/elon.jpg');
}

.bill{
      background-image:url('../assets/bill.jpg');
  
}
.billcon{
      background-image:url('../assets/bills.jpg');

}


.warren{
      background-image:url('../assets/warren.jpg');
  
}
.warrencon{
      background-image:url('../assets/warrens.jpg');

}




.larry{
      background-image:url('../assets/larry.jpg');
  
}
.larrycon{
      background-image:url('../assets/larrys.jpg');

}


.content{
  position: absolute;
  bottom: 8px;
  left: 13px;
}



@media (max-width:878px){
 .arrow{
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  border-radius: 50%;
}

}





@media (max-width:581px){
.wewe{
   display: none;
}
.cds{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  position: relative;
}
}




@media (max-width:519px){
.wewe{
   display: none;
}
.cds{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  position: relative;
}
}


</style>
