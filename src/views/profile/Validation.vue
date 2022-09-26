<template>
  <div class="data">
    <h2 class="data--Title">KYC Verification</h2>
    <div class="info">
      <div v-if="kycInfo.id">
        <h3>
          Verification in progress
        </h3>
      </div>
      <div class="grid" v-else>
        <div class="grid--item">
          <label for="id" class="grid--title"
            ><span class="grid--span">*</span>Identification number</label
          >
          <BaseInput
            class="grid--btn"
            type="number"
            placeholder="El: 1 075 000 444"
            id="id"
            v-model="form.document"
          />
        </div>
        <div class="grid--item">
          <label for="country" class="grid--title"
            ><span class="grid--span">*</span>Residence country</label
          >
          <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Colombia"
            id="country"
            v-model="form.country"
          />
        </div>
        <div class="grid--item">
          <label for="city" class="grid--title"
            ><span class="grid--span">*</span>City of residence</label
          >
          <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Ej: Medellín"
            id="city"
            v-model="form.city"
          />
        </div>
        <div class="grid--item">
          <label for="city" class="grid--title"
            ><span class="grid--span">*</span>Address of residence</label
          >
          <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Ej: Medellín"
            id="city"
            v-model="form.address"
          />
        </div>
        <div class="grid--item">
          <label for="city" class="grid--title"
            ><span class="grid--span">*</span>Upload ID photo</label
          >
          <div class="grid--btnDash">
            <p>
              <b>Drag</b> your image here, or <b>find it on your computer</b>
            </p>
            <p>Upload files up to 2mb</p>
          </div>
        </div>
      </div>

      <section class="data__actions">
      <BaseButton label="Cancel" class="transparent"></BaseButton>
      <BaseButton label="Send verification"></BaseButton>
    </section>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    BaseInput,
    BaseButton
  },
    data () {
        return {
            loading: false,
            form: {
                document: null,
                country: null,
                city: null,
                address: null,
                image: null
            },
            kycInfo: {}
        }
    },
    created () {
        this.getVerificateKyc().then(response => {
            this.kycInfo = response
        })
    },
    methods: {
        ...mapActions('auth', ['verificateKyc', 'getUserInfo', 'getVerificateKyc']),
        changeFiles(){
            this.form.image = this.$refs.image.files[0]
        },
        onSubmit() {
            this.loading = true

            const formData = new FormData()
            formData.append('document', this.form.document)
            formData.append('country', this.form.country)
            formData.append('city', this.form.city)
            formData.append('address', this.form.address)
            formData.append('image', this.form.image)

            this.verificateKyc(formData).then(() => {
                this.getUserInfo()
                this.getVerificateKyc().then(response => {
                    this.kycInfo = response
                })
                openNotification()
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('auth', ['user'])
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

  .info {
    &--title {
      font-size: 22px;
      font-weight: 500;
      line-height: 32px;
      margin-top: 32px;
      margin-bottom: 24px;
      color: #000;
    }

    &--p {
      font-size: 22px;
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
      background: rgba(51, 106, 179, 0.05);
      border-radius: 16px;
      margin-bottom: 20px;
      width: 100%;
      color: #000;
    }
    &--btnDash {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      height: 150px;
      background: rgba(51, 106, 179, 0.05);
      border-radius: 16px;
      padding: 12px 16px;
      gap: 8px;
      border: 1px dashed #000;
      margin-bottom: 24px;
      color: #000;
    }
    &--logo {
      margin: 0 auto;
      width: 49px;
      height: 49px;
    }
  }

  .btnF {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 576px) {
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