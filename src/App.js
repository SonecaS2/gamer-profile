import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import Listitem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },

  {
    url:
      "https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-144x192.jpg",
    alt: "Imagem do jogo Counter Strike"
  },

  {
    url: "https://www.twitch.tv/directory/game/Sea%20of%20Thieves",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/490377-144x192.jpg",
    alt: "Imagem do jogo Sea Of Thieves"
  },

  {
    url: "https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Warzone",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-144x192.jpg",
    alt: "Imagem do jogo COD: Warzone"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/casimito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png",
    alt: "Imagem de Casimito"
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },

  {
    url: "https://www.twitch.tv/gaules",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png",
    alt: "Imagemd de Gaules"
  },

  {
    url: "https://www.twitch.tv/bldcs",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e6c408f1-879c-412e-b9fd-e228d1849b61-profile_image-70x70.png",
    alt: "Imagemd de BLD"
  }
];

const socialListData = [
  {
    url: "https://www.instagram.com/sone.code/",
    imageUrl: "/assets/instagram.svg",
    alt: "Ícone do Instagram"
  },

  {
    url: "https://twitter.com/HuanSalomao",
    imageUrl: "/assets/twitter.svg",
    alt: "Ícone do Twitter"
  }
];

export default function App() {
  return (
    <div className="App">
      {/* incluir o Header aqui */}
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <Listitem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <Listitem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas Redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <Listitem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
