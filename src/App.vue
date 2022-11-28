<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
const title = import.meta.env.VITE_TITLE
const logo = import.meta.env.VITE_LOGO
let bg = import.meta.env.VITE_COLOR_BG
if (!bg)
  bg = "#f9f9f9f9"

let text = import.meta.env.VITE_COLOR_TEXT
if (!text)
  text = "#222222"

let heading = import.meta.env.VITE_HEADING
if (!heading)
  heading = "Be right back."

let caption = import.meta.env.VITE_CAPTION
if (!caption)
  caption = `We're making updates to ${title}.<br/>Check back soon.`
</script>

<template>
  <div class="w-screen h-screen grid place-items-center" :style="`background-color:${bg}; color:${text}`">
    <div class="grid gap-y-4 place-items-center text-center">
      <img :src="logo" width="100"/>
      <h1 class="text-5xl font-bold" v-html="heading"></h1>
      <p class="text-sm" v-html="caption"></p>
    </div>
  </div>
</template>
