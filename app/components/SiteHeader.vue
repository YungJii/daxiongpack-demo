<script setup lang="ts">
import { ArrowRight, Menu, X } from '@lucide/vue';
import { navigation } from '~/data/site';

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 28;
}

function closeMenu() {
  menuOpen.value = false;
}

watch(() => route.path, closeMenu);

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <div class="header-stack">
    <div class="utility-bar">
      <span>Flexible packaging manufacturer since 1993</span>
      <span>Chaozhou, Guangdong, China</span>
    </div>
    <header class="site-header" :class="{ 'is-scrolled': scrolled, 'menu-is-open': menuOpen }">
      <div class="shell header-inner">
        <NuxtLink class="brand" to="/" aria-label="Daxiong Pack home" @click="closeMenu">
          <span class="brand-mark">DX</span>
          <span class="brand-name">DAXIONG PACK</span>
        </NuxtLink>
        <nav class="desktop-nav" aria-label="Primary navigation">
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" :class="{ active: route.path === item.to }">
            {{ item.label }}
          </NuxtLink>
        </nav>
        <a class="header-cta" href="#inquiry">Get a quote <ArrowRight :size="15" /></a>
        <button class="icon-button mobile-trigger" type="button" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
          <X v-if="menuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
        <a href="#inquiry" @click="closeMenu">Get a quote</a>
      </nav>
    </header>
  </div>
</template>
