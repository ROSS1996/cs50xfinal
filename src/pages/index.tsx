import { type NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
        <section className="flex flex-row flex-wrap gap-4 p-2">
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">Furia</h1>
            <li>Art</li>
            <li>KSCERATO</li>
            <li>Yuurih</li>
            <li>Drop</li>
            <li>Saffee</li>
          </ul>
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">Imperial</h1>
            <li>Fallen</li>
            <li>Boltz</li>
            <li>Chelo</li>
            <li>Jota</li>
            <li>VINI</li>
          </ul>
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">00Nation</h1>
            <li>Coldzera</li>
            <li>Taco</li>
            <li>Dumau</li>
            <li>Latto</li>
            <li>nqz</li>
          </ul>
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">MIBR</h1>
            <li>Exit</li>
            <li>Tuurtle</li>
            <li>HEN1</li>
            <li>Insani</li>
            <li>Brnzan</li>
          </ul>
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">PaiN</h1>
            <li>PKL</li>
            <li>Biguzera</li>
            <li>Hardzao</li>
            <li>Skullz</li>
            <li>Zevy</li>
          </ul>
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">Fluxo</h1>
            <li>Woody</li>
            <li>VSM</li>
            <li>Lucaozy</li>
            <li>Felps</li>
            <li>History</li>
          </ul>
          <ul className="flex flex-col gap-2 border p-2">
            <h1 className="font-bold text-center">O PLANO</h1>
            <li>KNG</li>
            <li>Shz</li>
            <li>Decenty</li>
            <li>Piria</li>
            <li>Lub</li>
          </ul>
        </section>
    </Layout>
  );
};

export default Home;
