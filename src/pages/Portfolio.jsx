import { useState, useEffect } from "react";
import BackButton from "./shared/BackButton";
import "../styles/Portfolio.css";

const clients = [
  {
    name: "@nickcheo",
    media: [
      { type: "image", src: "/assets/images/nickcheo1.JPG" },
      { type: "video", src: "https://vimeo.com/1167180224" },
      { type: "video", src: "https://vimeo.com/1167180231" },
      { type: "image", src: "/assets/images/nickcheo2.JPEG" },
      { type: "image", src: "/assets/images/nickcheo3.png" },
      { type: "video", src: "https://vimeo.com/1167180094" },
    ],
  },
  {
    name: "Sound Design",
    children: [
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
        name: "Abbots",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167209451",
            orientation: "portrait",
          },
        ],
      },
      // {
      //   name: "Armani Beauty",
      //   media: [
      //     {
      //       type: "video",
      //       src: "https://vimeo.com/146022717",
      //       orientation: "landscape",
      //     },
      //   ],
      // },
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
      {
        name: "Cello DC",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167210643",
            orientation: "landscape",
          },
        ],
      },
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
        name: "Eric Emanuel",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167213786",
            orientation: "portrait",
          },
        ],
      },
      // {
      //   name: "MIU MIU",
      //   media: [
      //     {
      //       type: "video",
      //       src: "https://vimeo.com/146022717",
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
        name: "Tabla DC",
        media: [
          {
            type: "video",
            src: "https://vimeo.com/1167214302",
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
    name: "Unstable Company",
    media: [
      { type: "video", src: "https://vimeo.com/1167184204" },
      { type: "image", src: "/assets/images/unstableco.JPG" },
      { type: "video", src: "https://vimeo.com/1167184069" },
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
          {clients.map((client) => (
            <div
              key={client.name}
              className={`client-item ${
                selectedClient.name === client.name ? "active" : ""
              }`}
              onClick={() => handleSelectClient(client)}
            >
              {client.name}
            </div>
          ))}

          {/* Subfolders dropdown for selected client (desktop only) */}
          {selectedClient.children && (
            <div className="subfolders-left">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
