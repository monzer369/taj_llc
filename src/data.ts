export const BASE_PHOTO_URL = 'https://raw.githubusercontent.com/monzer369/TAJ_9876737/main/public/photo/';

export const IMAGES = {
  logo: `${BASE_PHOTO_URL}high-resolution-color-logo-removebg-preview.png`,
  monogram: `${BASE_PHOTO_URL}color-monogram-circle-layout.png`,
  
  // 1. Pool Covers (9 photos)
  poolCovers: [
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron.png`,
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron_2.png`,
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron_3.png`,
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron_4.png`,
    `${BASE_PHOTO_URL}Low-profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding.png`,
    `${BASE_PHOTO_URL}Low-profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding_1.png`,
    `${BASE_PHOTO_URL}high_3_meters_profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding_3.png`,
    `${BASE_PHOTO_URL}high_3_meters_profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding_4.png`,
    `${BASE_PHOTO_URL}Villa-Swimming-Pool-Swimming-Pool-Cover-Electric-Lift-Cover-Block-Out-the-Sun-Endless-Pool-Swim-Spa-Cover.jpg.png`,
  ],

  // 2. Canopies and Pergolas (7 photos)
  canopies: [
    `${BASE_PHOTO_URL}car-canopy.png`,
    `${BASE_PHOTO_URL}car-canopy2.png`,
    `${BASE_PHOTO_URL}car-canopy_3.png`,
    `${BASE_PHOTO_URL}car-canopy_4.png`,
    `${BASE_PHOTO_URL}car-canopy_5.png`,
    `${BASE_PHOTO_URL}car-canopy_7.png`,
    `${BASE_PHOTO_URL}car-canopy_8.png`,
  ],

  // 3. Spiral Stairs (3 photos) - Spiral_staircase_3 is well-proportioned for landscape/square, Spiral_staircase is full vertical
  spiralStairs: [
    `${BASE_PHOTO_URL}Spiral_staircase_3.png`,
    `${BASE_PHOTO_URL}Spiral_staircase_2.png`,
    `${BASE_PHOTO_URL}Spiral_staircase.png`,
  ],

  // 4. Doors and Gates (5 photos)
  doors: [
    `${BASE_PHOTO_URL}An_ornate_door_a%20prime_example_of_exquisite_ironwork.png`,
    `${BASE_PHOTO_URL}Image_of_a_door_clad_in_WPC_wood_alternative.png`,
    `${BASE_PHOTO_URL}Modern_exterior_door_clad_in_wood-alternative_mater_al_weather-resistant_durable_%20and_resistant_to_water_and_heat.png`,
    `${BASE_PHOTO_URL}Modern_exterior_door_clad_in_wood-alternative_mater_al_weather-resistant_durable_%20and_resistant_to_water_and_heat_1.png`,
    `${BASE_PHOTO_URL}WPC_Wood_Alternative_Clad_Door.png`,
  ],

  // 5. Outdoor Seating (5 photos)
  seating: [
    `${BASE_PHOTO_URL}Outdoor_villa_seating_area.png`,
    `${BASE_PHOTO_URL}An_outdoor_seating_area_separate_from_the_villa_serving_as_a_space_for_video_games_and_family_gatherings.png`,
    `${BASE_PHOTO_URL}Facade_for_an_outdoor_seating_area_made_of_iron_and_Plexiglass.png`,
    `${BASE_PHOTO_URL}Glass-enclosed_outdoor_seating_area.png`,
    `${BASE_PHOTO_URL}The_villa_front_features_a_seating_area_made_of_iron_and_Plexiglass.png`,
  ],

  // 6. Decorative Frames and Panels (4 photos)
  decor: [
    `${BASE_PHOTO_URL}Decorative_inner_frame.png`,
    `${BASE_PHOTO_URL}Decorative_inner_frame_1.png`,
    `${BASE_PHOTO_URL}Decorative_inner_frame_2.png`,
    `${BASE_PHOTO_URL}Decorative_inner_frame_3.png`,
  ],
} as const;

export const CONTACT_INFO = {
  phoneDisplay: '+971 54 446 5689',
  phoneRaw: '+971544465689',
  whatsappRaw: '971544465689',
  location_ar: 'دبي، الإمارات العربية المتحدة',
  location_en: 'Dubai, United Arab Emirates',
  location: 'دبي، الإمارات العربية المتحدة',
  facebook: 'https://www.facebook.com/share/1KJ8UbN5vR/',
  instagram: 'https://www.instagram.com/taj__llc',
  snapchat: 'https://www.snapchat.com/add/tajsteel_llc',
} as const;

export const REQUEST_OPTIONS_AR = [
  'أغطية مسابح',
  'أدراج حلزونية',
  'أدراج مستقيمة',
  'درابزين حديدي',
  'درابزين شرفات',
  'بوابات حديد',
  'أسوار',
  'مظلات',
  'جلسات خارجية',
  'أبواب حديدية',
  'ديكورات معدنية',
  'استفسار آخر',
] as const;

export const REQUEST_OPTIONS_EN = [
  'Pool Covers',
  'Spiral Staircases',
  'Straight Staircases',
  'Steel Balustrades',
  'Balcony Railings',
  'Steel Gates',
  'Perimeter Fences',
  'Canopies & Pergolas',
  'Outdoor Lounges',
  'Steel Doors',
  'Decorative Panels',
  'Other Inquiry',
] as const;

export const REQUEST_OPTIONS = REQUEST_OPTIONS_AR;

export const UAE_CITIES_AR = [
  'دبي',
  'أبوظبي',
  'الشارقة',
  'عجمان',
  'رأس الخيمة',
  'الفجيرة',
  'أم القيوين',
  'العين',
] as const;

export const UAE_CITIES_EN = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain',
  'Al Ain',
] as const;

export const UAE_CITIES = UAE_CITIES_AR;

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  features: string[];
  specs: {
    materials: string;
    durability: string;
    application: string;
  };
  // English localizations
  title_en: string;
  category_en: string;
  shortDesc_en: string;
  fullDesc_en: string;
  features_en: string[];
  specs_en: {
    materials: string;
    durability: string;
    application: string;
  };
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'pool-covers',
    title: 'أغطية مسابح هندسية متطورة',
    category: 'مسابح',
    shortDesc: 'أنظمة فتح أوتوماتيكية ويدوية متينة تدعم أوزان الأشخاص مصنعة من حديد معالج وخشب بلاستيكي WPC وبلكسي جلاس.',
    fullDesc: 'نقدم حلولاً هندسية استثنائية لتغطية المسابح المنزلية في الفلل الراقية بالإمارات. تتوفر بتصاميم متعددة: مسطحة تدعم المشاة بألواح WPC، منخفضة الارتفاع (Low-profile) ببلكسي جلاس، ومرتفعة بارتفاع 3 أمتار تتيح السباحة بداخلها مع حماية تامة ومحركات سحب كهربائية ويدوية.',
    images: [...IMAGES.poolCovers],
    features: [
      'تتحمل أوزان المشاة والحفلات العائلية بأمان تام',
      'هيكل حديدي مجلفن عالي القوة ومقاوم للصدأ والكلور والرطوبة',
      'ألواح WPC فاخرة أو بلكسي جلاس عازل للأشعة فوق البنفسجية',
      'آلية فتح وإغلاق هادئة وانسيابية (أوتوماتيكية أو يدوية بمحركات)'
    ],
    specs: {
      materials: 'حديد صلب مجلفن + WPC بلجيكي/ألماني أو بلكسي جلاس معالج للأشعة فوق البنفسجية',
      durability: 'مصممة للعمل الشاق والمناخ الإماراتي الرطب والحار',
      application: 'الفلل السكنية الفاخرة، القصور، المسابح الخاصة'
    },
    title_en: 'Advanced Engineering Pool Covers',
    category_en: 'Pool Covers',
    shortDesc_en: 'Smart automatic and manual sliding covers supporting pedestrian weight, crafted from galvanized steel, premium WPC, and plexiglass.',
    fullDesc_en: 'We provide exceptional engineering solutions for luxury villa swimming pools across the UAE. Available in versatile designs: flush pedestrian-load covers with WPC decking, low-profile sliding covers with plexiglass, and high 3-meter enclosures enabling year-round sheltered swimming with smooth motorized and manual sliding tracks.',
    features_en: [
      'Fully engineered to support pedestrian walking and family gatherings safely',
      'High-tensile galvanized steel frame resistant to rust, chlorine, and humidity',
      'Premium composite WPC decking or UV-shielding tempered plexiglass',
      'Smooth, silent opening and closing mechanism (electric motorized or manual)'
    ],
    specs_en: {
      materials: 'Hot-dip galvanized structural steel + Belgian/German WPC or UV-coated plexiglass',
      durability: 'Engineered for continuous heavy-duty use in harsh UAE coastal and desert weather',
      application: 'Luxury private villas, royal palaces, bespoke swimming pools'
    }
  },
  {
    id: 'car-canopies',
    title: 'برجولات ومظلات سيارات عصرية',
    category: 'برجولات',
    shortDesc: 'مظلات هندسية صلبة وتصاميم معمارية فريدة لحماية المركبات والمساحات المفتوحة من الشمس والحرارة.',
    fullDesc: 'تجمع مظلات TAJ بين البنية الهندسية القوية والخطوط الجمالية المعاصرة. نصنع مظلات سيارات وبرجولات حديدية مخصصة بتصاميم وأشكال هندسية متعددة، تتحمل سرعات الرياح وتوفر عزلاً حرارياً فائقاً مع دهان بودرة حراري يدوم طويلاً.',
    images: [...IMAGES.canopies],
    features: [
      'هياكل فولاذية مصممة هندسياً لتحمل أعلى سرعات الرياح',
      'تغطيات عازلة للأشعة فوق البنفسجية والحرارة بنسبة 98%',
      'دهانات بودرة إلكتروستاتيكية مقاومة للخدش والتغير اللوني',
      'تشكيلات تصميم متعددة تتناسب مع مساحة المدخل ومحيط الفيلا'
    ],
    specs: {
      materials: 'مقاطع حديدية سميكة مجلفنة + طلاء كهروسكوني مقاوم للأملاح',
      durability: 'مقاومة تامة للتآكل والتقشير في الأجواء الساحلية والصحراوية',
      application: 'مواقف الفلل، المداخل الرئيسية، الساحات والحدائق الخارجية'
    },
    title_en: 'Architectural Pergolas & Car Canopies',
    category_en: 'Canopies & Pergolas',
    shortDesc_en: 'Robust cantilevered steel carports and architectural pergolas protecting vehicles and open courtyards from extreme sun and heat.',
    fullDesc_en: 'TAJ canopies unite heavy-duty structural steel with contemporary architectural contours. We custom fabricate bespoke carports and garden pergolas in versatile configurations, certified to withstand extreme wind velocities while providing up to 98% thermal insulation with electrostatic powder coating that never fades.',
    features_en: [
      'Engineered steel frames calculated to withstand extreme wind shear',
      'UV-blocking and heat insulation shields reducing interior temperature',
      'Electrostatic architectural powder coating resistant to salt corrosion and chipping',
      'Custom tailored configurations matching your villa entryway and courtyard dimensions'
     ],
    specs_en: {
      materials: 'Heavy structural steel sections + marine-grade anti-corrosive powder coat',
      durability: 'Complete resistance to coastal salt air, oxidation, and desert UV radiation',
      application: 'Villa driveways, main estate entrances, open courtyards and gardens'
    }
  },
  {
    id: 'spiral-stairs',
    title: 'أدراج حلزونية ودائرية معمارية',
    category: 'أدراج',
    shortDesc: 'تحف إنشائية تجمع بين دقة الحسابات الهندسية والأناقة المعمارية للفلل والقصور.',
    fullDesc: 'نصمم وننفذ أدراجاً حلزونية ودائرية بمقاييس هندسية متناهية الدقة، محققة توازناً مثالياً بين الراحة الإنشائية في الصعود والجاذبية البصرية الفريدة. تشكل هذه الأدراج عنصراً معمارياً محورياً يبرز فخامة التصميم الداخلي أو الخارجي.',
    images: [...IMAGES.spiralStairs],
    features: [
      'حسابات هندسية دقيقة لقطر الدوران وارتفاع الدرجات للراحة التامة',
      'لحام ميكانيكي غير مرئي وتشطيبات ناعمة متناهية الدقة',
      'إمكانية دمج خامات الخشب الطبيعي أو الزجاج مع الفولاذ',
      'قدرة إنشائية فائقة على تحمل الأحمال الثقيلة وثبات خالي من الاهتزاز'
    ],
    specs: {
      materials: 'فولاذ كربوني عالي الصلابة + تشطيبات طلاء فاخرة',
      durability: 'ثبات إنشائي مضمون ومقاومة للاهتزاز والتآكل',
      application: 'بهو الفلل، البنتهاوس، مداخل التراسات والأسطح'
    },
    title_en: 'Architectural Spiral & Curved Staircases',
    category_en: 'Spiral Stairs',
    shortDesc_en: 'Structural centerpieces uniting mathematical rotational precision with luxury architectural aesthetics.',
    fullDesc_en: 'We engineer and fabricate spiral and curved steel staircases with exact mathematical tolerances, achieving an effortless balance between structural climbing comfort and dramatic visual grandeur. Our staircases act as iconic centerpieces for prestigious interior foyers and outdoor rooftop terraces.',
    features_en: [
      'Calculated rotational radius and step riser ergonomics for ultimate climbing comfort',
      'Seamless mechanical welds with hand-buffed satin metallic finishes',
      'Versatile integration with solid hardwood, marble treads, or tempered glass railings',
      'Superior load capacity with zero structural vibration or deflection'
    ],
    specs_en: {
      materials: 'High-tensile carbon steel + luxury architectural electrostatic finish',
      durability: 'Rigid structural anchoring guaranteed against oscillation and wear',
      application: 'Villa foyers, penthouses, rooftop terrace access, garden stairs'
    }
  },
  {
    id: 'ornate-doors',
    title: 'أبواب وبوابات حديدية وخشب WPC فاخرة',
    category: 'أبواب',
    shortDesc: 'بوابات رئيسية وأبواب مصفحة بتطريز معدني متقن وتكسيات خشب بديل مقاوم للمياه والحرارة.',
    fullDesc: 'مدخل الفيلا هو عنوان فخامتها. تقدم TAJ خيارات متعددة تشمل الأبواب المزخرفة يدوياً بالحديد المطروق، والأبواب المودرن المكسوة بمواد WPC البديلة للخشب والمقاومة للعوامل الجوية، مزودة بأنظمة إقفال متقدمة تلبي متطلبات الأمان والخصوصية مع مظهر ملكي أنيق.',
    images: [...IMAGES.doors],
    features: [
      'تشكيلات حديدية زخرفية كلاسيكية ومودرن بتكسيات WPC عصرية',
      'معالجة غلفنة على الساخن لضمان منع الصدأ نهائياً',
      'عزل حراري وصوتي داخلي متطور ومقاوم لحرارة الصيف',
      'تجهيز كامل للأنظمة الذكية والمحركات الكهربائية والمفصلات الثقيلة'
    ],
    specs: {
      materials: 'حديد صلب مجلفن + WPC خشب بديل + زجاج عاكس مصفح',
      durability: 'حماية كاملة من الرطوبة والحرارة العالية دون أي تقشر أو التواء',
      application: 'المداخل الرئيسية للفلل، بوابات الأسوار، الأبواب الخارجية والجانبية'
    },
    title_en: 'Luxury Steel & Composite WPC Doors & Gates',
    category_en: 'Doors & Gates',
    shortDesc_en: 'Grand main entry gates and armored doors featuring artisanal wrought iron or modern weather-proof composite wood cladding.',
    fullDesc_en: 'The villa entrance defines its royal presence. TAJ creates bespoke gates ranging from hand-forged classical wrought iron to sleek modern entry doors clad in composite WPC wood alternatives. Fitted with high-security locking systems and heavy-duty concealed hinges for enduring security and grandeur.',
    features_en: [
      'Versatile styles: hand-forged wrought iron or modern thermal composite WPC cladding',
      'Hot-dip galvanization process guaranteeing lifetime anti-rust protection',
      'Advanced internal thermal and acoustic insulation engineered for UAE summers',
      'Fully prepped for smart access automation, electric locks, and heavy-duty pivot hinges'
    ],
    specs_en: {
      materials: 'Solid galvanized steel + weather-resistant WPC composite + reflective laminated glass',
      durability: '100% immune to high humidity, warping, color-fading, and desert heat',
      application: 'Grand villa entrances, perimeter gates, private pedestrian doors'
    }
  },
  {
    id: 'outdoor-seating',
    title: 'جلسات خارجية معدنية ومغلقة بالبلكسي جلاس',
    category: 'جلسات',
    shortDesc: 'مساحات ضيافة خارجية متكاملة مصممة بأسلوب هندسي راقٍ للتجمعات العائلية وألعاب الفيديو والراحة.',
    fullDesc: 'تضفي جلسات TAJ الخارجية طابعاً أنيقاً يجمع بين الراحة الاستثنائية والصلابة المتناهية. نصنع إطارات الجلسات المفتوحة والعرائش المغلقة بالبلكسي جلاس والزجاج المقاوم للصدمات، مع تجهيزها لتكون ملاذاً عائلياً خاصاً مستقلاً عن مبنى الفيلا.',
    images: [...IMAGES.seating],
    features: [
      'هياكل حديدية قوية لا تتأثر بالحرارة أو الرطوبة المرتفعة',
      'خيارات واجهات مغلقة بالبلكسي جلاس أو مفتوحة مع مظلات علوية',
      'مساحات فسيحة مخصصة للجلسات العائلية وقاعات الترفيه التابعة للفيلا',
      'طلاء حماية متطور يحافظ على رونق اللون ومقاومة الصدأ لسنوات طويلة'
    ],
    specs: {
      materials: 'فولاذ مجلفن مع طلاء ميكرو-حراري وبلكسي جلاس شفاف عالي العزل',
      durability: 'مصممة لتحمل الهواء الخارجي والرطوبة والرياح',
      application: 'حدائق الفلل، التراسات، محيط المسابح، مناطق الترفيه العائلي'
    },
    title_en: 'Steel Framed & Enclosed Outdoor Gazebos & Lounges',
    category_en: 'Outdoor Lounges',
    shortDesc_en: 'Integrated outdoor hospitality spaces engineered for family gatherings, gaming zones, and shaded leisure.',
    fullDesc_en: 'TAJ outdoor lounges blend supreme comfort with structural steel permanence. We build open pergolas and enclosed climate-controlled pavilions with high-impact plexiglass and glass, creating private family leisure pavilions independent from the main villa building.',
    features_en: [
      'Rigid steel skeletons unaffected by humidity, high wind, or desert dust',
      'Options for crystal-clear plexiglass enclosed walls or open-air pergolas',
      'Spacious configurations custom-made for gaming lounges, majlis, and family hosting',
      'Multi-layer weather coating retaining luster and color fidelity for decades'
    ],
    specs_en: {
      materials: 'Galvanized steel with micro-thermal paint + shatterproof acoustic plexiglass',
      durability: 'Engineered for all-season outdoor weather exposure and high wind loads',
      application: 'Villa private gardens, rooftop terraces, poolside entertaining zones'
    }
  },
  {
    id: 'decorative-frames',
    title: 'ديكورات وفواصل معدنية هندسية',
    category: 'ديكورات',
    shortDesc: 'قواطع جدارية وإطارات فنية مخصصة تمنح المساحات السكنية عمقاً بصرياً وفخامة معمارية لا مثيل لها.',
    fullDesc: 'فواصل وديكورات TAJ المعدنية تصنع بأحدث تقنيات القص والتفريغ الهندسي بدقة متناهية. نبتكر إطارات داخلية وخارجية للصالات والمداخل والواجهات الجدارية تضمن الخصوصية وتضفي لمسة فنية راقية تتناغم مع الديكور الفاخر للفلل.',
    images: [...IMAGES.decor],
    features: [
      'قص هندسي فائق الدقة بتفريغات وزخارف معمارية مخصصة',
      'أبعاد وارتفاعات تفصيلية حسب رغبة العميل والمخطط الهندسي',
      'تشطيبات دهان مات أو ميتاليك عاكسة للفخامة العصرية',
      'تثبيت أمني غير مرئي ومخفي للمحافظة على نقاء المظهر'
    ],
    specs: {
      materials: 'صفائح حديد معالج أو ألومنيوم معزز بسمكات عالية',
      durability: 'ثبات لوني واستقرار إنشائي خالي من الانحناءات',
      application: 'الفواصل بين المجالس والصالات، الواجهات الجدارية، شاشات الخصوصية'
    },
    title_en: 'Architectural Metal Screens & Decorative Partitions',
    category_en: 'Screens & Panels',
    shortDesc_en: 'Custom laser-cut spatial dividers and accent wall frames delivering visual depth and refined architectural privacy.',
    fullDesc_en: 'TAJ metal partitions are manufactured using advanced CNC laser-cutting technology with millimeter precision. We create interior and exterior decorative screens for majlis separation, entrance halls, and feature accent walls that ensure privacy while radiating modern luxury.',
    features_en: [
      'Ultra-precise laser profiling with bespoke geometric and Islamic patterns',
      'Custom proportions and ceiling-height spans engineered to specific drawings',
      'Matte, satin, or metallic powder coatings reflecting modern luxury interior design',
      'Concealed anchoring systems ensuring seamless architectural integration'
    ],
    specs_en: {
      materials: 'Laser-grade structural steel or reinforced aluminum alloy sheets',
      durability: 'Long-term color fastness and rigid planar stability without warping',
      application: 'Living room & majlis dividers, interior wall accents, exterior privacy screens'
    }
  },
  {
    id: 'balcony-railings',
    title: 'درابزينات حديد وشرفات معمارية',
    category: 'درابزين',
    shortDesc: 'حواجز ودرابزينات مدروسة هندسياً لتأمين الشرفات والسلالم بتصاميم تفيض بالرقي والصلابة.',
    fullDesc: 'نوفر حلول الدرابزين الداخلي والخارجي للفلل والمباني الراقية، حيث نجمع بين معايير السلامة الإنشائية الصارمة والمظهر الجمالي المترف، مع إمكانية التنسيق المباشر مع أرضيات الرخام والخشب وزجاج السيكوريت.',
    images: [], // لا توجد صور جاهزة - تنفيذ مخصص حسب مخططات الفيلا
    features: [
      'ارتفاعات وحسابات أحمال تلبي أعلى معايير السلامة السكنية',
      'تشطيبات ناعمة الملمس مع لحام دقيق ومخفي تماماً',
      'مقاومة تامة للاهتزاز مع قواعد تثبيت فولاذية مخفية',
      'خيارات تصميم مودرن نيو-كلاسيك أو خطوط هندسية بسيطة'
    ],
    specs: {
      materials: 'حديد صلب مجلفن + دهانات حرارية مضادة للأملاح والرطوبة',
      durability: 'عمر افتراضي طويل بدون تآكل أو حاجة لصيانة متكررة',
      application: 'شرفات الفلل، درابزين السلالم الداخلية والخارجية، الأسوار الزجاجية'
    },
    title_en: 'Engineered Steel Balustrades & Balcony Railings',
    category_en: 'Railings & Balustrades',
    shortDesc_en: 'Engineered safety balustrades and balustrades crafted to secure balconies and stairwells with timeless poise.',
    fullDesc_en: 'We fabricate interior and exterior railing systems for upscale villas, adhering to stringent structural safety codes while achieving sleek visual harmony with marble, wood flooring, and structural glass.',
    features_en: [
      'Engineered heights and lateral load resistance meeting UAE residential safety codes',
      'Satin-smooth handrails with completely concealed flush structural welds',
      'Vibration-free rigidity with embedded heavy-duty anchor plates',
      'Neo-classical ornate ironwork or sleek minimalist architectural line designs'
    ],
    specs_en: {
      materials: 'Solid galvanized steel + marine-grade thermal powder coatings',
      durability: 'Extended lifespan with zero rust staining and zero maintenance hassle',
      application: 'Villa balconies, interior open stairwells, exterior entrance steps'
    }
  },
  {
    id: 'perimeter-fences',
    title: 'أسوار وحواجز أمنية سكنية',
    category: 'أسوار',
    shortDesc: 'أسوار حديدية متينة تحيط بالفيلا وتمنحها حماية متكاملة وهيبة معمارية تعكس تميز المسكن.',
    fullDesc: 'تضفي أسوار TAJ السكنية لمسة متفردة من الحماية والأناقة لمحيط الفيلا أو القصر. ننفذ أسواراً مصممة لمقاومة أصعب العوامل الجوية مع الحفاظ على تناغم المظهر الخارجي وتوفير الخصوصية التامة لسكان الفيلا.',
    images: [], // لا توجد صور جاهزة - تنفيذ مخصص حسب مخططات الفيلا
    features: [
      'حواجز فولاذية صلبة مقاومة للضغط ومحاولات الاختراق',
      'معالجة ضد التآكل والأكسدة بمراحل جلفنة ودهان متطورة',
      'توافق انسيابي مع بوابات الدخول ومحركات التحكم عن بعد',
      'خيارات حجب رؤية مدروسة تضمن خصوصية الحديقة والمسبح'
    ],
    specs: {
      materials: 'قطاعات حديدية ثقيلة مجلفنة على الساخن',
      durability: 'صمود استثنائي أمام رياح الصحراء والغبار والشمس الحارقة',
      application: 'محيط الفلل والقصور، الحواجز الفاصلة، أسوار المسابح والحدائق'
    },
    title_en: 'Residential Security Fences & Boundary Barriers',
    category_en: 'Perimeter Fences',
    shortDesc_en: 'Heavy-duty steel perimeter fencing securing the estate with architectural grandeur.',
    fullDesc_en: 'TAJ residential fences grant private villas and estates an imposing sense of prestige and protection. Fabricated to withstand sandstorms and intense heat while ensuring complete privacy for the gardens and swimming pools.',
    features_en: [
      'Solid steel barrier profiles resistant to physical impact and forced intrusion',
      'Multi-stage hot-dip galvanization and weather-shield coating against oxidation',
      'Harmonious integration with automated entrance gates and access systems',
      'Engineered sightline louvers offering maximum pool and garden privacy'
    ],
    specs_en: {
      materials: 'Heavy galvanized structural steel hollow sections and solid bars',
      durability: 'Exceptional resilience against sand, intense sun, and moisture',
      application: 'Villa & estate boundaries, security perimeter, pool privacy barriers'
    }
  }
];

export interface ProjectWork {
  id: string;
  title: string;
  category: 'مسابح' | 'برجولات' | 'أدراج' | 'أبواب' | 'جلسات' | 'ديكورات';
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  highlights: string[];
  // English localizations
  title_en: string;
  categoryLabel_en: string;
  location_en: string;
  description_en: string;
  highlights_en: string[];
}

export const PORTFOLIO_WORKS: ProjectWork[] = [
  // 1. Pool covers works
  {
    id: 'work-pool-1',
    title: 'غطاء مسبح أوتوماتيكي متحرك مع سطح WPC',
    category: 'مسابح',
    categoryLabel: 'أغطية مسابح',
    image: IMAGES.poolCovers[0],
    location: 'فيلا سكنية فاخرة - دبي',
    description: 'تنفيذ نظام غطاء مسبح ذكي يتحمل أوزان المشاة بالكامل، يفتح جانبياً بسلاسة ويوفر أقصى حماية للأطفال مع مضاعفة مساحة الجلوس.',
    highlights: ['تحمل أوزان المشاة', 'هيكل حديد مجلفن', 'ألواح WPC مقاومة للمياه', 'فتح وإغلاق جانبي انسيابي'],
    title_en: 'Motorized Sliding Pool Cover with WPC Decking',
    categoryLabel_en: 'Pool Covers',
    location_en: 'Luxury Residential Villa - Dubai',
    description_en: 'Custom motorized sliding pool cover engineered to fully support pedestrian weight, opening laterally to provide pool safety while doubling usable patio space.',
    highlights_en: ['Supports full pedestrian weight', 'Heavy galvanized steel frame', 'Waterproof composite WPC decking', 'Smooth lateral motorized slide']
  },
  {
    id: 'work-pool-2',
    title: 'غطاء مسبح منخفض الانزلاق حديد وبلكسي جلاس',
    category: 'مسابح',
    categoryLabel: 'أغطية مسابح',
    image: IMAGES.poolCovers[4],
    location: 'فيلا مستقلة - أبوظبي',
    description: 'نظام تغطية منخفض الارتفاع مصنوع من قطاعات حديد مجلفن مع ألواح بلكسي جلاس الشفافة العازلة للغبار وأشعة الشمس الحارقة.',
    highlights: ['نظام انزلاق خفيف', 'بلكسي جلاس عازل', 'حماية من الأتربة', 'تشغيل يدوي وأوتوماتيكي'],
    title_en: 'Low-Profile Sliding Cover in Steel & Plexiglass',
    categoryLabel_en: 'Pool Covers',
    location_en: 'Private Villa - Abu Dhabi',
    description_en: 'Telescopic low-profile pool cover fabricated from galvanized steel and crystal-clear plexiglass to seal out sandstorms and harsh summer solar heat.',
    highlights_en: ['Lightweight glide system', 'Thermal insulated plexiglass', 'Sand & dust protection', 'Dual manual/electric operation']
  },
  {
    id: 'work-pool-3',
    title: 'قبة مسبح متحركة بارتفاع 3 أمتار',
    category: 'مسابح',
    categoryLabel: 'أغطية مسابح',
    image: IMAGES.poolCovers[6],
    location: 'قصر سكني - الشارقة',
    description: 'هيكل حديدي مرتفع يتيح السباحة والمشي داخل حوض المسبح في كافة فصول السنة مع نظام تهوية وعزل حراري متطور.',
    highlights: ['ارتفاع 3 أمتار', 'إمكانية السباحة والمسبح مغلق', 'هيكل فولاذي مجلفن', 'مقاوم للرطوبة والكلور'],
    title_en: 'High 3-Meter Retractable Pool Enclosure',
    categoryLabel_en: 'Pool Covers',
    location_en: 'Private Estate - Sharjah',
    description_en: 'High-clearance 3-meter retractable steel dome enabling year-round sheltered swimming with engineered air vents and UV insulation.',
    highlights_en: ['3-meter internal clearance', 'Swim with enclosure closed', 'Galvanized structural steel', 'Chlorine and moisture resistant']
  },
  
  // 2. Canopies works
  {
    id: 'work-pergola-1',
    title: 'مظلة سيارات هندسية بتصميم معماري معلق',
    category: 'برجولات',
    categoryLabel: 'برجولات ومظلات',
    image: IMAGES.canopies[0],
    location: 'مجمع فلل خاص - أبوظبي',
    description: 'تصميم وتنفيذ مظلة سيارات بمقاطع حديدية متينة وطلاء حراري أسود فحمي عالي الجودة ومقاوم لأشعة الشمس والحرارة.',
    highlights: ['مقاومة للرياح والحرارة', 'دهان كهروسكوني مضاد للأكسدة', 'عزل للأشعة فوق البنفسجية', 'أبعاد مخصصة'],
    title_en: 'Cantilevered Architectural Steel Carport',
    categoryLabel_en: 'Canopies & Pergolas',
    location_en: 'Private Villa Compound - Abu Dhabi',
    description_en: 'Custom engineered cantilever car canopy with heavy steel profiles and matte charcoal electrostatic powder coating resisting extreme solar radiation.',
    highlights_en: ['Wind & heat resistant', 'Anti-corrosion powder coating', '98% UV shade blocking', 'Tailored span dimensions']
  },
  {
    id: 'work-pergola-2',
    title: 'مظلة سيارات بقطاعات فولاذية مزدوجة',
    category: 'برجولات',
    categoryLabel: 'برجولات ومظلات',
    image: IMAGES.canopies[1],
    location: 'فيلا خاصة - دبي',
    description: 'مظلة سيارات تجمع بين المتانة الفائقة والخطوط العصرية لتوفير تغطية كاملة لمركبات الفيلا مع ثبات إنشائي مضمون.',
    highlights: ['هيكل فولاذي متين', 'تصميم عصري متناسق مع الواجهة', 'مقاوم للصدأ', 'ضمان 10 سنوات'],
    title_en: 'Dual-Span Heavy Duty Carport Canopy',
    categoryLabel_en: 'Canopies & Pergolas',
    location_en: 'Private Villa - Dubai',
    description_en: 'Dual-bay steel canopy uniting superior rigidity with contemporary lines, providing complete shaded protection with guaranteed structural stability.',
    highlights_en: ['Rigid steel structure', 'Matches modern villa facade', 'Corrosion-proof', '10-Year warranty']
  },
  {
    id: 'work-pergola-3',
    title: 'برجولا حديقة ومواقف سيارات معمارية',
    category: 'برجولات',
    categoryLabel: 'برجولات ومظلات',
    image: IMAGES.canopies[2],
    location: 'فيلا عصرية - العين',
    description: 'تنفيذ مظلة حديدية بلمسات هندسية حديثة توفر حماية وعزل حراري كامل لساحة الفيلا الخارجية.',
    highlights: ['تغطية عازلة', 'دهان حراري إلكتروستاتيكي', 'تثبيت مخفي', 'حماية من الأشعة فوق البنفسجية'],
    title_en: 'Architectural Courtyard & Garden Pergola',
    categoryLabel_en: 'Canopies & Pergolas',
    location_en: 'Modern Villa - Al Ain',
    description_en: 'Architectural steel pergola delivering complete thermal shielding and contemporary elegance across the outdoor patio and parking area.',
    highlights_en: ['Thermal insulating shade', 'Electrostatic finish', 'Concealed anchor baseplates', 'UV protection']
  },

  // 3. Spiral Stairs works
  {
    id: 'work-stairs-1',
    title: 'درج حلزوني معماري ذو ثبات إنشائي فائق',
    category: 'أدراج',
    categoryLabel: 'أدراج حلزونية',
    image: IMAGES.spiralStairs[0],
    location: 'فيلا مستقلة - دبي',
    description: 'تصميم وتنفيذ درج حلزوني فولاذي يجمع بين دقة المركزية الحسابية والمظهر الهندسي الفخم الذي يتوسط بهو الفيلا.',
    highlights: ['حسابات هندسية دقيقة', 'لحام غير مرئي', 'طلاء أسود صناعي راقٍ', 'ثبات بدون اهتزاز'],
    title_en: 'Monumental Spiral Steel Staircase',
    categoryLabel_en: 'Spiral Stairs',
    location_en: 'Private Villa - Dubai',
    description_en: 'Architectural curved spiral staircase engineered with central rotational precision, creating an opulent centerpiece in the main foyer.',
    highlights_en: ['Exact mathematical ergonomics', 'Concealed structural welds', 'Industrial satin black finish', 'Vibration-free rigidity']
  },
  {
    id: 'work-stairs-2',
    title: 'سلم حلزوني خارجي مع درابزين أمان فولاذي',
    category: 'أدراج',
    categoryLabel: 'أدراج حلزونية',
    image: IMAGES.spiralStairs[1],
    location: 'فيلا - رأس الخيمة',
    description: 'درج حلزوني خارجي يصل التراس بالحديقة مصنع من حديد مجلفن ومقاوم للرطوبة والأملاح.',
    highlights: ['جلفنة كاملة', 'ثبات وأمان عالي', 'درجات مانعة للانزلاق', 'تصميم حلزوني مدمج'],
    title_en: 'Outdoor Galvanized Spiral Stair with Safety Rail',
    categoryLabel_en: 'Spiral Stairs',
    location_en: 'Coastal Villa - Ras Al Khaimah',
    description_en: 'Exterior spiral staircase linking rooftop terrace to the garden, fabricated from marine-galvanized steel resistant to salt air and humid winds.',
    highlights_en: ['Marine-grade galvanization', 'High safety load rating', 'Anti-slip tread plates', 'Compact footprint']
  },
  {
    id: 'work-stairs-3',
    title: 'درج حلزوني فولاذي متكامل بكامل الارتفاع',
    category: 'أدراج',
    categoryLabel: 'أدراج حلزونية',
    image: IMAGES.spiralStairs[2],
    location: 'فيلا خاصة - دبي',
    description: 'تنفيذ درج حلزوني بكامل الارتفاع يربط الأدوار بأسلوب معماري انسيابي مصنع من قطاعات فولاذية دقيقة.',
    highlights: ['كامل الارتفاع المعماري', 'درجات فولاذية مدعمة', 'ثبات فائق', 'ضمان 10 سنوات'],
    title_en: 'Full-Height Structural Spiral Staircase',
    categoryLabel_en: 'Spiral Stairs',
    location_en: 'Private Villa - Dubai',
    description_en: 'Full-height spiral staircase connecting multiple floors with seamless architectural flow, built from precision steel sections.',
    highlights_en: ['Full architectural height', 'Reinforced steel treads', 'Extreme stability', '10-Year warranty']
  },

  // 4. Doors works
  {
    id: 'work-doors-1',
    title: 'بوابة رئيسية فاخرة بأعمال حديد مطروق متقنة',
    category: 'أبواب',
    categoryLabel: 'أبواب وبوابات',
    image: IMAGES.doors[0],
    location: 'قصر سكني - الشارقة',
    description: 'تنفيذ باب رئيسي فاخر مزخرف بنقوش حديدية كلاسيكية مدمجة ومحصنة بأنظمة إقفال متينة وجلفنة حارة مانعة للصدأ.',
    highlights: ['أعمال حديد مطروق يدوي', 'حماية مطلقة وغلفنة حارة', 'مفصلات فولاذية ثقيلة', 'نقوش فنية هندسية'],
    title_en: 'Ornate Hand-Forged Classical Steel Gate',
    categoryLabel_en: 'Doors & Gates',
    location_en: 'Royal Palace - Sharjah',
    description_en: 'Grand estate gate adorned with bespoke hand-forged classical steel scrollwork, hot-dip galvanized for lifetime rust resistance with multi-point smart locking.',
    highlights_en: ['Handcrafted wrought iron', 'Hot-dip galvanized protection', 'Heavy pivot hinges', 'Fine geometric scrollwork']
  },
  {
    id: 'work-doors-2',
    title: 'باب خارجي مودرن بتكسية خشب WPC بديل',
    category: 'أبواب',
    categoryLabel: 'أبواب وبوابات',
    image: IMAGES.doors[1],
    location: 'فيلا راقية - دبي',
    description: 'باب مدخل فيلا عصري يدمج الفولاذ الصلب مع ألواح WPC المقاومة للشمس والرطوبة ليعطي دفء الخشب مع صلابة الفولاذ.',
    highlights: ['مقاوم للشمس والرطوبة', 'ألواح WPC فاخرة', 'تصميم مودرن معاصر', 'أمان وحماية تامة'],
    title_en: 'Modern Entrance Door with WPC Wood Cladding',
    categoryLabel_en: 'Doors & Gates',
    location_en: 'Luxury Villa - Dubai',
    description_en: 'Contemporary villa entrance door pairing an armored steel core with weather-defying WPC composite panels, delivering wood warmth with steel durability.',
    highlights_en: ['Sun & humidity immune', 'Luxury WPC composite', 'Modern minimalist aesthetic', 'Armored security core']
  },
  {
    id: 'work-doors-3',
    title: 'باب فيلا مصفح مقاوم للعوامل الجوية والحرارة',
    category: 'أبواب',
    categoryLabel: 'أبواب وبوابات',
    image: IMAGES.doors[2],
    location: 'فيلا خاصة - أبوظبي',
    description: 'باب مدخل رئيسي بتصميم هندسي أفقي متناسق ومزود بعوازل حرارية ومقاومة فائقة للحرارة والماء.',
    highlights: ['عزل حراري', 'تصفيح فولاذي', 'مظهر معماري أنيق', 'أنظمة قفل ذكية'],
    title_en: 'Armored Weather-Resistant Steel Entry Door',
    categoryLabel_en: 'Doors & Gates',
    location_en: 'Private Villa - Abu Dhabi',
    description_en: 'Horizontal line architectural entrance door engineered with internal thermal barriers, water resistance, and high-security multi-lock integration.',
    highlights_en: ['Thermal core insulation', 'Armored steel plate', 'Architectural elegance', 'Smart lock ready']
  },

  // 5. Seating works
  {
    id: 'work-seating-1',
    title: 'منطقة جلوس خارجية مظللة بإطار حديدي متين',
    category: 'جلسات',
    categoryLabel: 'جلسات خارجية',
    image: IMAGES.seating[0],
    location: 'حديقة فيلا راقية - دبي',
    description: 'تنفيذ جلسة حديقة خارجية تجمع بين الهيكل الحديدي المعالج ومقاعد الراحة الفسيحة والمصممة لتلائم الأجواء الخارجية في الإمارات.',
    highlights: ['حديد معالج ضد الرطوبة', 'تصميم متناغم مع الطبيعة', 'متانة ضد الرياح', 'طلاء ناعم يدوم طويلاً'],
    title_en: 'Shaded Steel Pergola Garden Lounge',
    categoryLabel_en: 'Outdoor Lounges',
    location_en: 'Private Villa Garden - Dubai',
    description_en: 'Outdoor garden seating area pairing treated steel frames with shaded louvers, custom fabricated to endure UAE outdoor weather conditions.',
    highlights_en: ['Humidity-treated steel', 'Harmonious nature integration', 'High wind resistance', 'Smooth durable finish']
  },
  {
    id: 'work-seating-2',
    title: 'جلسة خارجية عائلية مستقلة لألعاب الفيديو والضيافة',
    category: 'جلسات',
    categoryLabel: 'جلسات خارجية',
    image: IMAGES.seating[1],
    location: 'فيلا سكنية - دبي',
    description: 'غرفة ضيافة وجلسة عائلية خارجية مصنعة من مقاطع حديدية وزجاج وبلكسي جلاس مجهزة بالكامل للترفيه واللقاءات الخاصة.',
    highlights: ['مستقلة عن الفيلا', 'عزل صوتي وحراري', 'هيكل فولاذي أنيق', 'إضاءات مخفية'],
    title_en: 'Freestanding Family Entertainment Pavilion',
    categoryLabel_en: 'Outdoor Lounges',
    location_en: 'Residential Villa - Dubai',
    description_en: 'Independent detached outdoor hospitality and gaming pavilion built with structural steel, insulated glass, and plexiglass for family leisure.',
    highlights_en: ['Independent from villa', 'Acoustic & thermal insulation', 'Sleek steel architecture', 'Concealed LED prep']
  },
  {
    id: 'work-seating-3',
    title: 'واجهة جلسة خارجية من الحديد والبلكسي جلاس',
    category: 'جلسات',
    categoryLabel: 'جلسات خارجية',
    image: IMAGES.seating[2],
    location: 'فيلا خاصة - عجمان',
    description: 'واجهة معمارية حديدية متناسقة مع بلكسي جلاس شفاف تمنح الجلسة إطلالة بانورامية على الحديقة والمسبح.',
    highlights: ['بلكسي جلاس شفاف', 'إطارات حديد مجلفن', 'حماية من الغبار والحرارة', 'إطلالة بانورامية'],
    title_en: 'Steel & Glass Panelled Outdoor Majlis Facade',
    categoryLabel_en: 'Outdoor Lounges',
    location_en: 'Private Villa - Ajman',
    description_en: 'Architectural steel facade with panoramic transparent plexiglass panels delivering scenic views of the garden and pool while sealing out dust and heat.',
    highlights_en: ['Crystal clear plexiglass', 'Galvanized steel frames', 'Dust & heat protection', 'Panoramic views']
  },

  // 6. Decor works
  {
    id: 'work-decor-1',
    title: 'إطار وقاطع ديكوري داخلي فخم ومصقول',
    category: 'ديكورات',
    categoryLabel: 'ديكورات وفواصل',
    image: IMAGES.decor[0],
    location: 'فيلا عصرية - رأس الخيمة',
    description: 'تنفيذ فواصل جدارية وإطارات حديدية فنية تمنح البهو لمسة معمارية فاخرة بتفاصيل دقيقة وتشطيب ميتاليك متطور.',
    highlights: ['قص ليزري فائق الدقة', 'تشطيب كهروسكوني', 'أبعاد مخصصة', 'تثبيت مخفي بدون تشويه'],
    title_en: 'Polished Architectural Interior Metal Screen',
    categoryLabel_en: 'Screens & Panels',
    location_en: 'Modern Villa - Ras Al Khaimah',
    description_en: 'Interior steel divider and decorative framing adding an opulent architectural accent with intricate CNC detailing and metallic finish.',
    highlights_en: ['Ultra-precise laser cutting', 'Electrostatic metallic finish', 'Custom proportions', 'Concealed fasteners']
  },
  {
    id: 'work-decor-2',
    title: 'فاصل جداري داخلي بقواطع هندسية معاصرة',
    category: 'ديكورات',
    categoryLabel: 'ديكورات وفواصل',
    image: IMAGES.decor[1],
    location: 'فيلا - دبي',
    description: 'قاطع ديكوري يفصل بين الصالونات والمجالس بأسلوب هندسي مفتوح يمرر الإضاءة ويمنح المكان لمسة أناقة متميزة.',
    highlights: ['فواصل هندسية دقيقة', 'دهان ميتاليك فاخر', 'مقاوم للخدش', 'تنفيذ حسب المقاس'],
    title_en: 'Geometric Spatial Room Divider',
    categoryLabel_en: 'Screens & Panels',
    location_en: 'Luxury Villa - Dubai',
    description_en: 'Open geometric room partition separating majlis and salon areas, allowing natural light permeation while creating distinguished luxury zones.',
    highlights_en: ['Precise geometric cuts', 'Luxury metallic coat', 'Scratch resistant', 'Custom fabricated']
  }
];

export const WHY_TAJ = [
  {
    title: 'دقة هندسية وصناعية متناهية',
    desc: 'دراسة إنشائية مسبقة لكل قطعة ومقاس لضمان التركيب الدقيق والمتانة الإنشائية الصلبة في كافة المشاريع السكنية.',
    title_en: 'Mathematical Engineering Precision',
    desc_en: 'Comprehensive structural analysis for every component to ensure flawless installation and unshakeable durability.',
    iconName: 'Compass'
  },
  {
    title: 'مواد مجلفنة وخامات فائقة الجودة',
    desc: 'استخدام قطاعات فولاذية ثقيلة مع جلفنة متقدمة ودهانات حرارية مخصصة لتحمل الرطوبة الشديدة وحرارة الصيف الإماراتي.',
    title_en: 'Galvanized Alloys & Premium Materials',
    desc_en: 'Heavy-gauge steel sections treated with advanced hot-dip galvanization and thermal powder coats that withstand extreme UAE heat and humidity.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'تصنيع مخصص حسب الطلب (Custom Tailored)',
    desc: 'لا نعتمد النماذج الجاهزة؛ بل ننفذ حلولاً مطابقة لرؤية المالك والمهندس المعماري بالمقاييس والمواصفات المطلوبة.',
    title_en: '100% Custom Tailored Fabrication',
    desc_en: 'We never use generic mass molds. Every installation is engineered to match your architect’s vision, site constraints, and specifications.',
    iconName: 'Wrench'
  },
  {
    title: 'ضمان حقيقي لمدة 10 سنوات',
    desc: 'نمنح عملاءنا في الإمارات ضماناً إنشائياً موثوقاً لمدة 10 سنوات على ثبات الهياكل المعدنية ومقاومتها للأكسدة والتآكل.',
    title_en: 'Documented 10-Year Warranty',
    desc_en: 'We furnish our clients in the UAE with an official 10-year structural warranty guaranteeing structural integrity and anti-corrosion resilience.',
    iconName: 'Award'
  }
];

// Helper functions for easy localization
export const getLocalizedService = (service: ServiceItem, isEn: boolean) => ({
  ...service,
  title: isEn ? service.title_en : service.title,
  category: isEn ? service.category_en : service.category,
  shortDesc: isEn ? service.shortDesc_en : service.shortDesc,
  fullDesc: isEn ? service.fullDesc_en : service.fullDesc,
  features: isEn ? service.features_en : service.features,
  specs: isEn ? service.specs_en : service.specs,
});

export const getLocalizedProject = (project: ProjectWork, isEn: boolean) => ({
  ...project,
  title: isEn ? project.title_en : project.title,
  categoryLabel: isEn ? project.categoryLabel_en : project.categoryLabel,
  location: isEn ? project.location_en : project.location,
  description: isEn ? project.description_en : project.description,
  highlights: isEn ? project.highlights_en : project.highlights,
});
