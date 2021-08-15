<template>
  <div class="passwordGeneratorMain">
    <div class="passwordLength">
      <p class="passwordLengthHeader">Select Password Length</p>
      <ul class="passwordLengthItems">
        <li @click="setPassLength(8)">
          <input
            class="lengthRadio"
            type="radio"
            id="passwordLengthEight"
            name="passwordLenght"
            value="8"
            v-model="passLength"
          />
          <label class="passwordLengthLabelEight">8</label>
        </li>
        <li @click="setPassLength(10)">
          <input
            class="lengthRadio"
            type="radio"
            id="passwordLengthTen"
            name="passwordLenght"
            value="10"
            v-model="passLength"
          />
          <label class="passwordLengthLabelTen">10</label>
        </li>
        <li @click="setPassLength(12)">
          <input
            class="lengthRadio"
            type="radio"
            id="passwordLengthTwelve"
            name="passwordLenght"
            value="12"
            v-model="passLength"
          />
          <label class="passwordLengthLabelTwelve">12</label>
        </li>
      </ul>
    </div>
    <div class="passwordComplexity">
      <p class="passwordComplexityHeader">Select Password Complexity</p>
      <ul class="passwordComplexityItems">
        <li>
          <input
            class="upperCaseCheckBox"
            type="checkbox"
            id="upperCase"
            value="upperCase"
            v-model="isUpperCase"
          />
          <label class="upperCaseLabel" for="upperCase">Upper Case</label>
        </li>
        <li>
          <input
            class="lowerCaseCheckBox"
            type="checkbox"
            id="lowerCase"
            value="lowerCase"
            v-model="isLowerCase"
          />
          <label class="lowerCaseLabel" for="lowerCase"> Lower Case</label>
        </li>
        <li>
          <input
            class="numberCheckBox"
            type="checkbox"
            id="number"
            value="numer"
            v-model="isNumber"
          />
          <label class="numberLabel" for="numer">Number</label>
        </li>
        <li>
          <input
            class="symbolCheckBox"
            type="checkbox"
            id="symbol"
            value="symbol"
            v-model="isSymbol"
          />
          <label class="symbolLabel" for="symbol">Symbol</label>
        </li>
      </ul>
    </div>
    <span class="generatedPasswordSpan">{{ passwordString }}</span>
    <label class="generatedPasswordPlaceholder"> {{ placeholder() }} </label>
    <button class="copyGeneratedPasswordButton" type="submit" @click="copyToClipBoard()">
      Copy Password
    </button>
  </div>
</template>
<script>
export default {
  name: "PasswordGenerator",
  data() {
    return {
      isUpperCase: true,
      isLowerCase: true,
      isNumber: true,
      isSymbol: true,
      passLength: 0,
      passwordString: ''
    };
  },
  methods: {
    setPassLength(length) {
      this.passLength = length;
      this.generator(this.passLength);
    },
    generator(passLength) {
      var length = passLength ? passLength : 12;
      var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
      var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      var password = "";
      var character = "";
      while (password.length < length) {
        if(this.isLowerCase) {
            var entity1 = Math.ceil(lowerCaseString.length * Math.random() * Math.random());
            character += lowerCaseString.charAt(entity1);
        }
        if(this.isUpperCase) {
            var entity2 = Math.ceil(upperCaseString.length * Math.random() * Math.random());
            character += upperCaseString.charAt(entity2);
        }
        if(this.isSymbol) {
           var entity3 = Math.ceil(symbols.length * Math.random()* Math.random());
           character += symbols.charAt(entity3);
        }
        if(this.isNumber) {
            var entity4 = Math.ceil(numbers.length * Math.random() * Math.random());
            character += numbers.charAt(entity4);
        }
        if(!this.isNumber && !this.isLowerCase && !this.isUpperCase && !this.isSymbol ) {
            return;
        }
        password = character;
      }
      password = password
        .split("")
        .sort(function() {
          return 0.5 - Math.random();
        })
        .join("");
      this.passwordString = password.substr(0, this.passLength);
    },
    copyToClipBoard () {
      var generatedPassword = document.getElementsByClassName("generatedPasswordSpan")[0];
      var textArea = document.createElement("textarea");
      textArea.value = generatedPassword.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
    },
    placeholder () {
      if(this.passLength == 0) {
        return 'Password';
      }
      else {
        return '';
      }
    }
  },
};
</script>
