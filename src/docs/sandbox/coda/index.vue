<template>
  <axdd-topbar
    :app-name="appName"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
    :user-name="userName"
    :sign-out-url="signOutUrl"
  >
    <template #main>
      <slot name="content">
        <div class="row my-4">
          <div class="col">
            <h1 class="axdd-font-encode-sans">{{ pageTitle }}</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
              soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus
              eligendi natus voluptatum iusto reiciendis deserunt tempora
              praesentium laboriosam ullam facilis velit culpa.
            </p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col">
            <h2 class="axdd-font-encode-sans">My data for TRAIN 100 A</h2>

            <div class="alert alert-dark-beige small" role="alert">
              <p>
                The query you requested will not generate data for one of the
                following reasons:
              </p>
              <ul>
                <li>
                  The course you've selected has fewer than 5 students. To
                  protect students' privacy, we do not show data on courses with
                  fewer than 5 students enrolled.
                </li>
                <li>
                  To protect you and your colleagues' privacy, we do not show
                  data for a single course, unless it's a course you've taught.
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <h2 class="axdd-font-encode-sans">
              Historical Student Data TRAIN 100 A
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              delectus commodi reiciendis repellat, nemo odit perferendis earum
              quam quidem id iste itaque necessitatibus odio fugit reprehenderit
              suscipit explicabo! Ipsum, quae!
            </p>

            <axdd-tabs :tabs-id="'courses'">
              <template #items>
                <axdd-tab-item
                  :tabs-id="'courses'"
                  :panel-id="'all'"
                  :active-tab="true"
                  >All Courses</axdd-tab-item
                >
                <axdd-tab-item :tabs-id="'courses'" :panel-id="'mine'"
                  >Only My Courses</axdd-tab-item
                >
              </template>
              <template #panels>
                <axdd-tab-panel :panel-id="'all'" :active-panel="true">
                  <div class="d-flex mb-4">
                    <select
                      class="form-select form-select-sm me-2 w-25"
                      aria-label=""
                    >
                      <option selected>All Quarters</option>
                      <option value="1">Spring</option>
                      <option value="2">Summer</option>
                      <option value="3">Winter</option>
                    </select>
                    <select
                      class="form-select form-select-sm w-25"
                      aria-label=""
                    >
                      <option selected>All Years</option>
                      <option value="1">2022</option>
                      <option value="2">2021</option>
                      <option value="3">2020</option>
                    </select>
                  </div>
                  <p>
                    <strong>all</strong> Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Id aperiam dolores harum doloribus libero
                    sapiente corrupti sint rerum incidunt. Qui quia hic ipsam
                    culpa laudantium delectus sapiente tempore, eveniet modi.
                  </p>
                </axdd-tab-panel>
                <axdd-tab-panel :panel-id="'mine'">
                  <div class="d-flex mb-4">
                    <select
                      class="form-select form-select-sm me-2 w-50"
                      aria-label=""
                    >
                      <option selected>All My Courses</option>
                      <option value="1">2017 - Spring</option>
                      <option value="2">2017 - Summer</option>
                      <option value="3">2016 - Winter</option>
                    </select>
                  </div>
                  <p>
                    <strong>only mine</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Repellendus iste, expedita,
                    vitae voluptatibus nobis amet eligendi consectetur
                    repudiandae aut ut vel? Amet nesciunt culpa non molestiae
                    enim consequuntur provident sit.
                  </p>
                </axdd-tab-panel>
              </template>
            </axdd-tabs>
          </div>
        </div>
      </slot>
    </template>
    <template #footer></template>
  </axdd-topbar>
</template>

<script>
import Topbar from "../../../_layouts/topbar.vue";
import Tabs from "../../../_components/tabs/tabs.vue";
import TabItem from "../../../_components/tabs/item.vue";
import TabPanel from "../../../_components/tabs/panel.vue";

export default {
  components: {
    "axdd-topbar": Topbar,
    "axdd-tabs": Tabs,
    "axdd-tab-item": TabItem,
    "axdd-tab-panel": TabPanel,
  },
  data() {
    return {
      // minimum application setup overrides
      appName: "Course Dashboard",
      appRootUrl: "/myapp",
      userName: "javerage",
      signOutUrl: "/signout",
      pageTitle: "My Courses",
    };
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>

<style lang="scss" scoped></style>
