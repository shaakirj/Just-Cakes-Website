"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [showAllCakes, setShowAllCakes] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Cakes")

  const allCakes = [
    {
      id: 1,
      name: "Red Velvet Supreme",
      image:
        "https://res.cloudinary.com/drd7tdmfn/image/upload/v1752081015/WhatsApp_Image_2024-09-11_at_20.14.11_trhqbp.jpg",
      price: "R 399",
      rating: "★★★★☆",
      reviews: "(48 reviews)",
      description: "Four layers of moist red velvet cake with cream cheese frosting and edible flowers.",
      featured: true,
      category: "Birthday",
    },
    {
      id: 2,
      name: "Chocolate Fudge Delight",
      image:
        "https://res.cloudinary.com/drd7tdmfn/image/upload/v1752081015/WhatsApp_Image_2024-09-11_at_20.14.12_eekjm4.jpg",
      price: "R 349",
      rating: "★★★★★",
      reviews: "(52 reviews)",
      description: "Rich chocolate cake with layers of fudge and chocolate ganache, topped with berries.",
      featured: false,
      category: "Birthday",
    },
    {
      id: 3,
      name: "Birthday Dream",
      image:
        "https://res.cloudinary.com/drd7tdmfn/image/upload/v1752081018/WhatsApp_Image_2024-09-11_at_20.14.13_ohz8tu.jpg",
      price: "R 369",
      rating: "★★★★☆",
      reviews: "(36 reviews)",
      description: "Light vanilla sponge with fresh berry compote and vanilla bean buttercream.",
      featured: false,
      category: "Birthday",
    },
    {
      id: 4,
      name: "Classic Wedding Elegance",
      image: "/placeholder.svg?height=256&width=400",
      price: "R 899",
      rating: "★★★★★",
      reviews: "(28 reviews)",
      description: "Three-tier wedding cake with vanilla sponge and buttercream roses.",
      featured: false,
      category: "Wedding",
    },
    {
      id: 5,
      name: "Strawberry Cupcake Set",
      image: "/placeholder.svg?height=256&width=400",
      price: "R 180",
      rating: "★★★★☆",
      reviews: "(64 reviews)",
      description: "Set of 12 strawberry cupcakes with cream cheese frosting.",
      featured: false,
      category: "Cupcakes",
    },
    {
      id: 6,
      name: "Christmas Special Cake",
      image: "/placeholder.svg?height=256&width=400",
      price: "R 450",
      rating: "★★★★★",
      reviews: "(19 reviews)",
      description: "Festive spiced cake with cinnamon buttercream and holiday decorations.",
      featured: false,
      category: "Seasonal",
    },
  ]

  const filteredCakes =
    selectedCategory === "All Cakes" ? allCakes : allCakes.filter((cake) => cake.category === selectedCategory)

  const displayedCakes = showAllCakes ? filteredCakes : filteredCakes.slice(0, 3)

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute("href")!)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Order button functionality
    const handleOrderClick = (e: Event) => {
      e.preventDefault()
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }

    // Form submission
    const handleFormSubmit = (e: Event) => {
      e.preventDefault()
      alert("Thank you for your message! We will contact you shortly via WhatsApp.")
      const form = e.target as HTMLFormElement
      form.reset()
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick)
    })

    document.querySelectorAll(".order-btn").forEach((button) => {
      button.addEventListener("click", handleOrderClick)
    })

    const form = document.querySelector("form")
    if (form) {
      form.addEventListener("submit", handleFormSubmit)
    }

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick)
      })
      document.querySelectorAll(".order-btn").forEach((button) => {
        button.removeEventListener("click", handleOrderClick)
      })
      if (form) {
        form.removeEventListener("submit", handleFormSubmit)
      }
    }
  }, [])

  return (
    <div className="bg-vanilla font-body">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blossom flex items-center justify-center">
              <i className="fas fa-birthday-cake text-chocolate text-2xl"></i>
            </div>
            <h1 className="ml-3 text-2xl font-display font-bold text-chocolate">Just Cakes</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-chocolate hover:text-berry font-medium">
              Home
            </Link>
            <Link href="#catalogue" className="text-chocolate hover:text-berry font-medium">
              Cakes
            </Link>
            <Link href="#about" className="text-chocolate hover:text-berry font-medium">
              About
            </Link>
            <Link href="#testimonials" className="text-chocolate hover:text-berry font-medium">
              Testimonials
            </Link>
            <Link href="#contact" className="text-chocolate hover:text-berry font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              href="https://wa.me/27123456789?text=Hi%20Sweet%20Delights%21%20I%20want%20to%20order%20a%20cake"
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center whatsapp-btn"
            >
              <i className="fab fa-whatsapp mr-2"></i> Order Now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner with Video Background */}
      <section className="hero-banner h-screen flex items-center relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/cake-decorating.mp4" type="video/mp4" />
            <source src="/videos/cake-decorating.webm" type="video/webm" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gradient-to-br from-blossom/80 to-berry/60"></div>
          </video>
          {/* Video overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6">Just Cakes</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-10">
            A touch of home, handcrafted with Fresh ingredients and a sprinkles of love.
          </p>
          <Link
            href="#catalogue"
            className="inline-block bg-berry text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300 order-btn"
          >
            Explore Our Cakes <i className="fas fa-arrow-down ml-2"></i>
          </Link>
        </div>

        {/* Floating cake animations */}
        <div className="absolute bottom-10 left-10 w-20 h-20 floating-cake">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=198&q=80"
            alt="Floating cake"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 floating-cake">
          <Image
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=158&q=80"
            alt="Floating cake"
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
        <div className="absolute bottom-40 right-40 w-24 h-24 floating-cake">
          <Image
            src="https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=166&q=80"
            alt="Floating cake"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
        <div className="absolute top-1/2 left-1/4 w-18 h-18 floating-cake">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=180&q=80"
            alt="Floating cake"
            width={72}
            height={72}
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="py-16 px-4 bg-vanilla">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-chocolate mb-4">Our Cake Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted selection of cakes, each made with premium ingredients and artistic flair.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["All Cakes", "Birthday", "Wedding", "Cupcakes", "Seasonal"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border border-blossom transition ${
                  selectedCategory === category
                    ? "bg-blossom text-chocolate"
                    : "bg-white text-chocolate hover:bg-blossom"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCakes.map((cake) => (
              <div key={cake.id} className="cake-card bg-white rounded-xl overflow-hidden shadow-lg relative">
                {cake.featured && (
                  <div className="featured-badge bg-berry text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                )}
                <div className="overflow-hidden h-64">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-chocolate">{cake.name}</h3>
                  <div className="flex items-center my-2">
                    <div className="flex text-yellow-400">
                      {cake.rating.split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{cake.reviews}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{cake.description}</p>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-berry font-bold text-xl">{cake.price}</span>
                    <button className="order-btn bg-blossom text-chocolate px-4 py-2 rounded-lg hover:bg-opacity-80 transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllCakes(!showAllCakes)}
              className="inline-block border-2 border-berry text-berry px-8 py-3 rounded-full font-bold hover:bg-berry hover:text-white transition duration-300"
            >
              {showAllCakes ? "Show Less" : "View All Cakes"}
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blossom bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-chocolate mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to get your perfect cake</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-berry text-white flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-display text-chocolate mb-4">Browse & Select</h3>
              <p className="text-gray-600">Explore our delicious cake collection and choose your favorite</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-berry text-white flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-display text-chocolate mb-4">Place Your Order</h3>
              <p className="text-gray-600">Order via WhatsApp with your details and special requests</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-berry text-white flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-display text-chocolate mb-4">Enjoy Your Cake</h3>
              <p className="text-gray-600">Pick up your freshly made cake or get it delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-vanilla">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-chocolate mb-4">Customer Love</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our happy customers say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">Sarah J.</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The Red Velvet cake was absolutely divine! Ordered through WhatsApp and it was so easy. The cake
                arrived fresh and beautiful."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">James T.</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Ordered a custom cake for my wife's birthday. The team was so responsive on WhatsApp and the cake
                exceeded all expectations!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">Nomsa K.</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The Chocolate Fudge cake was a hit at our office party! Everyone loved it. Will definitely order
                again."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blossom bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                  alt="Beautiful Cake Creation"
                  width={580}
                  height={400}
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-berry rounded-xl shadow-xl border-4 border-white"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display text-chocolate mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Just Cakes started as a small home bakery with a passion for creating beautiful, delicious cakes that
                make celebrations special. What began as baking for friends and family has grown into a beloved local
                home-based cakery.
              </p>
              <p className="text-gray-600 mb-6">
                We use only the finest ingredients - locally sourced always - and every cake is made with attention to
                detail and a sprinkle of love.
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-berry flex items-center justify-center">
                  <i className="fas fa-award text-white text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">Leka cake Awards</h4>
                  <p className="text-gray-600">Peoples choice for 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-vanilla">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-chocolate mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Contact us for custom orders or any questions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-display text-chocolate mb-6">Contact Information</h3>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blossom flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-chocolate"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">Where to find us.</h4>
                  <p className="text-gray-600">Malabar,Port Elizabeth</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blossom flex items-center justify-center">
                  <i className="fas fa-phone-alt text-chocolate"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">Call Us</h4>
                  <p className="text-gray-600">+27 21 123 4567</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blossom flex items-center justify-center">
                  <i className="fab fa-whatsapp text-chocolate"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">WhatsApp</h4>
                  <p className="text-gray-600">+27 83 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blossom flex items-center justify-center">
                  <i className="far fa-clock text-chocolate"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-chocolate">Trading Times</h4>
                  <p className="text-gray-600">On demand</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-display text-chocolate mb-6">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blossom"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blossom"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blossom"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blossom"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-berry text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/27123456789?text=Hi%20Sweet%20Delights%21%20I%20want%20to%20order%20a%20cake"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50 animate-bounce whatsapp-btn"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </Link>

      {/* Footer */}
      <footer className="bg-chocolate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blossom flex items-center justify-center">
                  <i className="fas fa-birthday-cake text-chocolate text-xl"></i>
                </div>
                <h3 className="ml-3 text-xl font-display">Just Cakes</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Creating beautiful, delicious cakes for every celebration.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-pinterest"></i>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-display mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#catalogue" className="text-gray-300 hover:text-white">
                    Our Cakes
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-300 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display mb-4">Cake Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Birthday Cakes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Wedding Cakes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Cupcakes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Seasonal Specials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Custom Cakes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Subscribe for exclusive offers and cake inspiration</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
                />
                <button type="submit" className="bg-berry px-4 py-2 rounded-r-lg">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Just Cakes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
