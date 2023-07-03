<template>
  <div class="scew">
    <h4>Список всех режимов</h4>
    <ul class="pb-4">
      <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>2Н - задний привод</li>
      <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>Авто - штатный режим</li>
      <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>4Н - раздатка заблокирована</li>
      <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>2Н+4LOW - задний привод + пониженный ряд</li>
      <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>4LOW - штатный пониженный режим</li>
      <li><b-icon icon="check-square" scale="1" class="mr-2 yellow-active"></b-icon>4Н+4LOW - раздатка заблокирована + пониженный ряд</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.scew {
  transform: skew(-10deg, 0deg);
}

li {
  list-style: none;
}
</style>
