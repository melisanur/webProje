<template>
  <nav class="breadcrumb d-flex flex-wrap">
    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <a v-if="crumb.link" :href="crumb.link" :class="{ italic: crumb.name.includes('Star Wars™') }">{{ crumb.name }}</a>
      <span v-else :class="{ italic: crumb.name.includes('Star Wars™') }">{{ crumb.name }}</span>
      <span v-if="index < breadcrumbs.length - 1" class="separator">›</span>
    </template>
  </nav>
</template>

<script lang="ts" setup>
const breadcrumbs = [
  { name: "Ana Sayfa", link: "/" },
  { name: "Temalara göre setler", link: "/" },
  { name: "Star Wars™", link: "/" },
  { name: "Star Wars™ Oyuncakları ve Setleri" },
];
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  margin-left: 185px;
}

.breadcrumb a {
  text-decoration: none;
  color: #0e6db7;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb .separator {
  margin: 5px 10px;
  font-size: 20px;
  color: #555;
}

.breadcrumb span:last-child {
  font-weight: 400;
  color: #555; /* Son öğe pasif */
}

.italic {
  font-style: italic;
}
</style>
