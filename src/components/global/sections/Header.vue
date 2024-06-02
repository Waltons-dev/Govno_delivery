<script setup>
import Button from "../partials/Button.vue";
const button1 = "Прайс-лист Розница";
const button2 = "Прайс-лист Опт";
const logo = "src/public/logo.png";

</script>

<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__burger-logo">
        <div class="header__burger">
          <input type="checkbox" id="burger-checkbox" class="header__burger-checkbox">
          <label for="burger-checkbox" class="header__label-burger">
            <svg class="header__burger-icon1" width="22" height="22" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.14285 1.04492H14.8571M1.14056 5.61635H14.8514M1.14285 10.1878H14.8514" stroke="#706F6F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="header__burger-icon2" width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#706F6F"/>
            </svg>
          </label>
          <ul class="header__nav-list">
            <li class="header__location">
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.07997 1C5.46746 1 3.921 1.64057 2.78078 2.78079C1.64057 3.92101 1 5.46748 1 7.08V7.52308C1.24615 10.8544 4.01127 13.5333 7.07997 17C10.2841 13.3815 13.1599 10.641 13.1599 7.08C13.1599 5.46748 12.5194 3.92101 11.3792 2.78079C10.2389 1.64057 8.69248 1 7.07997 1ZM7.07997 4.15897C7.65868 4.15897 8.22438 4.33063 8.7055 4.65223C9.18662 4.97383 9.56154 5.43092 9.78281 5.96565C10.0041 6.50039 10.0618 7.08875 9.94857 7.65628C9.83537 8.22381 9.55638 8.74501 9.14688 9.15393C8.73739 9.56285 8.2158 9.84112 7.64811 9.95352C7.08043 10.0659 6.49215 10.0074 5.95773 9.78539C5.42331 9.56336 4.96675 9.18781 4.64583 8.70623C4.32491 8.22466 4.15404 7.65871 4.15486 7.08C4.15594 6.30492 4.4646 5.56195 5.01305 5.01427C5.5615 4.46659 6.30489 4.15897 7.07997 4.15897Z" stroke="#706F6F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a class="header__location-link _header-footer-text" target="_blank" href="">Санкт-Петербург</a>
            </li>

            <li class="header__info">
              <a class="header__info-item _header-footer-text" target="_blank" href="">О компании</a>
              <a class="header__info-item _header-footer-text" target="_blank" href="">Новости</a>
              <a class="header__info-item _header-footer-text" target="_blank" href="">Технические статьи</a>
            </li>

            <li class="header__social-links">
              <a class="" target="_blank" href="">
                <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5857 10.3175H15.6848C14.9657 10.3175 14.749 9.73495 13.4598 8.44495C12.3332 7.35912 11.8573 7.22412 11.5723 7.22412C11.1782 7.22412 11.0707 7.33245 11.0707 7.87495V9.58495C11.0707 10.0475 10.9207 10.3183 9.71234 10.3183C8.54008 10.2395 7.4033 9.88341 6.39564 9.27925C5.38798 8.67509 4.53827 7.84018 3.9165 6.84329C2.44016 5.0058 1.41293 2.84919 0.916504 0.544952C0.916504 0.259952 1.02484 0.00161895 1.56817 0.00161895H3.46817C3.9565 0.00161895 4.13234 0.219119 4.324 0.721619C5.2465 3.43662 6.82067 5.79829 7.45984 5.79829C7.70484 5.79829 7.8115 5.68995 7.8115 5.07912V2.28245C7.73067 1.00662 7.05317 0.899119 7.05317 0.437452C7.06174 0.315653 7.11746 0.201993 7.20848 0.120613C7.29951 0.0392338 7.41868 -0.00345339 7.54067 0.00161895H10.5273C10.9357 0.00161895 11.0707 0.204952 11.0707 0.693286V4.46829C11.0707 4.87579 11.2457 5.01079 11.369 5.01079C11.614 5.01079 11.8023 4.87579 12.2515 4.42745C13.2143 3.25327 14.0009 1.94509 14.5865 0.544119C14.6464 0.375913 14.7598 0.231931 14.9092 0.134133C15.0586 0.0363354 15.2359 -0.00990959 15.414 0.00245223H17.3148C17.8848 0.00245223 18.0057 0.287453 17.8848 0.694119C17.1935 2.2428 16.338 3.71287 15.3332 5.07912C15.1282 5.39162 15.0465 5.55412 15.3332 5.92078C15.5215 6.20579 16.1882 6.76245 16.6357 7.29162C17.2873 7.94162 17.8282 8.69329 18.2373 9.51662C18.4007 10.0466 18.1282 10.3175 17.5857 10.3175Z" fill="#706F6F"/>
                </svg>
              </a>
              <a class="" target="_blank" href="">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66733 0.666748C13.2698 0.666748 17.0007 4.39758 17.0007 9.00008C17.0007 13.6026 13.2698 17.3334 8.66733 17.3334C7.19464 17.3358 5.74788 16.9461 4.47566 16.2042L0.337329 17.3334L1.464 13.1934C0.721574 11.9208 0.331536 10.4734 0.333996 9.00008C0.333996 4.39758 4.06483 0.666748 8.66733 0.666748ZM5.82733 5.08341L5.66066 5.09008C5.55276 5.09665 5.44731 5.125 5.35066 5.17341C5.26026 5.22461 5.17774 5.2886 5.10566 5.36341C5.00566 5.45758 4.949 5.53925 4.88816 5.61841C4.57993 6.01917 4.41397 6.51118 4.4165 7.01675C4.41816 7.42508 4.52483 7.82258 4.6915 8.19425C5.03233 8.94591 5.59316 9.74175 6.33316 10.4792C6.5115 10.6567 6.6865 10.8351 6.87483 11.0009C7.79432 11.8105 8.89004 12.3943 10.0748 12.7059L10.5482 12.7784C10.7023 12.7867 10.8565 12.7751 11.0115 12.7676C11.2542 12.7551 11.4912 12.6893 11.7057 12.5751C11.8148 12.5189 11.9213 12.4577 12.0248 12.3917C12.0248 12.3917 12.0607 12.3684 12.129 12.3167C12.2415 12.2334 12.3107 12.1742 12.404 12.0767C12.4732 12.0051 12.5332 11.9209 12.579 11.8251C12.644 11.6892 12.709 11.4301 12.7357 11.2142C12.7557 11.0492 12.7498 10.9592 12.7473 10.9034C12.744 10.8142 12.6698 10.7217 12.589 10.6826L12.104 10.4651C12.104 10.4651 11.379 10.1492 10.9357 9.94758C10.8893 9.92733 10.8396 9.91574 10.789 9.91341C10.732 9.90756 10.6744 9.91397 10.62 9.93223C10.5657 9.95048 10.5159 9.98015 10.474 10.0192C10.4698 10.0176 10.414 10.0651 9.8115 10.7951C9.77691 10.8415 9.72928 10.8767 9.67466 10.896C9.62005 10.9153 9.56092 10.9178 9.50483 10.9034C9.45054 10.8889 9.39735 10.8705 9.34566 10.8484C9.24233 10.8051 9.2065 10.7884 9.13566 10.7584C8.65738 10.5497 8.21457 10.2677 7.82316 9.92258C7.71816 9.83091 7.62066 9.73091 7.52066 9.63425C7.19282 9.32027 6.9071 8.96509 6.67066 8.57758L6.6215 8.49841C6.58618 8.44522 6.55763 8.38783 6.5365 8.32758C6.50483 8.20508 6.58733 8.10675 6.58733 8.10675C6.58733 8.10675 6.78983 7.88508 6.884 7.76508C6.97566 7.64841 7.05316 7.53508 7.10316 7.45425C7.2015 7.29592 7.23233 7.13341 7.18066 7.00758C6.94733 6.43758 6.70566 5.87008 6.45733 5.30675C6.40816 5.19508 6.26233 5.11508 6.12983 5.09925C6.08483 5.09425 6.03983 5.08925 5.99483 5.08591C5.88292 5.08035 5.77077 5.08147 5.659 5.08925L5.8265 5.08258L5.82733 5.08341Z" fill="#706F6F"/>
                </svg>
              </a>
              <a class="" target="_blank" href="">
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1474 0.691638C15.3533 0.604963 15.5787 0.57507 15.8001 0.605069C16.0215 0.635067 16.2308 0.723861 16.4063 0.862209C16.5817 1.00056 16.7169 1.1834 16.7977 1.39171C16.8785 1.60001 16.902 1.82617 16.8657 2.04664L14.9757 13.5108C14.7924 14.6166 13.579 15.2508 12.5649 14.7C11.7165 14.2391 10.4565 13.5291 9.32321 12.7883C8.75654 12.4175 7.02071 11.23 7.23404 10.385C7.41737 9.66247 10.334 6.94747 12.0007 5.3333C12.6549 4.69914 12.3565 4.3333 11.584 4.91664C9.66488 6.36497 6.58571 8.56747 5.56737 9.18747C4.66904 9.73414 4.20071 9.82747 3.64071 9.73414C2.61904 9.56414 1.67154 9.30081 0.898207 8.97997C-0.146793 8.54664 -0.0959593 7.10997 0.897374 6.69164L15.1474 0.691638Z" fill="#706F6F"/>
                </svg>
              </a>
              <a class="" target="_blank" href="">
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.3333 0.333252H1.99992C1.08325 0.333252 0.333252 1.08325 0.333252 1.99992V11.9999C0.333252 12.9166 1.08325 13.6666 1.99992 13.6666H15.3333C16.2499 13.6666 16.9999 12.9166 16.9999 11.9999V1.99992C16.9999 1.08325 16.2499 0.333252 15.3333 0.333252ZM14.9999 3.87492L9.54992 7.28325C9.00825 7.62492 8.32492 7.62492 7.78325 7.28325L2.33325 3.87492C2.24969 3.82801 2.17652 3.76464 2.11816 3.68863C2.0598 3.61262 2.01747 3.52557 1.99373 3.43273C1.96999 3.33989 1.96534 3.2432 1.98005 3.14851C1.99476 3.05382 2.02853 2.9631 2.07932 2.88184C2.13011 2.80058 2.19686 2.73046 2.27552 2.67575C2.35419 2.62103 2.44314 2.58284 2.537 2.5635C2.63085 2.54416 2.72765 2.54406 2.82155 2.56321C2.91544 2.58236 3.00447 2.62036 3.08325 2.67492L8.66658 6.16658L14.2499 2.67492C14.3287 2.62036 14.4177 2.58236 14.5116 2.56321C14.6055 2.54406 14.7023 2.54416 14.7962 2.5635C14.89 2.58284 14.979 2.62103 15.0576 2.67575C15.1363 2.73046 15.2031 2.80058 15.2538 2.88184C15.3046 2.9631 15.3384 3.05382 15.3531 3.14851C15.3678 3.2432 15.3632 3.33989 15.3394 3.43273C15.3157 3.52557 15.2734 3.61262 15.215 3.68863C15.1567 3.76464 15.0835 3.82801 14.9999 3.87492Z" fill="#706F6F"/>
                </svg>
              </a>
            </li>
            <li class="header__contacts">
              <div class="header__contacts-worktime">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0ZM8 14.6656C4.31875 14.6656 1.33438 11.6812 1.33438 8C1.33438 4.31875 4.31875 1.33438 8 1.33438C11.6812 1.33438 14.6656 4.31875 14.6656 8C14.6656 11.6812 11.6812 14.6656 8 14.6656ZM7.33437 7.33437L4.66563 10L5.66563 11L8.66562 8V2.66563H7.33125V7.33437H7.33437Z" fill="#706F6F"/>
                </svg>
                <span class="_header-footer-text">Пн-Пт: 9:30-19:00</span>
              </div>
              <div class="header__contacts-phone">
                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.93333 1H2.6C1.71634 1 1 1.71634 1 2.6V15.4C1 16.2837 1.71634 17 2.6 17H7.93333C8.81699 17 9.53333 16.2837 9.53333 15.4V2.6C9.53333 1.71634 8.81699 1 7.93333 1Z" stroke="#706F6F" stroke-width="1.42222" stroke-linecap="square" stroke-linejoin="bevel"/>
                  <path d="M2.6001 1H3.4001C3.47082 1 3.53865 1.0281 3.58866 1.0781C3.63867 1.12811 3.66676 1.19594 3.66676 1.26667C3.66676 1.40812 3.72295 1.54377 3.82297 1.64379C3.92299 1.74381 4.05865 1.8 4.2001 1.8H6.33343C6.47488 1.8 6.61054 1.74381 6.71055 1.64379C6.81057 1.54377 6.86676 1.40812 6.86676 1.26667C6.86676 1.19594 6.89486 1.12811 6.94487 1.0781C6.99488 1.0281 7.06271 1 7.13343 1H7.93343" stroke="#706F6F" stroke-width="1.42222" stroke-linecap="round" stroke-linejoin="bevel"/>
                </svg>
                <a href="tel:+798005516554" class="header__contacts-text ">8 (800) 551 65 54</a>
              </div>
            </li>

            <li class="header__download-buttons">
              <Button class="header__button" :text="button1"></Button>
              <Button class="header__button" :text="button2"></Button>
            </li>

          </ul>
        </div>
        <div class="header__logo">
          <img class="header__logo-img" :src=logo alt="Логотип Govno Delivery">
        </div>
      </div>
      <div class="header__activities">
        <a href="#" target="_blank">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0608 12.0307L16.7306 14.7004C16.816 14.7858 16.8837 14.8872 16.93 14.9988C16.9762 15.1104 17 15.23 17 15.3507C17 15.4715 16.9762 15.5911 16.93 15.7027C16.8837 15.8143 16.816 15.9157 16.7306 16.0011C15.7917 16.9399 14.5456 17.5085 13.2212 17.6026C11.8968 17.6967 10.5829 17.3099 9.52074 16.5132L7.93279 15.3215C6.17488 14.0031 4.61331 12.4416 3.29495 10.6837L2.10322 9.09571C1.30657 8.03353 0.919789 6.71963 1.01387 5.39522C1.10796 4.07082 1.6766 2.82479 2.6154 1.88589C2.70079 1.80047 2.80217 1.73271 2.91375 1.68648C3.02533 1.64025 3.14493 1.61646 3.26571 1.61646C3.38649 1.61646 3.50608 1.64025 3.61767 1.68648C3.72925 1.73271 3.83063 1.80047 3.91601 1.88589L6.5858 4.55567C6.77481 4.74474 6.88099 5.00114 6.88099 5.26849C6.88099 5.53583 6.77481 5.79223 6.5858 5.9813L5.5564 7.0107C5.47646 7.0905 5.42369 7.19345 5.40559 7.30494C5.38749 7.41643 5.40498 7.53079 5.45558 7.63177C6.65187 10.0245 8.59199 11.9646 10.9847 13.1609C11.0857 13.2115 11.2 13.229 11.3115 13.2109C11.423 13.1928 11.526 13.14 11.6058 13.0601L12.6341 12.0317C12.7278 11.9379 12.839 11.8636 12.9614 11.8128C13.0838 11.7621 13.215 11.736 13.3475 11.736C13.48 11.736 13.6112 11.7621 13.7336 11.8128C13.856 11.8636 13.9671 11.9379 14.0608 12.0317V12.0307Z" stroke="#706F6F" stroke-width="1.8" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.07997 1.61646C5.46746 1.61646 3.921 2.25702 2.78078 3.39725C1.64057 4.53747 1 6.08394 1 7.69646V8.13953C1.24615 11.4708 4.01127 14.1498 7.07997 17.6165C10.2841 13.998 13.1599 11.2575 13.1599 7.69646C13.1599 6.08394 12.5194 4.53747 11.3792 3.39725C10.2389 2.25702 8.69248 1.61646 7.07997 1.61646ZM7.07997 4.77543C7.65868 4.77543 8.22438 4.94709 8.7055 5.26869C9.18662 5.59029 9.56154 6.04737 9.78281 6.58211C10.0041 7.11685 10.0618 7.7052 9.94857 8.27273C9.83537 8.84026 9.55638 9.36146 9.14688 9.77039C8.73739 10.1793 8.2158 10.4576 7.64811 10.57C7.08043 10.6824 6.49215 10.6239 5.95773 10.4018C5.42331 10.1798 4.96675 9.80426 4.64583 9.32269C4.32491 8.84111 4.15404 8.27516 4.15486 7.69646C4.15594 6.92137 4.4646 6.17841 5.01305 5.63073C5.5615 5.08305 6.30489 4.77543 7.07997 4.77543Z" stroke="#706F6F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </header>

</template>

<style scoped>
.header{
  background-color: #111010;
  margin-bottom: 40px;
}

._header-footer-text{
  color: #706F6F;
}
.header__nav-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 0;
  margin: 0;
}
.header__location{
  display: flex;
  gap: 10px;
}
.header__location-link{
  text-decoration-style: dashed;
  text-underline-offset: 4px;
}
.header__info{
  display: flex;
  gap: 40px;
  justify-content: space-between;
}
.header__info-item{
  text-decoration: none;
  text-align: center;
}
.header__social-links{
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
}
.header__download-buttons{
  display: flex;
  gap: 12px;
}
.header__burger-checkbox, .header__logo, .header__activities,.header__label-burger,.header__contacts{
  display: none;
}

@media (max-width: 1200px) {
  .header__social-links{
    gap: 15px;
  }
  .header__info{
    gap: 15px;
  }
  ._header-footer-text{
    font-size: 12px;
  }
}

@media (max-width: 769px) {
  .header__burger, .header__logo, .header__activities,.header__burger-checkbox,.header__contacts{
    display: block;
  }
  ._header-footer-text{
    font-size: 15px;
  }
  .header__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .header{
    height: 45px;
    position: sticky;
    top: 0;
    z-index: 8;
  }
  .header__burger-logo{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    max-height: 25px;
    max-width: 172px;
    min-width: 144px;
    z-index: 100;
  }
  .header__logo{
    width: 120px;
  }
  .header__logo-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header__activities{
    display: flex;
    justify-content: space-between;
    min-width: 50px;
  }
  .header__burger-checkbox {
    position: absolute;
    visibility: hidden;
  }
  .header__burger{
    z-index: 5;
  }
  .header__label-burger {
    position: relative;
    z-index: 4;
    cursor: pointer;
    display: block;
    width: 24px;
    height: 24px;
  }

  .header__nav-list {
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    padding: 42px 0;
    margin: 0;
    background-color: #111010;
    box-shadow: 4px 0 10px 0 #00000059;
    list-style-type: none;
    transform: translateX(-103%);
    transition: .3s;
    height: 100vh;
    width: 50%;
  }
  @media (max-width: 600px) {
    .header__nav-list{
      width: 80%;
    }
  }
  .header__burger-icon2{
    display: none;
  }
  .header__burger-checkbox:checked ~ .header__label-burger>.header__burger-icon2{
    display: block;
    transition-delay: 1s;
  }
  .header__burger-checkbox:checked ~ .header__label-burger>.header__burger-icon1{
    display: none;
    transition-delay: 1s;
  }
  .header__burger-checkbox:checked ~ .header__nav-list {
    transform: translateX(0);
  }
  .header__nav-list{
    padding-left: 15px;
    padding-right: 10px;
    align-items: start;
    justify-content: space-around;
  }
  .header__info{
    order: 1;
    .header__info-item{
      text-align: start;
    }
  }
  .header__location{
    order: 2;
  }
  .header__contacts{
    order: 3;
  }
  .header__social-links{
    order: 4;
    width: 100%;
    justify-content: space-between;
  }
  .header__download-buttons{
    order: 5;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

  }
  .header__button{
    min-width: 100%;
    min-height: 32px;
  }

  .header__contacts,.header__info{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .header__contacts-phone,.header__contacts-worktime{
    display: flex;
    gap: 10px;
    justify-content: space-around;

  }
  .header__contacts-text{
    color: #A78BFA;
    text-decoration: none;
  }

}
</style>

