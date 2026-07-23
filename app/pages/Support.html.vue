<script setup lang="ts">
import { ArrowRight, DraftingCompass, Layers3, PackageCheck, Printer } from '@lucide/vue';

usePageSeo({
  title: 'Custom Packaging Design & Manufacturing Support | Daxiong Pack',
  description: 'Flexible packaging support from design and materials through printing, lamination, bag making and quality checks for custom food packaging projects.',
  path: '/Support.html',
  image: '/media/testing.png',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom flexible packaging support',
    provider: { '@type': 'Organization', name: 'Daxiong Pack' },
    areaServed: 'Worldwide',
    serviceType: 'Packaging design and manufacturing support',
  },
});

const services = [
  { icon: DraftingCompass, number: '01', title: 'Packaging design', copy: 'A professional design and service team helps translate packaging requirements into practical artwork and production directions.' },
  { icon: Layers3, number: '02', title: 'Material & structure', copy: 'Bag form, material structure, barrier needs and thickness are considered together around the product and distribution conditions.' },
  { icon: Printer, number: '03', title: 'Print & finishing', copy: 'Gravure, flexographic, digital and jet printing options are supported alongside multiple surface and finishing choices.' },
  { icon: PackageCheck, number: '04', title: 'Production support', copy: 'Stock formats can accelerate sourcing, while custom production supports specific sizes, artwork, features and quantities.' },
];

const steps = [
  ['01', 'Brief', 'Share the product, format, size, quantity, target market and artwork status.'],
  ['02', 'Structure', 'Align the bag type, material layers, barrier and functional features.'],
  ['03', 'Artwork', 'Prepare or check print files, colors, dimensions and surface treatment.'],
  ['04', 'Production', 'Move through printing, lamination, curing, bag making and in-process checks.'],
  ['05', 'Delivery', 'Complete final inspection, packing and shipment preparation.'],
];

const faqs = [
  ['What information should I prepare for a quote?', 'Bag type, finished size, material or barrier requirement, estimated quantity, printing artwork and destination are the most useful starting points.'],
  ['Can Daxiong Pack help with packaging design?', 'Yes. The original support information describes a professional design and service team that can assist with packaging design and production preparation.'],
  ['Which printing methods are available?', 'The support page lists gravure, flexographic, digital and jet printing options. The suitable method depends on format, quantity, artwork and delivery requirements.'],
  ['Are stock packaging products available?', 'Yes. General coffee bags, bakery bags and stand-up pouch formats are available in stock specifications for faster sourcing.'],
];
const assetUrl = useAssetUrl();
</script>

<template>
  <main>
    <PageHero
      kicker="Service & support"
      title="A clearer route from idea to finished pack."
      copy="Design, materials, print and production are connected decisions. Our role is to help customers move through them with fewer unknowns."
      image="/media/testing.png"
      alt="Flexible packaging quality testing at Daxiong Pack"
      index="04"
    />

    <section id="content" class="section service-intro-section">
      <div class="shell">
        <div class="section-intro compact-intro">
          <div><p class="section-kicker">Custom packaging support</p><h2>Four parts of one production conversation.</h2></div>
          <p>Daxiong Pack works with coffee and tea, pet food, cosmetics, beverages, processed foods, dry foods, frozen foods, sauces and condiments.</p>
        </div>
        <div class="service-grid">
          <article v-for="service in services" :key="service.title">
            <div class="service-icon"><component :is="service.icon" :size="24" /></div>
            <span>{{ service.number }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section workflow-section">
      <div class="shell workflow-grid">
        <div class="workflow-intro">
          <p class="section-kicker">Custom workflow</p>
          <h2>One brief, five connected stages.</h2>
          <p>Early clarity reduces unnecessary revisions later. A strong brief gives structure to every production decision that follows.</p>
          <a class="button button-outline-light" href="#inquiry">Start a brief <ArrowRight :size="16" /></a>
        </div>
        <ol class="workflow-list">
          <li v-for="step in steps" :key="step[0]"><span>{{ step[0] }}</span><strong>{{ step[1] }}</strong><p>{{ step[2] }}</p></li>
        </ol>
      </div>
    </section>

    <section class="section support-media-section">
      <div class="shell support-media-grid">
        <div class="support-video-wrap">
          <video controls muted preload="metadata" :poster="assetUrl('/media/printing.png')">
            <source :src="assetUrl('/media/quality-tour.mp4')" type="video/mp4">
          </video>
          <span>Production &amp; quality tour</span>
        </div>
        <div class="support-media-copy">
          <p class="section-kicker">Mature technology</p>
          <h2>See the process instead of taking it on faith.</h2>
          <p>The factory combines more than 50 sets of equipment across printing, lamination and bag making. Production capability is paired with tensile, sealing and leakage checks for finished packaging.</p>
          <dl>
            <div><dt>Daily capacity referenced by the source site</dt><dd>500,000 units</dd></div>
            <div><dt>Industrial park</dt><dd>6,000+ m²</dd></div>
            <div><dt>Production professionals</dt><dd>100+</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="shell faq-grid">
        <div><p class="section-kicker">Common questions</p><h2>Useful answers before the first email.</h2></div>
        <div class="faq-list">
          <details v-for="(faq, index) in faqs" :key="faq[0]" :open="index === 0">
            <summary><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ faq[0] }}</summary>
            <p>{{ faq[1] }}</p>
          </details>
        </div>
      </div>
    </section>

    <InquirySection />
  </main>
</template>
