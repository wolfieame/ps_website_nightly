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
        @click="dialogVisible = true"
        class="btn-readmore flex items-center justify-center no-select cursor-pointer"
      >
        READ MORE
      </div>
      <div class="btn-next cursor-pointer" @click="btnNext()">
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

    <el-dialog
      v-model="dialogVisible"
      width="720px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col justify-end">
        <div class="content-data flex items-center flex-col">
          <div class="intro">INTRODUCING</div>
          <div class="company">PRIMESKILLS</div>
          <div class="innovation">Where innovation meets immersion</div>
          <div class="data-text">
            At Primeskills, we're driven by a
            <span class="data-bold">passion to bridge the skill gap</span> and
            <span class="data-bold">democratize education</span> through the
            power of technology. As an innovative <br />
            <span class="data-bold">Education Technology Start-Up</span>, we
            simplify and optimize processes while gamifying the educational
            journey. Through strategic consulting and <br />
            collaborative efforts, we ensure learning equality by developing immersive
            solutions that combine play, competition, and rewards. <br />
            <br />
            Our goal is to make learning accessible, exciting, and engaging for
            all individuals and industries. By transforming skill gaps into
            opportunities <br />
            for growth and excellence, we empower learners to succeed. At
            Primeskills, we're not just revolutionizing education—we're
            transforming lives <br />
            and industries, creating a future where everyone can access and
            benefit from their prime skills to thrive.
          </div>
        </div>
        <div class="bg-grad" />
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["clicked"]);

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  done();
};
function btnNext () {
  emit("clicked", 'hero')
}
</script>
<style lang="scss" scoped>
.dialog-btn {
  height: 672px;
  position: relative;
  width: 720px;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url("../assets/img/bg-1.jpg");
  border-radius: 20px;
  padding-bottom: 40px;
  padding-left:10px;
  padding-right:10px;
  .content-data {
    z-index: 2;
    .intro {
      color: #fff;
      text-align: center;
      font-family: "Aspekta";
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 8.51px;
    }
    .company {
      color: #fff;
      text-shadow: 0px 4px 8px #00000040;
      font-family: "Aspekta";
      font-size: 76px;
      font-style: normal;
      font-weight: 600;
    }
    .innovation {
      color: #fff;
      text-align: center;
      font-family: "Aspekta";
      font-size: 10px;
      font-style: normal;
      font-weight: 200;
      margin-bottom:20px;
    }
    .data-text {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      .data-bold {
        color: #fff;
        font-family: "okta";
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
      }
    }
  }
  .bg-grad {
    z-index: 1;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 500px;
    background: linear-gradient(180deg, rgba(7, 25, 73, 0) 0%, #071949 66.12%);
  }
}
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
      text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
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
      letter-spacing: 1.885px;
    }
    .btn-readmore:hover {
      opacity: 0.9;
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
