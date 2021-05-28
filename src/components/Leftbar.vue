<template>
    
    <div class="bg-secondary " >
      <!-- drawer content -->
    
       <q-list class="q-py-md left-scroll">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="30px" class="q-ml-xs">
          <img src="../assets/avatar.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Muhammad Sulaiman</q-item-section>
      </q-item>





 <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="35px">
          <img src="../assets/img1.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">COVID-19 Information Center</q-item-section>
      </q-item>





 <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="32px">
          <img src="../assets/img2.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Friends</q-item-section>
      </q-item>







 <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img3.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Pages <br><span class="dotF"><q-icon size="7px" name="fas fa-circle"></q-icon>7 new</span></q-item-section>
      </q-item>






 <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img4.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Games</q-item-section>
      </q-item>








 <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img5.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Groups <br><span class="dotF"><q-icon size="7px" name="fas fa-circle"></q-icon>1 new</span></q-item-section>
      </q-item>





      

 <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img6.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Pages <br><span class="dotF"><q-icon size="7px" name="fas fa-circle"></q-icon>9+ new videos</span></q-item-section>
      </q-item>



<hr style="opacity:0.5; margin:15px 0px;">

<span class="q-pl-md text-weight-medium" style="opacity:0.5; font-size:18px;">Your shortcuts</span>






 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img7.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Dart FRVR</q-item-section>
      </q-item>



      
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img8.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">8 BALL Pool</q-item-section>
      </q-item>


        
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img9.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Dogecoin</q-item-section>
      </q-item>




  
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/crypto.jpg" alt="Profile">
          
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Cryptocurrency</q-item-section>
      </q-item>





 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/elon.jpg" alt="Profile">
          
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Elon Musk</q-item-section>
      </q-item>


 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/img4.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Games</q-item-section>
      </q-item>




 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/blockchain.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium" style="opacity:0.9;">Blockchain</q-item-section>
      </q-item>


       </q-list>
    
    </div>
    
</template>

<script>


export default{
    name: 'Leftbar',
}
</script>

<style scoped>

@media (max-width:1175px){
  .bg-secondary{
    display: none;
  }
}
</style>