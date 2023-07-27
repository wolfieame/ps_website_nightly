<template>
  <div class="section-about flex items-center justify-center flex-col">
    <!-- <img src="~/assets/img/bg-5.jpg" class="bg-img" /> -->
    <div class="bg-img" />
    <div class="content-section flex items-center justify-center flex-col">
      <div class="text-title">Myth and Facts about</div>
      <div class="text-desc">Immersive Technology</div>
      <div class="list-sec grid grid-cols-4 gap-6">
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible = true"
        >
          <img src="~/assets/img/im1.png" class="img-list" />
          <div class="text-list">
            Does VR Really Cause Motion Sickness (Cybersickness) and Discomfort?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible2 = true"
        >
          <img src="~/assets/img/im2.png" class="img-list" />
          <div class="text-list">Does VR Give You an Isolating Experience?</div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible3 = true"
        >
          <img src="~/assets/img/im3.png" class="img-list" />
          <div class="text-list">Does AR only used for gamifying?</div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="card-list flex flex-col cursor-pointer"
          @click="dialogVisible4 = true"
        >
          <img src="~/assets/img/im4.png" class="img-list" />
          <div class="text-list">
            Is Gamified Assessment and Learning just about playing games?
          </div>
          <svg
            class="cursor-pointer btn-show"
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="18"
            viewBox="0 0 198 18"
            fill="none"
          >
            <path
              d="M0 0H198V8C198 13.5228 193.523 18 188 18H10C4.47715 18 0 13.5228 0 8V0Z"
              fill="url(#paint0_linear_37_171)"
            />
            <path
              d="M98.134 6.5C98.5189 5.83333 99.4811 5.83333 99.866 6.5L103.33 12.5C103.715 13.1667 103.234 14 102.464 14H95.5359C94.7661 14 94.285 13.1667 94.6699 12.5L98.134 6.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_37_171"
                x1="99"
                y1="0"
                x2="99"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075E1" />
                <stop offset="1" stop-color="#043562" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="card-submit flex items-center justify-center flex-col">
        <div class="title-card">Want to learn more? drop us your E-Mail</div>
        <div class="flex items-center justify-center flex-row">
          <input v-model="email" class="form-input" />
          <div
            class="btn-submit flex items-center justify-center cursor-pointer"
            @click="save()"
          >
            <span v-if="isLoading">Loading...</span> <span v-else>Submit</span>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/im1.png" class="img-dialog" />
          <div class="title-content">
            Does VR Really Cause Motion Sickness (Cybersickness) and Discomfort?
          </div>
          <div class="desc-content">
            In fact, Motion sickness can be experienced by certain individuals
            when using VR, particularly in cases where the VR experience is not
            well-optimized. However, thanks to advancements in VR technology
            like improved tracking and higher refresh rates, the occurrence of
            motion sickness is being reduced.<br />
            Primeskills, leveraging our expertise, have discovered effective
            solutions to address this issue. We are committed to enhancing the
            quality of VR content and creating more comfortable experiences by
            implementing smooth motion techniques. As a result, users will
            experience a decrease in discomfort and motion sickness when using
            VR.<br />
            Our collaboration with CIMB Niaga has allowed us to gather feedback
            from multiple generations who have tried our VR content modules, and
            they have reported feeling safe and comfortable throughout their VR
            experiences.
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible2"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/im2.png" class="img-dialog" />
          <div class="title-content">
            Does VR Give You an Isolating Experience?
          </div>
          <div class="desc-content">
            In fact, although VR can create an immersive and individualized
            experience, it can also be a social activity. Multiplayer VR
            experiences allow users to interact and collaborate with others in
            virtual environments, fostering social connections and shared
            experiences. Just like we did with PT. Bank Danamon Indonesia!<br />
            Through our collaboration with PT. Bank Danamon Indonesia, we have
            witnessed firsthand the transformative effects of immersive VR
            training experiences. By embracing these innovations, organizations
            can elevate their training programs and empower employees to acquire
            new skills, improve performance, and enhance overall productivity.
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible3"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/im3.png" class="img-dialog" />
          <div class="title-content">Does AR only used for gamifying?</div>
          <div class="desc-content">
            In fact, AR already gained a lot of popularity in gaming, and its
            applications extend far beyond the users that had been experienced.
            With AR, it is utilized in numerous fields, including education,
            architecture, retail, marketing, and even industrial training.<br />
            Primeskills discovers the use of AR technology for an issue that can
            be established with a new experience, especially in education. We
            collaborate with Terbuka University to make a new experience of a
            learning system that can bring their communication major students in
            advancing their style of new learning experiences.
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-model="dialogVisible4"
      top="5vh"
      width="440px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="dialog-btn flex items-center flex-col">
        <div class="content-data">
          <img src="~/assets/img/im4.png" class="img-dialog" />
          <div class="title-content">
            Is Gamified Assessment and Learning just about playing games?
          </div>
          <div class="desc-content">
            In fact, Gamified Assessment and Learning involve the use of game
            elements and mechanics to enhance motivation in educational
            contexts. Games can be part of gamified learning because the focus
            is on leveraging games that are based on elements, such as points,
            challenges, and leaderboards, to create an interactive and new
            immersive learning experience.<br />
            This goes for our project at Fiscal Career Week and ISEEC UI,  a
            virtual job fair that assists companies and undergraduate students
            in enhancing their opportunities at making careers and new
            investments. Primeskills delivers a solution for university students
            and graduates to access job vacancies within their area of studies,
            and for companies to access a highly skilled and relevant talent
            pool for their job vacancies within  their company. 
          </div>
          <div class="footer-btn flex items-center justify-center">
            <div class="arrow-down" />
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
const dialogVisible4 = ref(false);
const isLoading = ref(false);
const email = ref("");

const handleClose = (done: () => void) => {
  done();
};
async function save() {
  if (email.value === "") {
    ElMessage({
      message: "Email is not valid",
      type: "warning",
    });
  } else {
    isLoading.value = true;
    var form = {
      email: email.value,
    };
    try {
      const { data, error } = await useFetch(
        "https://www.primeskills.id/new-web-demo/public/api/email/subscribe",
        {
          method: "POST",
          body: form,
        }
      );

      ElMessage({
        message: 'Thank you for subscribing',
        type: 'success',
      })
      isLoading.value = false;
      console.log("data from server", data.value);
    } catch (error) {
      isLoading.value = false;
      console.log(error);
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-btn {
  height: 100%;
  position: relative;
  width: 100%;
  background: #1799e2;
  border-radius: 20px;
  padding-bottom: 40px;
  .content-data {
    z-index: 2;
    .img-dialog {
      width: 100%;
      height: 260px;
      margin-bottom: 20px;
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .title-content {
      padding-left: 20px;
      padding-right: 20px;
      color: white;
      text-align: start;
      font-family: "okta";
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .desc-content {
      padding-left: 20px;
      padding-right: 20px;
      color: white;
      font-family: "okta";
      font-size: 14px;
      text-align: justify;
      font-style: normal;
      font-weight: 400;
    }
    .footer-btn {
      cursor: pointer;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 25px;
      background: #0a528c;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      .arrow-down {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 11px solid white;
      }
    }
  }
}
.section-about {
  height: 100vh;
  width: 100%;
  .bg-img {
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-image: url("../assets/img/bg-5.jpg");
  }
  .content-section {
    position: absolute;
    z-index: 2;
    .text-title {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 5px;
    }
    .text-desc {
      color: #fff;
      text-align: center;
      font-family: "okta";
      font-size: 41px;
      font-style: normal;
      font-weight: 500;
    }
    .list-sec {
      margin-top: 40px;
      position: relative;
      .card-list {
        width: 198px;
        height: 100%;
        border-radius: 10px;
        background: linear-gradient(180deg, #549adb 0%, #1d5b95 100%);
        .img-list {
          width: 198px;
          height: 182px;
        }
        .text-list {
          color: #fff;
          font-family: "okta";
          font-size: 13px;
          font-style: normal;
          font-weight: 600;
          padding: 12px 8px 13px 8px;
          margin-bottom: 20px;
        }
        .btn-show {
          position: absolute;
          bottom: 0;
        }
      }
    }
    .card-submit {
      margin-top: 120px;
      width: 768px;
      height: 234px;
      border-radius: 13px;
      border: 1px solid #4f4e7b;
      background: rgba(7, 25, 73, 0.71);
      box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.56);
      backdrop-filter: blur(16px);
      .title-card {
        color: #fff;
        font-family: "okta";
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 45px;
      }
      input {
        width: 389px;
        height: 29px;
        border-radius: 8px;
        background: #fff;
        padding-left:10px;
        padding-right: 10px;
      }
      .btn-submit {
        width: 135px;
        height: 30px;
        border-radius: 6px;
        background: #071949;
        color: #fff;
        text-align: center;
        font-family: "okta";
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.585px;
        margin-left: 22px;
      }
    }
  }
}
</style>
