<template>
  <div class="participant">
    <div class="card header">
      <img src="../../assets/Register/target.svg" alt="participant" />
      <div class="title">
        <h1>Participant Registration</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      </div>
    </div>
    <div class="card personal-information">
      <div class="heading">
        <h2>Personal Information</h2>
        <div class="line"></div>
      </div>
      <form>
        <div class="input">
          <label>Name</label>
          <input type="text" placeholder="Enter name" class="name" />
        </div>
        <div class="input">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter number" class="number" />
        </div>
        <div class="input no-margin">
          <label>Email</label>
          <input type="text" placeholder="Enter email" class="email" />
        </div>
      </form>
      <div class="flex">
        <div class="gender">
          <label>Gender</label>
          <form>
            <input type="radio" id="male" name="gender" value="M" v-model="gender" />
            <div class="custom-label">
              <img src="../../assets/Register/Participant/male.svg" alt="male" />
              <label for="male">Male</label>
            </div>
            <input type="radio" id="female" name="gender" value="F" v-model="gender" />
            <div class="custom-label">
              <img src="../../assets/Register/Participant/female.svg" alt="male" />
              <label for="female">Female</label>
            </div>
            <input type="radio" id="other" name="gender" value="O" v-model="gender" />
            <div class="custom-label">
              <img src="../../assets/Register/Participant/other.svg" alt="male" />
              <label for="other">Other</label>
            </div>
          </form>
        </div>
        <div class="profession">
          <label>Profession</label>
          <form>
            <input type="radio" id="student" name="profession" value="M" v-model="profession" />
            <div class="custom-label">
              <img src="../../assets/Register/Participant/student.svg" alt="student" />
              <label for="student">Student</label>
            </div>
            <input type="radio" id="other" name="profession" value="F" v-model="profession" />
            <div class="custom-label">
              <img src="../../assets/Register/Participant/other-prof.svg" alt="male" />
              <label for="other">Other</label>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="card address">
      <div class="heading">
        <h2>Postal Address</h2>
        <div class="line"></div>
      </div>
      <form>
        <div class="input">
          <label>Street 1</label>
          <input type="text" placeholder="Enter Street 1" class="street" />
        </div>
        <div class="input">
          <label>Street 2</label>
          <input type="text" placeholder="Enter Street 2" class="street" />
        </div>
        <div class="input">
          <label>Landmark</label>
          <input type="text" placeholder="Enter Landmark" class="landmark" />
        </div>
      </form>
      <form>
        <div class="input">
          <label>State</label>
          <input type="text" placeholder="Enter State" class="state" />
        </div>
        <div class="input">
          <label>City</label>
          <input type="text" placeholder="Enter City" class="city" />
        </div>
        <div class="input">
          <label>Pincode</label>
          <input type="text" placeholder="Enter Pincode" class="pin" />
        </div>
      </form>
      <form>
        <div class="input">
          <label>Country</label>
          <input
            list="allCountries"
            name="countries"
            placeholder="Enter Country"
            class="country"
            v-model="country"
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
            <option value="Bolivia, Plurinational State of"></option>
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
            <option value="Congo, the Democratic Republic of the"></option>
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
            <option value="Falkland Islands (Malvinas)"></option>
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
            <option value="Holy See (Vatican City State)"></option>
            <option value="Honduras"></option>
            <option value="Hong Kong"></option>
            <option value="Hungary"></option>
            <option value="Iceland"></option>
            <option value="India"></option>
            <option value="Indonesia"></option>
            <option value="Iran, Islamic Republic of"></option>
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
            <option value="Korea, Democratic People's Republic of"></option>
            <option value="Korea, Republic of"></option>
            <option value="Kuwait"></option>
            <option value="Kyrgyzstan"></option>
            <option value="Lao People's Democratic Republic"></option>
            <option value="Latvia"></option>
            <option value="Lebanon"></option>
            <option value="Lesotho"></option>
            <option value="Liberia"></option>
            <option value="Libya"></option>
            <option value="Liechtenstein"></option>
            <option value="Lithuania"></option>
            <option value="Luxembourg"></option>
            <option value="Macao"></option>
            <option value="Macedonia, the former Yugoslav Republic of"></option>
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
            <option value="Micronesia, Federated States of"></option>
            <option value="Moldova, Republic of"></option>
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
            <option value="Palestinian Territory, Occupied"></option>
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
            <option value="Russian Federation"></option>
            <option value="Rwanda"></option>
            <option value="Saint Barthélemy"></option>
            <option value="Saint Helena, Ascension and Tristan da Cunha"></option>
            <option value="Saint Kitts and Nevis"></option>
            <option value="Saint Lucia"></option>
            <option value="Saint Martin (French part)"></option>
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
            <option value="Sint Maarten (Dutch part)"></option>
            <option value="Slovakia"></option>
            <option value="Slovenia"></option>
            <option value="Solomon Islands"></option>
            <option value="Somalia"></option>
            <option value="South Africa"></option>
            <option value="South Georgia and the South Sandwich Islands"></option>
            <option value="South Sudan"></option>
            <option value="Spain"></option>
            <option value="Sri Lanka"></option>
            <option value="Sudan"></option>
            <option value="Suriname"></option>
            <option value="Svalbard and Jan Mayen"></option>
            <option value="Swaziland"></option>
            <option value="Sweden"></option>
            <option value="Switzerland"></option>
            <option value="Syrian Arab Republic"></option>
            <option value="Taiwan, Province of China"></option>
            <option value="Tajikistan"></option>
            <option value="Tanzania, United Republic of"></option>
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
            <option value="Venezuela, Bolivarian Republic of"></option>
            <option value="Viet Nam"></option>
            <option value="Virgin Islands, British"></option>
            <option value="Virgin Islands, U.S."></option>
            <option value="Wallis and Futuna"></option>
            <option value="Western Sahara"></option>
            <option value="Yemen"></option>
            <option value="Zambia"></option>
            <option value="Zimbabwe"></option>
          </datalist>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Participant",
  data() {
    return {
      gender: "",
      profession: null,
      country: "",
      allDevelopedCountries: [
        "Austria",
        "Belgium",
        "Denmark",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Ireland",
        "Italy",
        "Luxembourg",
        "Netherlands",
        "Portugal",
        "Spain",
        "Sweden",
        "United Kingdom",
        "Canada",
        "France",
        "Germany",
        "Italy",
        "Japan",
        "United Kingdom",
        "United States",
        " Australia",
        "Japan",
        "New Zealand",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czechia",
        "Estonia",
        "Hungary",
        "Latvia",
        "Lithuania",
        "Malta",
        "Poland",
        "Romania",
        "Slovakia",
        "Slovenia",
        "Iceland",
        "Norway",
        "Switzerland"
      ],
      isDeveloped: true
    };
  },
  methods: {
    checkDeveloped() {
      for (var i = 0; i < this.allCountries.length; i++) {
        if (this.countries[i] == this.country) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.participant {
  height: calc(100vh - 4.5rem);
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    background: rgba($primary, 0.2);
    border: 1px solid grey;
    padding: 12px 15px;
    margin: 0;
    background-position-y: center;
    background-position-x: 0.5rem;
    background-size: 32.5px;
    background-repeat: no-repeat;
    text-indent: 35px;
  }
  input::placeholder {
    color: #333333;
    font-weight: bold;
  }
  .card {
    margin-bottom: 2rem;
    width: 80vw;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;
    padding: 1.5rem 2rem;
    @include iphone {
      padding: 1.5rem;
    }
  }
  .heading {
    width: 100%;
    h2 {
      margin: 0;
      color: $primary;
      font-weight: lighter;
      text-align: left;
      @include iphone {
        text-align: center;
      }
    }
    .line {
      height: 1px;
      width: 100%;
      background: lightgray;
      margin: 1rem 0;
    }
  }
  .header {
    width: 80vw;
    img {
      width: 100px;
      height: 100px;
      margin-right: 1.5rem;
      margin-left: 0.5rem;
      @include iphone {
        margin-right: 1rem;
        margin-left: 0;
      }
    }
    h1,
    h4 {
      margin: 0;
      font-weight: lighter;
    }
    h1 {
      color: $primary;
      margin-bottom: 0.5rem;
    }
  }
  .personal-information,
  .address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      @include iphone {
        flex-wrap: wrap;
      }
      @include ipad-portrait {
        flex-wrap: wrap;
      }
      .input {
        margin-bottom: 1rem;
        margin-right: 5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @include iphone {
          margin-right: 1.5rem;
        }
        @include ipad-portrait {
          margin-right: 1.5rem;
        }
        label {
          margin: 10px 0;
          color: black;
        }
        input {
          width: 100%;
        }
        .name {
          background-image: url("../../assets/Register/Participant/name.svg");
        }
        .number {
          background-image: url("../../assets/Register/Participant/phone.svg");
        }
        .email {
          background-image: url("../../assets/Register/Participant/email.svg");
        }
        .country {
          background-image: url("../../assets/Register/Participant/globe.svg");
        }
        .state {
          background-image: url("../../assets/Register/Participant/state.svg");
        }
        .city {
          background-image: url("../../assets/Register/Participant/city.svg");
        }
        .pin {
          background-image: url("../../assets/Register/Participant/postal.svg");
        }
        .street {
          background-image: url("../../assets/Register/Participant/street.svg");
        }
        .landmark {
          background-image: url("../../assets/Register/Participant/landmark.svg");
        }
      }
      .no-margin {
        margin-right: 0;
        @include iphone {
          margin-right: 1.5rem;
        }
        @include ipad-portrait {
          margin-right: 1.5rem;
        }
      }
    }
    .flex {
      display: flex;
      @include iphone {
        flex-wrap: wrap;
      }
      .gender,
      .profession {
        margin-top: 1rem;
        label {
          font-weight: normal;
        }
        form {
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .custom-label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 2.1rem 0 0.3rem;
            img {
              width: 40px;
              height: 40px;
              margin: 0.3rem;
              @include ipad-portrait {
                width: 35px;
              }
              @include iphone {
                width: 30px;
              }
              cursor: default;
            }
            label {
              font-weight: lighter;
            }
          }
        }
      }
      .profession {
        margin-left: 4.5rem;
        @include iphone {
          margin-left: 0;
          margin-top: 2rem;
        }
      }
    }
  }
  .address {
    form {
      width: 100%;
      .input {
        .country{
          width: 100%;
        }
      }
    }
  }
}
</style>