<script setup lang="ts">
import { ArrowRight, Check, Mail, MapPin, MessageCircle, Phone } from '@lucide/vue';

const sent = ref(false);
const form = reactive({ name: '', email: '', company: '', details: '' });

function submit() {
  sent.value = true;
}
</script>

<template>
  <section id="inquiry" class="section inquiry-section">
    <div class="shell inquiry-grid">
      <div class="inquiry-copy">
        <p class="section-kicker">Start a packaging project</p>
        <h2>Bring us the product.<br>We will shape the pack.</h2>
        <p>Share your preferred bag type, size, material, quantity and target market. Our team can help turn those requirements into a workable packaging direction.</p>
        <div class="contact-list">
          <a href="tel:+8613433648608"><Phone :size="18" /><span>+86-134-3364-8608</span></a>
          <a href="mailto:13342794511@163.com"><Mail :size="18" /><span>13342794511@163.com</span></a>
          <a href="https://api.whatsapp.com/send?phone=8613342794511" target="_blank" rel="noreferrer"><MessageCircle :size="18" /><span>WhatsApp 8613342794511</span></a>
          <div><MapPin :size="18" /><span>No. 29, Qiaolin Tingqian Road, Anbu Town, Chaoan District, Chaozhou City</span></div>
        </div>
      </div>
      <form class="inquiry-form" aria-label="Packaging inquiry" @submit.prevent="submit">
        <div class="form-row">
          <label><span>Name</span><input v-model="form.name" type="text" autocomplete="name" required></label>
          <label><span>Work email</span><input v-model="form.email" type="email" autocomplete="email" required></label>
        </div>
        <label><span>Company</span><input v-model="form.company" type="text" autocomplete="organization"></label>
        <label><span>Project details</span><textarea v-model="form.details" rows="5" placeholder="Bag type, size, material, quantity and target market" required></textarea></label>
        <button class="button button-primary form-button" type="submit">Send inquiry <ArrowRight :size="17" /></button>
        <p v-if="sent" class="form-success" role="status"><Check :size="18" /> Thank you. This demo has recorded your inquiry locally.</p>
      </form>
    </div>
  </section>
</template>
