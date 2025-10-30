
const marketContainer = document.getElementById("marketContainer");
function createProduct(){
// Create card elements
const card2 = document.createElement('div');
const product_img_wrapper = document.createElement("div");
const product_img = document.createElement("img");
product_img.src = "/Tools/tech.png";

const product_info = document.createElement("div");
const product_header = document.createElement("div");
const product_title = document.createElement("div");
const h3 = document.createElement("h3");
h3.textContent = "Tech god";

const price = document.createElement("span");
price.textContent = "$200";

const product_id = document.createElement("div");
const id = document.createElement("span");
id.textContent = "#p0014";
const copy_icon = document.createElement("span");
copy_icon.textContent = "📋";

const user_info = document.createElement("div");
const user_avatar = document.createElement("img");
user_avatar.src = "/Assets/avatars/male/male5.png";
user_avatar.style.width = "32px";
user_avatar.style.height = "32px";
user_avatar.style.borderRadius = "50%";
user_avatar.style.objectFit = "cover";

const user_name = document.createElement("span");
user_name.textContent = "Alex Morgan";
user_name.style.color = "#fff";
user_name.style.fontSize = "0.9rem";
user_name.style.fontWeight = "500";

const time_label = document.createElement("span");
time_label.textContent = "2 days ago";
time_label.style.color = "#888";
time_label.style.fontSize = "0.8rem";

// --- BUTTON SECTION ---
const button_group_top = document.createElement("div");
const btn_unlock = document.createElement("button");
const btn_info = document.createElement("button");
const btn_download = document.createElement("button");

btn_unlock.textContent = "Unlock";
btn_info.textContent = "Info";
btn_download.textContent = "Download";

// Apply button styles (shared)
const styleButton = (btn) => {
  btn.style.flex = "1";
  btn.style.padding = "10px";
  btn.style.fontSize = "0.9rem";
  btn.style.fontWeight = "600";
  btn.style.border = "1px solid #00ff7f33";
  btn.style.borderRadius = "6px";
  btn.style.background = "transparent";
  btn.style.color = "#00ff9c";
  btn.style.cursor = "pointer";
  btn.style.transition = "all 0.3s ease";
  btn.style.textAlign = "center";
  btn.style.fontFamily = "'Inter', sans-serif";
};
[btn_unlock, btn_info, btn_download].forEach(styleButton);

// Hover effects
[btn_unlock, btn_info, btn_download].forEach(btn => {
  btn.onmouseenter = () => (btn.style.background = "#00ff7f22");
  btn.onmouseleave = () => (btn.style.background = "transparent");
});

// Layout: Unlock + Info on one row
button_group_top.style.display = "flex";
button_group_top.style.gap = "10px";
button_group_top.style.marginTop = "10px";

// Layout: Download beneath (full width)
// Layout: Download beneath (full width)
btn_download.style.marginTop = "10px";
btn_download.style.width = "100%";
btn_download.style.display = "block";
btn_download.style.background = '#00ff7f22';
btn_download.style.height = '20px'; // 👈 reduced but visible height
btn_download.style.lineHeight = '0px'; // aligns text vertically
btn_download.style.fontSize = '0.85rem';
btn_download.style.color = '#00ff9c';
btn_download.style.border = "1px solid #00ff7f33";
btn_download.style.borderRadius = "6px";
btn_download.style.fontWeight = "600";
btn_download.style.cursor = "pointer";
btn_download.style.transition = "all 0.3s ease";

btn_download.onmouseenter = () => (btn_download.style.background = "#00ff7f33");
btn_download.onmouseleave = () => (btn_download.style.background = "#00ff7f22");

// Append Unlock + Info
button_group_top.appendChild(btn_unlock);
button_group_top.appendChild(btn_info);

// --- CARD STYLES ---
card2.style.background = "#111";
card2.style.border = "1px solid #00ff7f33";
card2.style.borderRadius = "12px";
card2.style.overflow = "hidden";
card2.style.transition = "all 0.3s ease";
card2.style.display = "flex";
card2.style.flexDirection = "column";
card2.style.height = "100%";
card2.style.margin = "12px";

// --- IMAGE WRAPPER ---
product_img_wrapper.style.width = "100%";
product_img_wrapper.style.height = "200px";
product_img_wrapper.style.overflow = "hidden";
product_img_wrapper.style.position = "relative";
product_img_wrapper.style.background = "#0a0a0a";

// --- IMAGE ---
product_img.style.width = "100%";
product_img.style.height = "100%";
product_img.style.objectFit = "cover";
product_img.style.transition = "transform 0.3s ease";

// --- PRODUCT INFO ---
product_info.style.padding = "16px";
product_info.style.display = "flex";
product_info.style.flexDirection = "column";
product_info.style.gap = "12px";
product_info.style.flex = "1";

// --- HEADER ---
product_header.style.display = "flex";
product_header.style.justifyContent = "space-between";
product_header.style.alignItems = "flex-start";
product_header.style.gap = "10px";

// --- TITLE ---
h3.style.fontSize = "1.05em";
h3.style.color = "#00ff9c";
h3.style.margin = "0";
h3.style.lineHeight = "1.3";
h3.style.wordBreak = "break-word";

// --- PRICE ---
price.style.background = "#00ff7f22";
price.style.color = "#00ff7f";
price.style.padding = "4px 8px";
price.style.borderRadius = "4px";
price.style.fontWeight = "bold";
price.style.fontSize = "0.9rem";
price.style.whiteSpace = "nowrap";
price.style.border = "1px solid #00ff7f33";

// --- PRODUCT ID ---
product_id.style.display = "flex";
product_id.style.alignItems = "center";
product_id.style.gap = "6px";
product_id.style.fontSize = "0.85rem";
product_id.style.color = "#888";
product_id.style.padding = "6px 10px";
product_id.style.background = "#0a0a0a";
product_id.style.borderRadius = "4px";
product_id.style.border = "1px solid #00ff7f22";

// --- COPY ICON ---
copy_icon.style.cursor = "pointer";
copy_icon.style.color = "#00ff7f";
copy_icon.style.transition = "all 0.2s";
copy_icon.style.fontSize = "1rem";

// --- USER INFO ---
user_info.style.display = "flex";
user_info.style.alignItems = "center";
user_info.style.justifyContent = "space-between";
user_info.style.gap = "10px";
user_info.style.padding = "10px";
user_info.style.background = "#0a0a0a";
user_info.style.borderRadius = "6px";
user_info.style.border = "1px solid #00ff7f22";

// --- STRUCTURE ---
product_img_wrapper.appendChild(product_img);
product_title.appendChild(h3);
product_header.appendChild(product_title);
product_header.appendChild(price);
product_id.appendChild(id);
product_id.appendChild(copy_icon);

const user_details = document.createElement("div");
user_details.style.display = "flex";
user_details.style.alignItems = "center";
user_details.style.gap = "10px";
user_details.appendChild(user_avatar);
user_details.appendChild(user_name);

user_info.appendChild(user_details);
user_info.appendChild(time_label);

product_info.appendChild(product_header);
product_info.appendChild(product_id);
product_info.appendChild(user_info);
product_info.appendChild(button_group_top);
product_info.appendChild(btn_download);

card2.appendChild(product_img_wrapper);
card2.appendChild(product_info);

marketContainer.appendChild(card2);
}

createProduct();