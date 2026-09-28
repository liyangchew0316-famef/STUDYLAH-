import { MindMapNode, QuizQuestion, Flashcard } from '../services/gemini';

export interface PreGeneratedUnitPack {
  level: string;
  subject: string;
  units: string[];
}

export interface PreGeneratedStudyMaterial {
  level: string;
  subject: string;
  unit: string;
  language: string;
  mindmap: MindMapNode;
  textbook: string;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
}

// 1. Comprehensive KSSM Syllabus Chapter lists strictly for Form 1 (Tingkatan 1) across all 11 Subjects
export const PREGENERATED_UNITS: PreGeneratedUnitPack[] = [
  // ==================== SCIENCE / SAINS (FORM 1) - 9 Bab ====================
  {
    level: 'Form 1',
    subject: 'Science',
    units: [
      'Unit 1: Introduction to Scientific Investigation & Laboratory Safety',
      'Unit 2: Cell as the Basic Unit of Life & Cell Organization',
      'Unit 3: Coordination and Response & Homeostasis in Living Things',
      'Unit 4: Reproduction in Plants and Animals',
      'Unit 5: Matter, States of Matter & Physical Properties',
      'Unit 6: Periodic Table, Atoms, Elements, Compounds and Mixtures',
      'Unit 7: Air, Composition of Atmosphere, Oxygen & Combustion',
      'Unit 8: Light, Reflection, Refraction, Dispersion & Optical Instruments',
      'Unit 9: Earth, Geological Cycles, Structure of Earth & Mineral Resources'
    ]
  },

  // ==================== MATHEMATICS / MATEMATIK (FORM 1) - 13 Bab ====================
  {
    level: 'Form 1',
    subject: 'Mathematics',
    units: [
      'Unit 1: Rational Numbers, Integers, Fractions and Decimals',
      'Unit 2: Factors and Multiples, Prime Factors, HCF & LCM',
      'Unit 3: Squares, Square Roots, Cubes and Cube Roots',
      'Unit 4: Ratios, Rates and Proportions',
      'Unit 5: Algebraic Expressions, Terms and Coefficients',
      'Unit 6: Linear Equations in One Variable & Simultaneous Linear Equations',
      'Unit 7: Linear Inequalities in One Variable',
      'Unit 8: Lines and Angles, Transversals & Parallel Lines',
      'Unit 9: Basic Polygons, Triangles, Quadrilaterals & Symmetry',
      'Unit 10: Perimeter and Area of Plane Figures',
      'Unit 11: Introduction to Set, Subsets and Venn Diagrams',
      'Unit 12: Data Handling, Bar Charts, Pie Charts, Histograms & Stem-and-Leaf',
      'Unit 13: The Pythagoras Theorem and Its Converse'
    ]
  },

  // ==================== HISTORY / SEJARAH (FORM 1) - 8 Bab ====================
  {
    level: 'Form 1',
    subject: 'History',
    units: [
      'Unit 1: Mengenali Sejarah, Konsep, Sumber dan Kaedah Penyelidikan',
      'Unit 2: Zaman Air Batu, Garis Masa & Perubahan Bentuk Muka Bumi',
      'Unit 3: Zaman Prasejarah di Asia Tenggara dan Malaysia (Paleolitik, Mesolitik, Neolitik, Logam)',
      'Unit 4: Mengenali Tamadun Awal Dunia (Mesopotamia, Mesir Purba, Lembah Indus, Lembah Huang He)',
      'Unit 5: Tamadun Awal Dunia dan Sumbangannya kepada Peradaban Manusia',
      'Unit 6: Peningkatan Tamadun Yunani dan Rom (Pemerintahan, Undang-undang, Senibina)',
      'Unit 7: Peningkatan Tamadun India dan China (Perluasan Kuasa, Agama, Falsafah, Peperiksaan Awam)',
      'Unit 8: Tamadun Islam dan Perkembangannya di Makkah & Madinah (Kerasulan & Khulafa ar-Rasyidin)'
    ]
  },

  // ==================== GEOGRAPHY / GEOGRAFI (FORM 1) - 14 Units (13 Bab + Kerja Lapangan) ====================
  {
    level: 'Form 1',
    subject: 'Geography',
    units: [
      'Unit 1: Bab 1 - Arah Mata Angin dan Bearing Sudutan',
      'Unit 2: Bab 2 - Kedudukan Titik Koordinat, Latitud, Longitud dan Kedudukan Relatif',
      'Unit 3: Bab 3 - Peta Lakar, Ciri-ciri dan Simbol-simbol Geografi',
      'Unit 4: Bab 4 - Lakaran Peta Malaysia, Negeri-negeri dan Pusat Pentadbiran',
      'Unit 5: Bab 5 - Bumi, Sistem Fizikal, Struktur Lapisan dan Kesan Pergerakan Kerak Bumi',
      'Unit 6: Bab 6 - Bentuk Muka Bumi di Malaysia (Gunung, Dataran, Pinggir Laut & Kepentingannya)',
      'Unit 7: Bab 7 - Saliran, Peringkat Aliran Sungai dan Tasik Utama di Malaysia',
      'Unit 8: Bab 8 - Penduduk di Malaysia, Taburan dan Faktor yang Mempengaruhi Taburan',
      'Unit 9: Bab 9 - Petempatan di Malaysia (Jenis, Pola dan Fungsi Bandar / Luar Bandar)',
      'Unit 10: Bab 10 - Bentuk Muka Bumi dan Saliran di Asia Tenggara',
      'Unit 11: Bab 11 - Penduduk dan Petempatan Bandar Utama di Asia Tenggara',
      'Unit 12: Bab 12 - Sumber Air (Jenis Sumber Air, Punca & Kesan Krisis Air di Malaysia serta Langkah Mengatasinya)',
      'Unit 13: Bab 13 - Sisa Domestik (Jenis Sisa Domestik, Kesan Pembuangan dan Amalan 3R Mesra Alam)',
      'Unit 14: Bab 14 - Panduan Kerja Lapangan Geografi (Kaedah Kajian, Pengumpulan Data & Penulisan Laporan)'
    ]
  },

  // ==================== BAHASA MELAYU (FORM 1) - 20 Units (18 Tema + Tatabahasa + KOMSAS) ====================
  {
    level: 'Form 1',
    subject: 'Bahasa Melayu',
    units: [
      'Tema 1: Amalan Gaya Hidup Sihat dan Kebersihan Diri',
      'Tema 2: Beringat Supaya Selamat (Keselamatan Jalan Raya & Kediaman)',
      'Tema 3: Cahaya Perpaduan dan Keharmonian Bangsa',
      'Tema 4: Seni Bersendikan Budaya dan Warisan Tradisional',
      'Tema 5: Jati Diri dan Semangat Kewarganegaraan',
      'Tema 6: Sains, Teknologi dan Inovasi dalam Kehidupan Harian',
      'Tema 7: Demi Kedamaian (Keselamatan Siber dan Keharmonian)',
      'Tema 8: Sektor Pertanian Pesat Membangun (Pertanian Satu Perniagaan)',
      'Tema 9: Ekonomi Berhemat dan Celik Kewangan',
      'Tema 10: Pelancongan Menjana Ekonomi Negara (Agropelancongan & Ekopelancongan)',
      'Tema 11: Sejarah dan Warisan Bangsa (Menghargai Peninggalan Sejarah)',
      'Tema 12: Sukan dan Rekreasi (Jasmani Cergas, Rohani Sejahtera)',
      'Tema 13: Pengantarabangsaan Industri Negara & Usahawan Berwibawa',
      'Tema 14: Wadah Ilmu (Pendidikan Bestari Negara Lestari)',
      'Tema 15: Bahasa dan Kesusasteraan (Bahasa Disulam Sastera Dianyam)',
      'Tema 16: Kerjaya Impian dan Rentak Kejayaan',
      'Tema 17: Integriti Tonggak Kesejahteraan Diri dan Masyarakat',
      'Tema 18: Pentadbiran dan Politik (Nilai Demokrasi & Patriotisme)',
      'Unit 19: Tatabahasa KSSM (Golongan Kata: Kata Nama, Kata Kerja, Kata Adjektif, Kata Tugas & Pembentukan Ayat)',
      'Unit 20: KOMSAS Tingkatan 1 (Antologi Ku Ingin Berterima Kasih & Novel Destinasi Impian)'
    ]
  },

  // ==================== ENGLISH (FORM 1) - 11 Units (Starter + 9 Units + Literature + Grammar) ====================
  {
    level: 'Form 1',
    subject: 'English',
    units: [
      'Starter Unit: Welcome & Integrated Skills (Personal Profiles, Routines & Classroom Language)',
      'Unit 1: What Do You Like? Hobbies, Free Time & Routines (Present Simple & Continuous)',
      'Unit 2: Fact or Fiction? Storytelling, Genres & Creative Writing (Past Simple: was/were/could)',
      'Unit 3: Wild Weather & Natural Disasters Around the World (Past Continuous & Past Simple)',
      'Unit 4: Life on Earth, Geography, Landscapes & Animal Protection (Comparatives & Superlatives)',
      'Unit 5: Let’s Experiment! Science, Inventions & Daily Technology (Will / Won\'t, First Conditional)',
      'Unit 6: Money & Financial Literacy for Teenagers (Be Going To, Present Continuous for Future)',
      'Unit 7: Journeys and Travel, Malaysian Heritage & Global Cultures (Transport, Must / Musn\'t)',
      'Unit 8: Good Luck, Bad Luck, Traditions and Beliefs (Indefinite Pronouns, Should / Shouldn\'t)',
      'Unit 9: Take Care! Health, Hygiene & Mental Well-being (Expressing Sympathy, Suggestions)',
      'Unit 10: Literature Component (Poems: News Break, Sad I Ams; Short Story: Fair\'s Fair; Graphic Novels)',
      'Unit 11: Grammar & Writing Mastery (Sentence Structures, Guided Writing & Continuous Essays)'
    ]
  },

  // ==================== CHINESE / 华文 (FORM 1) - 11 Units (10 单元 + 附录) ====================
  {
    level: 'Form 1',
    subject: 'Chinese',
    units: [
      '第一单元：成长的足迹（《捅马蜂窝》、童年经历与成长蜕变）',
      '第二单元：学习之乐（求知求真、读书方法与勤奋刻苦）',
      '第三单元：父母的爱（血浓于水、家庭孝道与感恩之情）',
      '第四单元：故事里的智慧（民间传说、历史典故与寓言哲理）',
      '第五单元：人间有温情（《桃园三结义》、《破瓮救友》、关爱互助）',
      '第六单元：遇见动植物（自然生态、动物习性与观察感悟）',
      '第七单元：文言文与古典诗词（浅易文言、寓言成语与唐宋诗词鉴赏）',
      '第八单元：阅读名人（杰出人物传记、奋斗历程与坚毅精神）',
      '第九单元：传统与味蕾（中华民俗节日、年俗食文化与传统传承）',
      '第十单元：与自然共存（环境保护、生态平衡与人与自然和谐）',
      '附录：应用文与名著导读（公函与通告标准格式、《西游记》精选导读）'
    ]
  },

  // ==================== ASAS SAINS KOMPUTER / ASK (FORM 1) - 6 Units ====================
  {
    level: 'Form 1',
    subject: 'ASK',
    units: [
      'Bab 1: Konsep Asas Pemikiran Komputasional (Dekomposisi, Pengecaman Corak, Peniskalaan & Pengitlakan)',
      'Bab 2.1: Perwakilan Data - Sistem Nombor Perduaan, Nombor Perlapanan & Kod Piawai ASCII',
      'Bab 2.2: Ukuran Data - Audio Digital, Imej Digital, Kedalaman Warna dan Resolusi',
      'Bab 3: Algoritma - Pembangunan Algoritma, Pseudokod, Carta Alir Struktur Kawalan Pilihan & Ulangan',
      'Bab 4.1: Kod Arahan - Asas Pengaturcaraan Python, Pemboleh Ubah, Operator & Struktur Kawalan',
      'Bab 4.2: Kod Arahan HTML - Papan Cerita, Tag HTML, Teks, Format, Banner, Pautan & Imej'
    ]
  },

  // ==================== REKA BENTUK DAN TEKNOLOGI / RBT (FORM 1) - 6 Units ====================
  {
    level: 'Form 1',
    subject: 'RBT',
    units: [
      'Bab 1: Pengenalan kepada Reka Bentuk dan Teknologi (Elemen & Prinsip Reka Bentuk, Invensi & Inovasi)',
      'Bab 2: Pengurusan Projek (Penetapan Skop, Jadual Kerja dan Anggaran Kos Projek SMART)',
      'Bab 3: Proses Reka Bentuk (Projek Brief, Borang Kriteria & Analisis Maklumat)',
      'Bab 4: Lakaran (Lakaran Piktorial, Oblik, Isometrik & Perspektif 1, 2, 3 Titik)',
      'Bab 5.1: Aplikasi Teknologi - Reka Bentuk Sistem Fertigasi (Komponen, Lakaran & Penilaian)',
      'Bab 5.2: Aplikasi Teknologi - Reka Bentuk Fesyen (Fabrik, Alatan Memotong, Teknik Cantuman & Mock-up)'
    ]
  },

  // ==================== PENDIDIKAN MORAL (FORM 1) - 17 Units (4 Bidang KSSM) ====================
  {
    level: 'Form 1',
    subject: 'Pendidikan Moral',
    units: [
      'Unit 1: Kenali Moral (Konsep Baik, Benar dan Patut)',
      'Unit 2: Insan Bermoral Pilihan Hidup (Ciri-ciri Individu Berakhlak Mulia)',
      'Unit 3: Hidup Bermoral Pemangkin Kesejahteraan Diri dan Masyarakat',
      'Unit 4: Hidup Beragama atau Berkepercayaan Membawa Berkat',
      'Unit 5: Serlahkan Potensi Diri (Mengenal Pasti Bakat dan Kelebihan Diri)',
      'Unit 6: Hubungan Mesra Keluarga Bahagia (Tanggungjawab Terhadap Ibu Bapa)',
      'Unit 7: Bijaksana Memilih Sahabat (Ciri-ciri Sahabat Sejati)',
      'Unit 8: Warga Prihatin Sekolah Sejahtera (Menghormati Guru & Warga Sekolah)',
      'Unit 9: Keselamatan Tempat Tinggal Tanggungjawab Bersama (Kejiranan & Rukun Tetangga)',
      'Unit 10: Kemudahan Awam Dijaga Bersama (Menghargai dan Memelihara Harta Awam)',
      'Unit 11: Masyarakat Prihatin Alam Terpelihara (Amalan 5R dan Pemeliharaan Ekosistem)',
      'Unit 12: Remaja Berhemah Harapan Negara (Sikap Positif & Jati Diri Remaja)',
      'Unit 13: Patuhi Etiket Keluarga Harmoni (Adab dan Kesopanan dalam Keluarga)',
      'Unit 14: Hindari Ketagihan Hidup Sejahtera (Bahaya Ketagihan Rokok, Dadah & Gajet)',
      'Unit 15: Patuhi Peraturan Sekolah (Disiplin Murid dan Budaya Hormat-Menghormati)',
      'Unit 16: Kenali Hak Kanak-kanak (Hak Perlindungan, Perkembangan & Penyertaan)',
      'Unit 17: Rasuah Musuh Negara (Integriti dan Menolak Sebarang Bentuk Amalan Rasuah)'
    ]
  },

  // ==================== PENDIDIKAN ISLAM (FORM 1) - 6 Bidang KSSM ====================
  {
    level: 'Form 1',
    subject: 'Pendidikan Islam',
    units: [
      'Bidang 1: Al-Quran (Tilawah, Tajwid Asas, Kefahaman Surah Al-Baqarah & Al-Fatihah, Mukmin Bertaqwa)',
      'Bidang 2: Hadis (Hadis Sumber Hukum, Ikhlas dalam Kehidupan, Jihad dalam Islam)',
      'Bidang 3: Akidah (Islam Agama Fitrah, Rukun Iman & Islam, Asmaul Husna: Al-Khaliq & Al-Musawwir)',
      'Bidang 4: Fikah (Taharah Asas Kebersihan, Istinjak, Wuduk, Mandi Wajib, Solat Mercu Kejayaan)',
      'Bidang 5: Sirah dan Tamadun Islam (Masyarakat Jahiliah, Riwayat Hidup Nabi Muhammad SAW, Khulafa ar-Rasyidin)',
      'Bidang 6: Akhlak Islamiah (Akhlak Terpuji, Amanah, Menuntut Ilmu, Menjaga Maruah Diri)'
    ]
  }
];

// Helper to look up official KSSM syllabus pack with flexible aliases
export function findSyllabusPack(level?: string, subject?: string): PreGeneratedUnitPack | null {
  const normLevel = (level || 'Form 1').trim().toLowerCase();
  const rawSub = (subject || '').trim().toLowerCase();

  // 1. Direct match
  const direct = PREGENERATED_UNITS.find(
    p => p.level.toLowerCase() === normLevel && p.subject.toLowerCase() === rawSub
  );
  if (direct) return direct;

  // 2. Multilingual / Malay / English alias lookup
  const ALIASES: Record<string, string> = {
    'sejarah': 'History',
    'sains': 'Science',
    'matematik': 'Mathematics',
    'math': 'Mathematics',
    'maths': 'Mathematics',
    'geografi': 'Geography',
    'geo': 'Geography',
    'bm': 'Bahasa Melayu',
    'melayu': 'Bahasa Melayu',
    'bahasa malaysia': 'Bahasa Melayu',
    'bi': 'English',
    'english language': 'English',
    'bahasa inggeris': 'English',
    'asas sains komputer': 'ASK',
    'sains komputer': 'ASK',
    'reka bentuk dan teknologi': 'RBT',
    'reka bentuk': 'RBT',
    'moral': 'Pendidikan Moral',
    'pendidikan moral': 'Pendidikan Moral',
    'islam': 'Pendidikan Islam',
    'pendidikan islam': 'Pendidikan Islam',
    'pai': 'Pendidikan Islam',
    'cina': 'Chinese',
    'bahasa cina': 'Chinese',
    'mandarin': 'Chinese',
    '华文': 'Chinese',
    '中文': 'Chinese'
  };

  const canonicalName = ALIASES[rawSub];
  if (canonicalName) {
    const aliasMatch = PREGENERATED_UNITS.find(
      p => p.level.toLowerCase() === normLevel && p.subject.toLowerCase() === canonicalName.toLowerCase()
    );
    if (aliasMatch) return aliasMatch;
  }

  // 3. Substring match
  const partial = PREGENERATED_UNITS.find(
    p => p.level.toLowerCase() === normLevel && (p.subject.toLowerCase().includes(rawSub) || rawSub.includes(p.subject.toLowerCase()))
  );
  if (partial) return partial;

  return null;
}

// Helper to strip unit prefixes
export function cleanUnitTitle(u: string): string {
  return (u || '').replace(/^(?:Unit\s*\d+|Bab\s*\d+|Tema\s*\d+|第[一二三四五六七八九十]+单元)[：:\s-]*/i, '').trim();
}

// 2. High-Yield Pre-Generated Study Suites for Form 1 Core Units
export const PREGENERATED_STUDY_MATERIALS: PreGeneratedStudyMaterial[] = [
  // Form 1 Science - Unit 1: Introduction to Scientific Investigation
  {
    level: 'Form 1',
    subject: 'Science',
    unit: 'Unit 1: Introduction to Scientific Investigation & Laboratory Safety',
    language: 'BM + English',
    mindmap: {
      id: "root",
      label: "Scientific Investigation & Lab Safety (Sains T1)",
      children: [
        {
          id: "1",
          label: "What is Science?",
          children: [
            { id: "1-1", label: "Natural phenomena (solar eclipse, plant growth)" },
            { id: "1-2", label: "Fields of Science: Biology, Chemistry, Physics, Geology, Astronomy" },
            { id: "1-3", label: "Careers: Doctor, Botanist, Chemical Engineer, Geologist" }
          ]
        },
        {
          id: "2",
          label: "Laboratory Safety & Rules",
          children: [
            { id: "2-1", label: "Hazard symbols: Flammable, Toxic, Corrosive, Explosive, Radioactive" },
            { id: "2-2", label: "Safety equipment: Fume chamber, Eye wash, Fire blanket, Fire extinguisher" },
            { id: "2-3", label: "Accident steps: Inform teacher immediately, rinse with water" }
          ]
        },
        {
          id: "3",
          label: "Physical Quantities & SI Units",
          children: [
            { id: "3-1", label: "Length (metre, m) & Mass (kilogram, kg)" },
            { id: "3-2", label: "Time (second, s) & Temperature (Kelvin, K)" },
            { id: "3-3", label: "Electric Current (ampere, A)" }
          ]
        },
        {
          id: "4",
          label: "Measuring Instruments & Errors",
          children: [
            { id: "4-1", label: "Vernier Calliper (accuracy: 0.01 cm / 0.1 mm)" },
            { id: "4-2", label: "Micrometer Screw Gauge (accuracy: 0.01 mm / 0.001 cm)" },
            { id: "4-3", label: "Zero error: Positive vs Negative error calibration" },
            { id: "4-4", label: "Parallax error: Eye must be perpendicular to reading scale" }
          ]
        },
        {
          id: "5",
          label: "Scientific Method Steps",
          children: [
            { id: "5-1", label: "1. Identify problem & Form hypothesis" },
            { id: "5-2", label: "2. Control variables (Manipulated, Responding, Constant)" },
            { id: "5-3", label: "3. Plan & conduct experiment, collect data" },
            { id: "5-4", label: "4. Analyze data & Draw conclusion" }
          ]
        }
      ]
    },
    textbook: `# Chapter 1: Introduction to Scientific Investigation
*Form 1 • KSSM Science (Sains Tingkatan 1)*

---

### 1.1 Science is Part of Daily Life
Science is the systematic study of nature and how it affects us and our environment. 
- **Natural Phenomena**: Rainbow formation, earthquakes, rusting of iron, seed germination.
- **Science Careers**: 
  - *Biology*: Doctor, Zoologist, Marine Biologist
  - *Physics*: Astronomer, Pilot, Engineer
  - *Chemistry*: Pharmacist, Biochemist, Forensic Scientist

---

### 1.2 Your Science Laboratory
The science laboratory contains chemicals, gas supplies, and fragile glassware. Strict safety precautions must be maintained:
1. **Never** eat, drink, or taste chemicals.
2. **Never** run or play inside the lab.
3. Wear laboratory coat and safety goggles when heating or mixing acids.
4. **Hazard Symbols**:
   - **Corrosive (Menghakis)**: Concentrated acids and alkalis that burn skin.
   - **Flammable (Mudah Terbakar)**: Alcohol, petrol, acetone. Keep far away from naked Bunsen flames.
   - **Toxic / Poisonous (Beracun)**: Mercury, chloroform. Never inhale.
   - **Explosive (Mudah Meletup)**: Sodium, potassium in contact with water.

---

### 1.3 Physical Quantities and Their SI Units
Scientists throughout the world use standard International System of Units (SI Units):
- Length (Panjang): metre (m)
- Mass (Jisim): kilogram (kg)
- Time (Masa): second (s)
- Temperature (Suhu): Kelvin (K)
- Electric Current (Arus Elektrik): ampere (A)

---

### 1.4 Measuring Instruments & Accuracy
- **Vernier Calliper**: Measures internal diameter, external diameter, and depth with accuracy of 0.01 cm.
- **Micrometer Screw Gauge**: Measures thin wires and paper thickness with precision of 0.01 mm.
- **Avoiding Errors**:
  - *Parallax Error*: Occurs when the observer's eye is not perpendicular to the scale.
  - *Zero Error*: Adjust for positive zero error by subtracting, and negative zero error by adding.
`,
    quiz: [
      {
        question: "What is the standard SI unit and symbol for temperature in the KSSM Science curriculum?",
        options: ["Kelvin (K)", "Degree Celsius (°C)", "Fahrenheit (°F)", "Joule (J)"],
        correctAnswer: "Kelvin (K)",
        explanation: "While °C is common daily, Kelvin (K) is the official base SI unit for thermodynamic temperature."
      },
      {
        question: "Which measuring instrument offers an accuracy of 0.01 mm, suitable for measuring the thickness of a single strand of hair?",
        options: ["Micrometer screw gauge", "Vernier calliper", "Metre rule", "Measuring tape"],
        correctAnswer: "Micrometer screw gauge",
        explanation: "A micrometer screw gauge has an accuracy of 0.01 mm, whereas a vernier calliper has an accuracy of 0.1 mm (0.01 cm)."
      },
      {
        question: "How should an observer position their eyes when taking a reading to eliminate parallax error?",
        options: [
          "Directly perpendicular (at an angle of 90°) to the scale reading",
          "Slightly above the meniscus line",
          "At an oblique angle from the right side",
          "From any angle as long as lighting is bright"
        ],
        correctAnswer: "Directly perpendicular (at an angle of 90°) to the scale reading",
        explanation: "Parallax error is eliminated when the line of sight is precisely perpendicular to the scale."
      },
      {
        question: "If a chemical bottle displays a symbol with a fire flame, what safety precaution must be taken?",
        options: [
          "Keep it strictly away from naked flames, heat sources, and sparks",
          "Wash it down the sink with hot boiling water",
          "Heat it strongly in an open test tube",
          "Mix it directly with concentrated acid"
        ],
        correctAnswer: "Keep it strictly away from naked flames, heat sources, and sparks",
        explanation: "The flame symbol indicates a flammable substance that vaporizes and catches fire easily."
      }
    ],
    flashcards: [
      { front: "Base SI Unit for Mass", back: "Kilogram (kg)" },
      { front: "Base SI Unit for Temperature", back: "Kelvin (K)" },
      { front: "Accuracy of Vernier Calliper", back: "0.01 cm (0.1 mm)" },
      { front: "Accuracy of Micrometer Screw Gauge", back: "0.01 mm (0.001 cm)" },
      { front: "Manipulated Variable (Pemboleh ubah dimanipulasi)", back: "The factor that is intentionally changed/tested in an experiment." },
      { front: "Responding Variable (Pemboleh ubah bergerak balas)", back: "The factor that is observed and measured as a result of the experiment." }
    ]
  },

  // Form 1 Science - Unit 2: Cell as the Basic Unit of Life
  {
    level: 'Form 1',
    subject: 'Science',
    unit: 'Unit 2: Cell as the Basic Unit of Life & Cell Organization',
    language: 'BM + English',
    mindmap: {
      id: "root",
      label: "Cell as Unit of Life (Sains T1)",
      children: [
        {
          id: "1",
          label: "What is a Cell?",
          children: [
            { id: "1-1", label: "Microscopic building block of all living organisms" },
            { id: "1-2", label: "Unicellular: Amoeba, Paramecium, Chlamydomonas, Euglena" },
            { id: "1-3", label: "Multicellular: Humans, Animals, Plants, Spirogyra, Mucor" }
          ]
        },
        {
          id: "2",
          label: "Animal Cell vs Plant Cell",
          children: [
            { id: "2-1", label: "Common: Nucleus, Cytoplasm, Cell membrane, Mitochondria" },
            { id: "2-2", label: "Plant Only: Cellulose Cell Wall (shape), Chloroplast (chlorophyll), Large Central Vacuole" },
            { id: "2-3", label: "Nucleus: Controls cell activities, stores genetic DNA" }
          ]
        },
        {
          id: "3",
          label: "Cell Organization Hierarchy",
          children: [
            { id: "3-1", label: "Cell (Epithelial cell)" },
            { id: "3-2", label: "Tissue (Epithelial tissue)" },
            { id: "3-3", label: "Organ (Stomach, Heart, Kidney)" },
            { id: "3-4", label: "System (Digestive, Circulatory, Excretory)" },
            { id: "3-5", label: "Organism (Human, Plant)" }
          ]
        },
        {
          id: "4",
          label: "Photosynthesis vs Respiration",
          children: [
            { id: "4-1", label: "Respiration: Glucose + Oxygen -> Carbon Dioxide + Water + Energy (Mitochondria)" },
            { id: "4-2", label: "Photosynthesis: Carbon Dioxide + Water + Light -> Glucose + Oxygen (Chloroplast)" }
          ]
        }
      ]
    },
    textbook: `# Chapter 2: Cell as the Basic Unit of Life
*Form 1 • KSSM Science (Sains Tingkatan 1)*

---

### 2.1 What is a Cell?
A cell is the basic structural and functional unit of all living organisms.
- **Unicellular Organisms**: Composed of only ONE cell that performs all life processes.
  - *Examples*: Amoeba, Paramecium, Euglena, Chlamydomonas.
- **Multicellular Organisms**: Composed of more than one cell that coordinate and specialize.
  - *Examples*: Humans, cats, hibiscus plant, Hydra, Spirogyra.

---

### 2.2 Structures of Animal and Plant Cells
Both cells share common organelles, but plant cells possess unique rigid structures:
- **Nucleus**: Controls all cellular activities; contains chromosomes/DNA. Present in animal and plant cells.
- **Cytoplasm**: Jelly-like medium where biochemical reactions occur. Present in animal and plant cells.
- **Cell Membrane**: Selectively permeable barrier controlling transport. Present in animal and plant cells.
- **Mitochondria**: Cellular powerhouse generating energy (ATP). Present in animal and plant cells.
- **Cell Wall**: Made of cellulose; provides fixed rigid shape. Only in plant cells.
- **Chloroplast**: Contains chlorophyll for photosynthesis. Only in plant cells.
- **Large Vacuole**: Stores cell sap; maintains turgidity. Only in plant cells.

---

### 2.3 Cellular Organization in the Human Body
Specialized cells group together in an ordered hierarchy:
Cell -> Tissue -> Organ -> System -> Organism
`,
    quiz: [
      {
        question: "Which of the following structures is found ONLY in plant cells and responsible for providing a fixed rigid shape?",
        options: ["Cellulose cell wall", "Cell membrane", "Cytoplasm", "Mitochondria"],
        correctAnswer: "Cellulose cell wall",
        explanation: "The cell wall made of cellulose gives plant cells support and a fixed shape. Animal cells only possess a flexible cell membrane."
      },
      {
        question: "What is the primary role of the nucleus inside a eukaryotic cell?",
        options: [
          "Controls all cellular activities and carries genetic hereditary material (DNA)",
          "Generates energy by burning glucose during respiration",
          "Controls the entry and exit of dissolved mineral salts",
          "Synthesizes chlorophyll for light absorption"
        ],
        correctAnswer: "Controls all cellular activities and carries genetic hereditary material (DNA)",
        explanation: "The nucleus is the master control center that contains chromosomes and directs protein synthesis."
      },
      {
        question: "Which organism is classified as unicellular in Form 1 Science?",
        options: ["Amoeba sp.", "Hydra sp.", "Spirogyra sp.", "Earthworm"],
        correctAnswer: "Amoeba sp.",
        explanation: "Amoeba and Paramecium are single-celled protozoa that perform feeding, movement, and reproduction independently."
      },
      {
        question: "What is the correct hierarchical order of organization in multicellular organisms?",
        options: [
          "Cell -> Tissue -> Organ -> System -> Organism",
          "Organism -> System -> Tissue -> Organ -> Cell",
          "Cell -> Organ -> Tissue -> System -> Organism",
          "Tissue -> Cell -> Organ -> System -> Organism"
        ],
        correctAnswer: "Cell -> Tissue -> Organ -> System -> Organism",
        explanation: "Cells group to form tissues; tissues form organs; organs form systems; systems constitute the organism."
      }
    ],
    flashcards: [
      { front: "Mitochondria function", back: "Cellular powerhouse that produces energy through cellular respiration." },
      { front: "Chloroplast function", back: "Traps sunlight using green chlorophyll to carry out photosynthesis." },
      { front: "Cell wall composition", back: "Rigid cellulose fibers that provide support and protection to plant cells." },
      { front: "Unicellular examples", back: "Amoeba, Paramecium, Euglena, Chlamydomonas." },
      { front: "Hierarchical sequence of life", back: "Cell -> Tissue -> Organ -> System -> Organism" },
      { front: "Cell membrane characteristic", back: "Partially / selectively permeable barrier controlling substance transport." }
    ]
  },

  // Form 1 Mathematics - Unit 1: Rational Numbers
  {
    level: 'Form 1',
    subject: 'Mathematics',
    unit: 'Unit 1: Rational Numbers, Integers, Fractions and Decimals',
    language: 'English',
    mindmap: {
      id: "root",
      label: "Rational Numbers & Integers (Maths T1)",
      children: [
        {
          id: "1",
          label: "Integers (Integer)",
          children: [
            { id: "1-1", label: "Positive integers: +1, +2, +3..." },
            { id: "1-2", label: "Zero (0): neither positive nor negative" },
            { id: "1-3", label: "Negative integers: -1, -2, -3..." },
            { id: "1-4", label: "Number line representation & Comparison (<, >)" }
          ]
        },
        {
          id: "2",
          label: "Operations on Integers",
          children: [
            { id: "2-1", label: "Addition & Subtraction rules" },
            { id: "2-2", label: "Multiplication rules: (+) x (+) = (+), (-) x (-) = (+), (+) x (-) = (-)" },
            { id: "2-3", label: "BODMAS rule: Brackets, Order, Division, Multiplication, Addition, Subtraction" }
          ]
        },
        {
          id: "3",
          label: "Basic Law of Arithmetic",
          children: [
            { id: "3-1", label: "Commutative: a + b = b + a, a x b = b x a" },
            { id: "3-2", label: "Associative: (a + b) + c = a + (b + c)" },
            { id: "3-3", label: "Distributive: a x (b + c) = ab + ac" }
          ]
        },
        {
          id: "4",
          label: "Rational Numbers (p/q)",
          children: [
            { id: "4-1", label: "Definition: Can be written as p/q where q ≠ 0" },
            { id: "4-2", label: "Positive & Negative Fractions" },
            { id: "4-3", label: "Positive & Negative Decimals" }
          ]
        }
      ]
    },
    textbook: `# Chapter 1: Rational Numbers (Nombor Nisbah)
*Form 1 • KSSM Mathematics (Matematik Tingkatan 1)*

---

### 1.1 Integers
- **Integers** are whole numbers that include positive numbers, negative numbers, and zero.
- Fractions (e.g., 1/2) and decimals (e.g., 0.75) are **not** integers.
- On a horizontal number line:
  - Numbers to the **right** of 0 are positive (+).
  - Numbers to the **left** of 0 are negative (-).
  - Any number to the right is always **greater than** a number to its left (e.g., -2 > -5).

---

### 1.2 Basic Arithmetic Operations on Integers
1. **Signs in Multiplication and Division**:
   - (+) × (+) = (+)
   - (-) × (-) = (+) (Two negatives make a positive!)
   - (+) × (-) = (-)
   - (-) × (+) = (-)
2. **Order of Operations (BODMAS)**:
   - **B**: Brackets first
   - **O**: Orders (powers, square roots)
   - **D / M**: Division and Multiplication (from left to right)
   - **A / S**: Addition and Subtraction (from left to right)

*Example*: Calculate -8 + (-4) × 3 - (-10)
1. Multiply first: (-4) × 3 = -12
2. Equation becomes: -8 + (-12) - (-10) = -8 - 12 + 10 = -20 + 10 = -10

---

### 1.3 Laws of Arithmetic
- **Commutative Law (Hukum Kalis Tukar Tertib)**:
  - a + b = b + a
  - a × b = b × a
- **Associative Law (Hukum Kalis Sekutuan)**:
  - (a + b) + c = a + (b + c)
  - (a × b) × c = a × (b × c)
- **Distributive Law (Hukum Kalis Agihan)**:
  - a × (b + c) = (a × b) + (a × c)
  - a × (b - c) = (a × b) - (a × c)

---

### 1.4 Rational Numbers
A **Rational Number** is any number that can be expressed as a fraction p/q, where p and q are integers, and q ≠ 0.
- All integers are rational numbers (e.g. 5 = 5/1, -3 = -3/1).
- Decimals that terminate or repeat are rational numbers (0.25 = 1/4, 0.333... = 1/3).
`,
    quiz: [
      {
        question: "Calculate the value of: (-6) × (-4) + (-15) ÷ 3",
        options: ["19", "29", "-19", "9"],
        correctAnswer: "19",
        explanation: "(-6) × (-4) = 24. (-15) ÷ 3 = -5. Then: 24 + (-5) = 24 - 5 = 19."
      },
      {
        question: "Which arithmetic law is shown by: 5 × (12 + 8) = (5 × 12) + (5 × 8)?",
        options: [
          "Distributive Law (Hukum Kalis Agihan)",
          "Commutative Law (Hukum Kalis Tukar Tertib)",
          "Associative Law (Hukum Kalis Sekutuan)",
          "Identity Law"
        ],
        correctAnswer: "Distributive Law (Hukum Kalis Agihan)",
        explanation: "Multiplying a single factor into the sum inside brackets demonstrates the Distributive Law: a(b + c) = ab + ac."
      },
      {
        question: "Which of the following numbers is an INTEGER?",
        options: ["-17", "3.75", "-2/5", "√7"],
        correctAnswer: "-17",
        explanation: "An integer is a whole positive or negative number or zero. Decimals and non-simplifying fractions are not integers."
      },
      {
        question: "Which inequality statement is TRUE regarding negative numbers on a number line?",
        options: ["-3 > -8", "-10 > -2", "-5 < -12", "0 < -4"],
        correctAnswer: "-3 > -8",
        explanation: "On a number line, -3 lies to the right of -8, meaning -3 is greater than -8."
      }
    ],
    flashcards: [
      { front: "Sign rule: (-) × (-)", back: "(+) Positive value" },
      { front: "Sign rule: (+) × (-)", back: "(-) Negative value" },
      { front: "Definition of Rational Number", back: "Any number that can be written in the form p/q, where p and q are integers, and q ≠ 0." },
      { front: "Distributive Law Formula", back: "a × (b + c) = (a × b) + (a × c)" }
    ]
  },

  // Form 1 History - Unit 1: Mengenali Sejarah
  {
    level: 'Form 1',
    subject: 'History',
    unit: 'Unit 1: Mengenali Sejarah, Konsep, Sumber dan Kaedah Penyelidikan',
    language: 'BM',
    mindmap: {
      id: "root",
      label: "Mengenali Sejarah (Sejarah T1)",
      children: [
        {
          id: "1",
          label: "Pengertian Sejarah",
          children: [
            { id: "1-1", label: "Bahasa Melayu: Berasal daripada perkataan Arab 'syajaratun' (pokok / salasilah)" },
            { id: "1-2", label: "Bahasa Inggeris: 'History' berasal daripada perkataan Yunani 'historia' (penyelidikan)" },
            { id: "1-3", label: "Pandangan Tokoh: Herodotus, E.H. Carr, Muhd Yusof Ibrahim, Khoo Kay Kim" }
          ]
        },
        {
          id: "2",
          label: "Konsep Masa Silam & Ruang",
          children: [
            { id: "2-1", label: "Kronologi (urutan masa peristiwa)" },
            { id: "2-2", label: "Dekad (10 tahun), Abad (100 tahun), Alaf (1000 tahun)" },
            { id: "2-3", label: "Sebelum Masihi (SM) dan Masihi (M)" }
          ]
        },
        {
          id: "3",
          label: "Sumber Sejarah",
          children: [
            { id: "3-1", label: "Sumber Primer (Pertama): Belum diolah/asli - fosil, artifak, batu bersurat, manuskrip" },
            { id: "3-2", label: "Sumber Sekunder (Kedua): Telah diolah/diterbitkan - buku, ensiklopedia, majalah, jurnal" }
          ]
        },
        {
          id: "4",
          label: "Kaedah Penyelidikan Sejarah",
          children: [
            { id: "4-1", label: "Kaedah Bertulis: Mengkaji catatan bertulis dan prasasti" },
            { id: "4-2", label: "Kaedah Lisan: Temubual tokoh / orang sumber" },
            { id: "4-3", label: "Kaedah Arkeologi: Ekskavasi gali cari saintifik dan pentarikhan karbon" }
          ]
        }
      ]
    },
    textbook: `# Bab 1: Mengenali Sejarah
*Tingkatan 1 • KSSM Sejarah*

---

### 1.1 Pengertian Sejarah
Sejarah ialah peristiwa yang telah berlaku pada masa lampau berdasarkan fakta dan bukti yang sahih.
- **Asal Usul Perkataan**:
  - *Bahasa Melayu*: Berasal daripada bahasa Arab, **syajaratun** yang bermaksud pokok, salasilah, keturunan atau riwayat.
  - *Bahasa Inggeris*: Berasal daripada perkataan Yunani, **historia** yang bererti penyelidikan atau penyiasatan.
- **Pandangan Sejarawan**:
  - **Herodotus** (Bapa Sejarah): Penceritaan tentang tindakan manusia dan sebab-sebab berlakunya sesuatu peristiwa.
  - **E.H. Carr**: Suatu proses interaksi berterusan antara sejarawan dengan fakta-faktanya, dialog tanpa henti antara masa kini dengan masa lampau.
  - **Profesor Emeritus Tan Sri Dr. Khoo Kay Kim**: Sejarah merujuk kepada apa-apa yang pernah atau sudah berlaku, membina kesedaran dan panduan masa hadapan.

---

### 1.2 Konsep Masa Silam dan Ruang
Masa silam dikaji mengikut **urutan kronologi**:
- **Dekad**: Tempoh masa 10 tahun.
- **Abad**: Tempoh masa 100 tahun.
- **Alaf**: Tempoh masa 1000 tahun.
- **Sebelum Masihi (SM)**: Zaman sebelum kelahiran Nabi Isa AS.
- **Masihi (M)**: Zaman bermula selepas kelahiran Nabi Isa AS.

---

### 1.3 Sumber Sejarah
1. **Sumber Primer (Sumber Pertama)**:
   - Sumber yang bersifat asli, belum diolah atau diterbitkan semula.
   - *Contoh*: Artifak (tembikar, kapak batu), bukan artifak (candi, fosil), batu bersurat, dokumen rasmi kerajaan, diari.
2. **Sumber Sekunder (Sumber Kedua)**:
   - Bahan yang telah diolah, dikaji, dan disebarkan kepada umum melalui penulisan.
   - *Contoh*: Buku teks, majalah, risalah, akhbar, ensiklopedia.

---

### 1.4 Kaedah Penyelidikan Sejarah
1. **Kaedah Bertulis**: Mengkaji maklumat daripada sumber bertulis seperti daun lontar, batu bersurat, dan naskhah lama.
2. **Kaedah Lisan**: Proses mendapatkan maklumat melalui rakaman temubual dengan **orang sumber**.
3. **Kaedah Arkeologi**: Kaedah saintifik mencari bahan bukti sejarah melalui proses **ekskavasi** (gali cari di darat atau bawah air).
`,
    quiz: [
      {
        question: "Perkataan 'sejarah' dalam bahasa Melayu berasal daripada perkataan Arab 'syajaratun'. Apakah maksud perkataan tersebut?",
        options: ["Pokok atau salasilah", "Sungai dan lautan", "Batu bersurat", "Masa lampau"],
        correctAnswer: "Pokok atau salasilah",
        explanation: "Syajaratun bermaksud pokok yang melambangkan pertumbuhan salasilah keturunan dan riwayat."
      },
      {
        question: "Antara berikut, manakah merupakan contoh SUMBER PRIMER dalam penyelidikan sejarah?",
        options: [
          "Batu Bersurat Terengganu dan fosil manusia purba Perak Man",
          "Buku teks Sejarah Tingkatan 1",
          "Artikel ulasan dalam majalah Dewan Masyarakat",
          "Ensiklopedia sejarah dunia moden"
        ],
        correctAnswer: "Batu Bersurat Terengganu dan fosil manusia purba Perak Man",
        explanation: "Sumber primer adalah bahan asli yang belum diolah, seperti inskripsi batu bersurat dan fosil tulang."
      },
      {
        question: "Berapa tahunkah tempoh masa bagi SATU ABAD?",
        options: ["100 tahun", "10 tahun", "50 tahun", "1000 tahun"],
        correctAnswer: "100 tahun",
        explanation: "Satu dekad = 10 tahun; satu abad = 100 tahun; satu alaf = 1000 tahun."
      },
      {
        question: "Apakah nama proses saintifik mencari maklumat sejarah melalui kerja gali cari tapak purba?",
        options: ["Ekskavasi arkeologi", "Transkripsi lisan", "Ujian makmal kimia", "Temubual wartawan"],
        correctAnswer: "Ekskavasi arkeologi",
        explanation: "Ekskavasi merupakan kaedah penggalian tapak arkeologi secara teliti dan saintifik."
      }
    ],
    flashcards: [
      { front: "Asal usul perkataan Sejarah", back: "Perkataan Arab 'syajaratun' yang bererti pokok atau salasilah." },
      { front: "Definisi Sumber Primer", back: "Sumber asli yang belum diolah atau ditafsir, contohnya artifak, fosil, dan batu bersurat." },
      { front: "Definisi Sumber Sekunder", back: "Bahan kajian yang telah diolah dan diterbitkan seperti buku teks, esei, dan ensiklopedia." },
      { front: "3 Kaedah Penyelidikan Sejarah", back: "1. Kaedah Bertulis, 2. Kaedah Lisan, 3. Kaedah Arkeologi (ekskavasi)." }
    ]
  },

  // Form 1 Geography - Unit 1: Arah Mata Angin dan Bearing Sudutan
  {
    level: 'Form 1',
    subject: 'Geography',
    unit: 'Unit 1: Arah Mata Angin dan Bearing Sudutan',
    language: 'BM',
    mindmap: {
      id: "root",
      label: "Arah & Bearing Sudutan (Geografi T1)",
      children: [
        {
          id: "1",
          label: "Arah Mata Angin",
          children: [
            { id: "1-1", label: "4 Mata Angin Utama: Utara (U), Selatan (S), Timur (T), Barat (B)" },
            { id: "1-2", label: "4 Mata Angin Perantaraan: Timur Laut, Tenggara, Barat Daya, Barat Laut" }
          ]
        },
        {
          id: "2",
          label: "Cara Menentukan Arah",
          children: [
            { id: "2-1", label: "Menggunakan matahari: Terbit di Timur, terbenam di Barat" },
            { id: "2-2", label: "Menggunakan kompas magnetik (jarum sentiasa menunjuk ke Utara Magnet)" }
          ]
        },
        {
          id: "3",
          label: "Bearing Sudutan",
          children: [
            { id: "3-1", label: "Diukur mengikut arah pusingan jam bermula dari Utara (0° / 360°)" },
            { id: "3-2", label: "Diukur menggunakan jangka sudut (protraktor)" },
            { id: "3-3", label: "Nilai ditulis dalam 3 angka (cth: 045°, 090°, 225°)" }
          ]
        }
      ]
    },
    textbook: `# Bab 1: Arah Mata Angin dan Bearing Sudutan
*Tingkatan 1 • KSSM Geografi*

---

### 1.1 Arah Mata Angin
Arah ialah hala tuju sesuatu tempat dari suatu tempat yang lain.
- **Empat Mata Angin Utama**:
  1. Utara (0° / 360°)
  2. Timur (90°)
  3. Selatan (180°)
  4. Barat (270°)
- **Empat Mata Angin Perantaraan**:
  - Timur Laut (antara Utara & Timur: 45°)
  - Tenggara (antara Timur & Selatan: 135°)
  - Barat Daya (antara Selatan & Barat: 225°)
  - Barat Laut (antara Barat & Utara: 315°)

---

### 1.2 Menentukan Arah Berpandukan Kompas Magnetik
Kompas magnetik mempunyai jarum berputar yang sentiasa menghala ke arah **Utara Magnetik** kerana tarikan kutub magnet bumi.
- **Langkah-langkah Menggunakan Kompas**:
  1. Letakkan kompas di atas permukaan yang rata.
  2. Jauhkan daripada objek besi atau medan elektromagnet.
  3. Putar perumah kompas sehingga jarum kompas berimpit dengan tanda 'U' (Utara).

---

### 1.3 Bearing Sudutan
Bearing ialah arah sesuatu titik yang dinyatakan dalam unit **darjah (°)**.
- **Ciri-ciri Bearing Sudutan**:
  - Diukur bermula dari arah **Utara (0°)**.
  - Diukur mengikut arah **pusingan jam**.
  - Nilai sudut antara **0° hingga 360°**.
  - Sentiasa dinyatakan dalam 3 digit angka (contohnya: sudut 45° ditulis sebagai 045°).
`,
    quiz: [
      {
        question: "Apakah nilai sudut bagi arah mata angin TENGGARA yang diukur mengikut pusingan jam dari arah Utara?",
        options: ["135°", "045°", "225°", "315°"],
        correctAnswer: "135°",
        explanation: "Utara = 0°, Timur = 90°, Tenggara = 90° + 45° = 135°."
      },
      {
        question: "Mengapakah jarum kompas sentiasa menunjuk ke arah Utara?",
        options: [
          "Disebabkan tarikan medan magnet bumi",
          "Kerana matahari terbit di sebelah timur",
          "Kerana pengaruh tiupan angin monsun",
          "Disebabkan graviti bulan"
        ],
        correctAnswer: "Disebabkan tarikan medan magnet bumi",
        explanation: "Jarum kompas adalah sebatang magnet yang sejajar dengan garisan medan magnet bumi."
      }
    ],
    flashcards: [
      { front: "4 Mata Angin Utama", back: "Utara (0°), Timur (90°), Selatan (180°), Barat (270°)" },
      { front: "Format Penulisan Bearing", back: "Mesti ditulis dalam 3 angka dan tanda darjah, cth: 045°, 090°, 270°." },
      { front: "Titik Rujukan Bearing", back: "Arah Utara (0°) mengikut pusingan jam." }
    ]
  },

  // Form 1 ASK - Bab 1: Pemikiran Komputasional
  {
    level: 'Form 1',
    subject: 'ASK',
    unit: 'Bab 1: Konsep Asas Pemikiran Komputasional (Dekomposisi, Pengecaman Corak, Peniskalaan & Pengitlakan)',
    language: 'BM',
    mindmap: {
      id: "root",
      label: "Pemikiran Komputasional (ASK T1)",
      children: [
        {
          id: "1",
          label: "4 Teknik Pemikiran Komputasional",
          children: [
            { id: "1-1", label: "Dekomposisi (Leraian): Memecahkan masalah besar kepada bahagian kecil" },
            { id: "1-2", label: "Pengecaman Corak: Mencari persamaan / corak berulang" },
            { id: "1-3", label: "Peniskalaan: Fokus aspek penting, abaikan butiran tidak relevan" },
            { id: "1-4", label: "Pengitlakan (Algoritma): Membina formula / langkah penyelesaian umum" }
          ]
        },
        {
          id: "2",
          label: "Aplikasi Harian",
          children: [
            { id: "2-1", label: "Membersihkan rumah mengikut bilik (Dekomposisi)" },
            { id: "2-2", label: "Resipi kek standard (Pengitlakan)" },
            { id: "2-3", label: "Peta laluan bas ringkas (Peniskalaan)" }
          ]
        }
      ]
    },
    textbook: `# Bab 1: Konsep Asas Pemikiran Komputasional
*Tingkatan 1 • KSSM Asas Sains Komputer (ASK)*

---

### 1.1 Definisi Pemikiran Komputasional (Computational Thinking)
Pemikiran komputasional ialah satu proses pemikiran bertujuan untuk menyelesaikan masalah oleh manusia sendiri berbantukan mesin atau kedua-duanya sekali dengan menggunakan konsep asas sains komputer.

---

### 1.2 Empat Teknik Utama Pemikiran Komputasional
1. **Teknik Leraian (Decomposition)**:
   - Memecahkan suatu masalah atau sistem yang kompleks kepada bahagian-bahagian yang lebih kecil dan mudah diurus.
   - *Contoh*: Membaiki basikal dengan memeriksa brek, rantai, dan tayar secara berasingan.
2. **Teknik Pengecaman Corak (Pattern Recognition)**:
   - Mengesan persamaan, perbezaan, atau keteraturan antara masalah-masalah yang sedang dihadapi.
   - *Contoh*: Mengenal pasti corak jadual sifir atau bentuk masalah matematik.
3. **Teknik Peniskalaan (Abstraction)**:
   - Mengutamakan aspek-aspek penting dan meninggalkan butiran yang tidak penting atau mengelirukan.
   - *Contoh*: Peta laluan tren MRT hanya memaparkan nama stesen dan laluan tanpa menunjukkan jalan raya kecil di sekitarnya.
4. **Teknik Pengitlakan (Algorithms / Generalisation)**:
   - Membina model, peraturan, atau formula langkah demi langkah (algoritma) yang boleh digunakan untuk menyelesaikan masalah yang serupa pada masa hadapan.
   - *Contoh*: Menulis resipi masakan atau manual langkah pemasangan perabot.
`,
    quiz: [
      {
        question: "Seorang murid ingin menyelesaikan masalah kesesakan trafik dengan hanya menumpukan perhatian kepada laluan utama dan mengabaikan lorong-lorong kecil. Apakah teknik yang diaplikasikan?",
        options: [
          "Teknik Peniskalaan (Abstraction)",
          "Teknik Leraian (Decomposition)",
          "Teknik Pengecaman Corak",
          "Teknik Algoritma"
        ],
        correctAnswer: "Teknik Peniskalaan (Abstraction)",
        explanation: "Teknik peniskalaan menapis dan mengabaikan butiran kecil yang tidak relevan untuk menumpukan aspek teras."
      },
      {
        question: "Memecahkan tugas membersihkan seluruh rumah kepada ruang tamu, bilik tidur, dan dapur merupakan contoh aplikasi:",
        options: [
          "Teknik Leraian (Decomposition)",
          "Teknik Peniskalaan",
          "Teknik Pengitlakan",
          "Teknik Pengecaman Corak"
        ],
        correctAnswer: "Teknik Leraian (Decomposition)",
        explanation: "Leraian membahagikan tugasan kompleks kepada beberapa komponen kecil yang mudah diselesaikan."
      }
    ],
    flashcards: [
      { front: "Teknik Leraian", back: "Memecahkan masalah besar kepada bahagian kecil yang mudah diurus." },
      { front: "Teknik Pengecaman Corak", back: "Mengenal pasti persamaan atau ciri sepunya antara pelbagai masalah." },
      { front: "Teknik Peniskalaan", back: "Mengekstrak ciri-ciri penting dan mengabaikan perincian yang tidak relevan." },
      { front: "Teknik Pengitlakan", back: "Membina rumus atau algoritma langkah demi langkah untuk menyelesaikan masalah seumpamanya." }
    ]
  },

  // Form 1 Chinese - 第一单元：成长之歌
  {
    level: 'Form 1',
    subject: 'Chinese',
    unit: '第一单元：成长之歌（个人修养与品德）',
    language: 'Chinese',
    mindmap: {
      id: "root",
      label: "成长之歌（初中一华文）",
      children: [
        {
          id: "1",
          label: "单元核心主题",
          children: [
            { id: "1-1", label: "青春期心态转变与自我反思" },
            { id: "1-2", label: "个人道德修养与感恩心" },
            { id: "1-3", label: "面对挫折的坚毅品格" }
          ]
        },
        {
          id: "2",
          label: "记叙文写作六要素",
          children: [
            { id: "2-1", label: "时间、地点、人物" },
            { id: "2-2", label: "起因、经过、结果" }
          ]
        },
        {
          id: "3",
          label: "修辞手法入门",
          children: [
            { id: "3-1", label: "比喻（本体、喻体、比喻词）" },
            { id: "3-2", label: "拟人（赋予事物以人的情感动作）" }
          ]
        }
      ]
    },
    textbook: `# 第一单元：成长之歌（个人修养与品德）
*初中一 • KSSM 马来西亚华文*

---

### 一、单元导读与学习目标
青春是人生最灿烂的画卷，初中一年级的同学们正站在人生的新起点。本单元通过抒情散文与记叙性作品，引导学生理解成长的意义，学会感恩父母师长，并在面对困难时保持坚韧不拔的品格。

---

### 二、记叙文阅读与写作六要素
在阅读与书写中一记叙文时，必须牢记记叙的六要素：
1. **时间**：故事发生的具体或概括时间。
2. **地点**：事件展开的空间环境。
3. **人物**：主人公及次要人物的言行举止。
4. **起因**：引发整起事件的原委。
5. **经过**：事件发展的高潮与曲折过程（记叙文重点）。
6. **结果**：事件的最终结局与感悟启示。

---

### 三、初中常用修辞手法
1. **比喻**：打比方，用浅显生动的事物来说明深奥抽象的道理。
   - *例句*：“母爱就像一盏指路明灯，照亮了我前行的每一步。”
2. **拟人**：把物当作人来写，赋予物以人的动作、神态或情感。
   - *例句*：“路旁的小草在微风中向我们欢快地点头微笑。”
`,
    quiz: [
      {
        question: "在记叙文写作中，构成完整情节的‘六要素’包括：时间、地点、人物，以及哪三项？",
        options: [
          "起因、经过、结果",
          "议论、说明、抒情",
          "开端、高潮、尾声",
          "伏笔、照应、悬念"
        ],
        correctAnswer: "起因、经过、结果",
        explanation: "记叙文六要素为：时间、地点、人物、起因、经过、结果。"
      },
      {
        question: "句子“阳光温柔地抚摸着大地”运用了哪种修辞手法？",
        options: ["拟人", "比喻", "排比", "夸张"],
        correctAnswer: "拟人",
        explanation: "“抚摸”是人的动作，赋予阳光以人的动作和温情，属于拟人修辞手法。"
      }
    ],
    flashcards: [
      { front: "记叙文六要素", back: "时间、地点、人物、起因、经过、结果。" },
      { front: "比喻修辞三要素", back: "本体（被比喻的事物）、喻体（用来作比的事物）、比喻词（如像、似、好比）。" },
      { front: "拟人修辞特点", back: "把事物人格化，赋予物以人的言行、思想和情感。" }
    ]
  }
];

// 3. Dynamic Generator for Any Form 1 Unit
export function generateDynamicStudyMaterial(
  level: string = 'Form 1',
  subject: string = 'Science',
  unit: string = 'Unit 1: Fundamentals',
  language: string = 'English'
): PreGeneratedStudyMaterial {
  const l = 'Form 1';
  const s = subject || 'General';
  const u = unit || 'Learning Standard';
  const clean = cleanUnitTitle(u) || u;

  const isChinese = (language || '').toLowerCase().includes('chinese') || s.toLowerCase().includes('chinese');
  const isBM = (language || '').toLowerCase().includes('melayu') || 
               s.toLowerCase().includes('melayu') || 
               s.toLowerCase().includes('sejarah') || 
               s.toLowerCase().includes('geografi') || 
               s.toLowerCase().includes('moral') || 
               s.toLowerCase().includes('islam') || 
               s.toLowerCase().includes('ask') || 
               s.toLowerCase().includes('rbt');

  let mindmap: MindMapNode;
  let textbook: string;
  let quiz: QuizQuestion[];
  let flashcards: Flashcard[];

  if (isChinese) {
    mindmap = {
      id: "root",
      label: "中一 " + s + "：" + clean,
      children: [
        {
          id: "1",
          label: "核心概念与基本要点",
          children: [
            { id: "1-1", label: "认识与定义：" + clean },
            { id: "1-2", label: "核心内容解析与要领" }
          ]
        },
        {
          id: "2",
          label: "课文与实际生活应用",
          children: [
            { id: "2-1", label: "日常生活情境与范例" },
            { id: "2-2", label: "马来西亚中一KSSM标准" }
          ]
        },
        {
          id: "3",
          label: "应考技巧与常见失误",
          children: [
            { id: "3-1", label: "UASA考试重点与关键词" },
            { id: "3-2", label: "答题技巧与复习策略" }
          ]
        }
      ]
    };

    textbook = "# 马来西亚中学 KSSM 中一 (Form 1) " + s + "\n## 单元专论：" + u + "\n\n---\n\n### 📖 学习目标 (Learning Objectives)\n在本单元中，中一学生将：\n1. 深入理解 **" + clean + "** 的核心定义、背景及基本原理。\n2. 掌握并运用相关的术语、表现手法及解题策略。\n3. 结合马来西亚多元文化与日常生活实际，培养良好的思维习惯与应试技巧。\n\n---\n\n### 🔍 核心知识点梳理 (Core Concepts)\n- **概念要领**：" + clean + " 是中一 " + s + " 课程的重要组成部分，侧重考查基础概念的理解与条理化表达。\n- **关键术语**：在作答 UASA 校本评估试卷时，必须准确写出标准规范的术语与关键词。\n- **思维拓展**：学以致用，将所学知识联系到日常生活与社会情境中。\n\n---\n\n### 💡 重点难点与实例解析\n- **重点剖析**：注意理解前后逻辑与结构脉络，理清各概念之间的关联。\n- **常见误区**：避免死记硬背而忽略概念背后的原理与推导过程。\n\n---\n\n### 🇲🇾 本地化联系与生活实践\n中一 KSSM 课程特别注重培养学生的综合素养与国家认同感。通过学习 **" + clean + "**，学生能够更好地理解周围的环境、文化与现代科技发展。\n\n---\n\n### ✍️ UASA 考试应试提示\n1. **审题明确**：仔细阅读题目要求，圈出关键指令词。\n2. **条理作答**：采用分点叙述，突出得分关键词。\n3. **检查核对**：注意时间分配与规范书写。\n";

    quiz = [
      {
        question: "在中一 KSSM " + s + " 中，关于“" + clean + "”的核心学习重点是什么？",
        options: [
          "理解核心原理、掌握规范术语并结合生活实践应用",
          "死记硬背非考纲内容而忽略基础概念",
          "在作答时完全不使用规范的学科词汇",
          "仅阅读目录而不做深入练习"
        ],
        correctAnswer: "理解核心原理、掌握规范术语并结合生活实践应用",
        explanation: "马来西亚 KSSM 中一大纲强调学生对核心概念的理解、准确规范的术语运用及实际生活联系。"
      },
      {
        question: "在应对 " + s + " 的 UASA 考试中，解答关于“" + clean + "”的问题时哪项策略最有效？",
        options: [
          "审清题意，写出评分标准要求的核心关键词与完整因果链条",
          "字数越多越好，写无关的长篇大论",
          "省略所有关键术语，只写口语化猜测",
          "直接跳过该大题不作答"
        ],
        correctAnswer: "审清题意，写出评分标准要求的核心关键词与完整因果链条",
        explanation: "UASA 评分标准根据标准术语与明确的逻辑因果给分，清晰准确的关键词是得分关键。"
      },
      {
        question: "学习“" + clean + "”对中一学生的思维能力有何积极帮助？",
        options: [
          "培养系统化分析、逻辑推理与解决实际问题的能力",
          "没有任何实际用处",
          "仅为了应付期末考试，考完即忘",
          "替代了所有其他学科的学习"
        ],
        correctAnswer: "培养系统化分析、逻辑推理与解决实际问题的能力",
        explanation: "KSSM 教学大纲注重培养学生的高阶思维技能 (KBAT)，提升分析与解决问题的综合素质。"
      },
      {
        question: "在复习“" + clean + "”这一单元时，以下哪种复习方法最为科学推荐？",
        options: [
          "配合思维导图梳理知识脉络，并进行针对性自测题练习",
          "只在考前十分钟粗略翻看教材",
          "仅仅抄写课本文字而不理解内涵",
          "完全不做任何笔记和习题"
        ],
        correctAnswer: "配合思维导图梳理知识脉络，并进行针对性自测题练习",
        explanation: "通过思维导图结构化记忆与做题检验是巩固中一知识点最有效的方法。"
      }
    ];

    flashcards = [
      { front: "单元核心概念：" + clean, back: "中一 " + s + " 的重要教学章节，涵盖基础理论、关键术语与实践联系。" },
      { front: "UASA 得分要诀：" + clean, back: "审准题目要求，写明官方评分标准所注重的学科规范关键词。" },
      { front: "思维导图要点：" + clean, back: "理清核心概念、生活联系以及答题要领三大部分的递进关系。" },
      { front: "常见误区规避：" + clean, back: "避免用模糊口语替代学术词汇，务必准确书写术语全称。" },
      { front: "生活应用联系：" + clean, back: "关注身边现实事例与马来西亚多元国情，学以致用。" },
      { front: "高阶思维 (KBAT) 提示：" + clean, back: "多问“为什么”与“如何应用”，阐明前后因果逻辑。" }
    ];
  } else if (isBM) {
    mindmap = {
      id: "root",
      label: "Tingkatan 1 " + s + ": " + clean,
      children: [
        {
          id: "1",
          label: "Konsep Asas & Definisi",
          children: [
            { id: "1-1", label: "Pengenalan kepada " + clean },
            { id: "1-2", label: "Prinsip dan Rumus / Kata Kunci" }
          ]
        },
        {
          id: "2",
          label: "Aplikasi Sukatan KSSM",
          children: [
            { id: "2-1", label: "Contoh Situasi Nyata di Malaysia" },
            { id: "2-2", label: "Prosedur dan Standard Pembelajaran" }
          ]
        },
        {
          id: "3",
          label: "Fokus Peperiksaan UASA",
          children: [
            { id: "3-1", label: "Kata Kunci Skema Pemarkahan" },
            { id: "3-2", label: "Teknik Menjawab & Kesilapan Lazim" }
          ]
        }
      ]
    };

    textbook = "# Buku Teks KSSM Tingkatan 1: " + s + "\n## Modul Pembelajaran: " + u + "\n\n---\n\n### 📖 Objektif Pembelajaran (Learning Standards)\nPada akhir pembelajaran bab ini, murid Tingkatan 1 akan dapat:\n1. Memahami konsep utama dan definisi saintifik/teoritikal bagi **" + clean + "**.\n2. Mengaplikasikan prinsip, langkah kerja, atau kemahiran berkaitan dalam situasi pembelajaran harian.\n3. Menyelesaikan soalan berbentuk format UASA dengan menggunakan istilah tepat dan logik yang tersusun.\n\n---\n\n### 🔍 Ringkasan Konsep Utama (Key Concepts)\n- **Definisi Standard**: " + clean + " merupakan topik teras dalam sukatan pelajaran Tingkatan 1 KSSM yang membina asas kukuh pemikiran kritis murid.\n- **Istilah Penting**: Murid dinasihatkan menguasai kata kunci rasmi yang sentiasa diberi markah dalam skema peperiksaan kebangsaan.\n- **Hubung Kait Konseptual**: Setiap sub-topik berkait rapat dengan aplikasi praktikal dan kemahiran berfikir aras tinggi (KBAT).\n\n---\n\n### 💡 Huraian Terperinci & Contoh Soalan\n- **Penerangan**: Fahami urutan proses, struktur, atau formula sebelum membuat latihan pengukuhan.\n- **Peringatan Kesilapan Lazim**: Elakkan jawapan yang terlalu umum tanpa menyertakan istilah khusus atau langkah pengiraan yang lengkap.\n\n---\n\n### 🇲🇾 Konteks Tempatan Malaysia\nKurikulum Standard Sekolah Menengah (KSSM) memastikan bahawa pembelajaran **" + clean + "** dikaitkan dengan persekitaran tempatan, industri, dan warisan sosio-budaya di Malaysia.\n\n---\n\n### ✍️ Tip Peperiksaan UASA\n1. **Kenal Pasti Kehendak Soalan**: Garis kata tugas seperti *nyatakan*, *terangkan*, *huraikan*, atau *hitung*.\n2. **Gunakan Kata Kunci Tepat**: Pastikan ejaan dan istilah saintifik/teknikal ditulis dengan tepat mengikut DSKP KSSM.\n3. **Semakan Semula**: Semak jawapan bagi memastikan tiada fakta penting yang tertinggal.\n";

    quiz = [
      {
        question: "Apakah matlamat utama pembelajaran \"" + clean + "\" dalam sukatan Tingkatan 1 KSSM?",
        options: [
          "Menguasai konsep teras, istilah tepat dan aplikasi dalam kehidupan harian",
          "Menghafal maklumat tanpa memahami maksud di sebalik konsep",
          "Mengabaikan kata kunci yang terdapat dalam buku teks",
          "Mempelajari topik di luar sukatan pelajaran sekolah menengah"
        ],
        correctAnswer: "Menguasai konsep teras, istilah tepat dan aplikasi dalam kehidupan harian",
        explanation: "KSSM Tingkatan 1 menitikberatkan kefahaman konsep asas, penggunaan istilah yang tepat dan kebolehan mengaitkannya dengan kehidupan."
      },
      {
        question: "Semasa menjawab soalan peperiksaan bertulis bagi topik \"" + clean + "\", apakah amalan terbaik untuk memperoleh markah penuh?",
        options: [
          "Menyatakan fakta berserta huraian logik dan kata kunci mengikut skema markah",
          "Menulis jawapan ringkas satu perkataan yang kabur",
          "Meninggalkan ruang jawapan kosong",
          "Memberikan fakta yang bercanggah dengan DSKP rasmi"
        ],
        correctAnswer: "Menyatakan fakta berserta huraian logik dan kata kunci mengikut skema markah",
        explanation: "Pemeriksa memberikan markah berdasarkan kehadiran fakta tepat dan huraian lengkap mengikut kehendak soalan."
      },
      {
        question: "Bagaimanakah kefahaman dalam topik \"" + clean + "\" membantu murid Tingkatan 1?",
        options: [
          "Membina asas yang kukuh untuk tingkatan seterusnya dan melatih pemikiran kritis (KBAT)",
          "Hanya berguna semasa peperiksaan akhir tahun sahaja",
          "Tidak mempunyai sebarang kaitan dengan mata pelajaran lain",
          "Menyebabkan kekeliruan konsep"
        ],
        correctAnswer: "Membina asas yang kukuh untuk tingkatan seterusnya dan melatih pemikiran kritis (KBAT)",
        explanation: "Topik Tingkatan 1 menjadi batu asas kepada pembelajaran peringkat menengah atas kelak."
      },
      {
        question: "Apakah kaedah ulang kaji yang paling berkesan untuk topik \"" + clean + "\"?",
        options: [
          "Membina peta minda berstruktur dan membuat latihan soalan formatif",
          "Membaca secara sepintas lalu tanpa membuat sebarang nota",
          "Menghafal soalan ramalan tanpa memahami konsep asas",
          "Menangguhkan pembelajaran sehingga malam sebelum peperiksaan"
        ],
        correctAnswer: "Membina peta minda berstruktur dan membuat latihan soalan formatif",
        explanation: "Peta minda dan latih tubi terancang terbukti mengukuhkan ingatan jangka panjang dan kefahaman konsep."
      }
    ];

    flashcards = [
      { front: "Definisi Utama: " + clean, back: "Standard pembelajaran teras dalam sukatan Tingkatan 1 KSSM untuk mata pelajaran " + s + "." },
      { front: "Kata Kunci Skema UASA: " + clean, back: "Gunakan istilah rasmi DSKP dan berikan huraian sebab-akibat yang lengkap." },
      { front: "Aplikasi Harian: " + clean, back: "Kaitkan konsep dengan fenomena alam, kehidupan harian, atau teknologi di Malaysia." },
      { front: "Kesilapan Lazim untuk Dielakkan: " + clean, back: "Menggunakan bahasa pasar atau tertinggal unit/istilah teknikal." },
      { front: "Strategi Peta Minda: " + clean, back: "Bahagikan kepada 3 cabang: Konsep Utama, Contoh Aplikasi, dan Teknik Peperiksaan." },
      { front: "KBAT (Kemahiran Berfikir Aras Tinggi): " + clean, back: "Tanya \"mengapa\" fenomena berlaku dan \"bagaimana\" menyelesaikan masalah secara sistematik." }
    ];
  } else {
    mindmap = {
      id: "root",
      label: "Form 1 " + s + ": " + clean,
      children: [
        {
          id: "1",
          label: "Fundamental Concepts & Definitions",
          children: [
            { id: "1-1", label: "Core Principles of " + clean },
            { id: "1-2", label: "Scientific / Mathematical Terminology" }
          ]
        },
        {
          id: "2",
          label: "KSSM Syllabus Applications",
          children: [
            { id: "2-1", label: "Real-world Malaysian Context" },
            { id: "2-2", label: "Hands-on Examples & Procedures" }
          ]
        },
        {
          id: "3",
          label: "UASA Examination Mastery",
          children: [
            { id: "3-1", label: "Official Marking Scheme Keywords" },
            { id: "3-2", label: "Structured Question Techniques" }
          ]
        }
      ]
    };

    textbook = "# Malaysian KSSM Form 1: " + s + "\n## Study Module: " + u + "\n\n---\n\n### 📖 Learning Objectives\nBy the end of this Form 1 module, students will be able to:\n1. Clearly identify and define the core concepts of **" + clean + "**.\n2. Apply fundamental formulas, models, and investigative techniques to solve problems.\n3. Express answers using official KSSM terminology and structured reasoning for UASA school assessments.\n\n---\n\n### 🔍 Core Concepts Breakdown\n- **Fundamental Principles**: **" + clean + "** is an essential learning standard in the Malaysian Form 1 curriculum that builds a robust foundation for secondary education.\n- **Key Scientific / Analytical Terms**: Examination schemes strictly reward accurate curriculum keywords, standard SI units, and logical steps.\n- **Systematic Reasoning**: Every concept links fundamental mechanisms with empirical observations and practical experiments.\n\n---\n\n### 💡 In-Depth Explanation & Solved Walkthrough\n- **Core Explanation**: Break down complex problems into clear, sequential components before applying general rules.\n- **Common Mistakes to Avoid**: Always show full working or steps. Do not skip standard scientific or mathematical definitions.\n\n---\n\n### 🇲🇾 Real-World Malaysian Context\nThe Malaysian national curriculum (KSSM) ties **" + clean + "** directly to local flora and fauna, sustainable green technology, environmental preservation, and domestic industries across Malaysia.\n\n---\n\n### ✍️ UASA Exam Tips\n1. **Analyze Question Keywords**: Look out for directive verbs such as *state*, *explain*, *calculate*, or *differentiate*.\n2. **Include Crucial Keywords**: Ensure every explanation features the key cause-and-effect relationship required by examiners.\n3. **Double-Check Work**: Verify numerical calculations, units, and structural terminology.\n";

    quiz = [
      {
        question: "What is the primary learning objective of \"" + clean + "\" in the Form 1 KSSM syllabus?",
        options: [
          "To master foundational principles, standard terminology, and real-world applications",
          "To memorize isolated facts without understanding their underlying mechanisms",
          "To skip scientific keywords in structured exam questions",
          "To study unrelated content outside the Malaysian curriculum"
        ],
        correctAnswer: "To master foundational principles, standard terminology, and real-world applications",
        explanation: "The Malaysian KSSM Form 1 curriculum emphasizes deep conceptual understanding, accurate scientific vocabulary, and real-life connections."
      },
      {
        question: "When answering structured exam questions on \"" + clean + "\", how can a student achieve full marks?",
        options: [
          "By citing official curriculum keywords and providing step-by-step reasoning",
          "By writing vague one-word generalizations",
          "By leaving out standard units and definitions",
          "By guessing without justifying answers"
        ],
        correctAnswer: "By citing official curriculum keywords and providing step-by-step reasoning",
        explanation: "National marking schemes award marks for precise keywords and logical cause-and-effect explanations."
      },
      {
        question: "How does mastering \"" + clean + "\" benefit a Form 1 student's ongoing academic journey?",
        options: [
          "It establishes a crucial conceptual bridge for upper secondary studies and develops critical thinking (HOTS/KBAT)",
          "It is solely needed for one assessment and has no future relevance",
          "It contradicts other secondary school subjects",
          "It replaces the need for practical experiments"
        ],
        correctAnswer: "It establishes a crucial conceptual bridge for upper secondary studies and develops critical thinking (HOTS/KBAT)",
        explanation: "Form 1 topics establish foundational competencies that recur and advance in subsequent schooling years."
      },
      {
        question: "Which study practice is most recommended for revising \"" + clean + "\"?",
        options: [
          "Active recall using structured mindmaps and formative flashcard testing",
          "Passive rereading without taking notes or doing questions",
          "Cramming only on the night before the examination",
          "Ignoring textbook diagrams and worked examples"
        ],
        correctAnswer: "Active recall using structured mindmaps and formative flashcard testing",
        explanation: "Active recall and spaced repetition via mindmaps and flashcards significantly enhance retention and exam confidence."
      }
    ];

    flashcards = [
      { front: "Core Definition: " + clean, back: "A central learning standard in Form 1 " + s + " covering essential concepts and analytical methods." },
      { front: "Exam Marking Tip: " + clean, back: "Always include official KSSM keywords and state clear cause-and-effect reasons." },
      { front: "Real-World Application: " + clean, back: "Notice how " + clean + " is implemented in Malaysian biodiversity, environmental stewardship, or daily technology." },
      { front: "Common Pitfall to Avoid: " + clean, back: "Leaving answers ambiguous without specifying scientific units or formal terminology." },
      { front: "Mindmap Structure: " + clean, back: "Branch from Core Principles to Real-World Applications and Exam Revision Focus." },
      { front: "Higher Order Thinking (HOTS / KBAT): " + clean, back: "Practice explaining \"why\" a result occurs and \"how\" to solve novel problems methodically." }
    ];
  }

  return {
    level: l,
    subject: s,
    unit: u,
    language: language || 'English',
    mindmap,
    textbook,
    quiz,
    flashcards
  };
}

// 4. Safe lookup helper that guarantees a non-null rich study material
export function findPregeneratedMaterial(
  level?: string,
  subject?: string,
  unitOrTopic?: string,
  language?: string
): PreGeneratedStudyMaterial {
  const l = 'Form 1';
  const s = (subject || '').toLowerCase();
  const u = (unitOrTopic || '').toLowerCase();

  const curated = PREGENERATED_STUDY_MATERIALS.find(m => {
    const matchSub = !s || m.subject.toLowerCase().includes(s) || s.includes(m.subject.toLowerCase());
    const matchUnit = m.unit.toLowerCase().includes(u) || u.includes(m.unit.toLowerCase());
    return matchSub && matchUnit;
  });

  if (curated) {
    return curated;
  }

  return generateDynamicStudyMaterial(l, subject || 'General', unitOrTopic || 'Unit Overview', language || 'English');
}
