<template>
  <div class="container-section flex items-end justify-center">
    <div class="bg-img" />
    <div class="bg-grad-1" />
    <div class="bg-grad-2" />
    <img src="~/assets/img/logo.svg" class="logo-img" />
    <div class="body-section flex items-center justify-center flex-col">
      <div class="intro">INTRODUCING</div>
      <div class="company">PRIMESKILLS</div>
      <div class="space">SPACE</div>
      <div class="innovation">Where innovation meets immersion</div>
      <div class="skill">
        By transforming <span class="gaps">skill gaps</span> into opportuninites
        for <span class="growth">growth</span> and
        <span class="growth">excellence,</span><br />
        <span class="growth">we empower learners to succeed.</span>
      </div>
      <div
      @click="dialogState = true"
        class="btn-readmore flex items-center justify-center cursor-pointer"
      >
        READ MORE
      </div>
      <div class="btn-next cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
        >
          <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_37_83)" />
          <path
            d="M25 15L32.5 23L40 15"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_37_83"
              x1="33"
              y1="0"
              x2="33"
              y2="66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#438ED3" />
              <stop offset="1" stop-color="#104679" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
var dialogState = false
</script>
<style lang="scss" scoped>
.container-section {
  height: 100vh;
  width: 100%;
  .bg-img {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-image: url("../assets/img/bg-1.jpg");
  }
  .bg-grad-1 {
    z-index: 1;
    position: absolute;
    top: -20px;
    width: 100%;
    height: 118px;
    background: linear-gradient(
      180deg,
      rgba(7, 25, 73, 0) 0%,
      #071949 19.79%,
      rgba(7, 25, 73, 0) 100%
    );
  }
  .bg-grad-2 {
    z-index: 1;
    position: absolute;
    bottom: 120px;
    width: 100%;
    height: 369px;
    background: linear-gradient(180deg, rgba(7, 25, 73, 0) 0%, #071949 66.12%);
  }
  .body-section {
    z-index: 2;
    text-align: center;
    .intro {
      color: #fff;
      text-align: center;
      font-family: "Aspekta";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 8.51px;
    }
    .company {
      color: #fff;
      text-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
      font-family: "Aspekta";
      font-size: 76px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .space {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 43.47px;
    }
    .innovation {
      margin-top: 20px;
      color: #fff;
      font-family: "Aspekta";
      font-size: 20px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
    }
    .skill {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      .gaps {
        color: #fff;
        font-family: "okta";
        font-size: 16px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
      }
      .growth {
        color: #fff;
        font-family: "okta";
        font-size: 16px;
        font-style: italic;
        font-weight: 600;
        line-height: normal;
      }
    }
    .btn-readmore {
      margin-bottom: 70px;
      margin-top: 20px;
      border-radius: 6px;
      background: #546792;
      width: 135px;
      height: 30px;
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.885px;
    }
    .btn-next {
      position: absolute;
      bottom: -30px;
    }
  }
  .logo-img {
    z-index: 2;
    position: absolute;
    top: 17px;
  }
}
</style>
