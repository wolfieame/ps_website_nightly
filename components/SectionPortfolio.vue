<template>
  <div class="portofolio-section">
    <ClientOnly>
      <carousel :items-to-show="1.1" touchDrag mouseDrag v-model="currentSlide">
        <slide
          v-for="(slide, index) in data"
          :key="slide"
          class="card-carousel flex items-center"
          :style="
            'background-image:url(../assets/img/c' + (index + 1) + '.png)'
          "
        >
          <div
            v-if="index === 0"
            class="card-box flex flex-col justify-start items-start"
          >
            <img src="~/assets/img/cimb.svg" class="logo-box" style="margin-top:98px;" />
            <div class="text-box">
              The integration of <span class="bold-text">VR Training</span> has
              injected a new <br />
              level of excitement into CIMB Niaga's training sessions.
            </div>
            <div class="btn-readmore flex items-center justify-center" @click="toCIMB()">
              READ MORE
            </div>
          </div>
          <div
            v-if="index === 1"
            class="card-box flex flex-col justify-start items-start"
            style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img
              src="~/assets/img/pcu.svg"
              class="logo-box"
              style="height: 73px; margin-bottom: 44px; margin-top: 65px"
            />
            <div class="text-box">
              Primeskills and Petra Digital Institute have joined <br />
              forces to create innovative learning using <br />
              Visual Novels and Virtual Reality.
            </div>
            <div class="btn-readmore flex items-center justify-center" style="background:#19304B" @click="toPCU()">
              READ MORE
            </div>
          </div>
          <div
            v-if="index === 2"
            class="card-box flex flex-col justify-start items-start"
            style="
              border: 0.5px solid #858585;
              background: rgba(25, 48, 75, 0.63);
            "
          >
            <img
              src="~/assets/img/kementrian.svg"
              class="logo-box"
              style="height: 73px; margin-bottom: 21px; margin-top: 56px"
            />
            <div class="text-box">
              Primeskills and the Ministry of Home Affairs (Kemendagri) <br />
              have entered into a collaboration aimed at crafting an <br />
              advanced and captivating assessment framework.
            </div>
            <div class="btn-readmore flex items-center justify-center" style="background:#19304B" @click="toKementrian()">
              READ MORE
            </div>
          </div>
        </slide>
      </carousel>
      <div class="flex flex-col items-center justify-center w-full custom-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="12"
          viewBox="0 0 58 12"
          fill="none"
          style="margin-bottom: 38px"
        >
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#D9D9D9"
            :fill-opacity="currentSlide === 0 ? '1' : '0.5'"
            @click="currentSlide = 0"
            class="cursor-pointer"
          />
          <circle
            cx="52"
            cy="6"
            r="6"
            fill="#D9D9D9"
            :fill-opacity="currentSlide === 2 ? '1' : '0.5'"
            @click="currentSlide = 2"
            class="cursor-pointer"
          />
          <circle
            cx="29"
            cy="6"
            r="6"
            fill="#D9D9D9"
            :fill-opacity="currentSlide === 1 ? '1' : '0.5'"
            @click="currentSlide = 1"
            class="cursor-pointer"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="13"
          viewBox="0 0 19 13"
          fill="none"
        >
          <path
            d="M2 2L9.5 10L17 2"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      data: [1, 2, 3],
      currentSlide: 0,
    };
  },
  created() {},
  methods: {
    toCIMB () {
      this.$router.push('cimb-portfolio')
    },
    toPCU () {
      this.$router.push('petra-portfolio')
    },
    toKementrian () {
      this.$router.push('kemendagri-portfolio')
    },
  },
};
</script>
<style lang="scss" scoped>
.portofolio-section {
  .card-carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .card-box {
      position: absolute;
      left: 17%;
      padding-left: 55px;
      width: 633px;
      height: 383px;
      border-radius: 21px;
      border: 0.5px solid #858585;
      background: rgba(120, 17, 20, 0.6);
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(9.5px);
      .logo-box {
        margin-bottom: 16px;
        height: 46px;
      }
      .text-box {
        text-align: left;
        color: #fff;
        font-family: "okta";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        .bold-text {
          color: #fff;
          font-family: "okta";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
      .btn-readmore {
        position: absolute;
        bottom: 31px;
        right: 36px;
        width: 135px;
        height: 30px;
        border-radius: 6px;
        background: #ec1f27;
        color: #fff;
        text-align: center;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1.885px;
        cursor: pointer;
      }
      .btn-readmore:hover {
        opacity: 0.8;
      }
    }
  }
  .custom-page {
    position: absolute;
    bottom: 21px;
  }
}
</style>
