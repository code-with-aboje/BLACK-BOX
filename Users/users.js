import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { ref, set, getDatabase, push, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBsOwXNtfaWwEh3qaM0suXafOg6CYLzDC8",
  authDomain: "uamtv-c031c.firebaseapp.com",
  databaseURL: "https://uamtv-c031c-default-rtdb.firebaseio.com",
  projectId: "uamtv-c031c",
  storageBucket: "uamtv-c031c.firebasestorage.app",
  messagingSenderId: "9790917697",
  appId: "1:9790917697:web:275c8347b7688e0ac38ac0",
  measurementId: "G-RSXW1XBVQZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

// ✅ ADD THIS TEST CODE:
console.log('🔥 Firebase initialized:', app.name);
console.log('🔐 Auth ready:', auth.app.name);
console.log('💾 Database ready:', db.app.name);
console.log('📍 Database URL:', app.options.databaseURL);
const usersGrid = document.getElementById("usersGrid");

onValue(ref(db, "users"),(snapshot)=>{
  if(snapshot.exists()){
  
  const userData = snapshot.val();
  Object.keys(userData).forEach((keys) => {
  let nickName = userData[keys].nickname;
  let role = userData[keys].role;
  let userImage = userData[keys].avatar;
  console.log(userImage);
  
      // === USER VARIABLES ===
    const userName = nickName;
    const userRole = role;
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
    avatar.innerHTML = `<img src = "${userImage}" style="width:100px; height:100%; border-radius:50%;object-fit:fit;">`;
    
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
    
    console.log("user exists")
})
}else{
  const p = document.createElement("p");
  p.style.textAlign = "center";
  p.style.color = "white";
  p.textContent = "No Users yet";
  p.style.fontSize = "1rem";
  p.style.fontWeight = "bold";
  p.className = "user-Paragraph";
  
  usersGrid.appendChild(p);
}
    
    
})

