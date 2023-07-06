<template>
  <div>

    <HeaderBlock />
    <ButtonsBlock />

    <slot name="header">

    </slot>

    <slot name="main">

    </slot>

    <!-- <slot name="footer">

    </slot> -->

    <FooterBlock />

  </div>
</template>

<script setup lang="ts">
import HeaderBlock from '~/components/HeaderBlock.vue'
import ButtonsBlock from '~/components/ButtonsBlock.vue'
import FooterBlock from '~/components/FooterBlock.vue'

</script>
