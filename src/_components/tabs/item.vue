<template>
  <li class="nav-item me-1" role="presentation">
    <button
      class="nav-link text-secondary text-uppercase small border-light-gray border-bottom border-4"
      :class="classObject"
      :tabindex="[activeTab ? '0' : '-1']"
      :id="panelId + '-tab'"
      data-bs-toggle="tab"
      :data-bs-target="'#' + panelId"
      type="button"
      role="tab"
      :aria-controls="panelId"
      :aria-selected="activeTab"
      @keydown.right="moveNext"
      @keydown.left="movePrev"
      @click="onClick"
    >
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: "TabsItem",
  props: {
    panelId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
    activeTab: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    elements() {
      // get elements by custom className by concat tabsId and -link (i.e. tabsId-link )
      return document.getElementsByClassName(this.tabsId + "-link");
    },
    classObject() {
      let classes = {};
      classes[this.tabsId + "-link"] = true;
      classes["active"] = this.activeTab;
      return classes;
    },
  },
  methods: {
    findIndex(target) {
      return [].findIndex.call(this.elements, (e) => e === target);
    },
    moveTab(index) {
      // focus and click on tab
      this.elements[index].click();
      this.elements[index].focus();

      // set tabindexes
      Array.from(this.elements).forEach((element, i) => {
        if (i == index) {
          element.tabIndex = 0;
        } else {
          element.tabIndex = -1;
        }
      });
    },
    moveNext(event) {
      const index = this.findIndex(event.target);
      if (index < this.elements.length - 1) this.moveTab(index + 1);
    },
    movePrev(event) {
      const index = this.findIndex(event.target);
      if (index > 0) this.moveTab(index - 1);
    },
    onClick(event) {
      const index = this.findIndex(event.target);
      this.moveTab(index);
    },
  },
};
</script>
