// Foydalanuvchi xabarlarini qayta ishlash
document.getElementById("sendButton").addEventListener("click", function () {
  const userInput = document.getElementById("userInput").value.trim();
  if (userInput) {
    addMessage("user", userInput);
    
    // Loadingni ko'rsatish
    document.getElementById("loading").style.display = "block";  // Loading animatsiyasini ko'rsatish
    
    botReply(userInput);
    document.getElementById("userInput").value = ""; // Inputni tozalash
  }
});

// Xabarlarni chat oynasiga qo'shish
function addMessage(sender, message) {
  const chatbox = document.getElementById("chatbox");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "user" ? "user-message" : "bot-message";
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight; // Chatni pastga aylantirish

  // Xabarni sekin ko'rsatish
  let i = 0;
  const interval = setInterval(function() {
    messageDiv.textContent += message.charAt(i);
    i++;
    if (i > message.length - 1) {
      clearInterval(interval);
    }
  }, 50); // Har bir harfni 50ms interval bilan qo'shadi
}

// Botning javoblarini sozlash
function botReply(userMessage) {
  let reply = "Uzr, bu savolingizni anglay olmadim. Lekin boshqa savollaringiz bo‘lsa, yozing yoki Asilbekka murojaat qiling.";
  const lowerMessage = userMessage.toLowerCase();

  if (/^(salom|assalomu alaykum|assalom alekum|)$/i.test(userMessage)) {
    reply = "Salom, sizga qanday yordam bera olaman?";
  } else if (/^(asilbek|as|asil|asilxon|asilbek aka|asilxon aka|sodiqov|asilbe aka|)$/i.test(userMessage)) {
    reply = "Afsuski, men Asilbek emasman, lekin u tomonidan yaratildim. Menga berilgan huquqlar doirasi cheklangan bo'lsada, yordam bera olishim mumkin bo‘lgan bir qancha masalalar bor.";
  } else if (/^(qalaysiz|qalaysz|qaleysiz|qaleysz||qaleys|qalesiz|qalesz|qales|qale|yaxshimisiz|yaxshimisz|yaxshimis|yaxshimi|yaxshimsz|yaxshmsiz|tuzukmisiz|tuzukmisz|tuzukmsz|tuzukmisiz|tuzumisz|tuzumsz|)$/i.test(userMessage)) {
	reply = "Men shunchaki robotman, lekin hammasi yaxshi ketyapti.";
  } else if (/^(bo'pti|bopti|bupti|mayli|xayr|hayr|xayir|hayir|ko'rishguncha|korishguncha|kurishguncha|ko'rishgunca|kurishgunca|korishgunca|ko'rshguncha|korshguncha|kurshguncha|ko'rshgunca|korshgunca|kurshgunca|)$/i.test(userMessage)) {
    reply = "Xayr, kuningiz mazmunli o‘tsin!";
  } else if (/^(rahmat|raxmat|tahnks|thank\s?you|спасибо|спасиба|)$/i.test(userMessage)) {
    reply = "Sizga foydali bo‘lgani juda yaxshi! Yana savollaringiz bormi?";
  } else if (/^(qanday\s?masala|qanaqa\s?masala|qana\s?masala|nima\s?masala|misol\s?uchun|qanday|qande|qandey|qanaqa|)$/i.test(userMessage)) {
    reply = "Men sizga yordam berish uchun shu yerdaman! Savollaringizni yozing, agar masala doiramdan tashqarida bo‘lsa, sizga Asilbek bilan bog‘lanishni tavsiya qilaman.";
  } else if (/^(nima\s?yangilik|nma\s?yangilik|nima\s?yangili|nima\s?yangilk|nima\s?yanglk|nma\s?yangili|nma\s?yangilk|yangiliklar\s?bormi|yangilikla\s?bormi|yangilila\s?bormi|yangiliglar\s?bormi|yangiligla\s?bormi|yangiliklar\s?bomi|yangiliklar\s?borm|yangiliklar\s?bom|yangilikla\s?bomi|yangilikla\s?borm|yangilikla\s?bom|yanilila\s?borm|yangilila\s?bomi|yangilila\s?bom|nima\s?gap|nima\s?gaplar|nima\s?gapla|nma\s?gap|nma\s?gapla|nma\s?gaplar|)$/i.test(userMessage)) {
    reply = "Hozircha hammasi joyida. Sizda qanday yangiliklar?";
  } else if (/^(menda\s?ham|menda\s?xam|menda\s?ham\s?joyida|menda\s?ham\s?joyda|menda\s?xam\s?joyida|menda\s?xam\s?joyda|tinch|tnch|tinc|tnc|yangilik\s?yo'q|yangilik\s?yoq|yangilik\s?yuq|yangilik\s?yo'|yangilik\s?yo|yangilik\s?yu|yangili\s?yo'q|yangili\s?yoq|yangili\s?yuq|yangili\s?yo'|yangili\s?yo|yangili\s?yu|)$/i.test(userMessage)) {
    reply = "Agar yangiliklar bo'lsa, albatta, baham ko'ring! Yana biror masala yuzasidan savolingiz bo'lsa, bemalol so'rang!";
  } else if (/^(xop|hop|xo'p|ho'p|xup|hup|xop\s?bo'ladi|hop\s?bo'ladi|xo'p\s?bo'ladi|ho'p\s?bo'ladi|xop\s?boladi|hop\s?boladi|xo'p\s?boladi|ho'p\s?boladi|xop\s?bolad|hop\s?bolad|)$/i.test(userMessage)) {
    reply = "Agar biror narsa kerak bo'lsa yoki suhbatlashishni istasangiz, har doim yordamga tayyorman!";
  } else if (/^(nima\s?qilyapsiz|nima\s?qilyapsz|nima\s?qlyapsiz|nima\s?qlyapsz|nma\s?qilyapsiz|nma\s?qilyapsz|nma\s?qlyapsiz|nma\s?qlyapsz|nima\s?bilan\s?bandsiz|nima\s?bilan\s?bandsz|nima\s?blan\s?bandsiz|nima\s?blan\s?bandsz|nma\s?bilan\s?bandsiz|nma\s?bilan\s?bandsz|nma\s?blan\s?bandsiz|nma\s?blan\s?bandsz|)$/i.test(userMessage)) {
    reply = "Sizning savollaringizga javob berish bilan bandman.";
  } else if (/^(qoyil|qoyl|yaxshi|yaxsh|yahshi|yahsh|ajoyib|ajoyb|zo'r|zor|zo'rku|zorku|)$/i.test(userMessage)) {
    reply = "Raxmat! Yana biror narsa kerak bo'lsa, ayting.";
  } else if (/^(qayerdansiz|qayerdansz|qayrdansiz|qayrdansz|qettansiz|qettansz|qattansiz|qattansz|)$/i.test(userMessage)) {
    reply = "Men serverda yashayman, shuning uchun doim sizning xizmatingizdaman.";
  } else if (/^(sizning\s?ismingiz\s?nima|sizning\s?ismingiz\s?nma|sizning\s?ismingz\s?nima|sizning\s?ismingz\s?nma|sizning\s?ismiz\s?nima|sizning\s?ismiz\s?nma|siznng\s?ismingiz\s?nima|siznng\s?ismingiz\s?nma|siznng\s?ismningz\s?nima|siznng\s?ismingz\s?nma|siznng\s?ismiz|s?nima|siznng\s?ismiz\s?nma|sizni\s?ismingiz\s?nima|sizni\s?ismingiz\s?nma|sizni\s?ismingz\s?nima|sizni\s?ismingz\s?nma|sizni\s?ismiz\s?nima|sizni\s?ismiz\s?nma|sizi\s?ismingiz\s?nima|sizi\s?ismingiz\s?nma|sizi\s?ismingiz\s?nima|sizi\s?isminiz\s?nma|sizi\s?ismiz\s?nima|sizi\s?ismiz\s?nma|ismingiz\s?nima|ismingiz\s?nma|ismingz\s?nima|ismingz\s?nma|ismiz\s?nima|ismiz\s?nma|senig\s?isming\s?nima|sening\s?isming\s?nma|sening\s?ismng\s?nima|sening\s?ismng\s?nma|seni\s?isming\s?nima|seni\s?isming\s?nma|seni\s?ismng\s?nima|seni\s?ismng\s?nma|isming\s?nima|isming\s?nma|ismng\s?nima|ismng\s?nma|)$/i.test(userMessage)) {
    reply = "Mening ismim aChat.";
  } else if (/^(menga\s?yordam\s?bera\s?olasizmi|menga\s?yordam\s?bera\s?olaszmi|menga\s?yordam\s?bera\s?olasmi|menga\s?yordam\s?beralasmi|yordam\s?bera\s?olasizmi|yordam\s?bera\s?olaszmi|yordam\s?bera\s?olasmi|yordam\s?beralasmi|yordam\s?kerak|yordam\s?kere|yordam\s?zarur|yordam\s?zaril|yordam|)$/i.test(userMessage)) {
    reply = "Albatta, qo‘limdan kelgancha yordam beraman. Savolingizni yozing.";
  } else if (/^(siz\s?nimalarni\s?bilasiz|siz\s?nimalarni\s?bilasz|siz\s?nimalarni\s?bilas|siz\s?nimalarni\s?blasiz|siz\s?nimalarni\s?blasz|siz\s?nimalarni\s?blas|siz\s?nimalar\s?bilasiz|siz\s?nimalar\s?bilasz|siz\s?nimalar\s?bilas|siz\s?nimalar\blasiz|siz\s?nimalar\s?blasz|siz\s?nimalar\s?blas|siz\s?nimalani\s?bilasiz|siz\s?nimalani\s?bilasz|siz\s?nimalani\s?bilas|siz\s?nimalani\s?blasiz|siz\s?nimalani\s?blasz|siz\s?nimalani\s?blas|siz\s?nmalarni\s?bilasiz|siz\s?nmalarni\s?bilasz|siz\s?nmalarni\s?bilas|siz\s?nmalarni\s?blasiz|siz\s?nmalarni\s?blasz|siz\s?nmalarni\s?blas|siz\s?nmalani\s?bilasiz|siz\s?nmalani\s?bilasz|siz\s?nimalani\s?bilas|siz\s?nimalani\s?blasiz|siz\s?nimalani\s?blasz|siz\s?nimalani\s?blas|nimalarni\s?bilasiz|nimalarni\s?bilasz|nimalarni\s?bilas|nimalarni\s?blasiz|nimalarni\s?blasz|nimalarni\s?blas|nima\s?bilasan|)$/i.test(userMessage)) {
    reply = "Sizga foydali bo‘lgani juda yaxshi! Yana savollaringiz bormi?";
  }
  
  const botMessage = reply;
  setTimeout(() => {
    // Loadingni yashirish
    document.getElementById("loading").style.display = "none";
    addMessage("bot", reply);
  }, 1500);
}