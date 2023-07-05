<template>
      <section name="st3">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="bullseye" scale="1.2" class="mr-2"></b-icon> Supertod Супертод III</h1>

            <!-- block -->

        <b-row class="py-4 version card-gradient-1">
          <b-col md="4">
            <div class="media">
              <!-- <div class="image-block ml-2 mt-4">
                  <img class="img-verison" src="/img/st3_400.jpg">
              </div> -->
            </div>
          </b-col>
          <b-col md="8" class="card-version">
            <div class="">
              <h2>Новинка! SuperTOD III Standart</h2>
              <h4 class="mb-4 mx-2">Усройство оснащено выносным пультом управления с OLED дисплеем и функцией вольтметра. </h4>
              <div class="body mb-4">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Выносной пульт управления </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Яркий хорошо читаемый OLED дисплей</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Программируемые функции</li>
                  </ol>
                </div>
            </div>
            <div>

              <ModeList />
            </div>

            <div class="st3-images">
              <!-- <a href="https://ibb.co/gdGr9kS"><img src="https://i.ibb.co/gdGr9kS/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29.jpg" alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29" border="0" /></a> -->
              <!-- <a href="https://ibb.co/vLJ7GNP"><img src="https://i.ibb.co/vLJ7GNP/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-30.jpg" alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-30" border="0" /></a> -->
              <!-- <a href="https://ibb.co/hDq33Jc"><img src="https://i.ibb.co/hDq33Jc/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-28.jpg" alt="phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-28" border="0" /></a> -->
          <img src="https://i.ibb.co/hDq33Jc/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-28.jpg" />
          <img src="https://i.ibb.co/vLJ7GNP/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-30.jpg" />
          <img src="https://i.ibb.co/gdGr9kS/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29.jpg" />
        </div>

              <div class="text-left mx-4">
                <b-button @click="goShop('https://umolab-devices.com/st')" class="btn btn-default">
                  Купить
                </b-button>
              </div>
          </b-col>
        </b-row>





            <!-- block -->

          </div>
        </div>
      </section>
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

.media {
  display: flex;
  height: 100%;
  align-items: flex-start;
  background: url(/img/st3_400.jpg);
  background-size: 200%;
  padding-left: 16px;
  border-radius: 8px;
  margin-left: 8px;
  box-shadow: inset 1px 1px 2px $yellow-maxdark;
  // filter: blur(4px);
}

.st3-images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 32px;
}

.st3-images img {
  width: 250px;
  height: auto;
  padding: 4px;
  box-shadow: inset 0 0 16px $yellow-inactive;
  padding: 8px;
  border-radius: 12px;

}
.row {
  margin: 36px 0px;
  border-radius: 8px;
  box-shadow: 0 0 4px $yellow-active;
}

.image-block {
  padding: 4px;
  box-shadow: inset 0 0 16px $yellow-inactive;
  padding: 8px;
  border-radius: 12px;
}

.image-block img {
  width: 20vw;
  height: auto;
}
.btn {
  font-size: 1.5rem;
  box-shadow: 2px 2px 4px black;
  width: 200px;
}

@media (max-width: 500px) {
  .row {
    margin-left: 0px;
    margin-right: 0px;
  }
  .img-verison {
    width: 100%;
  }
  .btn {
    width: 100%;
  }

  .st3-images img {
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

.card-gradient-2 {
    background: rgb(175,208,207);
    background: -moz-linear-gradient(45deg, rgba(175,208,207,1) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(45deg, rgba(175,208,207,1) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(45deg, rgb(128 128 128 / 63%) 0%, rgb(194 190 190 / 88%) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#afd0cf",endColorstr="#ffffff",GradientType=1);
}
</style>
