'use client';

import React, { useState, useEffect } from 'react';

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
    <div className="bg-[#0F1115] text-slate-200 min-h-screen flex flex-col justify-between font-sans">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black text-xs font-bold py-2 px-4 text-center">
        AUTHORIZED WHOLESALE SUPPLIERS & INTERIOR SOLUTIONS IN POOTH KALAN, DELHI
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0F1115]/90 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xl">
              KTC
            </div>
            <div>
              <span className="block text-lg font-bold text-amber-400 tracking-wider">KHUSHI TRADING CO.</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Tiles • SS Profiles • Smart Mirrors</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-amber-400">Home</a>
            <a href="#catalogue" className="hover:text-amber-400">Catalogue</a>
            <a href="#about" className="hover:text-amber-400">About Us</a>
            <a href="#calculator" className="hover:text-amber-400">Bulk Quote</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <button onClick={() => setIsAdminOpen(true)} className="px-3.5 py-2 rounded-lg border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 text-xs font-semibold">
              ⚙️ Admin Panel
            </button>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs">
              Direct WhatsApp
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-amber-400 text-2xl">
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#181B20] border-b border-amber-500/20 p-4 space-y-3 text-sm">
            <a href="#home" className="block hover:text-amber-400">Home</a>
            <a href="#catalogue" className="block hover:text-amber-400">Catalogue</a>
            <a href="#about" className="block hover:text-amber-400">About Us</a>
            <a href="#contact" className="block hover:text-amber-400">Contact</a>
            <button onClick={() => { setIsAdminOpen(true); setMobileMenuOpen(false); }} className="w-full py-2 rounded border border-amber-400 text-amber-400 text-xs font-bold">
              Open Admin Panel
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase">
            💎 Premium B2B Wholesale Catalogue
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
            Elevate Interiors with <span className="text-amber-400">SS Profiles, Tiles & LED Mirrors</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delhi's trusted B2B partner for high-grade Stainless Steel Profiles, Designer Porcelain Tiles, Glass Paneling, and Smart Bathroom LED Mirrors.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#catalogue" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-sm">
              Browse Catalogue
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-slate-800 border border-amber-400/40 text-amber-300 font-semibold text-sm">
              Quick WhatsApp Quote
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 border border-amber-400/30 rounded-2xl p-2 bg-[#181B20]">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Interior Showroom" className="rounded-xl w-full h-80 object-cover" />
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="py-12 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Interactive B2B Catalogue</span>
            <h2 className="text-3xl font-serif font-bold text-white">Explore Product Range</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'SS Profiles', 'Tiles', 'LED Mirrors', 'Glass Profiles', 'CNC Stone'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCurrentFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currentFilter === cat ? 'bg-amber-400 text-black' : 'border border-slate-700 text-slate-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-[#181B20] border border-amber-500/20 rounded-xl overflow-hidden flex flex-col justify-between">
              <div>
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-amber-400 uppercase font-bold px-2 py-0.5 rounded bg-black/50 border border-amber-400/30">{p.category}</span>
                  <h3 className="text-white font-bold text-base">{p.title}</h3>
                  <p className="text-slate-400 text-xs line-clamp-2">{p.desc}</p>
                </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-slate-800 mt-3">
                <span className="text-amber-400 font-bold text-sm">{p.price}</span>
                <a href={`https://wa.me/919876543210?text=Inquiry%20for%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded bg-amber-400 text-black font-bold text-xs">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Calculator */}
      <section id="calculator" className="py-12 bg-[#181B20] border-y border-amber-500/20 my-8">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-white">Instant Bulk Inquiry Generator</h2>
            <p className="text-slate-400 text-xs mt-1">Select your project requirements and dispatch directly to WhatsApp.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Product</label>
              <select value={calcCat} onChange={(e) => setCalcCat(e.target.value)} className="w-full bg-[#0F1115] border border-slate-700 p-2.5 text-xs rounded text-slate-200">
                <option value="SS T Profile (PVD Gold)">SS T Profile (PVD Gold)</option>
                <option value="SS U Profile (Rose Gold)">SS U Profile (Rose Gold)</option>
                <option value="Designer Porcelain Tiles">Designer Porcelain Tiles</option>
                <option value="Smart LED Mirror">Smart LED Mirror</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Quantity / Feet</label>
              <input type="number" value={calcQty} onChange={(e) => setCalcQty(e.target.value)} className="w-full bg-[#0F1115] border border-slate-700 p-2.5 text-xs rounded text-slate-200" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Finish</label>
              <select value={calcFinish} onChange={(e) => setCalcFinish(e.target.value)} className="w-full bg-[#0F1115] border border-slate-700 p-2.5 text-xs rounded text-slate-200">
                <option value="Mirror Gold Finish">Mirror Gold Finish</option>
                <option value="Hairline Matt Finish">Hairline Matt Finish</option>
                <option value="Rose Gold Finish">Rose Gold Finish</option>
              </select>
            </div>
          </div>

          <button onClick={sendQuote} className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs rounded-lg">
            Send Bulk Order Inquiry on WhatsApp
          </button>
        </div>
      </section>

      {/* About & Contact */}
      <section id="about" className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-amber-400 text-xs font-bold uppercase">About Khushi Trading Co.</span>
          <h2 className="text-3xl font-serif font-bold text-white">Your Reliable Wholesale Partner in Delhi</h2>
          <p className="text-slate-300 text-xs leading-relaxed">
            At <strong>Khushi Trading Co. (KTC)</strong>, based in Pooth Kalan, Delhi, we supply premium interior architectural materials directly to architects, designers, builders, and hardware traders.
          </p>
        </div>

        <div id="contact" className="bg-[#181B20] border border-amber-500/20 rounded-xl p-6 space-y-3">
          <h3 className="text-lg font-bold text-white">Pooth Kalan Workshop & Office</h3>
          <p className="text-xs text-slate-300">📍 Khushi Trading Co. (KTC), Main Road, Pooth Kalan, Rohini Sector 20 Ext., Delhi - 110086</p>
          <p className="text-xs text-slate-300">📞 +91 98765 43210 / +91 91234 56789</p>
          <p className="text-xs text-slate-300">✉️ info@khushitradingco.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181B20] border-t border-amber-500/20 py-6 text-center text-xs text-slate-500">
        © 2026 Khushi Trading Co. (KTC) - Pooth Kalan, Delhi. All Rights Reserved.
      </footer>

      {/* Admin Panel Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#181B20] border border-amber-500/30 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-4 relative">
            <button onClick={() => setIsAdminOpen(false)} className="absolute top-4 right-4 text-slate-400 text-xl font-bold">
              ✕
            </button>

            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">KTC Admin Product Manager</h3>

            <form onSubmit={handleSaveProduct} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 mb-1">Product Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. SS T Profile Gold" className="w-full bg-[#0F1115] border border-slate-700 p-2 rounded text-slate-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-[#0F1115] border border-slate-700 p-2 rounded text-slate-200">
                    <option value="SS Profiles">SS Profiles</option>
                    <option value="Tiles">Tiles & Slabs</option>
                    <option value="LED Mirrors">LED Mirrors</option>
                    <option value="Glass Profiles">Glass & Aluminium</option>
                    <option value="CNC Stone">CNC Stone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Price</label>
                  <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. ₹180 / Piece" className="w-full bg-[#0F1115] border border-slate-700 p-2 rounded text-slate-200" />
                </div>
              </div>

              <div className="bg-[#0F1115] p-3 rounded border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400">Change Product Image</span>
                <div>
                  <label className="block text-slate-400 text-[10px]">Option 1: Paste Image Link (URL)</label>
                  <input type="text" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value); setPreviewImg(e.target.value); }} placeholder="https://..." className="w-full bg-[#181B20] border border-slate-700 p-1.5 rounded text-slate-200" />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px]">Option 2: Upload File From Computer</label>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="text-slate-400 text-[10px]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-[10px]">Preview:</span>
                  <img src={previewImg} alt="Preview" className="w-10 h-10 object-cover rounded border border-slate-700" />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Description</label>
                <textarea rows={2} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Product specification..." className="w-full bg-[#0F1115] border border-slate-700 p-2 rounded text-slate-200" />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2.5 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded">
                  Save Product
                </button>
                <button type="button" onClick={resetForm} className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded">
                  Reset
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-white">Current Products</h4>
              <div className="max-h-36 overflow-y-auto space-y-1">
                {products.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-2 bg-[#0F1115] rounded text-xs">
                    <span className="text-slate-200 font-bold truncate max-w-[200px]">{p.title}</span>
                    <div className="flex gap-1">
                      <button onClick={() => handleEdit(p)} className="px-2 py-0.5 bg-slate-800 text-amber-400 rounded">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="px-2 py-0.5 bg-red-900 text-red-300 rounded">Del</button>
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