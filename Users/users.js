const usersGrid = document.getElementById("usersGrid");

// === USER VARIABLES ===
const userName = "CyberGhost_X";
const userRole = "Elite Developer";
const userBio = "Security enthusiast and tool creator. Building the next generation of privacy tools.";
const userTools = "24";
const userDownloads = "3892";
const userRating = "4.8";
const userOnline = true; // or false
const userConnected = false; // connected, pending, etc.

// === CREATE CARD ===
const card = document.createElement("div");
card.className = "user-card";

// --- STATUS ---
const status = document.createElement("div");
status.className = "user-status";
if (!userOnline) status.classList.add("offline");
card.appendChild(status);

// --- HEADER ---
const header = document.createElement("div");
header.className = "user-header";

const avatar = document.createElement("div");
avatar.className = "user-avatar";
avatar.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
stroke="currentColor" stroke-width="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
<circle cx="12" cy="7" r="4"/>
</svg>`;

const info = document.createElement("div");
info.className = "user-info";

const nameEl = document.createElement("div");
nameEl.className = "user-name";
nameEl.textContent = userName;

const roleEl = document.createElement("div");
roleEl.className = "user-role";
roleEl.textContent = userRole;

info.appendChild(nameEl);
info.appendChild(roleEl);
header.appendChild(avatar);
header.appendChild(info);
card.appendChild(header);

// --- STATS ---
const stats = document.createElement("div");
stats.className = "user-stats";

function makeStat(value, label) {
  const stat = document.createElement("div");
  stat.className = "user-stat";

  const val = document.createElement("span");
  val.className = "user-stat-value";
  val.textContent = value;

  const lbl = document.createElement("span");
  lbl.className = "user-stat-label";
  lbl.textContent = label;

  stat.appendChild(val);
  stat.appendChild(lbl);
  return stat;
}

stats.appendChild(makeStat(userTools, "Tools"));
stats.appendChild(makeStat(userDownloads, "Downloads"));
stats.appendChild(makeStat(userRating, "Rating"));
card.appendChild(stats);

// --- BIO ---
const bio = document.createElement("div");
bio.className = "user-bio";
bio.textContent = userBio;
card.appendChild(bio);

// --- ACTION BUTTONS ---
const actions = document.createElement("div");
actions.className = "user-actions";

const connectBtn = document.createElement("button");
connectBtn.className = "connect-btn";
if (userConnected) {
  connectBtn.classList.add("connected");
  connectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"/></svg> Connected`;
} else {
  connectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
  <circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/>
  <line x1="23" y1="11" x2="17" y2="11"/></svg> Connect`;
}

const viewBtn = document.createElement("button");
viewBtn.className = "view-profile-btn";
viewBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
viewBox="0 0 24 24" fill="none" stroke="currentColor"
stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
<circle cx="12" cy="12" r="3"/></svg> View`;

actions.appendChild(connectBtn);
actions.appendChild(viewBtn);
card.appendChild(actions);

// --- ADD TO GRID ---
usersGrid.appendChild(card);
