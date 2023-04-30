import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import RecordStore from "../components/RecordStore";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Volodymyr's Vinyls" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <RecordStore />
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
