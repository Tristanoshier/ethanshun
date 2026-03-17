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
          },
        ],
      },
      //   {
      //   name: "Armani Beauty",
      //   media: [
      //     {
      //       type: "video",
      //       src: "https://vimeo.com/",
      //       orientation: "landscape",
      //     },
      //   ],
      // },
      {
        name: "Celsius",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167211087",
            orientation: "portrait",
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
          },
        ],
      },
      {
        name: "Kiehl's",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167190616",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167190494",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167190427",
            orientation: "portrait",
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
          },
          {
            type: "video",
            src: "https://vimeo.com/1167214302",
            orientation: "landscape",
          },
        ],
      },
      {
        name: "Marc Jacobs",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167191865",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167191953",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167192419",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167192919",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167193322",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167193474",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167194398",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167194515",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167197897",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167198005",
            orientation: "portrait",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167198944",
            orientation: "portrait",
          },
        ],
      },
      //  {
      //   name: "MIU MIU",
      //   media: [
      //     {
      //       type: "video",
      //       src: "https://vimeo.com/",
      //       orientation: "landscape",
      //     },
      //   ],
      // },
      {
        name: "Moussse",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167213996",
            orientation: "portrait",
          },
        ],
      },
        {
        name: "ON",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1174201888",
            orientation: "portrait",
          },
           {
            type: "video",
            src: "https://vimeo.com/1174201997",
            orientation: "portrait",
          },
           {
            type: "video",
            src: "https://vimeo.com/1174201631",
            orientation: "portrait",
          },
           {
            type: "video",
            src: "https://vimeo.com/1174203294",
            orientation: "portrait",
          },
           {
            type: "video",
            src: "https://vimeo.com/1174209448",
            orientation: "portrait",
          },
           {
            type: "video",
            src: "https://vimeo.com/1174209678",
            orientation: "portrait",
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
          },
          {
            type: "video",
            src: "https://vimeo.com/1167200684",
            orientation: "landscape",
          },
          {
            type: "video",
            src: "https://vimeo.com/1167200839",
            orientation: "landscape",
          },
        ],
      },
      {
        name: "Tatcha",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167214526",
            orientation: "portrait",
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
          },
        ],
      },
       {
        name: "Thome Browne",
        media: [
          {
            "type": "video",
            "src": "https://vimeo.com/1174211924",
            "orientation": "portrait"
          }
        ]
      },
      {
        name: "Wolford",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167214817",
            orientation: "landscape",
          },
        ],
      },
    ],
  },
  {
    name: "@nickcheo (Manager)",
    media: [
      {
        type: "image",
        src: "/assets/images/nickcheo1.JPG",
        description: "Ani, Nick, Isaac, and Myself DJing in nyc - august 24",
      },
      {
        type: "video",
        src: "https://vimeo.com/1167180224",
        orientation: "portrait",
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
        orientation: "portrait",
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
      { label: "Website", url: "https://unstablecompany.example" },
      { label: "Instagram", url: "https://instagram.com/unstablecompany" },
      { label: "LinkedIn", url: "https://instagram.com/unstablecompany" },
      { label: "Contact", url: "mailto:hello@unstablecompany.example" },
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

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
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
      <header className="retro-header">
        <h1>My Portfolio</h1>
      </header>

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

                {client.children && isSelected && (
                  <div className="client-children">
                    {client.children.map((child) => (
                      <div
                        key={child.name}
                        className={`client-item child ${
                          selectedChild?.name === child.name ? "active" : ""
                        }`}
                        onClick={() => handleSelectChild(child)}
                      >
                        {child.name}
                      </div>
                    ))}
                  </div>
                )}
              </Fragment>
            );
          })}

          <br />
          <BackButton />
        </div>

        {/* CLIENT DETAILS */}
        <div className="client-details">
          <h2>{selectedClient.name}</h2>

          {/* Subfolders / nested projects */}
          {selectedClient.children && (
            <div className="subfolders">
              {selectedClient.children.map((child) => (
                <div
                  key={child.name}
                  className={`client-item ${
                    selectedChild?.name === child.name ? "active" : ""
                  }`}
                  onClick={() => handleSelectChild(child)}
                >
                  {child.name}
                </div>
              ))}
            </div>
          )}

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

          {/* Media Scroll */}
          <div className="media-scroll">
            {mediaToDisplay.map((item, index) => (
              <div key={index} className="media-item">
                {item.type === "image" ? (
                  <img src={item.src} alt={`media-${index}`} />
                ) : (
                  <div
                    className={`video-wrapper ${
                      item.orientation === "portrait" ? "portrait" : "landscape"
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
      </div>
    </div>
  );
}
