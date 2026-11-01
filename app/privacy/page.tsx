import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "CalmBreath uygulaması ve portfolyo sitesi gizlilik politikası.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-foreground">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">
        CalmBreath Gizlilik Politikası
      </h1>

      <p className="mb-4 text-muted leading-relaxed">
        Bu Gizlilik Politikası, CalmBreath adlı mobil uygulamanın (&ldquo;Uygulama&rdquo;)
        geliştiricisi olan
        <strong className="text-foreground"> Kubrakara </strong> tarafından sunulan hizmetlerde kullanıcı
        verilerinin toplanması, kullanılması ve paylaşılmasıyla ilgili
        uygulamaları açıklamaktadır.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">1. Toplanan Bilgiler</h2>
      <p className="mb-4 text-muted leading-relaxed">
        CalmBreath uygulaması, kullanıcı kimliğini belirlemeye yönelik herhangi
        bir kişisel veri toplamaz. Toplanan anonim veriler, yalnızca uygulama
        performansını iyileştirme amacıyla analiz edilir.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">2. Veri Kullanımı</h2>
      <ul className="list-disc list-inside mb-4 text-muted space-y-1">
        <li>Hizmet kalitesini artırmak</li>
        <li>Performans analizleri gerçekleştirmek</li>
        <li>Uygulama içi deneyimi optimize etmek</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">
        3. Verilerin Paylaşımı
      </h2>
      <p className="mb-4 text-muted leading-relaxed">
        Kullanıcı verileri, yasal yükümlülükler haricinde üçüncü taraflarla
        paylaşılmaz, satılmaz veya kiralanmaz.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">4. Güvenlik</h2>
      <p className="mb-4 text-muted leading-relaxed">
        Toplanan veriler güvenli bir şekilde saklanmakta olup, bu verilerin
        yetkisiz erişime karşı korunması için uygun teknik ve organizasyonel
        önlemler alınmaktadır.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">
        5. Uluslararası Transfer
      </h2>
      <p className="mb-4 text-muted leading-relaxed">
        Uygulama, verileri sadece yasal düzenlemelere uygun şekilde işleyecek
        altyapılarda barındırır ve işler. Veri transferi, geçerli veri koruma
        yasalarına uygun şekilde gerçekleştirilir.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">6. Değişiklikler</h2>
      <p className="mb-4 text-muted leading-relaxed">
        Bu politika zaman zaman güncellenebilir. En güncel sürüm bu sayfada
        yayınlanacaktır.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">7. İletişim</h2>
      <p className="text-muted leading-relaxed">
        Gizlilik politikamızla ilgili herhangi bir sorunuz varsa lütfen{" "}
        <a
          href="mailto:kubra26kara@gmail.com"
          className="text-accent underline hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          kubra26kara@gmail.com
        </a>{" "}
        adresinden bizimle iletişime geçiniz.
      </p>
    </main>
  );
}
