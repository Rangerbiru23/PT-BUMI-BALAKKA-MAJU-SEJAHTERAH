import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Coffee, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
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
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gradient">Syarat & Ketentuan</h1>
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
                <Coffee className="w-5 h-5 text-primary" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Selamat datang di PT BUMI BALAKKA MAJU SEJAHTERAH. Syarat & Ketentuan ini 
                mengatur penggunaan layanan kami sebagai Rumah Minum & Kafe. Dengan mengakses 
                atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Layanan Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PT BUMI BALAKKA MAJU SEJAHTERAH menyediakan layanan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Penyediaan minuman berkualitas (kopi, teh, jus, dll.)</li>
                <li>Penyediaan makanan ringan dan makanan berat</li>
                <li>Layanan dine-in dan take-away</li>
                <li>Layanan pesan antar (delivery)</li>
                <li>Penyewaan tempat untuk acara khusus</li>
                <li>Wi-Fi gratis untuk pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Sebagai pengguna layanan kami, Anda setuju untuk:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memperlakukan staf dan pelanggan lain dengan hormat</li>
                <li>Memelihara kebersihan dan ketertiban di tempat kami</li>
                <li>Tidak membawa barang terlarang atau berbahaya</li>
                <li>Mematuhi peraturan yang berlaku di tempat kami</li>
                <li>Tidak melakukan aktivitas ilegal di lokasi kami</li>
                <li>Membayar semua pesanan yang telah dibuat</li>
              </ul>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Pemesanan dan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Pemesanan</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Pesanan dapat dibuat secara langsung, telepon, atau online</li>
                  <li>Kami berhak menolak pesanan jika stok tidak tersedia</li>
                  <li>Perubahan pesanan dapat dilakukan sebelum diproses</li>
                  <li>Pesanan delivery minimum Rp 50.000 (berlaku syarat dan ketentuan)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Pembayaran</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Kami menerima tunai, transfer bank, dan pembayaran digital</li>
                  <li>Harga yang tercantum belum termasuk pajak</li>
                  <li>Kami berhak mengubah harga tanpa pemberitahuan sebelumnya</li>
                  <li>Uang kembali tidak berlaku setelah pesanan dibuat</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation and Refund */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Pembatalan dan Pengembalian</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Pembatalan Pesanan</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Pembatalan dapat dilakukan maksimal 30 menit sebelum pengambilan</li>
                  <li>Pembatalan pesanan delivery maksimal 1 jam sebelum pengiriman</li>
                  <li>Biaya pembatalan mungkin berlaku untuk pesanan besar</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Kebijakan Pengembalian</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Pengembalian hanya berlaku untuk produk yang salah atau rusak</li>
                  <li>Keluhan harus disampaikan maksimal 15 menit setelah pengantaran</li>
                  <li>Produk yang dikembalikan harus dalam kondisi utuh</li>
                  <li>Keputusan pengembalian sepenuhnya berada di pihak manajemen</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Semua konten, merek, logo, dan materi milik PT BUMI BALAKKA MAJU SEJAHTERAH 
                dilindungi oleh hukum hak cipta dan merek dagang. Anda tidak diperbolehkan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Menggunakan merek atau logo kami tanpa izin tertulis</li>
                <li>Menyalin, mendistribusikan, atau memodifikasi konten kami</li>
                <li>Mengambil keuntungan komersial dari properti intelektual kami</li>
                <li>Membuat karya turunan dari materi kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Privasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Privasi Anda penting bagi kami. Penggunaan informasi pribadi Anda diatur 
                oleh Kebijakan Privasi kami. Dengan menggunakan layanan kami, Anda setuju 
                dengan pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam kebijakan tersebut.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Pembatasan Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Sejauh diizinkan oleh hukum, PT BUMI BALAKKA MAJU SEJAHTERAH tidak bertanggung 
                jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Kehilangan data atau keuntungan</li>
                <li>Kerusakan properti pribadi</li>
                <li>Cedera pribadi akibat kelalaian pengguna</li>
                <li>Gangguan layanan di luar kendali kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Ketersediaan Layanan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami berusaha keras untuk menyediakan layanan yang kontinu, namun:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Layanan mungkin tidak tersedia saat pemeliharaan terjadwal</li>
                <li>Kami tidak menjamin ketersediaan 100% untuk semua produk</li>
                <li>Jam operasional dapat berubah tanpa pemberitahuan sebelumnya</li>
                <li>Layanan delivery tergantung pada ketersediaan kurir</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Conduct */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-primary" />
                Perilaku Dilarang
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Anda dilarang untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Menggunakan layanan untuk tujuan ilegal</li>
                <li>Mengganggu ketertiban umum di tempat kami</li>
                <li>Merasa tidak nyaman bagi pelanggan atau staf lain</li>
                <li>Membawa senjata atau benda berbahaya</li>
                <li>Mengkonsumsi narkotika atau zat terlarang</li>
                <li>Merekam atau memotret tanpa izin</li>
                <li>Merusak properti milik kami atau pelanggan lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Penghentian Layanan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami berhak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Menolak layanan kepada siapa saja dengan alasan yang sah</li>
                <li>Meminta pelanggan untuk pergi jika melanggar aturan</li>
                <li>Menghentikan layanan sementara atau permanen</li>
                <li>Membatasi akses ke fasilitas tertentu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Perubahan Syarat & Ketentuan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Kami berhak mengubah Syarat & Ketentuan ini kapan saja. Perubahan akan 
                berlaku efektif segera setelah diposting. Penggunaan lanjutan layanan kami 
                setelah perubahan menunjukkan penerimaan Anda terhadap syarat yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle>Hukum yang Berlaku</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Syarat & Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap sengketa akan diselesaikan melalui perundingan 
                baik-baik, dan jika tidak mencapai kesepakatan, akan diselesaikan melalui 
                pengadilan yang berwenang di Kota Medan.
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
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
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