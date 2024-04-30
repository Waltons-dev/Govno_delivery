<script setup>

const props = defineProps(["src","name","article","resource","price","hit","discount"])
const card_hit = document.getElementById('card__hit');
const card_discount = document.getElementById('card__discount');
if ("hit"==="ХИТ"){
  card_hit.display="inline-block";
}
if ("discount"===""){
  card_discount.display="inline-block";
}
console.log(card_hit,card_discount)//почему не находит элементы???
</script>

<template>
    <div class="card">
      <img class="card__image" src="/src/public/1card.png" alt="Фото драм-картриджа"> <!--не могу поставить в src константу-->
      <div class="card__additional_info">
        <span id="card__hit">{{hit}}</span>
        <span id="card__discount">{{discount}}</span>
      </div>

      <p class="card__name">{{name}}</p>
      <div class="card__info">
        <span class="info-item info-main-text">Артикул:<span class="info-sub-text">{{article}}</span></span>
        <span class="info-item info-main-text">Цвет:
          <span class="info-sub-text">
            Черный
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="black"/>
</svg>
          </span>
        </span>
        <span class="info-item info-main-text">Ресурс: <span class="info-sub-text">{{resource}}</span></span>
      </div>
      <span class="card__price">{{price}}</span>
      <div class="card__actions">
        <div class="add-delete-button">
          <button class="delete-button">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3334 10.8317H4.66675V9.16504H16.3334V10.8317Z" fill="#706F6F"/>
            </svg>
          </button>
          <span class="actions-counter">1</span>
          <button class="add-button">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3334 6.83171H7.33342V11.8317H5.66675V6.83171H0.666748V5.16504H5.66675V0.165039H7.33342V5.16504H12.3334V6.83171Z" fill="#706F6F"/>
            </svg>
          </button>
        </div>
        <button class="bin-button">В корзину</button>
      </div>
    </div>
</template>

<style scoped>
.card{
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 344px;
  max-height: 611px;
  border-radius: 2px;
  border: 1px solid #D7D7D766;
}
.card__image{
  max-width: 281px;
  max-height: 281px;
  margin-top: 20px;
  margin-left: 20px;
}
.card__additional_info{
  position: absolute;
  margin-top: 20px;
  display: flex;
  gap: 4px;

}
#card__hit{
  font-size: 12px;
  color: white;
  font-weight: 700;
  text-align: center;
  background-color: #D6233C;
  width: 65px;
  height: 26px;
  border-radius: 2px;
  align-content: center;
  display: none;
}
#card__discount{
  font-size: 16px;
  color: white;
  font-weight: 700;
  text-align: center;
  background-color: #D6233C;
  width: 65px;
  height: 26px;
  border-radius: 2px;
  align-content: center;
  display: none;

}
.card__name{
  font-size: 18px;
  line-height: 21px;
  max-height: 66px;
  max-width: 304px;
  align-self: center;
  margin: 0;
}
.card__info{
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 20px;
}
.info-item{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.info-main-text{
  color: #706F6F;
}
.info-sub-text{
  color: black;
}
.card__price{
  margin-left: 20px;
  font-size: 22px;
  font-weight: 700;
}
.bin-button{
  background-color: #A78BFA;
  border-radius: 2px;
  width: 142px;
  height: 54px;
  color: white;
  border: none;
  cursor: pointer;
}
.card__actions{
  display: flex;
  justify-content: space-evenly;
}
.add-delete-button{
  width: 142px;
  height: 54px;
  border-radius: 2px;
  background-color: #F4F4F4;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.delete-button{
  background-color: #F4F4F4;
  border: none;
  cursor: pointer;
}
.add-button{
  background-color: #F4F4F4;
  border: none;
  cursor: pointer;
}
</style>
<script>

</script>