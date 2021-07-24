import MainGrid from '@/MainGrid';
import Box from '@/Box';
import {
  AlurakutMenu, OrkutNostalgicIconSet
} from 'src/lib/AlurakutUtils';
import ProfileRelationsBoxWrapper from '@/ProfileRelations';


function ProfileSidebar({ user }) {
  return (
    <Box>
      <img src={`/${user}`} style={{ borderRadius: "8px" }}/>
    </Box>
  )
}

export default function Home() {
  const user = "profileavatar.png";
  const amigos = [
    'imagem1.jpeg', 'imagem2.jpg',
    'imagem3.jpg', 'imagem4.jpg',
    'imagem5.jpg', 'imagem6.jpg',
  ];

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
        </div>
        <div className="relationsArea" style={{ gridArea: "relationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({amigos.length})
            </h2>
            <ul>
              {amigos.map((item, index) => {
                return (
                  <li>
                    <a href="#" key={index}>
                      <img src={`/${item}`}/>
                      <span>{item}</span>
                    </a>
                  </li>
                )})
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
