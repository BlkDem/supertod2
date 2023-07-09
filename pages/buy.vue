<template>

  <DefaultLayout>
    <template v-slot:main>
      <section name="buy">
        <div class="container">
          <div class="page">
        <h1 class="text-left px-4"><b-icon icon="cart2" scale="1.2" class="mr-2"></b-icon> Купить</h1>
        <!-- <div class="h1-selected"></div> -->
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
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Самое доступное устройство</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Полный функционал</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Переключатель на три положения</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center price-cost price_gradient"> 4 900 ₽</h2>
                    <b-button @click="goShop('https://umolab-devices.com/mini')" block size="lg" bold>
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
                  <h3 class="text-center">Версия LCD </h3>
                </div>
                <div class="image">
                  <img src="https://i.ibb.co/q7SbMp5/lcd.png" alt="">
                </div>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Обновленная версия 3.7 </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Устанавливается на место штатного "компаса" </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Управляется штатными кнопками</li>
                    <!-- <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Упрощено программмирование</li> -->
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Регулируемая яркость</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center price-cost price_gradient">8 700 ₽</h2>
                    <b-button @click="goShop('https://umolab-devices.com/lcd')" block size="lg">
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
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Самая технологичная версия</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Максимальное удобство управления</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Качественный селектор</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center price-cost price_gradient">7 900 ₽</h2>
                    <b-button @click="goShop('https://umolab-devices.com/gm')" block size="lg">
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
                <div class="image" style="margin-bottom: 10px;">
                  <img src="https://i.ibb.co/FX9h3R5/phpthumb-ctx-web-w-1000-h-1000-zc-0-far-q-90-src-assets-gallery-4-29.jpg" alt="">
                </div>
                <div class="body">
                  <ol>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Выносной пульт управления </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Яркий хорошо читаемый OLED дисплей</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Программируемые функции</li>
                  </ol>
                  <div class="buy-block">
                    <h2 class="text-center price-cost price_gradient">9 500 ₽</h2>
                    <b-button @click="goShop('https://umolab-devices.com/st')" block size="lg">
                      <b-icon icon="cart2" scale="1" class="mr-2"></b-icon>
                      Купить
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
        </div>
      </section>
    </template>
  </DefaultLayout>

</template>

<script setup lang="ts">
// import { omMounted } from 'vue'
import DefaultLayout from '~/layout/DefaultLayout.vue'
import { getData } from '~/services/DataService'

function goShop(link: string) {
  window.location.href=link
}

import { onMounted } from 'vue';
  onMounted(async () => {
    const response = await getData();
    console.log(response?.data);
  })
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

.price-cost {
  font-size: 2.5rem;
  background-color: $yellow-active;
  color: #646331;
}

.buy-block {
  padding: 8px 8px;
  background-color: white;
  border-radius: 8px;
}

.buy-block button {
  font-weight: 700;

}

.h1-selected {
  position: absolute;
  background-color: $yellow-inactive;
  // background-color: $yellow-active;
  padding: 2px 2px;
  width: 59px;
  height: 28px;
  margin-top: -74px;
  margin-left: 25px;
  @include inset-shadow-4px;
  @include border-radius-4px;
}

h2 {
  padding-left: 0;
}

h3 {
  // padding-bottom: 8px;
  // padding-top: 4px;
  padding-top: 12px;
    padding-bottom: 4px;
    font-size: 1.3rem;
  font-size: 1.3rem;
  mix-blend-mode: plus-lighter;
}

ol {
  padding: 8px 8px;
}

.btn {
  font-size: 1.5rem;
  box-shadow: 2px 2px 4px black;
  // width: 200px;
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

.price {
  border-radius: .5rem;
}
.image {
  // padding: 16px 4px;
  border-radius: 4px;
}

.image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: inset 8px 8px 8px #333;
  padding: 2px;
  margin-top: 8px;
  background-color: #555;
}

.card {
  @include border-radius-4px;
}


</style>
