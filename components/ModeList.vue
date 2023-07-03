<template>
  <div class="scew">
    <h4>Список всех режимов</h4>
    <ul class="pb-4">
      <li>2Н - задний привод</li>
      <li>Авто - штатный режим</li>
      <li>4Н - раздатка заблокирована</li>
      <li>2Н+4LOW - задний привод + пониженный ряд</li>
      <li>4LOW - штатный пониженный режим</li>
      <li>4Н+4LOW - раздатка заблокирована + пониженный ряд</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.scew {
  transform: skew(-10deg, 0deg);
}
</style>
