<template>
  <footer class="nav-gradient w-100 text-center footer">
    Umolab &copy; 2023
    <div class="top">
    <b-icon icon="arrow-up-circle" scale="2" @click="scrollToTop"></b-icon>
    </div>
  </footer>
</template>

<script setup lang="ts">
import HeaderBlock from '~/components/HeaderBlock.vue'
import ButtonsBlock from '~/components/ButtonsBlock.vue'
import FooterBlock from '~/components/FooterBlock.vue'

function scrollToTop () {
  const scrollStep = -window.scrollY / (1000 / 15)
  const scrollInterval = setInterval(() => {
    if ( window.scrollY != 0 ) {
      window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval);
    }, 15);
}

</script>

<style lang="scss" scoped>

.top {
  color: $yellow-active;
  cursor: pointer;
  position: absolute;
  right: 42px;
  // z-index: 101;
}

footer {
  display: flex;
  height: 64px;
  color: white;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.nav-gradient {
    background: rgb(242, 242, 242);
    /* background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(231,231,231,1) 4%, rgba(104,143,141,1) 8%, rgba(104,143,141,1) 92%, rgba(231,231,231,1) 96%, rgba(104,143,141,1) 100%); */
    background: linear-gradient(0deg, rgb(242, 242, 242) 0%, rgb(231, 231, 231) 4%, rgb(121, 121, 121) 8%, rgb(70, 68, 69) 92%, rgb(231, 231, 231) 96%, rgb(167, 163, 160) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#688f8d",GradientType=1);
}
</style>
