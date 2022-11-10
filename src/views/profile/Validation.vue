<template>
  <div class="data">
    <h2 class="data--Title">KYC verifications</h2>
    <div class="info">
      <div v-if="kycInfo.id">
        <h3>Verification in progress</h3>
      </div>
      <div class="grid" v-else>
        <div class="grid--item">
          <label for="name" class="grid--title">Nombres</label>
          <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Nombres"
            id="name"
            v-model="form.name"
          />
        </div>
        <div class="grid--item">
          <label for="lastname" class="grid--title">Apellidos</label>
          <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Apellidos"
            id="lastname"
            v-model="form.document"
          />
        </div>
        <div class="grid--item">
          <label for="country" class="grid--title"
            ><span class="grid--span"></span>Country</label
          >
          <!-- <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Colombia"
            id="country"
            v-model="form.country"
          /> -->
          <SimpleSelectVue
            :options="countries"
            v-model="form.country"
          ></SimpleSelectVue>
        </div>
        <div class="grid--item">
          <label for="city" class="grid--title">Ciudad de residencia</label>
          <BaseInput
            class="grid--btn"
            type="text"
            placeholder="Ciudad de residencia"
            id="city"
            v-model="form.city"
          />
        </div>
      </div>
      <div class="grid--item">
        <label for="city" class="grid--title">Dirección de residencia</label>
        <BaseInput
          class="grid--btn"
          type="text"
          placeholder="Dirección de residencia"
          id="city"
          v-model="form.address"
        />
      </div>
      <!-- <div class="grid--item">
        <div class="grid--btnDash">
          <p>
            <b>Drag</b> your image here, or <b>find it on your computer</b>
          </p>
          <p>Upload files up to 2mb</p>
        </div>
      </div> -->
      <DropZone></DropZone>
      <section class="data__actions">
        <BaseButton label="Cancel" class="transparent"></BaseButton>
        <BaseButton label="Enviar verificación"></BaseButton>
      </section>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import SimpleSelectVue from "@/components/form/SimpleSelect.vue";
import DropZone from "@/components/form/DropZone.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    BaseInput,
    BaseButton,
    SimpleSelectVue,
    DropZone,
  },
  data() {
    return {
      loading: false,
      form: {
        document: null,
        country: null,
        city: null,
        address: null,
        image: null,
      },
      kycInfo: {},
      countries: [
        "United States",
        "Canada",
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and/or Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Croatia (Hrvatska)",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecudaor",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands (Malvinas)",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "France, Metropolitan",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard and Mc Donald Islands",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, Democratic People's Republic of",
        "Korea, Republic of",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libyan Arab Jamahiriya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova, Republic of",
        "Monaco",
        "Mongolia",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfork Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "St. Helena",
        "St. Pierre and Miquelon",
        "Sudan",
        "Suriname",
        "Svalbarn and Jan Mayen Islands",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States minor outlying islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City State",
        "Venezuela",
        "Vietnam",
        "Virigan Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna Islands",
        "Western Sahara",
        "Yemen",
        "Yugoslavia",
        "Zaire",
        "Zambia",
        "Zimbabwe",
      ],
    };
  },
  created() {
    this.getVerificateKyc().then((response) => {
      this.kycInfo = response;
    });
  },
  methods: {
    ...mapActions("auth", ["verificateKyc", "getUserInfo", "getVerificateKyc"]),
    changeFiles() {
      this.form.image = this.$refs.image.files[0];
    },
    onSubmit() {
      this.loading = true;

      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("document", this.form.document);
      formData.append("country", this.form.country);
      formData.append("city", this.form.city);
      formData.append("address", this.form.address);
      formData.append("image", this.form.image);
      this.verificateKyc(formData).then(() => {
        this.getUserInfo();
        this.getVerificateKyc().then((response) => {
          this.kycInfo = response;
        });
        openNotification();
        this.loading = false;
      });
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style lang="scss" scoped>
.data {
  cursor: default;
  &--Title {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    @media (max-width: 1050px) {
      grid-template-columns: 1fr;
    }

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
  &__actions {
    display: flex;
    justify-content: end;
    button {
      width: auto;
      margin-left: 20px;
    }
  }
}
</style>