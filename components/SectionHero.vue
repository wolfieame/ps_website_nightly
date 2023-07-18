<template>
  <div class="container-section flex items-end justify-center">
    <div class="bg-img" />
    <div class="bg-grad-1"/>
    <div class="bg-grad-2"/>
    <img src="~/assets/img/logo.svg" class="logo-img" >
    <div class="btn-action flex items-center flex-row">
      <div class="btn-wa noselect flex items-center justify-center">
        <img src="~/assets/img/whatsapp.svg" class="icon-img" >
        Chat with us
      </div>
      <div class="btn-touch flex items-center justify-center">
        Get In Touch
      </div>
    </div>
    <div class="body-section flex items-center justify-center flex-col">
      <div class="intro">
        INTRODUCING
      </div>
      <div class="company">
        PRIMESKILLS
      </div>
      <div class="space">
        SPACE
      </div>
      <div class="innovation">
        Where innovation meets immersion
      </div>
      <div class="skill">
        By transforming  skill gaps into opportuninites for  growth and  excellence,<br>
        we empower learners to succeed.
      </div>
      <div class="btn-readmore flex items-center justify-center">
        READ MORE
      </div>
      <div class="btn-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
          <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_37_83)"/>
          <path d="M25 15L32.5 23L40 15" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <defs>
            <linearGradient id="paint0_linear_37_83" x1="33" y1="0" x2="33" y2="66" gradientUnits="userSpaceOnUse">
              <stop stop-color="#438ED3"/>
              <stop offset="1" stop-color="#104679" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container-section {
    height:100vh;
    width:100%;
    .bg-img {
      background-size:cover;
      background-position: center center ;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index:1;
      background-image: url("../assets/img/bg-1.jpg");
    }
    .bg-grad-1 {
      z-index: 1;
      position: absolute;
      top:-20px;
      width: 100%;
      height: 118px;
      background: linear-gradient(180deg, rgba(7, 25, 73, 0.00) 0%, #071949 19.79%, rgba(7, 25, 73, 0.00) 100%);
    }
    .bg-grad-2 {
      z-index: 1;
      position: absolute;
      bottom:120px;
      width: 100%;
      height: 369px;
      background: linear-gradient(180deg, rgba(7, 25, 73, 0.00) 0%, #071949 66.12%);
    }
    .body-section {
      z-index:2;
      text-align: center;
      .intro {
        color: #FFF;
        text-align: center;
        font-family: 'Aspekta';
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 8.51px;
      }
      .company {
        color: #FFF;
        text-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
        font-family: 'Aspekta';
        font-size: 76px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      .space {
        color: #FFF;
        text-align: center;
        font-family: 'okta';
        font-size: 23px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 43.47px;
      }
      .innovation {
        margin-top:20px;
        color: #FFF;
        font-family: 'Aspekta';
        font-size: 20px;
        font-style: normal;
        font-weight: 450;
        line-height: normal;
      }
      .skill {
        color: #FFF;
        text-align: center;
        font-family: 'okta';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .btn-readmore {
        margin-bottom:70px;
        margin-top:20px;
        border-radius: 6px;
        background: #546792;
        width: 135px;
        height: 30px;
        color: #FFF;
        text-align: center;
        font-family: 'okta';
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1.885px;
      }
      .btn-next {
        position: absolute;
        bottom:-30px;
      }
    }
    .logo-img {
      z-index:2;
      position: absolute;
      top:17px;
    }
    .btn-action {
      z-index:2;
      position: absolute;
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