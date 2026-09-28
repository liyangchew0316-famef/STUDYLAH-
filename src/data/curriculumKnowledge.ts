import { MindMapNode, QuizQuestion, Flashcard } from '../services/gemini';

export interface CurriculumTopicPack {
  keywords: string[];
  title: string;
  summary: string;
  keyPoints: string[];
  formulasOrRules: string[];
  malaysianContext: string;
  examTips: string[];
  mindmapBranches: { label: string; subpoints: string[] }[];
  quizQuestions: QuizQuestion[];
  flashcards: Flashcard[];
}

export const TOPIC_KNOWLEDGE_BASE: CurriculumTopicPack[] = [
  // 1. Math - Polygons, Triangles, Quadrilaterals & Geometry
  {
    keywords: ['polygon', 'segi banyak', 'triangle', 'segi tiga', 'quadrilateral', 'segi empat', 'symmetry', 'simetri', 'sudut'],
    title: 'Polygons, Triangles and Quadrilaterals (Poligon, Segi Tiga & Segi Empat)',
    summary: 'A polygon is an enclosed two-dimensional plane figure with three or more straight line segments. The sum of interior angles depends on the number of sides n: (n - 2) × 180°, while the sum of exterior angles of any convex polygon is always 360°.',
    keyPoints: [
      'Interior angle sum formula: Sum = (n - 2) × 180°, where n is the number of sides.',
      'Sum of exterior angles of any convex polygon is constantly 360° (Sum of ext = 360°).',
      'For a regular polygon with n equal sides: Each exterior angle = 360° / n; Each interior angle = 180° - (360° / n).',
      'Triangles: Sum of interior angles is 180°. Equilateral (3 equal sides, 60° angles, 3 axes of symmetry), Isosceles (2 equal sides, 1 axis of symmetry), Scalene (0 equal sides, 0 axes).',
      'Exterior angle of a triangle equals the sum of the two opposite interior angles (c = a + b).',
      'Quadrilaterals: Interior angle sum is 360°. Square (4 equal sides, 90° angles, 4 axes of symmetry), Rectangle (opposite sides equal, 2 axes), Parallelogram (opposite sides parallel & equal, opposite angles equal, 0 axes of symmetry), Rhombus (4 equal sides, diagonals bisect at 90°, 2 axes), Trapezium (one pair of parallel sides), Kite (2 pairs of adjacent equal sides, 1 axis).',
      'Number of diagonals in a polygon of n sides = n(n - 3) / 2.'
    ],
    formulasOrRules: [
      'Sum of Interior Angles = (n - 2) × 180°',
      'Each Interior Angle of Regular Polygon = [(n - 2) × 180°] / n = 180° - (360° / n)',
      'Each Exterior Angle = 360° / n',
      'Exterior Angle of Triangle = Sum of 2 opposite interior angles',
      'Number of Diagonals = n(n - 3) / 2'
    ],
    malaysianContext: 'Used in Malaysian architectural engineering such as the geometric patterns of the Petronas Twin Towers (Rub el Hizb 8-pointed star base), geodesic domes in national mosques, and roof truss structures in traditional Malay houses.',
    examTips: [
      'When finding the number of sides n, always calculate exterior angle first: n = 360° / exterior angle.',
      'Remember that interior angle + exterior angle on a straight line = 180°.',
      'Parallelogram has 0 lines of symmetry, while a Rhombus has 2 lines of symmetry along its diagonals.'
    ],
    mindmapBranches: [
      {
        label: 'Interior & Exterior Angle Laws',
        subpoints: [
          'Sum of interior angles: (n - 2) × 180°',
          'Sum of exterior angles: always 360°',
          'Regular polygon: each ext = 360°/n, int = 180° - 360°/n'
        ]
      },
      {
        label: 'Triangles Classification',
        subpoints: [
          'Equilateral: 3 equal sides, 60° angles, 3 lines of symmetry',
          'Isosceles: 2 equal sides, base angles equal, 1 line of symmetry',
          'Scalene: all sides different, 0 lines of symmetry',
          'Exterior angle = sum of two opposite interior angles'
        ]
      },
      {
        label: 'Quadrilaterals Properties',
        subpoints: [
          'Square (4 axes) & Rectangle (2 axes)',
          'Rhombus: 4 equal sides, diagonals intersect at 90° (2 axes)',
          'Parallelogram: opposite angles equal, 0 axes of symmetry',
          'Trapezium (1 pair parallel) & Kite (1 axis)'
        ]
      },
      {
        label: 'Diagonals & Problem Solving',
        subpoints: [
          'Diagonal count formula: n(n - 3) / 2',
          'Finding side count: n = 360° / exterior angle',
          'Algebraic angle equations and straight line linear pairs'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "What is the size of each interior angle of a regular octagon (8-sided regular polygon)?",
        options: ["135°", "120°", "140°", "108°"],
        correctAnswer: "135°",
        explanation: "Each exterior angle = 360° / 8 = 45°. Therefore, each interior angle = 180° - 45° = 135°."
      },
      {
        question: "How many lines of symmetry does a parallelogram have?",
        options: ["0", "1", "2", "4"],
        correctAnswer: "0",
        explanation: "A standard parallelogram has rotational symmetry of order 2, but has 0 lines of reflective symmetry."
      },
      {
        question: "If each exterior angle of a regular polygon is 30°, how many sides does the polygon have?",
        options: ["12 sides", "10 sides", "8 sides", "15 sides"],
        correctAnswer: "12 sides",
        explanation: "Number of sides n = 360° / exterior angle = 360° / 30° = 12 sides (dodecagon)."
      },
      {
        question: "Calculate the total number of diagonals in a regular hexagon (6 sides).",
        options: ["9", "6", "12", "15"],
        correctAnswer: "9",
        explanation: "Using the formula n(n - 3) / 2: 6(6 - 3) / 2 = 6 × 3 / 2 = 9 diagonals."
      }
    ],
    flashcards: [
      { front: "Sum of Interior Angles of Polygon", back: "(n - 2) × 180°, where n is the number of sides." },
      { front: "Sum of Exterior Angles of Any Polygon", back: "Constantly 360° regardless of the number of sides." },
      { front: "Regular Polygon Side Formula", back: "Number of sides n = 360° / (each exterior angle)." },
      { front: "Lines of Symmetry: Rhombus", back: "2 lines of symmetry (along its perpendicular bisecting diagonals)." },
      { front: "Lines of Symmetry: Parallelogram", back: "0 lines of symmetry (it only has rotational symmetry of order 2)." },
      { front: "Number of Diagonals Formula", back: "n(n - 3) / 2" }
    ]
  },

  // 2. Geography - Settlements / Petempatan di Malaysia
  {
    keywords: ['petempatan', 'settlement', 'urbanisasi', 'pembandaran', 'pola petempatan'],
    title: 'Petempatan di Malaysia (Settlements in Malaysia)',
    summary: 'Petempatan merujuk kepada kawasan kediaman manusia yang merangkumi pelbagai jenis, fungsi dan pola. Di Malaysia, petempatan dibahagikan kepada petempatan luar bandar dan bandar dengan 4 pola utama: berselerak, berjajar, berkelompok, dan berpusat.',
    keyPoints: [
      'Empat Pola Petempatan Utama: Berjajar (sepanjang jalan raya, pantai, sungai), Berkelompok (tersusun di skim FELDA), Berselerak (kebun kecil, sawah padi tradisional), Berpusat (di persimpangan jalan raya, bandar utama).',
      'Faktor Mempengaruhi Lokasi: Bentuk muka bumi (tanah pamah rata memudahkan pembinaan), bekalan air & saliran, kesuburan tanah, rangkaian pengangkutan, dasar kerajaan (FELDA, DARA, KETENGAH).',
      'Fungsi Petempatan Bandar: Pusat pentadbiran (Putrajaya), pusat perniagaan & kewangan (Kuala Lumpur), pusat perindustrian (Shah Alam, Pasir Gudang), pusat pendidikan (Bangi, Sintok), pusat pelancongan (Melaka, George Town).',
      'Fungsi Petempatan Luar Bandar: Pembekal bahan mentah makanan (pertanian, perikanan), industri kraf tangan dan eko-pelancongan desa.',
      'Kesan Pembandaran: Kesesakan lalu lintas, pulau haba bandar, pencemaran udara dan air, peningkatan kos sara hidup, banjir kilat.'
    ],
    formulasOrRules: [
      'Pola Berjajar = Sepanjang garis lurus (jalan raya / sungai / permatang pantai)',
      'Pola Berkelompok = Padat dan terancang (Rancangan FELDA)',
      'Pola Berselerak = Berjauhan tanpa susunan tetap (Kawasan pertanian tradisional)',
      'Pola Berpusat = Mengelilingi satu titik tumpuan (Persimpangan / Stesen tren)'
    ],
    malaysianContext: 'Kuala Lumpur sebagai megacity dan pusat kewangan negara, Putrajaya sebagai pusat pentadbiran persekutuan pintar, Cyberjaya sebagai hab teknologi, dan skim rancangan tanah FELDA (seperti FELDA Mempaga, Lurah Bilut) sebagai model petempatan luar bandar terancang.',
    examTips: [
      'Dalam soalan peta topografi, kenal pasti simbol jalan raya dan susunan rumah: jika rumah berderet di tepi jalan, polanya adalah "Berjajar".',
      'Skim FELDA sentiasa dikaitkan dengan pola "Berkelompok".',
      'Beri kata kunci: "tanah pamah rata", "jaringan pengangkutan", "ketersediaan air".'
    ],
    mindmapBranches: [
      {
        label: '4 Pola Petempatan',
        subpoints: [
          'Berjajar: Sepanjang sungai, jalan raya, pantai',
          'Berkelompok: Tersusun di skim FELDA & ladang',
          'Berselerak: Rumah berjauhan di sawah & dusun',
          'Berpusat: Di persimpangan jalan & bandar'
        ]
      },
      {
        label: 'Faktor Lokasi Petempatan',
        subpoints: [
          'Bentuk muka bumi tanah pamah rata',
          'Ketersediaan sumber air dan saliran',
          'Jaringan pengangkutan dan perhubungan',
          'Dasar kerajaan (rancangan pembangunan tanah)'
        ]
      },
      {
        label: 'Fungsi Bandar & Luar Bandar',
        subpoints: [
          'Bandar: Pentadbiran, perniagaan, industri, pendidikan',
          'Luar bandar: Pengeluaran makanan, pertanian, perikanan',
          'Saling bergantung antara bandar dan desa'
        ]
      },
      {
        label: 'Isu & Cabaran Pembandaran',
        subpoints: [
          'Kesesakan lalu lintas & pencemaran',
          'Fenomena pulau haba bandar & banjir kilat',
          'Langkah: Pengangkutan awam hijau (LRT, MRT)'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "Apakah pola petempatan yang lazimnya terdapat di kawasan Skim Pembangunan Tanah FELDA di Malaysia?",
        options: ["Pola berkelompok", "Pola berjajar", "Pola berselerak", "Pola jejari"],
        correctAnswer: "Pola berkelompok",
        explanation: "Rumah peneroka FELDA dibina secara tersusun dan berdekatan antara satu sama lain di sekitar pusat komuniti, membentuk pola berkelompok."
      },
      {
        question: "Mengapakah kawasan tanah pamah menjadi tumpuan utama petempatan penduduk di Malaysia?",
        options: [
          "Memudahkan pembinaan infrastruktur dan jaringan pengangkutan",
          "Mempunyai suhu sejuk sepanjang tahun",
          "Kaya dengan mineral uranium dan emas",
          "Bebas daripada sebarang bentuk tiupan angin"
        ],
        correctAnswer: "Memudahkan pembinaan infrastruktur dan jaringan pengangkutan",
        explanation: "Kawasan tanah pamah yang rata menjimatkan kos pembinaan bangunan, lebuh raya, dan sistem utiliti awam."
      },
      {
        question: "Apakah fungsi utama bandar Putrajaya dalam sistem petempatan Malaysia?",
        options: ["Pusat pentadbiran kerajaan persekutuan", "Pusat pelabuhan perikanan utama", "Pusat perlombongan bijih timah", "Pusat industri keluli berat"],
        correctAnswer: "Pusat pentadbiran kerajaan persekutuan",
        explanation: "Putrajaya dibangunkan secara khusus sebagai Pusat Pentadbiran Kerajaan Persekutuan Malaysia."
      }
    ],
    flashcards: [
      { front: "Pola Berjajar (Ciri Kunci)", back: "Deretan rumah dibina selari mengikut jajaran jalan raya, sungai, atau permatang pantai." },
      { front: "Pola Berkelompok (Contoh Malaysia)", back: "Skim penempatan peneroka FELDA dan kampung baru terancang." },
      { front: "Pola Berselerak", back: "Rumah dibina berjauhan antara satu sama lain di kawasan kebun, dusun, atau sawah padi." },
      { front: "Pulau Haba Bandar", back: "Suhu pusat bandar lebih tinggi daripada kawasan luar bandar akibat bangunan konkrit, jalan berturap, dan pelepasan haba kenderaan." }
    ]
  },

  // 3. History - Early Civilizations / Peningkatan Tamadun
  {
    keywords: ['tamadun', 'civilization', 'yunani', 'rom', 'india', 'china', 'mesopotamia', 'mesir'],
    title: 'Tamadun Awal & Peningkatan Tamadun (Civilisations)',
    summary: 'Peningkatan tamadun manusia menyaksikan kemajuan pesat dalam sistem pemerintahan, perundangan, perluasan kuasa, ekonomi, sains, dan falsafah dalam Tamadun Yunani, Rom, India, dan China.',
    keyPoints: [
      'Tamadun Yunani (Greece): Athens mengasaskan sistem Demokrasi Terus (Dewan Perhimpunan, Majistret, Juri). Sparta mengamalkan sistem Ketenteraan Oligarki.',
      'Tamadun Rom: Peralihan dari Monarki → Republik (Konsul, Senat, Dewan Perhimpunan) → Empayar (Julius Caesar, Augustus). Sumbangan agung: Undang-undang Papan Dua Belas (Hukum Rom) dan seni bina Colosseum & Aqueduct.',
      'Tamadun India: Dinasti Maurya (Chandragupta Maurya & Asoka). Asoka menyebarkan agama Buddha dan menegakkan keamanan melalui Tiang Asoka. Sistem Kasta (Brahmin, Ksatria, Vaisya, Sudra). Tulisan Brahmi.',
      'Tamadun China: Dinasti Qin (Maharaja Shi Huangdi menyatukan China, menyeragamkan tulisan/mata wang/timbang tara, membina Tembok Besar China). Dinasti Han (Peperiksaan Awam berasaskan Konfusianisme, Jalan Sutera). 4 Ciptaan Agung: Kertas, Kompas, Serbuk Peledak, Percetakan.',
      'Tamadun Islam: Makkah & Madinah, Piagam Madinah sebagai perlembagaan bertulis pertama di dunia.'
    ],
    formulasOrRules: [
      'Athens = Demokrasi Terus (Rakyat mengundi terus)',
      'Sparta = Kerajaan Tentera (Disiplin ketenteraan ketat)',
      'Rom = Republik & Undang-undang Papan 12 (Prinsip sama rata di sisi undang-undang)',
      'China Qin = Autokratik & Penyatuan (Shi Huangdi, Tembok Besar)',
      'China Han = Peperiksaan Awam (Lidiplomasi, Konfusianisme)'
    ],
    malaysianContext: 'Pengaruh tamadun India dan Islam membentuk sistem kebudayaan, bahasa pinjaman Sanskrit/Arab dalam Bahasa Melayu, dan sistem perundangan adat di Tanah Melayu.',
    examTips: [
      'Bezakan sistem pentadbiran Athens (demokrasi) dengan Sparta (pemerintahan tentera).',
      'Ingat sumbangan Shi Huangdi: menyatukan China, standardisasi tulisan/ukuran, pembinaan Tembok Besar.',
      'Piagam Madinah: perpaduan kaum Ansar dan Muhajirin serta pengiktirafan hak kaum Yahudi.'
    ],
    mindmapBranches: [
      {
        label: 'Tamadun Yunani (Greece)',
        subpoints: [
          'Athens: Sistem Demokrasi Terus pertama di dunia',
          'Sparta: Pemerintahan berteraskan disiplin ketenteraan',
          'Falsafah: Socrates, Plato, Aristotle'
        ]
      },
      {
        label: 'Tamadun Rom',
        subpoints: [
          'Sistem Republik (Konsul, Senat, Dewan Perhimpunan)',
          'Undang-undang: Hukum Kanun Papan Dua Belas',
          'Seni bina: Colosseum, Pantheon, Aqueduct'
        ]
      },
      {
        label: 'Tamadun India',
        subpoints: [
          'Dinasti Maurya & Pemerintahan Asoka (Buddhisme)',
          'Tiang Asoka & Ukiran Falsafah Keadilan',
          'Sistem Kasta & Kesusasteraan Veda'
        ]
      },
      {
        label: 'Tamadun China',
        subpoints: [
          'Dinasti Qin: Shi Huangdi, Penyatuan empayar & Tembok Besar',
          'Dinasti Han: Sistem Peperiksaan Awam Perkhidmatan Awam',
          '4 Ciptaan Agung: Kertas, Kompas, Percetakan, Serbuk Peledak'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "Apakah sistem pentadbiran yang diperkenalkan di kota Athens dalam Tamadun Yunani?",
        options: ["Demokrasi Terus", "Monarki Mutlak", "Diktator Tentera", "Teokrasi"],
        correctAnswer: "Demokrasi Terus",
        explanation: "Athens memperkenalkan sistem demokrasi terus di mana semua warganegara lelaki dewasa terlibat secara langsung dalam Dewan Perhimpunan."
      },
      {
        question: "Apakah tujuan utama Maharaja Shi Huangdi membina Tembok Besar China semasa Dinasti Qin?",
        options: ["Mempertahankan sempadan empayar daripada serangan orang gasar gasar Hun", "Sebagai pusat perdagangan sutera antarabangsa", "Tempat persemadian maharaja dan permaisuri", "Menandakan kawasan pertanian padi"],
        correctAnswer: "Mempertahankan sempadan empayar daripada serangan orang gasar gasar Hun",
        explanation: "Tembok Besar China dibina untuk menghalang pencerobohan puak nomad berkuda dari utara."
      },
      {
        question: "Apakah undang-undang bertulis pertama Tamadun Rom yang dipamerkan di khalayak ramai?",
        options: ["Undang-undang Papan Dua Belas", "Hukum Kanun Hammurabi", "Kod Justinian", "Hukum Asoka"],
        correctAnswer: "Undang-undang Papan Dua Belas",
        explanation: "Undang-undang Papan Dua Belas dipahat pada kepingan kayu/tembaga dan dipamerkan di Forum Rom untuk diketahui semua rakyat."
      }
    ],
    flashcards: [
      { front: "Demokrasi Athens", back: "Sistem demokrasi terus di mana warganegara mengundi undang-undang dalam Dewan Perhimpunan." },
      { front: "Colosseum Rom", back: "Amfiteater agung tempat pementasan sukan, pertunjukan gladiator, dan lambang kehebatan kejuruteraan Rom." },
      { front: "Sumbangan Shi Huangdi", back: "Penyatuan seluruh negara China, penyeragaman sistem tulisan, mata wang, dan pembinaan Tembok Besar." },
      { front: "Peperiksaan Awam China (Han)", back: "Sistem pemilihan pegawai kerajaan berdasarkan merit dan pengetahuan teks Konfusianisme." }
    ]
  },

  // 4. Pure Sciences - Physics (Fizik)
  {
    keywords: ['physics', 'fizik', 'force', 'daya', 'motion', 'gerakan', 'momentum', 'gravitation', 'kegravitian', 'light', 'optics', 'haba', 'heat', 'waves', 'gelombang', 'electricity', 'elektrik', 'pressure', 'tekanan'],
    title: 'Physics (Fizik KSSM SPM)',
    summary: 'Physics is the study of matter, energy, space, and time. Key KSSM branches include Newtonian mechanics (Forces and Motion), Thermodynamics, Wave mechanics, Optics, Electricity and Electromagnetism, and Modern/Nuclear Physics.',
    keyPoints: [
      'Equations of Linear Motion with uniform acceleration: v = u + at, s = ut + 0.5at², v² = u² + 2as, s = 0.5(u + v)t.',
      'Newton’s Laws of Motion: 1st Law (Inertia - object remains at rest or constant velocity unless acted upon by resultant force), 2nd Law (F = ma), 3rd Law (Action = Reaction in opposite direction).',
      'Momentum: p = mv. Principle of Conservation of Momentum: Total initial momentum = Total final momentum (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).',
      'Pressure: P = F / A. Liquid Pressure: P = hρg. Pascal’s Principle (F₁/A₁ = F₂/A₂ in hydraulic systems). Archimedes’ Principle (Buoyant force = weight of displaced fluid). Bernoulli’s Principle (High fluid velocity = low pressure).',
      'Electricity: Ohm’s Law V = IR. Series circuit (Current identical, V_total = V₁ + V₂). Parallel circuit (Voltage identical, 1/R_total = 1/R₁ + 1/R₂). Electrical power: P = VI = I²R = V²/R.',
      'Electromagnetism: Fleming’s Left-Hand Rule (Motors: Force, Field, Current). Fleming’s Right-Hand Rule (Generators / Induction). Transformer equation: Vp/Vs = Np/Ns = Is/Ip.',
      'Optics: Snell’s Law n = sin i / sin r = c / v = real depth / apparent depth = 1 / sin c (critical angle). Thin lens formula: 1/f = 1/u + 1/v.'
    ],
    formulasOrRules: [
      'v = u + at',
      's = ut + ½at²',
      'v² = u² + 2as',
      'F = ma',
      'P = hρg and P = F/A',
      'F₁/A₁ = F₂/A₂ (Pascal)',
      'V = IR and P = VI',
      'n = sin i / sin r = 1 / sin c'
    ],
    malaysianContext: 'Application in the design of aerodynamic trains like the ETS and ERL, hydraulic jacks in automotive workshops, hydroelectric turbines in Bakun Dam Sarawak, and solar panel arrays across national green energy projects.',
    examTips: [
      'Always state units in final numerical answers (e.g., m s⁻², N, J, W, Pa, Ω).',
      'In force resolution questions: resolve forces into horizontal (F cos θ) and vertical (F sin θ) components first.',
      'Remember total internal reflection occurs ONLY when light travels from an optically denser to a less dense medium, and angle of incidence i > critical angle c.'
    ],
    mindmapBranches: [
      {
        label: 'Forces & Linear Motion',
        subpoints: [
          'Linear motion formulas: v = u + at, s = ut + ½at², v² = u² + 2as',
          'Newton\'s Laws: Inertia, F = ma, Action-Reaction',
          'Momentum conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂'
        ]
      },
      {
        label: 'Pressure & Fluid Mechanics',
        subpoints: [
          'Liquid pressure: P = hρg',
          'Pascal\'s Principle: F₁/A₁ = F₂/A₂ (Hydraulics)',
          'Archimedes (Buoyancy) & Bernoulli (Aerofoils)'
        ]
      },
      {
        label: 'Electricity & Electromagnetism',
        subpoints: [
          'Ohm\'s Law: V = IR, Power P = VI = I²R',
          'Series vs Parallel resistance rules',
          'Electromagnetic Induction & Transformers: Vp/Vs = Np/Ns'
        ]
      },
      {
        label: 'Waves, Light & Optics',
        subpoints: [
          'Wave equation: v = fλ',
          'Snell\'s Law: n = sin i / sin r = 1 / sin c',
          'Total internal reflection & Thin lens formula: 1/f = 1/u + 1/v'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "A car accelerates uniformly from rest to 20 m s⁻¹ in 5 seconds. What is its acceleration?",
        options: ["4 m s⁻²", "2 m s⁻²", "10 m s⁻²", "100 m s⁻²"],
        correctAnswer: "4 m s⁻²",
        explanation: "Using a = (v - u) / t: a = (20 - 0) / 5 = 4 m s⁻²."
      },
      {
        question: "Which principle explains why an aircraft wing (aerofoil) experiences upward lift during flight?",
        options: ["Bernoulli's Principle", "Pascal's Principle", "Archimedes' Principle", "Hooke's Law"],
        correctAnswer: "Bernoulli's Principle",
        explanation: "Air moves faster over the curved top of the aerofoil, creating a region of lower pressure compared to the bottom, generating net upward lift."
      },
      {
        question: "Calculate the total equivalent resistance of two 6 Ω resistors connected in parallel.",
        options: ["3 Ω", "12 Ω", "6 Ω", "1.5 Ω"],
        correctAnswer: "3 Ω",
        explanation: "For parallel resistors: 1/R = 1/6 + 1/6 = 2/6 = 1/3, therefore R = 3 Ω."
      }
    ],
    flashcards: [
      { front: "Newton's Second Law Formula", back: "F = ma (Resultant force = mass × acceleration)." },
      { front: "Liquid Pressure Formula", back: "P = hρg (Pressure = depth × fluid density × gravitational acceleration)." },
      { front: "Ohm's Law", back: "V = IR (Potential difference across a conductor is directly proportional to current, provided temperature is constant)." },
      { front: "Conditions for Total Internal Reflection", back: "1. Light travels from denser to less dense medium. 2. Angle of incidence exceeds critical angle (i > c)." }
    ]
  },

  // 5. Pure Sciences - Chemistry (Kimia)
  {
    keywords: ['chemistry', 'kimia', 'acid', 'asid', 'alkali', 'garam', 'salt', 'mole', 'mol', 'periodic table', 'jadual berkala', 'redox', 'carbon compound', 'sebatian karbon', 'rate of reaction', 'kadar tindak balas'],
    title: 'Chemistry (Kimia KSSM SPM)',
    summary: 'Chemistry explores atomic structure, chemical bonds, the mole concept, stoichiometry, acids, bases, salts, redox equilibria, carbon chemistry, thermochemistry, and industrial manufacturing.',
    keyPoints: [
      'The Mole Concept: Number of moles n = mass / molar mass = volume of gas / molar volume (22.4 dm³ at STP, 24 dm³ at room temp) = number of particles / Avogadro constant (6.02 × 10²³). Solution moles: n = MV / 1000.',
      'Periodic Table: Group number = number of valence electrons. Period number = number of electron-filled shells. Group 1 (Alkali metals, reactivity increases down group). Group 17 (Halogens, reactivity decreases down group). Group 18 (Noble gases, inert due to stable octet/duplet).',
      'Chemical Bonds: Ionic bond (transfer of electrons between metal and non-metal, electrostatic attraction). Covalent bond (sharing of electrons between non-metals). Hydrogen bond (H bonded to highly electronegative N, O, or F).',
      'Acids & Bases: Acid produces H⁺ ions in water; alkali produces OH⁻ ions. Strong acid ionizes completely; weak acid ionizes partially. Neutralisation: Acid + Alkali → Salt + Water.',
      'Salts Preparation: All sodium, potassium, and ammonium salts (SPA) and all nitrate salts are soluble. Soluble salts prepared via acid + metal/metal oxide/carbonate or titration. Insoluble salts prepared via Double Decomposition (precipitation).',
      'Rate of Reaction: Rate = change in quantity / time. Collision Theory factors: Temperature, Concentration, Surface area / particle size, Pressure (gases), Catalyst.',
      'Carbon Compounds: Alkanes (C_n H_{2n+2}, saturated), Alkenes (C_n H_{2n}, double bond, unsaturated). Esterification: Alcohol + Carboxylic Acid → Ester + Water (in presence of conc. H₂SO₄).'
    ],
    formulasOrRules: [
      'n = Mass / Molar Mass',
      'n = MV / 1000',
      'n = Volume of Gas / Molar Volume (24 dm³ at r.t.p)',
      'pH = -log[H⁺]',
      'Acid + Alkali → Salt + Water',
      'Alcohol + Carboxylic Acid ⇌ Ester + Water'
    ],
    malaysianContext: 'Vital to Malaysia’s petroleum and petrochemical sector (Petronas Kerteh & Pengerang Integrated Complex), natural rubber processing (vulcanization with sulfur), palm oil oleochemicals and biodiesel production.',
    examTips: [
      'Memorize salt solubilities: all Nitrates soluble, all SPA soluble, Sulfate exceptions (PbSO₄, BaSO₄, CaSO₄), Chloride exceptions (PbCl₂, AgCl, Hg₂Cl₂).',
      'Always balance chemical equations before calculating mole ratios.',
      'In Rate of Reaction collision theory: state that frequency of collisions increases AND frequency of effective collisions increases.'
    ],
    mindmapBranches: [
      {
        label: 'Mole Concept & Stoichiometry',
        subpoints: [
          'n = mass / molar mass',
          'n = MV / 1000 (Solutions)',
          'n = Volume / 24 dm³ (Gas at r.t.p)',
          'Balancing chemical equations & mole ratio'
        ]
      },
      {
        label: 'Acids, Bases & Salts',
        subpoints: [
          'pH scale & strong vs weak ionization',
          'Preparation of soluble salts (Titration vs excess acid)',
          'Double decomposition for insoluble salts (Precipitation)',
          'Qualitative analysis of cations & anions'
        ]
      },
      {
        label: 'Rate of Reaction',
        subpoints: [
          'Collision theory & activation energy (Ea)',
          'Factors: Temp, Conc, Size, Catalyst',
          'Effective collisions and reaction curves'
        ]
      },
      {
        label: 'Carbon Chemistry & Industrial',
        subpoints: [
          'Hydrocarbons: Alkanes vs Alkenes',
          'Alcohols, Carboxylic Acids & Esters',
          'Natural rubber vulcanisation & polymers'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "What is the number of moles of solute in 250 cm³ of 0.2 mol dm⁻³ sodium hydroxide (NaOH) solution?",
        options: ["0.05 mol", "0.5 mol", "0.02 mol", "0.8 mol"],
        correctAnswer: "0.05 mol",
        explanation: "Number of moles n = MV / 1000 = (0.2 × 250) / 1000 = 50 / 1000 = 0.05 mol."
      },
      {
        question: "Which of the following salts is INSOLUBLE in water?",
        options: ["Barium sulphate (BaSO₄)", "Potassium chloride (KCl)", "Sodium nitrate (NaNO₃)", "Ammonium carbonate ((NH₄)₂CO₃)"],
        correctAnswer: "Barium sulphate (BaSO₄)",
        explanation: "Barium sulphate (BaSO₄), lead(II) sulphate (PbSO₄), and calcium sulphate (CaSO₄) are insoluble sulphates."
      },
      {
        question: "What organic compound is formed when ethanol reacts with ethanoic acid in the presence of concentrated sulphuric acid?",
        options: ["Ethyl ethanoate (an ester)", "Ethane (an alkane)", "Ethene (an alkene)", "Ethanal"],
        correctAnswer: "Ethyl ethanoate (an ester)",
        explanation: "Esterification between an alcohol and carboxylic acid produces an ester (ethyl ethanoate) which has a sweet, fruity smell."
      }
    ],
    flashcards: [
      { front: "Formula: Moles from Solution", back: "n = (M × V) / 1000, where M is molarity (mol dm⁻³) and V is volume (cm³)." },
      { front: "Insoluble Chlorides", back: "Lead(II) chloride (PbCl₂ - soluble in hot water) and Silver chloride (AgCl)." },
      { front: "Insoluble Sulphates", back: "Barium sulphate (BaSO₄), Lead(II) sulphate (PbSO₄), Calcium sulphate (CaSO₄)." },
      { front: "Effective Collision", back: "A collision between reactant particles that possesses energy ≥ activation energy (Ea) and in the correct orientation." }
    ]
  },

  // 6. Additional Mathematics (Matematik Tambahan)
  {
    keywords: ['additional mathematics', 'add math', 'matematik tambahan', 'quadratic function', 'fungsi kuadratik', 'differentiation', 'pembezaan', 'integration', 'pengamiran', 'progressions', 'janjang', 'trigonometric', 'trigonometri', 'linear law', 'hukum linear', 'indices and logarithms', 'logaritma'],
    title: 'Additional Mathematics (Matematik Tambahan SPM)',
    summary: 'Additional Mathematics deepens mathematical analysis in advanced algebra, calculus, coordinate geometry, vectors, circular measure, progressions, and probability distributions.',
    keyPoints: [
      'Quadratic Functions: f(x) = ax² + bx + c. Discriminant b² - 4ac: > 0 (two distinct real roots), = 0 (two equal real roots), < 0 (no real roots). Completing the square: a(x - h)² + k gives vertex (h, k).',
      'Indices, Surds & Logarithms: log_a (xy) = log_a x + log_a y, log_a (x/y) = log_a x - log_a y, log_a (xⁿ) = n log_a x. Change of base: log_a b = (log_c b) / (log_c a).',
      'Progressions: Arithmetic Progression (AP): T_n = a + (n - 1)d, S_n = n/2 [2a + (n - 1)d]. Geometric Progression (GP): T_n = arⁿ⁻¹, S_n = a(1 - rⁿ) / (1 - r), S_∞ = a / (1 - r) for |r| < 1.',
      'Linear Law: Convert non-linear relation into linear form Y = mX + c. Plot Y against X where m = gradient and c = Y-intercept.',
      'Differentiation: dy/dx = lim_{δx→0} δy/δx. Power rule: d/dx [axⁿ] = anxⁿ⁻¹. Product rule: d/dx [uv] = u(dv/dx) + v(du/dx). Quotient rule: d/dx [u/v] = (v du/dx - u dv/dx) / v². Chain rule: dy/dx = (dy/du) × (du/dx). Stationary points: dy/dx = 0; d²y/dx² > 0 (minimum), < 0 (maximum).',
      'Integration: ∫ axⁿ dx = [axⁿ⁺¹ / (n + 1)] + C (n ≠ -1). Definite integral gives area under curve: Area = ∫ₐᵇ y dx. Volume of revolution: V = π ∫ₐᵇ y² dx (about x-axis).',
      'Circular Measure: Arc length s = rθ (θ in radians). Sector area A = ½ r² θ.'
    ],
    formulasOrRules: [
      'b² - 4ac (Discriminant test)',
      'T_n = a + (n - 1)d and S_n = n/2 [2a + (n - 1)d]',
      'T_n = arⁿ⁻¹ and S_∞ = a / (1 - r)',
      'd/dx [axⁿ] = anxⁿ⁻¹',
      'Product Rule: u v\' + v u\'',
      'Quotient Rule: (v u\' - u v\') / v²',
      's = rθ and A = ½ r² θ'
    ],
    malaysianContext: 'Essential prerequisite for engineering degrees, actuarial science, financial analysis, computer science, and data modeling in Malaysian universities and industries.',
    examTips: [
      'In Circular Measure, angle θ MUST ALWAYS be expressed in radians, never degrees!',
      'When testing max/min points, always show the second derivative test d²y/dx² explicitly.',
      'In Linear Law, always choose two widely spaced points on your line of best fit to calculate gradient m.'
    ],
    mindmapBranches: [
      {
        label: 'Calculus (Pembezaan & Pengamiran)',
        subpoints: [
          'Differentiation rules: Product, Quotient, Chain rule',
          'Applications: Tangent, normal, turning points, rate of change',
          'Integration: Indefinite, definite, area under curve & volume'
        ]
      },
      {
        label: 'Functions & Algebra',
        subpoints: [
          'Quadratic functions: completing the square & vertex (h, k)',
          'Discriminant b² - 4ac (roots nature)',
          'Indices, surds, and logarithm laws'
        ]
      },
      {
        label: 'Progressions & Linear Law',
        subpoints: [
          'AP: Common difference d, T_n = a + (n-1)d, S_n',
          'GP: Common ratio r, T_n = arⁿ⁻¹, Sum to infinity S_∞',
          'Linear Law: Converting non-linear equations to Y = mX + c'
        ]
      },
      {
        label: 'Geometry & Trigonometry',
        subpoints: [
          'Circular measure: s = rθ, A = ½r²θ (radians only)',
          'Coordinate geometry: parallel & perpendicular m₁m₂ = -1',
          'Trigonometric identities: sin²θ + cos²θ = 1, double angles'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "Find the derivative dy/dx of the function y = (3x² - 5)⁴.",
        options: ["24x(3x² - 5)³", "4(3x² - 5)³", "12x(3x² - 5)³", "6x(3x² - 5)⁴"],
        correctAnswer: "24x(3x² - 5)³",
        explanation: "By chain rule: dy/dx = 4(3x² - 5)³ × d/dx(3x² - 5) = 4(3x² - 5)³ × (6x) = 24x(3x² - 5)³."
      },
      {
        question: "A geometric progression has first term a = 12 and common ratio r = 0.5. Find its sum to infinity S_∞.",
        options: ["24", "18", "6", "16"],
        correctAnswer: "24",
        explanation: "Sum to infinity S_∞ = a / (1 - r) = 12 / (1 - 0.5) = 12 / 0.5 = 24."
      },
      {
        question: "In a circle of radius 6 cm, find the arc length subtended by a central angle of 1.5 radians.",
        options: ["9 cm", "4 cm", "12 cm", "18 cm"],
        correctAnswer: "9 cm",
        explanation: "Using s = rθ: s = 6 cm × 1.5 rad = 9 cm."
      }
    ],
    flashcards: [
      { front: "Arc Length Formula (Circular Measure)", back: "s = rθ, where θ is in radians." },
      { front: "Sector Area Formula", back: "A = ½ r² θ, where θ is in radians." },
      { front: "Sum to Infinity of GP", back: "S_∞ = a / (1 - r), valid only when |r| < 1." },
      { front: "Perpendicular Lines Gradient", back: "m₁ × m₂ = -1 (or m₂ = -1 / m₁)." }
    ]
  },

  // 7. Accounting & Business (Prinsip Perakaunan & Perniagaan)
  {
    keywords: ['perakaunan', 'accounting', 'akaun', 'perniagaan', 'business', 'ekonomi', 'economics', 'imbangan duga', 'lejar', 'kewangan'],
    title: 'Prinsip Perakaunan & Perniagaan (Commerce & Accounts)',
    summary: 'Covers financial accounting systems (Double Entry, Journals, Ledgers, Trial Balance, Final Accounts) and business management (SMART objectives, SWOT analysis, marketing, operations, human resources, and business finance).',
    keyPoints: [
      'Persamaan Perakaunan Asas: Aset = Liabiliti + Ekuiti Pemilik. Persamaan Diperluas: Aset = Liabiliti + Ekuiti Pemilik + (Hasil - Belanja).',
      'Sistem Catatan Bergu (Double Entry): Setiap transaksi direkodkan dalam sekurang-kurangnya dua akaun berasingan—satu akaun Didebitkan dan satu akaun Dikreditkan dengan amaun yang sama.',
      'Kitaran Perakaunan: Dokumen Sumber → Buku Catatan Pertama (Jurnal) → Lejar → Imbangan Duga → Pelarasan → Imbangan Duga Terselaras → Penyata Kewangan → Catatan Penutup.',
      'Penyata Kewangan: 1. Penyata Pendapatan (Akaun Perdagangan untuk Untung Kasar + Akaun Untung Rugi untuk Untung Bersih). 2. Penyata Kedudukan Kewangan (Aset Bukan Semasa, Aset Semasa, Liabiliti Bukan Semasa, Liabiliti Semasa, Ekuiti Pemilik).',
      'Perniagaan: 4 Bentuk Pemilikan (Milikan Tunggal, Perkongsian, Syarikat Sdn Bhd / Bhd, Koperasi). Konsep SMART: Specific, Measurable, Attainable, Realistic, Time-bound. Analisis SWOT: Strengths, Weaknesses, Opportunities, Threats.',
      'Ekonomi: Masalah asas ekonomi (Apa, Berapa, Bagaimana, Untuk siapa dikeluarkan). Kos Lepas (Opportunity Cost): Faedah daripada pilihan kedua terbaik yang terpaksa dilepaskan.'
    ],
    formulasOrRules: [
      'Aset = Liabiliti + Ekuiti Pemilik',
      'Untung Kasar = Jualan Bersih - Kos Jualan',
      'Untung Bersih = Untung Kasar + Hasil - Belanja',
      'Kos Jualan = Inventori Awal + Belian Bersih + Kos Atas Belian - Inventori Akhir',
      'Modal Akhir = Modal Awal + Untung Bersih - Ambilan'
    ],
    malaysianContext: 'Regulated by Suruhanjaya Syarikat Malaysia (SSM), Lembaga Hasil Dalam Negeri (LHDN), and Malaysian Accounting Standards Board (MASB). Drives SME entrepreneurship across Malaysia.',
    examTips: [
      'Remember: "Debit the receiver, credit the giver"; Assets and Expenses increase on Debit, Liabilities, Equity and Revenues increase on Credit.',
      'Imbangan Duga balance DOES NOT guarantee no errors (e.g. error of omission, commission, principle, reversal, compensation still allow trial balance to balance).',
      'In business case studies, always structure SWOT recommendations matching internal strengths to external opportunities.'
    ],
    mindmapBranches: [
      {
        label: 'Persamaan Perakaunan & Catatan Bergu',
        subpoints: [
          'Aset = Liabiliti + Ekuiti Pemilik',
          'Peraturan Debit & Kredit bagi 5 komponen akaun',
          'Aliran: Dokumen sumber → Jurnal → Lejar'
        ]
      },
      {
        label: 'Penyata Kewangan Milikan Tunggal',
        subpoints: [
          'Akaun Perdagangan: Untung Kasar = Jualan Bersih - Kos Jualan',
          'Akaun Untung Rugi: Untung Bersih = Untung Kasar + Hasil - Belanja',
          'Penyata Kedudukan Kewangan: Susun atur Aset & Liabiliti'
        ]
      },
      {
        label: 'Pelarasan Akhir Tempoh',
        subpoints: [
          'Susut nilai terkumpul aset bukan semasa',
          'Peruntukan hutang ragu & hutang lapuk',
          'Hasil belum terima / belum terperoleh, Belanja prabayar / belum bayar'
        ]
      },
      {
        label: 'Pengurusan Perniagaan',
        subpoints: [
          'Bentuk pemilikan: Tunggal, Perkongsian, Syarikat, Koperasi',
          'Objektif SMART & Analisis Matriks SWOT',
          'Fungsian organisasi: Pemasaran, Operasi, Kewangan, Sumber Manusia'
        ]
      }
    ],
    quizQuestions: [
      {
        question: "Jika sesebuah perniagaan mempunyai Aset berjumlah RM80,000 dan Liabiliti berjumlah RM35,000, berapakah nilai Ekuiti Pemiliknya?",
        options: ["RM45,000", "RM115,000", "RM35,000", "RM80,000"],
        correctAnswer: "RM45,000",
        explanation: "Berdasarkan persamaan perakaunan: Ekuiti Pemilik = Aset - Liabiliti = RM80,000 - RM35,000 = RM45,000."
      },
      {
        question: "Manakah antara berikut merupakan kesilapan yang TIDAK menjejaskan keseimbangan Imbangan Duga?",
        options: ["Kesilapan ketinggalan satu urus niaga sepenuhnya", "Kesilapan menjumlahkan baki akaun", "Merekodkan amaun sebelah debit sahaja", "Baki lejar salah dipindahkan ke Imbangan Duga"],
        correctAnswer: "Kesilapan ketinggalan satu urus niaga sepenuhnya",
        explanation: "Kesilapan ketinggalan (error of omission) berlaku apabila urus niaga langsung tidak direkodkan di mana-mana lejar, maka kedua-dua lajur debit dan kredit Imbangan Duga tetap seimbang."
      }
    ],
    flashcards: [
      { front: "Persamaan Perakaunan Asas", back: "Aset = Liabiliti + Ekuiti Pemilik." },
      { front: "Formula Kos Jualan", back: "Inventori Awal + Belian Bersih + Kos atas Belian - Inventori Akhir." },
      { front: "Formula Untung Kasar", back: "Jualan Bersih - Kos Jualan." },
      { front: "Analisis SWOT", back: "S: Strengths (Kekuatan), W: Weaknesses (Kelemahan), O: Opportunities (Peluang), T: Threats (Ancaman)." }
    ]
  }
];

export function findTopicKnowledge(topicOrUnit: string, level?: string, subject?: string): CurriculumTopicPack | null {
  const query = `${topicOrUnit} ${level || ''} ${subject || ''}`.toLowerCase();
  
  // 1. Direct keyword match
  for (const pack of TOPIC_KNOWLEDGE_BASE) {
    for (const kw of pack.keywords) {
      if (query.includes(kw.toLowerCase())) {
        return pack;
      }
    }
  }

  return null;
}

export function generateSynthesizedTextbook(unit: string, level: string, subject: string, language: string): string {
  const pack = findTopicKnowledge(unit, level, subject);
  
  if (pack) {
    return `# ${unit}
*${level || 'Secondary School'} • ${subject || 'KSSM Syllabus'} • StudyLah Master Series*

---

## 1. Unit Overview & Core Concept
${pack.summary}

---

## 2. Key Principles & Curriculum Standards
${pack.keyPoints.map(pt => `- **${pt.split(':')[0]}**: ${pt.split(':').slice(1).join(':') || pt}`).join('\n')}

---

## 3. Standard Formulas, Rules & Processes
${pack.formulasOrRules.length > 0 ? pack.formulasOrRules.map(f => `$$\n${f}\n$$`).join('\n') : '- Master definitions, systematic cause-and-effect steps, and standard curriculum diagrams.'}

---

## 4. Malaysian Real-World Application
${pack.malaysianContext}

---

## 5. SPM & National Exam Mastery Tips
${pack.examTips.map(tip => `- 💡 **Exam Key**: ${tip}`).join('\n')}
`;
  }

  // Graceful structured curriculum summary tailored to topic name
  return `# ${unit}
*${level || 'Secondary School'} • ${subject || 'Curriculum Syllabus'} • Textbook Summary*

---

## 1. Introduction & Learning Standard
In this chapter, **${unit}**, students explore the foundational learning standards stipulated by the Malaysian national curriculum. Mastery of this unit provides the essential prerequisite concepts needed for subsequent advanced topics and national examinations.

---

## 2. Core Concepts & Must-Know Terminology
- **Primary Mechanism**: Understand how the key processes and interactions in **${unit}** function systematically.
- **Scientific & Analytical Precision**: Memorize standardized syllabus terms rather than informal colloquial words to secure full marks in structured questions.
- **Cause-and-Effect Relationships**: Be prepared to explain *why* and *how* phenomena occur step-by-step.

---

## 3. Real-World Applications in Malaysia
- Practical observations in Malaysian biodiversity, modern industries, infrastructure, and daily living.
- Standard school laboratory investigations and empirical procedures conducted under Malaysian syllabus guidelines.

---

## 4. Exam Strategy & Scoring Tips
- **Section A (Objective/MCQ)**: Be careful with tricky distractor options; look out for absolute words like "always" or "never".
- **Section B (Structured)**: Write clear, complete sentences containing recognized keywords from the official marking scheme.
- **Section C (Essay/Problem Solving)**: State the formula/law clearly, substitute given numerical values with correct units, and provide justification.
`;
}

export function generateSynthesizedMindmap(topic: string, level: string, subject: string): MindMapNode {
  const pack = findTopicKnowledge(topic, level, subject);
  if (pack && pack.mindmapBranches.length > 0) {
    return {
      id: 'root',
      label: topic,
      children: pack.mindmapBranches.map((b, i) => ({
        id: `branch-${i + 1}`,
        label: b.label,
        children: b.subpoints.map((sp, j) => ({
          id: `branch-${i + 1}-sub-${j + 1}`,
          label: sp
        }))
      }))
    };
  }

  return {
    id: 'root',
    label: topic,
    children: [
      {
        id: 'branch-1',
        label: '1. Fundamentals & Definitions',
        children: [
          { id: 'b1-1', label: 'Core Principles & Learning Standards' },
          { id: 'b1-2', label: 'Essential Scientific / Analytical Terminology' },
          { id: 'b1-3', label: 'Foundational Rules & Hypotheses' }
        ]
      },
      {
        id: 'branch-2',
        label: '2. Mechanisms & Processes',
        children: [
          { id: 'b2-1', label: 'Step-by-step Systematic Stages' },
          { id: 'b2-2', label: 'Governing Formulas, Laws & Operations' },
          { id: 'b2-3', label: 'Comparison & Contrasting Properties' }
        ]
      },
      {
        id: 'branch-3',
        label: '3. Real-Life Applications',
        children: [
          { id: 'b3-1', label: 'Everyday Malaysian Technologies & Environments' },
          { id: 'b3-2', label: 'Standard Laboratory Experiments & Inquiries' }
        ]
      },
      {
        id: 'branch-4',
        label: '4. SPM & Exam Revision Points',
        children: [
          { id: 'b4-1', label: 'Marking Scheme Keywords to Memorize' },
          { id: 'b4-2', label: 'Common Examiner Pitfalls & Misconceptions' }
        ]
      }
    ]
  };
}

export function generateSynthesizedQuiz(topic: string, level: string, subject: string): QuizQuestion[] {
  const pack = findTopicKnowledge(topic, level, subject);
  if (pack && pack.quizQuestions.length > 0) {
    return pack.quizQuestions;
  }

  return [
    {
      question: `What is the primary learning standard emphasized in ${topic}?`,
      options: [
        "Mastering accurate definitions, core mechanisms, and practical applications",
        "Relying solely on informal guesswork without scientific keywords",
        "Skipping experimental steps and units in structured questions",
        "Focusing exclusively on non-assessed optional sections"
      ],
      correctAnswer: "Mastering accurate definitions, core mechanisms, and practical applications",
      explanation: "Malaysian curriculum standards require students to understand fundamental principles, use precise terminology, and apply knowledge to real situations."
    },
    {
      question: `Which technique yields the highest marks when answering structured questions on ${topic}?`,
      options: [
        "Providing exact syllabus keywords and logical cause-and-effect reasoning",
        "Giving vague general statements without specific terms",
        "Writing lengthy paragraphs that do not address the question command word",
        "Leaving numerical calculations without standard SI units"
      ],
      correctAnswer: "Providing exact syllabus keywords and logical cause-and-effect reasoning",
      explanation: "Official marking schemes award marks for designated keywords, correct formula substitutions, and complete explanations."
    },
    {
      question: `How are concepts in ${topic} applied within the Malaysian context?`,
      options: [
        "Through national industries, local biodiversity, technology, and health systems",
        "They have zero practical relevance outside foreign textbooks",
        "They apply strictly to theoretical models that cannot be tested",
        "They are restricted only to historical non-modern situations"
      ],
      correctAnswer: "Through national industries, local biodiversity, technology, and health systems",
      explanation: "KSSM integrates local real-world examples (such as local industry, green technology, and natural heritage) into every learning standard."
    }
  ];
}

export function generateSynthesizedFlashcards(topic: string, level: string, subject: string): Flashcard[] {
  const pack = findTopicKnowledge(topic, level, subject);
  if (pack && pack.flashcards.length > 0) {
    return pack.flashcards;
  }

  return [
    {
      front: `Core Definition: ${topic}`,
      back: `A central learning standard in the ${level} ${subject} syllabus covering fundamental principles, mechanisms, and key definitions.`
    },
    {
      front: `Key Exam Keyword Rule for ${topic}`,
      back: `Always include standardized scientific/mathematical terminology specified in the curriculum marking scheme.`
    },
    {
      front: `Common Examination Pitfall in ${topic}`,
      back: `Writing vague colloquial descriptions instead of precise, accredited curriculum terms.`
    },
    {
      front: `Problem-Solving Strategy for ${topic}`,
      back: `1. Identify given variables. 2. Recall governing formula or principle. 3. Show step-by-step working with units.`
    }
  ];
}
