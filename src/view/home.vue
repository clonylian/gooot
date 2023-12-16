<template>
  <div class="homebox">
    <div class="htop box-s flex">
      <div class="htone box-s flex">
        <h2 class="htocon an"><router-link to="/">$GOOTS</router-link></h2>
        <h1>PHASE 2 COMMENCING SOON BROS</h1>
      </div>
      <div class="htone box-s">
        <h2>
          <a
            href="https://dexscreener.com/ethereum/0xdAECdB2F56398Cc09619C38D33A785A000B9B517"
            target="_blank"
            >DEX screener</a
          >
        </h2>
        <br />
        <h2>
          <a href="https://t.me/+PP6lgpXVqjIwNmNh" target="_blank">TELEGRAM</a>
        </h2>
        <br />
        <h2 class="an">
          <router-link to="/stake">STAKE</router-link>
        </h2>
      </div>
      <div class="htone box-s">
        <h2>
          <a href="mailto:goots@goooooooots.com">goots@goooooooots.com</a>
        </h2>
      </div>
    </div>
    <div class="hbottom box-s flex">
      <div class="hbone">
        <h2><i>Phase 1&nbsp;</i><i>➡🪿 memecoin, lol</i></h2>
      </div>
      <div class="hbone">
        <h2><i>Phase 2&nbsp;➡🥚 on</i><i> chain lottery</i></h2>
      </div>
      <div class="hbone">
        <h2>
          <i>Phase 3 ➡<a href="http://Phase-3">🔥</a>.....</i>
        </h2>
      </div>
    </div>
    <div class="etp" ref="etp">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let xx = ref(-20);
let yy = ref(-110);
let rr = ref(0);
let etp = ref(null);
let biao = ref(0);
onMounted(() => {
  const timer = setInterval(() => {
    rr.value = rr.value + 1;
    if (yy.value >= 20 && xx.value >= 110) {
      biao.value = 1;
      yy.value = yy.value - 1;
      xx.value = xx.value - 1;
    } else if (yy.value < -140 && xx.value < -50) {
      biao.value = 0;
      yy.value = yy.value + 1;
      xx.value = xx.value + 1;
    } else if (biao.value == 1) {
      yy.value = yy.value - 1;
      xx.value = xx.value - 1;
    } else {
      yy.value = yy.value + 1;
      xx.value = xx.value + 1;
    }
    etp.value.style.transform = `translateX(${xx.value}vw) translateY(${yy.value}vh) rotate(${rr.value}deg)`;
  }, 100);
});
</script>

<style scoped>
.homebox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.etp {
  width: 28.0625rem;
  height: 31rem;
  position: absolute;
  transform: translateX(-50vw) translateY(-140vh) rotateZ(0deg);
  transition: transform 0.1s linear;
}
.etp img {
  content: url("../assets/IMG_1938-tg-sticker-pack.png");
  width: 100%;
  height: 100%;
}
.hbottom {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 5.5875rem;
  margin-top: 9rem;
  position: relative;
}
.hbone {
  width: 33.3%;
}
.htop {
  width: 100%;
  padding: 5.5875rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  font-family: "Neue Haas Grotesk", Icons;
  font-style: normal;
  line-height: 1.5;
}
.htone {
  width: 33.3%;
  flex-direction: column;
}
.htocon {
  padding-bottom: 23rem;
}
.htone h2 a {
  color: white;
}
@media (max-width: 1250px) {
  .htocon {
    padding-bottom: 18rem;
  }
  .htop {
    display: block;
    padding: 2.5rem;
  }
  .htop div {
    width: 100%;
  }
  .htop div h1 {
    margin-bottom: 2rem;
  }
  .htop div a {
    margin-bottom: 2rem;
    display: block;
  }
  .hbottom {
    display: block;
    padding: 2.5rem;
    margin-top: 23rem;
  }
  .hbottom div {
    width: 100%;
  }
  .hbottom div h2 {
    margin-bottom: 2rem;
  }
}
</style>
