<script setup>
import Catalogue_card from "../components/Catalogue_card.vue";
const text="Картриджи";
</script>

<template>
  <article class="catalogue">
    <div class="catalogue__container _container">
      <div class="catalogue__header">
        <h3>Каталог</h3>
        <svg width="289" height="80" viewBox="0 0 289 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
          <Catalogue_card :text="text"></Catalogue_card>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.catalogue{ /*потом убрать*/
  max-width: 1345px;
}
.catalogue__container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.catalogue__body-container{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
  grid-gap: 20px;
}
</style>