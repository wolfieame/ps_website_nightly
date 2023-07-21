<template>
  <div class="primeskills">
    <div class="btn-action flex items-center flex-row">
      <div class="btn-wa noselect flex items-center justify-center" @click="toWa()">
        <img src="~/assets/img/whatsapp.svg" class="icon-img" >
        Chat with us
      </div>
      <div class="btn-touch flex items-center justify-center" @click="toSection()">
        Get In Touch
      </div>
    </div>
    <SectionHero class="card-section" />
    <SectionWhyUs class="card-section" />
    <SectionProduct class="card-section" />
    <SectionPortfolio class="card-section" />
    <SectionAbout class="card-section" />
    <SectionFooter class="card-section" />
  </div>
</template>

<script setup>
function toWa() {
  window.open('https://api.whatsapp.com/send/?phone=62817719100&text&type=phone_number&app_absent=0', '_blank');
}
function toSection() {
  console.log('jump')
}
</script>

<style lang="scss" scoped>

.primeskills {
  .card-section {
    z-index:1;
    position:relative
  }
  .btn-action {
    z-index:2;
    position: fixed;
    top:30px;
    right:25px;
    .btn-wa {
      border-radius: 51px;
      background: #1DB410;
      width: 144px;
      height: 34px;
      padding-left: 14px;
      padding-right: 14px;
      color: #FFF;
      font-family: 'okta';
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      margin-right: 10px;
      cursor: pointer;
      .icon-img {
        margin-right: 7px;
      }
    }
    .btn-wa:hover {
      opacity: 0.8;
    }
    .btn-touch {
      cursor: pointer;
      border-radius: 51px;
      background: #3393EC;
      width: 120px;
      height: 34px;
      padding-left: 14px;
      padding-right: 14px;
      color: #FFF;
      font-family: 'okta';
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
    }
    .btn-touch:hover {
      opacity: 0.8;
    }
  }
}
</style>
