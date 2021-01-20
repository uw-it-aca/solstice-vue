<template>
  <uw-alert-banner></uw-alert-banner>
</template>

<script>
import AlertBanner from '../_layouts/alert-banner/index.vue';

export default {
  name: 'Alert',
  components: {
    'uw-alert-banner': AlertBanner,
  },
};
</script>
