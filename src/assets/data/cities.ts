const cities = [
  {
    label: "Delhi",
    id: 1,
  },
  {
    label: "Mumbai",
    id: 2,
  },
  {
    label: "Kolkata",
    id: 3,
  },
  {
    label: "Bangalore",
    id: 4,
  },
  {
    label: "Chennai",
    id: 5,
  },
  {
    label: "Hyderabad",
    id: 6,
  },
  {
    label: "Pune",
    id: 7,
  },
  {
    label: "Ahmedabad",
    id: 8,
  },
  {
    label: "Surat",
    id: 9,
  },
  {
    label: "Prayagraj",
    id: 10,
  },
  {
    label: "Lucknow",
    id: 11,
  },
  {
    label: "Jaipur",
    id: 12,
  },
  {
    label: "Cawnpore",
    id: 13,
  },
  {
    label: "Mirzapur",
    id: 14,
  },
  {
    label: "Nagpur",
    id: 15,
  },
  {
    label: "Ghaziabad",
    id: 16,
  },
  {
    label: "Vadodara",
    id: 17,
  },
  {
    label: "Vishakhapatnam",
    id: 18,
  },
  {
    label: "Indore",
    id: 19,
  },
  {
    label: "Thane",
    id: 20,
  },
  {
    label: "Bhopal",
    id: 21,
  },
  {
    label: "Chinchvad",
    id: 22,
  },
  {
    label: "Patna",
    id: 23,
  },
  {
    label: "Bilaspur",
    id: 24,
  },
  {
    label: "Ludhiana",
    id: 25,
  },
  {
    label: "Agwar",
    id: 26,
  },
  {
    label: "agra",
    id: 27,
  },
  {
    label: "Madurai",
    id: 28,
  },
  {
    label: "Jamshedpur",
    id: 29,
  },
  {
    label: "Nasik",
    id: 30,
  },
  {
    label: "Faridabad",
    id: 31,
  },
  {
    label: "Aurangabad",
    id: 32,
  },
  {
    label: "Rajkot",
    id: 33,
  },
  {
    label: "Meerut",
    id: 34,
  },
  {
    label: "Jabalpur",
    id: 35,
  },
  {
    label: "Kalamboli",
    id: 36,
  },
  {
    label: "Vasai",
    id: 37,
  },
  {
    label: "Najafgarh",
    id: 38,
  },
  {
    label: "Varanasi",
    id: 39,
  },
  {
    label: "Srinagar",
    id: 40,
  },
  {
    label: "Dhanbad",
    id: 41,
  },
  {
    label: "Amritsar",
    id: 42,
  },
  {
    label: "Aligarh",
    id: 43,
  },
  {
    label: "Guwahati",
    id: 44,
  },
  {
    label: "Haora",
    id: 45,
  },
  {
    label: "Ranchi",
    id: 46,
  },
  {
    label: "Gwalior",
    id: 47,
  },
  {
    label: "Chandigarh",
    id: 48,
  },
  {
    label: "Vijayavada",
    id: 49,
  },
  {
    label: "Jodhpur",
    id: 50,
  },
  {
    label: "Raipur",
    id: 51,
  },
  {
    label: "Kota",
    id: 52,
  },
  {
    label: "Kalkaji Devi",
    id: 53,
  },
  {
    label: "Bhayandar",
    id: 54,
  },
  {
    label: "Ambattur",
    id: 55,
  },
  {
    label: "Salt Lake City",
    id: 56,
  },
  {
    label: "Bhatpara",
    id: 57,
  },
  {
    label: "Kukatpalli",
    id: 58,
  },
  {
    label: "Darbhanga",
    id: 59,
  },
  {
    label: "Dasarhalli",
    id: 60,
  },
  {
    label: "Muzaffarpur",
    id: 61,
  },
  {
    label: "Oulgaret",
    id: 62,
  },
  {
    label: "New Delhi",
    id: 63,
  },
  {
    label: "Tiruvottiyur",
    id: 64,
  },
  {
    label: "Puducherry",
    id: 65,
  },
  {
    label: "Byatarayanpur",
    id: 66,
  },
  {
    label: "Pallavaram",
    id: 67,
  },
  {
    label: "Secunderabad",
    id: 68,
  },
  {
    label: "Shimla",
    id: 69,
  },
  {
    label: "Puri",
    id: 70,
  },
  {
    label: "Shrirampur",
    id: 71,
  },
  {
    label: "Hugli",
    id: 72,
  },
  {
    label: "Chandannagar",
    id: 73,
  },
  {
    label: "Sultanpur Mazra",
    id: 74,
  },
  {
    label: "Krishnanagar",
    id: 75,
  },
  {
    label: "Barakpur",
    id: 76,
  },
  {
    label: "Bhalswa Jahangirpur",
    id: 77,
  },
  {
    label: "Nangloi Jat",
    id: 78,
  },
  {
    label: "Yelahanka",
    id: 79,
  },
  {
    label: "Titagarh",
    id: 80,
  },
  {
    label: "Dam Dam",
    id: 81,
  },
  {
    label: "Bansbaria",
    id: 82,
  },
  {
    label: "Madhavaram",
    id: 83,
  },
  {
    label: "Baj Baj",
    id: 84,
  },
  {
    label: "Nerkunram",
    id: 85,
  },
  {
    label: "Kendraparha",
    id: 86,
  },
  {
    label: "Sijua",
    id: 87,
  },
  {
    label: "Manali",
    id: 88,
  },
  {
    label: "Chakapara",
    id: 89,
  },
  {
    label: "Pappakurichchi",
    id: 90,
  },
  {
    label: "Herohalli",
    id: 91,
  },
  {
    label: "Madipakkam",
    id: 92,
  },
  {
    label: "Sabalpur",
    id: 93,
  },
  {
    label: "Salua",
    id: 94,
  },
  {
    label: "Balasore",
    id: 95,
  },
  {
    label: "Jalhalli",
    id: 96,
  },
  {
    label: "Chinnasekkadu",
    id: 97,
  },
  {
    label: "Jethuli",
    id: 98,
  },
  {
    label: "Nagtala",
    id: 99,
  },
  {
    label: "Bagalur",
    id: 100,
  },
  {
    label: "Pakri",
    id: 101,
  },
  {
    label: "Hunasamaranhalli",
    id: 102,
  },
  {
    label: "Hesarghatta",
    id: 103,
  },
  {
    label: "Bommayapalaiyam",
    id: 104,
  },
  {
    label: "Gundur",
    id: 105,
  },
  {
    label: "Punadih",
    id: 106,
  },
  {
    label: "Hariladih",
    id: 107,
  },
  {
    label: "Alawalpur",
    id: 108,
  },
  {
    label: "Madnaikanhalli",
    id: 109,
  },
  {
    label: "Kadiganahalli",
    id: 110,
  },
  {
    label: "Mahuli",
    id: 111,
  },
  {
    label: "Zeyadah Kot",
    id: 112,
  },
  {
    label: "Arshakunti",
    id: 113,
  },
  {
    label: "Hirapur",
    id: 114,
  },
  {
    label: "Mirchi",
    id: 115,
  },
  {
    label: "Sonudih",
    id: 116,
  },
  {
    label: "Sondekoppa",
    id: 117,
  },
  {
    label: "Babura",
    id: 118,
  },
  {
    label: "Madavar",
    id: 119,
  },
  {
    label: "Kadabgeri",
    id: 120,
  },
  {
    label: "Nanmangalam",
    id: 121,
  },
  {
    label: "Taliganja",
    id: 122,
  },
  {
    label: "Tarchha",
    id: 123,
  },
  {
    label: "Belgharia",
    id: 124,
  },
  {
    label: "Kammanhalli",
    id: 125,
  },
  {
    label: "Sonnappanhalli",
    id: 126,
  },
  {
    label: "Kedihati",
    id: 127,
  },
  {
    label: "Doddajivanhalli",
    id: 128,
  },
  {
    label: "Simli Murarpur",
    id: 129,
  },
  {
    label: "Sonawan",
    id: 130,
  },
  {
    label: "Devanandapur",
    id: 131,
  },
  {
    label: "Tribeni",
    id: 132,
  },
  {
    label: "Huttanhalli",
    id: 133,
  },
  {
    label: "Nathupur",
    id: 134,
  },
  {
    label: "Bali",
    id: 135,
  },
  {
    label: "Vajarhalli",
    id: 136,
  },
  {
    label: "Saino",
    id: 137,
  },
  {
    label: "Shekhpura",
    id: 138,
  },
  {
    label: "Cachohalli",
    id: 139,
  },
  {
    label: "Narayanpur Kola",
    id: 140,
  },
  {
    label: "Gyan Chak",
    id: 141,
  },
  {
    label: "Kasgatpur",
    id: 142,
  },
  {
    label: "Kitanelli",
    id: 143,
  },
  {
    label: "Harchandi",
    id: 144,
  },
  {
    label: "Santoshpur",
    id: 145,
  },
  {
    label: "Bendravadi",
    id: 146,
  },
  {
    label: "Kodagihalli",
    id: 147,
  },
  {
    label: "Harna Buzurg",
    id: 148,
  },
  {
    label: "Mailanhalli",
    id: 149,
  },
  {
    label: "Sultanpur",
    id: 150,
  },
];

export default cities;
