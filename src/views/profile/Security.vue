<template>
  <div class="data">
    <h2 class="data--Title">Seguridad</h2>
    <div class="info">
      <div class="grid">
        <div class="grid--item">
          <label for="oldPass" class="grid--title"
            ><span class="grid--span">*</span>Contraseña anterior</label
          >
          <BaseInput
            class="grid--btn"
            type="password"
            placeholder="********"
            id="oldPass"
          />
        </div>
        <div class="grid--item">
          <label for="newPass" class="grid--title"
            ><span class="grid--span">*</span>Nueva contraseña</label
          >
          <BaseInput
            class="grid--btn"
            type="password"
            placeholder="********"
            id="newPass"
          />
        </div>
        <div class="grid--item">
          <label for="Pass" class="grid--title"
            ><span class="grid--span">*</span>Confirmar contraseña</label
          >
          <BaseInput
            class="grid--btn"
            type="password"
            placeholder="********"
            id="Pass"
          />
        </div>
      </div>
      <section class="data__actions">
      <BaseButton label="Cancel" class="transparent"></BaseButton>
      <BaseButton label="Save"></BaseButton>
    </section>
    </div>
  </div>
</template>
<script>
  import BaseInput from '@/components/form/BaseInput.vue';
import BaseButton from "@/components/form/BaseButton.vue";

    export default {
      components: { BaseInput,BaseButton },
      setup(){
  
      }
    }
  </script>
 22px;

<style lang="scss" scoped>
.data {
  font-size: 14px;
  @media (max-width:576px) {
    margin: 8px auto;
    width: 100%;
  }
  &--Title {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    margin-top: 32px;
    margin-bottom: 24px;
    color: #000;
  }

  .info {
    &--title {
      font-size: 16px;
      font-weight: 500;
      line-height: 32px;
      margin-top: 32px;
      margin-bottom: 8px;
      color: #000;
    }

    &--p {
      font-size: 14px;
      font-weight: 300;
      line-height: 32px;
      color: #000;
      margin-bottom: 24px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: auto;

    &--item {
      display: flex;
      flex-direction: column;
    }

    &--span {
      font-weight: 500;
      color: #d00573;
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
      height: 48px;
      background: rgba(51, 106, 179, 0.05);
      border-radius: 16px;
      padding: 12px 16px;
      gap: 8px;
      margin-bottom: 24px;
      color: #000;
    }
  }

  .pass {
    text-align: center;
    text-decoration: underline;
    margin-top: 64px;
    margin-bottom: 24px;

    a {
      color: #000;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
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
      border-radius: 16px;
      height: 48px;
      width: 200px;
      padding: 12px 27px;
      font-weight: 500;
      margin-right: 20px;
      border: none;
    }

    &--G {
      background-color: #000;
      border-radius: 16px;
      width: 200px;
      height: 48px;
      padding: 12px 27px;
      font-weight: 500;
      color: white;
    }
  }
  &__actions{
    display: flex;
    justify-content: end;
    button{
      width: auto;
      margin-left: 20px;
    }
  }
}
</style>