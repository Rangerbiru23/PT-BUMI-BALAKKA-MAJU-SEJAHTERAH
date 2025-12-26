import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gradient">Kebijakan Privasi</h1>
          <p className="text-lg text-muted-foreground">
            PT BUMI BALAKKA MAJU SEJAHTERAH - Rumah Minum & Kafe
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Selamat datang di PT BUMI BALAKKA MAJU SEJAHTERAH. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi Anda ketika Anda menggunakan layanan kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam 
                Kebijakan Privasi ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Informasi Pribadi</h3>
                <p>Kami dapat mengumpulkan informasi pribadi seperti:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon</li>
                  <li>Alamat email</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Informasi Non-Pribadi</h3>
                <p>Kami juga dapat mengumpulkan:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Informasi browser dan perangkat</li>
                  <li>Alamat IP</li>
                  <li>Cookies dan data penelusuran</li>
                  <li>Informasi penggunaan layanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Bagaimana Kami Menggunakan Informasi Anda
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Menyediakan dan memelihara layanan kami</li>
                <li>Memproses transaksi dan pembayaran</li>
                <li>Mengkomunikasikan dengan Anda mengenai pesanan dan layanan</li>
                <li>Mempersonalisasi pengalaman Anda</li>
                <li>Meningkatkan layanan dan pengalaman pelanggan</li>
                <li>Memantau penggunaan dan menganalisis tren</li>
                <li>Mencegah aktivitas penipuan dan penyalahgunaan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Keamanan Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami mengambil langkah-langkah keamanan yang wajar dan sesuai untuk melindungi 
                informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. 
                Langkah-langkah ini termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Pembaruan keamanan reguler</li>
                <li>Pelatihan staf tentang keamanan data</li>
              </ul>
              <p>
                Namun, harap diingat bahwa tidak ada metode transmisi internet atau penyimpanan 
                elektronik yang 100% aman.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Pembagian Informasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                Kami hanya dapat membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Dengan persetujuan Anda yang jelas</li>
                <li>Untuk memproses transaksi (misalnya, gateway pembayaran)</li>
                <li>Untuk mematuhi kewajiban hukum</li>
                <li>Untuk melindungi hak, privasi, keamanan, atau properti kami</li>
                <li>Dengan afiliasi perusahaan kami dengan tujuan yang konsisten dengan kebijakan ini</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Hak Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Menolak pemrosesan informasi pribadi Anda</li>
                <li>Meminta pembatasan pemrosesan</li>
                <li>Memindahkan data Anda ke layanan lain</li>
              </ul>
              <p>
                Untuk menggunakan hak ini, silakan hubungi kami menggunakan informasi kontak yang disediakan.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Kebijakan Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. Cookies adalah 
                file teks kecil yang disimpan di browser Anda. Kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis penggunaan situs web</li>
                <li>Menyediakan konten yang dipersonalisasi</li>
                <li>Memelihara keamanan situs</li>
              </ul>
              <p>
                Anda dapat mengontrol cookies melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Children Privacy */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Privasi Anak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Layanan kami tidak ditujukan untuk anak-anak di bawah usia 13 tahun. 
                Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di bawah 13 tahun. 
                Jika kami mengetahui bahwa kami telah mengumpulkan informasi pribadi dari anak 
                di bawah usia 13 tahun, kami akan mengambil langkah-langkah untuk menghapus informasi tersebut.
              </p>
            </CardContent>
          </Card>

          {/* Changes */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Perubahan Kebijakan Privasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diposting di halaman ini dengan tanggal revisi yang diperbarui. Kami akan memberi tahu 
                Anda tentang perubahan material melalui email atau pemberitahuan di situs web kami.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> bumibalakka@outlook.co.id</p>
                <p><strong>Telepon:</strong> 085285703497</p>
                <p><strong>Alamat:</strong> Jalan Sawah Halus Lingkungan III Nomor 10, Kota Medan, Provinsi Sumatera Utara</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}