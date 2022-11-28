<script setup>
const {VITE_TITLE, VITE_LOGO, VITE_COLOR_BG, VITE_COLOR_TEXT, VITE_HEADING, VITE_CAPTION} = import.meta.env

const title = VITE_TITLE && VITE_TITLE!==''                ? VITE_TITLE :  "Mineral"

const env = {
  "logo":     VITE_LOGO       && VITE_LOGO!==''             ? VITE_LOGO : "https://static.mineralcdn.net/site/mineralcoid/logo_mineral_black@3x.png",
  "bg":       VITE_COLOR_BG   && VITE_COLOR_BG!==''     ? VITE_COLOR_BG : "#f9f9f9f9",
  "text":     VITE_COLOR_TEXT && VITE_COLOR_TEXT!=='' ? VITE_COLOR_TEXT : "#222222",
  "heading":  VITE_HEADING    && VITE_HEADING!==''       ? VITE_HEADING : "Be right back.",
  "caption":  VITE_CAPTION    && VITE_CAPTION!==''       ? VITE_CAPTION : `We're making updates to ${title}.<br/>Check back soon.`
}
</script>

<template>
  <div class="w-screen h-screen grid place-items-center" :style="`background-color:${env.bg}; color:${env.text}`">
    <div class="grid gap-y-4 place-items-center text-center">
      <img :src="env.logo" width="100"/>
      <h1 class="text-4xl font-bold" v-html="env.heading"></h1>
      <p class="text-sm leading-8" v-html="env.caption"></p>
    </div>
  </div>
</template>
