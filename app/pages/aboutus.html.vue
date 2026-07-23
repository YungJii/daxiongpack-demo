<script setup lang="ts">
import { ArrowRight, Check } from '@lucide/vue';
import { facts } from '~/data/site';

usePageSeo({
  title: 'About Daxiong Pack | Flexible Packaging Manufacturer Since 1993',
  description: 'Meet Daxiong Pack, a Chaozhou flexible packaging manufacturer with 30+ years of experience, 50+ sets of equipment and a 120-person team.',
  path: '/aboutus.html',
  image: '/media/factory.png',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Daxiong Pack',
    url: 'https://www.daxiongpack.com/aboutus.html',
    about: { '@type': 'Organization', name: 'Daxiong Pack' },
  },
});

const facilities = [
  ['4', 'Fully automatic packaging and printing lines'],
  ['6', 'High-speed solvent-free laminating lines'],
  ['20+', 'Bag-making machines'],
  ['50+', 'Sets of packaging equipment'],
];
const assetUrl = useAssetUrl();
</script>

<template>
  <main>
    <PageHero
      kicker="Company profile"
      title="Built on craft. Growing through partnership."
      copy="Since 1993, Daxiong Pack has developed flexible packaging through practical manufacturing experience, continuous research and close collaboration with customers."
      image="/media/factory.png"
      alt="Daxiong Pack factory in Chaozhou"
      index="02"
      image-position="center 58%"
    />

    <section id="content" class="section story-section">
      <div class="shell story-grid">
        <div class="story-lead">
          <p class="section-kicker">Chaozhou Chaoan Daxiong Color Printing Co., Ltd.</p>
          <h2>A modern printing company shaped by more than three decades of production.</h2>
        </div>
        <div class="story-body">
          <p>Founded in 1993, Daxiong specializes in the wholesale, research, production and sales of flexible packaging. Our work covers coffee bags, bakery bags, pet food bags, rice bags, shaped pouches, packaging films and other food packaging formats.</p>
          <p>Our goal is straightforward: work closely with partners and help customers achieve greater success across different product categories. That means combining manufacturing capability with design support, responsible communication and practical customization.</p>
          <div class="principle-row"><span>Quality first</span><span>Customer first</span><span>Credit-based cooperation</span></div>
        </div>
      </div>
    </section>

    <section class="about-facts">
      <div class="shell fact-grid">
        <div v-for="fact in facts" :key="fact.label" class="fact"><strong>{{ fact.value }}</strong><span>{{ fact.label }}</span></div>
      </div>
    </section>

    <section class="section facility-section">
      <div class="shell facility-grid">
        <div class="facility-media">
          <img :src="assetUrl('/media/printing.png')" alt="Printing equipment inside Daxiong Pack" width="1200" height="750" loading="lazy">
          <div class="facility-note"><span>Manufacturing campus</span><strong>Printing, lamination, bag making</strong></div>
        </div>
        <div class="facility-copy">
          <p class="section-kicker">Production foundation</p>
          <h2>Equipment matters. Coordination matters more.</h2>
          <p>Printing, high-speed solvent-free lamination and bag making are brought together within one production system, helping teams manage quality and efficiency from artwork through finished packaging.</p>
          <div class="facility-list">
            <div v-for="item in facilities" :key="item[1]"><strong>{{ item[0] }}</strong><span>{{ item[1] }}</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section quality-proof-section">
      <div class="shell">
        <div class="section-intro compact-intro">
          <div><p class="section-kicker">Quality evidence</p><h2>Standards shown as documents, not decoration.</h2></div>
          <p>Daxiong Pack references ISO 9001, FDA and SGS requirements on the original site. The available documentation is presented here for direct inspection.</p>
        </div>
        <div class="certificate-grid">
          <figure><img :src="assetUrl('/media/certificate-fda.png')" alt="Food contact conformity document" width="339" height="455" loading="lazy"><figcaption><Check :size="16" /> Food contact conformity</figcaption></figure>
          <figure><img :src="assetUrl('/media/certificate-iso.png')" alt="ISO 9001 certificate" width="339" height="455" loading="lazy"><figcaption><Check :size="16" /> ISO 9001</figcaption></figure>
          <figure><img :src="assetUrl('/media/certificate-verified.png')" alt="Verified supplier assessment" width="339" height="455" loading="lazy"><figcaption><Check :size="16" /> Supplier assessment</figcaption></figure>
        </div>
        <div class="center-action"><NuxtLink class="button button-dark" to="/Support.html">See service &amp; support <ArrowRight :size="16" /></NuxtLink></div>
      </div>
    </section>

    <InquirySection />
  </main>
</template>
