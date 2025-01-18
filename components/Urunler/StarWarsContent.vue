<template>
  <div class="star-wars-page">
    <!-- Üst Görsel Kısım -->
    <div class="hero-section">
      <div class="hero-content">
        <img src="~/public/starWars/starWars-Logo.png" alt="Star Wars Logo" class="logo" />
        <div class="buttons">
          <button class="btn btn-primary">Ürünler</button>
          <button class="btn btn-secondary">Daha fazla bilgi</button>
        </div>
      </div>
    </div>

    <!-- Alt İçerik Kısmı -->
    <div class="content-section">
      <h1><i>Star Wars™</i> Oyuncakları ve Setleri</h1>

      <!-- Kısaltılmış Metin -->
      <p v-if="!showMore">
        1977’den beri Güç, dünyanın en popüler serilerinden biri olan <i>Star Wars™</i> ile birlikte. LEGO® <i>Star
          Wars™</i>
        setlerimizle “çok, çok uzak bir galaksiyi” yanı başına getir. Favori LEGO <i>Star Wars™</i> setleri ve
        figürlerinle Jedi ya da Sith’e katıl ve <a href="#">filmlerdeki</a> sahneleri yeniden canlandırırken Luke
        Skywalker, Yoda,
        Grogu, Darth Vader, İmparator Palpatine, Prenses Leia, Han Solo, Chewbacca, R2-D2, C-3PO ve <a href="#">klon
          askerleri</a>
        gibi favori <a href="#">karakterlerinle</a> Güç’ün aydınlık ve karanlık tarafı arasındaki savaşa katıl. Daha
        ileri seviye yapım
        ustaları <i>Star Wars™</i> gemilerini yapabilir ya da kendi <i style="color: #0074cc;">Star Wars</i><a
          href="#">™ kaskı</a> ya da AT-AT™'sini oluşturabilir.
        LEGO <i>Star Wars™</i> parçalarla yapılan inşaat oyuncakları ve <a href="#">mini figürleri</a>; klasik <i>Star
          Wars™</i>
      </p>

      <!-- Tam Metin -->
      <p v-if="showMore">
        1977’den beri Güç, dünyanın en popüler serilerinden biri olan <i>Star Wars™</i> ile birlikte. LEGO® <i>Star
          Wars™</i>
        setlerimizle “çok, çok uzak bir galaksiyi” yanı başına getir. Favori LEGO <i>Star Wars™</i> setleri ve
        figürlerinle Jedi ya da Sith’e katıl ve <a href="#">filmlerdeki</a> sahneleri yeniden canlandırırken Luke
        Skywalker, Yoda,
        Grogu, Darth Vader, İmparator Palpatine, Prenses Leia, Han Solo, Chewbacca, R2-D2, C-3PO ve <a href="#">klon
          askerleri</a>
        gibi favori <a href="#">karakterlerinle</a> Güç’ün aydınlık ve karanlık tarafı arasındaki savaşa katıl. Daha
        ileri seviye yapım
        ustaları <i>Star Wars™</i> gemilerini yapabilir ya da kendi <i style="color: #0074cc;">Star Wars</i><a
          href="#">™ kaskı</a> ya da AT-AT™'sini oluşturabilir.
        LEGO <i>Star Wars™</i> parçalarla yapılan inşaat oyuncakları ve <a href="#">mini figürleri</a>; klasik <i>Star
          Wars™</i> çizgi romanları, <a href="#">The Skywalker Saga filmleri</a>
        gibi aksiyon dolu filmler ve The
        <a href="#">Mandalorian™</a>, Droids, Star Wars: Klon Savaşları, Boba Fett’in Kitabı gibi <a href="#">TV
          yapımlarından</a> esinlenmiştir. Tutkulu
        bir LEGO® <i>Star Wars™</i> hayranıysan <a href="#">zor bulunan</a>, gerçekten etkileyici setlerle dolu <a
          href="#">Ultimate Collector Series</a>’e göz
        atabilirsin. <a href="#">Indiana Jones™</a> setleri de dahil olmak üzere diğer film temalı setlerimizi keşfet.
        Heyecan verici koleksiyonumuzda
        <a href="#">6 yaş ve üzeri kız</a> ve <a href="#">oğlan</a> çocuklar ve <i>Star Wars™</i> hayranı <a
          href="#">yetişkinler</a> için harika <a href="#">hediyeler</a> bulabilirsin.
        Ayrıca, özel teklifler ve yeni LEGO® <i>Star Wars™</i> setleriyle Dört Mayıs <i style="color: #0074cc;">Star
          Wars</i><a href="#">™ Günü</a>'nü kutlamayı da
        unutma!
      </p>

      <!-- Toggle Linki -->
      <div class="toggle-link">
        <a v-if="!showMore" href="#" @click.prevent="toggleText" class="show-more">Tamamını Göster</a>
        <a v-else href="#" @click.prevent="toggleText" class="show-more">Daha Az Göster</a>
      </div>
    </div>
    <div class="bosluk"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showMore = ref(false);

function toggleText() {
  showMore.value = !showMore.value;
}
</script>

<style scoped>
.star-wars-page {
  font-family: Arial, sans-serif;
  margin: 0 20px;
  margin-top: -10px;
}

.hero-section {
  background: url('~/public/starWars/legoBackground-image.jpeg') no-repeat center center;
  background-size: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 140px;
  margin-right: 142px;
}

.hero-content {
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-content .logo {
  margin-right: 20px;
  width: auto;
}

.hero-content .buttons {
  display: flex;
  align-items: center;
}

.hero-content .btn {
  padding: 8px 12px;
  margin: 0 16px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
}

.hero-content .btn-primary {
  background-color: #E0E0E0;
  color: black;
  font-size: 16px;
  border: none;
}

.hero-content .btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid #e0e0e0;
}

.hero-content .btn:hover {
  background-color: #e9e9e9;
  color: black;
  text-decoration: underline;
}

/* Alt İçerik Kısmı */
.content-section {
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 22px;
  margin-left: 150px;
  margin-right: 150px;
}

.content-section h1 {
  font-size: 16.5px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 10px;
}

.content-section p {
  font-size: 13.97px;
  line-height: 1.5;
  color: #555;
}

.content-section a {
  color: #0074cc;
  text-decoration: none;
  cursor: pointer;
}

.content-section a:hover {
  color: #0074cc;
  text-decoration: underline;
  cursor: pointer;
}

.show-more {
  display: block;
}
.bosluk {
  margin-top: 40px;
}
.toggle-link {
  font-size: 12.7px;
  margin-top: -13px;
  /* Yazının bittiği yerin 1 satır altında */
}
</style>