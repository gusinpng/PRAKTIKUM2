// Mengekspor fungsi untuk dipanggil oleh Router
exports.getBeranda = (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Beranda',   // ← ditambahkan, dipakai header.ejs
    userName: 'Administrator TI',
    fiturList: ['Routing Terisolasi', 'Controller Terpisah', 'Skalabilitas Monolith']
  });
};

exports.getKatalog = (req, res) => {
  res.render('pages/katalog', {
    pageTitle: 'Katalog Produk',
    produk: [             
      { nama: 'Laptop', harga: 7000000 },
      { nama: 'Mouse', harga: 150000 }
    ]
  });
};

exports.postTambahProduk = (req, res) => {
  console.log(req.body.namaProduk);   // ← sengaja memicu error
  res.redirect('/katalog');
};