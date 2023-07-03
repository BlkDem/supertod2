<template>
  <!-- ***HEADER*** -->
  <header class="presentation">
    <b-container>
      <b-row class="row-center">
        <!-- <b-col md="6" ></b-col> -->
        <b-col md="6" offset-lg="6" class="logo-panel">

          <div class="mb-4">
            <img src="img/logo2.png" class="logo" />
          </div>
          <ul class="check-list list-unstyled logo-ul">
            <li><b-icon icon="check-square" scale="1"></b-icon>
              Ручное управление раздаточной коробкой</li>
            <li><b-icon icon="check-square" scale="1"></b-icon>
              Удовольствие от "классического" привода 2Н</li>
            <li><b-icon icon="check-square" scale="1"></b-icon>
              Надежность прохождения сложных участков в 4Н</li>
          </ul>
          <h3 class="shop-link">
            <b-button block size="lg">
              <i class="fas fa-shopping-cart"></i>
              Купить
            </b-button></h3>
          </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<style lang="scss" scoped>

li {
  font-size: 1.2rem;
  // line-height: 2;
}

// li::before {
//   content: '►';
//   margin: 0 4px;
// }
.logo-panel {
  display: flex;
  flex-direction: column;
  filter: drop-shadow(2px 4px 6px black);
  max-width: 91vw;
  height: 400px;
  justify-content: space-around;
}

.presentation {
  background: #2f3f4e url(/img/bg3.jpg) right no-repeat;
  background-size: 100% auto;
  color: white;
  text-shadow: 0 1px 0 rgba(0,0,0,0.3);
  height: 400px;
}

@media screen and (max-width: 500px) {
  .presentation {
    background-size: 150% auto;
  }
}

.check-list {
  padding-left: 24px;
  background-color: $check-list-color;
  padding-top: 12px;
}
.logo {
    /*margin-left: -28px;*/
    /*margin-top: -11px;*/
    /*margin-bottom: 20px;*/
  width: 100%;
}

.logo-ul {
    /* transform: skew(-30deg, 15deg); */
    transform: skew(-10deg, 0deg);
    padding-bottom: 16px;
    // margin-bottom: 36px;
}

.row-center {
  justify-content: center;
}
</style>
