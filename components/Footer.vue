<template>
  <footer class="footer">
    <div class="footer-top container">
      <!-- Sol tarafı -->
      <div class="footer-logo">
        <img src="/public/brand-lego.svg" alt="LEGO Logo" class="logo-img" />
        <div class="footer-location">
          <i class="bi bi-geo-alt"></i> Türkiye
        </div>
        <ul class="footer-links">
          <li><a href="#">İlham Al</a></li>
          <li><a href="#">LEGO Katalogları</a></li>
        </ul>
      </div>

      <!-- Orta tarafı -->
      <div class="footer-columns">
        <div class="footer-column">
          <h5>HAKKIMIZDA</h5>
          <ul>
            <li><a href="#">LEGO Group Hakkında</a></li>
            <li><a href="#">LEGO® Haberleri</a></li>
            <li><a href="#">Sürdürülebilirlik</a></li>
            <li><a href="#">Tedarik Zincirinde Şeffaflık Beyanı</a></li>
            <li><a href="#">LEGO Ürün Sertifikası</a></li>
            <li><a href="#">LEGO Kariyer</a></li>
            <li><a href="#">LEGO compliance line</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h5>DESTEK</h5>
          <ul>
            <li><a href="#">Bize Ulaş</a></li>
            <li><a href="#">Yapım Kılavuzu Bul</a></li>
            <li><a href="#">Yedek Parçalar</a></li>
            <li><a href="#">Ürün Geri Çağırmaları</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h5>EĞLENCE MERKEZLERİ</h5>
          <ul>
            <li><a href="#">LEGO® House</a></li>
            <li><a href="#">LEGOLAND® Parks</a></li>
            <li><a href="#">LEGOLAND Discovery Centers</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h5>DAHA FAZLA BİLGİ</h5>
          <ul>
            <li><a href="#">LEGO® LIFE</a></li>
            <li><a href="#">LEGO Education</a></li>
            <li><a href="#">LEGO Ideas</a></li>
            <li><a href="#">LEGO Foundation</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Alt tarafı -->
    <div class="footer-bottom container">
      <div class="footer-bottom-links">
        <a href="#">Gizlilik Politikası</a>
        <a href="#">Çerezler</a>
        <a href="#">Yasal Uyarı</a>
        <a href="#">Kullanım Koşulları</a>
        <a href="#">Erişilebilirlik</a>
        <a href="#">Bilgi Toplumu Hizmetleri</a>
        <a href="#">Çerez Ayarları</a>
      </div>
      <div class="footer-social">
        <h5>BİZİ TAKİP ET</h5>
        <div class="social-icons">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #20224f; /* Arka plan */
  color: #ffffff; /* Yazı */
  padding: 40px 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-logo {
  flex: 1;
  max-width: 200px;
}

.footer-logo .logo-img {
  width: 100px;
}

.footer-location {
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.footer-location i {
  margin-right: 5px;
}

.footer-links {
  margin-top: 10px;
}

.footer-links li {
  list-style: none;
}

.footer-links a {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  flex: 3;
}

.footer-column h5 {
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-column ul {
  padding: 0;
  list-style: none;
}

.footer-column ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.8;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-bottom-links {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 12px;
}

.footer-bottom-links a {
  color: #ffffff;
  text-decoration: none;
}

.footer-social {
  text-align: right;
}

.social-icons a {
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  margin-right: 10px;
}

.social-icons a:hover {
  color: #d40000;
}
</style>
