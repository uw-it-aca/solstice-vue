// home.vue

<template>
  <Layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>

    <template #description>
      <div class="p-0 col-md-8 lead">
        <p>
          <a
            href="https://github.com/uw-it-aca/solstice-vue"
            class="link-primary"
            >solstice-vue</a
          >
          is a VueJs component library. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius eaque placeat corrupti sequi eveniet aliquam
          dicta harum tempora sed nisi a voluptatem dolorum unde, corporis
          voluptate perspiciatis dignissimos praesentium. Et!
        </p>
      </div>
    </template>

    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <h2 class="fw-bold text-danger text-primary-hover">
        Building components
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam numquam
        perspiciatis, laudantium suscipit corrupti atque ea officiis incidunt
        iusto, esse voluptatum animi nobis dolores modi earum magnam expedita
        eius repellat!
      </p>
      <h3>Development</h3>

      <ol>
        <li>create a branch</li>
        <li>run the <code>npm run build</code> command</li>
      </ol>

      <h2 class="fw-bold">Foundations</h2>
      <h3>Layout</h3>
      <ul>
         <li>
          <RouterLink to="/topbar-neo">Topbar (Neo)</RouterLink>
        </li>
        <li>
          <RouterLink to="/topbar">Topbar</RouterLink>
        </li>
        <li>
          <RouterLink to="/sidebar">Sidebar</RouterLink>
        </li>
      </ul>
      <h3>Color</h3>

      <h4>Brand Swatches</h4>
      <div class="grid mb-5" style="--bs-columns: 8">
        <div>
          <div class="p-3 mb-2 position-relative bg-purple3-500 text-white">
            <strong class="d-block">$purple3</strong>
            #32006e
          </div>
          <div class="p-3 bg-purple3-100 text-black small">
            $purple3-100 #d6cce2
          </div>
          <div class="p-3 bg-purple3-200 text-black small">
            $purple3-200 #ad99c5
          </div>
          <div class="p-3 bg-purple3-300 text-white small">
            $purple3-300 #8466a8
          </div>
          <div class="p-3 bg-purple3-400 text-white small">
            $purple3-400 #5b338b
          </div>
          <div class="p-3 bg-purple3-500 text-white small">
            $purple3-500 #32006e
          </div>
          <div class="p-3 bg-purple3-600 text-white small">
            $purple3-600 #280058
          </div>
          <div class="p-3 bg-purple3-700 text-white small">
            $purple3-700 #1e0042
          </div>
          <div class="p-3 bg-purple3-800 text-white small">
            $purple3-800 #14002c
          </div>
          <div class="p-3 bg-purple3-900 text-white small">
            $purple3-900 #0a0016
          </div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-purple2-500 text-white">
            <strong class="d-block">$purple2</strong>
            #4b2e83
          </div>
          <div class="p-3 bg-purple2-100 text-black small">$purple2-100</div>
          <div class="p-3 bg-purple2-200 text-black small">$purple2-200</div>
          <div class="p-3 bg-purple2-300 text-black small">$purple2-300</div>
          <div class="p-3 bg-purple2-400 text-white small">$purple2-400</div>
          <div class="p-3 bg-purple2-500 text-white small">$purple2-500</div>
          <div class="p-3 bg-purple2-600 text-white small">$purple2-600</div>
          <div class="p-3 bg-purple2-700 text-white small">$purple2-700</div>
          <div class="p-3 bg-purple2-800 text-white small">$purple2-800</div>
          <div class="p-3 bg-purple2-900 text-white small">$purple2-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-beige2-500 text-white">
            <strong class="d-block">$beige2</strong>
            #85754d
          </div>
          <div class="p-3 bg-beige2-100 text-black small">$beige2-100</div>
          <div class="p-3 bg-beige2-200 text-black small">$beige2-200</div>
          <div class="p-3 bg-beige2-300 text-black small">$beige2-300</div>
          <div class="p-3 bg-beige2-400 text-black small">$beige2-400</div>
          <div class="p-3 bg-beige2-500 text-black small">$beige2-500</div>
          <div class="p-3 bg-beige2-600 text-white small">$beige2-600</div>
          <div class="p-3 bg-beige2-700 text-white small">$beige2-700</div>
          <div class="p-3 bg-beige2-800 text-white small">$beige2-800</div>
          <div class="p-3 bg-beige2-900 text-white small">$beige2-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-beige-500 text-black">
            <strong class="d-block">$beige</strong>
            #b7a57a
          </div>
          <div class="p-3 bg-beige-100 text-black small">$beige-100</div>
          <div class="p-3 bg-beige-200 text-black small">$beige-200</div>
          <div class="p-3 bg-beige-300 text-black small">$beige-300</div>
          <div class="p-3 bg-beige-400 text-black small">$beige-400</div>
          <div class="p-3 bg-beige-500 text-black small">$beige-500</div>
          <div class="p-3 bg-beige-600 text-black small">$beige-600</div>
          <div class="p-3 bg-beige-700 text-white small">$beige-700</div>
          <div class="p-3 bg-beige-800 text-white small">$beige-800</div>
          <div class="p-3 bg-beige-900 text-white small">$beige-900</div>
        </div>

        <div>
          <div class="p-3 mb-2 position-relative bg-gold-500 text-black">
            <strong class="d-block">$gold</strong>
            #ffc700
          </div>
          <div class="p-3 bg-gold-100 text-black small">$gold-100</div>
          <div class="p-3 bg-gold-200 text-black small">$gold-200</div>
          <div class="p-3 bg-gold-300 text-black small">$gold-300</div>
          <div class="p-3 bg-gold-400 text-black small">$gold-400</div>
          <div class="p-3 bg-gold-500 text-black small">$gold-500</div>
          <div class="p-3 bg-gold-600 text-black small">$gold-600</div>
          <div class="p-3 bg-gold-700 text-black small">$gold-700</div>
          <div class="p-3 bg-gold-800 text-white small">$gold-800</div>
          <div class="p-3 bg-gold-900 text-white small">$gold-900</div>
        </div>
      </div>

      <h4>Bootstrap Theme / Semantic (overrides included)</h4>
      <div class="grid mb-5" style="--bs-columns: 8">
        <div>
          <div class="p-3 mb-2 position-relative bg-blue2-500 text-white">
            <strong class="d-block">$blue2</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-blue2-100 text-black small">$blue2-100</div>
          <div class="p-3 bg-blue2-200 text-black small">$blue2-200</div>
          <div class="p-3 bg-blue2-300 text-black small">$blue2-300</div>
          <div class="p-3 bg-blue2-400 text-black small">$blue2-400</div>
          <div class="p-3 bg-blue2-500 text-white small">$blue2-500</div>
          <div class="p-3 bg-blue2-600 text-white small">$blue2-600</div>
          <div class="p-3 bg-blue2-700 text-white small">$blue2-700</div>
          <div class="p-3 bg-blue2-800 text-white small">$blue2-800</div>
          <div class="p-3 bg-blue2-900 text-white small">$blue2-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-red2-500 text-white">
            <strong class="d-block">$red2</strong>
            #cb444a
          </div>
          <div class="p-3 bg-red2-100 text-black small">$red2-100</div>
          <div class="p-3 bg-red2-200 text-black small">$red2-200</div>
          <div class="p-3 bg-red2-300 text-black small">$red2-300</div>
          <div class="p-3 bg-red2-400 text-black small">$red2-400</div>
          <div class="p-3 bg-red2-500 text-white small">$red2-500</div>
          <div class="p-3 bg-red2-600 text-white small">$red2-600</div>
          <div class="p-3 bg-red2-700 text-white small">$red2-700</div>
          <div class="p-3 bg-red2-800 text-white small">$red2-800</div>
          <div class="p-3 bg-red2-900 text-white small">$red2-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-yellow-500 text-black">
            <strong class="d-block">$yellow</strong>
            #ffc107
          </div>
          <div class="p-3 bg-yellow-100 text-black small">$yellow-100</div>
          <div class="p-3 bg-yellow-200 text-black small">$yellow-200</div>
          <div class="p-3 bg-yellow-300 text-black small">$yellow-300</div>
          <div class="p-3 bg-yellow-400 text-black small">$yellow-400</div>
          <div class="p-3 bg-yellow-500 text-black small">$yellow-500</div>
          <div class="p-3 bg-yellow-600 text-black small">$yellow-600</div>
          <div class="p-3 bg-yellow-700 text-black small">$yellow-700</div>
          <div class="p-3 bg-yellow-800 text-white small">$yellow-800</div>
          <div class="p-3 bg-yellow-900 text-white small">$yellow-900</div>
        </div>

        <div>
          <div class="p-3 mb-2 position-relative bg-green-500 text-white">
            <strong class="d-block">$green</strong>
            #198754
          </div>
          <div class="p-3 bg-green-100 text-black small">$green-100</div>
          <div class="p-3 bg-green-200 text-black small">$green-200</div>
          <div class="p-3 bg-green-300 text-black small">$green-300</div>
          <div class="p-3 bg-green-400 text-black small">$green-400</div>
          <div class="p-3 bg-green-500 text-white small">$green-500</div>
          <div class="p-3 bg-green-600 text-white small">$green-600</div>
          <div class="p-3 bg-green-700 text-white small">$green-700</div>
          <div class="p-3 bg-green-800 text-white small">$green-800</div>
          <div class="p-3 bg-green-900 text-white small">$green-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-cyan-500 text-black">
            <strong class="d-block">$cyan</strong>
            #0dcaf0
          </div>
          <div class="p-3 bg-cyan-100 text-black small">$cyan-100</div>
          <div class="p-3 bg-cyan-200 text-black small">$cyan-200</div>
          <div class="p-3 bg-cyan-300 text-black small">$cyan-300</div>
          <div class="p-3 bg-cyan-400 text-black small">$cyan-400</div>
          <div class="p-3 bg-cyan-500 text-black small">$cyan-500</div>
          <div class="p-3 bg-cyan-600 text-black small">$cyan-600</div>
          <div class="p-3 bg-cyan-700 text-white small">$cyan-700</div>
          <div class="p-3 bg-cyan-800 text-white small">$cyan-800</div>
          <div class="p-3 bg-cyan-900 text-white small">$cyan-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-gray-500 text-black">
            <strong class="d-block">$gray</strong>
            #adb5bd
          </div>
          <div class="p-3 bg-gray-100 text-black small">$gray-100</div>
          <div class="p-3 bg-gray-200 text-black small">$gray-200</div>
          <div class="p-3 bg-gray-300 text-black small">$gray-300</div>
          <div class="p-3 bg-gray-400 text-black small">$gray-400</div>
          <div class="p-3 bg-gray-500 text-black small">$gray-500</div>
          <div class="p-3 bg-gray-600 text-white small">$gray-600</div>
          <div class="p-3 bg-gray-700 text-white small">$gray-700</div>
          <div class="p-3 bg-gray-800 text-white small">$gray-800</div>
          <div class="p-3 bg-gray-900 text-white small">$gray-900</div>
        </div>
      </div>

      <h4>Academic swatches</h4>
      <div class="grid mb-5" style="--bs-columns: 8">
        <div>
          <div class="p-3 mb-2 position-relative bg-scarlet-500 text-black">
            <strong class="d-block">$scarlet</strong>
            #ff812c
          </div>
          <div class="p-3 bg-scarlet-100 text-black small">$scarlet-100</div>
          <div class="p-3 bg-scarlet-200 text-black small">$scarlet-200</div>
          <div class="p-3 bg-scarlet-300 text-black small">$scarlet-300</div>
          <div class="p-3 bg-scarlet-400 text-black small">$scarlet-400</div>
          <div class="p-3 bg-scarlet-500 text-black small">$scarlet-500</div>
          <div class="p-3 bg-scarlet-600 text-black small">$scarlet-600</div>
          <div class="p-3 bg-scarlet-700 text-white small">$scarlet-700</div>
          <div class="p-3 bg-scarlet-800 text-white small">$scarlet-800</div>
          <div class="p-3 bg-scarlet-900 text-white small">$scarlet-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-icicle-500 text-black">
            <strong class="d-block">$icicle</strong>
            #00d2ff
          </div>
          <div class="p-3 bg-icicle-100 text-black small">$icicle-100</div>
          <div class="p-3 bg-icicle-200 text-black small">$icicle-200</div>
          <div class="p-3 bg-icicle-300 text-black small">$icicle-300</div>
          <div class="p-3 bg-icicle-400 text-black small">$icicle-400</div>
          <div class="p-3 bg-icicle-500 text-black small">$icicle-500</div>
          <div class="p-3 bg-icicle-600 text-black small">$icicle-600</div>
          <div class="p-3 bg-icicle-700 text-white small">$icicle-700</div>
          <div class="p-3 bg-icicle-800 text-white small">$icicle-800</div>
          <div class="p-3 bg-icicle-900 text-white small">$icicle-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-lime-500 text-black">
            <strong class="d-block">$lime</strong>
            #70e83f
          </div>
          <div class="p-3 bg-lime-100 text-black small">$lime-100</div>
          <div class="p-3 bg-lime-200 text-black small">$lime-200</div>
          <div class="p-3 bg-lime-300 text-black small">$lime-300</div>
          <div class="p-3 bg-lime-400 text-black small">$lime-400</div>
          <div class="p-3 bg-lime-500 text-black small">$lime-500</div>
          <div class="p-3 bg-lime-600 text-black small">$lime-600</div>
          <div class="p-3 bg-lime-700 text-black small">$lime-700</div>
          <div class="p-3 bg-lime-800 text-white small">$lime-800</div>
          <div class="p-3 bg-lime-900 text-white small">$lime-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-amber-500 text-black">
            <strong class="d-block">$amber</strong>
            #ffc901
          </div>
          <div class="p-3 bg-amber-100 text-black small">$amber-100</div>
          <div class="p-3 bg-amber-200 text-black small">$amber-200</div>
          <div class="p-3 bg-amber-300 text-black small">$amber-300</div>
          <div class="p-3 bg-amber-400 text-black small">$amber-400</div>
          <div class="p-3 bg-amber-500 text-black small">$amber-500</div>
          <div class="p-3 bg-amber-600 text-black small">$amber-600</div>
          <div class="p-3 bg-amber-700 text-black small">$amber-700</div>
          <div class="p-3 bg-amber-800 text-white small">$amber-800</div>
          <div class="p-3 bg-amber-900 text-white small">$amber-900</div>
        </div>
      </div>

      <h4>Decorative swatches</h4>
      <div class="grid mb-5" style="--bs-columns: 8">
        <div>
          <div class="p-3 mb-2 position-relative bg-violet-500 text-white">
            <strong class="d-block">$violet</strong>
            #cb444a
          </div>
          <div class="p-3 bg-violet-100 text-black small">$violet-100</div>
          <div class="p-3 bg-violet-200 text-black small">$violet-200</div>
          <div class="p-3 bg-violet-300 text-black small">$violet-300</div>
          <div class="p-3 bg-violet-400 text-black small">$violet-400</div>
          <div class="p-3 bg-violet-500 text-white small">$violet-500</div>
          <div class="p-3 bg-violet-600 text-white small">$violet-600</div>
          <div class="p-3 bg-violet-700 text-white small">$violet-700</div>
          <div class="p-3 bg-violet-800 text-white small">$violet-800</div>
          <div class="p-3 bg-violet-900 text-white small">$violet-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-turquoise-500 text-white">
            <strong class="d-block">$turquoise</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-turquoise-100 text-black small">
            $turquoise-100
          </div>
          <div class="p-3 bg-turquoise-200 text-black small">
            $turquoise-200
          </div>
          <div class="p-3 bg-turquoise-300 text-black small">
            $turquoise-300
          </div>
          <div class="p-3 bg-turquoise-400 text-black small">
            $turquoise-400
          </div>
          <div class="p-3 bg-turquoise-500 text-white small">
            $turquoise-500
          </div>
          <div class="p-3 bg-turquoise-600 text-white small">
            $turquoise-600
          </div>
          <div class="p-3 bg-turquoise-700 text-white small">
            $turquoise-700
          </div>
          <div class="p-3 bg-turquoise-800 text-white small">
            $turquoise-800
          </div>
          <div class="p-3 bg-turquoise-900 text-white small">
            $turquoise-900
          </div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-burnt-500 text-white">
            <strong class="d-block">$burnt</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-burnt-100 text-black small">$burnt-100</div>
          <div class="p-3 bg-burnt-200 text-black small">$burnt-200</div>
          <div class="p-3 bg-burnt-300 text-black small">$burnt-300</div>
          <div class="p-3 bg-burnt-400 text-black small">$burnt-400</div>
          <div class="p-3 bg-burnt-500 text-white small">$burnt-500</div>
          <div class="p-3 bg-burnt-600 text-white small">$burnt-600</div>
          <div class="p-3 bg-burnt-700 text-white small">$burnt-700</div>
          <div class="p-3 bg-burnt-800 text-white small">$burnt-800</div>
          <div class="p-3 bg-burnt-900 text-white small">$burnt-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-olive-500 text-white">
            <strong class="d-block">$olive</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-olive-100 text-black small">$olive-100</div>
          <div class="p-3 bg-olive-200 text-black small">$olive-200</div>
          <div class="p-3 bg-olive-300 text-black small">$olive-300</div>
          <div class="p-3 bg-olive-400 text-black small">$olive-400</div>
          <div class="p-3 bg-olive-500 text-white small">$olive-500</div>
          <div class="p-3 bg-olive-600 text-white small">$olive-600</div>
          <div class="p-3 bg-olive-700 text-white small">$olive-700</div>
          <div class="p-3 bg-olive-800 text-white small">$olive-800</div>
          <div class="p-3 bg-olive-900 text-white small">$olive-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-rose-500 text-white">
            <strong class="d-block">$rose</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-rose-100 text-black small">$rose-100</div>
          <div class="p-3 bg-rose-200 text-black small">$rose-200</div>
          <div class="p-3 bg-rose-300 text-black small">$rose-300</div>
          <div class="p-3 bg-rose-400 text-black small">$rose-400</div>
          <div class="p-3 bg-rose-500 text-white small">$rose-500</div>
          <div class="p-3 bg-rose-600 text-white small">$rose-600</div>
          <div class="p-3 bg-rose-700 text-white small">$rose-700</div>
          <div class="p-3 bg-rose-800 text-white small">$rose-800</div>
          <div class="p-3 bg-rose-900 text-white small">$rose-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-lavender-500 text-white">
            <strong class="d-block">$lavendar</strong>
            #8060a4
          </div>
          <div class="p-3 bg-lavender-100 text-black small">$lavender-100</div>
          <div class="p-3 bg-lavender-200 text-black small">$lavender-200</div>
          <div class="p-3 bg-lavender-300 text-black small">$lavender-300</div>
          <div class="p-3 bg-lavender-400 text-black small">$lavender-400</div>
          <div class="p-3 bg-lavender-500 text-white small">$lavender-500</div>
          <div class="p-3 bg-lavender-600 text-white small">$lavender-600</div>
          <div class="p-3 bg-lavender-700 text-white small">$lavender-700</div>
          <div class="p-3 bg-lavender-800 text-white small">$lavender-800</div>
          <div class="p-3 bg-lavender-900 text-white small">$lavender-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-russet-500 text-white">
            <strong class="d-block">$russet</strong>
            #2f68cb
          </div>
          <div class="p-3 bg-russet-100 text-black small">$russet-100</div>
          <div class="p-3 bg-russet-200 text-black small">$russet-200</div>
          <div class="p-3 bg-russet-300 text-black small">$russet-300</div>
          <div class="p-3 bg-russet-400 text-black small">$russet-400</div>
          <div class="p-3 bg-russet-500 text-white small">$russet-500</div>
          <div class="p-3 bg-russet-600 text-white small">$russet-600</div>
          <div class="p-3 bg-russet-700 text-white small">$russet-700</div>
          <div class="p-3 bg-russet-800 text-white small">$russet-800</div>
          <div class="p-3 bg-russet-900 text-white small">$russet-900</div>
        </div>
        <div>
          <div class="p-3 mb-2 position-relative bg-ultra-500 text-white">
            <strong class="d-block">$ultra</strong>
            #5B6ecd
          </div>
          <div class="p-3 bg-ultra-100 text-black small">$ultra-100</div>
          <div class="p-3 bg-ultra-200 text-black small">$ultra-200</div>
          <div class="p-3 bg-ultra-300 text-black small">$ultra-300</div>
          <div class="p-3 bg-ultra-400 text-black small">$ultra-400</div>
          <div class="p-3 bg-ultra-500 text-white small">$ultra-500</div>
          <div class="p-3 bg-ultra-600 text-white small">$ultra-600</div>
          <div class="p-3 bg-ultra-700 text-white small">$ultra-700</div>
          <div class="p-3 bg-ultra-800 text-white small">$ultra-800</div>
          <div class="p-3 bg-ultra-900 text-white small">$ultra-900</div>
        </div>
      </div>

      <h4>Brand Palette</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="d-inline-block bg-husky-purple rounded-1 me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-husky-purple lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#32006e</span>
              <code class="d-inline-block text-muted">$purple3</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-husky-purple</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-husky-purple</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-spirit-purple rounded-1 me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-spirit-purple lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#4b2e83</span>
              <code class="d-inline-block text-muted">$purple2</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-spirit-purple</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-spirit-purple</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block rounded-1 bg-heritage-gold me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-heritage-gold lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#85754d</span>
              <code class="d-inline-block text-muted">$beige2</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-heritage-gold</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-heritage-gold</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block rounded-1 bg-husky-gold me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-husky-gold lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#b7a57a</span>
              <code class="d-inline-block text-muted">$beige</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-husky-gold</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-husky-gold</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block rounded-1 bg-spirit-gold me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-spirit-gold lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffc700</span>
              <code class="d-inline-block text-muted">$gold</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-spirit-gold</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-spirit-gold</code
              >
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-husky-purple-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple3-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple3-900</code>
            </td>
            <td><code>bg-husky-purple-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-spirit-purple-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple2-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple2-900</code>
            </td>
            <td><code>bg-spirit-purple-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-heritage-gold-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-900</code>
            </td>
            <td><code>bg-heritage-gold-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-husky-gold-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-900</code>
            </td>
            <td><code>bg-husky-gold-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-spirit-gold-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-900</code>
            </td>
            <td><code>bg-spirit-gold-subtle</code></td>
          </tr>
        </tbody>
      </table>
      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-husky-purple-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple3-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple3-300</code>
            </td>
            <td><code>text-husky-purple-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-spirit-purple-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple2-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$purple2-300</code>
            </td>
            <td><code>text-spirit-purple-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-heritage-gold-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige2-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige2-900-300</code>
            </td>
            <td><code>text-heritage-gold-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-husky-gold-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$beige-300</code>
            </td>
            <td><code>text-husky-gold-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-spirit-gold-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$gold-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$gold-300</code>
            </td>
            <td><code>text-spirit-gold-emphasis</code></td>
          </tr>
        </tbody>
      </table>

      <h4>Surfaces (body- and -subtle)</h4>
      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-body rounded-1" style="width: 32px; height: 32px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#212529</span>
              <code class="d-inline-block text-muted">$gray-900</code>
            </td>
            <td><code>bg-body</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-body-tertiary rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#f8f9fa</span>
              <code class="d-inline-block text-muted">$gray-100</code>
            </td>
            <td>#2b3035</td>
            <td><code>bg-body-tertiary</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-body-secondary rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#e9ecef</span>
              <code class="d-inline-block text-muted">$gray-200</code>
            </td>
            <td>#343a40</td>
            <td><code>bg-body-secondary</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-spirit-purple-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dbd5e6</span>
              <code class="d-inline-block text-muted">$purple2-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#0f091a</span>
              <code class="d-inline-block text-muted">$purple2-900</code>
            </td>
            <td><code>bg-spirit-purple-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-husky-gold-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#f1ede4</span>
              <code class="d-inline-block text-muted">$beige-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#252118</span>
              <code class="d-inline-block text-muted">$beige-900</code>
            </td>
            <td><code>bg-husky-gold-subtle</code></td>
          </tr>
        </tbody>
      </table>

      <h4>Typography (text- and -emphasis)</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-white lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>--</td>
            <td><code>text-white</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-black lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#000000</span>
              <code class="d-inline-block text-muted">$black</code>
            </td>
            <td>--</td>
            <td><code>text-black</code></td>
          </tr>
        </tbody>
      </table>

      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-body lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#212529</span>
              <code class="d-inline-block text-muted">$gray-900</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e6</span>
              <code class="d-inline-block text-muted">$gray-300</code>
            </td>
            <td><code>text-body</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-body-secondary lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#212529bf</span>
              <code class="d-inline-block text-muted">$gray-900 (75%)</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e6bf</span>
              <code class="d-inline-block text-muted">$gray-300 (75%)</code>
            </td>
            <td><code>text-body-secondary</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-body-tertiary lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#21252980</span>
              <code class="d-inline-block text-muted">$gray-900 (50%)</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e680</span>
              <code class="d-inline-block text-muted">$gray-300 (50%)</code>
            </td>
            <td><code>text-body-tertiary</code></td>
          </tr>
        </tbody>
      </table>

      <h4>Borders and Dividers</h4>
      <p>These colors change based on color mode.</p>
      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="rounded-1"
                style="width: 32px; height: 32px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #dee2e6'
                    : 'background-color: #495057'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2e6</span>
              <code class="d-inline-block text-muted">$gray-300</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#495057</span>
              <code class="d-inline-block text-muted">$gray-700</code>
            </td>
            <td><code>border</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded-1"
                style="width: 32px; height: 32px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #c8c8c9'
                    : 'background-color: #f7f8f9'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#c8c8c9</td>
            <td>#f7f8f9</td>
            <td><code>hr</code></td>
          </tr>
        </tbody>
      </table>

      <h4>Academic Terms (Quarters)</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="d-inline-block bg-autumn rounded-1 me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-autumn lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ff812c</span>
              <code class="d-inline-block text-muted">$scarlet</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px">bg-autumn</code>
              <code class="d-inline-block" style="width: 240px"
                >text-autumn</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-winter rounded-1 me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-winter lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#00d2ff</span>
              <code class="d-inline-block text-muted">$icicle</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px">bg-winter</code>
              <code class="d-inline-block" style="width: 240px"
                >text-winter</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-spring rounded-1 me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-spring lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#70e83f</span>
              <code class="d-inline-block text-muted">$lime</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px">bg-spring</code>
              <code class="d-inline-block" style="width: 240px"
                >text-spring</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-summer rounded-1 me-1 align-top"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-summer lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffc901</span>
              <code class="d-inline-block text-muted">$amber</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px">bg-summer</code>
              <code class="d-inline-block" style="width: 240px"
                >text-summer</code
              >
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-autumn-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffcdab</span>
              <code class="d-inline-block text-muted">$scarlet-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#331a09</span>
              <code class="d-inline-block text-muted">$scarlet-900</code>
            </td>
            <td><code>bg-autumn-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-winter-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#99edff</span>
              <code class="d-inline-block text-muted">$icicle-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#002a33</span>
              <code class="d-inline-block text-muted">$icicle-900</code>
            </td>
            <td><code>bg-winter-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-spring-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#c6f6b2</span>
              <code class="d-inline-block text-muted">$lime-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#162e0d</span>
              <code class="d-inline-block text-muted">$lime-900</code>
            </td>
            <td><code>bg-spring-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-summer-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffe999</span>
              <code class="d-inline-block text-muted">$amber-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#332800</span>
              <code class="d-inline-block text-muted">$amber-900</code>
            </td>
            <td><code>bg-summer-subtle</code></td>
          </tr>
        </tbody>
      </table>
      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-autumn-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#663412</span>
              <code class="d-inline-block text-muted">$scarlet-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffb380</span>
              <code class="d-inline-block text-muted">$scarlet-300</code>
            </td>
            <td><code>text-autumn-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-winter-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#005466</span>
              <code class="d-inline-block text-muted">$icicle-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#66e4ff</span>
              <code class="d-inline-block text-muted">$icicle-300</code>
            </td>
            <td><code>text-winter-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-spring-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#2d5d19</span>
              <code class="d-inline-block text-muted">$lime-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#a9f18c</span>
              <code class="d-inline-block text-muted">$lime-300</code>
            </td>
            <td><code>text-spring-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-summer-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#665000</span>
              <code class="d-inline-block text-muted">$amber-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ffdf67</span>
              <code class="d-inline-block text-muted">$amber-300</code>
            </td>
            <td><code>text-summer-emphasis</code></td>
          </tr>
        </tbody>
      </table>

      <h4>Decorative</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-violet rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-violet lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ac4bb9</span>
              <code class="d-inline-block text-muted">$violet</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-violet</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-violet</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-turquoise rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-turquoise lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#008099</span>
              <code class="d-inline-block text-muted">$turquoise</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-turquoise</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-turquoise</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-burnt rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-burnt lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#bd4e05</span>
              <code class="d-inline-block text-muted">$burnt</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-burnt</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-burnt</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-olive rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-olive lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#787a00</span>
              <code class="d-inline-block text-muted">$olive</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-olive</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-olive</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-rose rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-rose lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#c84674</span>
              <code class="d-inline-block text-muted">$rose</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-rose</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-rose</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-lavender rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-lavender lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#8060a4</span>
              <code class="d-inline-block text-muted">$lavender</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-lavender</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-lavender</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-russet rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-russet lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#a06b22</span>
              <code class="d-inline-block text-muted">$russet</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-russet</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-russet</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="d-inline-block bg-deco-ultra rounded-1 me-1 align-top text-white"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
              <i class="fs-2 bi bi-cc-square text-deco-ultra lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#5B6ecd</span>
              <code class="d-inline-block text-muted">$ultra</code>
            </td>
            <td>--</td>
            <td>
              <code class="d-inline-block" style="width: 240px"
                >bg-deco-ultra</code
              >
              <code class="d-inline-block" style="width: 240px"
                >text-deco-ultra</code
              >
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-deco-violet-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#eedbf1</span>
              <code class="d-inline-block text-muted">$violet-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$violet-900</code>
            </td>
            <td><code>bg-deco-violet-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-turquoise-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#cce6eb</span>
              <code class="d-inline-block text-muted">$turquoise-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$turquoise-900</code>
            </td>
            <td><code>bg-deco-turquoise-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-burnt-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#f2dccd</span>
              <code class="d-inline-block text-muted">$burnt-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$burnt-900</code>
            </td>
            <td><code>bg-deco-burnt-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-olive-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#e4e4cc</span>
              <code class="d-inline-block text-muted">$olive-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$olive-900</code>
            </td>
            <td><code>bg-deco-olive-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-rose-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#f4dae3</span>
              <code class="d-inline-block text-muted">$rose-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$rose-900</code>
            </td>
            <td><code>bg-deco-rose-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-lavender-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#e6dfed</span>
              <code class="d-inline-block text-muted">$lavender-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$lavender-900</code>
            </td>
            <td><code>bg-deco-lavender-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-russet-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#ece1d3</span>
              <code class="d-inline-block text-muted">$russet-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$russet-900</code>
            </td>
            <td><code>bg-deco-russet-subtle</code></td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-ultra-subtle rounded-1"
                style="width: 32px; height: 32px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#dee2f5</span>
              <code class="d-inline-block text-muted">$ultra-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$ultra-900</code>
            </td>
            <td><code>bg-deco-ultra-subtle</code></td>
          </tr>
        </tbody>
      </table>
      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col" style="width: 70px">Color</th>
            <th scope="col" style="width: 240px">Light</th>
            <th scope="col" style="width: 240px">Dark</th>
            <th scope="col" style="width: 500px">Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-deco-violet-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$violet-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$violet-300</code>
            </td>
            <td><code>text-deco-violet-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-deco-turquoise-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$turquoise-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$turquoise-300</code>
            </td>
            <td><code>text-deco-turquoise-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-deco-burnt-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$burnt-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$burnt-300</code>
            </td>
            <td><code>text-deco-burnt-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-deco-olive-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$olive-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$olive-300</code>
            </td>
            <td><code>text-deco-olive-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-deco-rose-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$rose-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$rose-300</code>
            </td>
            <td><code>text-deco-rose-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-deco-lavender-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$lavender-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$lavender-300</code>
            </td>
            <td><code>text-deco-lavender-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i
                class="fs-2 bi bi-cc-square text-deco-russet-emphasis lh-1"
              ></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$russet-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$russet-300</code>
            </td>
            <td><code>text-deco-russet-emphasis</code></td>
          </tr>
          <tr>
            <td>
              <i class="fs-2 bi bi-cc-square text-deco-ultra-emphasis lh-1"></i>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$ultra-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 100px">#xxxx</span>
              <code class="d-inline-block text-muted">$ultra-300</code>
            </td>
            <td><code>text-deco-ultra-emphasis</code></td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h2 class="fw-bold mb-5">Form Elements</h2>

      <h3>Input Group</h3>
      <div class="grid mb-5">
        <div class="g-col-6">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-subdued-primary link-underline link-underline-opacity-0 border border-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <button
              class="btn btn-subdued-primary border border-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        <div class="g-col-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text">$</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>
          <div class="input-group input-group-sm mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-subdued-primary link-underline link-underline-opacity-0 border border-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
          <div class="input-group input-group-sm mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <button
              class="btn btn-subdued-primary border border-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Checkbox and Radio</h3>
      <div class="mb-5">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </div>

      <h3>Select</h3>

      <select class="form-select mb-2" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <select
        class="form-select form-select-sm mb-5"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <h3>Muli-Select</h3>

      <div class="grid mb-5">
        <div class="g-col-6">
          <p>Default styling and behavior</p>
          <select
            class="form-select mb-5"
            multiple
            aria-label="Multiple select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="g-col-6">
          <p>
            Custom implementation: close on outside click, fully row clickable
            checkbox
          </p>
          <div class="dropdown">
            <input
              class="form-select text-start"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              value="Open this select menu"
            />
            <div
              class="dropdown-menu p-2 w-100"
              aria-labelledby="dropdownMenuButton1"
            >
              <div>
                <div
                  class="form-check bg-subdued-primary-hover text-black-hover rounded-1"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                    style="margin-left: -1.25em !important"
                  />
                  <label
                    class="form-check-label d-block"
                    for="flexCheckDefault1"
                  >
                    Checkbox 1
                  </label>
                </div>
                <div
                  class="form-check bg-subdued-primary-hover text-black-hover rounded-1"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                    style="margin-left: -1.25em !important"
                  />
                  <label
                    class="form-check-label d-block"
                    for="flexCheckDefault2"
                  >
                    Checkbox 2
                  </label>
                </div>
                <div
                  class="form-check bg-subdued-primary-hover text-black-hover rounded-1"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault3"
                    style="margin-left: -1.25em !important"
                  />
                  <label
                    class="form-check-label d-block"
                    for="flexCheckDefault3"
                  >
                    Checkbox 3
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Text Area</h3>
      <div class="mb-5">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Example textarea</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <hr />
      <h2 class="fw-bold mb-5">Elements</h2>

      <h3 class="mt-4">Badge</h3>

      <div class="grid mb-5">
        <div class="g-col-3">
          <p>
            Semantic palette:<br />
            Messaging / Workflow States
          </p>
          <ul class="list-unstyled">
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="success-subtle"
                text-variant="success-emphasis"
                class="fw-semibold me-1"
                >success-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="success"
                text-variant="white"
                class="fw-semibold"
                >success</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="warning-subtle"
                text-variant="warning-emphasis"
                class="fw-semibold me-1"
                >warning-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="warning"
                text-variant="black"
                class="fw-semibold"
                >warning</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="danger-subtle"
                text-variant="danger-emphasis"
                class="fw-semibold me-1"
                >danger-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="danger"
                text-variant="white"
                class="fw-semibold"
                >danger</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="info-subtle"
                text-variant="info-emphasis"
                class="fw-semibold me-1"
                >info-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="info"
                text-variant="black"
                class="fw-semibold"
                >info</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="secondary-subtle"
                text-variant="secondary-emphasis"
                class="fw-semibold me-1"
                >secondary-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="secondary"
                text-variant="white"
                class="fw-semibold"
                >secondary</BBadge
              >
            </li>
          </ul>
          <p>subtle set at swatch -100 (default)</p>
        </div>
        <div class="g-col-3">
          <p>Academic Terms</p>
          <ul class="list-unstyled">
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="autumn-subtle"
                text-variant="autumn-emphasis"
                class="fw-semibold me-1"
                >autumn-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="autumn"
                text-variant="black"
                class="fw-semibold"
                >autumn</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="winter-subtle"
                text-variant="winter-emphasis"
                class="fw-semibold me-1"
                >winter-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="winter"
                text-variant="black"
                class="fw-semibold"
                >winter</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="spring-subtle"
                text-variant="spring-emphasis"
                class="fw-semibold me-1"
                >spring-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="spring"
                text-variant="black"
                class="fw-semibold"
                >spring</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="summer-subtle"
                text-variant="summer-emphasis"
                class="fw-semibold me-1"
                >summer-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="summer"
                text-variant="black"
                class="fw-semibold"
                >summer</BBadge
              >
            </li>
          </ul>
          <p>subtle set at swatch -200 (testing)</p>
        </div>
        <div class="g-col-3">
          <p>Decorative</p>
          <ul class="list-unstyled">
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-violet-subtle"
                text-variant="deco-violet-emphasis"
                class="fw-semibold me-1"
                >deco-violet-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-violet"
                text-variant="white"
                class="fw-semibold"
                >deco-violet</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-turquoise-subtle"
                text-variant="deco-turquoise-emphasis"
                class="fw-semibold me-1"
                >deco-turquoise-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-turquoise"
                text-variant="white"
                class="fw-semibold"
                >deco-turquoise</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-burnt-subtle"
                text-variant="deco-burnt-emphasis"
                class="fw-semibold me-1"
                >deco-burnt-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-burnt"
                text-variant="white"
                class="fw-semibold"
                >deco-burnt</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-olive-subtle"
                text-variant="deco-olive-emphasis"
                class="fw-semibold me-1"
                >deco-olive-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-olive"
                text-variant="white"
                class="fw-semibold"
                >deco-olive</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-rose-subtle"
                text-variant="deco-rose-emphasis"
                class="fw-semibold me-1"
                >deco-rose-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-rose"
                text-variant="white"
                class="fw-semibold"
                >deco-rose</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-lavender-subtle"
                text-variant="deco-lavender-emphasis"
                class="fw-semibold me-1"
                >deco-lavender-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-lavender"
                text-variant="white"
                class="fw-semibold"
                >deco-lavender</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-russet-subtle"
                text-variant="deco-russet-emphasis"
                class="fw-semibold me-1"
                >deco-russet-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-russet"
                text-variant="white"
                class="fw-semibold"
                >deco-russet</BBadge
              >
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-ultra-subtle"
                text-variant="deco-ultra-emphasis"
                class="fw-semibold me-1"
                >deco-ultra-subtle</BBadge
              >
              <BBadge
                pill
                bg-variant="deco-ultra"
                text-variant="white"
                class="fw-semibold"
                >deco-ultra</BBadge
              >
            </li>
          </ul>
          <p>subtle set at swatch -100 (default)</p>
        </div>
      </div>

      <h3 class="mt-4">Buttons</h3>
      <div class="mb-3">
        <BButton variant="primary" class="me-1">Primary</BButton>
        <BButton variant="outline-primary" class="me-1">Outline</BButton>
        <BButton variant="subdued-primary" class="me-1">Subdued</BButton>
        <BButton variant="quiet-primary">Quiet</BButton>
      </div>
      <div class="mb-3">
        <BButton variant="primary" size="sm" class="me-1" aria-label="Settings"
          ><i class="bi bi-gear-wide-connected"></i
        ></BButton>
        <BButton
          variant="outline-primary"
          size="sm"
          class="me-1"
          aria-label="Settings"
          ><i class="bi bi-gear-wide-connected"></i
        ></BButton>
        <BButton
          variant="subdued-primary"
          size="sm"
          class="me-1"
          aria-label="Settings"
          ><i class="bi bi-gear-wide-connected"></i
        ></BButton>

        <BButton
          variant="quiet-primary"
          size="sm"
          class=""
          aria-label="Settings"
          ><i class="bi bi-gear-wide-connected"></i
        ></BButton>
      </div>
      <div class="mb-5">
        <BButton variant="danger" size="sm" class="me-1" aria-label="Trash"
          ><i class="bi bi-trash"></i
        ></BButton>
        <BButton
          variant="outline-danger"
          size="sm"
          class="me-1"
          aria-label="Trash"
          ><i class="bi bi-trash"></i
        ></BButton>
        <BButton
          variant="subdued-danger"
          size="sm"
          class="me-1"
          aria-label="Trash"
          ><i class="bi bi-trash"></i
        ></BButton>
        <BButton variant="quiet-danger" size="sm" aria-label="Trash"
          ><i class="bi bi-trash"></i
        ></BButton>
      </div>

      <h3 class="mt-4">Links</h3>
      <div class="mb-5 grid">
        <ul class="g-col-6 list-unstyled">
          <li class="border p-2 mb-2">
            Lorem ipsum dolor sit amet,
            <a href="#" class="link-primary">link-primary</a> consectetur
            adipiscing elit.
          </li>
          <li class="bg-husky-purple p-2 text-light mb-2">
            Lorem ipsum dolor sit amet,
            <a href="#" class="link-light">link-light</a> consectetur adipiscing
            elit.
          </li>
          <li class="bg-body-tertiary p-2">
            Lorem ipsum dolor sit amet,
            <a href="#" class="link-dark">link-dark</a> consectetur adipiscing
            elit.
          </li>
        </ul>

        <ul class="g-col-6 list-unstyled">
          <li class="border p-2 mb-2">
            Lorem ipsum dolor sit amet,
            <a href="#" class="link-quiet-primary">link-quiet-primary</a>
            consectetur adipiscing elit.
          </li>
          <li class="bg-husky-purple p-2 text-light mb-2">
            Lorem ipsum dolor sit amet,
            <a href="#" class="link-quiet-light">link-quiet-light</a>
            consectetur adipiscing elit.
          </li>
          <li class="bg-body-tertiary p-2">
            Lorem ipsum dolor sit amet,
            <a href="#" class="link-quiet-dark">link-quiet-dark</a> consectetur
            adipiscing elit.
          </li>
        </ul>
      </div>

      <hr />
      <h2 class="fw-bold mb-5">Tables</h2>

      <div class="grid mb-5">
        <div class="g-col-6">
          <h4>Normal</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="g-col-6">
          <h4>Striped</h4>
          <table class="table table-striped">
            <thead class="table-body-secondary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr />
      <h2 class="fw-bold mb-5">Patterns</h2>

      <h3>Tabs</h3>
      <div class="mb-5">
        <p>
          Customized from Bootstrap to meet
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
            >https://www.w3.org/WAI/ARIA/apg/patterns/tabs/</a
          >
          specs.
        </p>

        <h4>Underline (Default)</h4>
        <STabsList :tabs-id="'example2'">
          <STabsItem
            :tabs-id="'example2'"
            :panel-id="'first2'"
            active-tab="true"
          >
            First
          </STabsItem>
          <STabsItem :tabs-id="'example2'" :panel-id="'second2'">
            Second
          </STabsItem>
          <STabsItem :tabs-id="'example2'" :panel-id="'third2'">
            Third
          </STabsItem>
        </STabsList>

        <STabsDisplay :tabs-id="'example2'">
          <STabsPanel :panel-id="'first2'" :active-panel="true">
            <p>
              First... Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum quaerat fuga ad quo facere, beatae odit at mollitia
              reiciendis harum nostrum dolorum eum dolor corporis doloremque
              architecto accusantium? Quibusdam, vitae?
            </p>
          </STabsPanel>
          <STabsPanel :panel-id="'second2'"
            ><p>
              Second... Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Tempore, provident quas molestias dicta exercitationem nihil
              odit. Itaque qui minima sequi, reprehenderit veritatis, cum
              perspiciatis ad neque architecto repellat consequuntur
              repudiandae!
            </p>
          </STabsPanel>
          <STabsPanel :panel-id="'third2'"
            ><p>
              Third... Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem quam, beatae perferendis dolore ratione doloremque,
              voluptates aut, ullam illum esse sequi blanditiis pariatur
              delectus saepe molestias necessitatibus cupiditate maxime
              voluptatem.
            </p></STabsPanel
          >
        </STabsDisplay>

        <h4>Pills</h4>

        <STabsList :tabs-id="'example'" variant="pills">
          <STabsItem
            :tabs-id="'example'"
            :panel-id="'first'"
            :active-tab="true"
          >
            First
          </STabsItem>
          <STabsItem :tabs-id="'example'" :panel-id="'second'">
            Second
          </STabsItem>
          <STabsItem :tabs-id="'example'" :panel-id="'third'">
            Third
          </STabsItem>
        </STabsList>

        <STabsDisplay :tabs-id="'example2'">
          <STabsPanel :panel-id="'first'" :active-panel="true">
            first... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint repudiandae dolorum, velit laborum doloremque distinctio eum
            dolores labore corrupti repellat adipisci minima eveniet
            exercitationem, praesentium expedita porro vero error omnis.
          </STabsPanel>
          <STabsPanel :panel-id="'second'">
            second... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero deleniti, repellendus harum voluptatum necessitatibus mollitia
            facilis temporibus architecto, voluptatibus officiis error
            asperiores quo autem iure ex laboriosam ut totam! Sit.</STabsPanel
          >
          <STabsPanel :panel-id="'third'">
            third... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt quibusdam culpa deleniti quo reiciendis nobis exercitationem
            sapiente! Dolore, provident, consequatur velit autem magnam nesciunt
            esse, laboriosam doloribus perferendis natus incidunt?</STabsPanel
          >
        </STabsDisplay>
      </div>

      <h3>Cards</h3>
      <div class="grid mb-5">
        <div class="g-col-4">
          <h4>Elevated</h4>
          <BCard class="shadow border-0 mb-3"> card 1 w/ shadow </BCard>
          <BCard class="shadow border-0 mb-3">card 2 w/ shadow</BCard>
        </div>

        <div class="g-col-4">
          <h4>Filled</h4>
          <BCard bg-variant="body-tertiary" class="border-0 mb-3"
            >body-tertiary</BCard
          >
          <BCard bg-variant="body-secondary" class="bg-opacity-50 border-0 mb-3"
            >body-secondary, bg-opacity-50</BCard
          >
          <BCard
            bg-variant="spirit-purple-subtle"
            class="bg-opacity-25 border-0 mb-3"
            >bg-spirit-purple-subtle, bg-opacity-25</BCard
          >

          <BCard
            bg-variant="husky-gold-subtle"
            class="bg-opacity-50 border-0 mb-3"
            >bg-husky-gold-subtle, bg-opacity-50</BCard
          >
        </div>
        <div class="g-col-4">
          <h4>Outline</h4>
          <BCard class="mb-3">default card border</BCard>
          <BCard class="mb-3 border border-secondary-subtle"
            >border-secondary-subtle</BCard
          >
        </div>
      </div>

      <hr />
      <h2 class="fw-bold mb-5">Kitchen Sink</h2>

      <div class="grid mb-5">
        <div class="g-col-6">
          <BCard class="shadow border-0 mb-3">
            <div class="d-flex justify-content-between mb-3">
              <h3 class="fw-bold">Heading</h3>
              <BButton
                variant="quiet-primary"
                size="sm"
                class="me-1"
                aria-label="Settings"
                ><i class="bi bi-three-dots-vertical"></i
              ></BButton>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt
              <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
              consectetur corporis corrupti nulla,
              <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae
              ad sit quasi voluptate perferendis consequatur tempore fuga
              repudiandae.
            </p>

            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
            </ul>

            <div class="text-end mt-4">
              <BButton variant="outline-primary" class="me-2">Cancel</BButton>
              <BButton variant="primary" class="me-1">Submit</BButton>
            </div>
          </BCard>
        </div>
        <div class="g-col-6">
          <BCard class="shadow border-0 mb-3">
            <div class="d-flex justify-content-between mb-3">
              <h3 class="fw-bold">Heading</h3>
              <BButton variant="subdued-primary" size="sm" class="me-1"
                ><i class="bi bi-three-dots-vertical"></i> Manage
                settings</BButton
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt
              <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
              consectetur corporis corrupti nulla,
              <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae
              ad sit quasi voluptate perferendis consequatur tempore fuga
              repudiandae.
            </p>

            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="subdued-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="subdued-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="subdued-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="subdued-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="subdued-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="subdued-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
            </ul>

            <div class="text-end mt-4">
              <BButton variant="outline-primary" class="me-2">Cancel</BButton>
              <BButton variant="primary" class="me-1">Submit</BButton>
            </div>
          </BCard>
        </div>

        <div class="g-col-6">
          <BCard bg-variant="body-tertiary" class="border-0 mb-3">
            <div class="d-flex justify-content-between mb-3">
              <h3 class="fw-bold">Heading</h3>
              <BButton variant="quiet-primary" size="sm" class="me-1"
                ><i class="bi bi-three-dots-vertical"></i> Manage
                settings</BButton
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt
              <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
              consectetur corporis corrupti nulla,
              <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae
              ad sit quasi voluptate perferendis consequatur tempore fuga
              repudiandae.
            </p>

            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
            </ul>

            <div class="text-end mt-4">
              <BButton variant="outline-primary" class="me-2">Cancel</BButton>
              <BButton variant="primary" class="me-1">Submit</BButton>
            </div>
          </BCard>
        </div>

        <div class="g-col-6">
          <BCard
            bg-variant="body-secondary"
            class="bg-opacity-50 border-0 mb-3"
          >
            <div class="d-flex justify-content-between mb-3">
              <h3 class="fw-bold">Heading</h3>
              <BButton variant="quiet-primary" size="sm" class="me-1"
                ><i class="bi bi-three-dots-vertical"></i> Manage
                settings</BButton
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt
              <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
              consectetur corporis corrupti nulla,
              <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae
              ad sit quasi voluptate perferendis consequatur tempore fuga
              repudiandae.
            </p>

            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
            </ul>

            <div class="text-end mt-4">
              <BButton variant="outline-primary" class="me-2">Cancel</BButton>
              <BButton variant="primary" class="me-1">Submit</BButton>
            </div>
          </BCard>
        </div>

        <div class="g-col-6">
          <BCard
            bg-variant="spirit-purple-subtle"
            class="bg-opacity-25 border-0 mb-3"
          >
            <div class="d-flex justify-content-between mb-3">
              <h3 class="fw-bold">Heading</h3>
              <BButton variant="quiet-primary" size="sm" class="me-1"
                ><i class="bi bi-three-dots-vertical"></i> Manage
                settings</BButton
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt
              <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
              consectetur corporis corrupti nulla,
              <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae
              ad sit quasi voluptate perferendis consequatur tempore fuga
              repudiandae.
            </p>

            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
            </ul>

            <div class="text-end mt-4">
              <BButton variant="outline-primary" class="me-2">Cancel</BButton>
              <BButton variant="primary" class="me-1">Submit</BButton>
            </div>
          </BCard>
        </div>

        <div class="g-col-6">
          <BCard
            bg-variant="husky-gold-subtle"
            class="bg-opacity-50 border-0 mb-3"
          >
            <div class="d-flex justify-content-between mb-3">
              <h3 class="fw-bold">Heading</h3>
              <BButton variant="quiet-primary" size="sm" class="me-1"
                ><i class="bi bi-three-dots-vertical"></i> Manage
                settings</BButton
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              deserunt
              <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
              consectetur corporis corrupti nulla,
              <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae
              ad sit quasi voluptate perferendis consequatur tempore fuga
              repudiandae.
            </p>

            <ul class="list-unstyled mb-5">
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
              <li class="d-flex justify-content-between mb-2">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  <BButton variant="quiet-primary" size="sm" class="me-1"
                    ><i class="bi bi-pencil"></i> Edit</BButton
                  >
                  <BButton
                    variant="quiet-danger"
                    size="sm"
                    class="me-2"
                    aria-label="Trash"
                    ><i class="bi bi-trash3"></i
                  ></BButton>
                </div>
              </li>
            </ul>

            <div class="text-end mt-4">
              <BButton variant="outline-primary" class="me-2">Cancel</BButton>
              <BButton variant="primary" class="me-1">Submit</BButton>
            </div>
          </BCard>
        </div>
      </div>

      <BButton v-b-modal.modal-example variant="danger">
        Show Delete Modal
      </BButton>
      <BModal id="modal-example" no-header no-footer title="Delete this thing">
        <h3>Delete this thing</h3>
        <p>Are you sure you want to delete?</p>
        <div class="text-end">
          <BButton variant="outline-danger" class="me-2">Cancel</BButton>
          <BButton variant="danger" class="text-end">Delete</BButton>
        </div>
      </BModal>

      <hr />
      <h2 class="mb-5 fw-bold">Custom Utilities (solstice.scss)</h2>

      <h3>Hover</h3>

      <p class="fw-bold">text-xxxxx-hover</p>
      <ul class="fs-5">
        <li class="text-husky-purple text-husky-gold-hover">Hello world..</li>
        <li class="text-danger text-spirit-gold-hover">Hello world..</li>
      </ul>

      <p class="fw-bold">text-opacity-x-hover</p>

      <p class="fw-bold">bg-xxxxx-hover</p>
      <ul class="list-unstyled">
        <li class="bg-danger bg-primary-hover mb-2 p-3 rounded text-white">
          Bootstrap themes
        </li>
        <li class="bg-danger-subtle bg-primary-subtle-hover mb-2 p-3 rounded">
          Bootstrap themes (subtle)
        </li>
        <li
          class="bg-spirit-purple bg-husky-gold-hover text-black-hover mb-2 p-3 rounded text-white"
        >
          UW Brand
        </li>
        <li
          class="bg-spirit-purple-subtle bg-spirit-gold-subtle-hover mb-2 p-3 rounded"
        >
          UW Brand (subtle)
        </li>
        <li
          class="bg-deco-violet bg-deco-burnt-hover mb-2 p-3 rounded text-white"
        >
          Decorative
        </li>
        <li
          class="bg-deco-violet-subtle bg-deco-burnt-subtle-hover mb-2 p-3 rounded"
        >
          Decorative (subtle)
        </li>
      </ul>

      <p class="fw-bold">bg-opacity-x-hover</p>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import STabsList from "@/components/tabs/STabsList.vue";
import STabsItem from "@/components/tabs/STabsItem.vue";
import STabsDisplay from "@/components/tabs/STabsDisplay.vue";
import STabsPanel from "@/components/tabs/STabsPanel.vue";
import { BBadge, BButton, BCard, BModal } from "bootstrap-vue-next";

export default {
  name: "PagesHome",
  components: {
    Layout,
    STabsList,
    STabsItem,
    STabsDisplay,
    STabsPanel,
    BBadge,
    BButton,
    BCard,
    BModal,
  },
  data() {
    return {
      pageTitle: "Getting started",
      colorMode: "light",
      modal: false,
    };
  },
  updated() {
    this.colorMode = document.documentElement.getAttribute("data-bs-theme");
  },
  methods: {},
};
</script>

<script setup></script>
