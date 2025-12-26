'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star,
  Users,
  Heart,
  Instagram,
  Facebook
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary shadow-warm flex items-center justify-center">
                <img
                  src="/cafe-logo.png"
                  alt="PT BUMI BALAKKA MAJU SEJAHTERAH Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">BUMI BALAKKA</h1>
                <p className="text-xs text-muted-foreground">Rumah Minum & Kafe</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('beranda')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('tentang')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Kontak
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('beranda')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Beranda
                </button>
                <button 
                  onClick={() => scrollToSection('tentang')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('kontak')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Kontak
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 animate-float">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-secondary shadow-warm-lg flex items-center justify-center p-2">
                <img
                  src="/cafe-logo.png"
                  alt="PT BUMI BALAKKA MAJU SEJAHTERAH Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
              PT BUMI BALAKKA MAJU SEJAHTERAH
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Rumah Minum & Kafe
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nikmati momen berharga Anda dengan minuman berkualitas dan suasana yang nyaman di tempat kami
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('menu')}
              >
                Lihat Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('kontak')}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Tentang Kami</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami adalah rumah minum dan kafe yang berkomitmen untuk menyajikan pengalaman terbaik untuk setiap pelanggan
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-warm">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Dibuat dengan Cinta</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Setiap minuman dan makanan kami dibuat dengan bahan-bahan pilihan dan penuh kasih sayang
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-warm">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Suasana Nyaman</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tempat yang sempurna untuk berkumpul dengan teman, keluarga, atau sekadar bersantai
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-warm">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Kualitas Terbaik</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Kami hanya menggunakan bahan-bahan berkualitas tinggi untuk memastikan kepuasan Anda
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Menu Unggulan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nikmati berbagai pilihan minuman dan makanan lezat yang kami sajikan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Coffee Menu */}
              <Card className="shadow-warm hover:shadow-warm-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-primary" />
                      Kopi Premium
                    </CardTitle>
                    <Badge variant="secondary">Best Seller</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Espresso</span>
                      <span className="text-muted-foreground">Rp 15.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cappuccino</span>
                      <span className="text-muted-foreground">Rp 25.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cafe Latte</span>
                      <span className="text-muted-foreground">Rp 28.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Americano</span>
                      <span className="text-muted-foreground">Rp 20.000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Non-Coffee Menu */}
              <Card className="shadow-warm hover:shadow-warm-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Minuman Non-Kopi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Teh Manis</span>
                      <span className="text-muted-foreground">Rp 10.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lemon Tea</span>
                      <span className="text-muted-foreground">Rp 18.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Chocolate</span>
                      <span className="text-muted-foreground">Rp 22.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Orange Juice</span>
                      <span className="text-muted-foreground">Rp 20.000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Food Menu */}
              <Card className="shadow-warm hover:shadow-warm-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Makanan Ringan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>French Fries</span>
                      <span className="text-muted-foreground">Rp 18.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sandwich</span>
                      <span className="text-muted-foreground">Rp 25.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pisang Goreng</span>
                      <span className="text-muted-foreground">Rp 15.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Donat</span>
                      <span className="text-muted-foreground">Rp 12.000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Hubungi Kami</h2>
              <p className="text-lg text-muted-foreground">
                Kami siap melayani Anda dengan senang hati
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Alamat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jalan Sawah Halus Lingkungan III Nomor 10<br />
                    Kota Medan, Provinsi Sumatera Utara
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Jam Buka
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Senin - Jumat: 08:00 - 22:00</p>
                    <p>Sabtu - Minggu: 09:00 - 23:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Telepon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">085285703497</p>
                </CardContent>
              </Card>

              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">bumibalakka@outlook.co.id</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">PT BUMI BALAKKA MAJU SEJAHTERAH</h3>
                <p className="text-primary-foreground/80">
                  Rumah Minum & Kafe terpercaya di Medan yang menyajikan minuman berkualitas dengan suasana yang nyaman.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Menu Cepat</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => scrollToSection('beranda')}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Beranda
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('tentang')}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Tentang Kami
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('menu')}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Menu
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('kontak')}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Kontak
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="/privacy" 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/terms" 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Syarat & Ketentuan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <Separator className="bg-primary-foreground/20 mb-8" />
            
            <div className="text-center">
              <p className="text-primary-foreground/60">
                © 2024 PT BUMI BALAKKA MAJU SEJAHTERAH. Hak Cipta Dilindungi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}