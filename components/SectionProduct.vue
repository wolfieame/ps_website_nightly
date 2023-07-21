<template>
  <div class="section-product flex items-center justify-center">
    <div class="bg-img" />
    <div class="container">
      <div class="out">Our Products & Services</div>
      <div class="provide">
        Primeskills provides comprehensive<br />
        <span class="end">end-to-end consulting</span> services<br />
        in immersive technologies.
      </div>
      <div class="btn-readmore flex items-center justify-center cursor-pointer">
        READ MORE
      </div>
      <div class="ai-card flex flex-row">
        <img src="~/assets/img/ai.svg" class="logo-ai" />
        <svg
          class="line-ai"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="58"
          viewBox="0 0 90 58"
          fill="none"
        >
          <path
            d="M4 0V18C4 37.8823 20.1177 54 40 54H90"
            stroke="#2B6DBA"
            stroke-opacity="0.48"
            stroke-width="8"
          />
        </svg>
        <div class="box-ai flex flex-row items-center justify-around">
          <div class="pro-card">
            <img src="~/assets/img/p1.png" class="img-pro" />
            <div class="text-pro">Virtual Reality</div>
          </div>
          <div class="pro-card">
            <img src="~/assets/img/p2.png" class="img-pro" />
            <div class="text-pro">Augmented Reality</div>
          </div>
          <div class="pro-card">
            <img src="~/assets/img/p3.png" class="img-pro" />
            <div class="text-pro">Multiplayer Learning</div>
          </div>
          <div class="pro-card">
            <img src="~/assets/img/p4.png" class="img-pro" />
            <div class="text-pro">
              Gamified Assesment <br />
              and Learning
            </div>
          </div>
        </div>
      </div>
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
</template>
<style lang="scss" scoped>
.section-product {
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
    background-image: url("../assets/img/bg-3.jpg");
  }
  .container {
    z-index: 2;

    .out {
      color: #fff;
      font-family: "okta";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.16px;
    }
    .provide {
      margin-top: 25px;
      margin-bottom: 25px;
      color: #fff;
      font-family: "okta";
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.16px;
      line-height: 55px; /* 55.044px */

      .end {
        color: #6ebfed;
        font-family: "okta";
        font-size: 44px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.16px;
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
      font-weight: 600;
      letter-spacing: 1.885px;
    }
    .btn-readmore:hover {
      opacity: 0.8;
    }
    .ai-card {
      position: relative;
      .logo-ai {
        position: absolute;
        top: 60px;
        left: -40px;
      }
      .line-ai {
        position: absolute;
        bottom: 51px;
        left: 10px;
      }
      .box-ai {
        margin-left: 100px;
        width: 713px;
        height: 227px;
        flex-shrink: 0;
        background: transparent;
        border-radius: 33px;
        border: 7px solid rgba(43, 109, 186, 0.48);
        .pro-card {
          .img-pro {
            margin-bottom: 23px;
            width: 126px;
            height: 126px;
          }
          .text-pro {
            color: #FFF;
            text-align: center;
            font-family: 'okta';
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
          }
        }
      }
    }
  }
  .btn-next {
    position: absolute;
    bottom: -30px;
    z-index: 2;
  }
}
</style>
