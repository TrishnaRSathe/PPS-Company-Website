// CHATBOT: toggle
const chatToggle = document.getElementById('chatToggle');
const chatCard = document.getElementById('chatCard');
const closeChat = document.getElementById('closeChat');
const sendChat = document.getElementById('sendChat');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const openChatMobile = document.getElementById('openChatMobile');

function openChat() {
  chatCard.classList.remove('hidden');
  chatCard.classList.add('show');
  chatInput && chatInput.focus();
}
function closeChatCard() {
  chatCard.classList.add('hidden');
  chatCard.classList.remove('show');
}

chatToggle && chatToggle.addEventListener('click', () => {
  if (chatCard.classList.contains('hidden')) openChat(); else closeChatCard();
});
openChatMobile && openChatMobile.addEventListener('click', openChat);
closeChat && closeChat.addEventListener('click', closeChatCard);


// -----------------------------
//  CHATBOT AUTO-REPLY LOGIC
// -----------------------------

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (
    msg.includes("hi") ||
    msg.includes("hii") ||
    msg.includes("hello") ||
    msg.includes("hlo") ||
    msg.includes("hey") ||
    msg.includes("good morning") ||
    msg.includes("good afternoon") ||
    msg.includes("good evening")
  ) {
    return "Hello! 👋 How can I help you today? You can ask about our courses, fees, mentors, or contact details.";
  }


  // Beginner courses
  if (msg.includes("beginner") || msg.includes("basic")) {
    return "Beginner Civil Courses include:\n• Foundation Basics\n• Building Materials\n• Surveying Fundamentals\n• Site Preparation\nLet me know if you want syllabus!";
  }

  // Intermediate courses
  if (msg.includes("intermediate")) {
    return "Intermediate Courses cover:\n• Concrete Technology\n• Structural Analysis\n• Estimation & Costing\n• AutoCAD Basics\nDo you want full module list?";
  }

  // Advanced courses
  if (msg.includes("advance") || msg.includes("professional")) {
    return "Advanced Civil Courses include:\n• STAAD Pro\n• AutoCAD 2D/3D\n• Revit\n• Structural Design (IS Codes)\nWant duration & fees?";
  }

  // Fees
  if (msg.includes("fees") || msg.includes("price") || msg.includes("cost")) {
    return "Our course fees range from ₹999 to ₹4999 depending on the level. Tell me which course you're interested in!";
  }

  // Duration
  if (msg.includes("duration") || msg.includes("time")) {
    return "Each course duration is between 15 days to 45 days depending on the course level.";
  }

  // Certification
  if (msg.includes("certificate")) {
    return "Yes! You will get an industry-recognized digital certificate after completing the course.";
  }

  // Mentor / Tutor questions
  if (
    msg.includes("mentor") ||
    msg.includes("sir") ||
    msg.includes("teacher") ||
    msg.includes("tutor") ||
    msg.includes("guide")
  ) {
    return "Our courses are taught by experienced civil engineers with  20 to 25+ years of industry experience in construction, structural design, and site execution. You will get personal guidance and full doubt support throughout the course.";
  }

  // Types of courses
  if (
    msg.includes("types of courses") ||
    msg.includes("how many courses") ||
    msg.includes("how many types") ||
    msg.includes("what courses") ||
    msg.includes("offer") ||
    msg.includes("courses you provide") ||
    msg.includes("course details")
  ) {
    return "We provide 3 levels of Civil Engineering courses:\n\n1️⃣ Beginner Level – Foundation to Basics\n2️⃣ Intermediate Level – Structures, Materials, Drafting\n3️⃣ Advanced Level – Design, Software (AutoCAD, Revit, STAAD Pro)\n\nTell me which level you want details of?";
  }

    // Beginner syllabus
  if (
    msg.includes("beginner syllabus") ||
    (msg.includes("beginner") && msg.includes("details"))
  ) {
    return "✅ Beginner Civil Courses:\n\n" +
           "1️⃣ AutoCAD Basics\n" +
           "2️⃣ Basics of Surveying\n" +
           "3️⃣ Revit Precast Basic\n" +
           "4️⃣ Tekla Precast Basic\n\n" +
           "Type the course name to see its detailed modules.";
  }

  // Intermediate syllabus
  if (
    msg.includes("intermediate syllabus") ||
    (msg.includes("intermediate") && msg.includes("details"))
  ) {
    return "✅ Intermediate Civil Courses:\n\n" +
           "1️⃣ Building Construction & Materials\n" +
           "2️⃣ Structural Engineering Basics\n" +
           "3️⃣ Concrete Technology\n" +
           "4️⃣ AutoCAD 3D\n\n" +
           "Type the course name to see its detailed modules.";
  }

  // Advanced syllabus
  if (
    msg.includes("advanced syllabus") ||
    (msg.includes("advanced") && msg.includes("details"))
  ) {
    return "✅ Advanced Civil Courses:\n\n" +
           "1️⃣ STAAD.Pro Structural Design\n" +
           "2️⃣ Advanced Revit Structure\n" +
           "3️⃣ Quantity Surveying & Estimation\n" +
           "4️⃣ Total Station Master Course\n\n" +
           "Type the course name to see its detailed modules.";
  }

  

  // Support/contact
  if (msg.includes("support") || msg.includes("contact") || msg.includes("phone")|| msg.includes("call")||msg.includes("number")) {
    return "You can contact support@ppscoe.com\n\n or **send your question here ...WhatsApp:9145119610 / 9545468333\n !";
  }

   // Thank you response
  if (
    msg.includes("thank you") ||
    msg.includes("thanks") ||
    msg.includes("thanku")
  ) {
    return "🙏 You're welcome! Happy to help. Do you want to see more course details or syllabus?";
  }

  // Default fallback
  return "Thanks for your message! Our team will reply shortly. You can also ask me about course fees, syllabus, certificates, or duration.";
}


// -----------------------------
//  SEND MESSAGE
// -----------------------------
sendChat && sendChat.addEventListener('click', () => {
  const text = (chatInput && chatInput.value.trim()) || '';
  if (!text) return;

  // User bubble
  const el = document.createElement('div');
  el.className = 'bg-brand text-white px-3 py-2 rounded mb-2 self-end';
  el.textContent = text;
  chatBody.appendChild(el);

  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Bot bubble (auto reply)
  setTimeout(() => {
    const bot = document.createElement('div');
    bot.className = 'bg-gray-100 rounded px-3 py-2 mb-2';
    bot.textContent = getBotReply(text);
    chatBody.appendChild(bot);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 700);
});




// Enter key support
if (chatInput) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendChat && sendChat.click();
    }
  });
}
  

function toggleWishlist(course) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.includes(course)) {
    wishlist = wishlist.filter(item => item !== course);
  } else {
    wishlist.push(course);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistIcons();
}

function updateWishlistIcons() {
  document.querySelectorAll(".wishlist-icon").forEach(icon => {
    const course = icon.getAttribute("onclick").match(/'(.+?)'/)[1];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(course)) {
      icon.textContent = "❤️";
      icon.classList.add("active");
    } else {
      icon.textContent = "♡";
      icon.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", updateWishlistIcons);



const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');

      
    });
  } 



  
