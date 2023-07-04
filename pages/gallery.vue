<template>
  <DefaultLayout v-once>
    <template v-slot:main>
      <section name="gallery">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="info-square" scale="1.2" class="mr-2"></b-icon> Галерея</h1>

            <!-- block -->

        <div class="py-4 version card-gradient-1">
          <div md="8" class="pt-2 card-version">
            <div class="m-4">
              <h2>Версии</h2>
              <div class="gallery-images">
                <a href="https://ibb.co/VMNzkyQ" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/VMNzkyQ/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-1-8.jpg"
                    alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-1-8" border="0"></a>
                <a href="https://ibb.co/hDq33Jc" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/hDq33Jc/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-28.jpg"
                    alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-28" border="0"></a>
                <a href="https://ibb.co/bb2Zdk5" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/bb2Zdk5/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-1-9.jpg"
                  alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-1-9" border="0"></a>
                <a href="https://ibb.co/gdGr9kS" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/gdGr9kS/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29.jpg"
                  alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29" border="0"></a>
                <a href="https://ibb.co/vLJ7GNP" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/vLJ7GNP/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-30.jpg"
                  alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-30" border="0"></a>
                <a href="https://ibb.co/sgsRbkc" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/sgsRbkc/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-31.jpg"
                  alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-31" border="0"></a>
                <a href="https://ibb.co/n7yMGwD" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/n7yMGwD/llogo.jpg" alt="llogo" border="0"></a>
                <a href="https://ibb.co/nR9bbqY" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/nR9bbqY/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-32.png"
                  alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-32" border="0"></a>
                <a href="https://ibb.co/2ggvWDt" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/2ggvWDt/st.png" alt="st" border="0"></a>
                <a href="https://ibb.co/ck8kQ4m" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/ck8kQ4m/mini.jpg" alt="mini" border="0"></a>
                <a href="https://ibb.co/RYFLpcy" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/RYFLpcy/lcd.png" alt="lcd" border="0"></a>
                <a href="https://ibb.co/4gbD4wz" target="_blank" class="p-1">
                  <img src="https://i.ibb.co/4gbD4wz/gm.png" alt="gm" border="0"></a>
              </div>
            </div>
            <div>

            </div>

          </div>
        </div>





            <!-- block -->

          </div>
        </div>
      </section>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
// import Vue from 'vue'

import DefaultLayout from '~/layout/DefaultLayout.vue'
import ModeList from '~/components/ModeList.vue'

const c_name: string = 'my string'

function goShop(link: string) {
  window.location.href = link;
}

</script>

<style lang="scss" scoped>

@mixin border-radius-4px {
  border-radius: 4px;
}

@mixin inset-shadow-4px {
  box-shadow: inset 0 0 4px black;
}


section {
  padding: 32px 0;
}

h1 {
  margin-top: 24px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  padding-top: 8px;
  // border: 2px solid $yellow-inactive;

  background-color: $yellow-inactive;
  box-shadow: inset 0 0 8px grey;
  @include border-radius-4px;
}

h2 {
  background-color: white;
  color: $yellow-dark;
  text-align: center;
  padding-bottom: 8px;
  padding-top: 4px;
  border-radius: 8px;
}

ol {
  transform: skew(-10deg, 0deg);
}

li {
  list-style: none;
}

.device-description {
  color: $yellow-maxdark;
  font-size: 1.4rem;
  color: $yellow-active;
  text-shadow: 0 0 4px $yellow-maxdark;
  // border-left: 4px solid;
  padding-left: 8px;
}

.gallery-images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 32px;
}

// .images img {
//   width: 250px;
//   height: auto;
//   padding: 4px;
//   box-shadow: inset 0 0 16px $yellow-inactive;
//   padding: 8px;
//   border-radius: 12px;

// }

@media (max-width: 500px) {
  .btn {
    width: 100%;
  }
}

.card-gradient-1 {
    background: rgb(217,210,199);
    background: -moz-linear-gradient(45deg, rgba(217,210,199,1) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(45deg, rgba(217,210,199,1) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(45deg, rgb(128 128 128) 0%, rgb(194 190 190 / 48%) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d9d2c7",endColorstr="#ffffff",GradientType=1);
}

</style>
