const https = require('https');

const API_URL = 'https://server.hetalbon.com/api/v1/cms/pages/69d3705a122e71dc4d47903a';

const galleryImages = [
  // Glassroom
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013312/DSC09533_50_acp5b6.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013324/DSC09533_131_indhix.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013329/DSC09533_135_oclczx.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013329/DSC09533_145_xljorc.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013333/DSC09533_127_yxenlx.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013466/Screenshot_2026-02-25_at_3.27.29_PM_ssj8oz.png", category: "glassroom" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013544/Screenshot_2026-02-25_at_3.28.46_PM_e91x5w.png", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174017/WhatsApp_Image_2025-06-27_at_15.08.32_1_z42iob.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174023/WhatsApp_Image_2025-06-27_at_15.08.32_3_iah0ce.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174020/WhatsApp_Image_2025-06-27_at_15.08.32_2_tcobdz.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174052/WhatsApp_Image_2025-06-27_at_15.08.32_10_sowdks.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174056/WhatsApp_Image_2025-06-27_at_15.08.32_vhmmp7.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174039/WhatsApp_Image_2025-06-27_at_15.08.32_7_jfcjae.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757255047/WhatsApp_Image_2025-09-07_at_7.53.01_PM_1_vkpx8x.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757255042/WhatsApp_Image_2025-09-07_at_7.53.01_PM_jlzgud.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174060/WhatsApp_Image_2025-06-27_at_15.32.56_1_towugu.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174068/WhatsApp_Image_2025-06-27_at_15.32.56_3_tgpynk.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174077/WhatsApp_Image_2025-06-27_at_15.32.56_5_bojomb.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174085/WhatsApp_Image_2025-06-27_at_15.32.56_7_tbftjj.jpg", category: "glassroom" },
  { url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174094/WhatsApp_Image_2025-06-27_at_15.32.56_9_cxa6f0.jpg", category: "glassroom" },

  // Rooms
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016323/DSC09533_71_gmjlmt.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016317/DSC09533_14_vlyy7y.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016312/DSC09533_121_s591h6.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016316/DSC09533_10_clzh7q.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_11_xrlrev.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016316/DSC09533_122_elg54u.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016297/DSC09533_1_ujajpd.jpg", category: "Rooms" },

  // Mud House
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016323/DSC09533_71_gmjlmt.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016323/DSC09533_72_mj88nk.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016317/DSC09533_14_vlyy7y.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016312/DSC09533_121_s591h6.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016316/DSC09533_10_clzh7q.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_11_xrlrev.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_81_x4qboe.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016304/DSC09533_46_zigla8.jpg", category: "Mud House" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016299/DSC09533_5_d2tlpo.jpg", category: "Mud House" }
];

// Group images by category
const grouped = {};
galleryImages.forEach(img => {
  if (!grouped[img.category]) {
    grouped[img.category] = [];
  }
  const title = img.url.split('/').pop().split('.')[0];
  grouped[img.category].push({
    url: img.url,
    title: title,
    story: ""
  });
});

const galleryValue = Object.keys(grouped).map(cat => ({
  category: cat,
  images: grouped[cat]
}));

const DRY_RUN = false; // Set to false to actually send the data to the API

console.log("------------------------------------------");
console.log("GALLERY UPLOAD SCRIPT");
console.log(`Mode: ${DRY_RUN ? 'DRY RUN (Viewing Payload Only)' : 'LIVE (Sending to API)'}`);
console.log("------------------------------------------");

const payload = {
  content: {
    header: { type: "text", value: "Our Experience" },
    description: { type: "text", value: "Immerse yourself in the tranquility of Sundarbans through our curated collection of moments. From premium glassroom views to the authentic charm of our mud houses." },
    gallery: {
      type: "gallery",
      value: galleryValue
    }
  }
};

const data = JSON.stringify(payload, null, 2);

console.log("PAYLOAD TO BE SENT:");
console.log(data);
console.log("------------------------------------------");

if (DRY_RUN) {
  console.log("DRY RUN: skipping API call. Set DRY_RUN = false in the script to execute.");
  process.exit(0);
}

const url = new URL(API_URL);
const options = {
  hostname: url.hostname,
  path: url.pathname,
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

console.log(`Sending payload to: ${API_URL}...`);
const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (d) => body += d);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Response: ${body}`);
    if (res.statusCode === 200) {
      console.log("SUCCESS: Gallery updated successfully!");
    } else {
      console.log("ERROR: Update failed.");
    }
  });
});

req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

req.write(data);
req.end();
