var config = {
    style: 'mapbox://styles/harrymahar/ckir39dn97b9r17ujm2c54e6j', //TODO
    accessToken: 'pk.eyJ1IjoiaGFycnltYWhhciIsImEiOiJuQU1iLU5FIn0.zC5TBxlL49i0qeZwWjEJjw', //TODO
    title: '10 GUNUNG TERTINGGI DI INDONESIA', //TODO
    subtitle: 'The Top 10 Highest Mountain in Indonesia', //TODO
    byline: 'Harry Mahardhika, 2020', //TODO
    footer: 'Created using Mapbox',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
			{
            id: 'gunung-tertinggi',
            title: 'Pembukaan',
            description: 'Ini adalah Peta Bercerita (<i>Story Map</i>) tentang 10 gunung tertinggi di Indonesia berdasarkan ketinggian puncak di atas permukaan laut. Data diambil dari OpenStreetMap dan diolah menggunakan QGIS serta Mapbox Studio. Referensi data sebagian besar diambil dari Wikipedia. Selamat Menikmati!',
            location: {
              "center": [
					118.27964298313992,
					-1.8650710211866652
				],
				"zoom": 4.500000000000009,
				"pitch": 65.00000000000018,
				"bearing": 0
            }
        },
		
		
		{
            id: 'puncak-jaya',
            title: '1. Puncak Jaya',
            description: 'Puncak Jaya atau Piramida Carstensz ialah sebuah puncak yang menjadi bagian dari Barisan Sudirman yang terdapat di Provinsi Papua, Indonesia. Puncak Jaya mempunyai ketinggian <b>4.884 mdpl</b> dan di sekitarnya terdapat gletser Carstensz, satu-satunya gletser tropika di Indonesia, yang secara perlahan mulai menipis akibat pemanasan global.Puncak ini merupakan gunung tertinggi di Indonesia kawasan Oceania. Puncak Jaya adalah salah satu dari tujuh puncak tertinggi di dunia. <a href="https://id.wikipedia.org/wiki/Puncak_Jaya">Informasi lebih lanjut....</a>',
            location: {
              "center": [
					137.16086253624485,
					-4.0777948777584925
				],
				"zoom": 13.037566585273643,
				"pitch": 67.75864859417523,
				"bearing": -133.41238204395782
            }
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
		
		{
            id: 'puncak-mandala',
            title: '2. Puncak Mandala',
            description: 'Puncak Mandala (pada masa penjajahan Belanda dikenal sebagai Julianatop atau Puncak Juliana) adalah salah satu gunung di Papua, Indonesia. Dengan ketinggian <b>4.760 mdpl</b>, Puncak Mandala adalah gunung tertinggi ke-2 di Indonesia setelah Puncak Jaya. Puncak Mandala membentuk bagian Pegunungan Bintang bagian timur dan berada dekat perbatasan Papua Nugini. <a href="https://id.wikipedia.org/wiki/Puncak_Mandala">Lihat lebih lanjut .....</a>',
            location: {
              "center": [
					140.28942079946472,
					-4.708784816532287
				],
				"zoom": 11.032264290017776,
				"pitch": 69.49999999999986,
				"bearing": 28.80000000000126
            }
        },
		
		{
            id: 'puncak-trikora',
            title: '3. Puncak Trikora',
            description: 'Puncak Trikora atau Ettiakup merupakan sebuah gunung yang terdapat di Papua Barat, Indonesia. Puncak Trikora mempunyai ketinggian setinggi <b>4,751 mdpl</b>, menjadikannya gunung tertinggi ketiga di Indonesia setelah Puncak Jaya dan Puncak Mandala. Puncak Trikora mempunyai kawasan hutan Dipterokarp Bukit, hutan Dipterokarp Atas, hutan Montane, dan Hutan Ericaceous atau hutan gunung. Di zaman pemerintahan Belanda gunung ini dikenal dengan nama Wilhelminatop (Puncak Wilhelmina). <a href="https://id.wikipedia.org/wiki/Puncak_Trikora">Lihat lebih lanjut .....</a>',
            location: {
               "center": [
					138.68284091231578,
					-4.261530977261643
				],
				"zoom": 12.396627875861105,
				"pitch": 65.00365807761156,
				"bearing": 26.39999999999917
            }
        },
		
		{
            id: 'ngga-plimit',
            title: '4. Ngga Plimit',
            description: 'Gunung ini termasuk dalam jajaran Pegunungan Maoke, yang terletak di Papua dan memiliki ketinggian <b>4717mdpl</b>. Nama Ngga Pilimsit diambil dari nama Alexander Willem Frederik Idenburg, yang saat itu Ngga Plimsit disebut sebagai Mount Idenberg.  Pendaki pertama yang berhasil menaklukan puncak Gunung Ngga Pilimsit ialah Heinrich Harrer dan Philip Temple, pada 1962. <a href="https://en.wikipedia.org/wiki/Ngga_Pilimsit">Lihat lebih lanjut .....</a>',
            location: {
               "center": [
					137.06221745133047,
					-4.039256686908871
				],
				"zoom": 13.420953789257462,
				"pitch": 66.99999999999972,
				"bearing": -80.80000000000005
            }
        },
		
		{
            id: 'puncak-yamin',
            title: '5. Puncak Yamin',
            description: 'Dengan ketinggian kurang lebih <b>4.595 mdpl</b>, Gunung Yamin memiliki luas sekitar 3.947 km persegi. Keindahan alamnya yang begitu mempesona dijamin tidak akan membuat siapapun kecewa saat mendakinya. Bukan hanya memiliki pemandangan menakjubkan, dengan struktur bebatuan klastik, gamping, dan karang glaciated membuat medan pendakiannya menjadi daya tarik tersendiri bagi para pendaki yang ingin menaklukkan Gunung Yamin tersebut. <a href="https://en.wikipedia.org/wiki/Mount_Yamin">Lihat lebih lanjut .....</a>',
            location: {
               "center": [
					140.0812384523672,
					-4.68278696480094
			],
			"zoom": 12.19167778116752,
			"pitch": 73.99999999999979,
			"bearing": -120.34953862827582
            }
        },
		
		{
            id: 'gunung-kerinci',
            title: '6. Gunung Kerinci',
            description: 'Gunung Kerinci (juga dieja "Kerintji", dan dikenal sebagai Gunung Gedang, Berapi Kurinci, Kerinchi, Korinci, atau Puncak Indrapura) adalah gunung tertinggi di Sumatra dengan ketinggian <b>3.805 mdpl</b>, gunung berapi tertinggi di Indonesia, dan puncak tertinggi di Indonesia di luar Papua. Gunung Kerinci terletak tepat di perbatasan antara Provinsi Sumatera Barat dengan Provinsi Jambi, di Pegunungan Bukit Barisan. Gunung ini juga menjadi batas antara wilayah Etnis Minangkabau dengan Suku Kerinci yang dikelilingi hutan lebat Taman Nasional Kerinci Seblat dan merupakan habitat harimau sumatra dan badak sumatra. <a href="https://id.wikipedia.org/wiki/Gunung_Kerinci">Lihat lebih lanjut .....</a>',
            location: {
               "center": [
					101.2660788799148,
					-1.699068918424672
			],
			"zoom": 10.967802386253998,
			"pitch": 68.55220691888216,
			"bearing": -23.611627818215304
            }
        },
		
		{
            id: 'gunung-rinjani',
            title: '7. Gunung Rinjani',
            description: 'Gunung Rinjani adalah gunung yang berlokasi di Pulau Lombok, Nusa Tenggara Barat. Gunung yang merupakan gunung berapi kedua tertinggi di Indonesia dengan ketinggian <b>3.726 mdpl</b> ini merupakan gunung favorit bagi pendaki Indonesia karena keindahan pemandangannya. Gunung ini merupakan bagian dari Taman Nasional Gunung Rinjani yang memiliki luas sekitar 41.330 ha dan ini akan diusulkan penambahannya sehingga menjadi 76.000 ha ke arah barat dan timur. Secara administratif gunung ini berada dalam wilayah tiga kabupaten: Lombok Timur, Lombok Tengah dan Lombok Barat.  <a href="https://id.wikipedia.org/wiki/Gunung_Rinjani">Lihat lebih lanjut .....</a>',
            location: {
               "center": [
					116.45958353662581,
					-8.41189996931395
				],
				"zoom": 12.459833877107982,
				"pitch": 70.92465425802935,
				"bearing": -84.00000000000037
            }
        },
		
		{
            id: 'gunung-semeru',
            title: '8. Gunung Semeru',
            description: 'Gunung Semeru atau Gunung Meru adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia. Gunung Semeru merupakan gunung tertinggi di Pulau Jawa, dengan puncaknya Mahameru, <b>3.676 mdpl</b>. Gunung Semeru juga merupakan gunung berapi tertinggi ketiga di Indonesia setelah Gunung Kerinci di Sumatra dan Gunung Rinjani di Nusa Tenggara Barat. Kawah di puncak Gunung Semeru dikenal dengan nama Jonggring Saloko. Gunung Semeru secara administratif termasuk dalam wilayah dua kabupaten, yakni Kabupaten Malang dan Kabupaten Lumajang, Provinsi Jawa Timur. Gunung ini termasuk dalam kawasan Taman Nasional Bromo Tengger Semeru. <a href="https://id.wikipedia.org/wiki/Gunung_Semeru">Lihat lebih lanjut .....</a>',

            location: {
               "center": [
					112.9245858501805,
					-8.10790533786016
				],
				"zoom": 12.081063369458,
				"pitch": 70.6282871138063,
				"bearing": -8.819280197284325
            }
        },
		
		{
            id: 'gunung-sanggar',
            title: '9. Gunung Sanggar',
            description: 'Gunung tertinggi di Indonesia selanjutnya juga berada di Lombok. Meskipun tidak sepopuler Gunung Rinjani, Gunung Sanggar memiliki ketinggian mencapai <b>3.564 mdpl</b>, menjadikannya salah satu dari lima gunung tertinggi di Indonesia. Soal pemandangan alam, Gunung Sanggar menawarkan keindahan yang tak kalah indah dari gunung-gunung lainnya yang ada di kawasan kepulauan Nusa Tenggara.',

            location: {
               "center": [
					116.45851460276992,
					-8.41868974064326
				],
				"zoom": 14.597430594906323,
				"pitch": 70.59140676038295,
				"bearing": 82.68726855411525
            }
        },
		
		{
            id: 'gunung-Latimojong',
            title: '10. Gunung Latimojong',
            description: 'Gunung Latimojong merupakan gunung yang tertinggi di Sulawesi Selatan dengan ketinggian <b>3.478 mdpl</b>, puncaknya yang bernama Bulu Rante Mario. Pegunungan Latimojong ini membentang dari selatan ke utara. Di sebelah barat Gunung Latimojong adalah Kabupaten Enrekang, sebelah utara Kabupaten Tana Toraja, sebelah selatan adalah daerah Kabupaten Sidenreng Rappang dan area sebelah timur seluruhnya wilayah Kabupaten Luwu sampai di pinggir pantai Teluk Bone. <a href="https://id.wikipedia.org/wiki/Gunung_Latimojong">Lihat lebih lanjut .....</a>',

            location: {
               "center": [
					120.0957420906866,
					-3.4836903924862668
			],
			"zoom": 11.927714848513025,
			"pitch": 68.23149315142032,
			"bearing": 0
            }
        },
    ]
};
