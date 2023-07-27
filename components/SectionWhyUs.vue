<template>
  <div class="container-section flex items-center justify-center">
    <div class="bg-img" />
    <div class="container">
      <div class="why-us">Why Us</div>
      <div class="cater">
        Cater to Diverse Industries: <br /><span class="banking"
          >Banking and Education</span
        >
      </div>
      <div class="stands">
        Primeskills stands at the <span class="fore">forefront</span> of
        <span class="fore">progress</span>, <br />bridging the
        <span class="fore">gap</span> between
        <span class="fore">theory</span> and <span class="fore">practice</span>
      </div>
      <div class="flex flex-row">
        <div
          class="flex flex-col sec-grup cursor-pointer"
          @click="dialogVisible = true"
        >
          <img src="~/assets/img/sec_12.svg" class="" />
          <div class="text-sec">
            The Largest B2B<br />
            VR Training
          </div>
        </div>
        <div class="flex flex-col sec-grup" @click="dialogVisible2 = true">
          <img src="~/assets/img/sec_2.svg" class="" />
          <div class="text-sec">
            Top 10 EdTech Startup<br />
            at the prestigious<br />
            AWS EdTech Event
          </div>
        </div>
        <div class="flex flex-col sec-grup" @click="dialogVisible3 = true">
          <img src="~/assets/img/sec_3.svg" class="" />
          <div class="text-sec">
            The Official Distributor<br />
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
    <el-dialog
      v-model="dialogVisible"
      width="700px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <div class="title-content">Largest B2B VR Training</div>
          <div class="desc-content">
            Primeskills executed the largest B2B VR Training case study in
            Southeast Asia with CIMB Niaga & Danamon, deploying over 350 VR
            headsets and 6000+ modules across Indonesia. This milestone
            demonstrates our ability to handle large-scale projects and our
            impact in the EdTech field.
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible2"
      width="700px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <div class="title-content">
            Top 10 EdTech Startups at The Prestigious AWS EdTech Event
          </div>
          <div class="desc-content">
            We were selected as one of the top 10 EdTech startups at the
            prestigious AWS EdTech event. This accolade showcases our innovation
            and standing within the EdTech community, solidifying our reputation
            as a leading player in the industry.
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible3"
      width="700px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <div class="title-content">
            An official distributor for PICO VR Headset
          </div>
          <div class="desc-content">
            Our partnership as an official distributor for PICO demonstrates our
            commitment to using cutting-edge technology. It shows our ability to
            create immersive and interactive educational experiences for
            learners, and cater to the needs of businesses seeking effective
            training solutions.
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const dialogVisible = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);

const handleClose = (done: () => void) => {
  done();
};
</script>

<style lang="scss" scoped>
.dialog-btn {
  height: 405px;
  position: relative;
  width: 700px;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url("../assets/img/bg-3.jpg");
  border-radius: 20px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  .content-data {
    z-index: 2;
    padding: 70px 20px 0px 20px;
    .title-content {
      color: #4da3f1;
      text-align: start;
      font-family: "okta";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .desc-content {
      color: #fff;
      font-family: "okta";
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
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
    padding-left:10%;
    padding-right: 10%;
    .why-us {
      color: #fff;
      font-family: "okta";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
    }
    .cater {
      color: #fff;
      font-family: "okta";
      font-size: 41px;
      font-style: normal;
      font-weight: 500;
      margin-top: 17px;
      line-height: 50px;
      margin-bottom: 29px;
      .banking {
        color: #4da3f1;
        font-family: "okta";
        font-size: 41px;
        font-style: normal;
        font-weight: 500;
      }
    }
    .stands {
      color: #fff;
      font-family: "okta";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      .fore {
        color: #fff;
        font-family: "okta";
        font-size: 16px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
      }
    }
    .sec-grup {
      margin-top: 40px;
      position: relative;
      cursor: pointer;
      .text-sec {
        position: absolute;
        top: 165px;
        left: 0px;
        right: 0px;
        color: #fff;
        text-align: center;
        font-family: "sego";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .sec-grup:hover {
      filter: brightness(170%);
      .text-sec {
        font-weight: bold;
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
