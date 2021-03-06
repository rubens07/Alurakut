import React, { useState, useEffect } from 'react';
import MainGrid from '@/MainGrid';
import Box from '@/Box';
import RelationBox from '@/RelationBox';
import {
  AlurakutMenu, AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from 'src/lib/AlurakutUtils';
import ProfileRelationsBoxWrapper from '@/ProfileRelations';


function ProfileSidebar({ user }) {
  return (
    <Box>
      <img src={`/${user}`} style={{ borderRadius: "8px" }}/>
      <hr/>

      <p>
        <a className="boxLink" href="#">
          @{user}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

const urlCommunity = '/api/communitys'

export default function Home() {
  const user = "profileavatar.png";
  const amigos = [
    {title: 'imagem 1', image: '/imagem1.jpeg'},
    {title: 'imagem 2', image: '/imagem2.jpg'},
    {title: 'imagem 3', image: '/imagem3.jpg'},
    {title: 'imagem 4', image: '/imagem4.jpg'},
    {title: 'imagem 5', image: '/imagem5.jpg'},
    {title: 'imagem 6', image: '/imagem6.jpg'},
  ]

  const [comunidades, setComunidades] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const comunidade = {
      title: data.get('title'),
      image: data.get('image')
    }
    fetch(urlCommunity, {
      method: "POST",
      body: JSON.stringify(comunidade),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(async (response) => {
      if (response.status === 200) {
        setComunidades([...comunidades, comunidade]);
      } else {
        const error = await response.json();
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetch(urlCommunity, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => {
      // Possível utilizar "await response.json()" nesse ponto
      // para jogar o resultado em uma nova variável. Nesse caso,
      // não é necesário o "then" acima
      const registros = response.data.map((item, index) => {
        if (index >= 6) return;
        return item;
      });
      setComunidades(registros);
      if (response.error) {
        console.log(response.error);
      }
    });
  }, []);

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar user={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="title"
                  type="text"
                  aria-label="Qual será o nome da sua comunidade?"
                  placeholder="Qual será o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  name="image"
                  type="text"
                  aria-label="Coloque uma URL para usar de capa"
                  placeholder="Coloque uma URL para usar de capa"
                />
              </div>

              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="relationsArea" style={{ gridArea: "relationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <RelationBox title="Amigos" list={amigos} />
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <RelationBox title="Comunidades" list={comunidades} />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
