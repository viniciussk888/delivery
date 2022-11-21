import { Header } from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { Categories } from "../../../components/Categories";
import { Button } from "../../../components/Button";
import { TableModal } from "../../../components/TableModal";
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from "./styles";
import { useState } from "react";
import { Cart } from "../../../components/Cart";
import { CartItem } from "../../../types/CartItem";
import { Company } from "../../../types/Company";
import { ActivityIndicator } from "react-native";
import { Empty } from "../../../components/Icons/Empty";
import { Text } from "../../../components/Text";
import { CompanyList } from "../../../components/CompanyList";
import { companiesMock } from "../../../mocks/companies";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [companies] = useState<Company[]>(companiesMock);

  return (
    <>
      <Container>
        <Header />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        )}

        {/* se não estiver carregando */}
        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories isHome={true} />
            </CategoriesContainer>

            {companies.length > 0 ? (
              <MenuContainer>
                <CompanyList companies={companies} />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhuma empresa disponível
                </Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
