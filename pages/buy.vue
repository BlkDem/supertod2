<template>

  <DefaultLayout>
    <template v-slot:main>
      <section name="buy">
        <div class="container">
        <h1 class="text-center">Заказать устройство</h1>
        <b-row>
            <!-- <p class="lead text-center"></p> -->
            <!--standart-->
            <b-col xl="3" lg="6" xs="12" >
              <b-card class="price card-gradient">
                <div class="card-head">
                  <h3 class="text-center">Версия "мини"</h3>
                </div>
                <div class="image">
                  <!-- <img src="https://i.ibb.co/yBzMgmt/gm.png" alt=""> -->
                  <img src="https://i.ibb.co/bQvQXcf/mini.jpg" alt="">
                </div>

                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Самое доступное устройство</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Полный функционал</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Переключатель на три положения</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center"> 4 900 ₽</h2>
                    <b-button block size="lg">
                      <b-icon icon="cart2" scale="1" class="mr-2"></b-icon>
                      Купить
                    </b-button>
                  </div>
                  <!-- <a href="https://umolab-devices.com/index.php?route=product/product&amp;product_id=50" target="_blank"
                  class="btn btn-default w-100"> Заказать</a> -->
                </div>
              </b-card>
            </b-col>


            <b-col  xl="3" lg="6"  xs="12" >
              <b-card class="price card-gradient">
                <div class="card-head">
                  <h3 class="text-center">Версия LCD </h3>
                </div>
                <div class="image">
                  <img src="https://i.ibb.co/q7SbMp5/lcd.png" alt="">
                </div>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Обновленная версия 3.7 </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Устанавливается на место штатного "компаса" </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Управляется штатными кнопками</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Упрощено программмирование</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Регулируемая яркость</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center">8 700 ₽</h2>
                    <b-button block size="lg">
                      <b-icon icon="cart2" scale="1" class="mr-2"></b-icon>
                      Купить
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>

            <b-col  xl="3" lg="6"  xs="12" >
              <b-card class="price card-gradient">
                <div class="card-head">
                  <h3 class="text-center">Версия под GM</h3>
                </div>
                <div class="image">
                  <img src="https://i.ibb.co/yBzMgmt/gm.png" alt="">
                </div>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Самая технологичная версия</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Максимальное удобство управления</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Качественный селектор</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center">7 900 ₽</h2>
                    <b-button block size="lg">
                      <b-icon icon="cart2" scale="1" class="mr-2"></b-icon>
                      Купить
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>

            <b-col  xl="3" lg="6"  xs="12" >
              <b-card class="price card-gradient">
                <div class="card-head">
                  <h3 class="text-center">ST-3 Standart</h3>
                </div>
                <div class="image">
                  <img src="https://i.ibb.co/FX9h3R5/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29.jpg" alt="">
                </div>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Выносной пульт управления </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Яркий хорошо читаемый OLED дисплей</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2"></b-icon>Программируемые функции</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center">9 500 ₽</h2>
                    <b-button block size="lg">
                      <b-icon icon="cart2" scale="1" class="mr-2"></b-icon>
                      Купить
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </section>
    </template>
  </DefaultLayout>

</template>

<script setup lang="ts">
import DefaultLayout from '~/layout/DefaultLayout.vue'
</script>

<style lang="scss" scoped>

@mixin border-radius-4px {
  border-radius: 4px;
}

.buy-block {
  padding: 4px 4px;
  background-color: white;
  border-radius: 4px;
}

section {
  // background-image: url(/img/bg/bg3.jpg);
  // background: #2f3f4e url(/bg/tekstura-59.jpg) right no-repeat;
  background: #2f3f4e url(/bg/set-tekstura-shariki.jpg) right;
  background-size: 100% auto;
  padding: 32px 0;
}

h1 {
  background-color: #2f3f4e;
  margin: 8px 0;
  padding-bottom: 16px;
  padding-top: 8px;
  @include border-radius-4px;
}

h2 {
  font-size: 2.5rem;
  color: #ccd97b;
}

h3 {
  // padding-bottom: 8px;
  padding-top: 4px;
  font-size: 1.5rem;
}

ol {
  padding: 8px 8px;
}

.body {
  min-height: 303px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.body ol li {
  list-style: none;
}

.card {
  box-shadow: 0 0 8px black;
}
.card-gradient {
      /* background-color: white; */
      background: rgb(242,242,242);
    background: -moz-linear-gradient(0deg, rgba(242,242,242,0) 0%, rgba(104,143,141,1) 4%, rgba(255,255,255,1) 49%, rgba(104,143,141,1) 96%, rgba(255,255,255,0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(242,242,242,0) 0%, rgba(104,143,141,1) 4%, rgba(255,255,255,1) 49%, rgba(104,143,141,1) 96%, rgba(255,255,255,0) 100%);
    /* background: linear-gradient(0deg, rgba(242,242,242,0) 0%, rgba(104,143,141,1) 4%, rgba(255,255,255,1) 49%, rgba(104,143,141,1) 96%, rgba(255,255,255,0) 100%); */
    /* background: linear-gradient(0deg, rgba(242,242,242,0) 0%, rgb(76 74 75) 4%, rgb(203 202 200) 49%, rgb(71 70 70) 96%, rgba(255,255,255,0) 100%); */
    background: linear-gradient(0deg,
    rgba(242,242,242,0) 0%,
    rgb(76 74 75) 1%,
    rgb(88 87 86) 3%,
    rgb(71 70 70) 99%,
    rgba(255,255,255,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#ffffff",GradientType=1);
}

.card-head {
  background-color: #6a6f4d;
  box-shadow: inset 0 0 4px black;
  @include border-radius-4px;
}
.card-body {
  padding: 1rem;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.image {
  padding: 16px 4px;
}
.image img {
  width: 100%;
  height: auto;
  @include border-radius-4px;
  // padding: 8px 0px;
}

.card {
  @include border-radius-4px;
}
</style>
