<template>
  <DefaultLayout>
    <template v-slot:main>
      <section name="versions">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="award" scale="1.2" class="mr-2"></b-icon> Выбери свой Супертод!</h1>

            <!-- block -->

        <b-row class="py-4 version card-gradient-1">
          <b-col md="4">
            <div class="media mt-0">
              <div class="image-block" style="background-image: url(/img/st3_400.jpg)">
                  <!-- <img class="img-verison" src="img/st3.jpg"> -->
              </div>
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
            <h2>Супертод 3 Standart</h2>
            <div class="m-4">
              <h4 class="mb-4 mx-4">Выносной пульт управления с OLED дисплеем и вольтметром. </h4>
              <div class="body">
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
              <div class="pay-btn pay-btn-left">
                <b-button @click="goShop('https://umolab-devices.com/st')" class="btn btn-default ml-4">
                  <b-icon icon="cart2" scale="1" class="mr-2"></b-icon> Купить
                </b-button>
              </div>
          </b-col>
        </b-row>


        <b-row class="row pt-4 pb-4 version card-gradient-2">
          <b-col md="8" class="pt-2 card-version">
            <h2>Версия LCD на место штатного "компаса"</h2>
              <div class="m-4">
                <h4 class="mb-4 mx-4">Устройство, гармонично вписывающееся в салон. Управляется кнопками штатного "компаса". </h4>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Обновленная версия 3.7 </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Устанавливается на место штатного "компаса" </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Управляется штатными кнопками</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Упрощено программмирование</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Регулируемая яркость</li>
                  </ol>
                </div>
              </div>
              <div>
                <ModeList />
              </div>
              <div class="pay-btn pay-btn-right">
                <b-button @click="goShop('https://umolab-devices.com/lcd')" class="btn btn-default mr-4">
                  <b-icon icon="cart2" scale="1" class="mr-2"></b-icon> Купить
                </b-button>
              </div>
          </b-col>
          <b-col md="4">
            <div class="media mb-0">
              <div class="image-block" style="background-image: url(/img/item.jpg)">
                      <!-- <img class="img-verison" src="img/item.jpg"> -->
              </div>
            </div>
          </b-col>

        </b-row>


        <!-- row -->

        <b-row class="pt-4 pb-4 version card-gradient-1">
          <b-col md="4">
            <div class="media  mt-0">
              <div class="image-block" style="background-image: url(/img/3.jpg); background-position='right'">
                  <!-- <img class="img-verison" src="img/3.jpg"> -->
              </div>
              <!--<div class="media ml-2-body">-->
                <!--Самая продвинутая, на сегодняшний момент, версия.  -->
                <!--</p>-->
              <!--</div>-->
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
            <h2>Версия под селектор GM</h2>
              <div class="m-4">
                <h4 class="mb-4 mx-4">Версия устройства, позволяющая заменить штатный селектор Sorento на селектор GM</h4>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Самая технологичная версия</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Максимальное удобство управления</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Качественный селектор</li>
                  </ol>
                  </div>
                </div>
                <div>
                  <ModeList />
              </div>
              <p class="h6 p-4 text-info">* режим 2Н+4LOW в версии под селектор GM является оциональным, и оговаривается при заказе</p>
            <div class="pay-btn pay-btn-left">
              <b-button @click="goShop('https://umolab-devices.com/gm')"
                class="btn btn-default ml-4">
                <b-icon icon="cart2" scale="1" class="mr-2"></b-icon> Купить
              </b-button>
            </div>
          </b-col>
        </b-row>

        <!-- next -->

        <b-row class="pt-4 pb-4 version card-gradient-2">

          <b-col md="8" class="pt-2 card-version">
            <h2>Версия "мини"</h2>
              <div class="m-4">
                <h4 class="mb-4 mx-4">Самая доступная, но полностью функциональная версия SuperTOD II / Супертод 2. </h4>
                <div class="body">
                <ol>
                  <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Самое доступное устройство</li>
                  <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Полный функционал</li>
                  <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Переключатель на три положения</li>
                </ol>
                </div>

                </div>
                <div>
                  <ModeList />
              </div>
              <div class="pay-btn pay-btn-right">
                <b-button @click="goShop('https://umolab-devices.com/mini')"
                  class="btn btn-default mr-4">
                  <b-icon icon="cart2" scale="1" class="mr-2"></b-icon> Купить
                </b-button>
              </div>
          </b-col>
          <b-col md="4">
            <div class="media mb-0">
              <div class="image-block" style="background-image: url(/img/mini.jpg)">
                  <!-- <img class="img-verison" src="img/mini.jpg"> -->
              </div>
            </div>
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

function scrollToTop () {
  window.scrollTo(0, 0);
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

li {
  list-style: none;
}

ol {
  transform: skew(-10deg, 0deg);
}

.device-description {
  color: $yellow-maxdark;
  // border-left: 4px solid;
  text-align: center;
  padding-left: 8px;
}

.img-verison {
  width: 20vw;
  border-radius: 8px;
}
.row {
  margin: 36px 0px;
  border-radius: 8px;
  box-shadow: 0 0 4px $yellow-active;
}

.image-block {
  //
  // padding: 4px;
  // box-shadow: inset 0 0 16px $yellow-inactive;
  // padding: 8px;
  // border-radius: 12px;
  //


  box-shadow: inset 2px 2px 4px $yellow-maxdark;
    // padding: 8px;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    background: url(/img/st3.jpg);
    background-position: center;
    background-size: cover;
}

.media {
  height: 100%;
  margin-left: 8px;
}

.btn {
  font-size: 1.5rem;
  box-shadow: 2px 2px 4px black;
  width: 200px;
  background-color: #aab28052;
  transition: all .5s;
}

.btn:hover {
  background-color: rgba(164, 184, 109, 0.4);
  border-radius: 5%/20%;
}

.pay-btn {
  padding-top: 12px;
  border-top: 2px solid $yellow-inactive;
}
.pay-btn-right {
  display: flex;
  flex-direction: row-reverse;
}
.pay-btn-left {

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

  .media {
    height: 300px;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-left: 0;
  }
}
</style>
