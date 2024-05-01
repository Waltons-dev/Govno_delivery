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
  <article class="catalogue">
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
  </article>
</template>

<style scoped>
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
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
  grid-gap: 20px;
}
</style>