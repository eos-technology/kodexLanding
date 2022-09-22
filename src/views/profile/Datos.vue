<template>
  <div class="data">
    <h2 class="data--Title">Datos Personales</h2>
    <div class="frame">
      <img class="frame--avatar" src="@/assets/images/avatar.png" alt="">
      <button class="frame--upButton">Subir Foto</button>
    </div>
    <div class="info">
      <h2 class="info--title">Editar información personal</h2>
      <div class="grid">
        <div class="grid--item">
          <label for="name" class="grid--title"><span class="grid--span">*</span>Nombres</label>
          <BaseInput class="grid--btn" type="text" placeholder="John" id="name" />

        </div>
        <div class="grid--itemD">
          <label for="lastName" class="grid--title"><span class="grid--span">*</span>Apellidos</label>
          <BaseInput class="grid--btn" type="text" placeholder="Doe" id="lastName" />
        </div>
        <div class="grid--item">
          <label for="user" class="grid--title"><span class="grid--span">*</span>Usuario</label>
          <BaseInput class="grid--btn" type="text" placeholder="Gasca" id="user" />
        </div>
        <div class="grid--itemD">
          <label for="email" class="grid--title"><span class="grid--span">*</span>Correo electronico</label>
          <BaseInput class="grid--btn" type="email" placeholder="email@example.com" id="email" />
        </div>
        <div class="grid--item">
          <label for="country" class="grid--title"><span class="grid--span">*</span>País de residencia</label>
          <select id="country" name="country" class="grid--btn grid--flag grid--pad grid--select">
            <option value="colombia">Colombia</option>
            <option value="argentina">Argentina</option>
            <option value="panama">Panama</option>
            <option value="brazil">Brazil</option>
          </select>

        </div>
        <div class="grid--itemD">
          <label for="phone" class="grid--title"><span class="grid--span">*</span>Número telefónico</label>
          <BaseInput class="grid--btn" type="tel" placeholder="+57 320 000 22 33" id="phone" />
        </div>

      </div>
      <div class="btnF">
        <button class="btnF--C">Cancelar</button>
        <button class="btnF--G">Guardar</button>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '@/components/form/BaseInput.vue';
  export default {
    components: { BaseInput },
    setup(){

    }
  }
</script>

<style lang="scss" scoped>
.data {
  &--Title {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    margin-top: 32px;
    margin-bottom: 24px;
    color: #000;
  }

  .frame {
    display: flex;
    align-items: center;
    @media (max-width:576px) {
      flex-direction: column;
      gap: 20px;
    }

    &--avatar {
      background: #DCD7FB;
      border-radius: 100%;
      border: 3px solid #000;
    }

    &--upButton {
      padding: 4px 30px;
      height: 40px;
      margin-left: 20px;
      border: 1px solid #000;
      border-radius: 12px;
      font-weight: 500;
    }

    &--deleteButton {
      background-image: url("@/assets/img/trash.svg");
      background-position: 5% center;
      background-repeat: no-repeat;
      outline: none;
      padding: 4px 30px;
      height: 40px;
      margin-left: 20px;
      border-radius: 12px;
      font-weight: 500;
    }
  }

  .info {
    &--title {
      font-size: 22px;
      font-weight: 500;
      line-height: 32px;
      margin-top: 32px;
      margin-bottom: 24px;
      color: #000;
      @media (max-width:576px) {
        width: 90%;
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    @media (max-width:910px) {
      grid-template-columns: auto;
      width: 100%;
    }
    @media (max-width:576px) {

      width: 100%;
    }


    &--item {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      @media (max-width:910px) {
      margin-right: 0;
      width: 100%;
      margin: 0 auto;
    }
    }

    &--itemD {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      @media (max-width:910px) {
      margin-left: 0;
      width: 100%;
      margin: 0 auto;
    }
    }

    &--span {
      font-weight: 500;
      color: #D00573;
      font-size: 16px;
      line-height: 24px;
      margin-right: 5px;
    }

    &--title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #000;
      margin-bottom: 8px;
    }

    &--btn {
      background: #EEF0F1;
      border-radius: 16px;
      margin-bottom: 20px;
      color: #000;
      padding: 14px;
      width: 100%;
      font-size: 14px;
      border: none;
      outline: none;
    }

  }

  .btnF {
    display: flex;
    justify-content: flex-end;
    @media (max-width:576px) {
      flex-direction: column;
      align-items: center;
    }

    &--C {
      border: none;
      border-radius: 16px;
      height: 48px;
      width: 200px;
      padding: 12px 27px;
      font-weight: 500;
      margin-right: 20px;
    }

    &--G {
      border: none;
      background-color: #000;
      border-radius: 16px;
      width: 200px;
      height: 48px;
      padding: 12px 27px;
      font-weight: 500;
      color: white;
    }
  }



}
</style>