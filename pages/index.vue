<template>
  <DefaultLayout>
    <template v-slot:header>
      <HeaderBlock />
      <ButtonsBlock />
    </template>
    <template v-slot:footer>
      <FooterBlock />
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import Vue from 'vue'

import DefaultLayout from '~/layout/DefaultLayout.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'
import ButtonsBlock from '~/components/ButtonsBlock.vue'
import FooterBlock from '~/components/FooterBlock.vue'

const c_name: string = 'my string'

</script>
