<template>

  <DefaultLayout>
    <template v-slot:main>
      <section name="about">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="info-square" scale="1.2" class="mr-2"></b-icon> О SuperTOD</h1>
            <!-- about -->

            <b-row>

            <b-col md="4">
              <div class="main-img">
                <img src="img/llogo.jpg" class="img-responsive">
              </div>
            </b-col>

            <b-col md="8" xs="12">
               <div>
               <h3>Устройства Umolab Group (BlkDem)</h3>
               <p>SuperTOD II, или Супертод 2/3, устройство, предназначенное для ручного управления раздаточной коробкой автомобилей KIA Sorento BL 2002-2009, 2011 годов выпуска и других автомобилей,
               оснащенных совместимой трансмиссией. </p>
               </div>
              <p>
                <b-button v-b-toggle.collapse-1 class="w-100">Читать далее...</b-button>
                 <!-- <button class="btn btn-default w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                     Читать далее...
                 </button> -->
              </p>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <!-- <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button> -->
                  <!-- <b-collapse id="collapse-1-inner" class="mt-2">
                    <b-card>Hello!</b-card>
                  </b-collapse> -->
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
               <p>SuperTOD II, или Супертод 2 / Супертод 3, - устройства производства BlkDem (Umolab), выделенные в отдельную ветвь эволюции, имеют несколько разновидностей. О них - ниже.</p>


                </b-card>
              </b-collapse>

             <div class="collapse" id="collapseExample">
                 <div class="card card-body">

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
               <p>SuperTOD II, или Супертод 2 / Супертод 3, - устройства производства BlkDem (Umolab), выделенные в отдельную ветвь эволюции, имеют несколько разновидностей. О них - ниже.</p>
                 </div>
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
.main-img{
  width: 100%;
}
.img-responsive {
  width:100%;
  mix-blend-mode: difference;
}
</style>
