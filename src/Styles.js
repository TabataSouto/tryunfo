import styled from 'styled-components';

const Container = styled.section`
  background: ${({ theme }) => theme.backgrounds.all};
  img {
    width: 400px;
  }
`;

const ContainerForm = styled.section`
  display: flex;
  height: 100vh;
`;

const Form = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-basis: 50%;
`;

const Card = styled.div`
  background: url('https://www.zelda.com/assets/img/about/header-about.jpg');
  flex-basis: 50%;
`;

const Styles = {
  Container,
  ContainerForm,
  Form,
  Card,
};

export default Styles;
