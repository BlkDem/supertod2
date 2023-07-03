<template>
  <DefaultLayout v-once>
    <template v-slot:main>
      <section name="versions">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="info-square" scale="1.2" class="mr-2"></b-icon> Выбери свой супертод!</h1>

            <!-- block -->

        <b-row class="py-4 version card-gradient-1">
          <b-col md="4">
            <div class="media">
              <div class="image-block">
                  <img class="img-verison" src="img/st3.jpg"></div>
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
            <div>
              <h2>Супертод 3 Standart</h2>
              <p class="device-description">Выносной пульт управления с OLED дисплеем и вольтметром. </p>
            </div>
            <div>

              <ModeList />
            </div>
                <b-button @click="goShop('https://umolab-devices.com/st')" class="btn btn-default">
                    Купить</b-button>
          </b-col>
        </b-row>


        <b-row class="row pt-4 pb-4 version card-gradient-2">
          <b-col md="4">
            <div class="media">
              <div class="image-block">
                      <img class="img-verison" src="img/item.jpg"></div>
              <!--<div class="media-body">-->

              <!--</div>-->
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
              <div>
                <h2>Версия LCD на место штатного "компаса"</h2>
                <p class="device-description">Устройство, гармонично вписывающееся в салон. Управляется кнопками штатного "компаса". </p>
              </div>
              <div>
                <ModeList />
              </div>
              <b-button @click="goShop('https://umolab-devices.com/lcd')" class="btn btn-default">
                  Купить
              </b-button>
              </b-col>
        </b-row>


        <!-- row -->

        <b-row class="pt-4 pb-4 version card-gradient-1">
          <b-col md="4">
            <div class="media">
              <div class="image-block">
                  <img class="img-verison" src="img/3.jpg"></div>
              <!--<div class="media-body">-->
                <!--Самая продвинутая, на сегодняшний момент, версия.  -->
                <!--</p>-->
              <!--</div>-->
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
              <div>
                <h2>Версия под селектор GM</h2>
                <p class="device-description">Версия устройства, позволяющая заменить штатный селектор Sorento на селектор GM</p>
                </div>
                <div>
                  <ModeList />
              </div>
              <b-button @click="goShop('https://umolab-devices.com/gm')"
                class="btn btn-default">
                Купить
              </b-button>
              <p class="text-dark h6 p-4">* режим 2Н+4LOW в версии под селектор GM является оциональным, и оговаривается при заказе</p>
          </b-col>
        </b-row>

        <!-- next -->

        <b-row class="pt-4 pb-4 version card-gradient-2">

          <b-col md="4">
            <div class="media">
              <div class="image-block">
                  <img class="img-verison" src="img/mini.jpg"></div>
              <!--<div class="media-body">-->
              <!--</div>-->
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
              <div>
                <h2>Версия "мини"</h2>
                <p class="device-description">Самая доступная, но полностью функциональная версия SuperTOD II / Супертод 2. </p>
                </div>
                <div>
                  <ModeList />
              </div>
                <b-button @click="goShop('https://umolab-devices.com/mini')"
                  class="btn btn-default">
                  Купить
                </b-button>
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

.device-description {
  color: $yellow-maxdark;
  // border-left: 4px solid;
  padding-left: 8px;
}

.img-verison {
  width: 20vw;
  border-radius: 8px;
}
.row {
  margin: 36px 36px;
  border-radius: 8px;
  box-shadow: 0 0 4px $yellow-active;
}

.image-block {
  padding: 4px;
  box-shadow: inset 0 0 16px $yellow-inactive;
  padding: 8px;
  border-radius: 12px;
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
