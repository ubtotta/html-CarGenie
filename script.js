const responses = {
  "hello":"🚗✨ Welcome to CarGenie! I'm your personal vehicle wizard. What car magic can I work for you today?",
  "car types": "There are various car types like sedan, SUV, hatchback, convertible, and more.",
  "fuel options": "Vehicles typically use petrol, diesel, electric, or hybrid as fuel.",
  "troubleshoot": "For basic troubleshooting, check your battery, fuel level, or tire pressure.",
  "thank you": "You're all set! 🚗✨ If you have any more questions or need help with anything else, just give me a shout — I'm here to help you drive through it all! 🚙💨",
  "bye": "Goodbye for now! 🚗💨 Stay safe on the road, and may your journey be smooth and full of adventure! 🌟🚙",
  "tata nexon": "The Tata Nexon is a popular compact SUV available in petrol, diesel, and electric variants.\n\nVariants:\nXE (Petrol/Diesel) - ₹8.30 Lakh - ₹10.70 Lakh\nXM (Petrol/Diesel) - ₹9.30 Lakh - ₹11.00 Lakh\nXMA (Automatic Petrol) - ₹9.80 Lakh\nXZ (Petrol/Diesel) - ₹10.90 Lakh - ₹12.40 Lakh\nXZ+ (Petrol/Diesel) - ₹12.40 Lakh - ₹13.50 Lakh\nEV (Electric) - ₹14.99 Lakh - ₹16.85 Lakh",
  "hyundai creta": "The Hyundai Creta is a popular midsize SUV offering a stylish design, great features, and multiple engine options.\n\nVariants:\nE (Petrol/Diesel) - ₹10.44 Lakh - ₹12.54 Lakh\nS (Petrol/Diesel) - ₹12.10 Lakh - ₹14.10 Lakh\nSX (Petrol/Diesel) - ₹14.89 Lakh - ₹16.59 Lakh\nSX(O) (Petrol/Diesel) - ₹16.59 Lakh - ₹17.99 Lakh",
  "vitara brezza": "The Maruti Suzuki Vitara Brezza is a compact SUV known for its robust performance and efficient features.\n\nVariants:\nLXi (Petrol) - ₹8.29 Lakh\nVXi (Petrol) - ₹9.49 Lakh\nZXi (Petrol) - ₹10.49 Lakh\nZxi+ (Petrol) - ₹11.19 Lakh",
  "honda city": "The Honda City is a popular sedan offering a premium design, smooth driving experience, and advanced technology.\n\nVariants:\nSV (Petrol) - ₹11.11 Lakh\nV (Petrol) - ₹12.56 Lakh\nVX (Petrol) - ₹13.86 Lakh\nZX (Petrol) - ₹14.86 Lakh",
  "toyota fortuner": "The Toyota Fortuner is a rugged and powerful SUV, offering excellent off-road capabilities and a luxurious ride.\n\nVariants:\n2.7 4X2 MT (Petrol) - ₹33.93 Lakh\n2.7 4X2 AT (Petrol) - ₹35.68 Lakh\n2.8 4X4 AT (Diesel) - ₹38.56 Lakh\n2.8 4X2 AT (Diesel) - ₹36.58 Lakh",    "kia seltos": "The Kia Seltos is a modern and stylish SUV with an aggressive design and packed with features.\n\nVariants:\nHTE (Petrol) - ₹11.39 Lakh\nHTK (Petrol/Diesel) - ₹12.99 Lakh\nHTX (Petrol/Diesel) - ₹15.39 Lakh\nHTX+ (Petrol/Diesel) - ₹16.99 Lakh",
  "ford ecosport": "The Ford EcoSport is a compact SUV that offers a premium feel, sporty performance, and excellent handling.\n\nVariants:\nAmbiente (Petrol/Diesel) - ₹8.49 Lakh - ₹9.99 Lakh\nTitanium (Petrol/Diesel) - ₹10.59 Lakh - ₹11.59 Lakh\nTitanium+ (Petrol/Diesel) - ₹12.39 Lakh",
  "bmw x5": "The BMW X5 is a luxury SUV offering top-tier performance, technology, and elegance.\n\nVariants:\nxDrive 30d (Diesel) - ₹95.90 Lakh\nxDrive 40i (Petrol) - ₹98.90 Lakh\nM50d (Diesel) - ₹1.11 Cr",
  "mercedes-benz glc": "The Mercedes-Benz GLC is a luxury SUV that blends style, comfort, and performance.\n\nVariants:\nGLC 300 (Petrol) - ₹78.90 Lakh\nGLC 300d (Diesel) - ₹81.90 Lakh\nGLC 43 AMG (Petrol) - ₹1.06 Cr",
  "audi q5": "The Audi Q5 is a luxurious midsize SUV combining performance, advanced tech, and an upscale interior.\n\nVariants:\nPremium Plus (Petrol) - ₹59.90 Lakh\nTechnology (Petrol) - ₹63.60 Lakh",
  "nissan magnite": "The Nissan Magnite is an affordable compact SUV offering great value with stylish design and advanced features.\n\nVariants:\nXE (Petrol) - ₹5.59 Lakh\nXL (Petrol) - ₹6.59 Lakh\nXV (Petrol) - ₹7.89 Lakh\nXV Premium (Petrol) - ₹8.39 Lakh",
  "renault kwid": "The Renault Kwid is a compact hatchback offering a modern design and great fuel efficiency.\n\nVariants:\nSTD (Petrol) - ₹4.69 Lakh\nRXE (Petrol) - ₹5.19 Lakh\nRXL (Petrol) - ₹5.69 Lakh\nRXT (Petrol) - ₹6.19 Lakh",
  "volkswagen polo": "The Volkswagen Polo is a premium hatchback known for its solid build quality and fun-to-drive nature.\n\nVariants:\nTrendline (Petrol) - ₹7.19 Lakh\nComfortline (Petrol) - ₹8.09 Lakh\nHighline (Petrol) - ₹9.29 Lakh",
  "skoda octavia": "The Skoda Octavia is a premium sedan offering a blend of performance and luxury.\n\nVariants:\nAmbition (Petrol) - ₹18.49 Lakh\nStyle (Petrol) - ₹21.39 Lakh\nL&K (Petrol) - ₹23.99 Lakh",
  "hyundai i20": "The Hyundai i20 is a popular premium hatchback with a modern design and advanced features.\n\nVariants:\nMagna (Petrol) - ₹7.19 Lakh\nSportz (Petrol/Diesel) - ₹8.39 Lakh - ₹9.19 Lakh\nAsta (Petrol) - ₹9.79 Lakh",
  "tata harrier": "The Tata Harrier is a spacious and feature-packed SUV offering an impressive road presence.\n\nVariants:\nXE (Diesel) - ₹14.50 Lakh\nXM (Diesel) - ₹15.30 Lakh\nXZ (Diesel) - ₹17.80 Lakh\nXZ+ (Diesel) - ₹19.00 Lakh",
  "jeep compass": "The Jeep Compass is a rugged and stylish SUV with exceptional off-road capabilities.\n\nVariants:\nSport (Petrol/Diesel) - ₹21.90 Lakh - ₹22.90 Lakh\nLongitude (Petrol/Diesel) - ₹23.90 Lakh - ₹24.90 Lakh\nLimited (Petrol/Diesel) - ₹26.90 Lakh - ₹27.90 Lakh",
  "mg hector": "The MG Hector is a spacious and feature-rich SUV that focuses on connectivity and comfort.\n\nVariants:\nStyle (Petrol/Diesel) - ₹15.49 Lakh - ₹16.99 Lakh\nSuper (Petrol/Diesel) - ₹16.99 Lakh - ₹18.99 Lakh\nSharp (Petrol/Diesel) - ₹19.99 Lakh - ₹21.99 Lakh",
  "maruti suzuki dzire": "The Maruti Suzuki Dzire is a compact sedan offering great fuel efficiency and premium features.\n\nVariants:\nVXi (Petrol) - ₹6.53 Lakh\nZXi (Petrol) - ₹7.23 Lakh\nZXi+ (Petrol) - ₹7.70 Lakh",
  "honda brv": "The Honda BR-V is a spacious and comfortable MPV offering great performance and practicality.\n\nVariants:\nS (Petrol) - ₹9.79 Lakh\nV (Petrol) - ₹10.89 Lakh\nVX (Petrol) - ₹12.39 Lakh",
  "toyota innova crysta": "The Toyota Innova Crysta is a premium MPV offering comfort, luxury, and a smooth drive.\n\nVariants:\nG (Petrol/Diesel) - ₹16.17 Lakh - ₹17.64 Lakh\nGX (Petrol/Diesel) - ₹18.22 Lakh - ₹19.39 Lakh\nVX (Petrol/Diesel) - ₹22.13 Lakh - ₹23.39 Lakh",
  "mahindra xuv700": "The Mahindra XUV700 is a bold and feature-packed SUV offering powerful engines and premium features.\n\nVariants:\nAX7 (Petrol/Diesel) - ₹19.99 Lakh - ₹22.89 Lakh\nAX5 (Petrol/Diesel) - ₹15.99 Lakh - ₹18.99 Lakh",
  "nissan x-trail": "The Nissan X-Trail is a stylish and capable SUV with great off-road features and a premium interior.\n\nVariants:\nXE (Petrol) - ₹34.99 Lakh\nXL (Petrol) - ₹36.99 Lakh\nXV Premium (Petrol) - ₹39.99 Lakh",
  "audi a6": "The Audi A6 is a premium sedan that combines luxury, advanced tech, and a superior driving experience.\n\nVariants:\nPremium (Petrol) - ₹59.99 Lakh\nTechnology (Petrol) - ₹63.69 Lakh",
  "honda wr-v": "The Honda WR-V is a compact crossover with a stylish design and efficient performance.\n\nVariants:\nSV (Petrol/Diesel) - ₹9.39 Lakh - ₹10.49 Lakh\nVX (Petrol/Diesel) - ₹11.00 Lakh - ₹11.99 Lakh",
  "mahindra thar": "The Mahindra Thar is an iconic off-road SUV with rugged features and a strong road presence.\n\nVariants:\nAX (Petrol/Diesel) - ₹10.99 Lakh - ₹13.49 Lakh\nLX (Petrol/Diesel) - ₹13.49 Lakh - ₹15.59 Lakh",
  "tata tiago": "The Tata Tiago is a compact hatchback offering stylish looks, efficient engines, and great value.\n\nVariants:\nXE (Petrol) - ₹5.60 Lakh\nXM (Petrol) - ₹6.20 Lakh\nXT (Petrol) - ₹6.50 Lakh\nXZ (Petrol) - ₹6.90 Lakh",
  "maruti suzuki swift": "The Maruti Suzuki Swift is a stylish and compact hatchback with great performance and value.\n\nVariants:\nLXi (Petrol) - ₹5.99 Lakh\nVXi (Petrol) - ₹6.89 Lakh\nZXi (Petrol) - ₹7.49 Lakh\nZXi+ (Petrol) - ₹7.99 Lakh",
  "renault triber": "The Renault Triber is a budget-friendly MPV offering seven-seat capacity and great practicality.\n\nVariants:\nRXE (Petrol) - ₹5.30 Lakh\nRXL (Petrol) - ₹5.85 Lakh\nRXT (Petrol) - ₹6.35 Lakh\nRXZ (Petrol) - ₹6.75 Lakh",
  "fiat panda": "The Fiat Panda is a compact car offering city-friendly size, low running costs, and a charming design.\n\nVariants:\nEasy (Petrol) - ₹5.19 Lakh\nPop (Petrol) - ₹5.69 Lakh\nCross (Petrol) - ₹6.19 Lakh",
  "datsun redi-go": "The Datsun Redi-Go is a compact hatchback with a modern design, offering affordable performance.\n\nVariants:\nD (Petrol) - ₹3.00 Lakh\nA (Petrol) - ₹3.35 Lakh\nT (Petrol) - ₹3.79 Lakh",
  "toyota camry": "The Toyota Camry is a premium sedan that combines luxury, comfort, and efficient hybrid technology.\n\nVariants:\nHybrid (Petrol) - ₹41.70 Lakh",
  "skoda rapid": "The Skoda Rapid is a sedan with a solid build, sporty performance, and a spacious interior.\n\nVariants:\nActive (Petrol) - ₹7.49 Lakh\nAmbition (Petrol) - ₹9.49 Lakh\nStyle (Petrol) - ₹10.49 Lakh",
  "mahindra scorpio": "The Mahindra Scorpio is a rugged SUV offering great off-road capability and a solid build.\n\nVariants:\nS3+ (Diesel) - ₹12.45 Lakh\nS5 (Diesel) - ₹13.85 Lakh\nS7 (Diesel) - ₹15.25 Lakh",
  "volvo xc90": "The Volvo XC90 is a luxury SUV offering advanced safety features, a premium interior, and excellent performance.\n\nVariants:\nMomentum (Diesel) - ₹93.90 Lakh\nInscription (Diesel) - ₹1.05 Cr\nExcellence (Petrol) - ₹1.15 Cr",
  "renault lodgy": "The Renault Lodgy is a spacious MPV offering great comfort and practicality for large families.\n\nVariants:\nSTD (Diesel) - ₹8.33 Lakh\nRXE (Diesel) - ₹9.53 Lakh\nRXL (Diesel) - ₹10.73 Lakh",
  "maruti suzuki baleno": "The Maruti Suzuki Baleno is a premium hatchback with a modern design and great fuel efficiency.\n\nVariants:\nSigma (Petrol) - ₹6.59 Lakh\nDelta (Petrol) - ₹7.29 Lakh\nZeta (Petrol) - ₹7.89 Lakh\nAlpha (Petrol) - ₹8.89 Lakh",
  "honda jazz": "The Honda Jazz is a premium hatchback offering practicality, space, and a refined engine.\n\nVariants:\nSV (Petrol) - ₹7.58 Lakh\nV (Petrol) - ₹8.08 Lakh\nVX (Petrol) - ₹8.88 Lakh",
  "tata altroz": "The Tata Altroz is a premium hatchback with a stylish design, strong build quality, and efficient performance.\n\nVariants:\nXE (Petrol) - ₹6.29 Lakh\nXM (Petrol) - ₹6.79 Lakh\nXT (Petrol) - ₹7.39 Lakh\nXZ (Petrol) - ₹7.99 Lakh",
  "audi q7": "The Audi Q7 is a luxury SUV offering comfort, space, and cutting-edge technology.\n\nVariants:\nTechnology (Diesel) - ₹94.90 Lakh\nPremium Plus (Diesel) - ₹98.50 Lakh",
  "maruti suzuki ertiga": "The Maruti Suzuki Ertiga is a spacious MPV offering practicality, comfort, and fuel efficiency.\n\nVariants:\nVXI (Petrol) - ₹8.99 Lakh\nZXI (Petrol) - ₹9.99 Lakh\nZXI+ (Petrol) - ₹10.99 Lakh",
  "toyota yaris": "The Toyota Yaris is a premium sedan offering comfort, style, and a smooth driving experience.\n\nVariants:\nJ (Petrol) - ₹9.29 Lakh\nV (Petrol) - ₹10.84 Lakh\nVX (Petrol) - ₹11.57 Lakh",
  "mahindra bolero": "The Mahindra Bolero is a rugged SUV offering a tough build and reliable performance.\n\nVariants:\nB4 (Diesel) - ₹9.79 Lakh\nB6 (Diesel) - ₹10.49 Lakh\nB6 (O) (Diesel) - ₹11.39 Lakh",
  "nissan terrano": "The Nissan Terrano is a compact SUV offering a premium feel, good performance, and spacious interior.\n\nVariants:\nXE (Petrol) - ₹10.50 Lakh\nXL (Petrol) - ₹12.50 Lakh\nXV (Diesel) - ₹14.10 Lakh",
  "honda civic": "The Honda Civic is a premium sedan offering a combination of performance, comfort, and style.\n\nVariants:\nV (Petrol) - ₹17.94 Lakh\nVX (Petrol) - ₹19.39 Lakh\nZX (Petrol) - ₹20.39 Lakh",
  "mercedes-benz e-class": "The Mercedes-Benz E-Class is a luxury sedan that provides top-tier comfort, performance, and technology.\n\nVariants:\nE 350d (Diesel) - ₹87.50 Lakh\nE 350d Exclusive (Diesel) - ₹1.01 Cr",
  "volkswagen tiguan": "The Volkswagen Tiguan is a premium SUV offering a stylish design and advanced tech features.\n\nVariants:\nTrendline (Petrol) - ₹33.50 Lakh\nHighline (Petrol) - ₹35.60 Lakh\nAllspace (Petrol) - ₹44.00 Lakh",
  "fiat punto": "The Fiat Punto is a compact hatchback offering solid performance and great value.\n\nVariants:\nActive (Petrol) - ₹5.99 Lakh\nEmotion (Petrol) - ₹6.89 Lakh\nSport (Petrol) - ₹7.49 Lakh",
  "toyota corolla altis": "The Toyota Corolla Altis is a premium sedan offering comfort, reliability, and great value.\n\nVariants:\nJ (Petrol) - ₹18.00 Lakh\nG (Petrol) - ₹19.30 Lakh\nV (Petrol) - ₹20.50 Lakh"  
};
function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim().toLowerCase();
  const chatbox = document.getElementById("chatbox");

  if (userInput) {
    addMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    let botResponse = responses[userInput] || "I don't have details on this car right now, but I can help you search for more! Let me know which other car 🚗 you're interested in, and let's find the perfect ride! 🔍✨";

    if (!botResponse) {
      for (const key in responses) {
        if (key.toLowerCase().includes(userInput)) {
          if (typeof responses[key] === "object") {
            botResponse = getCarDetails(responses[key]);  
          } else {
            botResponse = responses[key];
          }
          break;
        }
      }
    }
    setTimeout(() => addMessage(botResponse, "bot"), 500);
  }
}
function getCarDetails(carDetails) {
  let response = carDetails.description + "\n\nVariants:\n";
  return response; 
}
function addMessage(message, sender) {
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = String(message); 
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; 
}
