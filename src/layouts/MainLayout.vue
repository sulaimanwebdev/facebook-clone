<template>
  <q-layout view="hHh lpR fFf" >

    <q-header  class="bg-white text-black"> 
      <q-toolbar class="header q-px-md q-py-sm">
        <div class="header-left">
          <div class="logo">
            <img src="../assets/logo.png" alt="Logo" />
          </div>
        

       

      <div class="search bg-secondary">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Facebook" class="bg-secondary">
      </div>
    
        </div>

        

        <div class="header-mid">
          <q-item clickable to="/" v-ripple exact class="tab" active-class="active">
            <q-avatar  >
             
              <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3 activeSVG" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg>

             <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv nonActiveSVG" height="28" width="28"><path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path></svg>

</q-avatar> 
 <q-tooltip content-class="" :offset="[10, 10]">
          Home
        </q-tooltip>
          </q-item>
         







         
         <q-item clickable  to="/watch" v-ripple  class="tab" active-class="active">
<q-avatar>
  <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3 activeSVG" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path></svg>
              <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv nonActiveSVG" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path></svg>
   <q-badge color="red" rounded floating>9+</q-badge>

</q-avatar> 
 <q-tooltip content-class="" :offset="[10, 10]">
          Watch
        </q-tooltip>
         </q-item>
        
          
       <q-item to="/groups" v-ripple exact class="tab" active-class="active">
          

<q-avatar>
  <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3 activeSVG" height="28" width="28"><path d="M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z"></path></svg>
            <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv nonActiveSVG" height="28" width="28"><path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path></svg>

   <q-badge color="red" rounded floating>3</q-badge>
</q-avatar>
<q-tooltip content-class="" :offset="[10, 10]">
          Groups
        </q-tooltip>
       </q-item>




  <q-item to="/gaming" v-ripple class="tab" active-class="active" clickable>
            
         
<q-avatar>

  <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3 activeSVG" height="28" width="28"><path d="M10.25 18.5h6.25a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5H4.25C3.56 25 3 24.44 3 23.75V4.25C3 3.56 3.56 3 4.25 3h19.5c.69 0 1.25.56 1.25 1.25V9a.5.5 0 01-.5.5H10.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75zM11.5 17a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v12.25c0 .69-.56 1.25-1.25 1.25H19a.5.5 0 01-.5-.5v-6.75a.75.75 0 00-.75-.75H11.5z"></path></svg>
             <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv nonActiveSVG" height="28" width="28"><path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"></path></svg>
</q-avatar>
<q-tooltip content-class="" :offset="[10, 10]">
          Gaming
        </q-tooltip>
</q-item>        
        </div>



        <div class="header-right">
          <q-item to="/sulaiman.dev" v-ripple class="sulaiman" active-class="sulaimanActive" exact>
            <q-avatar size="45px">
          <img src="../assets/avatar.jpg">
          </q-avatar>
          
          </q-item>
       
 
   <div class="q-ml-sm dropmenuBtn">
           <q-avatar size="45px"  color="secondary" text-color="black" icon="add" v-ripple class="cli realbtn"/>

            <q-tooltip :offset="[10, 10]">
          Create
        </q-tooltip>






 <q-menu max-height="100%" min-width="370px" style="padding:0 20px !important;">
          <q-list style="width:370px;"  class="q-mt-md q-mr-sm dropdownMenu" >
<div style="display:flex; align-items:center; justify-content:space-between;" class="q-pr-sm">
            <div style="margin-left:20px; font-weight:bold; font-size:18px; opacity:0.8;">Create</div>

</div>
      

              
                



 <q-item @click="postbtnheader" v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;"  class="q-mt-sm q-mx-sm">
              <div style="display:flex; align-items:center;">
            <div>
                <q-avatar size="43px" icon="edit" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Post</span>
                <div><span>Share a post on News Feed</span></div>
            </div>
            
       </div>
            </q-item>



            
 <q-item  @click="storybtnheader" v-ripple clickable style="padding-left:10px; margin-bottom:10px;  padding-top:10px; !important;" class="q-mt-sm q-mx-sm">
              <div style="display:flex; align-items:center;">
            <div>
                <q-avatar size="43px" icon="fas fa-book-open" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Story</span>
                <div><span>Share a photo or write something</span></div>
            </div>
            
       </div>


            </q-item>












            
          </q-list>
        </q-menu>













        
          </div>












          <div class="q-ml-sm dropmenuBtn">
            <q-avatar size="45px" color="secondary" text-color="black" v-ripple class="realbtn">
<svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>

            </q-avatar>
            <q-tooltip content-class="" :offset="[10, 10]">
          Messenger
        </q-tooltip>















 <q-menu max-height="100%" min-width="370px" style="padding:0 20px !important;">
          <q-list style="width:370px; "  class="q-mt-md q-mr-sm dropdownMenu" >
<div style="display:flex; align-items:center; justify-content:space-between;" class="q-pr-sm">
            <div style="margin-left:20px; font-weight:bold; font-size:18px; opacity:0.8;">Messenger</div>
<div>


<q-icon name="more_horiz" size="22px" style="cursor:pointer; border-radius:100px;" class="q-pa-xs" v-ripple/>
<q-icon name="open_in_full" size="16px" style="cursor:pointer; border-radius:100px;" class="q-pa-xs q-ml-sm" v-ripple/>
<q-icon name="videocam" size="22px" style="cursor:pointer; border-radius:100px;" class="q-pa-xs q-ml-sm" v-ripple/>
<q-icon name="edit" size="19px" style="cursor:pointer; border-radius:100px;" class="q-pa-xs q-ml-sm" v-ripple/>




</div>

</div>
            <div class="search bg-secondary q-ml-md q-mr-sm q-my-sm">
<q-icon name="search" size="23px" class="searchI"/>
        <input type="text" placeholder="Search Facebook" class="bg-secondary">
      </div>

                 <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/elon.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Elon Musk</span></span>
                <div><span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">Doge To The Moon</span> <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-sm q-mr-sm" style="opacity:0.7;"/> <span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">36 m</span></div>
            </div>
            
       </div>
            </q-item>




              <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/bill.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Bill Gates</span></span>
                <div><span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">Nature is our best friend</span> <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-sm q-mr-sm" style="opacity:0.7;"/> <span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">1 h</span></div>
            </div>
            
       </div>
            </q-item>





              <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/jeff.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Jeff Bezos</span></span>
                <div><span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">😂😂😂</span> <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-sm q-mr-sm" style="opacity:0.7;"/> <span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">1.5 h</span></div>
            </div>
            
       </div>
            </q-item>










<q-item  v-ripple clickable style="padding-left:10px; margin-bottom:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/warren.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Warren Buffet</span></span>
                <div><span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">It's been an ideal period for investors</span> <q-icon name="fas fa-circle" size="3px" color="black" class="q-mx-sm q-mr-sm" style="opacity:0.7;"/> <span style=" font-weight:400; font-size:13px; opacity:0.7; margin-top:5px;">3 h</span></div>
            </div>
            
       </div>
            </q-item>


















            
          </q-list>
        </q-menu>





















          </div>



           <div class="q-ml-sm notificationIcon dropmenuBtn">
            <q-avatar size="45px" font-size="23px" color="secondary" text-color="black" v-ripple class="realbtn">
<svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height="20" width="20"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path></svg>
           <q-badge color="red" rounded floating>5</q-badge>
            </q-avatar>
             <q-tooltip content-class="" :offset="[10, 10]">
          Notifications
        </q-tooltip>








        <q-menu max-height="100%" min-width="370px" style="padding:0 20px !important;">
          <q-list style="width:370px; "  class="q-mt-md q-mr-sm dropdownMenu">
<div style="display:flex; align-items:center; justify-content:space-between;" class="q-pr-sm">
            <div class="q-ml-md" style="font-weight:bold; font-size:18px; opacity:0.8;">Notifications</div>
<q-icon name="more_horiz" size="25px" style="cursor:pointer; border-radius:100px;" class="q-pa-xs" v-ripple/>
</div>
            <div class="q-ml-md" style="font-weight:bold; font-size:16px; opacity:0.8; margin-top:10px;">New</div>

                 <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/elon.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          <img src="../assets/favorite.svg" alt="" style="position:absolute; bottom:-5px; right:0px; width:20px;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Elon Musk</span> reacted to your comment "#Dogetothemoon"</span>
                <div><span style="color:#1877F2; font-weight:500; font-size:13px; margin-top:5px;">41 minutes ago</span></div>
            </div>
            
       </div>
            </q-item>



            <div class="q-ml-md" style="font-weight:bold; font-size:16px; opacity:0.8; margin-top:10px;">Earlier</div>




  <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/page.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          <q-icon name="flag" color="white" size="18px" style="padding:6px 5px; background-color:#EE7315; border-radius:100px;  position:absolute; bottom:-10px; right:0px; width:20px;" />
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span >Share updates about <span style=" opacity:0.8; font-size:14px;font-weight:600;">Sulaiman Web Dev</span> by creating a new post, photo or video</span>
                <div><span style="color:#1877F2; font-weight:500; font-size:13px; margin-top:5px;">2 hours ago</span></div>
            </div>
            
       </div>
            </q-item>









    <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/jeff.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          <img src="../assets/like.svg" alt="" style="position:absolute; bottom:-5px; right:0px; width:20px;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Jeff Bezos</span> reacted to your photo.</span>
                <div><span style="color:#1877F2; font-weight:500; font-size:13px; margin-top:5px;">2.5 hours ago</span></div>
            </div>
            
       </div>
            </q-item>







    <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/bill.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          <img src="../assets/favorite.svg" alt="" style="position:absolute; bottom:-5px; right:0px; width:20px;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span ><span style=" opacity:0.8; font-size:14px;font-weight:600;">Bill Gates</span> reacted to your post.</span>
                <div><span style="color:#1877F2; font-weight:500; font-size:13px; margin-top:5px;">3 hours ago</span></div>
            </div>
            
       </div>
            </q-item>









            
    <q-item  v-ripple clickable style="margin-bottom:10px; padding-left:10px;  padding-top:10px; !important;" class="q-mt-xs q-mx-sm">
              <div style="display:flex; align-items:flex-start;">
            <div>
               
                <q-item style="width:50px; padding:0; height:50px;border-radius:50%; position:relative;">
          <img src="../assets/elon.jpg" style="width:100%; height:100%; object-fit:cover; object-position:center; border-radius:50%;">
          <img src="../assets/gift.png" alt="" style="position:absolute; bottom:-5px; right:0px; width:30px;">
          </q-item>
            </div>
            <div class="q-ml-sm">
                <span >Today is <span style=" opacity:0.8; font-size:14px;font-weight:600;">Elon Musk's </span> brithday</span>
                <div><span style="color:#1877F2; font-weight:500; font-size:13px; margin-top:5px;">4 hours ago</span></div>
            </div>
            
       </div>
            </q-item>
















            
          </q-list>
        </q-menu>













          </div>


           <div class="q-ml-sm dropmenuBtn" style="padding:0 !important;">
<q-avatar size="45px" font-size="23px" :color="btncolor" :text-color="iconcolor" icon="expand_more" v-ripple class="realbtn" />
        <q-tooltip content-class="" :offset="[10, 10]">
          Account
        </q-tooltip>

        <q-menu max-height="100%" min-width="370px" class="kkk" style="padding:0 20px !important; " >
          <q-list style="width:370px; " class="dropdownMenu">
                 <q-item  v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-sm q-mx-sm">
              <div style="display:flex; align-items:center;">
            <div>
                <q-avatar size="50px">
          <img src="../assets/avatar.jpg">
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-medium" style="opacity:0.8; font-size:19px;">Muhammad Sulaiman</span>
                <div><span>See Your Profile</span></div>
            </div>
            
       </div>
            </q-item>

 <hr style="opacity:0.5;width:90% !important;">





 <q-item v-ripple clickable style="padding-left:10px;  padding-top:10px; !important;" class="q-mt-sm q-mx-sm">
              <div style="display:flex; align-items:center;">
            <div>
                <q-avatar size="43px" icon="announcement" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Give Feedback</span>
                <div><span>Help Us Improve The New Facebook</span></div>
            </div>
            
       </div>
            </q-item>






 <hr style="opacity:0.5;width:90% !important;">







 <q-item  v-ripple clickable style="  display:flex; align-items:center; justify-content:space-between; padding-left:10px;  padding-top:10px; !important;" class="q-mt-sm q-mx-sm">
              <div style="display:flex; width:100%; align-items:center;">
            <div>
                <q-avatar size="43px" icon="settings" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Settings & Privacy</span>
            </div>
            
       </div>

       <q-icon name="arrow_forward_ios" size="20px" style="opacity:0.7;"/>
            </q-item>




 <q-item v-ripple clickable style="display:flex; align-items:center; justify-content:space-between; padding-left:10px;  padding-top:10px; !important;" class=" q-mx-sm">
              <div style="display:flex; width:100%; align-items:center;">
            <div>
                <q-avatar size="43px" icon="help" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Help & Support</span>
            </div>
            
       </div>

       <q-icon name="arrow_forward_ios" size="20px" style="opacity:0.7;"/>
            </q-item>








 <q-item v-ripple clickable style="display:flex; align-items:center; justify-content:space-between; padding-left:10px;  padding-top:10px; !important;" class=" q-mx-sm">
              <div style="display:flex; width:100%; align-items:center;">
            <div>
                <q-avatar size="43px" icon="dark_mode" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Display & Accessibility</span>
            </div>
            
       </div>

       <q-icon name="arrow_forward_ios" size="20px" style="opacity:0.7;"/>
            </q-item>




 <q-item v-ripple clickable style="margin-bottom:10px; display:flex; align-items:center; justify-content:space-between; padding-left:10px;  padding-top:10px; !important;" class=" q-mx-sm">
              <div style="display:flex; width:100%; align-items:center;">
            <div>
                <q-avatar size="43px" icon="logout" class="bg-secondary">
          
          </q-avatar>
            </div>
            <div class="q-ml-sm">
                <span class="text-weight-bold" style="opacity:0.8; font-size:15px;">Log Out</span>
            </div>
            
       </div>

            </q-item>








            
          </q-list>
        </q-menu>
          </div>

        

        


        </div>



      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {

data(){
  return{
    btncolor: 'secondary',
    iconcolor: 'black'
  }
},

 methods: {


        postbtnheader() {
            this.$root.$refs.post.foo();
        },




         storybtnheader() {
            this.$root.$refs.story.foo();
            
            
        },


    },

  
}
  


</script>


<style scoped>
@media (max-width:1105px){
input{
  display: none !important;
 
}

.search{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: 44px;
  width: 44px;
  padding-left: 0px;
  
  }

}

.uploadStory{
 opacity: 0.0; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;
 border-radius: 15px;
 cursor: pointer;
}

@media (max-width:621px){
  .dropdownMenu{
    display: none;
  }


  
}
.sulaiman{
  padding:0;
  border-radius: 100px;
  margin-top: 3px;
}
.sulaimanActive{
  padding:2px;
  box-shadow: 0 0 0 2px #1877F2ed;
}

</style>