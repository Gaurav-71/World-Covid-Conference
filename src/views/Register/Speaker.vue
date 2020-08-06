<template>
  <div class="register">
    <div class="card header">
      <img src="../../assets/Register/presentation.svg" alt="participant" />
      <div class="title">
        <h1>Speaker Registration</h1>
        <h4>Want to share your knowledge on a topic ? Submit your abstracts and join us !</h4>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounce OutUp"
      appear
    >
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
        </div>
        <div class="card address">
          <div class="heading">
            <h2>Postal Address</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Street 1</label>
              <input
                type="text"
                placeholder="Enter Street 1"
                class="street"
                v-model="detail.street1"
              />
            </div>
            <div class="input">
              <label>Street 2</label>
              <input
                type="text"
                placeholder="Enter Street 2"
                class="street"
                v-model="detail.street2"
              />
            </div>
            <div class="input">
              <label>Landmark</label>
              <input
                type="text"
                placeholder="Enter Landmark"
                class="landmark"
                v-model="detail.landmark"
              />
            </div>
          </form>
          <form>
            <div class="input">
              <label>State</label>
              <input type="text" placeholder="Enter State" class="state" v-model="detail.state" />
            </div>
            <div class="input">
              <label>City</label>
              <input type="text" placeholder="Enter City" class="city" v-model="detail.city" />
            </div>
            <div class="input">
              <label>Pincode</label>
              <input type="text" placeholder="Enter Pincode" class="pin" v-model="detail.pin" />
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
            <h2>The Talk</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Title</label>
              <input type="text" placeholder="Enter Title" class="title" v-model="detail.title" />
            </div>
          </form>
          <div class="input file-type">
            <label>Speaker Abstract</label>
            <input type="file" class="student-id" ref="abstractFile" @change="onFilePicked" />
            <div @click="pickFile" class="btn my-btn shake">Upload File</div>
            <p
              class="upload-msg"
              v-if=" !abstractFileName == ''"
            >Uploaded {{abstractFileName}} succesfully !</p>
            <p class="upload-msg" v-else>No file uploaded</p>
          </div>
        </div>
        <div class="card talk">
          <div class="heading">
            <h2>Guest Name</h2>
            <div class="line"></div>
          </div>
          <p>Registration for a speaker is free. Each speaker is allowed to have one guest</p>
          <form>
            <div class="input">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Guest Name"
                class="name"
                v-model="detail.guestName"
              />
            </div>
          </form>
        </div>
        <div class="actions">
        <div @click="validate" class="btn shake">Register</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Speaker",
  data() {
    return {
      //personal info
      detail: {
        name: "",
        phno: "",
        email: "",
        affiliation: "",
        //postal addr
        street1: "",
        street2: "",
        landmark: "",
        state: "",
        city: "",
        pin: "",
        country: "",
        //talk
        title: "",
        //guest
        guestName: "",
        //file
        abstractFile: ""
      },
      abstractFile: null,
      abstractFileName: ""
    };
  },
  methods: {
    pickFile() {
      this.$refs.abstractFile.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {});
      fileReader.readAsDataURL(files[0]);
      this.abstractFile = files[0];
      this.abstractFileName = this.abstractFile.name;
    },
    validate() {
      let payload = {
        abstractFile: this.abstractFile,
        detail: this.detail
      };
      this.$store
        .dispatch("saveSpeakerRegistrationDetails", payload)
        .then(() => {
          this.$router.push("/");
          this.$store.state.navItem = 1;
        })
        .catch(resp => {
          console.log(resp);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/register";
</style>