<template>
  <div class="card-footer flex items-center justify-center">
    <div class="container flex items-center jusitfy-start flex-row">
      <img src="~/assets/img/logo.svg" class="logo-img" />
      <div class="strokes" />
      <div class="address">
        Jl. Vanya Lakeside G7/01<br>
Vanya Park, Bumi Serpong Damai (BSD)<br>Kabupaten Tangerang<br><br>

info@primeskills.id
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-footer {
  width: 100%;
  height: 289px;
  background: #000;
  .logo-img {
    height: 44px;
    object-fit: cover;
    margin-right:34px;
  }
  .strokes {
    border-right: 1px solid rgba(255, 255, 255, 0.27);
    height: 160px;
  }
  .address {
    margin-left: 30px;
    color: #FFF;
    font-family: 'okta';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
