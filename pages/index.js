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
    setComunidades([...comunidades, comunidade]);
  };

  useEffect(() => {
    // comando aqui
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
