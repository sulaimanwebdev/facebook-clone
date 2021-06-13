<template>
   
    <div  class="bg-secondary right-scroll q-pt-md">
      <!-- drawer content -->


<q-list class="q-pb-md q-pt-xs q-px-sm">
  <span class="q-pl-md text-weight-medium" style="opacity:0.5; font-size:18px;">Sponsored</span>
 <q-item clickable v-ripple>
        <q-item-section top thumbnail  class="q-ml-none nnn q-pl-sm">
          <img src="../assets/img10.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">Starting at just $29/month</q-item-label>
          <q-item-label caption>adext.ai</q-item-label>
        </q-item-section>

       
      </q-item>




      <q-item clickable v-ripple class="q-pt-sm">
        <q-item-section top thumbnail  class="q-ml-none ">
          <img src="../assets/img11.jpg" style="border-radius:7px;" class="q-pl-sm">
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold bbb">Get your.Crypto<br>starting $29/month</q-item-label>
          <q-item-label caption>unstoppabledomains.com</q-item-label>
        </q-item-section>
    
       
      </q-item>


      <hr style="opacity:0.5; margin:15px 0px; margin-left:6px;">
      
<div class="pagesF">
  <span class="q-pl-sm text-weight-medium" style="opacity:0.5; font-size:16px;">Your Pages</span>
<q-icon name="more_horiz" size="22px" style="opacity:0.5; border-radius:50%; cursor:pointer"  v-ripple />
</div>




 
    
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/img9.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Dogecoin</q-item-section>
      </q-item>



    
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="34px">
          <q-icon name="notifications" size="26px" style="opacity:0.5; border-radius:50%; cursor:pointer" />

          </q-avatar>
        </q-item-section>

        <q-item-section  style="opacity:0.7; font-weight:400;">2 notifications</q-item-section>
      </q-item>




      
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="34px">
          <q-icon name="campaign" size="26px" style="opacity:0.5; border-radius:50%; cursor:pointer" />

          </q-avatar>
        </q-item-section>

        <q-item-section  style="opacity:0.7; font-weight:400;">Create Promotion</q-item-section>
      </q-item>


      <hr style="opacity:0.5; margin:10px 0px; margin-left:6px;">
  <span class="q-pl-sm text-weight-medium" style="opacity:0.5; font-size:16px;">Birthdays</span>



 <q-item clickable v-ripple class="q-mt-md" >
        <q-item-section avatar>
          <q-avatar size="30px">
          <img src="../assets/gift.png" alt="Icon">
          </q-avatar>
        </q-item-section>

        <q-item-section class="" style="opacity:0.9;"><span class="text-weight-bold">Elon Musk</span>'s' birthday is today.</q-item-section>
      </q-item>




      <hr style="opacity:0.5; margin:15px 0px; margin-left:6px;">
      
<div class="pagesF">
  <span class="q-pl-sm text-weight-medium" style="opacity:0.5; font-size:16px;">Contacts</span>
 <div>
 <q-avatar size="34px">
          <q-icon name="video_call" size="22px" style="opacity:0.5; border-radius:50%; cursor:pointer" class=""  v-ripple/>

          </q-avatar>
           <q-avatar size="34px">
          <q-icon name="search" size="22px" style="opacity:0.5; border-radius:50%; cursor:pointer" class=""  v-ripple/>

          </q-avatar>

           <q-avatar size="34px">
          <q-icon name="more_horiz" size="22px" style="opacity:0.5; border-radius:50%; cursor:pointer" class="" v-ripple/>

          </q-avatar>
 </div>
 
 </div>




  
 <q-item clickable v-ripple class="q-mt-sm" to="/elonmusk">
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/elon.jpg" alt="Profile">
          <q-badge color="green" rounded floating />
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Elon Musk</q-item-section>
      </q-item>




  
 <q-item clickable v-ripple class="q-mt-sm" to="/warrenbuffet">
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/warren.jpg" alt="Profile">
          <q-badge color="green" rounded floating />
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Warren Bufffet</q-item-section>
      </q-item>





      
 <q-item clickable v-ripple class="q-mt-sm" to="/jeffbezos">
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/jeff.jpg" alt="Profile">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Jeff Bezos</q-item-section>
      </q-item>




        
 <q-item clickable v-ripple class="q-mt-sm" to="billgates">
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/bill.jpg" alt="Profile">
          
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Bill Gates</q-item-section>
      </q-item>


        
 <q-item clickable v-ripple class="q-mt-sm" to="/larrypage">
   
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/larry.jpg" alt="Profile">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Larry Page</q-item-section>
      </q-item>



     
 <q-item clickable v-ripple class="q-mt-sm" to="mark">
        <q-item-section avatar>
          <q-avatar size="34px">
          <img src="../assets/mark.jpg" alt="Profile">
          
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Mark zuckerberg</q-item-section>
      </q-item>



      

      <hr style="opacity:0.5; margin:10px 0px; margin-left:6px;">
  <span class="q-pl-sm text-weight-medium" style="opacity:0.5; font-size:16px;">Groups</span>



  
 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
          <q-avatar size="40px">
          <img src="../assets/crypto.jpg" alt="Profile">
          
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Cryptocurrency</q-item-section>
      </q-item>
      





 <q-item clickable v-ripple class="q-mt-sm">
        <q-item-section avatar>
         <q-avatar size="40px" font-size="20px" style="background-color:#dcdcde;" text-color="black" icon="add" />
        </q-item-section>

        <q-item-section class="text-weight-medium text-size-h6" style="opacity:0.9;">Create New Group</q-item-section>
      </q-item>




    </q-list>





    </div>
    
</template>

<script>


export default {
   
}
</script>



<style scoped>

@media (max-width:878px){
  .bg-secondary{
    display: none;
  }
}


</style>