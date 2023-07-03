<template>

  <DefaultLayout>
    <template v-slot:main>
      <section name="about">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="info-square" scale="1.2" class="mr-2"></b-icon> Плюсы</h1>
            <!-- about -->
            <!-- <div class="mr-2"></div> -->
            <div class="img-header-block">
              <img class="w-100 img-header" src="/img/bg-header.jpg" alt="">
            </div>
            <b-row>
            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="ml-2 mt-2 yellow-active"></b-icon>
                <div class="ml-4">
                  Все версии устройства предлагают равный функционал, но обладают разными способами управления и наличием/отсутствием дисплея.
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="ml-2 mt-2 yellow-active"></b-icon>
                <div class="ml-4">
                  Индикация состояния блокировки переднего моста на приборной панели. И у самой доступной версии, и у самой продвинутой.                </div>
              </div>
            </b-col>

            </b-row>

            <b-row>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="ml-2 mt-2 yellow-active"></b-icon>
                <div class="ml-4">
                  Возможность выбрать устройство под свои потребности, вписать в интерьер салона.
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="ml-2 mt-2 yellow-active"></b-icon>
              <div class="ml-4">
                Можно выбрать версию с индикацией на место штатного компаса. В режиме "авто" будет отображаться напряжение бортовой сети.
              </div>
              </div>

            </b-col>
            </b-row>

            <b-row>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="ml-2 mt-2 yellow-active"></b-icon>
                <div class="ml-4">
                  Версия Супертод III "Standart" имеет выносной пульт управления, позволяющий расположить его в удобном месте в салоне.
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="ml-2 mt-2 yellow-active"></b-icon>
              <div class="ml-4">
                Промышленная электронная база и заводское изготовление плат обеспечивают надежное функционирование устройств.              </div>
              </div>
            </b-col>

        </b-row>

            <!-- about -->
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

.img-header {
  mix-blend-mode: plus-lighter;
  border-radius: 8px;
}

.img-header-block {
  box-shadow: inset 0 0 8px $yellow-inactive;
  border-radius: 4px;
  // margin-bottom: 24px;
  // margin-left: 80px;
  // margin-right: 80px;
  margin: 64px 48px;
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

  background-color: #6a6f4d;
  box-shadow: inset 0 0 8px grey;
  @include border-radius-4px;
}
.row {
  // margin-left: 35px;
  // margin-right: 35px;
  // margin-bottom: 35px;
  margin: 36px 36px;
}

@media (max-width: 500px) {
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
