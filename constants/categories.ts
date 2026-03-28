// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type CategoryName =
  | "Hair"
  | "Makeup"
  | "Skincare"
  | "Lashes & Brows"
  | "Nails"
  | "Hair Removal"
  | "PMU"
  | "Tattoo & Piercing"
  | "Wellness";

export type Category = {
  occupations: string[];
  services: string[];
  specializations: Record<string, string[]>;
};

// ─────────────────────────────────────────────
// Data (keyed by CategoryName for O(1) lookup)
// ─────────────────────────────────────────────

export const ServiceCategories: Record<CategoryName, Category> = {
  Hair: {
    occupations: [
      "Hair Stylist",
      "Cosmetologist",
      "Barber",
      "Colorist",
      "Extension Specialist",
      "Braider",
      "Loctician",
    ],
    services: [
      "Haircut",
      "Blowout / Blowdry",
      "Balayage / Highlights",
      "Full Color",
      "Toner / Gloss",
      "Keratin Treatment",
      "Perm / Relaxer",
      "Hair Extensions",
      "Braids",
      "Locs",
      "Scalp Treatment",
      "Bang Trim",
    ],
    specializations: {
      genderIdentity: [
        "Women",
        "Men",
        "Non-Binary & Gender Fluid",
        "Drag & Gender Expression",
        "Transgender & Transitioning",
        "All Genders Welcome",
      ],
      textureType: [
        "Curly & Coily Hair",
        "Natural Hair (4a–4c)",
        "Fine & Thin Hair",
        "Thick & Dense Hair",
        "Transitioning Hair",
      ],
      color: [
        "Balayage & Lived-In Color",
        "Vivid & Fantasy Color",
        "Color Correction",
        "Highlights & Lowlights",
        "Grey Blending",
      ],
      cuttingStyling: [
        "Precision Cuts",
        "Razor Cutting",
        "Textured Cuts",
        "Men's Cuts & Fades",
        "Kids Hair",
      ],
      extensionsProtective: [
        "Hair Extensions",
        "Braiding & Protective Styles",
        "Loc Specialist",
        "Wigs & Units",
      ],
      treatment: ["Keratin & Smoothing", "Scalp Health", "Chemical Relaxing"],
      occasion: ["Bridal & Updo", "Editorial & Runway", "Men's Grooming"],
    },
  },

  Makeup: {
    occupations: ["Makeup Artist"],
    services: [
      "Full Glam",
      "Natural / No-Makeup Makeup",
      "Bridal Makeup",
      "Editorial / Avant-Garde",
      "Airbrush Application",
      "SFX",
      "Makeup Lesson / Tutorial",
      "Event Makeup",
      "Touch-up",
    ],
    specializations: {
      genderIdentity: [
        "Women",
        "Men",
        "Non-Binary & Gender Fluid",
        "Drag & Gender Expression",
        "Transgender & Transitioning",
        "All Genders Welcome",
      ],
      style: [
        "Full Glam",
        "Soft & Natural",
        "Editorial & Fashion",
        "Avant-Garde",
        "Old Hollywood / Retro",
        "Runway & Print",
      ],
      technique: [
        "Airbrush",
        "SFX & Prosthetics",
        "Cut Crease & Eye Art",
        "Contouring & Sculpting",
        "Skin Prep & Primers",
      ],
      skin: [
        "Dark & Deep Skin Tones",
        "Fair & Light Skin Tones",
        "Mature Skin",
        "Oily & Acne-Prone Skin",
        "Sensitive Skin",
      ],
      occasion: [
        "Bridal & Wedding",
        "Prom & Formal",
        "Film & TV",
        "Photoshoot & Portraits",
        "Drag & Performance",
        "Halloween & Costume",
      ],
      productFocus: [
        "Clean & Natural Beauty",
        "High-End / Luxury Products",
        "Drugstore & Accessible",
        "Vegan & Cruelty-Free",
      ],
    },
  },

  Skincare: {
    occupations: ["Esthetician", "Medical Esthetician"],
    services: [
      "Classic Facial",
      "HydraFacial",
      "Chemical Peel",
      "Microdermabrasion",
      "Dermaplaning",
      "LED Light Therapy",
      "Microneedling",
      "Oxygen Facial",
      "Back Facial",
      "Acne Treatment",
      "Anti-Aging Treatment",
      "Gua Sha Facial",
    ],
    specializations: {
      skinType: [
        "Oily & Acne-Prone",
        "Dry & Dehydrated",
        "Combination Skin",
        "Sensitive & Reactive",
        "Normal Skin",
        "Mature & Aging Skin",
      ],
      concern: [
        "Acne & Breakouts",
        "Anti-Aging & Wrinkles",
        "Hyperpigmentation & Dark Spots",
        "Rosacea & Redness",
        "Dullness & Uneven Texture",
        "Pore Minimizing",
        "Scarring & Post-Acne Marks",
      ],
      treatmentType: [
        "Clinical & Medical-Grade",
        "Holistic & Natural",
        "Chemical Exfoliation",
        "Mechanical Exfoliation",
        "LED & Light Therapy",
        "Microneedling & Collagen Induction",
        "Lymphatic & Gua Sha",
      ],
      skinTone: [
        "Fair & Light Skin Tones",
        "Medium & Olive Skin Tones",
        "Dark & Deep Skin Tones",
        "Fitzpatrick I–II",
        "Fitzpatrick III–IV",
        "Fitzpatrick V–VI",
      ],
      age: [
        "Teen & Adolescent Skin",
        "20s & Preventative Care",
        "30s–40s Maintenance",
        "50s+ & Mature Skin",
        "Prenatal & Pregnancy-Safe",
      ],
      productFocus: [
        "Clean & Natural Ingredients",
        "Medical-Grade Products",
        "Vegan & Cruelty-Free",
        "Fragrance-Free",
        "Sensitive-Skin Formulas",
      ],
      occasion: [
        "Bridal & Pre-Wedding Glow",
        "Photoshoot Prep",
        "Event & Red Carpet",
        "Maintenance & Monthly",
      ],
    },
  },

  "Lashes & Brows": {
    occupations: ["Lash Technician", "Brow Artist"],
    services: [
      "Classic Lash Extensions",
      "Volume Lash Extensions",
      "Hybrid Lash Extensions",
      "Mega Volume Lashes",
      "Lash Lift & Tint",
      "Lash Removal",
      "Brow Lamination",
      "Brow Tint",
      "Brow Shaping / Wax",
      "Brow Henna",
      "Lash & Brow Combo",
    ],
    specializations: {
      lashStyle: [
        "Natural & Wispy",
        "Classic & Defined",
        "Volume & Fluffy",
        "Mega Volume & Dramatic",
        "Hybrid & Textured",
        "Wet & Spiked Look",
      ],
      lashTechnique: [
        "Classic (1:1)",
        "Volume (2D–6D)",
        "Mega Volume (7D+)",
        "Hybrid",
        "Lash Lift & Tint",
        "Strip & Cluster Lashes",
      ],
      browStyle: [
        "Natural & Fluffy",
        "Defined & Arched",
        "Straight & Gradient",
        "Bold & Full",
        "Laminated & Brushed Up",
      ],
      browTechnique: [
        "Waxing & Threading",
        "Tinting",
        "Henna Brows",
        "Brow Lamination",
        "Mapping & Shaping",
      ],
      eyeShape: [
        "Hooded Eyes",
        "Monolids",
        "Deep-Set Eyes",
        "Downturned Eyes",
        "Wide-Set Eyes",
        "Close-Set Eyes",
      ],
      skinSensitivity: [
        "Sensitive Eyes",
        "Allergy-Friendly Adhesives",
        "Oily Lids",
        "Sparse & Fine Natural Lashes",
        "Mature Skin",
      ],
      occasion: [
        "Bridal & Wedding",
        "Photoshoot & Editorial",
        "Everyday Wear",
        "Event & Formal",
        "Film & TV",
      ],
    },
  },

  Nails: {
    occupations: ["Nail Technician", "Manicurist", "Pedicurist"],
    services: [
      "Manicure (regular, gel, shellac)",
      "Pedicure (regular, gel)",
      "Acrylic Full Set",
      "Acrylic Fill",
      "Gel Extensions",
      "Dip Powder",
      "Nail Art (per nail or full set)",
      "Press-on Application",
      "Nail Removal / Soak Off",
      "Paraffin Treatment",
      "Nail Repair",
    ],
    specializations: {
      serviceType: [
        "Natural Nail Care",
        "Acrylic Enhancements",
        "Gel Extensions",
        "Dip Powder",
        "Press-ons & Custom Sets",
        "Mani-Pedi Combos",
      ],
      nailArtStyle: [
        "Minimalist & Clean Girl",
        "Floral & Botanical",
        "Abstract & Geometric",
        "3D & Textured Art",
        "Chrome & Mirror Finish",
        "Seasonal & Holiday",
        "Character & Graphic Art",
        "Ombre & Gradient",
      ],
      finishTechnique: [
        "Gel & Shellac",
        "Builder Gel (BIAB)",
        "Hard Gel",
        "Soft Gel",
        "Dip Powder",
        "Matte Finish",
        "Chrome & Foil",
      ],
      nailShape: [
        "Square & Squoval",
        "Almond & Oval",
        "Coffin & Ballerina",
        "Stiletto & Pointed",
        "Short & Natural Length",
        "Extra Long Sets",
      ],
      skinHealth: [
        "Sensitive & Thin Nails",
        "Damaged & Recovering Nails",
        "Diabetic-Safe Services",
        "Nail Fungus Aftercare",
        "Vegan & Cruelty-Free Products",
        "Non-Toxic & 10-Free Polishes",
      ],
      occasion: [
        "Bridal & Wedding Sets",
        "Photoshoot & Editorial",
        "Event & Formal",
        "Everyday & Low-Maintenance",
      ],
    },
  },

  "Hair Removal": {
    occupations: [
      "Wax Specialist",
      "Esthetician",
      "Laser Hair Removal Technician",
    ],
    services: [
      "Eyebrow Wax",
      "Full Face Wax",
      "Lip / Chin Wax",
      "Underarm Wax",
      "Leg Wax (half, full)",
      "Brazilian Wax",
      "Bikini Wax",
      "Back / Chest Wax",
      "Threading (brows, face)",
      "Sugaring",
      "Laser Hair Removal (per area)",
    ],
    specializations: {
      method: [
        "Waxing",
        "Threading",
        "Sugaring",
        "Laser Hair Removal",
        "Dermaplaning",
        "Tweezing & Shaping",
      ],
      bodyArea: [
        "Face & Brows",
        "Underarms",
        "Arms & Legs",
        "Bikini & Brazilian",
        "Back & Chest",
        "Full Body",
      ],
      skin: [
        "Sensitive Skin",
        "Dark & Deep Skin Tones",
        "Fair & Light Skin Tones",
        "Coarse & Dense Hair",
        "Fine & Light Hair",
        "Ingrown-Prone Skin",
      ],
      genderIdentity: [
        "Women",
        "Men",
        "Non-Binary & Gender Fluid",
        "Transgender & Transitioning",
        "All Genders Welcome",
      ],
      laserSpecialty: [
        "Fitzpatrick I–II",
        "Fitzpatrick III–IV",
        "Fitzpatrick V–VI",
        "Hormonal & PCOS Hair Growth",
        "Full Body Laser Packages",
      ],
    },
  },

  PMU: {
    occupations: ["PMU Artist", "Cosmetic Tattoo Artist"],
    services: [
      "Microblading",
      "Nano Brows",
      "Powder / Ombre Brows",
      "Combination Brows",
      "Brow Touch-up / Refresh",
      "Lip Blush",
      "Lip Liner",
      "Permanent Eyeliner (top, bottom, full)",
      "Scalp Micropigmentation",
      "Areola Restoration",
      "Freckle Tattoo",
    ],
    specializations: {
      browTechnique: [
        "Microblading",
        "Nano Brows",
        "Powder & Ombre Brows",
        "Combination Brows",
        "Brow Refresh & Touch-up",
      ],
      lipEye: [
        "Lip Blush",
        "Full Lip Color",
        "Lip Liner",
        "Top Lash Line",
        "Bottom Lash Line",
        "Full Eyeliner",
        "Lash Enhancement",
      ],
      specialtyService: [
        "Scalp Micropigmentation",
        "Areola & Nipple Restoration",
        "Freckle & Beauty Mark Tattoo",
        "Scar Camouflage",
        "Vitiligo Restoration",
      ],
      skin: [
        "Fair & Light Skin Tones",
        "Medium & Olive Skin Tones",
        "Dark & Deep Skin Tones",
        "Fitzpatrick V–VI Specialist",
        "Oily & Large-Pored Skin",
        "Mature & Aging Skin",
      ],
      browStyle: [
        "Natural & Feathered",
        "Defined & Arched",
        "Fluffy & Brushed Up",
        "Bold & Full",
        "Ombre & Gradient",
      ],
      correction: [
        "PMU Correction & Cover-up",
        "Faded Brow Refresh",
        "Color Correction",
        "Removal & Lightening Prep",
      ],
      occasion: [
        "Bridal & Wedding",
        "Medical & Reconstructive",
        "Alopecia & Hair Loss",
        "Post-Chemo Recovery",
      ],
    },
  },

  "Tattoo & Piercing": {
    occupations: ["Tattoo Artist", "Piercer"],
    services: [
      "Custom Tattoo",
      "Flash Tattoo",
      "Fine Line Tattoo",
      "Blackwork Tattoo",
      "Realism Tattoo",
      "Watercolor Tattoo",
      "Japanese / Traditional",
      "Cover-up Tattoo",
      "Touch-up",
      "Ear Piercing",
      "Nose Piercing",
      "Body Piercing",
      "Jewelry Change / Downsize",
    ],
    specializations: {
      tattooStyle: [
        "Fine Line & Delicate",
        "Blackwork & Illustrative",
        "Realism & Portrait",
        "Traditional & Neo-Traditional",
        "Japanese & Irezumi",
        "Watercolor & Painterly",
        "Geometric & Dotwork",
        "Tribal & Cultural",
        "Botanical & Floral",
        "Lettering & Script",
      ],
      tattooSpecialty: [
        "Custom Design",
        "Flash & Walk-ins",
        "Cover-up & Rework",
        "Touch-up & Refresh",
        "Scar & Stretch Mark Tattooing",
        "Medical Tattooing",
      ],
      skin: [
        "Dark & Deep Skin Tones",
        "Fair & Light Skin Tones",
        "Medium & Olive Skin Tones",
        "All Skin Tones",
      ],
      placement: [
        "Small & Minimal",
        "Large Scale & Sleeves",
        "Face & Neck",
        "Hand & Finger",
        "Ribcage & Sternum",
        "Back Pieces",
      ],
      piercingType: [
        "Ear Curation & Stacking",
        "Nose & Septum",
        "Lip & Oral",
        "Eyebrow & Surface",
        "Navel & Body",
        "Genital & Intimate",
        "Jewelry Consultation & Downsize",
      ],
      piercingSpecialty: [
        "Safe Piercing for Sensitive Skin",
        "Titanium & Implant-Grade Only",
        "Healing Aftercare Guidance",
        "Pediatric & Teen Piercings",
        "Stretched Lobes & Gauging",
      ],
    },
  },

  Wellness: {
    occupations: ["Massage Therapist", "Bodywork Practitioner"],
    services: [
      "Swedish Massage",
      "Deep Tissue Massage",
      "Hot Stone Massage",
      "Prenatal Massage",
      "Sports Massage",
      "Lymphatic Drainage",
      "Spray Tan",
      "Body Scrub / Wrap",
      "Waxing (full body packages)",
      "Reflexology",
      "Head Massage / Scalp Massage",
    ],
    specializations: {
      massageType: [
        "Swedish & Relaxation",
        "Deep Tissue & Therapeutic",
        "Hot Stone",
        "Sports & Recovery",
        "Lymphatic Drainage",
        "Prenatal & Postnatal",
        "Reflexology",
        "Scalp & Head Massage",
      ],
      bodyTreatment: [
        "Spray Tan",
        "Body Scrub & Exfoliation",
        "Body Wrap & Detox",
        "Full Body Waxing Packages",
        "Paraffin Treatments",
      ],
      healthFocus: [
        "Stress & Anxiety Relief",
        "Chronic Pain & Injury",
        "Post-Surgery Recovery",
        "Athletic Performance",
        "Prenatal & Pregnancy",
        "Oncology & Medical",
        "Lymphedema Management",
      ],
      sprayTanSpecialty: [
        "Fair & Light Skin Tones",
        "Medium & Olive Skin Tones",
        "Dark & Deep Skin Tones",
        "Competition & Fitness",
        "Bridal & Event",
        "Custom Color Blending",
      ],
      genderIdentity: [
        "Women",
        "Men",
        "Non-Binary & Gender Fluid",
        "All Genders Welcome",
      ],
      occasion: [
        "Bridal & Pre-Wedding",
        "Athletic & Competition",
        "Postpartum Recovery",
        "Gift & Couples Sessions",
        "Corporate & Group Wellness",
      ],
    },
  },
};

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/** All category names in definition order */
export const CategoryNames = Object.keys(ServiceCategories) as CategoryName[];

/** Occupations for a given category */
export const getOccupations = (category: CategoryName): string[] =>
  ServiceCategories[category].occupations;

/** Services for a given category */
export const getServices = (category: CategoryName): string[] =>
  ServiceCategories[category].services;

/** All specialization group keys for a given category e.g. ["genderIdentity", "textureType", ...] */
export const getSpecializationKeys = (category: CategoryName): string[] =>
  Object.keys(ServiceCategories[category].specializations);

/** Options for a specific specialization group */
export const getSpecializations = (
  category: CategoryName,
  key: string
): string[] => ServiceCategories[category].specializations[key] ?? [];

/** All specializations as an array of { key, options } — useful for rendering a full picker */
export const getSpecializationGroups = (
  category: CategoryName
): { key: string; options: string[] }[] =>
  Object.entries(ServiceCategories[category].specializations).map(
    ([key, options]) => ({ key, options })
  );