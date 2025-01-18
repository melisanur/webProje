<template>
    <div style="background-color: #ffffff;">
        <oyunAlani/>
        <div style="margin: -19px;"></div>
        <Navbar />
        <header>
            <Breadcrumb />
            <StarWarsContent />
        </header>
        <main>
            <ProductList />
        </main>
        <Footer />
    </div>
</template>

<script lang="ts" setup>
import oyunAlani from '~/components/Urunler/oyunAlani.vue';
import Navbar from '~/components/Navbar.vue';
import Breadcrumb from '~/components/Urunler/Breadcrumb.vue';
import StarWarsContent from '~/components/Urunler/StarWarsContent.vue';
import ProductList from '~/components/Urunler/ProductList.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
:root {
    --yellowClr: #ffd502;
}

main {
    padding-top: 20px;
    /* Header ve Footer için alan bırakın */
}
</style>