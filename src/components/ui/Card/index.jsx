import {
  Container,
  ContainetText,
  ContentCountUser,
  TextMonth,
  Title,
  UserCont,
} from "./styles";

export function Card(props) {
  const { img, alt, numberOfUser, title, text, count } = props;
  return (
    <Container>
      <img src={img} alt={alt} width={48} height={48} />
      <ContainetText>
        <UserCont>{numberOfUser} </UserCont>
        <Title>{title} </Title>
        <ContentCountUser>
          {count}
          <TextMonth>{text}</TextMonth>
        </ContentCountUser>
      </ContainetText>
    </Container>
  );
}
