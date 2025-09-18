// Application Data
const appData = {
  destinations: [
    {
      id: "kerala",
      name: "Kerala",
      description: "God's Own Country with backwaters, spices, and beaches",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      popular_activities: ["Backwater cruise", "Spice plantation tour", "Beach relaxation", "Ayurvedic spa"],
      best_time: "October to March",
      budget_range: "₹15,000 - ₹80,000"
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      description: "Land of Kings with majestic palaces and desert adventures",
      image: "https://images.unsplash.com/photo-1477586957327-9e4e03c9441d?w=800",
      popular_activities: ["Palace tours", "Desert safari", "Cultural shows", "Heritage walks"],
      best_time: "November to March",
      budget_range: "₹20,000 - ₹100,000"
    },
    {
      id: "goa",
      name: "Goa",
      description: "Beach paradise with Portuguese heritage and vibrant nightlife",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      popular_activities: ["Beach hopping", "Water sports", "Nightlife", "Heritage tours"],
      best_time: "November to February",
      budget_range: "₹12,000 - ₹60,000"
    },
    {
      id: "himachal",
      name: "Himachal Pradesh",
      description: "Mountain paradise with adventure sports and scenic beauty",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3cf7c8b7c?w=800",
      popular_activities: ["Trekking", "Paragliding", "Temple visits", "Mountain biking"],
      best_time: "March to June, September to November",
      budget_range: "₹18,000 - ₹70,000"
    }
  ],
  themes: [
    {
      id: "heritage",
      name: "Heritage & Culture",
      icon: "🏛️",
      description: "Explore historical sites, museums, and cultural experiences"
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: "🏔️",
      description: "Thrilling activities like trekking, water sports, and wildlife"
    },
    {
      id: "nightlife",
      name: "Nightlife",
      icon: "🌙",
      description: "Bars, clubs, night markets, and evening entertainment"
    },
    {
      id: "food",
      name: "Food & Cuisine",
      icon: "🍛",
      description: "Local delicacies, cooking classes, and food tours"
    },
    {
      id: "relaxation",
      name: "Relaxation",
      icon: "🧘",
      description: "Spas, beaches, yoga retreats, and peaceful experiences"
    }
  ],
  sample_itinerary: {
    destination: "Kerala",
    duration: 7,
    budget: 45000,
    theme: "Cultural & Heritage",
    days: [
      {
        day: 1,
        location: "Kochi",
        activities: [
          {
            time: "10:00 AM",
            name: "Fort Kochi Heritage Walk",
            description: "Explore colonial architecture and Chinese fishing nets",
            duration: "3 hours",
            cost: 800,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
          },
          {
            time: "2:00 PM",
            name: "Spice Market Tour",
            description: "Discover authentic Kerala spices and local markets",
            duration: "2 hours",
            cost: 500,
            image: "https://images.unsplash.com/photo-1596040033229-a0b3b6b22174?w=400"
          },
          {
            time: "7:00 PM",
            name: "Kathakali Performance",
            description: "Traditional Kerala dance and music show",
            duration: "2 hours",
            cost: 1200,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
          }
        ],
        accommodation: "Heritage Hotel Kochi",
        transport: "Local taxi",
        weather: "Partly cloudy, 28°C"
      },
      {
        day: 2,
        location: "Alleppey",
        activities: [
          {
            time: "9:00 AM",
            name: "Backwater Houseboat Cruise",
            description: "Full day cruise through Kerala backwaters",
            duration: "8 hours",
            cost: 8000,
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400"
          },
          {
            time: "6:00 PM",
            name: "Village Walk",
            description: "Experience local village life and cuisine",
            duration: "2 hours",
            cost: 600,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
          }
        ],
        accommodation: "Backwater Resort",
        transport: "Private car",
        weather: "Sunny, 30°C"
      }
    ]
  },
  booking_options: {
    flights: [
      {
        airline: "IndiGo",
        route: "Delhi - Kochi",
        departure: "06:30",
        arrival: "09:45",
        price: 8500,
        duration: "3h 15m"
      },
      {
        airline: "Air India",
        route: "Delhi - Kochi",
        departure: "14:20",
        arrival: "17:30",
        price: 9200,
        duration: "3h 10m"
      }
    ],
    hotels: [
      {
        name: "Heritage Hotel Kochi",
        rating: 4.5,
        price_per_night: 4500,
        amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400"
      },
      {
        name: "Backwater Resort Alleppey",
        rating: 4.8,
        price_per_night: 6000,
        amenities: ["Pool", "Ayurvedic Spa", "Multi-cuisine Restaurant", "Boat Service"],
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400"
      }
    ]
  }
};

// Application State
let currentLanguage = 'en';
let currentStep = 1;
let currentPage = 'welcome-page';
let formData = {
  destination: '',
  departureDate: '',
  returnDate: '',
  travelers: 1,
  themes: [],
  budget: 50000,
  accommodation: 'mid-range',
  transportation: 'flight',
  interests: [],
  dietary: 'no-restrictions',
  groupType: 'family'
};
let selectedBookingOptions = {
  flight: null,
  hotel: null,
  activities: []
};

// Language Management
const languages = {
  en: {
    welcome_title: "AI-Powered Trip Planner",
    welcome_subtitle: "Let AI create your perfect personalized itinerary in minutes",
    plan_trip: "Plan My Trip",
    destination: "Destination",
    budget: "Budget",
    duration: "Duration",
    interests: "Interests",
    generating: "AI is crafting your perfect itinerary...",
    book_now: "Book Now",
    share_itinerary: "Share Itinerary",
    "Basic Details": "Basic Details",
    "Preferences": "Preferences", 
    "Interests": "Interests"
  },
  hi: {
    welcome_title: "AI-संचालित यात्रा योजनाकार",
    welcome_subtitle: "AI को कुछ ही मिनटों में आपकी सही व्यक्तिगत यात्रा बनाने दें",
    plan_trip: "मेरी यात्रा की योजना बनाएं",
    destination: "गंतव्य",
    budget: "बजट",
    duration: "अवधि",
    interests: "रुचियां",
    generating: "AI आपकी सही यात्रा तैयार कर रहा है...",
    book_now: "अभी बुक करें",
    share_itinerary: "यात्रा साझा करें",
    "Basic Details": "मूल विवरण",
    "Preferences": "प्राथमिकताएं",
    "Interests": "रुचियां"
  }
};

// Utility Functions
function switchLanguage(lang) {
  currentLanguage = lang;
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Update all text elements with data attributes
  document.querySelectorAll('[data-en], [data-hi]').forEach(element => {
    const key = element.getAttribute(`data-${lang}`);
    if (key) {
      element.textContent = key;
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-en-placeholder], [data-hi-placeholder]').forEach(element => {
    const key = element.getAttribute(`data-${lang}-placeholder`);
    if (key) {
      element.placeholder = key;
    }
  });
}

function showPage(pageId) {
  console.log('Switching to page:', pageId);
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    console.log('Page switched successfully to:', pageId);
  } else {
    console.error('Page not found:', pageId);
  }
}

function formatCurrency(amount) {
  return `₹${amount.toLocaleString()}`;
}

function calculateTripDuration() {
  const departure = document.getElementById('departure-date').value;
  const returnDate = document.getElementById('return-date').value;
  
  if (departure && returnDate) {
    const startDate = new Date(departure);
    const endDate = new Date(returnDate);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const durationElement = document.getElementById('trip-duration');
    if (durationElement) {
      durationElement.textContent = `${dayDiff} days`;
    }
    return dayDiff;
  }
  return 0;
}

// Form Management
function initializeForm() {
  console.log('Initializing form...');
  
  try {
    // Populate destinations
    const destinationSelect = document.getElementById('destination');
    if (destinationSelect) {
      // Clear existing options first
      destinationSelect.innerHTML = '<option value="">Select destination...</option>';
      
      appData.destinations.forEach(dest => {
        const option = document.createElement('option');
        option.value = dest.id;
        option.textContent = dest.name;
        destinationSelect.appendChild(option);
      });
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const departureInput = document.getElementById('departure-date');
    const returnInput = document.getElementById('return-date');
    
    if (departureInput) departureInput.min = today;
    if (returnInput) returnInput.min = today;
    
    // Initialize themes
    initializeThemes();
    
    // Initialize budget slider
    initializeBudgetSlider();
    
    // Add event listeners
    addFormEventListeners();
    
    // Reset to first step
    currentStep = 1;
    updateFormStep();
    
    console.log('Form initialized successfully');
  } catch (error) {
    console.error('Error initializing form:', error);
  }
}

function initializeThemes() {
  const themeGrid = document.getElementById('theme-grid');
  if (!themeGrid) return;
  
  themeGrid.innerHTML = ''; // Clear existing themes
  
  appData.themes.forEach(theme => {
    const themeCard = document.createElement('div');
    themeCard.className = 'theme-card';
    themeCard.dataset.theme = theme.id;
    
    themeCard.innerHTML = `
      <div class="theme-icon">${theme.icon}</div>
      <div class="theme-name">${theme.name}</div>
      <div class="theme-description">${theme.description}</div>
    `;
    
    themeCard.addEventListener('click', () => {
      themeCard.classList.toggle('selected');
      updateSelectedThemes();
    });
    
    themeGrid.appendChild(themeCard);
  });
}

function initializeBudgetSlider() {
  const slider = document.getElementById('budget-range');
  const display = document.getElementById('budget-value');
  
  if (slider && display) {
    slider.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      display.textContent = value.toLocaleString();
      formData.budget = value;
    });
    
    // Set initial value
    display.textContent = formData.budget.toLocaleString();
  }
}

function addFormEventListeners() {
  // Date change listeners
  const departureDate = document.getElementById('departure-date');
  const returnDate = document.getElementById('return-date');
  
  if (departureDate) departureDate.addEventListener('change', calculateTripDuration);
  if (returnDate) returnDate.addEventListener('change', calculateTripDuration);
  
  // Interest selection
  document.querySelectorAll('.interest-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      updateSelectedInterests();
    });
  });
  
  // Form navigation
  const nextBtn = document.getElementById('next-step');
  const prevBtn = document.getElementById('prev-step');
  const generateBtn = document.getElementById('generate-itinerary');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextStep);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', prevStep);
  }
  if (generateBtn) {
    generateBtn.addEventListener('click', generateItinerary);
  }
}

function updateSelectedThemes() {
  formData.themes = Array.from(document.querySelectorAll('.theme-card.selected'))
    .map(card => card.dataset.theme);
}

function updateSelectedInterests() {
  formData.interests = Array.from(document.querySelectorAll('.interest-item.selected'))
    .map(item => item.dataset.activity);
}

function validateStep(step) {
  switch(step) {
    case 1:
      const destination = document.getElementById('destination');
      const departure = document.getElementById('departure-date');
      const returnDate = document.getElementById('return-date');
      return destination?.value && departure?.value && returnDate?.value;
    case 2:
      return formData.themes.length > 0;
    case 3:
      return formData.interests.length > 0;
    default:
      return true;
  }
}

function nextStep() {
  if (!validateStep(currentStep)) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Collect form data
  collectFormData();
  
  if (currentStep < 3) {
    currentStep++;
    updateFormStep();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateFormStep();
  }
}

function updateFormStep() {
  // Update progress bar
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    progressFill.style.width = `${(currentStep / 3) * 100}%`;
  }
  
  // Update step indicators
  document.querySelectorAll('.step').forEach((step, index) => {
    step.classList.toggle('active', index + 1 === currentStep);
  });
  
  // Show/hide form steps
  document.querySelectorAll('.form-step').forEach((step, index) => {
    step.classList.toggle('active', index + 1 === currentStep);
  });
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const generateBtn = document.getElementById('generate-itinerary');
  
  if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
  if (nextBtn) nextBtn.style.display = currentStep === 3 ? 'none' : 'block';
  if (generateBtn) generateBtn.style.display = currentStep === 3 ? 'block' : 'none';
}

function collectFormData() {
  const destination = document.getElementById('destination');
  const departureDate = document.getElementById('departure-date');
  const returnDate = document.getElementById('return-date');
  const travelers = document.getElementById('travelers');
  const accommodation = document.getElementById('accommodation');
  const transportation = document.getElementById('transportation');
  const dietary = document.getElementById('dietary');
  const groupType = document.getElementById('group-type');
  
  if (destination) formData.destination = destination.value;
  if (departureDate) formData.departureDate = departureDate.value;
  if (returnDate) formData.returnDate = returnDate.value;
  if (travelers) formData.travelers = travelers.value;
  if (accommodation) formData.accommodation = accommodation.value;
  if (transportation) formData.transportation = transportation.value;
  if (dietary) formData.dietary = dietary.value;
  if (groupType) formData.groupType = groupType.value;
}

// AI Generation Simulation
function generateItinerary() {
  console.log('Generating itinerary...');
  collectFormData();
  showPage('ai-generation');
  
  const steps = document.querySelectorAll('.gen-step');
  let currentGenStep = 0;
  
  const interval = setInterval(() => {
    if (currentGenStep > 0) {
      steps[currentGenStep - 1].classList.remove('active');
    }
    
    if (currentGenStep < steps.length) {
      steps[currentGenStep].classList.add('active');
      currentGenStep++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        showItinerary();
      }, 1000);
    }
  }, 1500);
}

function showItinerary() {
  showPage('itinerary-view');
  renderItinerary();
}

function renderItinerary() {
  const selectedDest = appData.destinations.find(d => d.id === formData.destination);
  
  if (selectedDest) {
    // Update header
    const destName = document.querySelector('.destination-name');
    if (destName) destName.textContent = selectedDest.name;
    
    const durationDisplay = document.querySelector('.trip-duration-display');
    if (durationDisplay) {
      durationDisplay.innerHTML = `<i class="fas fa-calendar"></i> ${calculateTripDuration()} days`;
    }
    
    const budgetDisplay = document.querySelector('.trip-budget-display');
    if (budgetDisplay) {
      budgetDisplay.innerHTML = `<i class="fas fa-rupee-sign"></i> ${formatCurrency(formData.budget)}`;
    }
  }
  
  // Render day timeline
  renderDayTimeline();
  
  // Render cost breakdown
  renderCostBreakdown();
}

function renderDayTimeline() {
  const timeline = document.getElementById('day-timeline');
  if (!timeline) return;
  
  timeline.innerHTML = '';
  
  appData.sample_itinerary.days.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    
    dayCard.innerHTML = `
      <div class="day-header">
        <div class="day-title">Day ${day.day}</div>
        <div class="day-location">
          <i class="fas fa-map-marker-alt"></i>
          ${day.location}
        </div>
      </div>
      <div class="day-activities">
        ${day.activities.map(activity => `
          <div class="activity-card">
            <div class="activity-image">
              <img src="${activity.image}" alt="${activity.name}" onerror="this.style.display='none'">
            </div>
            <div class="activity-info">
              <div class="activity-time">${activity.time}</div>
              <div class="activity-name">${activity.name}</div>
              <div class="activity-description">${activity.description}</div>
              <div class="activity-details">
                <div class="activity-meta">
                  <span><i class="fas fa-clock"></i> ${activity.duration}</span>
                  <span class="activity-cost">${formatCurrency(activity.cost)}</span>
                </div>
                <button class="alternatives-btn">View Alternatives</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    timeline.appendChild(dayCard);
  });
}

function renderCostBreakdown() {
  const costContainer = document.getElementById('cost-breakdown');
  if (!costContainer) return;
  
  const activities = appData.sample_itinerary.days.flatMap(day => day.activities);
  const totalActivities = activities.reduce((sum, activity) => sum + activity.cost, 0);
  const accommodation = 4500 * calculateTripDuration();
  const transport = 8500 * 2; // Round trip
  const total = totalActivities + accommodation + transport;
  
  costContainer.innerHTML = `
    <div class="cost-item">
      <span>Activities</span>
      <span>${formatCurrency(totalActivities)}</span>
    </div>
    <div class="cost-item">
      <span>Accommodation</span>
      <span>${formatCurrency(accommodation)}</span>
    </div>
    <div class="cost-item">
      <span>Transportation</span>
      <span>${formatCurrency(transport)}</span>
    </div>
    <div class="cost-item">
      <span>Total</span>
      <span>${formatCurrency(total)}</span>
    </div>
  `;
}

// Booking Management
function initializeBooking() {
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      switchBookingTab(tabId);
    });
  });
  
  // Render booking options
  renderBookingOptions();
  
  // Payment flow
  const proceedPaymentBtn = document.getElementById('proceed-payment');
  const confirmPaymentBtn = document.getElementById('confirm-payment');
  
  if (proceedPaymentBtn) {
    proceedPaymentBtn.addEventListener('click', showPaymentModal);
  }
  if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', processPayment);
  }
}

function switchBookingTab(tabId) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `${tabId}-tab`);
  });
}

function renderBookingOptions() {
  renderFlightOptions();
  renderHotelOptions();
  renderActivityOptions();
}

function renderFlightOptions() {
  const container = document.getElementById('flight-options');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.booking_options.flights.forEach((flight, index) => {
    const option = document.createElement('div');
    option.className = 'booking-option';
    option.dataset.type = 'flight';
    option.dataset.index = index;
    
    option.innerHTML = `
      <div class="option-header">
        <div class="option-name">${flight.airline}</div>
        <div class="option-price">${formatCurrency(flight.price)}</div>
      </div>
      <div class="option-details">
        ${flight.route} • ${flight.duration} • Depart: ${flight.departure} - Arrive: ${flight.arrival}
      </div>
    `;
    
    option.addEventListener('click', () => selectBookingOption('flight', index, flight.price));
    container.appendChild(option);
  });
}

function renderHotelOptions() {
  const container = document.getElementById('hotel-options');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.booking_options.hotels.forEach((hotel, index) => {
    const option = document.createElement('div');
    option.className = 'booking-option';
    option.dataset.type = 'hotel';
    option.dataset.index = index;
    
    option.innerHTML = `
      <div class="option-header">
        <div class="option-name">${hotel.name}</div>
        <div class="option-price">${formatCurrency(hotel.price_per_night)}/night</div>
      </div>
      <div class="option-details">
        ${'⭐'.repeat(Math.floor(hotel.rating))} ${hotel.rating} rating
      </div>
      <div class="option-features">
        ${hotel.amenities.map(amenity => `<span class="feature-tag">${amenity}</span>`).join('')}
      </div>
    `;
    
    option.addEventListener('click', () => selectBookingOption('hotel', index, hotel.price_per_night * calculateTripDuration()));
    container.appendChild(option);
  });
}

function renderActivityOptions() {
  const container = document.getElementById('activity-options');
  if (!container) return;
  
  container.innerHTML = '';
  
  const activities = appData.sample_itinerary.days.flatMap(day => day.activities);
  
  activities.forEach((activity, index) => {
    const option = document.createElement('div');
    option.className = 'booking-option';
    option.dataset.type = 'activity';
    option.dataset.index = index;
    
    option.innerHTML = `
      <div class="option-header">
        <div class="option-name">${activity.name}</div>
        <div class="option-price">${formatCurrency(activity.cost)}</div>
      </div>
      <div class="option-details">
        ${activity.description} • Duration: ${activity.duration}
      </div>
    `;
    
    option.addEventListener('click', () => selectBookingOption('activity', index, activity.cost));
    container.appendChild(option);
  });
}

function selectBookingOption(type, index, price) {
  // Update visual selection
  document.querySelectorAll(`[data-type="${type}"]`).forEach(option => {
    option.classList.remove('selected');
  });
  
  const selectedOption = document.querySelector(`[data-type="${type}"][data-index="${index}"]`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  
  // Update selection data
  if (type === 'activity') {
    const existingIndex = selectedBookingOptions.activities.findIndex(a => a.index === index);
    if (existingIndex === -1) {
      selectedBookingOptions.activities.push({ index, price });
    }
  } else {
    selectedBookingOptions[type] = { index, price };
  }
  
  updateBookingSummary();
}

function updateBookingSummary() {
  let total = 0;
  
  if (selectedBookingOptions.flight) total += selectedBookingOptions.flight.price;
  if (selectedBookingOptions.hotel) total += selectedBookingOptions.hotel.price;
  total += selectedBookingOptions.activities.reduce((sum, activity) => sum + activity.price, 0);
  
  const amountElement = document.querySelector('.booking-summary .amount');
  if (amountElement) {
    amountElement.textContent = formatCurrency(total);
  }
}

// Payment Processing
function showPaymentModal() {
  const totalElement = document.querySelector('.booking-summary .amount');
  const finalAmountElement = document.querySelector('.final-amount');
  
  if (totalElement && finalAmountElement) {
    finalAmountElement.textContent = totalElement.textContent;
  }
  
  const modal = document.getElementById('payment-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function processPayment() {
  // Simulate payment processing
  const paymentModal = document.getElementById('payment-modal');
  const confirmationModal = document.getElementById('confirmation-modal');
  
  if (paymentModal) paymentModal.classList.add('hidden');
  
  setTimeout(() => {
    if (confirmationModal) confirmationModal.classList.remove('hidden');
  }, 1000);
}

// Chat Widget
function initializeChatWidget() {
  const toggle = document.getElementById('chat-toggle');
  const window = document.getElementById('chat-window');
  const closeBtn = window?.querySelector('.chat-close');
  
  if (toggle && window) {
    toggle.addEventListener('click', () => {
      window.classList.toggle('hidden');
    });
  }
  
  if (closeBtn && window) {
    closeBtn.addEventListener('click', () => {
      window.classList.add('hidden');
    });
  }
  
  // Chat input handling
  const input = window?.querySelector('input');
  const sendBtn = window?.querySelector('.btn');
  
  function sendMessage() {
    const message = input?.value.trim();
    if (!message) return;
    
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = message;
    messagesContainer.appendChild(userMessage);
    
    // Add bot response
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.className = 'chat-message bot';
      botMessage.textContent = getBotResponse(message);
      messagesContainer.appendChild(botMessage);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    if (input) input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }
}

function getBotResponse(message) {
  const responses = [
    "I'd be happy to help you with your trip planning! What specific information do you need?",
    "Great question! Based on your preferences, I can suggest some amazing activities.",
    "Let me help you with that. Would you like me to provide more details about your destination?",
    "I can assist you with booking modifications or additional recommendations.",
    "Thank you for your question. Our AI system has analyzed your preferences to provide the best suggestions."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing application...');
  
  try {
    // Language switching
    const langEn = document.getElementById('lang-en');
    const langHi = document.getElementById('lang-hi');
    
    if (langEn) langEn.addEventListener('click', () => switchLanguage('en'));
    if (langHi) langHi.addEventListener('click', () => switchLanguage('hi'));
    
    // Main navigation - Fix the critical bug
    const startPlanningBtn = document.getElementById('start-planning');
    if (startPlanningBtn) {
      startPlanningBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Start planning clicked');
        showPage('planning-form');
        // Add small delay to ensure page is shown before initializing form
        setTimeout(() => {
          initializeForm();
        }, 100);
      });
    } else {
      console.error('Start planning button not found');
    }
    
    // Itinerary actions
    const proceedBookingBtn = document.getElementById('proceed-booking');
    if (proceedBookingBtn) {
      proceedBookingBtn.addEventListener('click', () => {
        showPage('booking-page');
        setTimeout(() => {
          initializeBooking();
        }, 100);
      });
    }
    
    const shareBtn = document.getElementById('share-itinerary');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        if (navigator.share) {
          navigator.share({
            title: 'My AI Trip Itinerary',
            text: 'Check out my personalized trip itinerary!',
            url: window.location.href
          });
        } else {
          // Fallback - copy to clipboard
          navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Link copied to clipboard!'))
            .catch(() => alert('Unable to copy link'));
        }
      });
    }
    
    const downloadBtn = document.getElementById('download-pdf');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        alert('PDF download feature would be implemented with a proper PDF generation library.');
      });
    }
    
    // Modal management
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal').classList.add('hidden');
      });
    });
    
    // Payment methods
    document.querySelectorAll('.payment-method').forEach(method => {
      method.addEventListener('click', () => {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
        method.classList.add('active');
      });
    });
    
    // Confirmation actions
    const backToHomeBtn = document.getElementById('back-to-home');
    if (backToHomeBtn) {
      backToHomeBtn.addEventListener('click', () => {
        const confirmationModal = document.getElementById('confirmation-modal');
        if (confirmationModal) confirmationModal.classList.add('hidden');
        
        showPage('welcome-page');
        
        // Reset form
        currentStep = 1;
        formData = {
          destination: '',
          departureDate: '',
          returnDate: '',
          travelers: 1,
          themes: [],
          budget: 50000,
          accommodation: 'mid-range',
          transportation: 'flight',
          interests: [],
          dietary: 'no-restrictions',
          groupType: 'family'
        };
        selectedBookingOptions = {
          flight: null,
          hotel: null,
          activities: []
        };
      });
    }
    
    const downloadConfirmationBtn = document.getElementById('download-confirmation');
    if (downloadConfirmationBtn) {
      downloadConfirmationBtn.addEventListener('click', () => {
        alert('Itinerary download feature would be implemented with proper PDF generation.');
      });
    }
    
    // Initialize chat widget
    initializeChatWidget();
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
        }
      });
    });
    
    // Initialize default language
    switchLanguage('en');
    
    console.log('Application initialized successfully');
    
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});

// Utility function to handle responsive behavior
function handleResize() {
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Mobile-specific adjustments
    document.querySelectorAll('.form-row').forEach(row => {
      row.style.gridTemplateColumns = '1fr';
    });
  } else {
    // Desktop adjustments
    document.querySelectorAll('.form-row').forEach(row => {
      row.style.gridTemplateColumns = '1fr 1fr';
    });
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial call