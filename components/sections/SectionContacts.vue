<template>
      <section name="versions">
        <div class="container">
          <div class="page">
            <h1 class="text-left px-4"><b-icon icon="people-fill" scale="1.2" class="mr-2"></b-icon> Контакты</h1>

            <!-- block -->

        <b-row class="py-4 version card-gradient-1">
          <b-col md="4">
            <div class="media h-100">
              <!-- <div class="image-block ml-2">
                  <img class="img-verison" src="img/st3.jpg">
              </div> -->
            </div>
          </b-col>
          <b-col md="8" class="pt-2 card-version">
            <div class="mr-2">
              <h2>Связаться с нами</h2>
              <div class="body p-4">
                <div class="contact">
                  <a href="http://t.me/supertod" target="_blank" >
                    <b-icon icon="telegram" scale="2" class="mx-4"></b-icon>
                    Группа в Телеграм
                  </a>
                </div>
                <div class="contact">
                  <a href="https://wa.me/79039073355" target="_blank">
                    <b-icon icon="whatsapp" scale="2" class="mx-4"></b-icon>
                    Написать в WhatsApp
                  </a>
                </div>
                  <!-- <a href="viber://chat?number=79039073355"><b-icon icon="viber" scale="2" class="mr-2"></b-icon></a> -->
              </div>
            <div>

            </div>
            </div>

          </b-col>
        </b-row>

          </div>
        </div>
      </section>
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

ol {
  transform: skew(-10deg, 0deg);
}

li {
  list-style: none;
}

.device-description {
  color: $yellow-maxdark;
  font-size: 1.4rem;
  color: $yellow-active;
  text-shadow: 0 0 4px $yellow-maxdark;
  // border-left: 4px solid;
  padding-left: 8px;
}

.row {
  margin: 36px 0px;
  border-radius: 8px;
  box-shadow: 0 0 4px $yellow-active;
}

.image-block {
  padding: 4px;
  box-shadow: inset 0 0 16px $yellow-inactive;
  padding: 8px;
  border-radius: 12px;
}

.image-block img {
  width: 20vw;
  height: auto;
}
.btn {
  font-size: 1.5rem;
  box-shadow: 2px 2px 4px black;
  width: 200px;
}

.body {
  display: flex;
  flex-direction: column;
}

.body a {
  display: block;
  font-size: 1.2rem;
  width: 100%;
  height: 48px;
  /* margin-top: -8px;*/
}

.contact {
  margin: 16px 4px;
  background-color: rgba(255, 255, 255, 0.2);
  /* padding: 12px; */
  padding-top: 16px;
  border-radius: 8px;}

.contact:hover {
  background-color: #ffffff99;
}

.contact a:hover {
  // color: green;
}

.media {
  background: url(https://i.ibb.co/nDfq5TQ/HTB1r-AELVrrp-K1-Rj-SZTEq6-AWAVXah.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  mix-blend-mode: overlay;
  opacity: 0.9;
  margin-left: 8px;
  box-shadow: inset 0 0 8px grey;
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
