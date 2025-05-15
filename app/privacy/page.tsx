// privacy/page.tsx

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        CalmBreath Gizlilik Politikası
      </h1>

      <p className="mb-4">
        Bu Gizlilik Politikası, CalmBreath adlı mobil uygulamanın (“Uygulama”)
        geliştiricisi olan
        <strong> Kubrakara </strong> tarafından sunulan hizmetlerde kullanıcı
        verilerinin toplanması, kullanılması ve paylaşılmasıyla ilgili
        uygulamaları açıklamaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Toplanan Bilgiler</h2>
      <p className="mb-4">
        CalmBreath uygulaması, kullanıcı kimliğini belirlemeye yönelik herhangi
        bir kişisel veri toplamaz. Toplanan anonim veriler, yalnızca uygulama
        performansını iyileştirme amacıyla analiz edilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Veri Kullanımı</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Hizmet kalitesini artırmak</li>
        <li>Performans analizleri gerçekleştirmek</li>
        <li>Uygulama içi deneyimi optimize etmek</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Verilerin Paylaşımı
      </h2>
      <p className="mb-4">
        Kullanıcı verileri, yasal yükümlülükler haricinde üçüncü taraflarla
        paylaşılmaz, satılmaz veya kiralanmaz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Güvenlik</h2>
      <p className="mb-4">
        Toplanan veriler güvenli bir şekilde saklanmakta olup, bu verilerin
        yetkisiz erişime karşı korunması için uygun teknik ve organizasyonel
        önlemler alınmaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Uluslararası Transfer
      </h2>
      <p className="mb-4">
        Uygulama, verileri sadece yasal düzenlemelere uygun şekilde işleyecek
        altyapılarda barındırır ve işler. Veri transferi, geçerli veri koruma
        yasalarına uygun şekilde gerçekleştirilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Değişiklikler</h2>
      <p className="mb-4">
        Bu politika zaman zaman güncellenebilir. En güncel sürüm bu sayfada
        yayınlanacaktır. Kullanıcıların bu sayfayı düzenli olarak kontrol etmesi
        tavsiye edilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. İletişim</h2>
      <p>
        Gizlilik politikamızla ilgili herhangi bir sorunuz varsa lütfen{" "}
        <a
          href="mailto:destek@kubrakara.dev"
          className="text-blue-600 underline"
        >
          destek@kubrakara.dev
        </a>{" "}
        adresinden bizimle iletişime geçiniz.
      </p>
    </main>
  );
};

export default PrivacyPolicyPage;
