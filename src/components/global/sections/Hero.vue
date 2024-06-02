<script setup>
const src1 = "src/public/hero_img1.png";
const src2 = "src/public/hero_img2.png";
const src3 = "src/public/hero-adapt_img.png";
</script>

<template>
  <section class="hero">
    <div class="hero__container _container">
      <div class="hero__main">
        <img class="hero__main-img" :src=src1 alt="Картинка с текстом производим картриджи">
        <img class="hero__adapt-img" :src=src3 alt="Картинка с текстом производим картриджи">
        <nav class="hero__nav">
          <input type="radio" name="point" id="hero__nav-el1" checked>
          <input type="radio" name="point" id="hero__nav-el2">
          <input type="radio" name="point" id="hero__nav-el3">
          <input type="radio" name="point" id="hero__nav-el4">
          <input type="radio" name="point" id="hero__nav-el5">
          <div class="nav__controls">
            <label for="hero__nav-el1" class="hero__nav-elements hero__nav-el1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="var(--hero__nav-svg-color)"/>
              </svg>
            </label>
            <label for="hero__nav-el2" class="hero__nav-elements">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="var(--hero__nav-svg-color)"/>
              </svg>
            </label>
            <label for="hero__nav-el3" class="hero__nav-elements">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="var(--hero__nav-svg-color)"/>
              </svg>
            </label>
            <label for="hero__nav-el4" class="hero__nav-elements">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="var(--hero__nav-svg-color)"/>
              </svg>
            </label>
            <label for="hero__nav-el5" class="hero__nav-elements">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="var(--hero__nav-svg-color)"/>
              </svg>
            </label>
          </div>
        </nav>
      </div>
      <div class="hero__side">
        <img class="hero__side-img" :src=src2 alt="Картинка с текстом производим тонеры">
        <img class="hero__side-img" :src=src2 alt="Картинка с текстом производим тонеры">
      </div>
    </div>
  </section>

</template>

<style scoped>
.hero__adapt-img{
  display: none;
}
.hero{
  margin-bottom: 20px;
}
.hero__container{
  display: grid;
  width: 100%;
  grid-column-gap: 20px;
  grid-auto-columns: 1fr;
}
.hero__main{
  position: relative;
  grid-row: span 2;
  grid-column: span 9;
}
.hero__side{
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 10/span 3;
  grid-row: span 2;

}
.hero__main-img{
  position: relative;
  width: 100%;
  object-fit: contain;
}
.hero__side-img{
  width: 100%;
  object-fit: cover;
}
.hero__nav{
  position: absolute;
  right: 3%;
  bottom: 9%;
}
input[name="point"] {
  display: none;
}
.nav__controls{
  display: flex;
  gap: 20px;
}
.hero__nav-elements{
  cursor: pointer;
  --hero__nav-svg-color:#D7D7D7;
}
.hero__nav-el1{
  --hero__nav-svg-color:#A78BFA;
}
.hero__nav-elements:hover{
  --hero__nav-svg-color:#A78BFA;
}
@media (max-width: 1296px){
  .hero__container{
    display: block;
  }
  .hero__side{
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    gap: 0;
  }

  .hero__side-img{
    width: 49%;
  }
}
@media (max-width: 769px){

  .hero__side,.hero__main-img{
    display: none;
  }
  .hero__container{
    display: block;
  }
  .hero__adapt-img{
    display: block;
    width: 100%;
    max-height: 80%;

  }
  .hero__nav{
    margin-left: auto;
    margin-right: auto;
    width: 62%;
  }
  .nav__controls{
    gap: 30px;
  }
  @media (max-width:490px) {
    .hero__nav{
      bottom: 5%;
      width: 67%;
    }
    .nav__controls{
      gap: 20px;
    }
  }
}
</style>