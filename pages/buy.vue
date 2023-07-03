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
                    <h2 class="text-center"> 4 900 ₽</h2>
                    <b-button block size="lg" bold>
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
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Упрощено программмирование</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Регулируемая яркость</li>
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
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Самая технологичная версия</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Максимальное удобство управления</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Качественный селектор</li>
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
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Выносной пульт управления </li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Яркий хорошо читаемый OLED дисплей</li>
                    <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Программируемые функции</li>
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

@mixin inset-shadow-4px {
  box-shadow: inset 0 0 4px black;
}

section {
  padding: 32px 0;
}
.buy-block {
  padding: 4px 4px;
  background-color: white;
  border-radius: 4px;
}

h1 {
  margin-top: 24px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  padding-top: 8px;
  // border: 2px solid $yellow-inactive;

  background-color: #6a6f4d;
  box-shadow: inset 0 0 8px grey;
  @include border-radius-4px;
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
  font-size: 2.5rem;
  color: $yellow-active;
}

h3 {
  // padding-bottom: 8px;
  padding-top: 4px;
  font-size: 1.3rem;
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
