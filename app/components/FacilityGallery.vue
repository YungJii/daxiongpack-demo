<script setup lang="ts">
import {
  Activity,
  ArrowRight,
  Factory,
  FlaskConical,
  PackageOpen,
  Printer,
  Users,
} from '@lucide/vue';

const facilities = [
  {
    title: 'Creative & sales team',
    shortTitle: 'Our team',
    tag: 'From idea to artwork',
    image: '/media/facility-team.jpg',
    alt: 'Daxiong Pack creative and sales team working in the office',
    description: 'Packaging specialists coordinate structure, artwork and production requirements before a job enters the factory.',
    icon: Users,
  },
  {
    title: 'Sample room',
    shortTitle: 'Sample room',
    tag: 'Formats you can inspect',
    image: '/media/facility-sample-room.jpg',
    alt: 'Finished flexible packaging samples displayed in the Daxiong sample room',
    description: 'Finished formats, materials and surface treatments are kept on hand to make early-stage decisions more tangible.',
    icon: PackageOpen,
  },
  {
    title: 'Gravure printing',
    shortTitle: 'Printing',
    tag: 'Controlled colour reproduction',
    image: '/media/facility-printing-line.jpg',
    alt: 'Daxiong Pack gravure printing line in production',
    description: 'High-speed equipment supports repeatable colour, detailed graphics and consistent output across longer runs.',
    icon: Printer,
  },
  {
    title: 'Bag-making workshop',
    shortTitle: 'Bag making',
    tag: 'Multiple pouch formats',
    image: '/media/facility-bag-making.jpg',
    alt: 'Rows of flexible packaging bag-making machines at Daxiong Pack',
    description: 'A coordinated bank of machines converts printed material into flat-bottom, stand-up and other pouch formats.',
    icon: Factory,
  },
  {
    title: 'Tensile testing',
    shortTitle: 'Tensile test',
    tag: 'Material strength checks',
    image: '/media/facility-tensile-testing.jpg',
    alt: 'Tensile testing equipment used for flexible packaging quality checks',
    description: 'Film and seal strength are measured before finished packaging is cleared for packing and delivery.',
    icon: Activity,
  },
  {
    title: 'Leakage testing',
    shortTitle: 'Leak test',
    tag: 'Seal integrity checks',
    image: '/media/facility-leak-testing.jpg',
    alt: 'Leakage testing equipment in the Daxiong Pack quality laboratory',
    description: 'Seal integrity checks help confirm that a pouch can protect its contents through filling, transport and storage.',
    icon: FlaskConical,
  },
];

const activeIndex = ref(1);
const activeFacility = computed(() => facilities[activeIndex.value]);
const assetUrl = useAssetUrl();
</script>

<template>
  <div class="facility-gallery">
    <div
      id="facility-panel"
      class="facility-stage"
      role="tabpanel"
      :aria-labelledby="`facility-tab-${activeIndex}`"
    >
      <div class="facility-stage-media">
        <img
          :key="activeFacility.image"
          :src="assetUrl(activeFacility.image)"
          :alt="activeFacility.alt"
          width="1200"
          height="750"
          loading="lazy"
        >
        <span>{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(facilities.length).padStart(2, '0') }}</span>
      </div>
      <div class="facility-stage-copy">
        <component :is="activeFacility.icon" :size="28" stroke-width="1.6" aria-hidden="true" />
        <p>{{ activeFacility.tag }}</p>
        <h3>{{ activeFacility.title }}</h3>
        <span>{{ activeFacility.description }}</span>
        <NuxtLink class="text-link text-link-light" to="/Support.html">
          See our capabilities <ArrowRight :size="16" />
        </NuxtLink>
      </div>
    </div>

    <div class="facility-tabs" role="tablist" aria-label="Daxiong Pack facilities">
      <button
        v-for="(facility, index) in facilities"
        :id="`facility-tab-${index}`"
        :key="facility.title"
        class="facility-tab"
        :class="{ active: activeIndex === index }"
        type="button"
        role="tab"
        :aria-selected="activeIndex === index"
        aria-controls="facility-panel"
        @click="activeIndex = index"
      >
        <img :src="assetUrl(facility.image)" alt="" width="1200" height="750" loading="lazy">
        <span><small>{{ String(index + 1).padStart(2, '0') }}</small>{{ facility.shortTitle }}</span>
        <component :is="facility.icon" :size="17" stroke-width="1.7" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
