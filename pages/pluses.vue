<template>

  <DefaultLayout>
    <template v-slot:main>
      <section name="about">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="info-square" scale="1.2" class="mr-2"></b-icon> Плюсы</h1>
            <!-- about -->

            <b-row>



            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="mr-4 mt-2"></b-icon>
                <div>
                  Все версии устройства предлагают равный функционал, но обладают разными способами управления и наличием/отсутствием дисплея.
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="mr-4 mt-2"></b-icon>
                <div>
                  Индикация состояния блокировки переднего моста на приборной панели. И у самой доступной версии, и у самой продвинутой.                </div>
              </div>
            </b-col>

            </b-row>

            <b-row>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="mr-4 mt-2"></b-icon>
                <div>
                  Возможность выбрать устройство под свои потребности, вписать в интерьер салона.
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="mr-4 mt-2"></b-icon>
              <div>
                Можно выбрать версию с индикацией на место штатного компаса. В режиме "авто" будет отображаться напряжение бортовой сети.
              </div>
              </div>

            </b-col>
            </b-row>

            <b-row>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="mr-4 mt-2"></b-icon>
                <div>
                  Версия Супертод III "Standart" имеет выносной пульт управления, позволяющий расположить его в удобном месте в салоне.
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="d-flex">
                <b-icon icon="plus-square" scale="2" class="mr-4 mt-2"></b-icon>
              <div>
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
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 15px;
}

@media (max-width: 500px) {
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
