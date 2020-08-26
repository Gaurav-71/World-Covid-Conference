<template>
  <div class="pricing-container">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <Heading :obj="headingObj" />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div class="pricing">
        <h1
          style="padding: 0rem 2rem;width:100%;text-align:center;"
        >Check the last minute unbelievable prices !!!</h1>
        <div class="calculate">
          <input
            list="allCountries"
            name="countries"
            placeholder="Enter Country"
            class="country"
            v-model="detail.country"
          />
          <datalist id="allCountries">
            <option value="Afghanistan"></option>
            <option value="Åland Islands"></option>
            <option value="Albania"></option>
            <option value="Algeria"></option>
            <option value="American Samoa"></option>
            <option value="Andorra"></option>
            <option value="Angola"></option>
            <option value="Anguilla"></option>
            <option value="Antarctica"></option>
            <option value="Antigua and Barbuda"></option>
            <option value="Argentina"></option>
            <option value="Armenia"></option>
            <option value="Aruba"></option>
            <option value="Australia"></option>
            <option value="Austria"></option>
            <option value="Azerbaijan"></option>
            <option value="Bahamas"></option>
            <option value="Bahrain"></option>
            <option value="Bangladesh"></option>
            <option value="Barbados"></option>
            <option value="Belarus"></option>
            <option value="Belgium"></option>
            <option value="Belize"></option>
            <option value="Benin"></option>
            <option value="Bermuda"></option>
            <option value="Bhutan"></option>
            <option value="Bolivia"></option>
            <option value="Bonaire, Sint Eustatius and Saba"></option>
            <option value="Bosnia and Herzegovina"></option>
            <option value="Botswana"></option>
            <option value="Bouvet Island"></option>
            <option value="Brazil"></option>
            <option value="British Indian Ocean Territory"></option>
            <option value="Brunei Darussalam"></option>
            <option value="Bulgaria"></option>
            <option value="Burkina Faso"></option>
            <option value="Burundi"></option>
            <option value="Cambodia"></option>
            <option value="Cameroon"></option>
            <option value="Canada"></option>
            <option value="Cape Verde"></option>
            <option value="Cayman Islands"></option>
            <option value="Central African Republic"></option>
            <option value="Chad"></option>
            <option value="Chile"></option>
            <option value="China"></option>
            <option value="Christmas Island"></option>
            <option value="Cocos (Keeling) Islands"></option>
            <option value="Colombia"></option>
            <option value="Comoros"></option>
            <option value="Congo"></option>
            <option value="Congo"></option>
            <option value="Cook Islands"></option>
            <option value="Costa Rica"></option>
            <option value="Côte d'Ivoire"></option>
            <option value="Croatia"></option>
            <option value="Cuba"></option>
            <option value="Curaçao"></option>
            <option value="Cyprus"></option>
            <option value="Czech Republic"></option>
            <option value="Denmark"></option>
            <option value="Djibouti"></option>
            <option value="Dominica"></option>
            <option value="Dominican Republic"></option>
            <option value="Ecuador"></option>
            <option value="Egypt"></option>
            <option value="SEl Salvador"></option>
            <option value="Equatorial Guinea"></option>
            <option value="Eritrea"></option>
            <option value="Estonia"></option>
            <option value="Ethiopia"></option>
            <option value="Falkland Islands"></option>
            <option value="Faroe Islands"></option>
            <option value="Fiji"></option>
            <option value="Finland"></option>
            <option value="France"></option>
            <option value="French Guiana"></option>
            <option value="French Polynesia"></option>
            <option value="French Southern Territories"></option>
            <option value="Gabon"></option>
            <option value="Gambia"></option>
            <option value="Georgia"></option>
            <option value="Germany"></option>
            <option value="Ghana"></option>
            <option value="Gibraltar"></option>
            <option value="Greece"></option>
            <option value="Greenland"></option>
            <option value="Grenada"></option>
            <option value="Guadeloupe"></option>
            <option value="Guam"></option>
            <option value="Guatemala"></option>
            <option value="Guernsey"></option>
            <option value="Guinea"></option>
            <option value="Guinea-Bissau"></option>
            <option value="Guyana"></option>
            <option value="Haiti"></option>
            <option value="Heard Island and McDonald Islands"></option>
            <option value="Vatican City"></option>
            <option value="Honduras"></option>
            <option value="Hong Kong"></option>
            <option value="Hungary"></option>
            <option value="Iceland"></option>
            <option value="India"></option>
            <option value="Indonesia"></option>
            <option value="Iran"></option>
            <option value="Iraq"></option>
            <option value="Ireland"></option>
            <option value="Isle of Man"></option>
            <option value="Israel"></option>
            <option value="Italy"></option>
            <option value="Jamaica"></option>
            <option value="Japan"></option>
            <option value="Jersey"></option>
            <option value="Jordan"></option>
            <option value="Kazakhstan"></option>
            <option value="Kenya"></option>
            <option value="Kiribati"></option>
            <option value="Korea"></option>
            <option value="Kuwait"></option>
            <option value="Kyrgyzstan"></option>
            <option value="Lao"></option>
            <option value="Latvia"></option>
            <option value="Lebanon"></option>
            <option value="Lesotho"></option>
            <option value="Liberia"></option>
            <option value="Libya"></option>
            <option value="Liechtenstein"></option>
            <option value="Lithuania"></option>
            <option value="Luxembourg"></option>
            <option value="Macao"></option>
            <option value="Macedonia"></option>
            <option value="Madagascar"></option>
            <option value="Malawi"></option>
            <option value="Malaysia"></option>
            <option value="Maldives"></option>
            <option value="Mali"></option>
            <option value="Malta"></option>
            <option value="Marshall Islands"></option>
            <option value="Martinique"></option>
            <option value="Mauritania"></option>
            <option value="Mauritius"></option>
            <option value="Mayotte"></option>
            <option value="Mexico"></option>
            <option value="Micronesia"></option>
            <option value="Moldova"></option>
            <option value="Monaco"></option>
            <option value="Mongolia"></option>
            <option value="Montenegro"></option>
            <option value="Montserrat"></option>
            <option value="Morocco"></option>
            <option value="Mozambique"></option>
            <option value="Myanmar"></option>
            <option value="Namibia"></option>
            <option value="Nauru"></option>
            <option value="Nepal"></option>
            <option value="Netherlands"></option>
            <option value="New Caledonia"></option>
            <option value="New Zealand"></option>
            <option value="Nicaragua"></option>
            <option value="Niger"></option>
            <option value="Nigeria"></option>
            <option value="Niue"></option>
            <option value="Norfolk Island"></option>
            <option value="Northern Mariana Islands"></option>
            <option value="Norway"></option>
            <option value="Oman"></option>
            <option value="Pakistan"></option>
            <option value="Palau"></option>
            <option value="Palestine"></option>
            <option value="Panama"></option>
            <option value="Papua New Guinea"></option>
            <option value="Paraguay"></option>
            <option value="Peru"></option>
            <option value="Philippines"></option>
            <option value="Pitcairn"></option>
            <option value="Poland"></option>
            <option value="Portugal"></option>
            <option value="Puerto Rico"></option>
            <option value="Qatar"></option>
            <option value="Réunion"></option>
            <option value="Romania"></option>
            <option value="Russia"></option>
            <option value="Rwanda"></option>
            <option value="Saint Barthélemy"></option>
            <option value="Saint Helena"></option>
            <option value="Saint Kitts and Nevis"></option>
            <option value="Saint Lucia"></option>
            <option value="Saint Martin"></option>
            <option value="Saint Pierre and Miquelon"></option>
            <option value="Saint Vincent and the Grenadines"></option>
            <option value="Samoa"></option>
            <option value="San Marino"></option>
            <option value="Sao Tome and Principe"></option>
            <option value="Saudi Arabia"></option>
            <option value="Senegal"></option>
            <option value="Serbia"></option>
            <option value="Seychelles"></option>
            <option value="Sierra Leone"></option>
            <option value="Singapore"></option>
            <option value="Sint Maarten"></option>
            <option value="Slovakia"></option>
            <option value="Slovenia"></option>
            <option value="Solomon Islands"></option>
            <option value="Somalia"></option>
            <option value="South Africa"></option>
            <option value="South Georgia"></option>
            <option value="South Sudan"></option>
            <option value="Spain"></option>
            <option value="Sri Lanka"></option>
            <option value="Sudan"></option>
            <option value="Suriname"></option>
            <option value="Svalbard"></option>
            <option value="Swaziland"></option>
            <option value="Sweden"></option>
            <option value="Switzerland"></option>
            <option value="Syrian Arab Republic"></option>
            <option value="Taiwan"></option>
            <option value="Tajikistan"></option>
            <option value="Tanzania"></option>
            <option value="Thailand"></option>
            <option value="Timor-Leste"></option>
            <option value="Togo"></option>
            <option value="Tokelau"></option>
            <option value="Tonga"></option>
            <option value="Trinidad and Tobago"></option>
            <option value="Tunisia"></option>
            <option value="Turkey"></option>
            <option value="Turkmenistan"></option>
            <option value="Turks and Caicos Islands"></option>
            <option value="Tuvalu"></option>
            <option value="Uganda"></option>
            <option value="Ukraine"></option>
            <option value="United Arab Emirates"></option>
            <option value="United Kingdom"></option>
            <option value="United States"></option>
            <option value="United States Minor Outlying Islands"></option>
            <option value="Uruguay"></option>
            <option value="Uzbekistan"></option>
            <option value="Vanuatu"></option>
            <option value="Venezuela"></option>
            <option value="Viet Nam"></option>
            <option value="Virgin Islands"></option>
            <option value="Virgin Islands"></option>
            <option value="Wallis and Futuna"></option>
            <option value="Western Sahara"></option>
            <option value="Yemen"></option>
            <option value="Zambia"></option>
            <option value="Zimbabwe"></option>
          </datalist>
          <input
            list="professions"
            name="professions"
            placeholder="Enter Profession"
            class="designation"
            v-model="detail.profession"
          />
          <datalist id="professions">
            <option value="Students"></option>
            <option value="Faculty / Researchers"></option>
            <option value="Industry Personnel & Others"></option>
          </datalist>
          <div class="btn" @click="setAmount">Generate Price</div>
        </div>
        <div v-if="detail.finalAmount!=null" class="pricing-result">
          <div v-if="detail.country == 'India'" class="item">
            <h1>&#8377;{{detail.amount}}</h1>
            <h4>Base Price</h4>
          </div>
          <div v-else class="item">
            <h1>${{detail.amount}}</h1>
            <h4>Base Price</h4>
          </div>
          <div class="item">
            <h1>{{detail.discount}}%</h1>
            <h4>Discount</h4>
          </div>
          <div v-if="detail.country == 'India'" class="item">
            <h1>&#8377;{{detail.finalAmount}}</h1>
            <h4>Price</h4>
          </div>
          <div v-else class="item">
            <h1>${{detail.finalAmount}}</h1>
            <h4>Final Price</h4>
          </div>
        </div>
        <div v-if="detail.finalAmount!=null" @click="route" class="btn-1">Register Now</div>
        <table>
          <tr>
            <th>Category</th>
            <th>India</th>
            <th>Bolivia</th>
            <th>Intl.</th>
          </tr>
          <tr>
            <td>Students</td>
            <td>&#8377;500</td>
            <td>$30</td>
            <td>$75</td>
          </tr>
          <tr>
            <td>Faculty / Researchers</td>
            <td>&#8377;5612</td>
            <td>$50</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Industry Personnel & Others</td>
            <td>&#8377;9354</td>
            <td>$250</td>
            <td>$250</td>
          </tr>
        </table>
        <div @click="route" class="btn-1">Register Now</div>
        <h1>Exciting Discounts !</h1>
        <div class="pricing-result">
          <div class="item">
            <h1>50% Off</h1>
            <h4>For all developing and developed countries</h4>
          </div>
          <div class="item">
            <h1>75% Off</h1>
            <h4>For all under developed countries</h4>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Heading from "../components/Heading";
export default {
  components: {
    Heading
  },
  data() {
    return {
      headingObj: {
        h1: "Pricing",
        h4:
          "A complete list of pricing for the 2nd World Conference on Covid-19",
        src: "money.svg"
      },
      detail: {
        country: "",
        amount: 0,
        finalAmount: null,
        discount: 0,
        additionalDiscount: 0,
        profession: null
      },
      allUnderDevelopedCountries: [
        "Angola",
        "Benin",
        "Burkina Faso",
        "Burundi",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Democratic Republic of the Congo",
        "Djibouti",
        "Eritrea",
        "Ethiopia",
        "Gambia",
        "Guinea",
        "Guinea-Bissau",
        "Lesotho",
        "Liberia",
        "Madagascar",
        "Malawi",
        "Mali",
        "Mauritania",
        "Mozambique",
        "Niger",
        "Rwanda",
        "São Tomé and Príncipe",
        "Senegal",
        "Sierra Leone",
        "Somalia",
        "South Sudan",
        "Sudan",
        "Tanzania",
        "Togo",
        "Uganda",
        "Zambia",
        "Haiti",
        "Afghanistan",
        "Bangladesh",
        "Bhutan",
        "Cambodia",
        "East Timor",
        "Laos",
        "Myanmar",
        "Nepal",
        "Yemen",
        "Kiribati",
        "Solomon IslandsTuvalu",
        "Vanuatu"
      ],
      allDevelopingCountries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Cape Verde",
        "Central African Republic",
        "Chad",
        "China",
        "Chile",
        "Colombia",
        "Comoros",
        "Democratic Republic of the Congo",
        "Republic of the Congo",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Eswatini (Swaziland)",
        "Ethiopia",
        "Fiji",
        "Gabon",
        "The Gambia",
        "Georgia",
        "Ghana",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Jamaica",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Federated States of Micronesia",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "São Tomé and Príncipe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ]
    };
  },
  methods: {
    route(page) {
      switch (page) {
        case 2:
          this.$router.push("/register/conference/participant");
          break;
      }
    },
    checkCountryStatus() {
      for (var i = 0; i < this.allUnderDevelopedCountries.length; i++) {
        if (this.allUnderDevelopedCountries[i] == this.detail.country) {
          return 1;
        }
      }
      for (var j = 0; j < this.allDevelopingCountries.length; j++) {
        if (this.allDevelopingCountries[j] == this.detail.country) {
          return 2;
        }
      }
      return 3;
    },
    setAmount() {
      this.countryStatus = this.checkCountryStatus();
      if (this.detail.profession == "Students") {
        // student
        this.detail.amount =
          this.detail.country == "India"
            ? 1000
            : this.detail.country == "Bolivia"
            ? 30
            : 75;
      } else if (this.detail.profession == "Faculty / Researchers") {
        // teacher
        this.detail.amount =
          this.detail.country == "India"
            ? 5612
            : this.detail.country == "Bolivia"
            ? 50
            : 150;
      } else {
        // industry & other
        this.detail.amount = this.detail.country == "India" ? 5612 : 250;
      }
      switch (this.countryStatus) {
        case 1: //underdeveloped
          this.detail.discount = 75;
          break;
        case 2: //developing
          this.detail.discount = 50;
          break;
        case 3: //developed
          this.detail.discount = 50;
          break;
      }
      this.detail.finalAmount =
        this.detail.amount - (this.detail.amount * this.detail.discount) / 100;
      this.detail.finalAmount = Math.floor(this.detail.finalAmount);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.pricing-container {
  min-height: 100vh;
  width: 100%;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @include ipad-portrait {
    padding: 0.5rem 0;
  }
  .btn,
  .btn-1 {
    width: 8rem;
    padding: 1rem 2rem;
    background: $primary;
    border-radius: 0.8rem;
    color: white;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;
    margin: 1rem 0;
  }
  .btn-1 {
    background-image: $gradient-red;
  }
  .btn:hover {
    background: darken($primary, 10%);
  }
  .transparent {
    background: #e4e3e3;
    color: #333;
    color: black;
  }
  .transparent:hover {
    background: darken(#e4e3e3, 10%);
  }
  .btn:active {
    transform: scale(0.95);
  }
  .pricing {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .calculate {
      width: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @include iphone {
        flex-wrap: wrap;
      }
      input {
        width: 30%;
        background: rgba($primary, 0.2);
        border: 1px solid grey;
        padding: 12px 15px;
        margin: 0.5rem 0;
        background-position-y: center;
        background-position-x: 0.5rem;
        background-size: 32.5px;
        background-repeat: no-repeat;
        text-indent: 35px;
        @include iphone {
          width: 80%;
          margin: 0.5rem;
        }
      }
      .country {
        background-image: url("../assets/Register/Participant/globe.svg");
      }
      .designation {
        background-image: url("../assets/Register/Participant/ceo.svg");
      }
    }
    .pricing-result {
      width: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @include iphone {
        justify-content: center;
        flex-wrap: wrap;
      }
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1.3rem 0;
        @include iphone {
          margin: 1rem;
        }
        h1,
        h4 {
          margin: 0;
          text-align: center;
        }
        h1 {
          color: $primary;
        }
        h4 {
          margin-top: 0.3rem;
        }
      }
    }
    table {
      border-collapse: collapse;
      width: 90%;
      border-radius: 0.8rem;
      overflow: hidden;
      background: white;
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.25);
      margin: 1rem 0;
      @include iphone {
        border-radius: 0.6rem;
      }
      tr {
        td,
        th {
          text-align: center;
          padding: 0.8rem;
          font-size: small;
          font-weight: lighter;
          input {
            width: calc(100% - 5px);
            height: 30px;
            margin: 0.5rem 0;
            border: 0.5px solid black;
            background: none;
            outline: none;
            text-align: left;
            text-indent: 10px;
          }
          ::-webkit-input-placeholder {
            color: darkslategrey;
          }
          :-moz-placeholder {
            color: darkslategrey;
          }
          @include iphone {
            padding: 0.8rem;
            font-size: small;
          }
        }
        th {
          font-size: large;
          font-weight: bold;
          color: $primary;
          padding: 1.3rem;
          @include iphone {
            padding: 1.3rem 0.5rem;
            font-size: small;
          }
        }
      }
      tr:nth-child(odd) {
        background: rgba(darken($primary, 7.5%), $alpha: 0.2);
      }
      tr:nth-child(1) {
        background: $gradient;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        th {
          color: white;
        }
      }
      @media print {
        width: 100%;
        border-radius: none;
        overflow: visible;
        background: white;
        color: black;
        box-shadow: none;
        font-size: small;
        tr {
          td,
          th {
            text-align: center;
            padding: 0rem;
            font-size: small;
            font-weight: lighter;
            color: black;
          }
          th {
            font-size: large;
            font-weight: bold;
            color: black;
            padding: 0rem;
          }
        }
        tr:nth-child(odd) {
          background: white;
          color: black;
        }
        tr:nth-child(1) {
          background: white;
          color: black;
          th {
            color: black;
          }
        }
        table,
        th,
        td {
          border: 1px solid black !important;
          border-collapse: collapse;
          color: black;
        }
        .break {
          border: none !important;
        }
        .top {
          border-top: 1px solid black !important;
        }
        .bottom {
          border-bottom: 1px solid black !important;
        }
      }
    }
  }
}
</style>
