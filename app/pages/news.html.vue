<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import { articles } from '~/data/site';

usePageSeo({
  title: 'Packaging Printing, Materials & Design Insights | Daxiong Pack',
  description: 'Read Daxiong Pack notes on package printing, soft-touch finishes, embossing, textured varnish and tin-tie packaging.',
  path: '/news.html',
  image: '/media/printing.png',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Daxiong Pack packaging insights',
    url: 'https://www.daxiongpack.com/news.html',
    hasPart: articles.map(article => ({ '@type': 'Article', headline: article.title, datePublished: article.date })),
  },
});

const featured = articles[0];
</script>

<template>
  <main>
    <PageHero
      kicker="Packaging insights"
      title="Better packaging starts with better questions."
      copy="Notes from the production floor on print behavior, surface finishes, closing formats and the choices that shape how packaging looks, feels and performs."
      image="/media/printing.png"
      alt="Daxiong Pack packaging printing line"
      index="05"
      image-position="center 54%"
    />

    <section id="content" class="section featured-article-section">
      <div class="shell featured-article-grid">
        <img :src="featured.image" :alt="featured.title" width="1200" height="750" loading="lazy">
        <article>
          <div class="article-meta"><span>{{ featured.tag }}</span><time :datetime="featured.date">{{ featured.date }}</time></div>
          <h2>{{ featured.title }}</h2>
          <p>{{ featured.summary }}</p>
          <p>During spray printing on kraft paper, minor color mixing can occur where several colors overlap, where adjacent areas have strong contrast, or where artwork contains very small details and gradients. Understanding those conditions early helps teams adapt artwork and expectations before production.</p>
          <a class="text-link" href="#article-archive">Continue through the archive <ArrowRight :size="16" /></a>
        </article>
      </div>
    </section>

    <section id="article-archive" class="section archive-section">
      <div class="shell">
        <div class="archive-heading"><p class="section-kicker">Latest notes</p><h2>Five ways packaging gains character and utility.</h2></div>
        <div class="news-grid">
          <article v-for="(article, index) in articles" :key="article.title" :class="{ wide: index === 0 }">
            <img :src="article.image" :alt="article.title" width="1200" height="800" loading="lazy">
            <div class="news-card-body">
              <div class="article-meta"><span>{{ article.tag }}</span><time :datetime="article.date">{{ article.date }}</time></div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.summary }}</p>
              <span class="news-index">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section editorial-band">
      <div class="shell editorial-grid">
        <p>Materials protect.<br>Print communicates.<br>Details make it yours.</p>
        <div><span>From the Daxiong Pack team</span><p>Talk to us about the practical choices behind your next packaging project.</p><a class="button button-outline-light" href="#inquiry">Discuss a project <ArrowRight :size="16" /></a></div>
      </div>
    </section>

    <InquirySection />
  </main>
</template>
