import { drizzle } from "drizzle-orm/mysql2";
import { projects, projectImages } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

async function seedGreaseProject() {
  console.log("Seeding Grease project...");

  // Insert Grease project
  const result = await db.insert(projects).values({
    slug: "grease",
    title: "Grease",
    theatre: "Okoboji Summer Theatre",
    year: "2023",
    category: "Musical",
    heroImage: "https://static.wixstatic.com/media/dd35c7_1d1fa7cc45074d8f9d85a333cd299c59~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_1d1fa7cc45074d8f9d85a333cd299c59~mv2.png",
    description: "Grease is a timeless American story that takes place in 1959 and follows Danny, Sandy, and all their friends as they navigate the teenage ups and downs of romance, high school, and learning who they are.",
    designStatement: "Designed for Okoboji Summer Theatre, I was inspired by the area's connection to the 1950s and how much the city itself feels like a time capsule of that period. As a fun surprise for the locals, I included elements of Okoboji in the design such as the floor tiles inspired by a beloved local diner and the Superior 71 Drive-In sign. Most of all, Grease is nostalgia, and I strived for the design to celebrate that nostalgia through the electric colors, the retro signage, and the retro-futuristic chrome accents.",
    directorName: "Stephen Brotebeck",
    choreographerName: "Stephen Brotebeck",
    musicDirectorName: "Tom Andes",
    scenicDesignerName: "Gretchen Ugalde",
    costumeDesignerName: "Ashley Harrison",
    lightingDesignerName: "Savannah Bell",
    soundDesignerName: "Austen Yim",
    stageManagerName: "Lexi Holder",
    photographyName: "Michael Mckim",
    displayOrder: 1,
    published: 1,
  });

  const projectId = Number(result[0].insertId);
  console.log(`Created project with ID: ${projectId}`);

  // Insert renderings (5 Vectorworks images)
  const renderings = [
    "https://static.wixstatic.com/media/dd35c7_1d1fa7cc45074d8f9d85a333cd299c59~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_1d1fa7cc45074d8f9d85a333cd299c59~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_ed643177b8cf419a8ad4f2ac1416e993~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_ed643177b8cf419a8ad4f2ac1416e993~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_bccacba9a8e8466c86085eedf79a18f4~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_bccacba9a8e8466c86085eedf79a18f4~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_deb84bc12ffd47cebfd37b5dd9b25776~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_deb84bc12ffd47cebfd37b5dd9b25776~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_6bcd42cd7a6f488aba131b8d14b7e28f~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_6bcd42cd7a6f488aba131b8d14b7e28f~mv2.png"
  ];

  for (let i = 0; i < renderings.length; i++) {
    await db.insert(projectImages).values({
      projectId,
      imageUrl: renderings[i],
      imageType: "rendering",
      displayOrder: i,
    });
  }
  console.log(`Inserted ${renderings.length} rendering images`);

  // Insert production photos (2 images)
  const production = [
    "https://static.wixstatic.com/media/dd35c7_b4524a289ef74532a2ee817f20a654e8~mv2.png/v1/fill/w_1200,h_675,q_90,enc_avif,quality_auto/dd35c7_b4524a289ef74532a2ee817f20a654e8~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_6e5e33fda8344f1fab19f6c40690b879~mv2.jpg/v1/fill/w_1200,h_675,q_90,enc_avif,quality_auto/dd35c7_6e5e33fda8344f1fab19f6c40690b879~mv2.jpg"
  ];

  for (let i = 0; i < production.length; i++) {
    await db.insert(projectImages).values({
      projectId,
      imageUrl: production[i],
      imageType: "production",
      displayOrder: i,
    });
  }
  console.log(`Inserted ${production.length} production images`);

  // Insert research images (3 images)
  const research = [
    "https://static.wixstatic.com/media/dd35c7_d921c26e3aca4140a2b1782df6d9a9e8~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_d921c26e3aca4140a2b1782df6d9a9e8~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_14a162c2b16241819d5e4527482e5a30~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_14a162c2b16241819d5e4527482e5a30~mv2.png",
    "https://static.wixstatic.com/media/dd35c7_3a30365225504bb6b28113b677d3ca90~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd35c7_3a30365225504bb6b28113b677d3ca90~mv2.png"
  ];

  for (let i = 0; i < research.length; i++) {
    await db.insert(projectImages).values({
      projectId,
      imageUrl: research[i],
      imageType: "research",
      displayOrder: i,
    });
  }
  console.log(`Inserted ${research.length} research images`);

  console.log("✅ Grease project seeded successfully!");
  process.exit(0);
}

seedGreaseProject().catch((error) => {
  console.error("Error seeding Grease project:", error);
  process.exit(1);
});
