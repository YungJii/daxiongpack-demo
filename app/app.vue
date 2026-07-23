<script setup lang="ts">
const config = useRuntimeConfig();
const isDemo = String(config.public.demoMode) === 'true';

useSeoMeta({
  robots: isDemo ? 'noindex, nofollow' : 'index, follow',
});

useHead({
  script: [
    {
      key: 'organization-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Chaozhou Chaoan Daxiong Color Printing Co., Ltd.',
        alternateName: 'Daxiong Pack',
        url: 'https://www.daxiongpack.com/',
        logo: 'https://www.daxiongpack.com/media/logo.png',
        foundingDate: '1993',
        email: '13342794511@163.com',
        telephone: '+86-134-3364-8608',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'No. 29, Qiaolin Tingqian Road, Anbu Town, Chaoan District',
          addressLocality: 'Chaozhou',
          addressRegion: 'Guangdong',
          addressCountry: 'CN',
        },
      }),
    },
  ],
});
</script>

<template>
  <div class="site-frame">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
