<template>
  <div v-if="!$store.state.isSavingForm" class="register">
    <div class="card header">
      <img src="../../assets/Register/abstract.svg" alt="participant" />
      <div class="title">
        <h1>Poster Submissions</h1>
        <h4>Want to win an award ? Submit your posters and join us !</h4>
      </div>
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated bounceInUp" appear>
      <div class="container">
        <div class="card personal-information">
          <div class="heading">
            <h2>Personal Information</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Name</label>
              <input type="text" placeholder="Enter name" class="name" v-model="detail.name" />
            </div>
            <div class="input">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter number" class="number" v-model="detail.phno" />
            </div>
            <div class="input">
              <label>Email</label>
              <input type="text" placeholder="Enter email" class="email" v-model="detail.email" />
            </div>
            <div class="input no-margin">
              <label>Affiliation</label>
              <input
                type="text"
                placeholder="Enter Affiliation"
                class="affiliation"
                v-model="detail.affiliation"
              />
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
        <div class="card talk">
          <div class="heading">
            <h2>Poster</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Title</label>
              <input type="text" placeholder="Enter Title" class="title" v-model="detail.title1" />
            </div>
            <div class="input">
              <label>Presenting Author</label>
              <input
                type="text"
                placeholder="Enter Authors"
                class="author"
                v-model="detail.authors1"
              />
            </div>
          </form>
          <div class="input file-type">
            <label>Poster</label>
            <input type="file" class="student-id" ref="posterFile" @change="onPosterPicked" />
            <div @click="pickPoster" class="btn my-btn shake">Upload File</div>
            <p
              class="upload-msg"
              v-if=" !posterFileName == ''"
            >Uploaded {{posterFileName}} succesfully !</p>
            <p class="upload-msg" v-else>No file uploaded</p>
          </div>
        </div>
        <div class="card talk">
          <div class="heading">
            <h2>Abstract</h2>
            <h4 style="margin:0; font-weight:lighter;">Leave empty if there is no abstract to submit</h4>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Title</label>
              <input type="text" placeholder="Enter Title" class="title" v-model="detail.title" />
            </div>
            <div class="input">
              <label>Presenting Author</label>
              <input
                type="text"
                placeholder="Enter Authors"
                class="author"
                v-model="detail.authors"
              />
            </div>
          </form>
          <div class="input file-type">
            <label>Abstract</label>
            <input type="file" class="student-id" ref="abstractFile" @change="onFilePicked" />
            <div @click="pickFile" class="btn my-btn shake">Upload File</div>
            <p
              class="upload-msg"
              v-if=" !abstractFileName == ''"
            >Uploaded {{abstractFileName}} succesfully !</p>
            <p class="upload-msg" v-else>No file uploaded</p>
          </div>
        </div>
        <div class="actions">
          <div @click="validate" class="btn shake">Register</div>
        </div>
      </div>
    </transition>
    <transition name="fade" appear>
      <Error :obj="error" :emptyStr="true" />
    </transition>
  </div>
  <div v-else class="register">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated bounceOutUp"
      mode="out-in"
      appear
    >
      <Loading :heading="'Saving Details'" :message="'Thank You For Registering With Us !'" />
    </transition>
    <transition name="fade" appear>
      <Error :obj="error" :emptyStr="true" />
    </transition>
  </div>
</template>

<script>
import Loading from "../../components/Circle.vue";
import Error from "../../components/Error.vue";

export default {
  name: "Abstract",
  components: {
    Error,
    Loading
  },
  data() {
    return {
      //personal info
      detail: {
        name: "",
        phno: "",
        email: "",
        affiliation: "",
        country: "",
        //talk
        title: "",
        authors: "",
        title1: "",
        authors1: "",
        //file
        abstractFile: "",
        posterFile: "",
        timestamp: null
      },
      abstractFile: null,
      abstractFileName: "",
      posterFile: null,
      posterFileName: "",
      error: {
        isVisible: false,
        message: {
          code: "Missing-information",
          message: ""
        }
      }
    };
  },
  methods: {
    pickFile() {
      this.$refs.abstractFile.click();
    },
    pickPoster() {
      this.$refs.posterFile.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {});
      fileReader.readAsDataURL(files[0]);
      this.abstractFile = files[0];
      this.abstractFileName = this.abstractFile.name;
    },
    onPosterPicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {});
      fileReader.readAsDataURL(files[0]);
      this.posterFile = files[0];
      this.posterFileName = this.posterFile.name;
    },
    allFieldsFilled() {
      if (this.detail.name == "") {
        return "Name";
      } else if (this.detail.phno == "") {
        return "Phone Number";
      } else if (this.detail.email == "") {
        return "Email";
      } else if (this.detail.affiliation == "") {
        return "Affiliation";
      } else if (this.detail.country == "") {
        return "Country - Postal Address";
      }
      return "allFilled";
    },
    validate() {
      let validation = this.allFieldsFilled();
      let allFiles = {
        abstractFile: this.abstractFile,
        posterFile: this.posterFile
      };
      if (validation == "allFilled") {
        this.detail.timestamp = Date(Date.now());
        let payload = {
          allFiles: allFiles,
          detail: this.detail
        };
        this.$store.state.isSavingForm = true;
        this.$store
          .dispatch("saveAbstractRegistrationDetails", payload)
          .then(() => {
            this.$store.state.isSavingForm = false;
            this.$router.push({
              name: "SuccessfulRegistration",
              params: {
                type: "Poster",
                detail: this.detail
              }
            });
            this.$store.state.navItem = 1;
          })
          .catch(resp => {
            console.log(resp);
          });
      } else {
        console.log("we are here");
        this.error.message.message = "Please fill the " + validation + " field";
        this.error.isVisible = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/register";
</style>