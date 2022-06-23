<template>
  <div class="" :id="accordianId">
    <div class="accordion-item bg-gray border-0 rounded-3 mb-2">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button
          class="accordion-button collapsed bg-transparent rounded-3 text-dark d-flex lh-lg"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseOne"
        >
          <div class="flex-fill fw-bold">Accordion Item #1</div>
          <div class="flex-fill me-3">
            <div class="row">
              <div class="col-7">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="State"
                  aria-label="State"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Zip"
                  aria-label="Zip"
                />
              </div>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        class="accordion-collapse collapse text-dark"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item bg-purple border-0 rounded-3 mb-2">
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          class="accordion-button rounded-3 bg-transparent text-white collapsed lh-lg"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Accordion Item #2
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </div>
      </div>
    </div>
    <div class="bg-danger rounded-3 p-3">
      <div class="d-flex" id="panelsStayOpen-headingThree">
        <div class="w-25">
          <button
            class="chevron btn py-1 ps-0 text-white collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            <i class="bi bi-chevron-right me-2" aria-hidden="true"></i>
            <span class="fw-bold">Accordion Item #3</span>
          </button>
        </div>
        <div class="flex-fill">
          <div class="row">
            <div class="col-7">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="City"
                aria-label="City"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="State"
                aria-label="State"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Zip"
                aria-label="Zip"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="panelsStayOpen-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div class="py-3 text-white">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordianComp",
  props: {
    accordianId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss">
.chevron[aria-expanded="true"] i {
  transform: rotate(90deg);
}

.chevron i {
  display: inline-block;
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
  font-weight: bolder;
}

.bi::before {
  font-weight: bolder !important;
}
</style>
