<script setup lang="ts">
import { ArrowRight, ChevronDown, Pause, Play, Volume2, VolumeX } from '@lucide/vue';
import { articles, facts } from '~/data/site';

usePageSeo({
  title: 'Custom Flexible Packaging Manufacturer | Daxiong Pack',
  description: 'Custom coffee bags, bakery bags, pet food packaging, spout pouches and roll films from a flexible packaging manufacturer established in 1993.',
  path: '/',
  image: '/media/coffee.jpg',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Daxiong Pack',
    url: 'https://www.daxiongpack.com/',
  },
});

const heroVideo = ref<HTMLVideoElement | null>(null);
const muted = ref(true);
const playing = ref(true);
const assetUrl = useAssetUrl();

function toggleMute() {
  if (!heroVideo.value) return;
  heroVideo.value.muted = !heroVideo.value.muted;
  muted.value = heroVideo.value.muted;
}

async function togglePlay() {
  if (!heroVideo.value) return;
  if (heroVideo.value.paused) {
    await heroVideo.value.play();
    playing.value = true;
  } else {
    heroVideo.value.pause();
    playing.value = false;
  }
}
</script>

<template>
  <main id="top">
    <section class="home-hero">
      <video ref="heroVideo" class="home-hero-video" autoplay muted loop playsinline :poster="assetUrl('/media/printing.png')">
        <source :src="assetUrl('/media/factory-tour.mp4')" type="video/mp4">
      </video>
      <div class="home-hero-shade"></div>
      <div class="shell home-hero-content">
        <div class="hero-side-note"><span>Flexible packaging</span><span>Made in Chaozhou</span></div>
        <div class="hero-main-copy">
          <p class="eyebrow">One-stop custom packaging solution</p>
          <h1>Packaging built<br>to be remembered.</h1>
          <p>Food-grade bags, pouches and roll films backed by design support, mature printing technology and responsive OEM &amp; ODM service.</p>
          <div class="hero-actions">
            <NuxtLink class="button button-primary" to="/products.html">Explore packaging <ArrowRight :size="17" /></NuxtLink>
            <NuxtLink class="button button-ghost" to="/Support.html">See how we work</NuxtLink>
          </div>
        </div>
      </div>
      <div class="hero-controls">
        <button class="icon-button control-button" type="button" :aria-label="playing ? 'Pause background video' : 'Play background video'" @click="togglePlay">
          <Pause v-if="playing" :size="18" /><Play v-else :size="18" />
        </button>
        <button class="icon-button control-button" type="button" :aria-label="muted ? 'Unmute background video' : 'Mute background video'" @click="toggleMute">
          <VolumeX v-if="muted" :size="18" /><Volume2 v-else :size="18" />
        </button>
      </div>
      <a class="scroll-cue" href="#content" aria-label="Scroll to products"><ChevronDown :size="22" /></a>
    </section>

    <section class="fact-strip" aria-label="Company facts">
      <div class="shell fact-grid">
        <div v-for="fact in facts" :key="fact.label" class="fact"><strong>{{ fact.value }}</strong><span>{{ fact.label }}</span></div>
      </div>
    </section>

    <section id="content" class="section home-product-section">
      <div class="shell">
        <div class="section-intro">
          <div><p class="section-kicker">Product portfolio</p><h2>Made for the shelf.<br>Built for performance.</h2></div>
          <div class="section-intro-copy">
            <p>Material, size, design, logo and thickness can be configured around the product you need to protect and the market you want to reach.</p>
            <NuxtLink class="text-link" to="/products.html">View all formats <ArrowRight :size="16" /></NuxtLink>
          </div>
        </div>
        <ProductShowcase />
      </div>
    </section>

    <section class="section home-process-section">
      <div class="shell process-grid">
        <div class="process-media-stack">
          <img class="process-main" :src="assetUrl('/media/printing.png')" alt="Daxiong gravure printing line" width="1200" height="750" loading="lazy">
          <img class="process-detail" :src="assetUrl('/media/testing.png')" alt="Flexible packaging quality testing" width="1200" height="750" loading="lazy">
          <span>Artwork to finished pouch</span>
        </div>
        <div class="process-copy">
          <p class="section-kicker">Inside Daxiong</p>
          <h2>Control at every stage, under one roof.</h2>
          <p>Our facilities bring printing, solvent-free lamination, bag making and quality checks into a coordinated production process.</p>
          <ol class="number-list">
            <li><span>01</span><strong>Professional packaging design support</strong></li>
            <li><span>02</span><strong>Gravure, flexographic and digital printing</strong></li>
            <li><span>03</span><strong>Tensile, sealing and leakage testing</strong></li>
            <li><span>04</span><strong>Stock formats and fully custom production</strong></li>
          </ol>
          <NuxtLink class="button button-outline-light" to="/Support.html">Explore our process <ArrowRight :size="16" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="section home-about-section">
      <div class="shell home-about-grid">
        <div class="home-about-copy">
          <p class="section-kicker">A packaging partner since 1993</p>
          <h2>Experience becomes useful when it solves a real problem.</h2>
          <p>Daxiong Color Printing Co., Ltd. is a modern printing enterprise focused on wholesale, research, production and custom flexible packaging. We work with coffee, bakery, pet food and other food brands around the world.</p>
          <NuxtLink class="text-link" to="/aboutus.html">Meet Daxiong Pack <ArrowRight :size="16" /></NuxtLink>
        </div>
        <figure class="home-about-media">
          <img :src="assetUrl('/media/factory.png')" alt="Daxiong Color Printing factory in Chaozhou" width="1245" height="826" loading="lazy">
          <figcaption><span>Chaozhou, Guangdong</span><span>30+ years in flexible packaging</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="section home-news-section">
      <div class="shell home-news-grid">
        <div class="news-heading">
          <p class="section-kicker">Packaging notes</p>
          <h2>Print, texture and the small details that matter.</h2>
          <NuxtLink class="text-link text-link-light" to="/news.html">Read all insights <ArrowRight :size="16" /></NuxtLink>
        </div>
        <div class="article-list">
          <article v-for="article in articles.slice(0, 3)" :key="article.title">
            <time :datetime="article.date">{{ article.date }}</time>
            <div><span>{{ article.tag }}</span><h3>{{ article.title }}</h3><p>{{ article.summary }}</p></div>
            <ArrowRight :size="20" />
          </article>
        </div>
      </div>
    </section>

    <InquirySection />
  </main>
</template>
