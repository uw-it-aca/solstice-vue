// generic components
// import CardProperty from "./card-property.vue";
// import CardStatus from "./card-status.vue";
// import LinkButton from "./link-button.vue";

// NOTE: old components must be maintained and deprecated (axdd-xxxx)
import ColorMode from "@/components/color-mode.vue";
import Panel from "@/components/panel.vue";

// 1.0.0
import Sidebar from "@/components/layout/sidebar.vue";
import Topbar from "@/components/layout/topbar.vue";

// 1.0.4
import Card from "@/components/card/card.vue";
import CardHeading from "@/components/card/heading.vue";
import CardAction from "@/components/card/action.vue";
import CardTabs from "@/components/card/tabs.vue";
import TabsList from "@/components/tabs/list.vue";
import TabsDisplay from "@/components/tabs/display.vue";
import TabsItem from "@/components/tabs/item.vue";
import TabsPanel from "@/components/tabs/panel.vue";

// 1.0.5
import Profile from "@/components/profile.vue";
import DisclosureAction from "@/components/disclosure/action.vue";
import DisclosurePanel from "@/components/disclosure/panel.vue";
import DisclosureBlock from "@/components/disclosure/block.vue";

// 1.1.0 (new structure for future releases) <sol-xxxx>
import Link from "@/components/elements/link.vue";

export default {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card,
  CardHeading,
  CardAction,
  CardTabs,
  DisclosureAction,
  DisclosureBlock,
  DisclosurePanel,
  Profile,
  TabsList,
  TabsDisplay,
  TabsItem,
  TabsPanel,
  Sidebar,
  Topbar,
  ColorMode,
  Panel,
  Link,
};
