<template>
  <div class="participant">
    <div class="card header">
      <img src="../../assets/Register/target.svg" alt="participant" />
      <div class="title">
        <h1>Participant Registration</h1>
        <h4>Interested to understand COVID-19 better ? Join us for an information packed conference !</h4>
      </div>
    </div>
    <div v-if="pageNav == 1">
      <div class="card personal-information">
        <div class="heading">
          <h2>Personal Information</h2>
          <div class="line"></div>
        </div>
        <form>
          <div class="input">
            <label>Name</label>
            <input type="text" placeholder="Enter name" class="name" v-model="name" />
          </div>
          <div class="input">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter number" class="number" v-model="phno" />
          </div>
          <div class="input no-margin">
            <label>Email</label>
            <input type="text" placeholder="Enter email" class="email" v-model="email" />
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
              <input type="radio" id="student" name="profession" value="s" v-model="profession" />
              <div class="custom-label">
                <img src="../../assets/Register/Participant/student.svg" alt="student" />
                <label for="student">Student</label>
              </div>
              <input type="radio" id="other" name="profession" value="o" v-model="profession" />
              <div class="custom-label">
                <img src="../../assets/Register/Participant/other-prof.svg" alt="other-prof" />
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
            <input type="text" placeholder="Enter Street 1" class="street" v-model="street1" />
          </div>
          <div class="input">
            <label>Street 2</label>
            <input type="text" placeholder="Enter Street 2" class="street" v-model="street2" />
          </div>
          <div class="input">
            <label>Landmark</label>
            <input type="text" placeholder="Enter Landmark" class="landmark" v-model="landmark" />
          </div>
        </form>
        <form>
          <div class="input">
            <label>State</label>
            <input type="text" placeholder="Enter State" class="state" v-model="state" />
          </div>
          <div class="input">
            <label>City</label>
            <input type="text" placeholder="Enter City" class="city" v-model="city" />
          </div>
          <div class="input">
            <label>Pincode</label>
            <input type="text" placeholder="Enter Pincode" class="pin" v-model="pin" />
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
      <div v-if="profession == 'o'" class="card category-container">
        <div class="heading">
          <h2>Qualification Category</h2>
          <div class="line"></div>
        </div>
        <div class="category">
          <form>
            <div class="custom-label">
              <input type="radio" id="1" name="qualification" value="1" v-model="qualification" />
              <img src="../../assets/Register/Participant/teacher.svg" alt="male" />
              <label
                for="male"
              >Faculty / Post-doctoral Fellow / Research Associate / Research Engineer</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="2" name="qualification" value="2" v-model="qualification" />
              <img src="../../assets/Register/Participant/businessman.svg" alt="male" />
              <label for="female">Industry Personnel</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="3" name="qualification" value="3" v-model="qualification" />
              <img src="../../assets/Register/Participant/other-prof.svg" alt="male" />
              <label for="other">Other</label>
            </div>
          </form>
        </div>
      </div>
      <div v-if="profession == 'o'" class="card professional-details">
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
              v-model="designation"
            />
          </div>
          <div class="input">
            <label>Area of Research</label>
            <input
              type="text"
              placeholder="Enter Area of Research"
              class="research"
              v-model="research"
            />
          </div>
        </form>
      </div>
      <div v-if="profession == 's'" class="card academic-details">
        <div class="heading">
          <h2>Academic Details</h2>
          <div class="line"></div>
        </div>
        <form>
          <div class="input">
            <label>University / College Name</label>
            <input type="text" placeholder="Enter name" class="college" v-model="universityName" />
          </div>
          <div class="input">
            <label>Stream</label>
            <input type="text" placeholder="Enter Stream" class="stream" v-model="stream" />
          </div>
          <div class="input">
            <label>Student ID proof</label>
            <input type="file" class="student-id" />
          </div>
        </form>
      </div>
      <div v-if="profession != null " class="card address">
        <div class="heading">
          <h2 v-if="profession == 'o'">Office Address</h2>
          <h2 v-else>University / College Address</h2>
          <div class="line"></div>
        </div>
        <form>
          <div class="input">
            <label>Locality</label>
            <input type="text" placeholder="Enter Locality" class="street" v-model="locality2" />
          </div>
          <div class="input">
            <label>Landmark</label>
            <input type="text" placeholder="Enter Landmark" class="landmark" v-model="landmark2" />
          </div>
          <div v-if="profession == 'o'" class="input">
            <label>Office Number</label>
            <input type="text" placeholder="Enter Office Number" class="number" v-model="landline2" />
          </div>
        </form>
        <form>
          <div class="input">
            <label>State</label>
            <input type="text" placeholder="Enter State" class="state" v-model="state2" />
          </div>
          <div class="input">
            <label>City</label>
            <input type="text" placeholder="Enter City" class="city" v-model="city2" />
          </div>
          <div class="input">
            <label>Pincode</label>
            <input type="text" placeholder="Enter Pincode" class="pin" v-model="pin2" />
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
              v-model="country2"
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
      <div class="card category-container">
        <div class="heading">
          <h2>How did you hear about the conference ?</h2>
          <div class="line"></div>
        </div>
        <div class="category">
          <form>
            <div class="custom-label">
              <input type="radio" id="f1" name="feedback" value="f1" v-model="feedback" />
              <img src="../../assets/Register/Participant/friends.svg" alt="male" />
              <label for="male">Friends / Colleagues</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="f2" name="feedback" value="f2" v-model="feedback" />
              <img src="../../assets/Register/Participant/social.svg" alt="male" />
              <label for="female">Social Media</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="f3" name="feedback" value="f3" v-model="feedback" />
              <img src="../../assets/Register/Participant/search.svg" alt="male" />
              <label for="other">Search Engine</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="f4" name="feedback" value="f4" v-model="feedback" />
              <img src="../../assets/Register/Participant/other-feedback.svg" alt="male" />
              <label for="other">Other</label>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="card pay-container">
        <div class="heading">
          <h2>Amount to be Paid</h2>
          <div class="line"></div>
        </div>
        <div class="body">
          <div class="amount">Registration Fees : ${{amount}} | &#8377;{{amount * 74.90}}</div>
          <div class="discount">Discount : 50%</div>
          <div class="line"></div>
          <div class="final-amt">
            Final Fee :
            <span>${{finalAmount}} | &#8377;{{finalAmount * 74.90}}</span>
          </div>
        </div>
      </div>
      <div class="card category-container">
        <div class="heading">
          <h2>Mode of Payment</h2>
          <div class="line"></div>
        </div>
        <div class="category">
          <form>
            <div class="custom-label">
              <input type="radio" id="p1" name="paymentMode" value="1" v-model="paymentMode" />
              <img src="../../assets/Register/Participant/neft.svg" alt="neft" />
              <label for="male">NEFT</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="p2" name="paymentMode" value="2" v-model="paymentMode" />
              <img src="../../assets/Register/Participant/gpay.png" alt="gpay" />
              <label for="female">Google Pay</label>
            </div>
            <div class="custom-label">
              <input type="radio" id="p3" name="paymentMode" value="3" v-model="paymentMode" />
              <img src="../../assets/Register/Participant/paypal.svg" alt="paypal" />
              <label for="other">PayPal</label>
            </div>
          </form>
        </div>
      </div>
      <div v-if="paymentMode==1" class="card category-container">
        <div class="heading">
          <h2>NEFT</h2>
          <div class="line"></div>
        </div>
        <div class="category">
          <p>
            Name :
            <span>Bengaluru Genomics Center Pvt. Ltd.</span>
          </p>
          <p>
            Bank :
            <span>State Bank of India</span>
          </p>
          <p>
            Account Number :
            <span>35545121471</span>
          </p>
          <p>
            IFSC Code :
            <span>SBIN0005191</span>
          </p>
          <p>
            SWIFT Code (BIC) :
            <span>SBININBB 425</span>
          </p>
          <br />
          <p>
            Please make a payment of
            <span>${{finalAmount}} | &#8377;{{finalAmount * 74.90}}</span>
          </p>
        </div>
      </div>
      <div v-else-if="paymentMode==2" class="card category-container">
        <div class="heading">
          <h2>Google Pay</h2>
          <div class="line"></div>
        </div>
        <div class="category">
          <p>
            Please make a payment of
            <span>${{finalAmount}} | &#8377;{{finalAmount * 74.90}}</span>
          </p>
          <p>
            Phone Number :
            <span>+91-8105320806</span>
          </p>
        </div>
      </div>
      <div v-else-if="paymentMode==3" class="card category-container">
        <div class="heading">
          <h2>PayPal</h2>
          <div class="line"></div>
        </div>
        <div class="category">
          <p>
            Please make a payment of
            <span>${{finalAmount}} | &#8377;{{finalAmount * 74.90}}</span>
          </p>
          <p>
            Phone Number :
            <span>+91-8105320806</span>
          </p>
        </div>
      </div>
      <div v-if="paymentMode!=null" class="card pay-container">
        <div class="heading">
          <h2>Payment Confirmation</h2>
          <div class="line"></div>
        </div>
        <div class="payment-validation">
          <form>
            <div class="input">
              <label>Transaction ID</label>
              <input
                type="text"
                placeholder="Enter Transaction ID"
                class="transaction"
                v-model="transactionID"
              />
            </div>
            <div class="input">
              <label>Transaction Proof (A screenshot of the completed transaction)</label>
              <input type="file" class="student-id" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div @click="validate(2)" v-if="pageNav == 1" class="btn">Save & Pay</div>
    <div v-if="pageNav == 2" class="actions">
      <div @click="pageNav=1" class="btn transparent">Back</div>
      <div @click="validate(3)" class="btn">Register</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Participant",
  data() {
    return {
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
      isDeveloped: true,
      pageNav: 1,

      //personal info
      name: "",
      phno: "",
      email: "",
      gender: "",
      profession: null,

      //postal addr
      street1: "",
      street2: "",
      landmark: "",
      state: "",
      city: "",
      pin: "",
      country: "",

      //academic details
      universityName: "",
      stream: "",
      studentIdProof: "", // have to model, file type

      //profesional details
      qualification: null,
      designation: "",
      research: "",

      //second addr
      locality2: "",
      landmark2: "",
      state2: "",
      city2: "",
      pin2: "",
      country2: "",
      landline2: null,

      //feedback
      feedback: null,

      //fee
      amount: 0,
      finalAmount: 0,
      discount: 0,

      //payment
      paymentMode: null,
      transactionID: "",
      transactionProof: "" // have to model, file type
    };
  },
  methods: {
    validate(page) {
      if (page == 2) {
        this.isDeveloped = this.checkDeveloped();
        if (this.isDeveloped) {
          this.discount = 0;
          if (this.profession == "s") {
            this.amount = 75;
            this.finalAmount = 75;
          } else {
            if (this.qualification == 1) {
              this.amount = 150;
              this.finalAmount = 150;
            } else {
              this.amount = 250;
              this.finalAmount = 250;
            }
          }
        } else {
          this.discount = 50;
          if (this.profession == "s") {
            this.amount = 75;
            this.finalAmount =
              this.amount - (this.amount * this.discount) / 100;
          } else {
            if (this.qualification == 1) {
              this.amount = 150;
              this.finalAmount =
                this.amount - (this.amount * this.discount) / 100;
            } else {
              this.amount = 250;
              this.finalAmount =
                this.amount - (this.amount * this.discount) / 100;
            }
          }
        }
        this.pageNav = page;
      } else if (page == 3) {
        this.$router.push("/");
        this.$store.state.navItem = 1;
      }
    },
    checkDeveloped() {
      for (var i = 0; i < this.allDevelopedCountries.length; i++) {
        if (this.allDevelopedCountries[i] == this.country) {
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
  .address,
  .professional-details,
  .academic-details,
  .payment-validation {
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
        .designation {
          background-image: url("../../assets/Register/Participant/ceo.svg");
        }
        .research {
          background-image: url("../../assets/Register/Participant/research.svg");
        }
        .student-id {
          text-indent: 0;
        }
        .stream {
          background-image: url("../../assets/Register/Participant/stream.svg");
        }
        .college {
          background-image: url("../../assets/Register/Participant/college.svg");
        }
        .transaction {
          background-image: url("../../assets/Register/Participant/transaction.svg");
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
        .country {
          width: 100%;
        }
      }
    }
  }
  .category-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
    .category {
      span {
        color: $primary;
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .custom-label {
          margin: 1rem 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            margin: 0 1rem;
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
  }
  .btn {
    text-align: center;
    width: 6rem;
    margin: 0 1.2rem 4rem 0.5rem;
    padding: 0.8rem 2rem;
    border-radius: 0.6rem;
    background: #7d62a9;
    box-shadow: 10px 10px 20px rgba(grey, 0.5);
    color: white;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
  .btn:hover {
    background: darken(#7d62a9, 12%);
  }
  .btn:active {
    transform: scale(0.8);
  }
  .actions {
    display: flex;
    justify-content: center;
    .btn {
      @include iphone {
        width: 5rem;
      }
    }
    .transparent {
      background: lighten(#333, 50%);
      color: black;
    }
    .transparent:hover {
      background: darken(lighten(#333, 50%), 30%);
      color: white;
    }
  }
  .pay-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
    .line {
      width: 100%;
      height: 1px;
      background: lightgray;
    }
    .amount,
    .discount,
    .final-amt {
      margin: 1rem 0;
    }
    .body {
      span {
        color: $primary;
      }
    }
    .payment-validation {
      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}
</style>