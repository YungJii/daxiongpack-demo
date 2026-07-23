<script setup lang="ts">
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from '@lucide/vue';

const assetUrl = useAssetUrl();
</script>

<template>
  <footer class="footer">
    <div class="shell footer-lead">
      <p>Packaging, engineered around your product.</p>
      <a href="#inquiry">Start a project <ArrowUpRight :size="24" /></a>
    </div>
    <div class="shell footer-grid">
      <div class="footer-brand">
        <img :src="assetUrl('/media/logo.png')" alt="Daxiong Pack logo" width="400" height="132">
        <p>Custom flexible food packaging and printing solutions from Chaozhou, China.</p>
      </div>
      <div>
        <strong>Explore</strong>
        <NuxtLink to="/aboutus.html">About us</NuxtLink>
        <NuxtLink to="/products.html">Products</NuxtLink>
        <NuxtLink to="/Support.html">Support</NuxtLink>
        <NuxtLink to="/news.html">News</NuxtLink>
      </div>
      <div>
        <strong>Contact</strong>
        <a href="tel:+8613433648608"><Phone :size="15" /> +86-134-3364-8608</a>
        <a href="mailto:13342794511@163.com"><Mail :size="15" /> 13342794511@163.com</a>
        <a href="https://api.whatsapp.com/send?phone=8613342794511" target="_blank" rel="noreferrer"><MessageCircle :size="15" /> WhatsApp</a>
        <span><MapPin :size="15" /> Chaozhou, Guangdong</span>
      </div>
      <div>
        <strong>Follow</strong>
        <a href="https://www.linkedin.com/company/daxiongpack" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/dxsadie/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.youtube.com/@DaxiongPack" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://www.tiktok.com/@daxiong_pack" target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </div>
    <div class="shell footer-bottom">
      <span>Copyright 2026 Chaozhou Chaoan Daxiong Color Printing Co., Ltd.</span>
      <a href="https://www.daxiongpack.com/privacy-policy.html">Privacy policy</a>
    </div>
  </footer>
</template>
