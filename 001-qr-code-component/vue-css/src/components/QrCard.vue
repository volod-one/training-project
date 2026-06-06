<template>
  <article class="card">
    <img
      :src="`${base}images/image-qr-code.png`"
      alt="QR code to visit Frontend Mentor"
      class="card__image"
    >
    <div class="card__body">
      <h1 class="card__title">
        Improve your front-end skills by building projects
      </h1>
      <p class="card__text">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
const base = import.meta.env.BASE_URL
</script>

<style scoped>
.card {
  background-color: hsl(0deg 0% 100%); /* White */
  border-radius: 20px; /* from Figma design */
  padding: 16px; /* from Figma design */
  max-width: 320px; /* from Figma design */
  width: 100%;
}

.card__image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px; /* from Figma design */
  display: block;
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: 16px; /* from Figma design */
  padding: 24px 8px 16px;
  text-align: center;
}

.card__title {
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.2;
  color: hsl(218deg 44% 22%); /* Slate 900 */
}

.card__text {
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: hsl(216deg 15% 48%); /* Slate 500 */
}
</style>
