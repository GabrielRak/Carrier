<template>
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-r from-green to-light-green">
        <nav class="flex justify-around py-4 text-white text-lg">
            <RouterLink to="/parcels"><img src="../assets/Icons/parcel.png" class="w-7 h-7"/></RouterLink>
            <RouterLink to="/send"><img src="../assets/Icons/send.png" class="w-7 "/></RouterLink>
            <RouterLink to="/profile"><img src="../assets/Icons/settings.png" class="w-7 "/></RouterLink>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      active: String
    }
  }
  </script>