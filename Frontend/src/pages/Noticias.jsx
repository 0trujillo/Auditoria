import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Noticias() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const ONE_HOUR = 60 * 60 * 1000;

  const fallbackNews = [
    {
      title: "Nueva ley de protección de datos en Chile",
      description: "Modernización de normativa de datos personales.",
      url: "#",
      source: { name: "Privara News" },
      publishedAt: new Date(),
    },
  ];

useEffect(() => {
  const cachedNews = localStorage.getItem("news_data");
  const cachedTime = localStorage.getItem("news_time");

  const now = new Date().getTime();

  if (cachedNews && cachedTime && now - cachedTime < ONE_HOUR) {
    setNews(JSON.parse(cachedNews));
    setLoading(false);
    return;
  }

  fetch(
    `https://gnews.io/api/v4/search?q=("ciberseguridad" OR "protección de datos" OR "ley digital" OR "privacidad" OR "cybersecurity law")&lang=es&max=10&token=${import.meta.env.VITE_GNEWS_API_KEY}`
  )
    .then((res) => {
      if (!res.ok) throw new Error("API limit");
      return res.json();
    })
    .then((data) => {
      let articles = data.articles || [];

      // 🔥 PALABRAS CLAVE REALES (FILTRO DURO)
      const keywords = [
        "ciberseguridad",
        "protección de datos",
        "privacidad",
        "ley",
        "regulación",
        "compliance",
        "datos personales",
        "cybersecurity",
        "data protection",
      ];

      const filtered = articles.filter((article) => {
        const text = (
          article.title + " " + article.description
        ).toLowerCase();

        return keywords.some((word) => text.includes(word));
      });

      // 🔥 SI FILTRA DEMASIADO → fallback parcial
      const finalNews =
        filtered.length >= 3
          ? filtered.slice(0, 3)
          : articles.slice(0, 3);

      localStorage.setItem("news_data", JSON.stringify(finalNews));
      localStorage.setItem("news_time", now.toString());

      setNews(finalNews);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error API:", err);
      setNews(fallbackNews);
      setLoading(false);
    });
}, []);

    return (
        <div className="not-grid">
      {news.map((item, index) => (
        <div
          key={index}
          className={`not-card-apple ${index === 0 ? "featured" : ""}`}
          onClick={() =>
            item.url !== "#" && window.open(item.url, "_blank")
          }
        >
          {index === 0 && item.image && (
            <div className="not-img-apple">
              <img src={item.image} alt={item.title} />
            </div>
          )}

          <div className="not-content">
            <span className="not-source">{item.source?.name}</span>

            <h2>{item.title}</h2>

            {index === 0 && <p>{item.description}</p>}

            <span className="not-read">Leer artículo →</span>
          </div>
        </div>
      ))}
    </div>
  );
}