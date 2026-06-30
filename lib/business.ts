export const MEMORY_SCREEN_PATH = "/memory-screen";
export const CRO_LICENSING_PATH = "/cro-licensing";
export const VASCUMIND_PROTOCOL_PATH = "/protocol";

export const memoryScreenCheckoutUrl =
  process.env.NEXT_PUBLIC_STRIPE_MEMORY_SCREEN_URL ||
  process.env.STRIPE_MEMORY_SCREEN_URL ||
  "https://www.acurist.ai";

export const memoryScreenPrice = process.env.NEXT_PUBLIC_MEMORY_SCREEN_PRICE || "$99";

export const affiliateLinks = {
  omega3: process.env.NEXT_PUBLIC_AFFILIATE_OMEGA_3_URL || "https://www.acurist.ai",
  beetroot: process.env.NEXT_PUBLIC_AFFILIATE_BEETROOT_URL || "https://www.acurist.ai",
  bComplex: process.env.NEXT_PUBLIC_AFFILIATE_B_COMPLEX_URL || "https://www.acurist.ai",
  vitaminD3K2: process.env.NEXT_PUBLIC_AFFILIATE_VITAMIN_D3_K2_URL || "https://www.acurist.ai",
  percepta: process.env.NEXT_PUBLIC_AFFILIATE_PERCEPTA_URL || "https://www.acurist.ai",
};

export const croBenchmarks = {
  mocaLicense: "$35,000",
  mocaPerTest: "$35/test",
};

export const clinicalEvidenceLinks = {
  omega3Perfusion: "https://pubmed.ncbi.nlm.nih.gov/28527220/",
  beetrootNitrate: "https://pubmed.ncbi.nlm.nih.gov/35268027/",
  citicolineMci: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9936398/",
  truemed: "https://www.truemed.com/",
};
