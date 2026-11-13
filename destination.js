
// ==========================================
// ROAVENA - DESTINATION PAGE JAVASCRIPT
// ==========================================

// 1. DESTINATION DATA

const destinations = {

    Manali: {
        region: "HIMACHAL PRADESH, INDIA",
        tagline: "Where mountains meet unforgettable memories.",
        heading: "A little escape. A lot of memories.",
        description: "Explore Manali's beautiful mountain scenery, peaceful valleys, adventure activities and charming local experiences.",
        bestTime: "March – June",
        duration: "4–5 Days",
        budget: "₹8,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzJosM809HqIhOMZpBiSkIYBD8yQUdnL_uWtMzu80Jw&s=10",
        attractions: [
            {
                name: "Solang Valley",
                type: "ADVENTURE",
                description: "Enjoy mountain views and outdoor adventures.",
                image: "https://i0.wp.com/poserontour.com/wp-content/uploads/2019/04/img_20190419_200104_7938574785386978637642.jpg?resize=960%2C540&ssl=1"
            },
            {
                name: "Hadimba Temple",
                type: "CULTURE",
                description: "Discover a peaceful temple surrounded by cedar forests.",
                image: "https://himachalmedia.in/wp-content/uploads/2019/12/hidimba.png"
            },
            {
                name: "Old Manali",
                type: "LOCAL EXPERIENCE",
                description: "Explore charming streets, cafés and local culture.",
                image: "https://static2.tripoto.com/media/filter/tst/img/310819/TripDocument/1529081870_img_20180525_142302237_hdr.jpg.webp"
            }
        ]
    },

    Goa: {
        region: "GOA, INDIA",
        tagline: "Sunshine, beaches and endless coastal memories.",
        heading: "Let the waves tell your story.",
        description: "Discover beautiful beaches, colourful streets, coastal food and relaxing seaside experiences in Goa.",
        bestTime: "November – February",
        duration: "3–5 Days",
        budget: "₹7,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7np0-iaEGxINkl_HkmB05B0RZhFG9S-jTGJDqz6mOg&s=10",
        attractions: [
            {
                name: "Baga Beach",
                type: "BEACH",
                description: "Enjoy the lively atmosphere of one of Goa's popular beaches.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZ1uKkCM854bFIKAE66Vat5csTXYET3NUqVM313GEvw&s=10"
            },
            {
                name: "Fort Aguada",
                type: "HERITAGE",
                description: "Explore a historic fort overlooking the Arabian Sea.",
                image: "https://s7ap1.scene7.com/is/image/incredibleindia/fort-aguada-goa-11-musthead-hero?qlt=82&ts=1742184865719"
            },
            {
                name: "Palolem Beach",
                type: "NATURE",
                description: "Relax by a scenic beach surrounded by greenery.",
                image: "https://togethertounknown.com/wp-content/uploads/2023/01/DJI_0207-min-768x432.jpg.webp"
            }
        ]
    },

    Jaipur: {
        region: "RAJASTHAN, INDIA",
        tagline: "A city painted with royal stories and timeless charm.",
        heading: "Walk through royal history.",
        description: "Experience Jaipur's grand forts, historic palaces, traditional markets and rich Rajasthani culture.",
        bestTime: "October – March",
        duration: "2–4 Days",
        budget: "₹5,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPkp_tmzXKvhuSLczEY_k5iVwy_RJhfL2YqxKBKSiWg&s=10",
        attractions: [
            {
                name: "Hawa Mahal",
                type: "HERITAGE",
                description: "Admire Jaipur's famous palace of windows.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8uohFhLn1uIs-l3YqsmDeSphtyvK_Er8redvHKObIw&s=10"
            },
            {
                name: "Amber Fort",
                type: "HISTORY",
                description: "Explore an impressive hilltop fort and its architecture.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopMXS15n1s3CT17xpDD02TTc2pmPrOKTkRB3FMn1JJQ&s=10"
            },
            {
                name: "City Palace",
                type: "CULTURE",
                description: "Discover royal courtyards, museums and architecture.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWncaNz5shenvlOXES6FNPQ5j1sbUNaqi5PWLKRzoHAQ&s=10"
            }
        ]
    },

    Gangtok: {
        region: "SIKKIM, INDIA",
        tagline: "A peaceful escape among the Himalayan clouds.",
        heading: "Find your peace in the mountains.",
        description: "Discover mountain views, monasteries, beautiful lakes and the welcoming culture of Gangtok.",
        bestTime: "March – June",
        duration: "4–5 Days",
        budget: "₹9,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE26AjLuw2BSjOgWlrzsma9kiT8--ujhc63kO4NXLJg&s=10",
        attractions: [
            {
                name: "Tsomgo Lake",
                type: "NATURE",
                description: "Visit a beautiful high-altitude glacial lake.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XO9Lv4y_TXC5c1wNgOG_cMGBms-vqMHydA0bxuItNw&s=10"
            },
            {
                name: "Rumtek Monastery",
                type: "CULTURE",
                description: "Experience the peaceful atmosphere of a Buddhist monastery.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJyI2cPnmnjsO0yQBneH3kAYULXmjph2KfB6JReaZAg&s=10"
            },
            {
                name: "MG Marg",
                type: "LOCAL EXPERIENCE",
                description: "Explore the lively pedestrian street and local cafés.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVi2fLp-7qigK610hLt-RUyZnvgquA9sLo0g93_OtPiA&s=10"
            }
        ]
    },

    Rishikesh: {
        region: "UTTARAKHAND, INDIA",
        tagline: "A beautiful meeting of nature, adventure and calm.",
        heading: "Discover your peaceful side.",
        description: "Explore riverside views, yoga experiences, scenic surroundings and exciting outdoor activities.",
        bestTime: "September – April",
        duration: "2–4 Days",
        budget: "₹4,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXoavmltepvvF_RLchGZ9cirAvkwAoD6EhV4MVE6S3Q&s=10",
        attractions: [
            {
                name: "Lakshman Jhula Area",
                type: "SIGHTSEEING",
                description: "Explore the famous riverside surroundings.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKukD0Kd-P-U4E8WpoRZt9Ey4YL_m2JIdyS06YE6DcQ&s=10"
            },
            {
                name: "Triveni Ghat",
                type: "CULTURE",
                description: "Experience the spiritual atmosphere beside the Ganges.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewGA_PIzbuxKVDdaoTIv4fjHk2j5Vzq5ExhAF3i_FaA&s=10"
            },
            {
                name: "Neer Garh Waterfall",
                type: "NATURE",
                description: "Enjoy a refreshing natural escape.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dLJSglIBMde2oDaz5AoFByBewa9GSYI1j0Ct4wC77g&s=10"
            }
        ]
    },

    Kashmir: {
        region: "JAMMU & KASHMIR, INDIA",
        tagline: "A paradise of mountains, lakes and beautiful valleys.",
        heading: "Discover the beauty of Kashmir.",
        description: "Explore scenic valleys, peaceful lakes, gardens and memorable Himalayan landscapes.",
        bestTime: "March – October",
        duration: "5–7 Days",
        budget: "₹12,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFjgSLR0nM6KCo92Og1JCPGIB-6pe40tOjO9OYhl96Q&s=10",
        attractions: [
            {
                name: "Dal Lake",
                type: "SIGHTSEEING",
                description: "Experience the beauty of Kashmir's famous lake.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnsv-YkQ96x_FgheLLCuIHl9mjHyzXQ72dZ7TInqxhQ&s=10"
            },
            {
                name: "Gulmarg",
                type: "ADVENTURE",
                description: "Discover beautiful mountain scenery.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkrEkiEQ3WOD3n0_T8Qqx2z-fhtMTjIM-8g2zYp3iNg&s=10"
            },
            {
                name: "Pahalgam",
                type: "NATURE",
                description: "Explore peaceful valleys and riverside views.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhG397qwRHxA4bbM9dszpJ5bN0x7USpoIuw9orTB6XQ&s=10"
            }
        ]
    },

    Udaipur: {
        region: "RAJASTHAN, INDIA",
        tagline: "Lakeside beauty with a touch of royal elegance.",
        heading: "Experience the city of lakes.",
        description: "Discover beautiful lakes, grand palaces, traditional streets and Rajasthan's rich heritage.",
        bestTime: "October – March",
        duration: "2–4 Days",
        budget: "₹6,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4OM3GeWAZcUBe7VPKgyoJU6-DVZIT0ClrNZb9n6zWA&s=10",
        attractions: [
            {
                name: "Lake Pichola",
                type: "SIGHTSEEING",
                description: "Enjoy beautiful lake views and boat experiences.",
                image: "https://udaipurtaxiservices.com/blog/wp-content/uploads/2026/01/Lake-Pichola-Udaipur.png"
            },
            {
                name: "City Palace",
                type: "HERITAGE",
                description: "Explore royal architecture and history.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhVNCcHu52IW6OByEUibmGPincIg-yH9iiE145wxpcQ&s=10"
            },
            {
                name: "Fateh Sagar Lake",
                type: "NATURE",
                description: "Spend time beside a scenic lake.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-75RkR292vjL3LB8_fELpn8rIF4goGntkIgNQ9eLWw&s=10"
            }
        ]
    },

    Darjeeling: {
        region: "WEST BENGAL, INDIA",
        tagline: "Tea gardens, misty mornings and mountain views.",
        heading: "Wake up to the mountains.",
        description: "Discover tea estates, Himalayan views, charming streets and the heritage of Darjeeling.",
        bestTime: "March – May",
        duration: "3–4 Days",
        budget: "₹7,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpWXSKUOUYz--Lvp5Lc2QG6SFnDcoTWyvoeAn_gdUDg&s=10",
        attractions: [
            {
                name: "Tiger Hill",
                type: "SIGHTSEEING",
                description: "Enjoy spectacular Himalayan sunrise views.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR268lpB4LIDGWTAHKK-1EYUllK6gtBZ1HFLnHbk3ICmw&s=10"
            },
            {
                name: "Batasia Loop",
                type: "HERITAGE",
                description: "Discover the scenic railway loop and garden.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9O_JJElfnWETMdkgP_yDuztHJpcioh9IUhk0d8rj5qA&s=10"
            },
            {
                name: "Tea Gardens",
                type: "LOCAL EXPERIENCE",
                description: "Explore the region's beautiful tea estates.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyilV8Cz8AftP4aatY-W2TFcJ7tYaPZRRBo9fsM9h1BA&s=10"
            }
        ]
    },

    Munnar: {
        region: "KERALA, INDIA",
        tagline: "A refreshing escape into endless green hills.",
        heading: "Let nature slow you down.",
        description: "Explore rolling tea gardens, misty hills, waterfalls and peaceful nature escapes.",
        bestTime: "September – March",
        duration: "3–4 Days",
        budget: "₹7,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3YqjG6AoeXXQsY3Pzihv-7ASBNaB08Kppw_uK0FhBA&s=10",
        attractions: [
            {
                name: "Eravikulam National Park",
                type: "NATURE",
                description: "Discover beautiful mountain landscapes and wildlife.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz60T5NQ5oupINYHbwUOkKFxmHCp7hEaxcz-suhxOcLw&s=10"
            },
            {
                name: "Mattupetty Dam",
                type: "SIGHTSEEING",
                description: "Enjoy scenic surroundings and peaceful water views.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHeaKW3CF1cSOz45xMsLczrs0r2R0ONZFiRbqhSviNA&s=10"
            },
            {
                name: "Tea Museum",
                type: "CULTURE",
                description: "Learn about the tea-making heritage of Munnar.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzO6LAAKhILks-bthBP7NwIhkkZwgFIzZ3flOf7URh3A&s=10"
            }
        ]
    },

    Meghalaya: {
        region: "MEGHALAYA, INDIA",
        tagline: "A land of living roots, waterfalls and clouds.",
        heading: "Step into nature's wonderland.",
        description: "Explore waterfalls, green landscapes, living root bridges and beautiful hill towns.",
        bestTime: "October – April",
        duration: "5–6 Days",
        budget: "₹10,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Zo0mLAvFSSxDl5S5vIypZE0RUJM3KJowccN_kD1saQ&s=10",
        attractions: [
            {
                name: "Living Root Bridges",
                type: "NATURE",
                description: "Discover remarkable bridges shaped by living tree roots.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdHZv6lAXNCbz_E5mGvg8qYoqyAq9rL_1gVhJX-mYVg&s=10"
            },
            {
                name: "Dawki",
                type: "SIGHTSEEING",
                description: "Experience the scenic river and surrounding hills.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUoA7ZroI5eesr-U64_TMaYBoDbSO_7onYQzXSzAWEw&s=10"
            },
            {
                name: "Nohkalikai Falls",
                type: "NATURE",
                description: "Visit one of the region's famous waterfalls.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmwgxjSRkq3QRiZM-T8jATSGVZbqlWO9_oX48PzslNA&s=10"
            }
        ]
    },

    Varanasi: {
        region: "UTTAR PRADESH, INDIA",
        tagline: "Ancient stories along the timeless Ganges.",
        heading: "Experience a city like no other.",
        description: "Explore historic ghats, traditional streets, local food and the cultural heritage of Varanasi.",
        bestTime: "October – March",
        duration: "2–3 Days",
        budget: "₹4,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7_-_kcUjL1FlOPe8rglLKq5q63OKeWpACE2avXrI2g&s=10",
        attractions: [
            {
                name: "Dashashwamedh Ghat",
                type: "CULTURE",
                description: "Experience the famous riverside ghat.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmKPcI5weVncjEBOt-BkBudnQrUCXz0LDruqPGH8ibw&s=10"
            },
            {
                name: "Assi Ghat",
                type: "SIGHTSEEING",
                description: "Explore a popular riverside gathering place.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aumNaeB3-o6WcxWkEvz0aUpZcqQ2MkM9oyIQpcYuQA&s=10"
            },
            {
                name: "Sarnath",
                type: "HERITAGE",
                description: "Discover an important Buddhist heritage site.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9fHwjlInixKBJ9aeeERTulCB29CwMzYd0lvJFHvl-Q&s=10"
            }
        ]
    },

    Agra: {
        region: "UTTAR PRADESH, INDIA",
        tagline: "A timeless city filled with stories of love and history.",
        heading: "Discover timeless beauty.",
        description: "Explore Mughal architecture, historic monuments and the rich heritage of Agra.",
        bestTime: "October – March",
        duration: "1–2 Days",
        budget: "₹3,500 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32Nx4Gt2dLz02iIDsiEcjQHXXt_6-418CN1O7EqV-WA&s=10",
        attractions: [
            {
                name: "Taj Mahal",
                type: "HERITAGE",
                description: "Discover the world-famous marble monument.",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900"
            },
            {
                name: "Agra Fort",
                type: "HISTORY",
                description: "Explore a historic Mughal fort.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WPZ5jvJQ4LKDlKIc1XC36GlpKciPvRy9zJSRPCdAdg&s=10"
            },
            {
                name: "Mehtab Bagh",
                type: "SIGHTSEEING",
                description: "Enjoy scenic views of the Taj Mahal.",
                image: "https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities_agra_mehtab_bagh_l_400_640.jpg"
            }
        ]
    },

    Jaisalmer: {
        region: "RAJASTHAN, INDIA",
        tagline: "Golden dunes and unforgettable desert adventures.",
        heading: "Find adventure in the golden sands.",
        description: "Explore desert landscapes, historic forts and traditional Rajasthani culture.",
        bestTime: "October – March",
        duration: "2–3 Days",
        budget: "₹6,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazmRiESvGBp_6QBXiQ-__W1Gf-lZU6vhMGsgIoFkyrA&s=10",
        attractions: [
            {
                name: "Jaisalmer Fort",
                type: "HERITAGE",
                description: "Explore the famous golden sandstone fort.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Lwsql84gCmiqnZdiHe5tYzYKjdtbsvu6mZ-iz-Knrg&s=10"
            },
            {
                name: "Sam Sand Dunes",
                type: "ADVENTURE",
                description: "Discover the desert landscape and local experiences.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EfTV3Lf3T-6Pbi8hHSY-gp9-XpY9Ohd7rgrYf5b1gw&s=10"
            },
            {
                name: "Gadisar Lake",
                type: "SIGHTSEEING",
                description: "Enjoy a peaceful lake surrounded by historic architecture.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheQkNThrZMpM2LR7lFDbgl4vcxGhPohdX8l70t8kDuw&s=10"
            }
        ]
    },

    Andaman: {
        region: "ANDAMAN & NICOBAR, INDIA",
        tagline: "Turquoise waters and beautiful island escapes.",
        heading: "Escape into island life.",
        description: "Discover tropical beaches, clear waters and peaceful island experiences.",
        bestTime: "October – May",
        duration: "5–6 Days",
        budget: "₹15,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6-wLJXqABeOYDkcOVfMl8LeN7ILO_hIHI5HhhAOnNg&s=10",
        attractions: [
            {
                name: "Radhanagar Beach",
                type: "BEACH",
                description: "Relax beside a beautiful tropical beach.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GDZFTBBtxMku5BvC9qmelMJEn_dIOhpxA5neBZfdMw&s=10"
            },
            {
                name: "Cellular Jail",
                type: "HERITAGE",
                description: "Discover an important part of Indian history.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzAklOHwAnzGHCPO4v42h1AV9X0jsawzVfl3DQB55Ug&s=10"
            },
            {
                name: "Elephant Beach",
                type: "NATURE",
                description: "Explore scenic coastal surroundings.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEtfG54bPMWhaEWmrbX1_2UZB1VjzRx1gRynH2Bu0fQ&s=10"
            }
        ]
    },

    Ooty: {
        region: "TAMIL NADU, INDIA",
        tagline: "Cool mountain air and beautiful green surroundings.",
        heading: "Find a little peace in the hills.",
        description: "Explore scenic gardens, tea estates, lakes and charming hill-station experiences.",
        bestTime: "October – June",
        duration: "2–4 Days",
        budget: "₹5,000 onwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHEesYUSEBt3e9fveHLZN7IlKD3HiVDb1PAJDhnknDw&s=10",
        attractions: [
            {
                name: "Ooty Lake",
                type: "SIGHTSEEING",
                description: "Enjoy a relaxing visit beside the lake.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF-0Ko9LndTCX3lFSjGl7CSGb-qrocOqeNqc4dm9ojA&s=10"
            },
            {
                name: "Botanical Garden",
                type: "NATURE",
                description: "Explore beautiful gardens and green spaces.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBZ62KTeLMl62Zj-Fc3H-W-X03ievUsCmTIYS7UQEhA&s=10"
            },
            {
                name: "Doddabetta Peak",
                type: "ADVENTURE",
                description: "Discover scenic views from the hilltop.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV72jrH-CF6jLzT7c7d_C4LyZGVkgnJBYVRoouhKlulw&s=10"
            }
        ]
    }

};


// ==========================================
// ROAVENA - DESTINATION PAGE JAVASCRIPT
// INTERACTIVE DESTINATION MIND MAP
// ==========================================


// 2. GET DESTINATION FROM URL

const urlParams = new URLSearchParams(window.location.search);

const requestedPlace = urlParams.get("place") || "Manali";

const destination = destinations[requestedPlace] || destinations.Manali;


// 3. UPDATE DESTINATION DETAILS

document.title = requestedPlace + " | ROAVENA";

document.getElementById("destinationName").textContent = requestedPlace;
document.getElementById("destinationRegion").textContent = destination.region;
document.getElementById("destinationTagline").textContent = destination.tagline;
document.getElementById("destinationDescription").textContent = destination.description;

document.getElementById("bestTime").textContent = destination.bestTime;
document.getElementById("duration").textContent = destination.duration;
document.getElementById("budget").textContent = destination.budget;


// 4. UPDATE DESTINATION HERO AND CENTRE NODE

const hero = document.getElementById("destinationHero");

if (hero) {
    hero.style.backgroundImage = `
        linear-gradient(
            90deg,
            rgba(10, 25, 20, 0.78),
            rgba(10, 25, 20, 0.20)
        ),
        url("${destination.image}")
    `;
}

const centerImage = document.getElementById("mindmapCenterImage");

if (centerImage) {
    centerImage.src = destination.image;
    centerImage.alt = requestedPlace;
}

const centerName = document.getElementById("mindmapCenterName");

if (centerName) {
    centerName.textContent = requestedPlace;
}

const centerTagline = document.getElementById("mindmapCenterTagline");

if (centerTagline) {
    centerTagline.textContent = destination.tagline;
}

const mindmapDestinationName =
    document.getElementById("mindmapDestinationName");

if (mindmapDestinationName) {
    mindmapDestinationName.textContent = requestedPlace;
}


// 5. UPDATE INTRODUCTION HEADING

const headingElement = document.getElementById("destinationHeading");

if (headingElement) {
    const words = destination.heading.split(" ");
    const middle = Math.ceil(words.length / 2);

    const firstLine = words.slice(0, middle).join(" ");
    const secondLine = words.slice(middle).join(" ");

    headingElement.innerHTML =
        `${firstLine}<br><span>${secondLine}</span>`;
}


// 6. EXTRA DESTINATION INFORMATION

// These are general travel suggestions, not live bookings
// or confirmed hotel/transport availability.

const destinationExtras = {

    Manali: {
        food: ["Siddu", "Trout dishes", "Madra"],
        experiences: ["Mountain viewpoints", "Nature walks", "Local cafés"],
        stays: ["Old Manali", "Mall Road area", "Solang side"],
        transport: ["Road journey by bus or cab", "Local taxis", "Nearby sightseeing transfers"],
        hiddenGems: [
            "Sethan Village",
            "Gulaba Viewpoint",
            "Hampta Village"
        ]
    },

    Goa: {
        food: ["Goan fish curry", "Bebinca", "Local seafood"],
        experiences: ["Beach walks", "Waterfront sunsets", "Portuguese heritage walks"],
        stays: ["North Goa", "South Goa", "Panaji"],
        transport: ["Flights to Goa", "Train journeys", "Local taxis and buses"],
        hiddenGems: [
            "Divar Island",
            "Chorao Island",
            "Kakolem Beach"
        ]
    },

    Jaipur: {
        food: ["Dal baati churma", "Ghewar", "Pyaaz kachori"],
        experiences: ["Heritage walks", "Traditional markets", "Fort visits"],
        stays: ["Pink City", "MI Road", "Amer area"],
        transport: ["Flights to Jaipur", "Train journeys", "Local cabs and autos"],
        hiddenGems: [
            "Panna Meena ka Kund",
            "Gaitore Ki Chhatriyan",
            "Sambhar Lake"
        ]
    },

    Gangtok: {
        food: ["Momos", "Thukpa", "Phagshapa"],
        experiences: ["Monastery visits", "Mountain viewpoints", "Local markets"],
        stays: ["MG Marg", "Deorali", "Tadong"],
        transport: ["Flights to nearby Bagdogra", "Train to New Jalpaiguri", "Road transfers"],
        hiddenGems: [
            "Bakthang Waterfall",
            "Ranka Monastery",
            "Banjhakri Falls"
        ]
    },

    Rishikesh: {
        food: ["Aloo puri", "Ayurvedic Health Food", "Geeta Bhawan Ladoo"],
        experiences: ["Riverside walks", "Yoga experiences", "Nature trails"],
        stays: ["Tapovan", "Laxman Jhula area", "Swarg Ashram"],
        transport: ["Train to Haridwar", "Road journey", "Local taxis and autos"],
        hiddenGems: [
            "Neer Garh Waterfall",
            "Patna Waterfall",
            "Phool Chatti"
        ]
    },

    Kashmir: {
        food: ["Rogan Josh", "Kahwa", "Dum Aloo"],
        experiences: ["Valley sightseeing", "Garden visits", "Mountain excursions"],
        stays: ["Srinagar", "Gulmarg", "Pahalgam"],
        transport: ["Flights to Srinagar", "Road transfers", "Local taxis"],
        hiddenGems: [
            "Doodhpathri",
            "Yusmarg",
            "Aharbal Waterfall"
        ]
    },

    Udaipur: {
        food: ["Dal baati churma", "Gatte ki sabzi", "Mawa kachori"],
        experiences: ["Lake views", "Palace visits", "Heritage walks"],
        stays: ["Old City", "Lake Pichola area", "Fateh Sagar area"],
        transport: ["Flights to Udaipur", "Train journeys", "Local cabs and autos"],
        hiddenGems: [
            "Menar Village",
            "Bahubali Hills",
            "Badi Lake"
        ]
    },

    Darjeeling: {
        food: ["Momos", "Thukpa", "Traditional Darjeeling tea"],
        experiences: ["Tea garden visits", "Toy train experience", "Sunrise viewpoints"],
        stays: ["Chowrasta area", "Ghoom", "Mall Road area"],
        transport: ["Flights to Bagdogra", "Train to New Jalpaiguri", "Road transfers"],
        hiddenGems: [
            "Lamahatta",
            "Tinchuley",
            "Takdah"
        ]
    },

    Munnar: {
        food: ["Appam and stew", "Puttu", "Kerala-style meals"],
        experiences: ["Tea garden walks", "Waterfall visits", "Scenic drives"],
        stays: ["Munnar town", "Chithirapuram", "Pallivasal"],
        transport: ["Flights to Kochi", "Train to Aluva", "Road transfers"],
        hiddenGems: [
            "Vattavada",
            "Anayirankal Dam",
            "Lockhart Gap"
        ]
    },

    Meghalaya: {
        food: ["Jadoh", "Dohneiiong", "Local rice dishes"],
        experiences: ["Waterfall visits", "Nature walks", "Living root bridge exploration"],
        stays: ["Shillong", "Cherrapunji", "Dawki"],
        transport: ["Flights to Guwahati", "Train to Guwahati", "Road transfers"],
        hiddenGems: [
            "Mawlyngbna",
            "Kongthong Village",
            "Laitlum Canyon"
        ]
    },

    Varanasi: {
        food: ["Kachori sabzi", "Tamatar chaat", "Banarasi lassi"],
        experiences: ["Ghat walks", "Heritage exploration", "Local market visits"],
        stays: ["Godowlia", "Assi Ghat area", "Dashashwamedh Ghat area"],
        transport: ["Flights to Varanasi", "Train journeys", "Local autos and taxis"],
        hiddenGems: [
            "Ramnagar Fort",
            "Chunar Fort",
            "Sarnath"
        ]
    },

    Agra: {
        food: ["Petha", "Bedai and jalebi", "Mughlai dishes"],
        experiences: ["Monument visits", "Heritage walks", "Local market exploration"],
        stays: ["Taj Ganj", "Fatehabad Road", "Sikandra"],
        transport: ["Flights to Agra", "Train journeys", "Road transfers"],
        hiddenGems: [
            "Keetham Lake",
            "Bateshwar Temples",
            "Mariam's Tomb"
        ]
    },

    Jaisalmer: {
        food: ["Ker sangri", "Dal baati churma", "Ghotua"],
        experiences: ["Desert landscapes", "Cultural performances", "Fort exploration"],
        stays: ["Jaisalmer Fort area", "Sam Sand Dunes", "Gandhi Chowk"],
        transport: ["Flights to Jaisalmer", "Train journeys", "Local cabs"],
        hiddenGems: [
            "Kuldhara Village",
            "Khaba Fort",
            "Bada Bagh"
        ]
    },

    Andaman: {
        food: ["Seafood dishes", "Coconut-based dishes", "Island-style meals"],
        experiences: ["Beach exploration", "Snorkelling experiences", "Island sightseeing"],
        stays: ["Port Blair", "Havelock Island", "Neil Island"],
        transport: ["Flights to Port Blair", "Inter-island ferries", "Local island transfers"],
        hiddenGems: [
            "Baratang Island",
            "Long Island",
            "Chidiya Tapu"
        ]
    },

    Ooty: {
        food: ["Ooty chocolates", "South Indian meals", "Homemade bakery treats"],
        experiences: ["Tea estate visits", "Garden walks", "Scenic viewpoints"],
        stays: ["Ooty town", "Coonoor", "Lovedale"],
        transport: ["Flights to Coimbatore", "Train journeys", "Road transfers"],
        hiddenGems: [
            "Avalanche Lake",
            "Pykara Village",
            "Upper Bhavani"
        ]
    }

};


// 7. BRANCH CONTENT DATA

const extraInfo = destinationExtras[requestedPlace] || destinationExtras.Manali;


// 8. SAFE HTML TEXT

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}


// 9. MIND MAP BRANCH INFORMATION

const branchInformation = {

    explore: {
        eyebrow: "DISCOVER THE DESTINATION",
        title: "Places to Explore",
        description: `Discover some of the places that make ${requestedPlace} worth visiting.`,
        type: "attractions"
    },

    experiences: {
        eyebrow: "MAKE MEMORIES",
        title: "Experiences",
        description: `Explore different ways to experience ${requestedPlace}.`,
        type: "list",
        items: extraInfo.experiences
    },

    culture: {
        eyebrow: "TASTE THE CULTURE",
        title: "Food & Culture",
        description: `Discover local flavours and cultural experiences associated with ${requestedPlace}.`,
        type: "food",
        items: extraInfo.food
    },

        "hidden-gems": {
        eyebrow: "DISCOVER THE UNEXPECTED",
        title: "Hidden Gems",
        description: `Explore some lesser-known places around ${requestedPlace}.`,
        type: "hidden-gems",
        items: extraInfo.hiddenGems
    },


    stay: {
        eyebrow: "FIND YOUR COMFORT",
        title: "Where to Stay",
        description: `Explore areas that you can consider while choosing accommodation in ${requestedPlace}.`,
        type: "stay",
        items: extraInfo.stays
    },

    transport: {
        eyebrow: "REACH YOUR DESTINATION",
        title: "Getting There",
        description: `Explore common ways of reaching and travelling around ${requestedPlace}.`,
        type: "transport",
        items: extraInfo.transport
    }

};


// 10. BRANCH PANEL ELEMENTS

const branchDetails = document.getElementById("branchDetails");
const branchEyebrow = document.getElementById("branchEyebrow");
const branchTitle = document.getElementById("branchTitle");
const branchDescription = document.getElementById("branchDescription");
const branchContent = document.getElementById("branchContent");

const branchButtons = document.querySelectorAll(".mindmap-node");


// 11. DISPLAY BRANCH CONTENT

function displayBranch(branchName) {

    const info = branchInformation[branchName];

    if (!info || !branchDetails || !branchContent) {
        return;
    }

    branchEyebrow.textContent = info.eyebrow;
    branchTitle.textContent = info.title;
    branchDescription.textContent = info.description;

    let contentHTML = "";


    // EXPLORE PLACES

    if (info.type === "attractions") {

        contentHTML = destination.attractions.map(place => {

            return `
                <article class="branch-card">

                    <img
                        src="${escapeHTML(place.image)}"
                        alt="${escapeHTML(place.name)}"
                        loading="lazy"
                    >

                    <div class="branch-card-info">

                        <span>${escapeHTML(place.type)}</span>

                        <h4>${escapeHTML(place.name)}</h4>

                        <p>${escapeHTML(place.description)}</p>

                    </div>

                </article>
            `;

        }).join("");

    }


    // EXPERIENCES, STAY AND TRANSPORT

    else if (
        info.type === "list" ||
        info.type === "stay" ||
        info.type === "transport"
    ) {

        contentHTML = `
            <div class="branch-list">

                ${info.items.map((item, index) => `
                    <article class="branch-list-item">

                        <h4>${String(index + 1).padStart(2, "0")} — ${escapeHTML(item)}</h4>

                        <p>
                            Add this to your travel research while planning
                            your ${requestedPlace} journey.
                        </p>

                    </article>
                `).join("")}

            </div>
        `;

    }


    // FOOD AND CULTURE

    else if (info.type === "food") {

        contentHTML = `
            <div class="branch-list">

                ${info.items.map((item, index) => `
                    <article class="branch-list-item">

                        <h4>${String(index + 1).padStart(2, "0")} — ${escapeHTML(item)}</h4>

                        <p>
                            A local flavour or food experience to explore
                            during your visit.
                        </p>

                    </article>
                `).join("")}

            </div>
        `;

    }


    // HIDDEN GEMS

    else if (info.type === "hidden-gems") {

        contentHTML = `
            <div class="branch-list">

                ${info.items.map((item, index) => `
                    <article class="branch-list-item">

                        <h4>
                            ${String(index + 1).padStart(2, "0")} — ${escapeHTML(item)}
                        </h4>

                        <p>
                            Discover this lesser-known place and add
                            it to your ${requestedPlace} travel wishlist.
                        </p>

                    </article>
                `).join("")}

            </div>
        `;

    }


    branchContent.innerHTML = contentHTML;

    branchDetails.hidden = false;

    branchButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.branch === branchName
        );
    });

    branchDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// 12. BRANCH BUTTON EVENTS

branchButtons.forEach(button => {

    button.addEventListener("click", function () {

        const branchName = this.dataset.branch;

        // Clicking the already active branch closes it.

        if (
            this.classList.contains("active") &&
            branchDetails &&
            !branchDetails.hidden
        ) {
            branchDetails.hidden = true;
            this.classList.remove("active");
            return;
        }

        displayBranch(branchName);

    });

});


// 13. CLOSE BRANCH PANEL

const closeBranchBtn = document.getElementById("closeBranchBtn");

if (closeBranchBtn) {

    closeBranchBtn.addEventListener("click", function () {

        branchDetails.hidden = true;

        branchButtons.forEach(button => {
            button.classList.remove("active");
        });

    });

}


// 14. TRAVEL MOOD SELECTION

let selectedMood = "";

const moodCards = document.querySelectorAll(".mood-card");

const moodMessage = document.getElementById("moodMessage");

moodCards.forEach(card => {

    card.addEventListener("click", function () {

        moodCards.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        selectedMood = this.dataset.mood;

        moodMessage.textContent =
            `Your ${selectedMood.toLowerCase()} journey in ${requestedPlace} is taking shape!`;

    });

});


// 15. PLAN TRIP BUTTON

const planTripBtn = document.getElementById("planTripBtn");

if (planTripBtn) {

    planTripBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const tripDetails = {
            destination: requestedPlace,
            mood: selectedMood
        };

        localStorage.setItem(
            "roavena-selected-trip",
            JSON.stringify(tripDetails)
        );

        localStorage.setItem(
    "roavena-selected-destination",
    requestedPlace
);

        window.location.href = "dashboard.html";

    });

}


// 16. FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

