
<template>
  <div class="card-profile">
    <label :for="id"
      @dragenter.prevent="toogleActive"
      @dragleave.prevent="toogleActive"
      @dragover.prevent
      @drop.prevent="toogleActive"
      :class="{ 'active-dropzone': active }"
      class="dropzone card-profile__border"
    >
      <div 
        class="card-profile__drag"
        @drop.prevent="drop"
        @change="selectedFile"
      >
        <input
          type="file"
          class="dropzoneFile card-profile__input"
          :class="id"
          :id="id"
        />
        <div  class="card-profile__title">
          <b>{{$t('drag.drag')}}</b> {{$t('drag.img')}} <b> {{$t('drag.find')}}</b>
          <p class="card-profile__upload">{{$t('drag.upload')}}</p>
        </div>
        <span class="file-info">{{ dropzoneFile.name }}</span>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

name: "DropZone";
const props = defineProps({
  title: String,
  text: String,
  id:String,
  modelValue: {
    type: [Object],
  },
});
const emits = defineEmits(["setImage"]);

const active = ref(false);

const toogleActive = () => {
  active.value = !active.value;
};

let dropzoneFile = ref("");

const drop = (e) => {
  dropzoneFile.value = e.dataTransfer.files[0];
  emits("setImage", dropzoneFile.value, props.id);
};

const selectedFile = () => {
  console.log(props.id)
  console.log(document.querySelector(`.${props.id}`))
  dropzoneFile.value = document.querySelector(`.${props.id}`).files[0];
  emits("setImage", dropzoneFile.value, props.id);
};
</script>

<style lang="scss" scoped>
.card-profile {
  background-color: white;
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &__border {
    padding: 24px;
    width: 100%;
    border: 1px dashed #132D7C;
    border-radius: 4px;
  }
  &__drag {
    display: block;
    margin: 0 auto;
    padding: 16px;
    width: 100%;

    @media (max-width: 460px) {
      width: 90%;
    }
  }
  &__input {
    display: none;
  }
  &__title {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
  }
  &__upload {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: black;
  }
}

.active-dropzone {
  background-color: rgba(51, 106, 179, 0.05);
}

.file-info {
  display: block;
  text-align: center;
  margin-top: 6px;
}
</style>
