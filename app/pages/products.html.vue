<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import { products } from '~/data/site';

usePageSeo({
  title: 'Custom Food Packaging Bags & Pouches | Daxiong Pack',
  description: 'Explore custom coffee bags, pet food bags, bakery packaging, shaped pouches, spout pouches and printed packaging films from Daxiong Pack.',
  path: '/products.html',
  image: '/media/sample-room.png',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Daxiong Pack flexible packaging categories',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
    })),
  },
});

const categories = ['All', 'Food packaging', 'Bag type', 'Packaging film'];
const activeCategory = ref('All');
const visibleProducts = computed(() => activeCategory.value === 'All' ? products : products.filter(product => product.category === activeCategory.value));
const assetUrl = useAssetUrl();
</script>

<template>
  <main>
    <PageHero
      kicker="Product portfolio"
      title="The right format for what comes next."
      copy="From shelf-ready coffee bags to high-barrier roll film, every format can be tuned around product protection, filling, use and brand expression."
      image="/media/sample-room.png"
      alt="Flexible packaging samples displayed in the Daxiong Pack showroom"
      index="03"
    />

    <section id="content" class="section product-catalog-section">
      <div class="shell">
        <div class="catalog-header">
          <div><p class="section-kicker">Browse formats</p><h2>Food packaging, pouches and films.</h2></div>
          <p>Choose a category to narrow the range, then open any format to review common customization options.</p>
        </div>
        <div class="filter-bar" aria-label="Product category filter">
          <button v-for="category in categories" :key="category" type="button" :class="{ active: activeCategory === category }" @click="activeCategory = category">{{ category }}</button>
        </div>
        <ProductShowcase :items="visibleProducts" />
      </div>
    </section>

    <section class="section format-section">
      <div class="shell format-grid">
        <div class="format-copy">
          <p class="section-kicker">Beyond the category</p>
          <h2>Define the structure around the product.</h2>
          <p>A bag category is only the starting point. Barrier, filling temperature, shelf life, opening behavior and distribution conditions all influence the final material and construction.</p>
          <NuxtLink class="button button-outline-light" to="/Support.html">Plan your customization <ArrowRight :size="16" /></NuxtLink>
        </div>
        <dl class="option-matrix">
          <div><dt>Bag form</dt><dd>Flat bottom, stand-up, side gusset, three-side seal, four-side seal, shaped and spout</dd></div>
          <div><dt>Print</dt><dd>Gravure, flexographic, digital and jet printing options</dd></div>
          <div><dt>Features</dt><dd>Zipper, valve, tin tie, clear window, tear notch and spout fitment</dd></div>
          <div><dt>Surface</dt><dd>Matte, gloss, soft touch, embossing and textured varnish</dd></div>
        </dl>
      </div>
    </section>

    <section class="section sample-section">
      <div class="shell sample-grid">
        <img :src="assetUrl('/media/coffee.jpg')" alt="Custom printed coffee bags" width="1200" height="800" loading="lazy">
        <img :src="assetUrl('/media/bakery.jpg')" alt="Bakery packaging with clear windows and tin ties" width="1200" height="800" loading="lazy">
        <div class="sample-caption"><span>Material</span><span>Format</span><span>Finish</span><span>Print</span><strong>Made to work together.</strong></div>
      </div>
    </section>

    <InquirySection />
  </main>
</template>
