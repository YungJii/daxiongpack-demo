<script setup lang="ts">
import { ArrowDownRight } from '@lucide/vue';

const props = defineProps<{
  kicker: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  index: string;
  imagePosition?: string;
}>();

const assetUrl = useAssetUrl();
</script>

<template>
  <section class="page-hero">
    <img :src="assetUrl(props.image)" :alt="alt" :style="{ objectPosition: imagePosition || 'center' }" width="1200" height="750">
    <div class="page-hero-shade"></div>
    <div class="shell page-hero-content">
      <div class="page-hero-index"><span>{{ index }}</span><span>/ 05</span></div>
      <div class="page-hero-copy">
        <p class="eyebrow">{{ kicker }}</p>
        <h1>{{ title }}</h1>
        <p>{{ copy }}</p>
      </div>
      <a class="page-hero-cue" href="#content" aria-label="Continue to page content">
        <span>Discover</span><ArrowDownRight :size="21" />
      </a>
    </div>
  </section>
</template>
