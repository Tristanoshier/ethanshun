import { Fragment, useState, useEffect } from "react";
import BackButton from "./shared/BackButton";
import "../styles/Portfolio.css";

const clients = [
  {
    name: "Sound Design",
    children: [
      {
        name: "AUNU",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167210251",
            orientation: "landscape",
            description: "AUNU beauty",
          },
        ],
      },
      {
        name: "Armani Beauty",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174798727",
            orientation: "landscape",
            description: "Armani Beauty Fragrance Collection",
          },
        ],
      },
      {
        name: "Celsius",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167211087",
            orientation: "landscape",
            description: "Celsius Energy House",
          },
        ],
      },
      {
        name: "Ebbets",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167209451",
            orientation: "portrait",
            description: "The Collegiate Collection",
          },
        ],
      },
      {
        name: "Eric Emanuel",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167213786",
            orientation: "portrait",
            description: "Eric Emanuel Kids '25",
          },
        ],
      },
      {
        name: "Hoka",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174212250",
            orientation: "landscape",
            description: "Hoka NYFW '26",
          },
        ],
      },
      {
        name: "Kiehl's",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167190616",
            orientation: "landscape",
            description: "Friends and Family '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167190494",
            orientation: "landscape",
            description: "Friends and Family '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167190427",
            orientation: "landscape",
            description: "Friends and Family '25",
          },
        ],
      },
      {
        name: "Lancome",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174801166",
            orientation: "landscape",
            description: "Lancôme Génifique Absolue",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174801024",
            orientation: "landscape",
            description: "Lancôme Génifique Absolue",
          },
          {
            type: "video",
            src: "https://vimeo.com/1177012465",
            orientation: "landscape",
            description: "Lancôme Génifique Valentine's Day",
          },
          {
            type: "video",
            src: "https://vimeo.com/1177012813",
            orientation: "landscape",
            description: "Lancôme Génifique Valentine's Day",
          },
        ],
      },
      {
        name: "Lexus",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167210643",
            orientation: "landscape",
            description: "Lexus RZ Commercial 2026",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167214302",
            orientation: "landscape",
            description: "Lexus RZ Commercial 2026",
          },
        ],
      },
      {
        name: "Marc Jacobs",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167198944",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167194515",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167197897",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167198005",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167191953",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167192919",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167193322",
            orientation: "portrait",
            description: "Marc Jacobs Runway '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167192419",
            orientation: "portrait",
            description: "Marc Jacobs X Happier Grocer '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167194398",
            orientation: "portrait",
            description: "Marc Jacobs X Happier Grocer '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167193474",
            orientation: "portrait",
            description: "Marc Jacobs X APC Paris '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167191865",
            orientation: "portrait",
            description: "Marc Jacobs X APC Paris '25",
          },
        ],
      },
      {
        name: "MIU MIU",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174798849",
            orientation: "landscape",
            description: "Tales and Tellers '25",
          },
        ],
      },
      {
        name: "Moussse",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167213996",
            orientation: "portrait",
            description: "Miracle Drops '26",
          },
        ],
      },
      {
        name: "ON",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174209448",
            orientation: "portrait",
            description: "ON Tennis Truck Day '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174201888",
            orientation: "portrait",
            description: "ON Tennis X Ben Shelton",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174201997",
            orientation: "landscape",
            description: "ON Tennis X Ben Shelton",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174201631",
            orientation: "portrait",
            description: "ON Tennis X Ben Shelton",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174203294",
            orientation: "landscape",
            description: "ON Tennis X Ben Shelton",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174209678",
            orientation: "landscape",
            description: "ON Tennis X Ben Shelton",
          },
        ],
      },
      {
        name: "Purple Mag",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167200498",
            orientation: "landscape",
            description: "Paloma Elsesser for Purple Mag",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167200684",
            orientation: "landscape",
            description: "Paloma Elsesser for Purple Mag",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167200839",
            orientation: "landscape",
            description: "Paloma Elsesser for Purple Mag",
          },
        ],
      },
      {
        name: "Tatcha",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167214526",
            orientation: "landscape",
            description: "Tatcha Holiday Advent Calendar '25",
          },
        ],
      },
      {
        name: "The Face",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167202384",
            orientation: "portrait",
            description: "A$AP Rocky AWGE Paris Fashion Show '25",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167203410",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167203820",
            orientation: "portrait",
            description: "Willy Chavarria AW'26 Men's show in Paris",
          },
          {
            type: "video",
            src: "https://vimeo.com/1174800289",
            orientation: "landscape",
            description: "True Whitaker Interview",
          },
        ],
      },
      {
        name: "Thom Browne",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174211924",
            orientation: "portrait",
            description: "Thom Browne S/S '26",
          },
        ],
      },
      {
        name: "Wolford",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167214817",
            orientation: "landscape",
            description: "75 Year Anniversary",
          },
        ],
      },
    ],
  },
  {
    name: "@nickcheo (manager)",
    customText:
      "I aid in creative output and help shape music, brand campaigns, live shows, and visual projects.",
    email: "nick@nickcheo.me",
    media: [
      {
        type: "image",
        src: "/assets/images/nickcheo1.JPG",
        description: "Ani, Nick, Isaac, and Myself DJing in nyc - august 24",
      },
      {
        type: "video",
        src: "https://vimeo.com/1167180224",
        orientation: "landscape",
        description:
          "Nick on tour with Pinkpantheress for 13 US show dates - Fall 25",
      },

      {
        type: "image",
        src: "/assets/images/nickcheo3.png",
        description: "Brands, companies and organizations we have worked with",
      },
      {
        type: "video",
        src: "https://vimeo.com/1167180094",
        orientation: "landscape",
        description:
          "Executive Production for Serato x Apple Music Campaign Feb 25",
      },
      {
        type: "video",
        src: "https://vimeo.com/1167180231",
        orientation: "landscape",
        description: "Stage design/creative with Luca Pantel",
      },
      {
        type: "image",
        src: "/assets/images/nickcheo2.JPEG",
        description: "Stage design/creative with Luca Pantel",
      },
    ],
  },

  {
    name: "Unstable Company",
    bio: `The Unstable Company is a New York City based multimedia and full-service production agency founded in 2024 by Ethan Shun and Erica Ko, focused on artist management and viral.

Unstable has worked with brands and companies including Marc Jacobs, Apple Music, Bang & Olufsen, Fanatics, Serato, Sony Music, Warner Music, Capitol Records, 10K Projects, FX, Hulu, 424, Posh.vip, etc.

The Unstable Company produces immersive exhibitions, campaigns, social media marketing, clothing, and physical goods, partnering with artists and brands to develop original ideas from concept through.`,
    links: [
      { label: "Website", url: "https://theunstable.co/" },
      {
        label: "Instagram",
        url: "https://www.instagram.com/theunstablecompany/",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/the-unstable-company",
      },
      { label: "Contact", url: "mailto:team@theunstable.co" },
    ],
  },
];

function getVimeoEmbedUrl(url) {
  const videoId = url.split("/").pop();
  return `https://player.vimeo.com/video/${videoId}`;
}

export default function Portfolio() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [selectedChild, setSelectedChild] = useState(
    clients[0].children ? clients[0].children[0] : null,
  );
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showBlurb, setShowBlurb] = useState(true);
  const [blurbFading, setBlurbFading] = useState(false);

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide blurb after 10 seconds with fade animation
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setBlurbFading(true);
    }, 8000); // Start fading 2 seconds before full hide

    const hideTimer = setTimeout(() => {
      setShowBlurb(false);
    }, 10000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSelectClient = (client) => {
    setLoading(true);
    setSelectedClient(client);

    if (client.children && client.children.length > 0) {
      setSelectedChild(client.children[0]);
    } else {
      setSelectedChild(null);
    }

    // brief loading screen on client switch
    setTimeout(() => setLoading(false), 500);
  };

  const handleSelectChild = (child) => {
    setLoading(true);
    setSelectedChild(child);
    setTimeout(() => setLoading(false), 300);
  };

  const mediaToDisplay = selectedChild?.media || selectedClient.media || [];

  if (loading) {
    return (
      <div className="portfolio-loading">
        <div className="loading-box">
          <p className="loading-text">LOADING PORTFOLIO...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      {showBlurb && (
        <div className={`portfolio-blurb ${blurbFading ? "fade-out" : ""}`}>
          <p>
            Welcome to my portfolio. I'm a multidisciplinary creative who
            operates across management, music production, sound design, and
            creative direction.
          </p>
        </div>
      )}

      <div className="portfolio-container">
        {/* CLIENT LIST */}
        <div className="client-list">
          {clients.map((client) => {
            const isSelected = selectedClient.name === client.name;

            return (
              <Fragment key={client.name}>
                <div
                  className={`client-item ${isSelected ? "active" : ""}`}
                  onClick={() => handleSelectClient(client)}
                >
                  {client.name}
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* CLIENT DETAILS */}
        <div className="client-details">
          <div className="client-header">
            <h2>{selectedClient.name}</h2>
            {selectedClient.children && isMobile && (
              <select
                className="client-dropdown"
                value={selectedChild?.name || ""}
                onChange={(e) => {
                  const child = selectedClient.children.find(
                    (c) => c.name === e.target.value,
                  );
                  if (child) handleSelectChild(child);
                }}
              >
                {selectedClient.children.map((child) => (
                  <option key={child.name} value={child.name}>
                    {child.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Client bio + links (optional) */}
          {selectedClient.bio && (
            <div className="client-bio">
              <p>{selectedClient.bio}</p>

              {selectedClient.links && (
                <ul className="client-links">
                  {selectedClient.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* For desktop with children, show children list and media side by side */}
          {selectedClient.children && !isMobile ? (
            <div className="client-content">
              <div className="children-list">
                {selectedClient.children.map((child) => (
                  <div
                    key={child.name}
                    className={`child-item ${selectedChild?.name === child.name ? "active" : ""}`}
                    onClick={() => handleSelectChild(child)}
                  >
                    {child.name}
                  </div>
                ))}
              </div>
              <div className="media-scroll">
                {mediaToDisplay.map((item, index) => (
                  <div key={index} className="media-item">
                    {item.type === "image" ? (
                      <img src={item.src} alt={`media-${index}`} />
                    ) : (
                      <div
                        className={`video-wrapper ${
                          item.orientation === "portrait"
                            ? "portrait"
                            : "landscape"
                        }`}
                      >
                        <iframe
                          src={getVimeoEmbedUrl(item.src)}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={`video-${index}`}
                        />
                      </div>
                    )}
                    {item.description && (
                      <p className="media-description">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : selectedClient.customText && !isMobile ? (
            /* For desktop with custom text (like @nickcheo), show custom content and media side by side */
            <div className="client-content">
              <div className="custom-content">
                <p className="custom-text">{selectedClient.customText}</p>
                {selectedClient.email && (
                  <a
                    href={`mailto:${selectedClient.email}`}
                    className="custom-email"
                  >
                    {selectedClient.email}
                  </a>
                )}
              </div>
              <div className="media-scroll">
                {mediaToDisplay.map((item, index) => (
                  <div key={index} className="media-item">
                    {item.type === "image" ? (
                      <img src={item.src} alt={`media-${index}`} />
                    ) : (
                      <div
                        className={`video-wrapper ${
                          item.orientation === "portrait"
                            ? "portrait"
                            : "landscape"
                        }`}
                      >
                        <iframe
                          src={getVimeoEmbedUrl(item.src)}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={`video-${index}`}
                        />
                      </div>
                    )}
                    {item.description && (
                      <p className="media-description">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Mobile or no special content: show media scroll directly, with custom content above if present */
            <>
              {selectedClient.customText && isMobile && (
                <div className="custom-content-mobile">
                  <p className="custom-text">{selectedClient.customText}</p>
                  {selectedClient.email && (
                    <a
                      href={`mailto:${selectedClient.email}`}
                      className="custom-email"
                    >
                      {selectedClient.email}
                    </a>
                  )}
                </div>
              )}
              <div className="media-scroll">
                {mediaToDisplay.map((item, index) => (
                  <div key={index} className="media-item">
                    {item.type === "image" ? (
                      <img src={item.src} alt={`media-${index}`} />
                    ) : (
                      <div
                        className={`video-wrapper ${
                          item.orientation === "portrait"
                            ? "portrait"
                            : "landscape"
                        }`}
                      >
                        <iframe
                          src={getVimeoEmbedUrl(item.src)}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={`video-${index}`}
                        />
                      </div>
                    )}
                    {item.description && (
                      <p className="media-description">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <BackButton />
    </div>
  );
}
