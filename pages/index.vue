<template>
  <DefaultLayout>
    <template v-slot:header>
      <HeaderBlock />
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import Vue from 'vue'

import DefaultLayout from '~/layout/DefaultLayout.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'

const c_name: string = 'my string'

</script>
