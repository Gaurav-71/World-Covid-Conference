<template>
  <div class="modal-container">
    <div class="modal">
      <h1>Create new Promo Code</h1>
      <div class="line"></div>
      <div class="type">
        <h4>Generate code for :</h4>
        <form>
          <input type="radio" id="organizer" name="discountType" value="organizer" v-model="dType" />
          <label for="organizer">Organizer</label>
          <input type="radio" id="group" name="discountType" value="group" v-model="dType" />
          <label for="group">Groups</label>
          <input type="radio" id="other" name="discountType" value="other" v-model="dType" />
          <label for="other">Other</label>
        </form>
      </div>
      <div v-if="dType == 'organizer'" class="organizer">
        <label>Name</label>
        <input type="text" placeholder="Enter Organizer Name" class="input" v-model="name" />
        <div class="btn" @click="generate">Generate</div>
      </div>
      <div v-else-if="dType == 'group'" class="organizer">
        <label>No. Of People In Group</label>
        <input
          type="number"
          placeholder="Enter Quantity"
          class="input"
          min="0"
          max="100"
          v-model="quantity"
        />
        <label style="margin-left: 1rem;">Discount</label>
        <input
          type="number"
          placeholder="Enter Discount"
          class="input"
          min="0"
          max="100"
          v-model="discount"
        />
        <div class="btn" @click="generate">Generate</div>
      </div>
      <div v-else-if="dType == 'other'" class="organizer">
        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter Quantity"
          class="input"
          min="0"
          max="100"
          v-model="quantity"
        />
        <label style="margin-left: 1rem;">Discount</label>
        <input
          type="number"
          placeholder="Enter Discount"
          class="input"
          min="0"
          max="100"
          v-model="discount"
        />
        <div class="btn" @click="generate">Generate</div>
      </div>
      <div v-if="code != ''" class="result">
        Generated Code :
        <span>{{code}}</span>
      </div>
      <div v-if="code != ''" class="no-bg">
        <div v-if="!isLoading" @click="download" class="download btn">Download</div>
        <div v-if="!isLoading" @click="save" class="btn">Save</div>
        <div v-if="isLoading">Saving ...</div>
      </div>
    </div>
    <img
      src="..\assets\Common\delete.svg"
      alt="cancel"
      @click="closeCreatePromoCode"
      class="cancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dType: null,
      name: "",
      code: "",
      discount: null,
      quantity: null,
      isLoading: false
    };
  },
  methods: {
    closeCreatePromoCode() {
      this.$store.state.createNewPromoCode = !this.$store.state
        .createNewPromoCode;
    },
    generate() {
      if (this.dType == "organizer") {
        this.quantity = 5;
        this.discount = 100;
      } else if (this.dType == "group") {
        this.name = "Group";
      } else {
        this.name = "Discount";
      }
      this.code = this.name + Date.now();
      this.code = this.code.split(" ").join("");
    },
    download() {
      window.print();
    },
    save() {
      let detail = { code: this.code, discount: this.discount };
      let payload = {
        data: detail,
        quantity: this.quantity
      };
      this.isLoading = true;
      this.$store
        .dispatch("addNewPromoCode", payload)
        .then(() => {
          this.isLoading = false;
          this.closeCreatePromoCode();
        })
        .catch(resp => {
          console.log(resp);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/modal";
.modal-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 4.5rem;
  bottom: 0;
  z-index: 101;
  background: rgba(lightgrey, 0.7);
  @media print {
    background: none;
  }
  .modal {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 1.5rem 2rem;
    text-align: center;
    overflow-x: hidden;
    @media (max-width: 768px) {
      justify-content: center;
      margin: 0 3rem;
    }
    h1 {
      color: $primary;
      @media print {
        display: none;
      }
    }
    .input {
      width: 100%;
    }
    .type,
    .organizer {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .input {
        text-indent: 0;
      }
      form {
        @include ipad-portrait {
          flex-wrap: wrap;
        }
      }
      @media print {
        display: none;
      }
    }
    .organizer {
      .input {
        width: 40%;
      }
      @media print {
        display: none;
      }
    }
    .result {
      width: 98%;
      margin: 2rem 0;
      padding: 2rem 0;
      background: lightgrey;
      color: black;
      span {
        color: red;
        font-size: x-large;
      }
      @media print {
        display: block;
      }
    }
    .no-bg {
      background: none;
      width: 100%;
      display: flex;
      justify-content: center;
      .btn {
        width: 6rem;
        margin: 0.5rem;
      }
      .download {
        background: lightgrey;
        color: #333;
      }
      @media print {
        display: none;
      }
    }
  }
}
</style>