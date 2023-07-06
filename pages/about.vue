<template>

  <DefaultLayout>
    <template v-slot:main>
      <section name="about">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="info-square" scale="1.2" class="mr-2"></b-icon> О SuperTOD</h1>
            <!-- about -->

            <b-row class="py-4 version card-gradient-2 rounded">

            <b-col md="4">
              <div class="main-img">
                <img src="/img/llogo.jpg" class="img-responsive">
              </div>
            </b-col>

            <b-col md="8" xs="12">
               <div>
               <h2>Устройства Umolab Group (BlkDem)</h2>
               <div class="m-4">SuperTOD II, или Супертод 2/3, устройство, предназначенное для ручного управления раздаточной коробкой автомобилей KIA Sorento BL 2002-2009, 2011 годов выпуска и других автомобилей,
               оснащенных совместимой трансмиссией. </div>
               </div>
              <div class="text-center">
                <b-button v-b-toggle.collapse-1 class="btn btn-secondary btn-sm w-100">Подробнее...</b-button>
              </div>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card class="p-2 m-2">
                  <p>
                    Устройство под селектор GM испытано и устанавливается <a href="https://www.youtube.com/watch?v=axon2CZBq1g" target=_blank> на автомобиль H-1 Grand Starex</a>.
                     Респект Илье <a href="https://www.youtube.com/channel/UCEcIj7tixjBa1t2lfLPB_oQ/channels" target=_blank>Sedov Auto Maker</a>!
                 <br>Версия Супертод 2 с селектором GM успешно опробована на Hyundai Terracan, а версия "мини" на SsangYong Rexton.
               </p><p>Устройство предназначено для управления раздаточной коробкой TOD (torque on demand - момент по требованию) производства BorgWarner и позволяет использовать дополнительные режимы,
               помимо основных двух: автоматического и режима пониженного ряда 4LOW.</p>

               <p>В процессе эксплуатации автомобилей с такой трансмиссией были выявлены определенные недостатки. В частности, подключение переднего моста происходит с задержкой,
               связанной с заложенной в алгоритм работы блока управления TOD программой. Задние колеса сначала должны войти в букс, чтобы запустился процесс подключения переднего моста. На это уходит время,
               которое в сложных условиях движения может сыграть злую шутку.
               Можно застрять там, где на заблокированном переднем мосту легко проезжаешь.</p>
               <p>Для устранения подобных недостатков были разработаны так называемые "супертоды". Устройства позволяли осуществить перехват управления блока управления TOD и использовать расширенный диапазон режимов раздаточной коробки,
               включающий 2Н и 4Н.</p>
               <p>SuperTOD II, или Супертод 2 / Супертод 3, - устройства производства BlkDem (Umolab),
                выделенные в отдельную ветвь эволюции, имеют несколько разновидностей. <a href='/'>Подробнее...</a></p>


                </b-card>
              </b-collapse>

             <div class="space"></div>

             <h2>Функции</h2>

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

.space {
  margin-top: 72px;
}

.main-img{
  width: 100%;
  margin-bottom: 32px;
  margin-left: 8px;
  box-shadow: inset 1px 1px 2px $yellow-maxdark;
  border-radius: 8px;
}

.img-responsive {
  width:100%;
  mix-blend-mode: overlay;
  border-radius: 8px;
}

.btn-secondary {
  filter: drop-shadow(2px 2px 2px black);
}

.btn-secondary:focus {
  border: 0;
}

.row {
  // margin-left: 35px;
  // margin-right: 35px;
  // margin-bottom: 35px;
  margin: 36px 0px;
}

@media (max-width: 500px) {
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
