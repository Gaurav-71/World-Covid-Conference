<template>
  <div class="register">
    <div class="card header">
      <img src="../../assets/Register/target.svg" alt="participant" />
      <div class="title">
        <h1>Participant Registration</h1>
        <h4>
          Interested to understand COVID-19 better ? Register to view recorded
          videos !
        </h4>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      mode="out-in"
      appear
    >
      <div>
        <div class="card personal-information">
          <div class="heading">
            <h2>Personal Information</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter name"
                class="name"
                v-model="detail.name"
              />
            </div>
            <div class="input">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter number"
                class="number"
                v-model="detail.phno"
              />
            </div>
            <div class="input">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter email"
                class="email"
                v-model="detail.email"
              />
            </div>
            <div class="input no-margin">
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
            </div>
          </form>
          <!-- <div class="flex">
            <div class="gender">
              <label>Gender</label>
              <form>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="M"
                  v-model="detail.gender"
                />
                <div class="custom-label">
                  <img
                    src="../../assets/Register/Participant/male.svg"
                    alt="male"
                  />
                  <label for="male">Male</label>
                </div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="F"
                  v-model="detail.gender"
                />
                <div class="custom-label">
                  <img
                    src="../../assets/Register/Participant/female.svg"
                    alt="male"
                  />
                  <label for="female">Female</label>
                </div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="O"
                  v-model="detail.gender"
                />
                <div class="custom-label">
                  <img
                    src="../../assets/Register/Participant/other.svg"
                    alt="male"
                  />
                  <label for="other">Other</label>
                </div>
              </form>
            </div>
            <div class="profession">
              <label>Profession</label>
              <form>
                <input
                  type="radio"
                  id="student"
                  name="profession"
                  value="s"
                  v-model="detail.profession"
                />
                <div class="custom-label">
                  <img
                    src="../../assets/Register/Participant/student.svg"
                    alt="student"
                  />
                  <label for="student">Student</label>
                </div>
                <input
                  type="radio"
                  id="other"
                  name="profession"
                  value="o"
                  v-model="detail.profession"
                />
                <div class="custom-label">
                  <img
                    src="../../assets/Register/Participant/other-prof.svg"
                    alt="other-prof"
                  />
                  <label for="other"
                    >Faculty / Industry Personnel / Doctor / Other</label
                  >
                </div>
              </form>
            </div>
          </div>--->
        </div>
        <!---
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          mode="out-in"
          appear
        >
          <div v-if="detail.profession == 'o'" class="card category-container">
            <div class="heading">
              <h2>Qualification Category</h2>
              <div class="line"></div>
            </div>
            <div class="category">
              <form>
                <div class="custom-label">
                  <input
                    type="radio"
                    id="1"
                    name="qualification"
                    value="1"
                    v-model="detail.qualification"
                  />
                  <img
                    src="../../assets/Register/Participant/teacher.svg"
                    alt="male"
                  />
                  <label for="male"
                    >Faculty / Post-doctoral Fellow / Research Associate /
                    Research Engineer</label
                  >
                </div>
                <div class="custom-label">
                  <input
                    type="radio"
                    id="2"
                    name="qualification"
                    value="2"
                    v-model="detail.qualification"
                  />
                  <img
                    src="../../assets/Register/Participant/businessman.svg"
                    alt="male"
                  />
                  <label for="female">Industry Personnel</label>
                </div>
                <div class="custom-label">
                  <input
                    type="radio"
                    id="3"
                    name="qualification"
                    value="3"
                    v-model="detail.qualification"
                  />
                  <img
                    src="../../assets/Register/Participant/other-prof.svg"
                    alt="male"
                  />
                  <label for="other">Other</label>
                </div>
              </form>
            </div>
          </div>
        </transition>
        <div v-if="detail.profession == 'o'" class="card professional-details">
          <div class="heading">
            <h2>Professional Information</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input">
              <label>Designation</label>
              <input
                type="text"
                placeholder="Enter Designation"
                class="designation"
                v-model="detail.designation"
              />
            </div>
            <div class="input">
              <label>Area of Research</label>
              <input
                type="text"
                placeholder="Enter Area of Research"
                class="research"
                v-model="detail.research"
              />
            </div>
          </form>
        </div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          mode="out-in"
          appear
        >
          <div v-if="detail.profession == 's'" class="card academic-details">
            <div class="heading">
              <h2>Academic Details</h2>
              <div class="line"></div>
            </div>
            <form>
              <div class="input">
                <label>University / College Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  class="college"
                  v-model="detail.universityName"
                />
              </div>
              <div class="input">
                <label>Field of Study</label>
                <input
                  type="text"
                  placeholder="Enter Field of Study"
                  class="stream"
                  v-model="detail.stream"
                />
              </div>
            </form>
            <div class="input file-type" style="margin-top: 1rem;">
              <label
                >Student Verification : Please upload a document which proves
                you are a student (ID proof, College Fee Receipt, Library Card
                etc)</label
              >
              <input
                type="file"
                class="student-id"
                ref="studentImage"
                @change="onStudentFilePicked"
              />
              <div @click="pickStudentImage" class="btn my-btn shake">
                Upload File
              </div>
              <p class="upload-msg" v-if="!idImgName == ''">
                Uploaded {{ idImgName }} succesfully !
              </p>
              <p class="upload-msg" v-else>No file uploaded</p>
            </div>
          </div>
        </transition>
        <div class="card category-container">
          <div class="heading">
            <h2>How did you hear about the conference ?</h2>
            <div class="line"></div>
          </div>
          <div class="category">
            <form>
              <div class="custom-label">
                <input
                  type="radio"
                  id="f1"
                  name="feedback"
                  value="f1"
                  v-model="detail.feedback"
                />
                <img
                  src="../../assets/Register/Participant/friends.svg"
                  alt="male"
                />
                <label for="male">Friends / Colleagues</label>
              </div>
              <div class="custom-label">
                <input
                  type="radio"
                  id="f2"
                  name="feedback"
                  value="f2"
                  v-model="detail.feedback"
                />
                <img
                  src="../../assets/Register/Participant/social.svg"
                  alt="male"
                />
                <label for="female">Social Media</label>
              </div>
              <div class="custom-label">
                <input
                  type="radio"
                  id="f3"
                  name="feedback"
                  value="f3"
                  v-model="detail.feedback"
                />
                <img
                  src="../../assets/Register/Participant/search.svg"
                  alt="male"
                />
                <label for="other">Search Engine</label>
              </div>
              <div class="custom-label">
                <input
                  type="radio"
                  id="f4"
                  name="feedback"
                  value="f4"
                  v-model="detail.feedback"
                />
                <img
                  src="../../assets/Register/Participant/other-feedback.svg"
                  alt="male"
                />
                <label for="other">Other</label>
              </div>
            </form>
          </div>
        </div> --->
      </div>
    </transition>
    <div @click="validate" class="btn shake">Save & Pay</div>
    <div>
      <transition name="fade" appear>
        <Error :obj="error" :emptyStr="true" />
      </transition>
    </div>
  </div>
</template>

<script>
import Error from "../../components/Error.vue";

export default {
  components: {
    Error
  },
  name: "Participant",
  data() {
    return {
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
      ],
      countryStatus: null,
      images: {
        studentImage: null,
        transactionImage: null
      },
      detail: {
        //personal info
        name: "",
        phno: "",
        email: "",
        gender: "",
        profession: null,
        //postal addr
        country: "",
        //academic details
        universityName: "",
        stream: "",
        studentIdProof: "", // have to model, file type
        //profesional details
        qualification: null,
        designation: "",
        research: "",
        //feedback
        feedback: null,
        //fee
        amount: 0,
        finalAmount: 0,
        discount: 0,
        additionalDiscount: 0,
        //payment
        paymentMode: null,
        transactionID: "",
        transactionProof: "", // have to model, file type
        timestamp: null
      },
      transactionImgName: "",
      idImgName: "",
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
    pickStudentImage() {
      this.$refs.studentImage.click();
    },
    onStudentFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {});
      fileReader.readAsDataURL(files[0]);
      this.images.studentImage = files[0];
      this.idImgName = this.images.studentImage.name;
    },
    allFieldsFilled() {
      if (this.detail.name == "") {
        return "Name";
      } else if (this.detail.phno == "") {
        return "Phone Number";
      } else if (this.detail.email == "") {
        return "Email";
      } /* else if (this.detail.gender == "") {
        return "Gender";
      } else if (this.detail.profession == null) {
        return "Profession";
      }  else if (this.detail.profession == "s") {
        if (this.detail.universityName == "") {
          return "University Name";
        } else if (this.detail.stream == "") {
          return "Stream";
        } else if (this.idImgName == "") {
          return "Student ID Proof";
        }
      } else if (this.detail.profession == "o") {
        if (this.detail.qualification == null) {
          return "Qualification";
        } else if (this.detail.designation == "") {
          return "Designation";
        } else if (this.detail.research == "") {
          return "Research";
        }
      } else if (this.detail.feedback == null) {
        return "Survey";
      }*/ else if (
        this.detail.country == ""
      ) {
        return "Country - Postal Address";
      }
      return "allFilled";
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
      this.detail.amount = this.detail.country == "India" ? 750 : 10;
      this.detail.discount = 0;
      this.detail.finalAmount =
        this.detail.amount - (this.detail.amount * this.detail.discount) / 100;
      this.detail.finalAmount = Math.floor(this.detail.finalAmount);
    },
    validate() {
      this.setAmount();
      let validation = this.allFieldsFilled();
      //let validation = 'allFilled';
      if (validation == "allFilled") {
        this.detail.timestamp = Date(Date.now());
        this.$router.push({
          name: "Payment",
          params: {
            type: "Participant",
            detail: this.detail,
            generatedFiles: this.images
          }
        });
      } else {
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