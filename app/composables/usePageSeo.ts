type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  schema?: Record<string, unknown>;
};

export function usePageSeo({ title, description, path, image = '/media/coffee.jpg', schema }: PageSeo) {
  const canonical = `https://www.daxiongpack.com${path}`;
  const socialImage = `https://www.daxiongpack.com${image}`;

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: socialImage,
    ogSiteName: 'Daxiong Pack',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: socialImage,
  });

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    script: schema
      ? [{ key: `page-schema-${path}`, type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
      : [],
  });
}
