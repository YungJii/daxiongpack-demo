<script setup lang="ts">
import { ArrowRight, Check, X } from '@lucide/vue';
import type { Product } from '~/data/site';
import { products } from '~/data/site';

const props = withDefaults(defineProps<{ limit?: number; items?: Product[] }>(), { limit: 6 });

const selected = ref<Product | null>(null);
const visibleProducts = computed(() => (props.items || products).slice(0, props.limit));
const assetUrl = useAssetUrl();
</script>

<template>
  <div class="product-grid">
    <button v-for="product in visibleProducts" :key="product.name" class="product-card" type="button" :aria-label="`View ${product.name} details`" @click="selected = product">
      <img :src="assetUrl(product.image)" :alt="product.name" width="1200" height="800" loading="lazy">
      <span class="product-card-topline"><span>{{ product.category }}</span><span>Customizable</span></span>
      <span class="product-label"><span>{{ product.shortName }}</span><ArrowRight :size="17" /></span>
    </button>
  </div>

  <div v-if="selected" class="modal-backdrop" role="presentation" @click.self="selected = null">
    <section class="modal product-modal" role="dialog" aria-modal="true" :aria-label="selected.name">
      <button class="icon-button modal-close" type="button" aria-label="Close product details" @click="selected = null"><X :size="21" /></button>
      <img :src="assetUrl(selected.image)" :alt="selected.name" width="1200" height="800">
      <div class="modal-copy">
        <p class="section-kicker">{{ selected.category }}</p>
        <h2>{{ selected.name }}</h2>
        <p>{{ selected.summary }}</p>
        <ul><li v-for="option in selected.options" :key="option"><Check :size="16" />{{ option }}</li></ul>
        <a class="button button-primary" href="#inquiry" @click="selected = null">Discuss this format <ArrowRight :size="16" /></a>
      </div>
    </section>
  </div>
</template>
