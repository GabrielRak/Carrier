<template>
    <div>
      <video ref="video" autoplay playsinline webkit-playsinline muted hidden></video>
      <canvas ref="canvas" width="1280" height="720" class="bg-black rounded-3xl"></canvas>
  
      <div class="flex items-center justify-center py-4">
          <button class="px-4 bg-emerald-500 rounded text-white" @click="capture">Capture</button>
      </div>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const canvas = ref(null);
  const video = ref(null);
  let ctx = null;
  
  const constraints = {
      audio: false,
      video: true
  };
  
  onMounted(async () => {
      if (video.value && canvas.value) {
          ctx = canvas.value.getContext("2d");
          try {
              const stream = await navigator.mediaDevices.getUserMedia(constraints);
              setStream(stream);
          } catch (error) {
              console.error("Failed to get media stream", error);
          }
      }
  });
  
  function setStream(stream) {
      video.value.srcObject = stream;
      video.value.play();
      requestAnimationFrame(draw);
  }
  
  function draw() {
      if (ctx) {
          ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
          requestAnimationFrame(draw);
      }
  }
  
  function capture() {
      // Functionality to trigger snapshot or other actions
  }
  </script>
  