
/* =========================================
   ROAVENA — DESTINATION BASED TRAVEL OPTIONS
   15 DESTINATIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const tripForm = document.getElementById("tripForm");
    const travelSection = document.getElementById("travelOptions");

    const hotelContainer = document.getElementById("hotelOptions");
    const intercityContainer = document.getElementById("intercityOptions");
    const localContainer = document.getElementById("localTransportOptions");

    const hotelCostElement = document.getElementById("hotelCost");
    const transportCostElement = document.getElementById("transportCost");
    const localCostElement = document.getElementById("localTransportCost");
    const totalCostElement = document.getElementById("totalCost");

    
// BOOKING SUMMARY ELEMENTS

const summaryRoute = document.getElementById("summaryRoute");
const summaryDates = document.getElementById("summaryDates");
const summaryTravellers = document.getElementById("summaryTravellers");
const summaryHotel = document.getElementById("summaryHotel");
const summaryTransport = document.getElementById("summaryTransport");
const summaryLocal = document.getElementById("summaryLocal");
const summaryTotal = document.getElementById("summaryTotal");

const confirmTripButton = document.getElementById("confirmTripButton");
const bookingNote = document.querySelector(".booking-note");


    const subtitle = document.getElementById("destinationSubtitle");
    const hotelSubtitle = document.getElementById("hotelSubtitle");
    const intercitySubtitle = document.getElementById("intercitySubtitle");
    const localSubtitle = document.getElementById("localTransportSubtitle");

    if (!tripForm || !travelSection || !hotelContainer ||
        !intercityContainer || !localContainer) {
        console.error("ROAVENA: Travel options HTML elements are missing.");
        return;
    }

    const getTrip = () =>
    ROAVENAStorage.getCustomerJSON("trip-draft") || {};

    let trip = null;
    let selectedHotel = null;
    let selectedIntercity = null;
    let selectedLocal = null;

    // =====================================
    // DESTINATION DATA
    // =====================================

    const destinations = {

        "Manali": {
    hotels: [
        [
            "manali-h1",
            "Span Resort & Spa",
            "Luxury riverside resort surrounded by mountains",
            19500,
            "https://spanresorts.com/wp-content/uploads/2023/07/5-1.jpg"
        ],
        [
            "manali-h2",
            "Welcomhotel by ITC Hotels Hamsa",
            "Mountain-view resort with luxury rooms and apple orchards",
            15990,
            "https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhotelhamsa-manali/images/overview/overview/d/facade.jpg"
        ],
        [
            "manali-h3",
            "Storii by ITC Hotels Urvashi's Retreat",
            "Boutique mountain retreat with Himalayan views",
            12000,
            "https://www.itchotels.com/content/dam/itchotels/in/umbrella/storii/hotels/storiiur-manali/overview/headmast/d/h-x.jpg"
        ]
    ],

    local: [
        ["manali-l1", "Local Sightseeing Cab", "Private sightseeing vehicle", 2500, "🚕"],
        ["manali-l2", "Bike Rental", "Explore nearby areas", 900, "🏍️"],
        ["manali-l3", "Local Bus", "Budget-friendly local travel", 250, "🚌"]
    ],

    fares: [7500, 1800, 1400, 9500]
},
        "Goa": {
            hotels: [
    [
        "goa-h1",
        "Taj Fort Aguada Resort & Spa",
        "Luxury beachfront resort overlooking the Arabian Sea",
        18000,
        "https://cdn.tajhotels.com/images/ocl5w36p/prod5/51e0a5822c92aa65ac76932b4b1638ce2ae5a00c-3840x1860.jpg?w=1024"
    ],
    [
        "goa-h2",
        "Alila Diwa Goa",
        "Luxury resort surrounded by tropical greenery and palm trees",
        14000,
        "https://img-4.linternaute.com/h3XYFJezhqxXp1xRuqiJogHbJGs%3D/1240x/smart/024c55b7b0b44dd79ae94ee8f32970c4/ccmcms-linternaute/10357596-alila-diwa-goa.jpg"
    ],
    [
        "goa-h3",
        "The Zuri White Sands Goa Resort & Casino",
        "Beachside resort with tropical gardens and a pool",
        12000,
        "https://pim.novatours.eu/Hotels/35201/image-thumb__35201__nova_hi_res/INGZURIWHI_SGOA-TOP-The-Zuri--main.jpg"
    ]
],
            local: [
                ["goa-l1", "Private Cab", "Explore beaches and attractions", 2800, "🚕"],
                ["goa-l2", "Scooter Rental", "Flexible local exploration", 700, "🛵"],
                ["goa-l3", "Local Bus", "Affordable local transport", 200, "🚌"]
            ],
            fares: [6500, 1600, 1100, 8500]
        },

        "Jaipur": {
           hotels: [
    [
        "jaipur-h1",
        "ITC Rajputana, Jaipur",
        "Luxury hotel inspired by traditional Rajasthani havelis",
        14500,
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcrajputana-jaipur/gallery/overview/balcony-view.png"
    ],
    [
        "jaipur-h2",
        "Samode Haveli",
        "Heritage boutique hotel with traditional courtyards",
        18000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoX1R1D2zA541Qhpa5tTiIo8hSPPI3urH0RezteTn-w&s=10"
    ],
    [
        "jaipur-h3",
        "Rambagh Palace",
        "Historic royal palace hotel surrounded by Mughal gardens",
        35000,
        "https://www.travelplusstyle.com/wp-content/gallery/rambagh-palace-jaipur/hi_h4ej0_67917557_rambagh_palace_-_exterior_1.jpg"
    ]
], 
            local: [
                ["jaipur-l1", "City Sightseeing Cab", "Private city tour", 2200, "🚕"],
                ["jaipur-l2", "Auto Rickshaw", "Short-distance city rides", 500, "🛺"],
                ["jaipur-l3", "Local Bus", "Budget city travel", 150, "🚌"]
            ],
            fares: [5500, 1200, 800, 6500]
        },

        "Gangtok": {
            hotels: [
    [
        "gangtok-h1",
        "The Elgin Nor-Khill",
        "Heritage hotel with elegant interiors and Himalayan surroundings",
        11500,
        "https://www.elginhotels.com/wp-content/uploads/2020/02/gallery-pic1-4.jpg"
    ],
    [
        "gangtok-h2",
        "Summit Norling Resort & Spa",
        "Peaceful hillside resort with gardens and mountain-view rooms",
        8500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgduutDzlSzKJAWjIh1_xqisXhdnJ-RSPTIlAnBWLZzw&s=10"
    ],
    [
        "gangtok-h3",
        "Summit Ttakshang Residency Hotel & Spa",
        "Comfortable city hotel close to MG Marg",
        5500,
        "https://assets.simplotel.com/simplotel/image/upload/x_0%2Cy_0%2Cw_3792%2Ch_2133%2Cr_0%2Cc_crop/q_60%2Cw_900%2Cdpr_1%2Cf_auto%2Cfl_progressive%2Cc_limit/summit-ttakshang-residency-hotel-spa-gangtok/TTAKSHANG_2.0_HH_79389749"
    ]
],
            local: [
                ["gangtok-l1", "Local Tourist Cab", "Sightseeing around Gangtok", 2600, "🚕"],
                ["gangtok-l2", "Shared Taxi", "Shared local journeys", 400, "🚙"],
                ["gangtok-l3", "Local Vehicle", "Short local transfers", 700, "🚐"]
            ],
            fares: [8500, 2200, 1600, 10000]
        },

        "Rishikesh": {
            hotels: [
    [
        "rishikesh1",
        "Neemrana's Glasshouse on The Ganges",
        "Riverside heritage resort surrounded by greenery",
        9500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTepLsthh5zOGdrlU40SVYHZYtjS2kRLo_370pTfJHQ&s=10"
    ],
    [
        "rishikesh2",
        "Aloha On The Ganges",
        "Resort with scenic mountain and riverside views",
        11000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhJDoCtXUepiR4eN4pS3NsAb-mZpnvMNCh7yw1aO1Mg&s=10"
    ],
    [
        "rishikesh3",
        "Ganga Kinare",
        "Riverside boutique resort with landscaped surroundings",
        8500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1PneLydP8eZ5MrIxe4u2ewc6NL98sInVCBoOSN3yLw&s=10"
    ]
],
            local: [
                ["rishikesh-l1", "Local Sightseeing Cab", "Explore nearby attractions", 1800, "🚕"],
                ["rishikesh-l2", "Scooter Rental", "Independent local travel", 600, "🛵"],
                ["rishikesh-l3", "Auto Rickshaw", "Short local journeys", 350, "🛺"]
            ],
            fares: [5000, 1000, 700, 5500]
        },

        "Kashmir": {
            hotels: [
    [
        "kashmir-h1",
        "Taj Dal View, Srinagar",
        "Luxury stay overlooking Dal Lake and the Zabarwan Mountains",
        18000,
        "https://static.hectindia.com/0000/271/2025/02/22/taj-dal-view-srinagar-3-600.webp"
    ],
    [
        "kashmir-h2",
        "The Khyber Himalayan Resort & Spa",
        "Luxury mountain resort surrounded by pine forests in Gulmarg",
        25000,
        "https://assets.cntraveller.in/photos/6a3e5eceecdd25e0141dd058/16%3A9/w_2560%2Cc_limit/Copy%2520of%2520winter%2520facade%2520top%2520shot%2520the%2520khyber%2520-2.jpg"
    ],
    [
        "kashmir-h3",
        "Hotel Akbar Sonamarg",
        "Mountain-view hotel with comfortable rooms and alpine surroundings",
        7000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooVetKG57BNnWHHAWUCzYVQgKw52VLDKuSLEua872NA&s=10"
    ]
],
            local: [
                ["kashmir-l1", "Private Sightseeing Cab", "Explore the valley", 3500, "🚕"],
                ["kashmir-l2", "Local Taxi", "Point-to-point journeys", 1200, "🚙"],
                ["kashmir-l3", "Shared Cab", "Shared local travel", 500, "🚐"]
            ],
            fares: [9000, 2500, 1800, 11000]
        },

        "Udaipur": {
            hotels: [
    [
        "udaipur-h1",
        "Taj Lake Palace",
        "Luxury heritage palace floating on Lake Pichola",
        35000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4y-p2iG4UpvY8aRcN86E_UY8Hu-nrudUYjEBP28H5Tw&s=10"
    ],
    [
        "udaipur-h2",
        "Trident Udaipur",
        "Elegant lakeside hotel with gardens and pool",
        14000,
        "https://cdn-zen.readytotrip.com/t/1024x768/content/0d/da/0ddabccd66649e909ad08d6b0dce75b7cf691d25.jpeg"
    ],
    [
        "udaipur-h3",
        "The LaLiT Laxmi Vilas Palace",
        "Heritage palace hotel overlooking Fateh Sagar Lake",
        12000,
        "https://q-xx.bstatic.com/xdata/images/hotel/max1200/210211178.jpg?k=082595b980604a5bc1870292a75624e5213ac39ace03f0f611440e6d77dbab5c&o="
    ]
],
            local: [
                ["udaipur-l1", "City Tour Cab", "Explore Udaipur attractions", 2200, "🚕"],
                ["udaipur-l2", "Auto Rickshaw", "Local short-distance rides", 450, "🛺"],
                ["udaipur-l3", "Scooter Rental", "Explore at your own pace", 650, "🛵"]
            ],
            fares: [6000, 1300, 900, 7000]
        },

        "Darjeeling": {
            hotels: [
    [
        "darjeeling-h1",
        "MAYFAIR Hill Resort, Darjeeling",
        "Heritage resort with landscaped gardens and mountain views",
        14000,
        "https://assets.simplotel.com/simplotel/image/upload/x_0%2Cy_207%2Cw_3872%2Ch_2178%2Cr_0%2Cc_crop/q_80%2Cw_900%2Cdpr_1%2Cf_auto%2Cfl_progressive%2Cc_limit/mayfair-hill-resort-darjeeling/Darjeeling_104_xmw69k"
    ],
    [
        "darjeeling-h2",
        "Cedar Inn",
        "Boutique hillside hotel with wooden interiors and Himalayan views",
        8500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOzOis0VtLmd3r29J0k583kI6bgLWw_AVnsTW8Minsg&s=10"
    ],
    [
        "darjeeling-h3",
        "Taj Chia Kutir Resort & Spa",
        "Luxury tea-estate resort surrounded by Himalayan greenery",
        22000,
        "https://cdn.sanity.io/images/ocl5w36p/prod5/3747a1d37e3f89202129548e81db5adce7f74871-3840x1860.jpg"
    ]
],
            local: [
                ["darjeeling-l1", "Local Sightseeing Cab", "Explore nearby viewpoints", 2400, "🚕"],
                ["darjeeling-l2", "Shared Jeep", "Shared hill journeys", 500, "🚙"],
                ["darjeeling-l3", "Local Taxi", "Short local transfers", 900, "🚐"]
            ],
            fares: [8500, 2200, 1600, 9500]
        },

        "Munnar": {
            hotels: [
    [
        "munnar1",
        "Munnar Mahal",
        "Heritage resort with beautiful mountain surroundings",
        6500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaMDevaY492sZsSFmdP0mRMQ7z_YN5OSO3xCOmewmWQ&s=10"
    ],
    [
        "munnar2",
        "The Fog Munnar Resort & Spa",
        "Luxury resort with landscaped gardens and scenic views",
        9500,
        "https://www.thefogmunnar.com/uploads/big-050625041657img-5.jpg"
    ],
    [
        "munnar3",
        "Scenic, Munnar - IHCL SeleQtions",
        "Luxury hillside resort with an outdoor pool",
        14000,
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/06/f3/dc/caption.jpg?h=600&s=1&w=1000"
    ]
],
            local: [
                ["munnar-l1", "Sightseeing Cab", "Explore Munnar attractions", 2500, "🚕"],
                ["munnar-l2", "Jeep Safari", "Local guided vehicle experience", 1800, "🚙"],
                ["munnar-l3", "Local Taxi", "Short-distance travel", 800, "🚐"]
            ],
            fares: [8500, 2200, 1600, 9500]
        },

        "Meghalaya": {
            hotels: [
    [
        "meghalaya1",
        "Polo Resort, Cherrapunji",
        "Luxury resort overlooking the green valleys",
        12000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1yA4sYyJYv3pXLmbc3ga_x_GjVz6Cdr7vNKHReA7qA&s=10"
    ],
    [
        "meghalaya2",
        "Polo Towers, Shillong",
        "Comfortable executive suite in Shillong",
        8500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0npoWQXm3ZeutBxlGp0nszBNoij3ro0qRyZ-1tBXew&s=10"
    ],
    [
        "meghalaya3",
        "Ri Kynjai – Serenity by the Lake",
        "Lakeside cottages surrounded by greenery",
        11000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDvWTP60WcySPglxjL-djpSxhGzOF8iT5Dlj_FC0v8A&s=10"
    ]
],
            local: [
                ["meghalaya-l1", "Private Tour Cab", "Explore waterfalls and viewpoints", 3200, "🚕"],
                ["meghalaya-l2", "Shared Taxi", "Shared local journeys", 600, "🚙"],
                ["meghalaya-l3", "Local Vehicle", "Short-distance transfers", 900, "🚐"]
            ],
            fares: [9000, 2400, 1800, 10500]
        },

        "Varanasi": {
            hotels: [
    [
        "varanasi1",
        "Taj Ganges, Varanasi",
        "Luxury stay surrounded by lush gardens",
        14000,
        "https://cdn.sanity.io/images/ocl5w36p/prod5/0e8936cf5ea63c56b7a1e2024ce684ff151ab577-2880x1395.jpg?auto=format&dpr=2&w=1024"
    ],
    [
        "varanasi2",
        "BrijRama Palace",
        "Heritage palace stay near the Ganges",
        18000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYxDi6noVjrVpGRNPUTjbQGdpGZTI0lv3N2iVJNCjhw&s=10"
    ],
    [
        "varanasi3",
        "Hotel Madin",
        "Modern hotel with rooftop pool",
        8500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0zauGH14YmZ1nSIgvrmt5-qPBeu3PFg-EiUY74jFFQ&s=10"
    ]
],
            local: [
                ["varanasi-l1", "City Tour Cab", "Explore city attractions", 1800, "🚕"],
                ["varanasi-l2", "Auto Rickshaw", "Local city rides", 400, "🛺"],
                ["varanasi-l3", "E-Rickshaw", "Short local journeys", 200, "🛺"]
            ],
            fares: [6000, 1400, 900, 6500]
        },

        "Agra": {
            hotels: [
    [
        "agra1",
        "Taj Agra",
        "Luxury hotel with beautiful views of the Taj Mahal",
        14000,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-TPWe_ILVsNOPwfTJeT4KoIwIG9SUfjXsHX64nxllQ&s=10"
    ],
    [
        "agra2",
        "ITC Mughal, Agra",
        "Luxury resort with Mughal-inspired architecture and gardens",
        12000,
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmughal-agra/gallery/overview/humayun-bridge-facade.jpg"
    ],
    [
        "agra3",
        "Courtyard by Marriott Agra",
        "Modern hotel with landscaped outdoor spaces and pool",
        9500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W88rI1FJpjnQFMVJ24SzjDMFOdHtnQyLMUZS-JsbJw&s=10"
    ]
],
            local: [
                ["agra-l1", "City Sightseeing Cab", "Explore Agra attractions", 1700, "🚕"],
                ["agra-l2", "Auto Rickshaw", "Local transport", 400, "🛺"],
                ["agra-l3", "E-Rickshaw", "Short-distance rides", 200, "🛺"]
            ],
            fares: [4500, 900, 600, 5000]
        },

        "Jaisalmer": {
            hotels: [
    [
        "jaisalmer1",
        "Storii by ITC Hotels, Jaisalmer",
        "Heritage-style luxury hotel with beautiful sandstone architecture",
        11000,
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/storii/hotels/storiijaisalmer/gallery/overview/storii-jaisalmer-day-view.jpg"
    ],
    [
        "jaisalmer2",
        "Hotel Rang Niwas",
        "Traditional Rajasthani heritage hotel",
        6500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJ33wwUehLDqUQqn8pcShw13_G-PiOSp3mr67OH46XA&s=10"
    ],
    [
        "jaisalmer3",
        "Heritage Haveli Jaisalmer",
        "Traditional haveli stay near Jaisalmer Fort",
        5500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyBD2rAiguPgtNvQGVu9wsmeIDLb0eHUX1F7ie5BSIA&s=10"
    ]
],
            local: [
                ["jaisalmer-l1", "Desert Tour Jeep", "Explore desert attractions", 3000, "🚙"],
                ["jaisalmer-l2", "Local Cab", "City sightseeing", 1500, "🚕"],
                ["jaisalmer-l3", "Auto Rickshaw", "Short local journeys", 350, "🛺"]
            ],
            fares: [7000, 1600, 1100, 8000]
        },

        "Andaman": {
            hotels: [
    [
        "andaman1",
        "Taj Exotica Resort & Spa",
        "Luxury beachfront villas surrounded by tropical greenery",
        18000,
        "https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/d9df93a022b5c9a45f66092076cff72e20c0df88-1920x930.jpg?auto=format&w=2560"
    ],
    [
        "andaman2",
        "Symphony Palms Beach Resort",
        "Tropical cottages surrounded by palm trees",
        9500,
        "https://assets.simplotel.com/simplotel/image/upload/w_5000%2Ch_3333/x_0%2Cy_260%2Cw_5000%2Ch_2813%2Cr_0%2Cc_crop%2Cq_80%2Cfl_progressive/w_900%2Cf_auto%2Cc_fit/symphony-palms-beach-resort-and-spa/resort_in_havelock"
    ],
    [
        "andaman3",
        "SeaShell Havelock",
        "Island resort with tropical cottages and gardens",
        11000,
        "https://www.seashellhotels.net/_next/image?q=75&url=%2Fassets%2Fimages%2Fresource%2Froom-seashell-havelock-1.jpg&w=3840"
    ]
],
            local: [
                ["andaman-l1", "Island Cab", "Local sightseeing", 2200, "🚕"],
                ["andaman-l2", "Scooter Rental", "Explore the island", 800, "🛵"],
                ["andaman-l3", "Local Bus", "Budget island travel", 250, "🚌"]
            ],
            fares: [12000, 3500, 2500, 13000]
        },

        "Ooty": {
            hotels: [
    [
        "ooty1",
        "Savoy, Ooty - IHCL SeleQtions",
        "Heritage hotel with beautiful colonial architecture",
        15000,
        "https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/ff0c8b348d479daeb1ee1812475981548184a3a8-1920x660.jpg?auto=format&dpr=2&fit=max&w=980"
    ],
    [
        "ooty2",
        "Fortune Resort Sullivan Court",
        "Hill resort with beautiful gardens and elegant architecture",
        9000,
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/fortune/hotels/fortuneresortsullivancourt-ooty/gallery/overview/exterior-view.jpg"
    ],
    [
        "ooty3",
        "Sinclairs Retreat Ooty",
        "Hilltop resort overlooking the Nilgiri mountains",
        8500,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQpVWSN3w6WPp9YojSEWsCXp_mGuLPkMeURgqY__Tzg&s=10"
    ]
],
            local: [
                ["ooty-l1", "Sightseeing Cab", "Explore Ooty attractions", 2200, "🚕"],
                ["ooty-l2", "Scooter Rental", "Independent local travel", 700, "🛵"],
                ["ooty-l3", "Local Bus", "Affordable local transport", 200, "🚌"]
            ],
            fares: [8500, 2100, 1500, 9000]
        }

    };


    // =====================================
    // HELPER FUNCTIONS
    // =====================================

    function formatPrice(amount) {
        return "₹" + Math.round(amount).toLocaleString("en-IN");
    }

    function safeText(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    function getDestinationData() {
        const name = String(trip.destination || "").trim();

        return destinations[name] || null;
    }

    // =====================================
// EXPOSE DESTINATION DATA FOR BOOKINGS
// =====================================

window.ROAVENA_DESTINATIONS = destinations;

    
function getNights() {

    const startDate = trip.departureDate;
    const endDate = trip.returnDate;

    if (startDate && endDate) {

        const [startYear, startMonth, startDay] =
            startDate.split("-").map(Number);

        const [endYear, endMonth, endDay] =
            endDate.split("-").map(Number);

        const start = new Date(startYear, startMonth - 1, startDay);
        const end = new Date(endYear, endMonth - 1, endDay);

        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {

            const difference = Math.round(
                (end - start) / (1000 * 60 * 60 * 24)
            );

            return Math.max(0, difference);
        }
    }

    const duration = parseInt(trip.duration, 10);

    return Math.max(0, (Number.isFinite(duration) ? duration : 1) - 1);
}


    function getTravellers() {
        return Math.max(1, Number(trip.travellers || 1));
    }
        // =====================================
    // MAJOR CITY ROUTE ESTIMATOR
    // Approximate round-trip estimates
    // =====================================

    const originCities = {
        "delhi": [28.6139, 77.2090],
        "new delhi": [28.6139, 77.2090],
        "chandigarh": [30.7333, 76.7794],
        "ludhiana": [30.9010, 75.8573],
        "amritsar": [31.6340, 74.8723],
        "jaipur": [26.9124, 75.7873],
        "mumbai": [19.0760, 72.8777],
        "pune": [18.5204, 73.8567],
        "ahmedabad": [23.0225, 72.5714],
        "lucknow": [26.8467, 80.9462],
        "kolkata": [22.5726, 88.3639],
        "bengaluru": [12.9716, 77.5946],
        "bangalore": [12.9716, 77.5946],
        "hyderabad": [17.3850, 78.4867],
        "chennai": [13.0827, 80.2707]
    };

    const destinationCoordinates = {
        "Manali": [32.2396, 77.1887],
        "Goa": [15.2993, 74.1240],
        "Jaipur": [26.9124, 75.7873],
        "Gangtok": [27.3389, 88.6065],
        "Rishikesh": [30.0869, 78.2676],
        "Kashmir": [34.0837, 74.7973],
        "Udaipur": [24.5854, 73.7125],
        "Darjeeling": [27.0410, 88.2663],
        "Munnar": [10.0889, 77.0595],
        "Meghalaya": [25.5788, 91.8933],
        "Varanasi": [25.3176, 82.9739],
        "Agra": [27.1767, 78.0081],
        "Jaisalmer": [26.9157, 70.9083],
        "Andaman": [11.6234, 92.7265],
        "Ooty": [11.4102, 76.6950]
    };

    function getDistanceKm(pointA, pointB) {
        const toRadians = value => value * Math.PI / 180;

        const earthRadius = 6371;

        const latDifference =
            toRadians(pointB[0] - pointA[0]);

        const lonDifference =
            toRadians(pointB[1] - pointA[1]);

        const a =
            Math.sin(latDifference / 2) ** 2 +
            Math.cos(toRadians(pointA[0])) *
            Math.cos(toRadians(pointB[0])) *
            Math.sin(lonDifference / 2) ** 2;

        return earthRadius * 2 *
            Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function getRouteDistances() {
        const originName = String(trip.origin || "")
            .trim()
            .toLowerCase();

        const originPoint = originCities[originName];
        const destinationPoint =
            destinationCoordinates[trip.destination];

        if (!originPoint || !destinationPoint) return null;

        const airDistance =
            getDistanceKm(originPoint, destinationPoint);

        const hillDestinations = [
            "Manali", "Gangtok", "Kashmir",
            "Darjeeling", "Munnar", "Meghalaya",
            "Ooty"
        ];

        const roadMultiplier =
            hillDestinations.includes(trip.destination) ? 1.45 : 1.25;

        return {
            air: airDistance,
            road: airDistance * roadMultiplier
        };
    }

    function getIntercityEstimate(mode) {
        const distances = getRouteDistances();

        if (!distances) return null;

        // Mainland-to-island road journeys are not possible.
        if (
            trip.destination === "Andaman" &&
            mode !== "flight"
        ) {
            return null;
        }

        const travellers = getTravellers();

        let low = 0;
        let high = 0;

        if (mode === "flight") {
            low = Math.max(3500, distances.air * 4.5);
            high = Math.max(5500, distances.air * 7);
            low *= travellers;
            high *= travellers;
        }

        else if (mode === "train") {
            low = Math.max(250, distances.road * 0.75) * 2;
            high = Math.max(500, distances.road * 1.35) * 2;
            low *= travellers;
            high *= travellers;
        }

        else if (mode === "bus") {
            low = Math.max(300, distances.road * 1.1) * 2;
            high = Math.max(500, distances.road * 1.8) * 2;
            low *= travellers;
            high *= travellers;
        }

        else if (mode === "cab") {
            low = Math.max(3000, distances.road * 2 * 14);
            high = Math.max(4500, distances.road * 2 * 18);
        }

        return {
            low: Math.round(low / 100) * 100,
            high: Math.round(high / 100) * 100,
            total: (low + high) / 2
        };
    }
    function saveSelections() {
    const saved = getTrip();

    saved.hotelSelection = selectedHotel;
    saved.transportSelection = selectedIntercity;
    saved.localTransportSelection = selectedLocal;

    ROAVENAStorage.setCustomerJSON("trip-draft", saved);
    trip = saved;
}


    // =====================================
    // COST CALCULATIONS
    // =====================================

    function getHotelCost() {
        const data = getDestinationData();
        if (!data || !selectedHotel) return 0;

        const hotel = data.hotels.find(item => item[0] === selectedHotel);
        if (!hotel) return 0;

        const rooms = Math.ceil(getTravellers() / 2);

        return hotel[3] * getNights() * rooms;
    }

      function getIntercityCost() {
        if (!selectedIntercity) return 0;

        const estimate =
            getIntercityEstimate(selectedIntercity);

        return estimate ? estimate.total : 0;
    }

    function getLocalCost() {
        const data = getDestinationData();
        if (!data || !selectedLocal) return 0;

        const option = data.local.find(item => item[0] === selectedLocal);
        if (!option) return 0;

        // Local vehicle rentals are estimated per trip.
        return option[3];
    }

        function updateSummary() {
        const hotel = getHotelCost();
        const transport = getIntercityCost();
        const local = getLocalCost();

        hotelCostElement.textContent = formatPrice(hotel);

        if (selectedIntercity) {
            const estimate =
                getIntercityEstimate(selectedIntercity);

            transportCostElement.textContent = estimate
                ? `${formatPrice(estimate.low)} – ${formatPrice(estimate.high)}`
                : "Route estimate unavailable";
        } else {
            transportCostElement.textContent = "Not selected";
        }

        localCostElement.textContent = formatPrice(local);

        totalCostElement.textContent =
            formatPrice(hotel + transport + local);
            updateBookingSummary();
    }
    
    
// =====================================
// UPDATE BOOKING SUMMARY
// =====================================

function updateBookingSummary() {

    const data = getDestinationData();

    if (!data) return;

    const hotel = data.hotels.find(
        item => item[0] === selectedHotel
    );

    const local = data.local.find(
        item => item[0] === selectedLocal
    );

    const transportNames = {
        flight: "Flight",
        train: "Train",
        bus: "Intercity Bus",
        cab: "Private Cab"
    };

    function formatDate(date) {

        if (!date) return "Not selected";

        return new Date(date + "T00:00:00")
            .toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });
    }

    if (summaryRoute) {
        summaryRoute.textContent =
            `${trip.origin} → ${trip.destination}`;
    }

    if (summaryDates) {
        summaryDates.textContent =
            `${formatDate(trip.departureDate)} – ${formatDate(trip.returnDate)}`;
    }

    if (summaryTravellers) {
        summaryTravellers.textContent =
            `${getTravellers()} Traveller(s)`;
    }

    if (summaryHotel) {
        summaryHotel.textContent =
            hotel ? hotel[1] : "Not selected";
    }

    if (summaryTransport) {
        summaryTransport.textContent =
            selectedIntercity
                ? transportNames[selectedIntercity] || selectedIntercity
                : "Not selected";
    }

    if (summaryLocal) {
        summaryLocal.textContent =
            local ? local[1] : "Not selected";
    }

    if (summaryTotal) {
        summaryTotal.textContent = formatPrice(
            getHotelCost() +
            getIntercityCost() +
            getLocalCost()
        );
    }
}


   function createCard(visual, name, description, price, unit, selected, attribute, id) {

    const imageContent = String(visual).startsWith("https://")
        ? `<img src="${safeText(visual)}"
                alt="${safeText(name)}"
                loading="lazy"
                onerror="this.style.display='none'">`
        : `<span>${safeText(visual)}</span>`;

    return `
        <article class="travel-card ${selected ? "selected" : ""}">

            <div class="travel-card-image">
                ${imageContent}
            </div>

            <div class="travel-card-content">

                <h3>${safeText(name)}</h3>

                <p>${safeText(description)}</p>

                <div class="travel-price">
                    ${formatPrice(price)}
                    <small>${unit}</small>
                </div>

                <button
                    type="button"
                    class="travel-select-button"
                    ${attribute}="${safeText(id)}"
                >
                    ${selected ? "Selected ✓" : "Choose This Option"}
                </button>

            </div>

        </article>
    `;
}
            


    // =====================================
    // RENDER HOTELS
    // =====================================

    function renderHotels() {
        const data = getDestinationData();

        hotelContainer.innerHTML = data.hotels.map(hotel => {

            const selected = selectedHotel === hotel[0];

            return createCard(
                hotel[4],
                hotel[1],
                hotel[2],
                hotel[3],
                "/ room / night",
                selected,
                "data-hotel",
                hotel[0]
            );

        }).join("");
    }


        function renderIntercity() {
        const modes = [
            {
                id: "flight",
                name: "Flight",
                description: "Approximate return airfare per group, based on the route.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            },
            {
                id: "train",
                name: "Train",
                description: "Estimated return fare. Connecting trains may be required.",
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900"
            },
            {
                id: "bus",
                name: "Intercity Bus",
                description: "Estimated return fare. Direct or connecting services may be required.",
                image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900"
            },
            {
                id: "cab",
                name: "Private Cab",
                description: "Approximate round-trip private cab cost for the group.",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
            }
        ];

        const distances = getRouteDistances();

        intercityContainer.innerHTML = modes.map(mode => {
            const selected = selectedIntercity === mode.id;
            const estimate = getIntercityEstimate(mode.id);

            let priceContent = "";

            if (!distances) {
                priceContent = `
                    Route estimate unavailable
                    <small>Enter a supported starting city</small>
                `;
            } else if (!estimate) {
                priceContent = `
                    Not available
                    <small>Road travel is not possible for this route</small>
                `;
            } else {
                priceContent = `
                    ${formatPrice(estimate.low)} – ${formatPrice(estimate.high)}
                    <small>Approximate return fare</small>
                `;
            }

            return `
                <article class="travel-card ${selected ? "selected" : ""}">

                    <div class="travel-card-image">
                        <img
                            src="${safeText(mode.image)}"
                            alt="${safeText(mode.name)}"
                            loading="lazy"
                            onerror="this.style.display='none'"
                        >
                    </div>

                    <div class="travel-card-content">

                        <h3>${safeText(mode.name)}</h3>

                        <p>${safeText(mode.description)}</p>

                        <div class="travel-price">
                            ${priceContent}
                        </div>

                        <button
                            type="button"
                            class="travel-select-button"
                            data-intercity="${safeText(mode.id)}"
                            ${!estimate ? "disabled" : ""}
                        >
                            ${selected ? "Selected ✓" : "Choose This Option"}
                        </button>

                    </div>

                </article>
            `;
        }).join("");
    }
    // =====================================
// LOCAL TRANSPORT REAL PHOTOS
// =====================================

function getLocalTransportImage(name) {

    const type = name.toLowerCase();

    if (type.includes("scooter") || type.includes("bike")) {
        return "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900";
    }

    if (type.includes("bus")) {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrX-HPpGyF_DkEFo-pzBG0yKxYJ55WsbnQyIO9ozBbyw&s=10";
    }

    if (type.includes("auto") || type.includes("e-rickshaw")) {
        return "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=900";
    }

    if (type.includes("jeep") || type.includes("shared")) {
        return "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900";
    }

    return "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900";
}

    // =====================================
    // RENDER LOCAL TRANSPORT
    // =====================================

    function renderLocalTransport() {
        const data = getDestinationData();

        localContainer.innerHTML = data.local.map(option => {

            const selected = selectedLocal === option[0];

            return createCard(
                getLocalTransportImage(option[1]),
                option[1],
                option[2],
                option[3],
                "/ estimated trip",
                selected,
                "data-local",
                option[0]
            );

        }).join("");
    }


    // =====================================
    // SHOW ALL OPTIONS
    // =====================================

    function showTravelOptions() {

        trip = getTrip();

        if (!trip.destination || !trip.origin) {
            console.warn("ROAVENA: Origin or destination is missing.");
            return;
        }

        const data = getDestinationData();

        if (!data) {
            subtitle.textContent =
                "Please select one of the 15 supported destinations.";
            travelSection.hidden = false;
            hotelContainer.innerHTML =
                "<p>Please select a supported destination.</p>";
            intercityContainer.innerHTML = "";
            localContainer.innerHTML = "";
            return;
        }

        selectedHotel = trip.hotelSelection || null;
        selectedIntercity = trip.transportSelection || null;
        selectedLocal = trip.localTransportSelection || null;

        subtitle.textContent =
            `Your personalised travel options for ${trip.destination}.`;

        hotelSubtitle.textContent =
            `Accommodation options in ${trip.destination}.`;

        intercitySubtitle.textContent =
            `Estimated travel from ${trip.origin} to ${trip.destination}.`;

        localSubtitle.textContent =
            `Ways to explore ${trip.destination} and nearby attractions.`;

        travelSection.hidden = false;

        renderHotels();
        renderIntercity();
        renderLocalTransport();
        updateSummary();
    }


    // =====================================
    // HOTEL SELECTION
    // =====================================

    hotelContainer.addEventListener("click", function (event) {

        const button = event.target.closest("[data-hotel]");
        if (!button) return;

        selectedHotel = button.dataset.hotel;

        saveSelections();
        renderHotels();
        updateSummary();
    });


    // =====================================
    // INTERCITY SELECTION
    // =====================================

    intercityContainer.addEventListener("click", function (event) {

        const button = event.target.closest("[data-intercity]");
        if (!button) return;

        selectedIntercity = button.dataset.intercity;

        saveSelections();
        renderIntercity();
        updateSummary();
    });


    // =====================================
    // LOCAL TRANSPORT SELECTION
    // =====================================

    localContainer.addEventListener("click", function (event) {

        const button = event.target.closest("[data-local]");
        if (!button) return;

        selectedLocal = button.dataset.local;

        saveSelections();
        renderLocalTransport();
        updateSummary();
    });

    
// =====================================
// CONFIRM TRIP
// =====================================

if (confirmTripButton) {

    confirmTripButton.addEventListener("click", function () {

        if (!selectedHotel || !selectedIntercity) {

            if (bookingNote) {
                bookingNote.textContent =
                    "Please select a hotel and intercity transport before confirming.";
            }

            return;
        }

        const bookings =
    ROAVENAStorage.getJSON("roavena-bookings") || [];

const destinationData = getDestinationData();

const hotelDetails = destinationData.hotels.find(
    item => item[0] === selectedHotel
);

const localDetails = destinationData.local.find(
    item => item[0] === selectedLocal
);

const transportNames = {
    flight: "Flight",
    train: "Train",
    bus: "Intercity Bus",
    cab: "Private Cab"
};

const booking = {

    bookingId: Date.now(),
    customerEmail: ROAVENAStorage.getCurrentCustomer(),
    ...getTrip(),

    hotelSelection: selectedHotel,
    hotelName: hotelDetails ? hotelDetails[1] : selectedHotel,

    transportSelection: selectedIntercity,
    transportName: transportNames[selectedIntercity] || selectedIntercity,

    localTransportSelection: selectedLocal,
    localTransportName: localDetails ? localDetails[1] : selectedLocal,

    estimatedTotal:
        getHotelCost() +
        getIntercityCost() +
        getLocalCost(),

    status: "Confirmed",
    confirmedAt: new Date().toISOString()

};
        bookings.push(booking);

      
const saved = ROAVENAStorage.setJSON(
    "roavena-bookings",
    bookings
);

if (saved) {

    confirmTripButton.textContent = "Trip Confirmed ✓";
    confirmTripButton.disabled = true;

    if (bookingNote) {
        bookingNote.textContent =
            "Your trip plan has been saved successfully! Redirecting to My Bookings...";
    }

    setTimeout(function () {
        window.location.href = "bookings.html";
    }, 2000);

} else {

    if (bookingNote) {
        bookingNote.textContent =
            "Unable to confirm your trip. Please try again.";
    }


}
  
    }); // closes confirmTripButton click event

} // closes if (confirmTripButton)

        


    // =====================================
    // FORM SUBMISSION
    // =====================================

    tripForm.addEventListener("submit", function () {

        setTimeout(function () {
            showTravelOptions();

            travelSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 150);

    });


    // =====================================
    // RESTORE AFTER REFRESH
    // =====================================

    showTravelOptions();

});
