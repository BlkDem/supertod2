<template>
  <DefaultLayout>
    <template v-slot:main>
      <section name="video">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="images" scale="1.2" class="mr-2"></b-icon> Видео</h1>

            <!-- block -->
            <b-row>

              <b-col md="6" class="media text-center">
                <iframe frameborder="0" src="//www.youtube.com/embed/zgi4nCJjC-4" width="100%" height="360" class="note-video-clip"></iframe>
              </b-col>

              <b-col md="6" class="media text-center">
                <iframe frameborder="0" src="//www.youtube.com/embed/D13BibxbTvw" width="100%" height="360" class="note-video-clip"></iframe>
              </b-col>

              <b-col md="6" class="media text-center">
                <a href="https://www.youtube.com/embed/axon2CZBq1g">
                  <img  style="border: none;" src="https://i.ytimg.com/vi/axon2CZBq1g/hqdefault.jpg">
                </a>
              </b-col>

            </b-row>


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
  .gallery-images img {
    width: 90vw;
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
