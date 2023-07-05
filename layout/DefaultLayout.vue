<template>
  <div>

    <HeaderBlock />
    <ButtonsBlock />

    <slot name="header">

    </slot>

    <slot name="main">

    </slot>

    <slot name="footer">
      <!-- <div class="w-100 text-center to-top" @click="scrollToTop">
      <b-icon icon="arrow" scale="1.2" @click="scrollToTop" ></b-icon>
    </div> -->

    </slot>



    <FooterBlock />

  </div>
</template>

<script setup lang="ts">
import HeaderBlock from '~/components/HeaderBlock.vue'
import ButtonsBlock from '~/components/ButtonsBlock.vue'
import FooterBlock from '~/components/FooterBlock.vue'

</script>
