'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  desc: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Stainless Steel T Profile (PVD Gold)",
      category: "SS Profiles",
      price: "₹180 / Piece",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      desc: "304 Grade Stainless Steel, Mirror Gold finish, 8ft standard length."
    },
    {
      id: 2,
      title: "SS U Profile (Rose Gold Gloss)",
      category: "SS Profiles",
      price: "₹220 / Piece",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      desc: "Decorative Rose Gold edging profile for tile & wall panels."
    },
    {
      id: 3,
      title: "High Gloss Porcelain Onyx Tile",
      category: "Tiles",
      price: "₹65 / Sq.Ft",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80",
      desc: "Luxury marble-finish tiles suitable for living rooms and hotel lobbies."
    },
    {
      id: 4,
      title: "Smart Touch LED Bathroom Mirror",
      category: "LED Mirrors",
      price: "₹3,500 / Piece",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      desc: "Dual LED light tones (Warm/White) with anti-fog touch switch."
    },
    {
      id: 5,
      title: "Fluted Glass Aluminium Profile Frame",
      category: "Glass Profiles",
      price: "₹290 / Feet",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
      desc: "Black anodized aluminium profile for glass wardrobe and partition doors."
    },
    {
      id: 6,
      title: "CNC Carved Marble Stone Panel",
      category: "CNC Stone",
      price: "₹450 / Sq.Ft",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80",
      desc: "Custom temple backdrop and elevation wall CNC carving stone."
    }
  ]);

  const [currentFilter, setCurrentFilter] = useState('All');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [editId, setEditId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('SS Profiles');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [previewImg, setPreviewImg] = useState('https://via.placeholder.com/100?text=No+Image');

  // Calculator State
  const [calcCat, setCalcCat] = useState('SS T Profile (PVD Gold)');
  const [calcQty, setCalcQty] = useState('50');
  const [calcFinish, setCalcFinish] = useState('Mirror Gold Finish');

  const filteredProducts = currentFilter === 'All'
    ? products
    : products.filter(p => p.category === currentFilter);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageUrl(result);
        setPreviewImg(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImage = imageUrl || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80';

    if (editId) {
      setProducts(products.map(p => p.id === editId ? { id: editId, title, category, price, desc, image: finalImage } : p));
    } else {
      const newProd: Product = {
        id: Date.now(),
        title,
        category,
        price,
        desc,
        image: finalImage
      };
      setProducts([newProd, ...products]);
    }

    resetForm();
    alert('Product updated/added successfully!');
  };

  const resetForm = () => {
    setEditId(null);
    setTitle('');
    setCategory('SS Profiles');
    setPrice('');
    setDesc('');
    setImageUrl('');
    setPreviewImg('https://via.placeholder.com/100?text=No+Image');
  };

  const handleEdit = (p: Product) => {
    setEditId(p.id);
    setTitle(p.title);
    setCategory(p.category);
    setPrice(p.price);
    setDesc(p.desc);
    setImageUrl(p.image);
    setPreviewImg(p.image);
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this product from catalog?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const sendQuote = () => {
    const text = `Hello Khushi Trading Co., I want a bulk quote estimate for:\n- Product: ${calcCat}\n- Quantity: ${calcQty} Units/Feet\n- Finish: ${calcFinish}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#FDFBF7] text-slate-800 min-h-screen flex flex-col justify-between font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#1E293B] text-amber-300 text-xs font-semibold py-2 px-4 text-center tracking-wider">
        ✨ AUTHORIZED WHOLESALE SUPPLIERS & INTERIOR SOLUTIONS IN POOTH KALAN, DELHI
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-amber-900/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              KTC
            </div>
            <div>
              <span className="block text-lg font-bold text-amber-900 tracking-wider">KHUSHI TRADING CO.</span>
              <span className="block text-[10px] text-amber-800/70 font-semibold uppercase tracking-widest">Tiles • SS Profiles • Smart Mirrors</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <a href="#home" className="hover:text-amber-700 transition-colors">Home</a>
            <a href="#catalogue" className="hover:text-amber-700 transition-colors">Catalogue</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">About Us</a>
            <a href="#calculator" className="hover:text-amber-700 transition-colors">Bulk Quote</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <button onClick={() => setIsAdminOpen(true)} className="px-3.5 py-2 rounded-lg border border-amber-800/20 text-amber-900 hover:bg-amber-100/50 text-xs font-bold transition-all">
              ⚙️ Admin Panel
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs shadow-sm transition-all">
              Direct WhatsApp
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-amber-900 text-2xl">
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF9] border-b border-amber-900/10 p-4 space-y-3 text-sm font-medium text-slate-700">
            <a href="#home" className="block hover:text-amber-800">Home</a>
            <a href="#catalogue" className="block hover:text-amber-800">Catalogue</a>
            <a href="#about" className="block hover:text-amber-800">About Us</a>
            <a href="#contact" className="block hover:text-amber-800">Contact</a>
            <button onClick={() => { setIsAdminOpen(true); setMobileMenuOpen(false); }} className="w-full py-2 rounded border border-amber-800/30 text-amber-900 text-xs font-bold">
              Open Admin Panel
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            🏆 Premium B2B Wholesale Catalogue
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
            Elevate Interiors with <span className="text-amber-800">SS Profiles, Tiles & LED Mirrors</span>
          </h1>
          <p className="text-slate-600 text-base leading-relaxed max-w-xl">
            Delhi's trusted B2B partner for high-grade Stainless Steel Profiles, Designer Porcelain Tiles, Glass Paneling, and Smart Bathroom LED Mirrors.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#catalogue" className="px-7 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md transition-all">
              Browse Catalogue
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold text-sm shadow-sm transition-all">
              Quick WhatsApp Quote
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 border border-amber-900/10 rounded-2xl p-3 bg-white shadow-xl">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Interior Showroom" className="rounded-xl w-full h-80 sm:h-96 object-cover" />
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">Interactive B2B Catalogue</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Explore Product Range</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'SS Profiles', 'Tiles', 'LED Mirrors', 'Glass Profiles', 'CNC Stone'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCurrentFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentFilter === cat ? 'bg-amber-800 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white border border-amber-900/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-amber-900 text-[10px] font-bold uppercase border border-amber-900/10">{p.category}</span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-slate-900 font-bold text-base leading-snug">{p.title}</h3>
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
              <div className="p-5 pt-0 flex justify-between items-center border-t border-slate-100 mt-4">
                <span className="text-amber-900 font-extrabold text-sm">{p.price}</span>
                <a href={`https://wa.me/919876543210?text=Inquiry%20for%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="px-3.5 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs shadow-sm transition-all">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Calculator */}
      <section id="calculator" className="py-16 bg-white border-y border-amber-900/10 my-8 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center">
            <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">Fast Estimation</span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mt-1">Instant Bulk Inquiry Generator</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Select your project requirements and send directly to WhatsApp.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Product Category</label>
              <select value={calcCat} onChange={(e) => setCalcCat(e.target.value)} className="w-full bg-[#FDFBF7] border border-slate-200 p-3 text-xs rounded-xl text-slate-800 focus:outline-none focus:border-amber-800">
                <option value="SS T Profile (PVD Gold)">SS T Profile (PVD Gold)</option>
                <option value="SS U Profile (Rose Gold)">SS U Profile (Rose Gold)</option>
                <option value="Designer Porcelain Tiles">Designer Porcelain Tiles</option>
                <option value="Smart LED Mirror">Smart LED Mirror</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Quantity / Feet</label>
              <input type="number" value={calcQty} onChange={(e) => setCalcQty(e.target.value)} className="w-full bg-[#FDFBF7] border border-slate-200 p-3 text-xs rounded-xl text-slate-800 focus:outline-none focus:border-amber-800" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Finish Type</label>
              <select value={calcFinish} onChange={(e) => setCalcFinish(e.target.value)} className="w-full bg-[#FDFBF7] border border-slate-200 p-3 text-xs rounded-xl text-slate-800 focus:outline-none focus:border-amber-800">
                <option value="Mirror Gold Finish">Mirror Gold Finish</option>
                <option value="Hairline Matt Finish">Hairline Matt Finish</option>
                <option value="Rose Gold Finish">Rose Gold Finish</option>
              </select>
            </div>
          </div>

          <button onClick={sendQuote} className="w-full py-4 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all">
            Send Bulk Order Inquiry on WhatsApp
          </button>
        </div>
      </section>

      {/* About & Contact */}
      <section id="about" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">About Khushi Trading Co.</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Your Reliable Wholesale Partner in Delhi</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At <strong>Khushi Trading Co. (KTC)</strong>, based in Pooth Kalan, Delhi, we supply premium interior architectural materials directly to architects, designers, builders, and hardware traders.
          </p>
        </div>

        <div id="contact" className="bg-white border border-amber-900/10 rounded-2xl p-8 space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Pooth Kalan Workshop & Office</h3>
          <p className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
            <span>📍</span> <span>Khushi Trading Co. (KTC), Main Road, Pooth Kalan, Rohini Sector 20 Ext., Delhi - 110086</span>
          </p>
          <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
            <span>📞</span> <span>+91 98765 43210 / +91 91234 56789</span>
          </p>
          <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
            <span>✉️</span> <span>info@khushitradingco.com</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-slate-400 py-8 text-center text-xs border-t border-slate-800">
        © 2026 Khushi Trading Co. (KTC) - Pooth Kalan, Delhi. All Rights Reserved.
      </footer>

      {/* Admin Panel Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-5 relative shadow-2xl">
            <button onClick={() => setIsAdminOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold">
              ✕
            </button>

            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">KTC Admin Product Manager</h3>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Product Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. SS T Profile Gold" className="w-full bg-[#FDFBF7] border border-slate-200 p-2.5 rounded-lg text-slate-800" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-[#FDFBF7] border border-slate-200 p-2.5 rounded-lg text-slate-800">
                    <option value="SS Profiles">SS Profiles</option>
                    <option value="Tiles">Tiles & Slabs</option>
                    <option value="LED Mirrors">LED Mirrors</option>
                    <option value="Glass Profiles">Glass & Aluminium</option>
                    <option value="CNC Stone">CNC Stone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Price</label>
                  <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. ₹180 / Piece" className="w-full bg-[#FDFBF7] border border-slate-200 p-2.5 rounded-lg text-slate-800" />
                </div>
              </div>

              <div className="bg-[#FDFBF7] p-4 rounded-xl border border-slate-200 space-y-3">
                <span className="font-bold text-amber-900 block">Change Product Image</span>
                <div>
                  <label className="block text-slate-500 text-[11px] mb-1">Option 1: Paste Image Link (URL)</label>
                  <input type="text" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value); setPreviewImg(e.target.value); }} placeholder="https://..." className="w-full bg-white border border-slate-200 p-2 rounded-lg text-slate-800" />
                </div>
                <div>
                  <label className="block text-slate-500 text-[11px] mb-1">Option 2: Upload File From Computer</label>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="text-slate-600 text-[11px]" />
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-slate-500 text-[11px]">Preview:</span>
                  <img src={previewImg} alt="Preview" className="w-12 h-12 object-cover rounded-lg border border-slate-300" />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Description</label>
                <textarea rows={2} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Product specification..." className="w-full bg-[#FDFBF7] border border-slate-200 p-2.5 rounded-lg text-slate-800" />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-lg shadow-sm">
                  Save Product
                </button>
                <button type="button" onClick={resetForm} className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg">
                  Reset
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-800">Current Catalog Items</h4>
              <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
                {products.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-2.5 bg-[#FDFBF7] rounded-lg border border-slate-200 text-xs">
                    <span className="text-slate-800 font-semibold truncate max-w-[220px]">{p.title}</span>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(p)} className="px-2.5 py-1 bg-white border border-slate-300 text-amber-900 font-bold rounded hover:bg-amber-50">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 font-bold rounded hover:bg-red-100">Del</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}