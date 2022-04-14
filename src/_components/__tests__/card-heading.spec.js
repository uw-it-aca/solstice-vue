import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CardHeading from "../card/heading.vue";

describe("Card Heading", () => {
  it("renders correct element", () => {
    const wrapper = mount(CardHeading, { props: { level: "3" } });
    expect(wrapper.find("h3").exists()).toBe(true);
  });
});
