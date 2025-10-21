<template>
  <button
    id="countryDropdownMenuButton"
    class="btn btn-subdued-primary border border-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="me-1">{{ flag(selectedCountry.code) }}</span>
  </button>

  <ul class="dropdown-menu" aria-labelledby="countryDropdownMenuButton">
    <li>
      <button
        type="button"
        class="dropdown-item"
        @click="
          selectCountry({
            code: 'US',
            name: 'United States of America',
            callingCode: '1',
          })
        "
      >
        {{ flag("US") }} United States of America (+1)
      </button>
    </li>

    <li><hr class="dropdown-divider" /></li>
    <li v-for="(country, index) in countries" :key="index">
      <button
        type="button"
        class="dropdown-item"
        @click="selectCountry(country)"
      >
        {{ flag(country.code) }} {{ country.name }}
        <span class="text-secondary">+{{ country.callingCode }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import * as countryCodes from "country-codes-list";

export default {
  emits: ["update:callingCode"],
  data: function () {
    return {
      countries: [],
      selectedCountry: {
        code: "US",
        name: "United States of America",
        callingCode: "1",
      },
    };
  },

  mounted() {
    const countryList = countryCodes.customList(
      "countryCode",
      "{countryNameEn}|{countryCallingCode}"
    );

    // clean up incorrect data
    this.countries = Object.entries(countryList)
      .map(([code, value]) => {
        const [name, callingCodeRaw] = value.split("|");

        let callingCode = callingCodeRaw.split(" ")[0]; // handle space-separated codes

        // special case for Bonaire "5997"
        if (callingCode === "5997") {
          callingCode = "599";
        } else if (/^\d{4}$/.test(callingCode)) {
          // else, shorten all four digit codes "1234"
          callingCode = callingCode[0]; // keep only the first digit
        }

        return {
          code,
          name,
          callingCode,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically by country name
  },
  methods: {
    flag(country) {
      return getUnicodeFlagIcon(country);
    },

    selectCountry(country) {
      this.selectedCountry = country;
      //console.log("Selected country calling code: +" + country.callingCode);
      this.$emit("update:callingCode", country.callingCode);
    },
  },
};
</script>
