// entry point for npm install via github
// iterate the components object and globally register each component

import components from "./src/components";

const AxddComponents = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export default AxddComponents;
