<template>
  <div v-if="!$store.state.isSavingForm" class="register">
    <div class="card header">
      <img :src="getImgUrl()" alt="header" />
      <div class="title">
        <h1>{{type}} Registration</h1>
        <h4>Interested to understand COVID-19 better ? Join us for an information packed conference !</h4>
      </div>
    </div>
    <transition name="fade" appear>
      <Error :obj="error" :emptyStr="true" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated bounceInUp" appear>
      <div>
        <div class="card pay-container">
          <div class="heading">
            <h2>Amount to be Paid</h2>
            <div class="line"></div>
          </div>
          <div v-if="type == 'Participant'" class="body">
            <div
              v-if="detail.country == 'India'"
              class="amount"
            >Registration Fees : &#8377;{{detail.amount}}</div>
            <div v-else class="amount">Registration Fees : ${{detail.amount}}</div>
            <div class="discount">Discount : {{detail.discount}}%</div>
            <p class="promo">
              Have a promo code ?
              <input
                type="radio"
                id="yes"
                name="promo"
                value="y"
                v-model="hasPromoCode"
              />
              <label for="promo">Yes</label>
              <input type="radio" id="no" name="promo" value="n" v-model="hasPromoCode" />
              <label for="no">No</label>
            </p>
            <div v-if="hasPromoCode == 'y'" class="promo-code">
              <input type="text" placeholder="Enter Promo Code" v-model="promoCode" />
              <div @click="verifyPromoCode" class="btn">Apply Code</div>
              <h4 v-if="isCodeValid != null" class="promo-error">{{promoMessage}}</h4>
            </div>
            <div class="line"></div>
            <div
              v-if="detail.country == 'India'"
              class="final-amt"
            >Final Fee : &#8377;{{detail.finalAmount }}</div>
            <div v-else class="final-amt">Final Fee : ${{detail.finalAmount}}</div>
          </div>
          <div v-else-if="type == 'Workshop'" class="body">
            <div
              v-if="detail.country == 'India'"
              class="amount"
            >Registration Fees : &#8377;{{detail.amount}}</div>
            <div v-else class="amount">Registration Fees : ${{detail.amount}}</div>
            <div class="discount">Discount : {{detail.discount}}%</div>
            <div class="line"></div>
            <div
              v-if="detail.country == 'India'"
              class="final-amt"
            >Final Fee : &#8377;{{detail.finalAmount }}</div>
            <div v-else class="final-amt">Final Fee : ${{detail.finalAmount}}</div>
          </div>
          <div v-else-if="type == 'Sponsor'" class="body">
            <div v-if="detail.country == 'India'">
              <p v-if="detail.fee == '30,000'">Sponsorship Category : Platinum</p>
              <p v-else-if="detail.fee == '20,000'">Sponsorship Category : Gold</p>
              <p v-else>Sponsorship Category : Silver</p>
              <p>Sponsorship Fee : &#8377;{{detail.fee}}</p>
            </div>
            <div v-else>
              <p v-if="detail.fee == '10,000'">Sponsorship Category : Platinum</p>
              <p v-else-if="detail.fee == '5000'">Sponsorship Category : Gold</p>
              <p v-else>Sponsorship Category : Silver</p>
              <p>Sponsorship Fee : ${{detail.fee}}</p>
            </div>
          </div>
        </div>
        <div v-if="detail.finalAmount > 0" class="card category-container">
          <div class="heading">
            <h2>Mode of Payment</h2>
            <div class="line"></div>
          </div>
          <div class="category">
            <form>
              <div class="custom-label">
                <input
                  type="radio"
                  id="p1"
                  name="paymentMode"
                  value="1"
                  v-model="detail.paymentMode"
                />
                <img src="../../assets/Register/Participant/neft.svg" alt="neft" />
                <label for="male">NEFT / Net Banking</label>
              </div>
              <div class="custom-label">
                <input
                  type="radio"
                  id="p2"
                  name="paymentMode"
                  value="2"
                  v-model="detail.paymentMode"
                />
                <img src="../../assets/Register/Participant/gpay.png" alt="gpay" />
                <label for="female">Google Pay</label>
              </div>
              <div class="custom-label">
                <input
                  type="radio"
                  id="p3"
                  name="paymentMode"
                  value="3"
                  v-model="detail.paymentMode"
                />
                <img src="../../assets/Register/Participant/paypal.svg" alt="paypal" />
                <label for="other">PayPal</label>
              </div>
              <div class="custom-label">
                <input
                  type="radio"
                  id="p4"
                  name="paymentMode"
                  value="4"
                  v-model="detail.paymentMode"
                />
                <img src="../../assets/Heading/questions.svg" alt="questions" />
                <label for="other">None of the above, Please Contact Us to complete payment</label>
              </div>
            </form>
          </div>
        </div>
        <div v-if="detail.paymentMode==1" class="card category-container">
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
              <span>SBIN0041203</span>
            </p>
            <p>
              SWIFT Code (BIC) :
              <span>SBININBB 425</span>
            </p>
            <br />
            <p v-if="type == 'Participant'">
              Please make a payment of
              <span
                v-if="detail.country == 'India'"
              >&#8377;{{detail.finalAmount }}</span>
              <span v-else>${{detail.finalAmount}}</span>
            </p>
            <p v-else-if="type == 'Workshop'">
              Please make a payment of
              <span
                v-if="detail.country == 'India'"
              >&#8377;{{detail.finalAmount }}</span>
              <span v-else>${{detail.finalAmount}}</span>
            </p>
            <p v-else-if="type == 'Sponsor'">
              Please make a payment of
              <span v-if="detail.country == 'India'">&#8377;{{detail.fee}}</span>
              <span v-else>${{detail.fee}}</span>
            </p>
          </div>
        </div>
        <div v-else-if="detail.paymentMode==2" class="card category-container">
          <div class="heading">
            <h2>Google Pay</h2>
            <div class="line"></div>
          </div>
          <div class="category">
            <p v-if="type == 'Participant'">
              Please make a payment of
              <span
                v-if="detail.country == 'India'"
              >&#8377;{{detail.finalAmount }}</span>
              <span v-else>${{detail.finalAmount}}</span>
            </p>
            <p v-else-if="type == 'Workshop'">
              Please make a payment of
              <span
                v-if="detail.country == 'India'"
              >&#8377;{{detail.finalAmount }}</span>
              <span v-else>${{detail.finalAmount}}</span>
            </p>
            <p v-else-if="type == 'Sponsor'">
              Please make a payment of
              <span v-if="detail.country == 'India'">&#8377;{{detail.fee}}</span>
              <span v-else>${{detail.fee}}</span>
            </p>
            <p>
              Phone Number :
              <span>+91-8105320806</span>
            </p>
          </div>
        </div>
        <div v-else-if="detail.paymentMode==3" class="card category-container">
          <div class="heading">
            <h2>PayPal</h2>
            <div class="line"></div>
          </div>
          <div class="category">
            <p v-if="type == 'Participant'">
              Please make a payment of
              <span
                v-if="detail.country == 'India'"
              >&#8377;{{detail.finalAmount }}</span>
              <span v-else>${{detail.finalAmount}}</span>
            </p>
            <p v-else-if="type == 'Workshop'">
              Please make a payment of
              <span
                v-if="detail.country == 'India'"
              >&#8377;{{detail.finalAmount }}</span>
              <span v-else>${{detail.finalAmount}}</span>
            </p>
            <p v-else-if="type == 'Sponsor'">
              Please make a payment of
              <span v-if="detail.country == 'India'">&#8377;{{detail.fee}}</span>
              <span v-else>${{detail.fee}}</span>
            </p>
            <a
              href="https://paypal.me/worldcovidconference?locale.x=en_GB"
              target="_blank"
            >Click Here to pay, Please pay on paypal and return here to complete registration</a>
          </div>
        </div>
        <div
          v-if="detail.paymentMode == 1 || detail.paymentMode == 2 || detail.paymentMode == 3"
          class="card pay-container"
        >
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
                  v-model="detail.transactionID"
                />
              </div>
              <div class="input file-type">
                <label>Transaction Proof (A screenshot of the completed transaction)</label>
                <input
                  type="file"
                  class="student-id"
                  ref="transactionImage"
                  @change="onTransactionFilePicked"
                />
                <div @click="pickTransactionImage" class="btn my-btn shake">Upload File</div>
                <p
                  class="upload-msg"
                  v-if=" !transactionImgName == ''"
                >Uploaded {{transactionImgName}} succesfully !</p>
                <p class="upload-msg" v-else>No file uploaded</p>
              </div>
            </form>
          </div>
        </div>
        <div v-if="detail.paymentMode != 4" class="actions">
          <div @click="validate()" class="btn shake">Register</div>
        </div>
        <div v-else class="actions">
          <div @click="route()" class="btn shake">Contact Us</div>
        </div>
      </div>
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
  </div>
</template>

<script>
import Loading from "../../components/Circle.vue";
import Error from "../../components/Error.vue";

export default {
  name: "Payment",
  props: {
    type: String,
    detail: Object,
    generatedFiles: Object
  },
  components: {
    Loading,
    Error
  },
  data() {
    return {
      transactionImgName: "",
      hasPromoCode: null, //radio btn
      promoCode: "", //input box
      additionalDiscount: null,
      isCodeValid: null,
      promoMessage: "",
      deletePromoCode: null,
      unsubscribe: null,
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
    getImgUrl() {
      if (this.type == "Participant") {
        return require("../../assets/Register/target.svg");
      } else if (this.type == "Sponsor") {
        return require("../../assets/Register/sponsor.svg");
      } else {
        return require("../../assets/Register/workshop.svg");
      }
    },
    verifyPromoCode() {
      let codeVerificationResponse = false;
      for (var i = 0; i < this.$store.getters.getPromoCodes.length; i++) {
        console.log(this.$store.getters.getPromoCodes[i].promo.code);
        if (this.$store.getters.getPromoCodes[i].promo.code == this.promoCode) {
          codeVerificationResponse = true;
          this.isCodeValid = true;
          this.deletePromoCode = this.$store.getters.getPromoCodes[i].id;
          this.detail.additionalDiscount = this.$store.getters.getPromoCodes[
            i
          ].promo.discount;
          this.promoMessage =
            "Additional Discount of " +
            this.detail.additionalDiscount +
            "% is applied";
          this.detail.finalAmount =
            this.detail.finalAmount -
            (this.detail.finalAmount * this.detail.additionalDiscount) / 100;
          this.detail.finalAmount = Math.floor(this.detail.finalAmount);
          this.$store.getters.getPromoCodes.splice(i, 1);
          console.log("delete id", this.deletePromoCode);
          console.log("if true", this.isCodeValid);
          break;
        }
      }
      if (!codeVerificationResponse) {
        this.isCodeValid = false;
        console.log("message", this.isCodeValid);
        this.promoMessage =
          "This promo code is invalid ! Please enter a valid code";
        this.detail.additionalDiscount = 0;
      }
    },
    allFieldsFilled() {
      if (this.detail.finalAmount != 0) {
        if (this.transactionImgName == "") {
          return "Transaction Proof";
        } else if (this.detail.transactionID == "") {
          return "Transaction ID";
        } else if (this.detail.paymentMode == null) {
          return "";
        }
      } else {
        this.detail.transactionID = "Speaker Promotion Code";
        this.generatedFiles.transactionImage = null;
      }
      return "allFilled";
    },
    pickTransactionImage() {
      this.$refs.transactionImage.click();
    },
    onTransactionFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {});
      fileReader.readAsDataURL(files[0]);
      this.generatedFiles.transactionImage = files[0];
      this.transactionImgName = this.generatedFiles.transactionImage.name;
    },
    validate() {
      let validation = this.allFieldsFilled();
      if (validation == "allFilled") {
        this.$store.state.isSavingForm = true;
        if (this.type == "Participant") {
          let payload = {
            generatedFiles: this.generatedFiles,
            detail: this.detail,
            deleteId: this.deletePromoCode
          };
          this.$store
            .dispatch("saveParticipantDetails", payload)
            .then(() => {
              this.$store.state.isSavingForm = false;
              this.$router.push({
                name: "SuccessfulRegistration",
                params: {
                  type: "Participant",
                  detail: this.detail
                }
              });
              this.$store.state.navItem = 1;
            })
            .catch(resp => {
              console.log(resp);
            });
        } else if (this.type == "Sponsor") {
          let payload = {
            generatedFiles: this.generatedFiles,
            detail: this.detail
          };
          this.$store
            .dispatch("saveSponsorDetails", payload)
            .then(() => {
              this.$store.state.isSavingForm = false;
              this.$router.push({
                name: "SuccessfulRegistration",
                params: {
                  type: "Participant",
                  detail: this.detail
                }
              });
              this.$store.state.navItem = 1;
            })
            .catch(resp => {
              console.log(resp);
            });
        } else if (this.type == "Workshop") {
          let payload = {
            generatedFiles: this.generatedFiles,
            detail: this.detail
          };
          this.$store
            .dispatch("saveWorkshopDetails", payload)
            .then(() => {
              this.$store.state.isSavingForm = false;
              this.$router.push({
                name: "SuccessfulRegistration",
                params: {
                  type: "Workshop",
                  detail: this.detail
                }
              });
              this.$store.state.navItem = 1;
            })
            .catch(resp => {
              console.log(resp);
            });
        }
      } else {
        this.error.message.message = "Please fill the " + validation + " field";
        this.error.isVisible = true;
      }
    },
    route() {
      this.$router.push("/contacts");
    }
  },
  mounted() {
    this.$store
      .dispatch("loadPromoCodes")
      .then(resp => {
        this.unsubscribe = resp;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/register";
.promo {
  input {
    margin: 0 0 0 1rem;
    cursor: pointer;
  }
  label {
    margin: 0 0.5rem;
  }
}

.promo-code {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  input {
    //width: 30%;
    background-image: url("../../assets/Register/discount.svg");
  }
  .btn {
    margin-bottom: 0;
    box-shadow: none;
  }
  .promo-error {
    color: red;
  }
}
</style>