<template>
  <!-- ***HEADER*** -->
  <section class="presentation">

  <b-navbar toggleable="lg" type="dark" class="nav-gradient justify-content-center">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="buttons w-100">
        <li class="nav-item"><a class="nav-link!" href="/">Версии</a></li>
        <li class="nav-item"><a class="nav-link!" href="/about">О SuperTOD</a></li>
        <li class="nav-item"><a class="nav-link!" href="/st3">ST-III</a></li>
        <li class="nav-item"><a class="nav-link!" href="/pluses">Плюсы</a></li>
        <li class="nav-item"><a class="nav-link!" href="/gallery">Галерея</a></li>
        <li class="nav-item"><a class="nav-link!" href="/reviews">Отзывы</a></li>
        <li class="nav-item"><a class="nav-link!" href="/buy">Купить</a></li>
        <li class="nav-item"><a class="nav-link!" href="/contacts">Контакты</a></li>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  </section>
</template>

<style lang="scss" scoped>

a {
  color: white;
  display: block;
  height: 64px;
  padding-top: 24px;
  text-align: center;
}

a:hover {
  text-decoration: none;
}

.buttons {
  display: flex;
  // height: 80px;
  // padding-top: 4px;
  justify-content: center;
  // height: 72px;
}
.nav-gradient {
    background: rgb(242,242,242);
    background: -moz-linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(231,231,231,1) 4%, rgba(104,143,141,1) 8%, rgba(104,143,141,1) 92%, rgba(231,231,231,1) 96%, rgba(104,143,141,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(231,231,231,1) 4%, rgba(104,143,141,1) 8%, rgba(104,143,141,1) 92%, rgba(231,231,231,1) 96%, rgba(104,143,141,1) 100%);
    /* background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(231,231,231,1) 4%, rgba(104,143,141,1) 8%, rgba(104,143,141,1) 92%, rgba(231,231,231,1) 96%, rgba(104,143,141,1) 100%); */
    background: linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(231,231,231,1) 4%, rgb(121 121 121) 8%, rgb(70 68 69) 92%, rgba(231,231,231,1) 96%, rgb(167 163 160) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#688f8d",GradientType=1);
}

// .nav-item {
//   width: 120px;
//   height: 64px;
// }

li {
  display: inline-block;
    vertical-align: top;
    margin: 4px 4px;
    transition: all .5s;
    width: 120px;
    height: 64px;
    box-shadow: 0 0 6px black;
    border-radius: 4px;
}

li::before {
  content: '';
    display: block;
    position: relative;
    width: 32px;
    background: #6a6f4d;
    height: 15px;
    border-radius: 4px;
    box-shadow: inset 0 0 4px #2b2f2d;
    left: 44px;
    top: 12px;
    margin-bottom: -8px;
}

li:hover {
    /* opacity: 0.6; */
    color: #555;
    /* background-color: white; */
    background: rgb(242,242,242);
    background: -moz-linear-gradient(0deg, rgba(242,242,242,0) 0%, rgba(104,143,141,1) 4%, rgba(255,255,255,1) 49%, rgba(104,143,141,1) 96%, rgba(255,255,255,0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(242,242,242,0) 0%, rgba(104,143,141,1) 4%, rgba(255,255,255,1) 49%, rgba(104,143,141,1) 96%, rgba(255,255,255,0) 100%);
    /* background: linear-gradient(0deg, rgba(242,242,242,0) 0%, rgba(104,143,141,1) 4%, rgba(255,255,255,1) 49%, rgba(104,143,141,1) 96%, rgba(255,255,255,0) 100%); */
    /* background: linear-gradient(0deg, rgba(242,242,242,0) 0%, rgb(76 74 75) 4%, rgb(203 202 200) 49%, rgb(71 70 70) 96%, rgba(255,255,255,0) 100%); */
    background: linear-gradient(0deg, rgba(242,242,242,0) 0%, rgb(76 74 75) 4%, rgb(88 87 86) 49%, rgb(71 70 70) 96%, rgba(255,255,255,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#ffffff",GradientType=1);
}

li:hover:before {
    background: #ccd97b;
}

</style>
