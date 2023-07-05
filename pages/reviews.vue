<template>
  <DefaultLayout>
    <template v-slot:main>
      <section name="reviews">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="people" scale="1.2" class="mr-2"></b-icon> Отзывы</h1>

            <div class="p-4 card-gradient-1 rounded">
            <b-row>
              <b-col md="6">
                <div class="review-item">
                  <div class="pull-left ava">
                    <img src="https://a.d-cd.net/3df153cs-100.jpg">
                  </div>
                  <div class="review-body">
                    <blockquote>
                      <h4>Версия LCD</h4>
                    Впечатления:
  1. при езде по лесной снежной дороге в режиме 4Н едет гораздо увереннее, чем в Авто. В Авто если начало стаскивать с колеи, то перед не успевал подключаться. Когда 4Н такого нет — идет как по рельсам.
  2. Вспомнил детство. как я на ГАЗ-21 крутил на заднем приводе… И вообще я не люблю передний привод, или задний или полный. Теперь полная сбыча мечт :)
  3. Огромное спасибо Разработчику за такую функциональную штуку!
  Буду ездить и радоваться…

  За все это время выяснилось еще одно очень замечательное свойство СуперТода — в режиме АВТО по яркости свечения лампы на панели я всегда знаю, как сильно зажата муфта в данный момент. Очень полезная и познавательная информация.

  За 2 года пользования этой штукой — только положительные эмоции и благодарность автору!
                    </blockquote>
                    <p class="review-sign">AlexdPenza <a href='https://www.drive2.ru/l/5494774/' target='_blank'>ссылка на drive2.ru</a></p>
                  </div>
                </div>
            </b-col>


            <b-col md="6">
              <div class="review-item">
                <div class="pull-left ava"><img src="https://a.d-cd.net/4202a2s-100.jpg" alt=""></div>
                <div class="review-body">
                  <blockquote>
                    <h4>Версия под селектор GM</h4>
  Из положительных эмоций во время первых испытаний на дороге нужно отметить появившуюся легкость в руле и при разгоне в режиме 2Н!
  Очень надеюсь, что данный девайс положительно скажется как на расходе топлива так и на износе отключенных в режиме 2Н агрегатах.
  А пока расход составляет 13,8 л на сотню в смешанном цикле. Всем удачи! Цена вопроса: 6000 руб. Пробег: 176100 км.

                  </blockquote>
                   <p class="review-sign">Sorento596 <a href='https://www.drive2.ru/l/6758514/' target='_blank'>ссылка на drive2.ru</a></p>
                </div>
              </div>
            </b-col>

          </b-row>
          <!-- row -->
          <b-row>
            <b-col md="6">
              <div class="review-item">
                <div class="pull-left ava"><img src="https://a.d-cd.net/ad77g4s-100.jpg" alt=""></div>
                <div class="review-body">
                  <blockquote>
                      <h4>Версия LCD</h4>
                    Закончил к 10 вечера, организм уже не мог пить пыво.
  Переключения незаметны вообще. Проверял по снегу на заднем приводе, с отключенном ЕСП, шлейфовал на месте, поставил 4х4 и как на асфальте :)
  Короче круто.
                  </blockquote>
                  <p class="review-sign">syavlk <a href='https://www.drive2.ru/l/2617934/' target='_blank'>ссылка на drive2.ru</a></p>
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <div class="review-item">
                <div class="pull-left ava"><img src="https://a.d-cd.net/211b4b4s-100.jpg" alt=""></div>
                <div class="review-body">
                  <blockquote>
                       <h4>Версия "мини"</h4>
                    Из ощущений владения данным девайсом- Рулится гораздо легче, радиус разворота меньше. Индикация режимов тоже радует. На 2вд нет индикации, на авто слабо светит на 4 вд ярко. Полезное приобретение с легкой инсталляцией за небольшие деньги.
                  </blockquote>
                  <p class="review-sign">diz81 <a href='https://www.drive2.ru/l/9573999/' target='_blank'>ссылка на drive2.ru</a></p>
                </div>
              </div>
            </b-col>

          </b-row>


        </div>
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

.pull-left {
  float: left;
  padding-right: 8px;
}

.review-sign {
  color: #dcddde;
  background-color: #fffdc81a;
  font-style: italic;
}

@media (max-width: 500px) {
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

</style>
