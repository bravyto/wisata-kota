var data = {
  users : [
    {
      nama: 'User',
      noTlp: '0812342324',
      email: 'user@gmail.com',
      password: 'user',
    },
    {
      nama: 'Wisata Kota',
      noTlp: '021299293',
      email: 'wisatakota@gmail.com',
      password: 'password'
    },
  ],
  kota : [
    {
      nama: 'Jakarta',
      provinsi: 'DKI Jakarta',
      img_url: 'jakarta.jpg'
    },
    {
      nama: 'Bandung',
      provinsi: 'Jawa Barat',
      img_url: ''
    },
    {
      nama: 'Bogor',
      provinsi: 'Jawa Barat',
      img_url: ''
    },
    {
      nama: 'Semarang',
      provinsi: 'Jawa Tengah',
      img_url: ''
    },
    {
      nama: 'Surabaya',
      provinsi: 'Jawa Timur',
      img_url: 'surabaya.jpg'
    },
    {
      nama: 'Solo',
      provinsi: 'Jawa Tengah',
      img_url: ''
    },
    {
      nama: 'Denpasar',
      provinsi: 'Bali',
      img_url: 'denpasar.jpg'
    },
    {
      nama: 'Makasar',
      provinsi: 'Sulawesi Selatan',
      img_url: ''
    }
  ],
  aktivitas: [
    {
      nama: 'Jakarta Akuarium',
      lokasi: 'Tanjung Duren',
      bintang: '4',
      rating: '8.2',
      harga: '150000',
      img_url: 'jakarta_aquarium.jpg',
      jam_buka: '10:00',
      jam_tutup: '21:00',
      deskripsi: 'There are not many places you could go to refresh your mind in crowded Jakarta, but being located in one of the shopping centers in the city, Jakarta Aquarium is very easily accessible for all! As an aquarium doubling as a conservation site, you can enjoy the beauty of marine diversity here!',
      kota: 'Jakarta'
    },
    {
      nama: 'Waterbom Jakarta',
      lokasi: 'Pantai Indah Kapuk',
      bintang: '5',
      rating: '8.6',
      harga: '100000',
      img_url: 'waterboom.jpg',
      jam_buka: '10:00',
      jam_tutup: '18:00',
      deskripsi: "What better way to cool down on a hot day than playing with water at Waterbom Jakarta? It is the first water park in Indonesia with international standard facilities, and there are lots of outdoor activities to choose from. Whether you want to chill on a tube on the pools or go 70 km/hour on the Speed Slide, there is something for everyone. Don't worry, the water filter system runs 24 hours to ensure everything is clean.",
      kota: 'Jakarta'
    }
  ],
  hotel: [
    {
      nama: 'Century Park Hotel',
      lokasi: 'Kebayoran Baru',
      bintang: '4',
      rating: '8.7',
      harga: '1375000',
      img_url: 'century_park_hotel.jpeg',
      deskripsi: 'Century Park Hotel, a luxury 4 stars business hotel near Jakarta Convention Center (JCC) Senayan. Book your hotel in Central Jakarta at the best price.',
      kota: 'Jakarta',
      kamar: [
        {
          nama: 'Duluxe Room',
          harga: '1370000',
          kapasitas: 2,
          kasur: '2 Single Beds',
        },
        {
          nama: 'Executive Twin',
          harga: '1850000',
          kapasitas: 2,
          kasur: '2 Single Beds',
        },
      ]
    },
    {
      nama: 'The Sultan Hote',
      lokasi: 'Senayan',
      bintang: '5',
      rating: '9.3',
      harga: '1355000',
      img_url: 'the_sultan.jpg',
      deskripsi: 'The Sultan Hotel & Residence Jakarta is five stars hotel with a touch of royal Javanese, perfect for business or leisure trip in Jakarta.',
      kota: 'Jakarta',
      kamar: [
        {
          nama: 'Deluxe',
          harga: '1355000',
          kapasitas: 2,
          kasur: '2 Single Beds',
          img_url: ''
        },
        {
          nama: 'Grand Deluxe',
          harga: '1570000',
          kapasitas: 2,
          kasur: '1 Double Beds',
          img_url: ''
        },
      ]
    },
  ],
  paket_wisata: [
    {
      nama: 'Pulau Pramuka 3D2N',
      durasi: '3D2N',
      bintang: '4',
      rating: '9.3',
      harga: 500000,
      tanggal_berangkat: '05-05-2019',
      tanggal_pulang: '08-05-2019',
      img_url: 'pulau_pramuka.jpg',
      deskripsi: 'Pulau Pramuka merupakan salah satu pulau yang berada pada gugusan Kepulauan Seribu. Pulau ini merupakan pusat administrasi dan pemerintahan Kabupaten Administratif Kepulauan Seribu. Pulau Pramuka termasuk ke dalam Kelurahan Pulau Panggang.',
      itenerary:[
        {
          hari: 1,
          lokasi: 'Pulau Pramuka',
          detail: 'Berangkat dari pelabuhan',
          img_url: ''
        },
        {
          hari: 2,
          lokasi: 'Pulau Macan dan Pulau Singa',
          detail: 'Snorkling di pulau Macan',
          img_url: ''
        },
        {
          hari: 3,
          lokasi: 'Pulau Macan dan Pulau Singa',
          detail: 'Kembali ke Jakarta',
          img_url: ''
        }
      ]
    }
  ],
  flight: [
    {
      nama: 'Lion',
      logo: 'lion_logo.png',
      harga: 1100000,
      kota_berangkat: 'Jakarta',
      bandara_berangkat: 'Soekarno Hatta International Airport',
      waktu_berangkat: '06:00',
      kota_tiba: 'Denpasar',
      bandara_tiba: 'Ngurah Rai International Airport',
      waktu_tiba: '07:00',
      durasi: "1 Jam"
    }
  ],
  rental: [
    {
      nama: 'Abdul Car Rental',
      lokasi: 'Kebayoran Baru',
      bintang: '4',
      rating: '8.7',
      harga: '400000',
      img_url: 'car_rental_1.jpeg',
      deskripsi: 'Penyewaan kendaraan bermutu.',
      kota: 'Jakarta'
    },
    {
      nama: 'Dudung Car Rental',
      lokasi: 'Senayan',
      bintang: '3',
      rating: '6.7',
      harga: '200000',
      img_url: 'car_rental_2.jpeg',
      deskripsi: 'Penyewaan kendaraan terjangkau.',
      kota: 'Jakarta'
    },
  ],
  cart: [],
  transaction_history: [],
}
