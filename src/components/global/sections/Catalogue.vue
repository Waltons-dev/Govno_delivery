<script setup>
import Catalogue_card from "../components/Catalogue_card.vue";
const pars1= {text:"Картриджи",src:"src/public/Union.png"};
const pars2= {text:"Тонеры",src:"src/public/toners.png"};
const pars3= {text:"Чипы",src:"src/public/chip.png"};
const pars4= {text:"Принадлежности для сервиса",src:"src/public/for_service.png"};
const pars5= {text:"ЗИП для картриджей",src:"src/public/zip_cart.png"};
const pars6= {text:"ЗИП для оргтехники",src:"src/public/zip_org.png"};
const pars7= {text:"Бункеры для отработанного тонера",src:"src/public/bunker.png"};
const pars8= {text:"Термо узлы и их комплектующие",src:"src/public/thermo.png"};
</script>

<template>
  <section class="catalogue">
    <div class="catalogue__container">
      <div class="catalogue__header">
        <h3 class="catalogue__heading">Каталог</h3>
        <svg class="catalogue__svg" width="289" height="80" viewBox="0 0 289 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M289 6.68703H70L289 -2.83093V6.68703Z" fill="#A78BFA"/>
          <path d="M289 16.205H60L289 6.68701V16.205Z" fill="#A78BFA"/>
          <path d="M289 25.723H50L289 16.2051V25.723Z" fill="#A78BFA"/>
          <path d="M289 35.241H40L289 25.723V35.241Z" fill="#A78BFA"/>
          <path d="M289 44.7589H30L289 35.241V44.7589Z" fill="#A78BFA"/>
          <path d="M289 54.2769H20L289 44.7589V54.2769Z" fill="#A78BFA"/>
          <path d="M289 63.7948H10L289 54.2769V63.7948Z" fill="#A78BFA"/>
          <path d="M289 73.3129H0L289 63.7949V73.3129Z" fill="#A78BFA"/>
          <path d="M289 82.8308H0L289 73.3129V82.8308Z" fill="#A78BFA"/>
        </svg>
        <svg class="catalogue__adapt-svg" width="168" height="55" viewBox="0 0 168 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" clip-path="url(#clip0_1_1529)">
            <path d="M196.5 9.75076H-22.5L196.5 0.232788V9.75076Z" fill="#A78BFA"/>
            <path d="M201.5 18.6471H-27.5L201.5 9.12915V18.6471Z" fill="#A78BFA"/>
            <path d="M206.5 27.5436H-32.5L206.5 18.0256V27.5436Z" fill="#A78BFA"/>
            <path d="M211.5 36.44H-37.5L211.5 26.922V36.44Z" fill="#A78BFA"/>
            <path d="M216.5 45.3363H-42.5L216.5 35.8184V45.3363Z" fill="#A78BFA"/>
            <path d="M221.5 54.2328H-47.5L221.5 44.7148V54.2328Z" fill="#A78BFA"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1529">
              <rect width="174" height="54" fill="white" transform="translate(0 0.232788)"/>
            </clipPath>
          </defs>
        </svg>

      </div>
      <div class="catalogue__body">
        <div class="catalogue__body-container">
          <Catalogue_card :text=pars1.text :src=pars1.src></Catalogue_card>
          <Catalogue_card :text=pars2.text :src=pars2.src></Catalogue_card>
          <Catalogue_card :text=pars3.text :src=pars3.src></Catalogue_card>
          <Catalogue_card :text=pars4.text :src=pars4.src></Catalogue_card>
          <Catalogue_card :text=pars5.text :src=pars5.src></Catalogue_card>
          <Catalogue_card :text=pars6.text :src=pars6.src></Catalogue_card>
          <Catalogue_card :text=pars7.text :src=pars7.src></Catalogue_card>
          <Catalogue_card :text=pars8.text :src=pars8.src></Catalogue_card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalogue__adapt-svg{
  display: none;
}
.catalogue{
  width: 75%;
}
.catalogue__container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.catalogue__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
}
.catalogue__heading{
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px ;
}
.catalogue__svg{
  opacity: 0.3;
}
.catalogue__body-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
@media (max-width: 1296px){
  .catalogue{
    width: 100%;
  }
}
@media (max-width: 769px){
  .catalogue__heading{
    font-size: 18px;
    font-weight: 700;
    margin-left: 15px ;
  }
  .catalogue__svg{
    display: none;
  }
  .catalogue__adapt-svg{
    display: block;
  }
  .catalogue__body-container{
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    grid-gap:10px
  }
}
</style>