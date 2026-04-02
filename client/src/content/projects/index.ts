export interface Project {
  id: string;
  slug?: string;
  legacySlugs?: string[];
  title: string;
  theatre: string;
  year: string;
  category: string;
  heroImage: string;
  cardImage?: string;
  cardAltText?: string;
  description: string;
  designStatement: string;
  credits: {
    director?: string;
    dramaturgy?: string;
    choreographer?: string;
    musicDirector?: string;
    composer?: string;
    scenicDesigner: string;
    costumeDesigner?: string;
    lightingDesigner?: string;
    soundDesigner?: string;
    projectionDesigner?: string;
    stageManager?: string;
    photography?: string;
  };
  galleries: {
    renderingBlocks?: Array<{
      title?: string;
      description?: string;
      images: string[];
      altTexts?: string[];
      mode?: "slideshow" | "masonry";
    }>;
    renderings?: string[];
    research?: string[];
    drafting?: string[];
    production?: string[];
  };
  galleryAltText?: {
    renderings?: string[];
    research?: string[];
    drafting?: string[];
    production?: string[];
  };
  layout?: {
    designStatementAfterProduction?: boolean;
  };
}

const pendingDescription =
  "Project archive and supporting materials are being migrated from Gretchen's current portfolio.";

const pendingStatement =
  "This project page is in progress and will be expanded with production context, renderings, and additional images.";

function slugifyProjectTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const portfolioOrder = [
  "grease",
  "gloria",
  "thebaldsoprano",
  "comedyoftenors",
  "tea",
  "noisesoff",
  "9to5",
  "ripcord",
  "sidebyside",
  "livingout",
  "vanyasoniamashaandspike",
  "promisespromises",
  "importanceofbeingearnest",
  "luckystiff",
  "paintingchurches",
  "godsofcomedy",
  "baskerville",
  "thelittlemermaid",
] as const;

export const projects: Project[] = [
  {
    id: "grease",
    title: "Grease",
    theatre: "Okoboji Summer Theatre",
    year: "2021",
    category: "Musical",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_bfb80019aa8f4db19c9014fcdf106e0e~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_b8348e146444445db5d75295c3f1d657~mv2.jpg/v1/fill/w_896,h_672,fp_0.52_0.59,q_90,enc_avif,quality_auto/dd35c7_b8348e146444445db5d75295c3f1d657~mv2.jpg",
    cardAltText:
      "Wide production photo from Grease showing the full company dancing in front of Gretchen Ugalde's neon diner-inspired set.",
    description:
      "Grease is a timeless American story that takes place in 1959 and follows Danny, Sandy, and all their friends as they navigate the teenage ups and downs of romance, high school, and learning who they are.",
    designStatement:
      "Designed for Okoboji Summer Theatre, I was inspired by the area's connection to the 1950s and how much the city itself feels like a time capsule of that period. As a fun surprise for the locals, I included elements of Okoboji in the design such as the floor tiles inspired by a beloved local diner and the Superior 71 Drive-In sign. Most of all, Grease is nostalgia, and I strived for the design to celebrate that nostalgia through the electric colors, the retro signage, and the retro-futuristic chrome accents.",
    credits: {
      director: "Stephen Brotebeck",
      choreographer: "Stephen Brotebeck",
      musicDirector: "Tom Andes",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Ashley Harrison",
      lightingDesigner: "Savannah Bell",
      soundDesigner: "Austen Yim",
      stageManager: "Lexi Holder",
      photography: "Michael Mckim",
    },
    galleries: {
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_bfb80019aa8f4db19c9014fcdf106e0e~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_7df0cc4c1c9f485585819b28f52a0fa2~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_dfc1a1767d0a4287a924e6cdb9df2a85~mv2.png",
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_b4524a289ef74532a2ee817f20a654e8~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_6e5e33fda8344f1fab19f6c40690b879~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_82ee7da6fe6543e9aa6826dc505ffd84~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_bac91ef23fcb419184f7717da588f3b6~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_8eb8ff18905341a0a425f58aa2c02344~mv2.png",
      ],
      research: [
        "https://static.wixstatic.com/media/dd35c7_865d3e17544f47349e81eadc408d9acb~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_b399e3a5570248209520c139122b289c~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_c45f1faa670146ea92450cfedcedd0da~mv2.png",
      ],
      drafting: [
        "https://static.wixstatic.com/media/dd35c7_01f70ec98d354c339912078ffd95a378~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_855a28c4b22c42fab2860a74a4851702~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_208527c24d8d41288da5982298758942~mv2.png",
      ],
    },
    galleryAltText: {
      renderings: [
        "Front elevation rendering for Grease featuring the glowing Rydell diner facade, drive-in signage, and checkerboard floor.",
        "Perspective rendering for Grease showing the elevated band platform and layered neon proscenium framing.",
        "Scenic rendering for Grease highlighting the streamlined diner architecture and chrome-accented stage picture.",
      ],
      production: [
        "Full stage production photo from Grease with Danny and Sandy framed by the illuminated diner set.",
        "Production photo from Grease capturing the ensemble dancing across the checkerboard floor beneath purple and blue lighting.",
        "Production photo from Grease showing a wide company number in front of the glowing Rydell facade.",
        "Production photo from Grease focused on principal actors performing downstage against the retro diner interior.",
        "Production photo from Grease showing the ensemble arranged across the multilevel set with the band above.",
      ],
      research: [
        "Research image for Grease featuring mid-century diner signage and roadside Americana references.",
        "Research collage for Grease exploring 1950s color palettes, chrome finishes, and retro interiors.",
        "Reference image for Grease showing period architecture and graphic motifs that informed the scenic design.",
      ],
      drafting: [
        "Drafting sheet for Grease showing a technical elevation of the diner facade.",
        "Drafting sheet for Grease detailing scenic construction and stage dimensions.",
        "Drafting plate for Grease showing technical linework for the multilevel set pieces.",
      ],
    },
  },
  {
    id: "thebaldsoprano",
    title: "The Bald Soprano",
    theatre: "University of California, Irvine",
    year: "",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_c28d9ffe970f4e6ba9910d65e83e2365~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_ff253a2000044b6bb4711c425414ea71~mv2.png/v1/fill/w_896,h_672,fp_0.47_0.62,q_90,enc_avif,quality_auto/dd35c7_ff253a2000044b6bb4711c425414ea71~mv2.png",
    cardAltText:
      "Scenic rendering for The Bald Soprano showing a mid-century dream living room with exaggerated patterns and theatrical absurdity.",
    description:
      "The Bald Soprano reimagines a polished mid-century American dream interior, layering theatrical absurdity into a seemingly familiar domestic world.",
    designStatement:
      "For our production of \"The Bald Soprano,\" I was inspired by the director's concept of starting with a realistic base and adding absurdity to create an optimistic atmosphere.\n\nDrawing from the romantic art of Arthur Sarnoff, which embodies the essence of the American dream, this led me to design a set that appears to embody the perfect American dream, a mid-century modern living room, with its whimsical elements and bold patterns, symbolizing the idealized life the characters may aspire to. However, amidst this seemingly perfect setting, I incorporated elements of absurdity, such as the revolving door and the unusual clock, to foreshadow the chaos and confusion that lie beneath the surface of the characters' lives. My hope is that the audience will not only see the absurdity of the characters' lives but also reflect on the absurdity of their own, ultimately finding humor and humanity in the shared experience of the human condition.\n\nI also drew inspiration from my childhood, growing up in the Philippines I was filled with dreams of the idealized American life, largely shaped by what I saw on Disney Channel. Moving to America at a young age, I quickly realized that the human experience transcends borders. This realization influences my design approach, as I aim to oversimplify the world as a fun and optimistic one, which will contradict the truth that life is not a Disney Channel show or an Arthur Sarnoff painting, but it is actually anxious, confusing and chaotic.",
    credits: {
      director: "Mihai Maniutiu",
      composer: "Nat Houle",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Christian Alverez",
      lightingDesigner: "Maisie Crimmins",
      soundDesigner: "Eric Backus",
      stageManager: "Logan Brubaker",
      photography: "Isaak Berliner",
    },
    galleries: {
      renderingBlocks: [
        {
          title: '1/2" Scale Model',
          images: [
            "https://static.wixstatic.com/media/dd35c7_c28d9ffe970f4e6ba9910d65e83e2365~mv2.png",
          ],
          altTexts: [
            'Half-inch scale model image for The Bald Soprano showing the full mid-century domestic set from a frontal view.',
          ],
        },
        {
          title: "Renderings",
          description:
            "Scenic renderings, created in Vectorworks. Costume renderings by Christian Alverez.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_b09c33e09c024a868c3e0cea77fd7853~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_c66756a786a34707a7c6ea47e6b2d681~mv2.png",
          ],
          altTexts: [
            "Half-inch scenic model image for The Bald Soprano showing the mid-century living room composition from a wide frontal angle.",
            "Half-inch scenic model image for The Bald Soprano showing the patterned room, door placement, and absurd domestic details.",
          ],
        },
        {
          title: "Production Photos",
          mode: "masonry" as const,
          images: [
            "https://static.wixstatic.com/media/dd35c7_ff253a2000044b6bb4711c425414ea71~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_4619cf908a3845d69fd327c3343938f4~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_58a8bbab8cd2475f93aa0fa8ea71e92f~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_1aeae112f538498387950d3bc1f49bf7~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_811a0de2dd644bc6a4b0bef6ee6ef61b~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_489ae251f8914a1dadecf4ba62b9893d~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_8df9b98bf38347b7a78779ccb19d21b9~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_95e31a1d21794bcf95a10487b8fa18b6~mv2.png",
          ],
          altTexts: [
            "Scenic rendering for The Bald Soprano showing the completed mid-century living room with graphic wall treatments and layered furniture.",
            "Rendering for The Bald Soprano featuring a vertical composition of the room and exaggerated domestic ornament.",
            "Scenic rendering for The Bald Soprano showing the living room from a wider perspective with bold pattern and color contrast.",
            "Rendering for The Bald Soprano focused on another absurd variation of the domestic interior.",
            "Scenic rendering for The Bald Soprano showing furniture grouping and patterned surfaces across the stage picture.",
            "Rendering for The Bald Soprano highlighting the off-kilter optimism of the polished American dream setting.",
            "Rendering for The Bald Soprano showing a costume-forward view integrated into the scenic environment.",
            "Scenic rendering for The Bald Soprano showing the room's theatrical symmetry and heightened domestic palette.",
          ],
        },
        {
          title: "Early Concept Ideas",
          description: "Preliminary design ideas, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_3673edae43a04cfab2a35ed5d093644b~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_db0c8982335e4c369d2c5eab20528a53~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_09337229d2c441a7ac5ab23b525dfb6a~mv2.png",
          ],
          altTexts: [
            "Early concept rendering for The Bald Soprano exploring a preliminary version of the domestic absurdist environment.",
            "Preliminary design image for The Bald Soprano testing alternative compositions, color, and architectural framing.",
            "Early concept image for The Bald Soprano showing another preliminary approach to the exaggerated living room world.",
          ],
        },
      ],
      research: [
        "https://static.wixstatic.com/media/dd35c7_12bbf2ffce6240d6a21eaf82bdf1bf2c~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_9ab10bb2a41a43bcb1717a096ff79764~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_2141671cca164dff8a6dc43c6efaa283~mv2.png",
      ],
    },
    galleryAltText: {
      research: [
        "Research board for The Bald Soprano referencing the visual language of idealized mid-century domestic life.",
        "Research image for The Bald Soprano exploring Arthur Sarnoff-inspired Americana and polished suburban fantasy.",
        "Research collage for The Bald Soprano gathering references for optimism, domestic design, and underlying absurdity.",
      ],
    },
  },
  {
    id: "comedyoftenors",
    title: "A Comedy of Tenors",
    theatre: "Okoboji Summer Theatre",
    year: "2022",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_c7aad62110e54a18b76589a1340bdb30~mv2.png/v1/fill/w_896,h_672,fp_0.49_0.55,q_90,enc_avif,quality_auto/dd35c7_c7aad62110e54a18b76589a1340bdb30~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_c7aad62110e54a18b76589a1340bdb30~mv2.png/v1/fill/w_896,h_672,fp_0.49_0.55,q_90,enc_avif,quality_auto/dd35c7_c7aad62110e54a18b76589a1340bdb30~mv2.png",
    cardAltText:
      "Production photo from A Comedy of Tenors showing Gretchen Ugalde's elegant amber-toned Paris hotel suite at Okoboji Summer Theatre.",
    description:
      'Set in 1930s Paris, A Comedy of Tenors follows a producer assembling "the biggest concert in the history of Paris" as false identities, oversized egos, romance, and slamming doors send the evening into chaos.',
    designStatement:
      "It has been a dream of mine to design an elegant interior box set because of the aesthetic expectation and to solve the layout. Something that was important to me in this design was to get the essence of a warm vintage/1930s glow, almost like an amber filter.",
    credits: {
      director: "Stephen Brotebeck",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Ashley Harrison",
      lightingDesigner: "Darby Davis",
      soundDesigner: "Michael Burke",
      stageManager: "Katie Cohen",
      photography: "Michael Mckim",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_c5ee2d0956dd45a9a17e01d8e9305828~mv2.png",
          ],
          altTexts: [
            "Rendering for A Comedy of Tenors showing the elegant Paris interior with warm amber lighting and a classic box-set composition.",
          ],
        },
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_07a9fd53e80842bc9214aa8808a1d20e~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_9dc41c5c74584bf38a525f3506b0a907~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_fcbac69b33ae4055ab187badf41e5cd3~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_2aa8bdbceed945ce97f3a37d8a6fa8f1~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_c7aad62110e54a18b76589a1340bdb30~mv2.png",
      ],
      research: [
        "https://static.wixstatic.com/media/dd35c7_003b192189a8459a85d27102d24e9a77~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_53629c34c405499fa66aaaabb4a02a02~mv2.png",
      ],
      drafting: [
        "https://static.wixstatic.com/media/dd35c7_9cbda6a96d6a4597a1b93dd472dbab70~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_08952c6e2e8f4ddb999ff62f871795cc~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_1e2bd17e094747c999cc5e6511166703~mv2.png",
      ],
    },
    galleryAltText: {
      production: [
        "Production photo from A Comedy of Tenors showing the elegant hotel-room set in performance under warm amber lighting.",
        "Production photo from A Comedy of Tenors featuring performers moving through Gretchen Ugalde's Paris interior box set.",
        "Production photo from A Comedy of Tenors showing the farcical bedroom-door layout and period furnishings in action.",
        "Production photo from A Comedy of Tenors capturing the warm vintage palette and the set's layered entry points.",
        "Production photo from A Comedy of Tenors showing the ensemble staged within the polished 1930s interior.",
      ],
      research: [
        "Research image for A Comedy of Tenors exploring elegant Paris interiors and period visual references for the production.",
        "Research collage for A Comedy of Tenors gathering warm vintage references and 1930s decorative details.",
      ],
      drafting: [
        "Drafting sheet for A Comedy of Tenors showing the scenic layout and construction details for the interior set.",
        "Drafting plate for A Comedy of Tenors focused on technical elevations and practical door placement.",
        "Drafting image for A Comedy of Tenors showing additional scenic construction information for the box set.",
      ],
    },
  },
  {
    id: "9to5",
    title: "9 to 5",
    theatre: "Stephens College",
    year: "2022",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_e376c27fc71f4e2eba62bce902f1f174~mv2.png/v1/fill/w_896,h_672,fp_0.52_0.62,q_90,enc_avif,quality_auto/dd35c7_e376c27fc71f4e2eba62bce902f1f174~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_e376c27fc71f4e2eba62bce902f1f174~mv2.png/v1/fill/w_896,h_672,fp_0.52_0.62,q_90,enc_avif,quality_auto/dd35c7_e376c27fc71f4e2eba62bce902f1f174~mv2.png",
    cardAltText:
      "Production photo from 9 to 5 showing Gretchen Ugalde's office-world scenic design for Stephens College.",
    description:
      "Scenic design archive for 9 to 5 at Stephens College, featuring Gretchen Ugalde's Vectorworks renderings, production photography, research, and drafting from the March 2022 production.",
    designStatement:
      "Scenic renderings created in Vectorworks.",
    credits: {
      director: "Bernie Monroe",
      choreographer: "Bernie Monroe",
      musicDirector: "Jamie Grisham",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Martha Clarke",
      lightingDesigner: "Lennox Emery",
      soundDesigner: "Michael Burke",
      stageManager: "Darby Davis",
      photography: "Rebecca Allen",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_3c61cf1f927f4f0d9348198c397bf50e~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_c3932bb3bf564ee5b974177742119d61~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_6d0692a9a32b4d3297bc82f802d1a398~mv2.png",
          ],
          altTexts: [
            "Rendering for 9 to 5 showing Gretchen Ugalde's office set with multilevel platforms and a bright corporate palette.",
            "Rendering for 9 to 5 featuring another view of the workplace environment and its layered scenic composition.",
            "Rendering for 9 to 5 showing the office architecture and playing levels from a different stage perspective.",
          ],
        },
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_f3b5d37d704c4d818a43aaf05312ce80~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_191101235bac4b989e2f9a73cc9c71be~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_5e8f43933bd24a57bfc31e47df61127f~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_e47b2776ffbb4e03b728a2b7577e0bc6~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_b2e32466b5124c64b2a85fb85578a055~mv2.png",
      ],
      research: [
        "https://static.wixstatic.com/media/dd35c7_e5c51a94358b48deb2b8c63c65d561ef~mv2.png",
      ],
      drafting: [
        "https://static.wixstatic.com/media/dd35c7_98faab83735249afa2d080c9b69626c4~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_84ad65fd44364206aae943f4dfdbaee6~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_38ee40cdd1354671a0ffa4e64d6a9015~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_78ad96fbae8c4f468b52a1671aa8cfd5~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_7f71560a54df4366bbb9a28958b2d747~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_ef52ba821e1f4c4e811629c70d0974ca~mv2.png",
      ],
    },
    galleryAltText: {
      production: [
        "Production photo from 9 to 5 showing the full office set in performance at Stephens College.",
        "Production photo from 9 to 5 capturing performers within Gretchen Ugalde's workplace scenic environment.",
        "Production photo from 9 to 5 showing another stage picture within the multilevel office-world design.",
        "Production photo from 9 to 5 highlighting the corporate palette and playing areas of the set.",
        "Production photo from 9 to 5 showing the ensemble staged across the office environment under performance lighting.",
      ],
      research: [
        "Research board for 9 to 5 gathering visual references for the production's corporate world and period style.",
      ],
      drafting: [
        "Drafting sheet for 9 to 5 showing the first technical plate for the office scenic design.",
        "Drafting sheet for 9 to 5 detailing another scenic view of the production's set construction.",
        "Drafting image for 9 to 5 showing additional technical linework for the scenic build.",
        "Drafting sheet for 9 to 5 focused on another plate from the production's technical package.",
        "Drafting image for 9 to 5 showing more construction information for the office set.",
        "Drafting sheet for 9 to 5 with another technical view from Gretchen Ugalde's drafting package.",
      ],
    },
  },
  {
    id: "tea",
    title: "Tea",
    theatre: "University of California, Irvine",
    year: "2019",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_a6a42fa9bd4b46ac8cfb6fd59d2189e6~mv2.png/v1/fill/w_898,h_672,fp_0.5_0.54,q_90,enc_avif,quality_auto/dd35c7_a6a42fa9bd4b46ac8cfb6fd59d2189e6~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_a6a42fa9bd4b46ac8cfb6fd59d2189e6~mv2.png/v1/fill/w_898,h_672,fp_0.5_0.54,q_90,enc_avif,quality_auto/dd35c7_a6a42fa9bd4b46ac8cfb6fd59d2189e6~mv2.png",
    cardAltText:
      "Production photo from Tea showing Gretchen Ugalde's hexagonal tatami-mat set and shoji screen environment at UCI.",
    description:
      "Velina Hasu Houston's play Tea follows five Japanese war brides who moved to Riley, Kansas after World War II. The balance of life in their small immigrant community is undone when Himiko dies by suicide, and her four friends gather to clean her house, mourn her death, and try to make sense of their own lives while her ghost remains among them.",
    designStatement:
      "This project will always make me feel like I had won the lottery! I was working with my friends who had similar yet unique experiences as Asian Americans, and we were passionate about giving the very best of ourselves to make this independent project an exceptional experience for the community! We collaborated with the Asian-American studies department to give educational talkbacks after the shows. And during my time at UCI, I had not seen as many Asian-American families in the audience as I had with this production.\n\nThis set consisted of a hexagon-shaped tatami matt and shoji screens directly in front of each corner of the matt. The matt has 5 walkways, representing the lives of each woman in this story. The shoji screens surrounding the matt helped the production play with the theme of ghosts being among us as actors walked behind the screens.",
    credits: {
      director: "Kelley Ho",
      dramaturgy: "(Kuya) Elijah Punzal",
      scenicDesigner: "Gretchen Ugalde & (Bestie) Hannah Tran",
      costumeDesigner: "Adela Ahn",
      lightingDesigner: "Shelby Thach",
      soundDesigner: "Pan-Pan Gou",
      stageManager: "Rusty Dimagiba",
      photography: "Jesus Lopez",
    },
    galleries: {
      production: [
        "https://static.wixstatic.com/media/dd35c7_a6a42fa9bd4b46ac8cfb6fd59d2189e6~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_705cf87b5bb242018f5eb989010ac8f0~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_291d91060b43486295af7b2c6b692624~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_304a5de1b782453f91600af54d629b0d~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_112ed2fc2fd64539804160c27cf12f87~mv2.png",
      ],
    },
    galleryAltText: {
      production: [
        "Production photo from Tea showing performers gathered around the hexagonal tatami platform with shoji screens framing the stage picture.",
        "Production photo from Tea capturing the ghostly atmosphere of the production as performers move across the five radiating walkways.",
        "Production photo from Tea showing the ensemble arranged within Gretchen Ugalde's ceremonial playing space at UCI.",
        "Production photo from Tea highlighting the translucent shoji screens and the layered pathways of the set under performance lighting.",
        "Production photo from Tea showing the full scenic composition with the central tatami form and surrounding screen structure.",
      ],
    },
    layout: {
      designStatementAfterProduction: true,
    },
  },
  {
    id: "gloria",
    title: "Gloria",
    theatre: "University of California, Irvine",
    year: "2025",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_dd01fdf33344400a8041a8bcb43fd2d5~mv2.jpg/v1/fill/w_898,h_672,fp_0.48_0.37,q_90,enc_avif,quality_auto/dd35c7_dd01fdf33344400a8041a8bcb43fd2d5~mv2.jpg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_dd01fdf33344400a8041a8bcb43fd2d5~mv2.jpg/v1/fill/w_898,h_672,fp_0.48_0.37,q_90,enc_avif,quality_auto/dd35c7_dd01fdf33344400a8041a8bcb43fd2d5~mv2.jpg",
    cardAltText:
      "Production photo from Gloria showing performers in Gretchen Ugalde's sleek alley-stage office environment at UCI.",
    description:
      "Gloria explores ambition, image, and workplace cruelty inside the pressure cooker of a contemporary editorial office, moving through a series of sharply distinct but spiritually similar urban interiors.",
    designStatement:
      "I was so excited to design Gloria because I rarely get the chance to do realism. It is a style that is tough to pull off. It is expensive and it really depends on having the right stock, which has not always been possible in the places I have worked. So when the opportunity came at UCI, I knew I had to jump in. When I first read the play, what stood out to me was how the characters are so focused on their own goals that they lose awareness of the toxic environment they have created. That lack of awareness blinds them to the pain in the room until it is too late. This idea of awareness, of yourself, of others, and of how your energy shapes the space around you, became central to my design. That is why I chose the alley configuration: not just to highlight the intensity of the traumatic scene, but also so audiences can see each other, a reminder that this is theatre, not real life, while still experiencing it together.\n\nAt the same time, I found myself drawn to modern architecture and the way spaces can be transformed with just graphics and furniture. There is an old Jack in the Box near UCI that closed, and when they stripped away the branding and furniture, suddenly it looked like a chic new restaurant. That moment made me realize how powerful small details are in shaping how we see public spaces. For this show, I leaned into that idea, designing custom graphics and picking specific furniture to define each of the three locations. My hope is that the audience feels transported into three very different environments, while also noticing the underlying sameness, echoing Lori's final line: \"Isn't it funny how these places are just sort of the same? Almost down to the same people. Why is that, you think?\"",
    credits: {
      director: "Andrew Borba",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Christina J. Toth",
      lightingDesigner: "Mac McDermott",
      soundDesigner: "Andrew Yoder",
      stageManager: "Jo McEvoy",
      photography: "Jeanine Hill",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings and visual development for the production.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_57525f83bc5248e8945c8697139d98a3~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_b6cb25726a294a279aab62c0d175608f~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_5527e00e8346490bb9cadf4fe215ce33~mv2.jpg",
          ],
          altTexts: [
            "Rendering for Gloria showing the first office environment arranged in an alley configuration with audience facing audience.",
            "Rendering for Gloria depicting the clean-lined editorial workspace with modern furniture and graphic wall treatments.",
            "Rendering for Gloria focused on the contemporary office architecture and the tension of the narrow playing space.",
          ],
        },
        {
          images: [
            "https://static.wixstatic.com/media/dd35c7_f8cfe0613aae4354b20d32e0c48e7e83~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_5c91a849900643ac8a2c6fb6464c1e44~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_bd22fff84d7c4aa8bd3b5e7b1205746e~mv2.jpg",
          ],
          altTexts: [
            "Rendering for Gloria showing a second location transformed through branded graphics and sharply contemporary furnishings.",
            "Rendering for Gloria depicting another urban interior with a restrained palette and polished architectural surfaces.",
            "Rendering for Gloria showing how the production shifts location while preserving an underlying sameness between spaces.",
          ],
        },
      ],
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_57525f83bc5248e8945c8697139d98a3~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_b6cb25726a294a279aab62c0d175608f~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_5527e00e8346490bb9cadf4fe215ce33~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_f8cfe0613aae4354b20d32e0c48e7e83~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_5c91a849900643ac8a2c6fb6464c1e44~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_bd22fff84d7c4aa8bd3b5e7b1205746e~mv2.jpg",
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_3e458cf51b6644bc95b27712c2fea138~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_c1f0ff293b7e4b01b48ef01008f5fea8~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_2154943eddef4fe2af4b030adf6e56fd~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_8f9faea09aaf4a90ab1c276511e73a65~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_ab6ba69ad38f4b9bb3b21cb4cb5bb75c~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_57d35bfc9cd2462e8d4cea2cbaa5ced7~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_8a324f214fbc4c4fba7c75e2b9a19e34~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_fa4a0be9a33f41de9bfaf7fb8356e2c4~mv2.jpg",
      ],
      drafting: [
        "https://static.wixstatic.com/media/dd35c7_fa4ffc2fc9824d0486837524e2e23eaa~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_c69ec9471c284456a8e2ca4594aec857~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_2da32ff72b304b7e8c75802a341d6df3~mv2.jpg",
      ],
    },
    galleryAltText: {
      production: [
        "Production photo from Gloria showing performers in the first office setting framed by modern furniture and cool-toned lighting.",
        "Production photo from Gloria focused on performers gathered around the central editorial office environment.",
        "Production photo from Gloria showing the alley staging and the audience-facing architecture of the set.",
        "Production photo from Gloria capturing a second location with bold graphic surfaces and contemporary furnishings.",
        "Production photo from Gloria showing performers in a sleek public-facing environment shaped by custom branding details.",
        "Production photo from Gloria highlighting a Los Angeles location within the same polished architectural language.",
        "Production photo from Gloria emphasizing the long alley sightlines and shared audience perspective.",
        "Production photo from Gloria showing the final location with performers framed by the repeated visual logic of the design.",
      ],
      drafting: [
        "Drafting sheet for Gloria showing the first technical plate for the scenic layout.",
        "Drafting sheet for Gloria detailing construction information for the contemporary interior architecture.",
        "Drafting sheet for Gloria showing another technical view of the alley-stage scenic elements.",
      ],
    },
  },
  {
    id: "noisesoff",
    title: "Noises Off",
    theatre: "",
    year: "",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_74c813546c35425ea02006a3d1c0a320~mv2.jpg/v1/fill/w_896,h_672,fp_0.5_0.62,q_90,enc_avif,quality_auto/dd35c7_74c813546c35425ea02006a3d1c0a320~mv2.jpg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_74c813546c35425ea02006a3d1c0a320~mv2.jpg/v1/fill/w_896,h_672,fp_0.5_0.62,q_90,enc_avif,quality_auto/dd35c7_74c813546c35425ea02006a3d1c0a320~mv2.jpg",
    description: pendingDescription,
    designStatement: pendingStatement,
    credits: {
      scenicDesigner: "Gretchen Ugalde",
    },
    galleries: {
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_74c813546c35425ea02006a3d1c0a320~mv2.jpg/v1/fill/w_896,h_672,fp_0.5_0.62,q_90,enc_avif,quality_auto/dd35c7_74c813546c35425ea02006a3d1c0a320~mv2.jpg",
      ],
    },
  },
  {
    id: "sidebyside",
    title: "Side by Side by Sondheim",
    theatre: "Stephens College",
    year: "2022",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_b418b90cf4884627b18d6e31a945a7cb~mv2.png/v1/fill/w_896,h_672,fp_0.5_0.6,q_90,enc_avif,quality_auto/dd35c7_b418b90cf4884627b18d6e31a945a7cb~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_b418b90cf4884627b18d6e31a945a7cb~mv2.png/v1/fill/w_896,h_672,fp_0.5_0.6,q_90,enc_avif,quality_auto/dd35c7_b418b90cf4884627b18d6e31a945a7cb~mv2.png",
    cardAltText:
      "Production photo from Side by Side by Sondheim showing Gretchen Ugalde's scenic design at Stephens College.",
    description:
      "Scenic design archive for Side by Side by Sondheim at Stephens College, featuring Gretchen Ugalde's renderings and Rebecca Allen's production photography from the September 2022 production.",
    designStatement:
      "Side By Side By Sondheim is a music revue that celebrates Stephen Sondheim's iconic contributions to theatre history.\n\nThe design of this production pays tribute to the birthplace of Stephen Sondheim's legendary work, New York City's theatre district! Through the dazzling marquee lights, the gritty textures of the city, and the 13 show posters and signs- we wanted to transport our audience to the streets of New York and the Broadway world that Sondheim redefined.",
    credits: {
      director: "Bernie Monroe",
      choreographer: "Bernie Monroe",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Bri Johnson",
      lightingDesigner: "Lennox Emery",
      soundDesigner: "Michael Burke",
      stageManager: "Katie Cohen",
      photography: "Rebecca Allen",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_1c79459acf064aceb639bf0c6b6f90c0~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_1dc3c50ced454b3482ad7465922609c2~mv2.png",
          ],
          altTexts: [
            "Rendering for Side by Side by Sondheim showing Gretchen Ugalde's scenic environment for the Stephens College production.",
            "Second rendering for Side by Side by Sondheim showing another view of the scenic design and playing space.",
          ],
        },
        {
          title: "Production Photos",
          mode: "masonry" as const,
          images: [
            "https://static.wixstatic.com/media/dd35c7_c25d228615f04f9fa452349932992a8e~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_ae64dfe8001245b2959ac724753dc98c~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_b418b90cf4884627b18d6e31a945a7cb~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_01982387c1ee4ac0a403dabdfdea76b5~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_ca48e84f949b44d28ed7c14734c16c6c~mv2.png",
          ],
          altTexts: [
            "Production photo from Side by Side by Sondheim showing the scenic design in performance at Stephens College.",
            "Production photo from Side by Side by Sondheim capturing another stage moment within Gretchen Ugalde's set.",
            "Production photo from Side by Side by Sondheim showing performers framed by the scenic environment under stage lighting.",
            "Production photo from Side by Side by Sondheim highlighting a different composition within the production design.",
            "Production photo from Side by Side by Sondheim showing the ensemble and scenic world in performance.",
          ],
        },
      ],
    },
    layout: {
      designStatementAfterProduction: true,
    },
  },
  {
    id: "ripcord",
    title: "Ripcord",
    theatre: "Maples Repertory Theatre",
    year: "2022",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_00ca3bfdca144f1fa2b505cb94700839~mv2.png/v1/fill/w_898,h_672,q_90,enc_avif,quality_auto/dd35c7_00ca3bfdca144f1fa2b505cb94700839~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_00ca3bfdca144f1fa2b505cb94700839~mv2.png/v1/fill/w_898,h_672,q_90,enc_avif,quality_auto/dd35c7_00ca3bfdca144f1fa2b505cb94700839~mv2.png",
    cardAltText:
      "Production photo from Ripcord showing Gretchen Ugalde's scenic design at Maples Repertory Theatre.",
    description:
      "Scenic design archive for Ripcord at Maples Repertory Theatre, featuring Gretchen Ugalde's rendering and production photography from the 2022 production.",
    designStatement:
      "Set in a sunny room on an upper floor of a Senior Living Facility, Ripcord is a comedy that follows a cranky Abby and a high-spirited Marilyn who cannot stand living with each other. The two wildly different women place a bet which intensifies into a risky game of cutthroat competition that exposes not just the stubbornness of these women, but also greater truths that each would rather remain mysterious.\n\nAfter designing a handful of suggestive realism sets, creating something modern like this was a lot of fun for me! I studied features in a senior-living apartment, and I was focused on the color story to complement the bright, funny, and hopeful themes of this story.",
    credits: {
      director: "Peter Reynolds",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Moss Royer",
      lightingDesigner: "Chris Riley",
      soundDesigner: "Chris Riley",
      stageManager: "Ally Taylor",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_a12904326ead470ab79b25a9a67be3fb~mv2.png",
          ],
          altTexts: [
            "Rendering for Ripcord showing Gretchen Ugalde's scenic environment for the production at Maples Repertory Theatre.",
          ],
        },
        {
          title: "Production Photos",
          mode: "masonry" as const,
          images: [
            "https://static.wixstatic.com/media/dd35c7_12232f7d1e3f431dabd4a1248a15d659~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_1316d580c7374ec78ce9086dea0684d2~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_d20595a30c92436fa08f77e28f390e80~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_1658667cc73d4822aaf871fa8beb883f~mv2.png",
          ],
          altTexts: [
            "Production photo from Ripcord showing the scenic design in performance at Maples Repertory Theatre.",
            "Production photo from Ripcord capturing another moment within Gretchen Ugalde's set for the production.",
            "Production photo from Ripcord showing the stage environment from a different angle during performance.",
            "Production photo from Ripcord highlighting the full scenic composition under production lighting.",
          ],
        },
      ],
    },
  },
  {
    id: "livingout",
    title: "Living Out",
    theatre: "University of California, Irvine",
    year: "2020",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_e2b026504ba34636adedb6dc30119269~mv2.jpg/v1/fill/w_886,h_664,fp_0.56_0.55,q_90,enc_avif,quality_auto/dd35c7_e2b026504ba34636adedb6dc30119269~mv2.jpg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_e2b026504ba34636adedb6dc30119269~mv2.jpg/v1/fill/w_886,h_664,fp_0.56_0.55,q_90,enc_avif,quality_auto/dd35c7_e2b026504ba34636adedb6dc30119269~mv2.jpg",
    cardAltText:
      "Production photo from Living Out showing performers in Gretchen Ugalde's Los Angeles-inspired scenic environment.",
    description:
      "Lisa Loomer's Living Out plunges the audience into the brutally honest world of working mothers in today's culture. The play centers around two women from vastly different backgrounds balancing work and parenthood in Los Angeles, California.",
    designStatement:
      "After 2.5 years spent at UC Irvine, this was my first main-stage scenic design. When working with the director, she described the world as cold, rigid, and stressfully face-paced.\n\nThe set consists of large freeway signs, skyline cutouts, and a road map on the floor which all indicate to the audience that they're now on the freeways of Los Angeles. I intended to give the sensation that we are now in this high-speed, cutthroat world that the mothers of the story are living in. And the use of the same furniture pieces rearranged for both households is to highlight the parallels between the two families.",
    credits: {
      director: "Jane Page",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Sebastian Rock",
      lightingDesigner: "Savannah Van Leuvan",
      soundDesigner: "Meghan Roche",
      stageManager: "Arielle Singer",
      photography: "Jazley Faith",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_8c48eedfc9bf4e1eb59ea66e1c515e41~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_c87a614e93f04dd0bcfe5033f273e6ff~mv2.png",
          ],
          altTexts: [
            "Scenic rendering for Living Out showing the freeway-sign architecture and mapped floor treatment of the set.",
            "Scenic rendering for Living Out showing the Los Angeles-inspired stage composition from a second angle.",
          ],
        },
        {
          title: "Production Photos",
          mode: "masonry" as const,
          images: [
            "https://static.wixstatic.com/media/dd35c7_44909094cc34431f961a328e3056b4dd~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_7bb7400561cc40a3965b8512ecb70588~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_3e7bee91d952430584240c6835087a7c~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_fc436ccd048f4d35a3ad821b2033fea0~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_4a19e43a03bb45f1832a156265553fce~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_2237b12ee8464bdeb2c9fd4ee370cb05~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_e72edd115ca94fc3853d34940031a526~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_f3b3a27b329147ae829abe03eec0c087~mv2.png",
          ],
          altTexts: [
            "Wide production photo from Living Out showing the full scenic environment and freeway-inspired framing.",
            "Production photo from Living Out capturing the stage picture across Gretchen Ugalde's Los Angeles setting.",
            "Vertical production photo from Living Out focused on performers within the urban scenic world.",
            "Production photo from Living Out showing another moment inside the mapped-floor environment.",
            "Production photo from Living Out highlighting the actors against the angular skyline and signage motifs.",
            "Production photo from Living Out capturing the shared furniture and contrasting domestic worlds on stage.",
            "Vertical production photo from Living Out emphasizing performance within the layered city composition.",
            "Production photo from Living Out showing the scenic design under stage lighting from a wide audience view.",
          ],
        },
      ],
    },
    layout: {
      designStatementAfterProduction: true,
    },
  },
  {
    id: "vanyasoniamashaandspike",
    title: "Vanya and Sonia and Masha and Spike",
    theatre: "Okoboji Summer Theatre",
    year: "2023",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_3c94393599354c2a8b30534b575f9773~mv2.png/v1/fill/w_898,h_672,q_90,enc_avif,quality_auto/dd35c7_3c94393599354c2a8b30534b575f9773~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_3c94393599354c2a8b30534b575f9773~mv2.png/v1/fill/w_898,h_672,q_90,enc_avif,quality_auto/dd35c7_3c94393599354c2a8b30534b575f9773~mv2.png",
    cardAltText:
      "Production photo from Vanya and Sonia and Masha and Spike showing Gretchen Ugalde's scenic design in performance at Okoboji Summer Theatre.",
    description:
      "Christopher Durang's Vanya and Sonia and Masha and Spike unfolds in a Pennsylvania farmhouse where simmering sibling tensions, theatrical entrances, and comic chaos all collide. Gretchen Ugalde's scenic design frames the production in a richly detailed domestic world built for sharp character comedy and high-energy ensemble moments.",
    designStatement: "",
    credits: {
      director: "Jim Bray",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Abby Humston",
      lightingDesigner: "Larry Ortiz",
      soundDesigner: "Kayla Slinger",
      stageManager: "Katie Cohen",
      photography: "Emma Schell",
    },
    galleries: {
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_40faba2a9ec24c15a1c46a7088affe78~mv2.png",
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_fa970cfc1a964b93b044828f69dcfad5~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_3c94393599354c2a8b30534b575f9773~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_b3f6aab443c146e8ae91f997b09f6857~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_9ee5bdcf0045406abbf1f050d16282e4~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_ac112d9444114dbea389b6786c015f07~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_ecbc167bb3ed49d399ee3220f50669b3~mv2.png",
      ],
    },
    galleryAltText: {
      renderings: [
        "Scenic rendering for Vanya and Sonia and Masha and Spike showing Gretchen Ugalde's setting for the Okoboji Summer Theatre production.",
      ],
      production: [
        "Production photo from Vanya and Sonia and Masha and Spike showing the scenic design in a full-stage performance moment.",
        "Production photo from Vanya and Sonia and Masha and Spike capturing the cast within Gretchen Ugalde's set at Okoboji Summer Theatre.",
        "Production photo from Vanya and Sonia and Masha and Spike highlighting another performance moment against the scenic environment.",
        "Production photo from Vanya and Sonia and Masha and Spike showing the stage picture from a different angle during performance.",
        "Production photo from Vanya and Sonia and Masha and Spike featuring the cast in Gretchen Ugalde's scenic composition.",
        "Production photo from Vanya and Sonia and Masha and Spike showing the production under performance lighting.",
      ],
    },
  },
  {
    id: "promisespromises",
    title: "Promises, Promises",
    theatre: "Okoboji Summer Theatre",
    year: "2023",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_f11e44946f8e41388eed7b9eed8aaea9~mv2.png/v1/fill/w_896,h_672,q_90,enc_avif,quality_auto/dd35c7_f11e44946f8e41388eed7b9eed8aaea9~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_f11e44946f8e41388eed7b9eed8aaea9~mv2.png/v1/fill/w_896,h_672,q_90,enc_avif,quality_auto/dd35c7_f11e44946f8e41388eed7b9eed8aaea9~mv2.png",
    cardAltText:
      "Production photo from Promises, Promises showing Gretchen Ugalde's scenic design in performance at Okoboji Summer Theatre.",
    description:
      "Promises, Promises brings together mid-century corporate polish, romantic comedy energy, and musical-theatre scale. Gretchen Ugalde's scenic design for the Okoboji Summer Theatre production supports that world with sleek architectural framing and performance images that move between intimate office scenes and larger ensemble moments.",
    designStatement: "",
    credits: {
      director: "Bernie Monroe",
      musicDirector: "Tom Andes",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Alice Christ",
      lightingDesigner: "Larry Ortiz",
      soundDesigner: "Kayla Slinger",
      stageManager: "Katie Cohen",
      photography: "Michael Mckim",
    },
    galleries: {
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_e4b8dac3df4c4b988664b4ed1bd6d7fc~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_2a19237cf19a47a094cb34e9a803bab8~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_0e557e4a9abc4cb88ac3d2b5849d1281~mv2.png",
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_f11e44946f8e41388eed7b9eed8aaea9~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_30c39ff162724efc82686e7d989d887f~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_7e6fd0d2d20a48c6ae856e8bf7dd6029~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_2f38a538526a4bb4a55d18fff7b51609~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_cd3020cf28d9415f8fab87848664be96~mv2.png",
      ],
    },
    galleryAltText: {
      renderings: [
        "Scenic rendering for Promises, Promises showing Gretchen Ugalde's stage environment for the Okoboji Summer Theatre production.",
        "Scenic rendering for Promises, Promises highlighting the architecture and staging composition from a second angle.",
        "Scenic rendering for Promises, Promises showing another view of the musical's sleek scenic framework.",
      ],
      production: [
        "Production photo from Promises, Promises showing the scenic design in a full-stage performance moment.",
        "Production photo from Promises, Promises capturing the cast within Gretchen Ugalde's set at Okoboji Summer Theatre.",
        "Production photo from Promises, Promises showing another performance image from the production.",
        "Production photo from Promises, Promises highlighting the scenic design under stage lighting.",
        "Production photo from Promises, Promises showing the musical's stage picture from a different angle.",
      ],
    },
  },
  {
    id: "importanceofbeingearnest",
    legacySlugs: ["copy-of-lucky-stiff"],
    title: "The Importance of Being Earnest",
    theatre: "Maples Repertory Theatre",
    year: "",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_e9bd1db1ad0d421c9113dab4148ecf10~mv2.jpg/v1/fill/w_896,h_597,fp_0.49_0.5,q_90,enc_avif,quality_auto/dd35c7_e9bd1db1ad0d421c9113dab4148ecf10~mv2.jpg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_e9bd1db1ad0d421c9113dab4148ecf10~mv2.jpg/v1/fill/w_896,h_597,fp_0.49_0.5,q_90,enc_avif,quality_auto/dd35c7_e9bd1db1ad0d421c9113dab4148ecf10~mv2.jpg",
    cardAltText:
      "Production photo from Importance of Being Earnest showing Gretchen Ugalde's scenic design in performance at Maples Repertory Theatre.",
    description:
      "The Importance of Being Earnest balances precision, wit, and theatrical elegance, and Gretchen Ugalde's design supports that world with a polished period setting built for fast entrances, social comedy, and sharply framed stage pictures. The production photography captures that mix of refinement and playful rhythm across the Maples Repertory Theatre staging.",
    designStatement: "",
    credits: {
      director: "Jef Awada",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Jack Smith",
      lightingDesigner: "Kristen Paige",
      soundDesigner: "Scott Murdock",
      stageManager: "Lydia PutaBirdonit Krause",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_698be772149b4e9aa5804679cfd6905a~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_94da14e9b20d4fafbcf28e51025c5407~mv2.jpg",
          ],
          altTexts: [
            "Scenic rendering for Importance of Being Earnest showing Gretchen Ugalde's period setting for the Maples Repertory Theatre production.",
            "Scenic rendering for Importance of Being Earnest showing a second view of the elegant stage composition.",
          ],
        },
        {
          title: "Production Photos",
          mode: "masonry" as const,
          images: [
            "https://static.wixstatic.com/media/dd35c7_2ab917b23fd949399829984fde17ebdf~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_f0f3e5f96293454090ad64627c5e4de6~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_ea9aac70c9bd41bc9e21eb807aa1c5d1~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_2630a8f5987644ebb413d95f6706fd7e~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_a953e38a411d466d9be382dd4590acee~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_ed22e7d0485d45f79e2f8bb790449548~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_e9bd1db1ad0d421c9113dab4148ecf10~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_8511fbd5e7924a2c9dea473ed24287b4~mv2.jpg",
          ],
          altTexts: [
            "Production photo from Importance of Being Earnest showing the scenic design in a full-stage performance moment.",
            "Production photo from Importance of Being Earnest capturing the cast within Gretchen Ugalde's set at Maples Repertory Theatre.",
            "Production photo from Importance of Being Earnest showing another performance image from the production.",
            "Production photo from Importance of Being Earnest highlighting the scenic design and costume palette in performance.",
            "Vertical production photo from Importance of Being Earnest emphasizing the stage picture and scenic architecture.",
            "Production photo from Importance of Being Earnest showing the ensemble and scenic composition from another angle.",
            "Production photo from Importance of Being Earnest featuring the refined period setting in performance.",
            "Production photo from Importance of Being Earnest showing the production under stage lighting from a wider audience view.",
          ],
        },
      ],
    },
  },
  {
    id: "luckystiff",
    title: "Lucky Stiff",
    theatre: "Maples Repertory Theatre",
    year: "",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_1f355b53c08140fa88cb362a5e4905dd~mv2.jpeg/v1/fill/w_896,h_597,q_90,enc_avif,quality_auto/dd35c7_1f355b53c08140fa88cb362a5e4905dd~mv2.jpeg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_1f355b53c08140fa88cb362a5e4905dd~mv2.jpeg/v1/fill/w_896,h_597,q_90,enc_avif,quality_auto/dd35c7_1f355b53c08140fa88cb362a5e4905dd~mv2.jpeg",
    cardAltText:
      "Production photo from Lucky Stiff showing Gretchen Ugalde's playful scenic design for Maples Repertory Theatre.",
    description:
      "Lucky Stiff is a farcical musical comedy that moves through a heightened world of mistaken identities, inheritance schemes, and quick theatrical reversals. Gretchen Ugalde's design supports that fast-moving comic energy with a bright, adaptable environment that keeps the production nimble while still giving each scene a strong visual personality.",
    designStatement: "",
    credits: {
      director: "Brandon McShaffrey",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Sarah Rosenkranz",
      lightingDesigner: "Shon Causer",
      soundDesigner: "Scott Murdock",
      stageManager: "Lydia PutaBirdonit Krause",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          description: "Scenic renderings, created in Vectorworks.",
          images: [
            "https://static.wixstatic.com/media/dd35c7_d4fdd33dee9c4c6db325dfe08fac56d3~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_01671b5a94e6455bbca70fae3f8c0ad9~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_f465241ae3474c5bacfbf5d83a5543e1~mv2.jpg",
            "https://static.wixstatic.com/media/dd35c7_1f355b53c08140fa88cb362a5e4905dd~mv2.jpeg",
          ],
          altTexts: [
            "Rendering for Lucky Stiff showing Gretchen Ugalde's primary scenic composition for the musical's comic world.",
            "Rendering for Lucky Stiff showing another scene configuration with the same playful scenic vocabulary.",
            "Rendering for Lucky Stiff highlighting the production's bright palette and flexible stage picture.",
            "Rendering for Lucky Stiff showing the scenic design from a performance-centered perspective.",
          ],
        },
      ],
      production: [
        "https://static.wixstatic.com/media/dd35c7_1f355b53c08140fa88cb362a5e4905dd~mv2.jpeg",
        "https://static.wixstatic.com/media/dd35c7_eb315a9d01aa4dd58b5cd6fc7d2aaa13~mv2.jpeg",
        "https://static.wixstatic.com/media/dd35c7_477f02cc64d04d19b529e86d88849b63~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_e746185cff3b48b8bad5a81f0d119edd~mv2.jpeg",
        "https://static.wixstatic.com/media/dd35c7_787cf027cddf4f638bc411a39b75f63c~mv2.jpg",
        "https://static.wixstatic.com/media/dd35c7_d85a4e0b618244d28a5c88186a5ee053~mv2.jpg",
      ],
    },
    galleryAltText: {
      production: [
        "Production photo from Lucky Stiff showing the cast within Gretchen Ugalde's scenic design at Maples Repertory Theatre.",
        "Production photo from Lucky Stiff capturing another comic performance moment within the scenic environment.",
        "Production photo from Lucky Stiff showing a wider stage picture with the set supporting the musical's farcical action.",
        "Production photo from Lucky Stiff highlighting the scenic palette and the production's playful atmosphere.",
        "Production photo from Lucky Stiff showing the cast interacting with the scenery in performance.",
        "Production photo from Lucky Stiff capturing another stage moment from the Maples Repertory Theatre production.",
      ],
    },
  },
  {
    id: "paintingchurches",
    title: "Painting Churches",
    theatre: "Okoboji Summer Theatre",
    year: "2022",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_41a8c3a4cbf44629827466dc54c21008~mv2.png/v1/fill/w_896,h_672,q_90,enc_avif,quality_auto/dd35c7_41a8c3a4cbf44629827466dc54c21008~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_41a8c3a4cbf44629827466dc54c21008~mv2.png/v1/fill/w_896,h_672,q_90,enc_avif,quality_auto/dd35c7_41a8c3a4cbf44629827466dc54c21008~mv2.png",
    cardAltText:
      "Production photo from Painting Churches showing Gretchen Ugalde's scenic design at Okoboji Summer Theatre.",
    description:
      "Painting Churches follows a family returning to the cluttered rooms of a longtime home as an artist daughter tries to paint her aging parents while they prepare to move. Gretchen Ugalde's design supports that emotional unpacking with a space that begins dense with memory and gradually opens toward a more spare, revealing final image.",
    designStatement:
      "Painting Churches is a story about a family with the surname of Church, including an artist's daughter who wants to paint a portrait of her aging parents. The daughter arrives to help her parents pack up the family home to downsize to a smaller cottage. With each item, they pack, memories are both conjured and unrecalled due to memory loss.\n\nThere is a lot of confrontation and trauma that the family unpacks to each other as they pack their home. It feels like the clutter in the main room is just as bad as the clutter in their hearts. As the family gets to know each other in a new and honest light, there become fewer and fewer items on stage. By the end, we are left with an empty room and a lonely artist's easel with the portrait.",
    credits: {
      director: "Courtney Crouse",
      scenicDesigner: "Gretchen Ugalde",
      costumeDesigner: "Briann Johnson",
      lightingDesigner: "Savannah Bell",
      soundDesigner: "Michael Burke",
      stageManager: "Lennox Emery",
    },
    galleries: {
      renderingBlocks: [
        {
          title: "Renderings",
          images: [
            "https://static.wixstatic.com/media/dd35c7_c487c50f3c014165b744089a4c8b4f75~mv2.png",
          ],
          altTexts: [
            "Rendering for Painting Churches showing the memory-filled family home that anchors Gretchen Ugalde's scenic design.",
          ],
        },
        {
          title: "Production Photos",
          mode: "masonry" as const,
          images: [
            "https://static.wixstatic.com/media/dd35c7_9aebe9f9f35c4e188200d0810e081858~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_78badd929c3e48f192e460b55e3345e1~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_7c7998f1797f429eba304990d02d4c8c~mv2.png",
            "https://static.wixstatic.com/media/dd35c7_837f1d2b33874926b6b85080ace0e040~mv2.png",
          ],
          altTexts: [
            "Production photo from Painting Churches showing the full scenic environment in performance at Okoboji Summer Theatre.",
            "Production photo from Painting Churches capturing performers within the layered domestic interior.",
            "Production photo from Painting Churches showing another performance moment within Gretchen Ugalde's family-home set.",
            "Production photo from Painting Churches highlighting the scenic composition as the emotional tension of the play unfolds.",
          ],
        },
      ],
    },
  },
  {
    id: "godsofcomedy",
    title: "Gods of Comedy",
    theatre: "Okoboji Summer Theatre",
    year: "2021",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_f6e31d35b1db462499a89e7a9d371cd8~mv2.png/v1/fill/w_896,h_672,q_90,enc_avif,quality_auto/dd35c7_f6e31d35b1db462499a89e7a9d371cd8~mv2.png",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_f6e31d35b1db462499a89e7a9d371cd8~mv2.png/v1/fill/w_896,h_672,q_90,enc_avif,quality_auto/dd35c7_f6e31d35b1db462499a89e7a9d371cd8~mv2.png",
    cardAltText:
      "Production photo from Gods of Comedy showing Gretchen Ugalde's scenic design at Okoboji Summer Theatre.",
    description:
      "Gods of Comedy follows two classics professors on a chaotic search for a lost Euripides manuscript as divine intervention pushes their day further and further off course. Gretchen Ugalde's scenic design supports that comic momentum with three distinct locations unified by a canopy of trees and foliage that ties the world together.",
    designStatement:
      "Ken Ludwig's The Gods of Comedy, follows a couple of college classics professors who are hunting for a missing Euripides manuscript. They find it, lose it, are aided by several Greek gods as they seek to locate it and along the way find their day filled with more than a little adventure.\n\nThree distinct scenes were created for this show, a street cafe on the Greek island of Naxos, a university professor's office, and a courtyard on the central campus. A canopy of trees and foliage borders unites all of these locations.",
    credits: {
      scenicDesigner: "Gretchen Ugalde",
    },
    layout: {
      designStatementAfterProduction: true,
    },
    galleries: {
      production: [
        "https://static.wixstatic.com/media/dd35c7_5e97095d5bd9488e937ea9543762aa2c~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_7b310ca953634b7ea6b2fb77c682c131~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_a5af28ad3b2441b7b161e461b6abb323~mv2.png",
        "https://static.wixstatic.com/media/dd35c7_d801c2b664154bf5a3b275d905429a6f~mv2.png",
      ],
    },
    galleryAltText: {
      production: [
        "Production photo from Gods of Comedy showing Gretchen Ugalde's scenic design in performance at Okoboji Summer Theatre.",
        "Production photo from Gods of Comedy capturing another stage moment within Gretchen Ugalde's scenic environment.",
        "Production photo from Gods of Comedy showing the cast moving through one of the production's distinct settings.",
        "Production photo from Gods of Comedy highlighting the scenic composition and foliage-framed world of the play.",
      ],
    },
  },
  {
    id: "baskerville",
    title: "Baskerville: A Sherlock Holmes Mystery",
    theatre: "",
    year: "",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_6290db6aef4f45b6a4e03b59931ac3fb~mv2.jpg/v1/fill/w_896,h_598,fp_0.48_0.36,q_90,enc_avif,quality_auto/dd35c7_6290db6aef4f45b6a4e03b59931ac3fb~mv2.jpg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_6290db6aef4f45b6a4e03b59931ac3fb~mv2.jpg/v1/fill/w_896,h_598,fp_0.48_0.36,q_90,enc_avif,quality_auto/dd35c7_6290db6aef4f45b6a4e03b59931ac3fb~mv2.jpg",
    description: pendingDescription,
    designStatement: pendingStatement,
    credits: {
      scenicDesigner: "Gretchen Ugalde",
    },
    galleries: {
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_6290db6aef4f45b6a4e03b59931ac3fb~mv2.jpg/v1/fill/w_896,h_598,fp_0.48_0.36,q_90,enc_avif,quality_auto/dd35c7_6290db6aef4f45b6a4e03b59931ac3fb~mv2.jpg",
      ],
    },
  },
  {
    id: "thelittlemermaid",
    title: "The Little Mermaid",
    theatre: "",
    year: "",
    category: "Scenic Design",
    heroImage:
      "https://static.wixstatic.com/media/dd35c7_dc01c8f8ff3c4c528f632d7fc5b1708b~mv2.jpg/v1/fill/w_896,h_603,fp_0.5_0.6,q_90,enc_avif,quality_auto/dd35c7_dc01c8f8ff3c4c528f632d7fc5b1708b~mv2.jpg",
    cardImage:
      "https://static.wixstatic.com/media/dd35c7_dc01c8f8ff3c4c528f632d7fc5b1708b~mv2.jpg/v1/fill/w_896,h_603,fp_0.5_0.6,q_90,enc_avif,quality_auto/dd35c7_dc01c8f8ff3c4c528f632d7fc5b1708b~mv2.jpg",
    description: pendingDescription,
    designStatement: pendingStatement,
    credits: {
      scenicDesigner: "Gretchen Ugalde",
    },
    galleries: {
      renderings: [
        "https://static.wixstatic.com/media/dd35c7_dc01c8f8ff3c4c528f632d7fc5b1708b~mv2.jpg/v1/fill/w_896,h_603,fp_0.5_0.6,q_90,enc_avif,quality_auto/dd35c7_dc01c8f8ff3c4c528f632d7fc5b1708b~mv2.jpg",
      ],
    },
  },
].sort((left, right) => {
  const leftIndex = portfolioOrder.indexOf(left.id as (typeof portfolioOrder)[number]);
  const rightIndex = portfolioOrder.indexOf(right.id as (typeof portfolioOrder)[number]);

  return leftIndex - rightIndex;
});

export function getProjectById(id: string) {
  return projects.find((project) => {
    const canonicalSlug = getProjectSlug(project);
    const legacySlugs = new Set([
      project.id,
      ...(project.legacySlugs ?? []),
    ]);

    return canonicalSlug === id || legacySlugs.has(id);
  });
}

export function getFeaturedProjects(limit = 6) {
  return projects.slice(0, limit);
}

export function getProjectSlug(project: Project) {
  return project.slug ?? slugifyProjectTitle(project.title);
}
