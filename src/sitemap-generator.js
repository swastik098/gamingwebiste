import { default as router } from "./sitemap-routes";
import Sitemap from "react-router-sitemap";

function generateSitemap() {
  return new Sitemap(router)
    .build("https://vaultgamesstudio.com/")
    .save("./public/sitemap.xml");
}

generateSitemap();
