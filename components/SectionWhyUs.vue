<template>
  <div class="container-section flex items-center justify-center">
    <div class="bg-img" />
    <div class="container">
      <div class="why-us">Why Us</div>
      <div class="cater">
        Cater to Diverse Industries: <br><span class="banking">Banking and Education</span>
      </div>
      <div class="stands">
        Primeskills stands at the <span class="fore">forefront</span> of <span class="fore">progress</span>, <br>bridging the <span class="fore">gap</span>
        between <span class="fore">theory</span> and <span class="fore">practice</span>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col sec-grup">
          <img src="~/assets/img/sec_12.svg" class="" />
          <div class="text-sec">
            The Largest B2B<br>
            VR Training
          </div>
        </div>
        <div class="flex flex-col sec-grup">
          <img src="~/assets/img/sec_2.svg" class="" />
          <div class="text-sec">
            Top 10 EdTech Startup<br>
            at the prestigious<br>
            AWS EdTech Event
          </div>
        </div>
        <div class="flex flex-col sec-grup">
          <img src="~/assets/img/sec_3.svg" class="" />
          <div class="text-sec">
            The Official Distributor<br>
            for PICO VR Headset
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
.container-section {
  height: 100vh;
  width: 100%;
  .bg-img {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("../assets/img/bg-2.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  .container {
    z-index: 2;
    .why-us {
      color: #FFF;
      font-family: 'okta';
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
    }
    .cater {
      color: #FFF;
      font-family: 'okta';
      font-size: 41px;
      font-style: normal;
      font-weight: 500;
      margin-top:17px;
      line-height: 50px;
      margin-bottom: 29px;
      .banking {
        color: #4DA3F1;
        font-family: 'okta';
        font-size: 41px;
        font-style: normal;
        font-weight: 500;
      }
    }
    .stands {
      color: #FFF;
      font-family: 'okta';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      .fore {
        color: #FFF;
        font-family: 'okta';
        font-size: 16px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
      }
    }
    .sec-grup {
      margin-top:40px;
      position: relative;
      .text-sec {
        position: absolute;
        top:165px;
        left:0px;
        right: 0px;
        color: #FFF;
        text-align: center;
        font-family: 'sego';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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
